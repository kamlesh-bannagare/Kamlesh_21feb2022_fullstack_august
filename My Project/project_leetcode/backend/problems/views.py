from asyncio import constants
import sqlite3
from turtle import title
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connections

@api_view(['GET', 'POST'])
def problem(request):
    if request.method == 'GET':
        conn = sqlite3.connect('problem_sets.db')
        cur = conn.cursor()
        cur.execute("select * from problem")
        get_problem = cur.fetchall()
        my_list = []
        index = 1
        for t in get_problem:
            my_list.append({'index': index, 'title': t[0], 'status_id': t[1],'solution': t[2],'acceptance':t[3],'difficulty_id':t[4],'frequency':t[5],'description':t[6],'example':t[7],'constraint':t[8],'user_id':t[9],'tag_id':t[10],'company':t[11],'Featured_question':t[12]})
            index += 1
        # return Response({"message": "THIS IS ALL ABOUT GET!", "data": my_list})
        return Response(my_list)
    
    elif request.method == 'POST':
        
        new_data = request.data
       
        print(new_data)
        # problem_id= new_data["problem_id"]
        title = new_data["title"]
        status_id = new_data["status_id"]
        solution = new_data["solution"]
        acceptance = new_data["acceptance"]
        difficulty_id = new_data["difficulty_id"]
        frequency = new_data["frequency"]
        description = new_data["description"]
        example = new_data["example"]
        constraint = new_data["constraint"]
        user_id = new_data["user_id"]
        tag_id = new_data["tag_id"]
        company = new_data["company"]
        featured_question = new_data["Featured_question"]
        
        try:
            sqliteConnection = sqlite3.connect('problem_sets.db')
            cursor = sqliteConnection.cursor()
            print("Connected to SQLite")

            sqlite_insert_with_param = """INSERT INTO problem
                            (title,status_id,solution,acceptance,difficulty_id,frequency,description,example,constraints,user_id,tag_id,company,Featured_question) 
                            VALUES ( ?, ?,?,?,?,?,?,?,?,?,?,?,?);"""

            data_tuple = (title,status_id,solution,acceptance,difficulty_id,frequency,description,example,constraint,user_id,tag_id,company,featured_question)
            cursor.execute(sqlite_insert_with_param, data_tuple)
            sqliteConnection.commit()
            print("Python Variables inserted successfully into SqliteDb_developers table")

            cursor.close()

        except sqlite3.Error as error:
            return Response({"message": "Failed to insert Python variable into sqlite table"})
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The SQLite connection is closed")
        
        return Response({"message": "data added successfully"})
    
@api_view(['GET', 'PUT','DELETE'])
def problem_details(request,id): 
    id=str(id)
    if request.method == 'GET':
        conn = sqlite3.connect('problem_sets.db')
        cur = conn.cursor()
        cur.execute("select rowid,* from problem where rowid=?",(id,))
        get_problem_value = cur.fetchone()
        print(type(get_problem_value))
        get_problem_key = ('index', 'title', 'status_id','solution','acceptance','difficulty_id','frequency','description','example','constraint','user_id','tag_id','company','Featured_question')
        if len(get_problem_value) == len(get_problem_key):
            problem_res=dict(zip(get_problem_key,get_problem_value))
            print(problem_res)
            return Response(problem_res)
            
        
        # print("get problem",type(get_problem))
        
        
        # my_list = []
        # for t in get_problem:
        #     print("t",t)
        #     my_list.append({'index': t[0], 'title': t[1], 'status_id': t[2],'solution': t[3],'acceptance':t[4],'difficulty_id':t[5],'frequency':t[6],'description':t[7],'example':t[8],'constraint':t[9],'user_id':t[10],'tag_id':t[11],'company':t[12],'Featured_question':t[13]})
            
        # return Response({"message": "THIS IS ALL ABOUT GET!", "data": my_list})
        
            
        
        
       
    
     


# try:
#         sqliteConnection = sqlite3.connect('SQLite_Python.db')
#         cursor = sqliteConnection.cursor()
#         print("Connected to SQLite")

#         sqlite_insert_with_param = """INSERT INTO SqliteDb_developers
#                           (id, name, email, joining_date, salary) 
#                           VALUES (?, ?, ?, ?, ?);"""

#         data_tuple = (id, name, email, joinDate, salary)
#         cursor.execute(sqlite_insert_with_param, data_tuple)
#         sqliteConnection.commit()
#         print("Python Variables inserted successfully into SqliteDb_developers table")

#         cursor.close()

#     except sqlite3.Error as error:
#         print("Failed to insert Python variable into sqlite table", error)
#     finally:
#         if (sqliteConnection):
#             sqliteConnection.close()
#             print("The SQLite connection is closed")



# Create your views here.
# @api_view(['GET', 'POST'])
# def hello_world(request):
#     if request.method == 'GET':
        
#         conn = sqlite3.connect('problem_sets.db')
#         cur = conn.cursor()
#         cur.execute("select * from user")
#         get_user = cur.fetchall()
#         my_list = []
#         index = 1
#         for t in get_user:
#             my_list.append({'index': index, 'first_name': t[0], 'last_name': t[1],'email': t[2],'password':t[3]})
#             index += 1
#         # return Response({"message": "THIS IS ALL ABOUT GET!", "data": my_list})
#         return Response(my_list)
    
#     elif request.method == 'POST':
#         new_data = request.data
       
#         first_name = new_data["first_name"]
#         last_name = new_data["last_name"]
#         email = new_data["email"]
#         password = new_data["password"]
        
#         conn = sqlite3.connect('problem_sets.db')
#         cur = conn.cursor()
#         cur.execute("INSERT INTO user () VALUES ( first_name, last_name, email, password )");
#         cur.commit()
#         cur.close()
        
#         return Response({"message": "data added successfully"})
#     return Response({"message": "Hello, world!"})
