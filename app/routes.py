from app import app 
from flask import Flask, render_template, request, jsonify
import pandas as pd
import plotly.graph_objs as go
import os



@app.route('/')
def home():
    return render_template('index.html',title='Home')

@app.route('/points_table')
def points_table():
    return render_template('points_table.html',title='Points Table')


if __name__ == '__main__':
    app.run(debug=True)