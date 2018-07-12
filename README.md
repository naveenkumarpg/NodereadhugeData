# static-webpack-boilerplate

Boilerplate for practicing JavaScript with Static Web Pages

## How to start

### Step 1

<code>
    npm install
</code>

### Step 2

<code>
    webpack-dev-server
</code>

### Step 3

Access the page using

<code>
   http://localhost:8080/index.html
</code>




#How to export the excel to JSON.

Run the following command on CLI to create json.
<code>
    node csvtojson.js
</code>


above command will read the CSV from the "/public/csv/Crimes.csv" path and converts csv to the json.

extracted json will be placed under "/public/json/data.json" folder. Which will be refered for rendering the graph.
