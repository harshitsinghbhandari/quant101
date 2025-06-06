function NotFound() {
    return (
      <div className="page 404">
        <h1>404</h1>
        {
            <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>404 Not Found</title>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    body {\n      margin: 0;\n      padding: 0;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      background-color: #f8f9fa;\n      color: #333;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n      text-align: center;\n      flex-direction: column;\n    }\n\n    h1 {\n      font-size: 6rem;\n      margin: 0;\n    }\n\n    p {\n      font-size: 1.5rem;\n      margin: 1rem 0 2rem;\n    }\n\n    a {\n      text-decoration: none;\n      color: #007bff;\n      font-size: 1.2rem;\n    }\n\n    a:hover {\n      text-decoration: underline;\n    }\n  "
              }}
            />
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <a href="/">Go back home</a>
          </>          
        }
      </div>
    );
  }
  
  export default NotFound;
  