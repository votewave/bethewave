from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/dashboard-dec10')
def dashboard1():
    return render_template('dashboard-dec10.html')

@app.route('/dashboard-dec17')
def dashboard2():
    return render_template('dashboard-dec17.html')

@app.route('/dashboard-jan03')
def dashboard3():
    return render_template('dashboard-jan03.html')


if __name__ == "__main__":
    app.run()
