from asyncio import constants
import sqlite3
from turtle import title
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connections

@api_view(['GET', 'POST'])
def users_data(request):
    if request.method == 'GET':
        conn = sqlite3.connect('problem_sets.db')
        cur = conn.cursor()
        cur.execute("select * from user")
        get_user = cur.fetchall()
        my_list = []
        index = 1
        for t in get_user:
            my_list.append({'index': index, 'first_name': t[1], 'last_name': t[2],'email': t[3],'password':t[4]})
            index += 1
        # return Response({"message": "THIS IS ALL ABOUT GET!", "data": my_list})
        return Response(my_list)
    
    elif request.method == 'POST':
        
        new_data = request.data
       
        print(new_data)
        user_id = new_data["user_id"]
        first_name = new_data["first_name"]
        last_name = new_data["last_name"]
        email = new_data["email"]
        password = new_data["password"]
        
        try:
            sqliteConnection = sqlite3.connect('problem_sets.db')
            cursor = sqliteConnection.cursor()
            print("Connected to SQLite")

            sqlite_insert_with_param = """INSERT INTO user
                            (user_id,first_name,last_name,email,password) 
                            VALUES (?, ?, ?,?,?);"""

            data_tuple = (user_id,first_name,last_name,email,password)
            cursor.execute(sqlite_insert_with_param, data_tuple)
            sqliteConnection.commit()
            print("Python Variables inserted successfully into SqliteDb_developers table")

            cursor.close()

        except sqlite3.Error as error:
            print(error)
            return Response({"message": "Failed to insert Python variable into sqlite table" })
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The SQLite connection is closed")
        
        return Response({"message": "data added successfully"})
    
@api_view(['PUT','DELETE'])
def users_update_delete(request,id):
    if request.method == 'PUT':
        new_data = request.data
        
        print(new_data)
        user_id = new_data["user_id"]
        first_name = new_data["first_name"]
        last_name = new_data["last_name"]
        email = new_data["email"]
        password = new_data["password"]
        try:
            sqliteConnection = sqlite3.connect('problem_sets.db')
            cursor = sqliteConnection.cursor()
            print("Connected to SQLite")

            updatedata = """update user set user_id = ?, first_name = ?, last_name = ?, email = ?,password = ? where user_id =?"""

            # data_tuple = (user_id,first_name,last_name,email,password)
            cursor.execute(updatedata,(user_id,first_name,last_name,email,password,id))
            sqliteConnection.commit()
            print("Python Variables inserted successfully into SqliteDb_developers table")

            cursor.close()

        except sqlite3.Error as error:
            print(error)
            return Response({"message": "Failed to insert Python variable into sqlite table" })
        finally:
            if (sqliteConnection):
                sqliteConnection.close()
                print("The SQLite connection is closed")
        
        return Response({"message": "data added successfully"})
    
    # ===================================== login =================================

# @api_view(['POST'])  
# def login(request):
#     if request.method == 'POST':
          
    
    
    
    
        
     


