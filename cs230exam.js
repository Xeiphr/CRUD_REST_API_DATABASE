
var http = require("http"); // creating an API using http
var url = require("url"); // using url to extract the route (e.g. /, /api/user)
var querystring = require("querystring"); // this will contain the body of the POST request
var fs = require("fs"); // file handling to read the index.html served for / route
var port = 8000; // port the server with listen on

var server = http.createServer(); // create the server


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser1:hello1@cs230assignment.s6aauix.mongodb.net/?retryWrites=true&w=majority&appName=CS230Assignment"; //credentials for mongo

const client = new MongoClient(uri, { // creates mongoclient
  serverApi: 
  {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



  // Connect the client to the server	(optional starting in v4.7)
  client.connect();
  // Send a ping to confirm a successful connection
  client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");


const database = client.db("cs230exam") //creates a const that has access to the database i have created
const personaldetails = database.collection("personaldetails"); //creates a const to access the personaldetails collection
const contracts = database.collection("contracts"); //creates a const to access contracts collection


////////////////////////////////

//                                                  ****UNCOMMENT THIS TO HARDCODE STUFF INTO DATABASE!!!!****

// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Mr",
//   firstname: "John",
//   surname: "Doe",
//   mobile: "0837428193",
//   email: "johndoe@example.com",
//   addressline1: "123 Main Street",
//   addressline2: "Apt 5",
//   town: "Dublin",
//   country_city: "Dublin",
//   eircode: "D01 ABC1"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Ms",
//   firstname: "Jane",
//   surname: "Smith",
//   mobile: "0876543210",
//   email: "janesmith@example.com",
//   addressline1: "456 Elm Street",
//   addressline2: "Unit 10",
//   town: "Galway",
//   country_city: "Galway",
//   eircode: "H91 XYZ2"
// });


// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Mrs",
//   firstname: "Alice",
//   surname: "Johnson",
//   mobile: "0861234567",
//   email: "alice.johnson@example.com",
//   addressline1: "789 Oak Avenue",
//   addressline2: "",
//   town: "Cork",
//   country_city: "Cork",
//   eircode: "T12 DEF3"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Dr",
//   firstname: "Michael",
//   surname: "Brown",
//   mobile: "0899876543",
//   email: "michael.brown@example.com",
//   addressline1: "101 Pine Road",
//   addressline2: "Suite 3B",
//   town: "Limerick",
//   country_city: "Limerick",
//   eircode: "V94 GHI4"
// });

// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Mr",
//   firstname: "David",
//   surname: "Clark",
//   mobile: "0855555555",
//   email: "david.clark@example.com",
//   addressline1: "222 Cedar Lane",
//   addressline2: "",
//   town: "Waterford",
//   country_city: "Waterford",
//   eircode: "X91 JKL5"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Ms",
//   firstname: "Emily",
//   surname: "Taylor",
//   mobile: "0831111111",
//   email: "emily.taylor@example.com",
//   addressline1: "333 Birch Street",
//   addressline2: "",
//   town: "Drogheda",
//   country_city: "Louth",
//   eircode: "A92 MNO6"
// });

// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Mr",
//   firstname: "Robert",
//   surname: "Anderson",
//   mobile: "0867778888",
//   email: "robert.anderson@example.com",
//   addressline1: "444 Maple Avenue",
//   addressline2: "Unit 8",
//   town: "Sligo",
//   country_city: "Sligo",
//   eircode: "F91 PQR7"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Miss",
//   firstname: "Sophia",
//   surname: "Martinez",
//   mobile: "0878889999",
//   email: "sophia.martinez@example.com",
//   addressline1: "555 Walnut Street",
//   addressline2: "",
//   town: "Kilkenny",
//   country_city: "Kilkenny",
//   eircode: "R95 STU8"
// });

// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Mrs",
//   firstname: "Evelyn",
//   surname: "Adams",
//   mobile: "0851234567",
//   email: "evelyn.adams@example.com",
//   addressline1: "666 Oak Street",
//   addressline2: "Suite 15",
//   town: "Athlone",
//   country_city: "Westmeath",
//   eircode: "N37 VWX9"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Mr",
//   firstname: "Daniel",
//   surname: "Garcia",
//   mobile: "0839998888",
//   email: "daniel.garcia@example.com",
//   addressline1: "777 Elm Avenue",
//   addressline2: "",
//   town: "Wexford",
//   country_city: "Wexford",
//   eircode: "Y35 YZ10"
// });

// personaldetails.insertOne({
//   usertype: "Landlord",
//   dob: "12/06/02",
//   rentperm: "Yes",
//   contactperm: "Yes",
//   title: "Miss",
//   firstname: "Olivia",
//   surname: "Thomas",
//   mobile: "0864445555",
//   email: "olivia.thomas@example.com",
//   addressline1: "888 Pine Street",
//   addressline2: "",
//   town: "Ennis",
//   country_city: "Clare",
//   eircode: "V95 ABC11"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Mr",
//   firstname: "William",
//   surname: "Roberts",
//   mobile: "0857776666",
//   email: "william.roberts@example.com",
//   addressline1: "999 Cedar Avenue",
//   addressline2: "Apt 12",
//   town: "Dundalk",
//   country_city: "Louth",
//   eircode: "A91 DEF12"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Ms",
//   firstname: "Emma",
//   surname: "Wilson",
//   mobile: "0871234567",
//   email: "emma.wilson@example.com",
//   addressline1: "123 Maple Street",
//   addressline2: "",
//   town: "Mullingar",
//   country_city: "Westmeath",
//   eircode: "N91 XYZ13"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Mr",
//   firstname: "Liam",
//   surname: "Gonzalez",
//   mobile: "0834567890",
//   email: "liam.gonzalez@example.com",
//   addressline1: "456 Oak Avenue",
//   addressline2: "Unit 6",
//   town: "Navan",
//   country_city: "Meath",
//   eircode: "C15 ABC14"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Miss",
//   firstname: "Ava",
//   surname: "Lopez",
//   mobile: "0869876543",
//   email: "ava.lopez@example.com",
//   addressline1: "789 Pine Street",
//   addressline2: "",
//   town: "Drogheda",
//   country_city: "Louth",
//   eircode: "A92 XYZ15"
// });

// personaldetails.insertOne({
//   usertype: "Tenant",
//   title: "Mr",
//   firstname: "Noah",
//   surname: "Hernandez",
//   mobile: "0856543210",
//   email: "noah.hernandez@example.com",
//   addressline1: "101 Elm Avenue",
//   addressline2: "",
//   town: "Dundalk",
//   country_city: "Louth",
//   eircode: "A91 DEF16"
// });

// contracts.insertOne({
//   contractdate: "12/06/22",
//   propertyaddress: "32 Green Road",
//   tenantfirstname: "Bob",
//   tenantsurname: "Grey",
//   secondtenantsfirstname: "Thomas",
//   secondtenantssurname: "Joseph",
//   thirdtenantsfirstname: "Eri",
//   thirdtenantssurname: "Last",
//   landlordfirstname: "Freya",
//   landlordsurname: "Frost",
//   fee: "500",
//   doorno: "8",
//   contractlength: "Month",
//   propertytype: "Apartment",
// });

// contracts.insertOne({
//   contractdate: "08/03/20",
//   propertyaddress: "32 Red Road",
//   tenantfirstname: "Gary",
//   tenantsurname: "Bob",
//   secondtenantsfirstname: "",
//   secondtenantssurname: "",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Noona",
//   landlordsurname: "Prisila",
//   fee: "500",
//   doorno: "3",
//   contractlength: "Year",
//   propertytype: "Semi-Detached",

// });
// contracts.insertOne({
//   contractdate: "20/04/24",
//   propertyaddress: "23 Pink Street",
//   tenantfirstname: "Derry",
//   tenantsurname: "Red",
//   secondtenantsfirstname: "Frieza",
//   secondtenantssurname: "Cooler",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Noona",
//   landlordsurname: "Prisila",
//   fee: "900",
//   doorno: "6",
//   contractlength: "Permanent",
//   propertytype: "Detached",

// });

// contracts.insertOne({
//   contractdate: "15/09/22",
//   propertyaddress: "44 Look Terrace",
//   tenantfirstname: "Yorka",
//   tenantsurname: "Yorkie",
//   secondtenantsfirstname: "",
//   secondtenantssurname: "",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Freide",
//   landlordsurname: "Reeth",
//   fee: "2000",
//   doorno: "12",
//   contractlength: "Year",
//   propertytype: "Apartment",

// });

// //
// contracts.insertOne({
//   contractdate: "01/12/02",
//   propertyaddress: "99 Garek Lane",
//   tenantfirstname: "John",
//   tenantsurname: "Doe",
//   secondtenantsfirstname: "Smithy",
//   secondtenantssurname: "John",
//   thirdtenantsfirstname: "Frog",
//   thirdtenantssurname: "Turtle",
//   landlordfirstname: "Zebra",
//   landlordsurname: "Ape",
//   fee: "300",
//   doorno: "16",
//   contractlength: "Year",
//   propertytype: "Apartment",
// });

// contracts.insertOne({
//   contractdate: "19/01/01",
//   propertyaddress: "San Francisco Village",
//   tenantfirstname: "Sans",
//   tenantsurname: "Frisco",
//   secondtenantsfirstname: "",
//   secondtenantssurname: "",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Hands",
//   landlordsurname: "Drisco",
//   fee: "0",
//   doorno: "7",
//   contractlength: "Permanent",
//   propertytype: "Bungalow",

// });
// contracts.insertOne({
//   contractdate: "19/04/24",
//   propertyaddress: "25 Pink Street",
//   tenantfirstname: "Perry",
//   tenantsurname: "Ted",
//   secondtenantsfirstname: "Rieza",
//   secondtenantssurname: "Ler",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Ona",
//   landlordsurname: "Sila",
//   fee: "90",
//   doorno: "4",
//   contractlength: "Year",
//   propertytype: "Semi-Detached",

// });

// contracts.insertOne({
//   contractdate: "15/09/22",
//   propertyaddress: "48 Fluke Terrace",
//   tenantfirstname: "Porka",
//   tenantsurname: "Froakie",
//   secondtenantsfirstname: "",
//   secondtenantssurname: "",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Ide",
//   landlordsurname: "Eth",
//   fee: "3000",
//   doorno: "33",
//   contractlength: "Year",
//   propertytype: "Apartment",
// });

// contracts.insertOne({
//   contractdate: "19/11/97",
//   propertyaddress: "48 Garda Lane",
//   tenantfirstname: "Larksa",
//   tenantsurname: "Reef",
//   secondtenantsfirstname: "",
//   secondtenantssurname: "",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Jorsh",
//   landlordsurname: "Jad",
//   fee: "1250",
//   doorno: "45",
//   contractlength: "Year",
//   propertytype: "Detached",
// });

// contracts.insertOne({
//   contractdate: "24/01/99",
//   propertyaddress: "49 Viras Lane",
//   tenantfirstname: "Kafka",
//   tenantsurname: "Raf",
//   secondtenantsfirstname: "AA",
//   secondtenantssurname: "AA",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Jorsh",
//   landlordsurname: "Jad",
//   fee: "1700",
//   doorno: "87",
//   contractlength: "Month",
//   propertytype: "Semi-Detached",
// });

// contracts.insertOne({
//   contractdate: "20/20/20",
//   propertyaddress: "90 Leek Lane",
//   tenantfirstname: "Goku",
//   tenantsurname: "Kakarot",
//   secondtenantsfirstname: "Gohan",
//   secondtenantssurname: "Son",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "Vegeta",
//   landlordsurname: "Vegetable",
//   fee: "12050",
//   doorno: "450",
//   contractlength: "Month",
//   propertytype: "Apartment",
// });

// contracts.insertOne({
//   contractdate: "11/08/87",
//   propertyaddress: "76 Little Road",
//   tenantfirstname: "Freska",
//   tenantsurname: "Reef",
//   secondtenantsfirstname: "FAWF",
//   secondtenantssurname: "FAWF",
//   thirdtenantsfirstname: "",
//   thirdtenantssurname: "",
//   landlordfirstname: "he",
//   landlordsurname: "he",
//   fee: "1250",
//   doorno: "45",
//   contractlength: "Year",
//   propertytype: "Detached",
// });


/////////////////

// listen for requests from clients
server.on("request", function (request, response) {
  var currentRoute = url.format(request.url); // get the route (/ or /api/user)
  var currentMethod = request.method; // get the HTTP request type (POST - Create; GET - Retrieve)
  var requestBody = ""; // will contain the extracted POST data later
  // determine the route (/ or /api/user)
  switch (currentRoute) {
    //
    // If no API call made then the default route is / so
    // just return the default index.html file to the user.
    // This contains the forms, etc. for making the CRUD
    // requests (only Create and Retrieve implemented)
    //
    case "/":
      fs.readFile(__dirname + "/cs230exam.html", function (err, data) {
        // get the file and add to data
        var headers = {
          // set the appropriate headers
          "Content-Type": "text/html",
        };
        response.writeHead(200, headers);
        response.end(data); // return the data (index.html)
      }); // as part of the response


      break;
    
    //
    // Handle the requests from client made using the route /api/user
    // These come via AJAX embedded in the earlier served cs230exam.html
    // There will be a single route (/api/user) but two HTTP request methods
    // POST (for Create) and GET (for Retrieve)
    //
    case "/api/user":
      // Handle a POST request;  the user is sending user data via AJAX!
      // This is the CRUD (C)reate request. These data need to be
      // extracted from the POST request and saved to the database!

      
      if (currentMethod === "POST") {
        // read the body of the POST request
        request.on("data", function (chunk) {
          requestBody += chunk.toString();
        });

        // determine the POST request Content-type (and log to console)
        // Either: (i)  application/x-www-form-urlencoded or (ii) application/json
        const { headers } = request;
        let ctype = headers["content-type"];
        console.log("RECEIVED Content-Type: " + ctype + "\n");

        // finished reading the body of the request
        request.on("end", function () {
          var userData = "";
          // saving the user from the body to the database
          if (ctype.match(new RegExp('^application/x-www-form-urlencoded'))) {
            userData = querystring.parse(requestBody);
          } else 
          {
            userData = JSON.parse(requestBody);
          }

          console.log(
            "USER DATA RECEIVED: \n\n" +
              JSON.stringify(userData, null, 2) +
              "\n"
          );
          
          //inserts into personalinformation
        if(userData.key == "create") //if the key is create (sent in when user hits send user data in the create user section), then itll do the C from CRUD 
      {
        if(userData.title && userData.title != "Other" && userData.usertype == "Landlord") //if the user hasnt selected it will run this
        {
          personaldetails.insertOne({
            usertype: userData.usertype,
            dob: userData.dob,
            rentperm: userData.rentperm,
            contactperm: userData.contactperm,
            title: userData.title,
            firstname: userData.firstname,
            surname: userData.surname,
            mobile: userData.mobile,
            email: userData.email,
            addressline1: userData.address1,
            addressline2: userData.address2,
            town: userData.town,
            country_city: userData.cc,
            eircode: userData.eircode
          });
        }
        if(userData.other && userData.usertype == "Landlord") //if there is an input in the other input field it will insert that as the title instead
        {
          personaldetails.insertOne({
            usertype: userData.usertype,
            dob: userData.dob,
            rentperm: userData.rentperm,
            contactperm: userData.contactperm,
            title: userData.other,
            firstname: userData.firstname,
            surname: userData.surname,
            mobile: userData.mobile,
            email: userData.email,
            addressline1: userData.address1,
            addressline2: userData.address2,
            town: userData.town,
            country_city: userData.cc,
            eircode: userData.eircode
          });
        }

        if(userData.title && userData.title != "Other" && userData.usertype == "Tenant") //if the user hasnt selected it will run this
        {
          personaldetails.insertOne({
            usertype: userData.usertype,
            title: userData.title,
            firstname: userData.firstname,
            surname: userData.surname,
            mobile: userData.mobile,
            email: userData.email,
            addressline1: userData.address1,
            addressline2: userData.address2,
            town: userData.town,
            country_city: userData.cc,
            eircode: userData.eircode
          });
        }

        if(userData.other && userData.usertype == "Tenant") //if there is an input in the other input field it will insert that as the title instead
        {
          personaldetails.insertOne({
            usertype: userData.usertype,
            title: userData.other,
            firstname: userData.firstname,
            surname: userData.surname,
            mobile: userData.mobile,
            email: userData.email,
            addressline1: userData.address1,
            addressline2: userData.address2,
            town: userData.town,
            country_city: userData.cc,
            eircode: userData.eircode
          });
        }
        
          // respond to the user with confirmation message
          var headers = {
            "Content-Type": "text/plain",
          };
          response.writeHead(200, headers);
          response.end(
            "User (" +
              userData.firstname +
              " " +
              userData.surname +
              ") data added to the Database!"
          );
        }

        
        else if(userData.key1 == "retrieve") //if the user hits get user database sends the retrieve key over and does the RETRIEVE method of CRUD
        {
          async function fetchData() {
            try {
              // finds documents in the collections that match a query
              var result = await personaldetails.find({_id:userData.getfirstname}).toArray();
              //var result1 = await homeaddress.find({_id:userData.getfirstname}).toArray();
              //var result2 = await shippingaddress.find({_id:userData.getfirstname}).toArray();
              var combinedresult = {result};
              console.log("Documents fetched successfully:", combinedresult);
              return combinedresult;
            } catch (err) {
              console.error("Error fetching documents:", err);
              throw err;
            }
          }
          
          // call the function above and use result variable
          fetchData()
            .then(result => {
              response.writeHead(200, headers);
              response.end(JSON.stringify(result)); //returns to html
            })
            .catch(err => {
              response.writeHead(500, headers);
              response.end(JSON.stringify({ error: "Internal Server Error" }));
            });

        }
        else if(userData.key2 == "del") // if user hits delete user data button, sends key "del" over
        {
          personaldetails.deleteOne({firstname:userData.delfirstname, surname:userData.delsurname, mobile:userData.delmobile,email:userData.delemail }); //deletes

        }
      else if(userData.key3 == "update") //if the user selects update user data button sends over a key with "update" and starts this method
        {
          if(userData.uptitle) // all these if statements check if the user has inputted something in a box and if they have updates that part of the database
          {
            personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{title:userData.uptitle}});
            
          }
          if(userData.upmobile)
          {
            personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{mobile:userData.upmobile}});
          }
          if(userData.upemail)
          {
            personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{email:userData.upemail}});

          }
          if(userData.upaddress1)
            {
              personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{addressline1:userData.upaddress1}});
            }
          if(userData.upaddress2)
            {
              personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{addressline2:userData.upaddress2}});
            }
          if(userData.uptown)
            {
              personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{town:userData.uptown}});
            }
          if(userData.upcc)
          {
            personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{country_city:userData.upcc}});
          }
          if(userData.upeircode)
            {
              personaldetails.updateOne({firstname:userData.upfirstname,surname:userData.upsurname},{$set:{eircode:userData.upeircode}});
            }
          
          
          
          //       //reason for all the seperate if statements is it lets the user update only one thing if they wish.
         }
         else if(userData.key4 == "thecc") //contract create statement
         {
          
          if(userData.proptype!="Other")
            contracts.insertOne({
              contractdate: userData.contractdate,
              propertyaddress: userData.propaddress,
              tenantfirstname: userData.tenant1f,
              tenantsurname: userData.tenant1s,
              secondtenantsfirstname: userData.tenant2f,
              secondtenantssurname: userData.tenant2s,
              thirdtenantsfirstname: userData.tenant3f,
              thirdtenantssurname: userData.tenant3s,
              landlordfirstname: userData.landlordf,
              landlordsurname: userData.landlords,
              fee: userData.fee,
              doorno: userData.doorno,
              contractlength: userData.contractlength,
              propertytype: userData.proptype,
            });

              if(userData.otherPropInput)
                contracts.insertOne({
                  contractdate: userData.contractdate,
                  propertyaddress: userData.propaddress,
                  tenantfirstname: userData.tenant1f,
                  tenantsurname: userData.tenant1s,
                  secondtenantsfirstname: userData.tenant2f,
                  secondtenantssurname: userData.tenant2s,
                  thirdtenantsfirstname: userData.tenant3f,
                  thirdtenantssurname: userData.tenant3s,
                  landlordfirstname: userData.landlordf,
                  landlordsurname: userData.landlords,
                  fee: userData.fee,
                  doorno: userData.doorno,
                  contractlength: userData.contractlength,
                  propertytype: userData.otherPropInput,
                });
         }
         else if(userData.key5 == "getcc") //retrieves contract info
        {
          async function fetchData() {
            try {
              // finds documents in the collections that match a query
              var result = await contracts.find({propertyaddress:userData.getpropaddress}).toArray();
              var combinedresult = {result};
              console.log("Documents fetched successfully:", combinedresult);
              return combinedresult;
            } catch (err) {
              console.error("Error fetching documents:", err);
              throw err;
            }
          }
          
          // call the function above and use result variable
          fetchData()
            .then(result => {
              response.writeHead(200, headers);
              response.end(JSON.stringify(result)); //returns to html
            })
            .catch(err => {
              response.writeHead(500, headers);
              response.end(JSON.stringify({ error: "Internal Server Error" }));
            });
        }
        else if(userData.key6 == "updatecc") //updates contract info depending on current / old property address
        {
          if(userData.uptenantno == 1)
          {
            contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{secondtenantsfirstname:""}});
            contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{secondtenantssurname:""}});
            contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantsfirstname:""}});
            contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantssurname:""}});

          }
          if(userData.uptenantno == 2)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantsfirstname:""}});
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantssurname:""}});
            }
          if(userData.upcontractdate)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{contractdate:userData.upcontractdate}});
            }
            if(userData.uptenant1f)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{tenantfirstname:userData.uptenant1f}});
            }
            if(userData.uptenant1s)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{tenantfirstname:userData.uptenant1s}});
            }
            if(userData.uptenant2f)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{secondtenantsfirstname:userData.uptenant2f}});
            }
            if(userData.uptenant2s)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{secondtenantssurname:userData.uptenant2s}});
            }
            if(userData.uptenant3f)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantsfirstname:userData.uptenant3f}});
            }
            if(userData.uptenant3s)
            {
              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{thirdtenantssurname:userData.uptenant3s}});
            }
            if(userData.uplandlordf)
              {
                contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{landlordfirstname:userData.uplandlordf}});
              }
              if(userData.uplandlords)
                {
                  contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{landlordsurname:userData.uplandlords}});
                }
                if(userData.upfee)
                  {
                    contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{fee:userData.upfee}});
                  }
                  if(userData.updoorno)
                    {
                      contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{doorno:userData.updoorno}});
                    }
                    if(userData.updoorno)
                      {
                        contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{doorno:userData.updoorno}});
                      }
                      if(userData.upcontractlength)
                        {
                          contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{contractlength:userData.upcontractlength}});
                        }
                      if(userData.upproptype != "Other")
                        {
                          contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{propertytype:userData.upproptype}});
                        }
                        if(userData.upproptype == "Other")
                          {
                            contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{propertytype:userData.upotherPropInput}});
                          }
                          if(userData.uppropaddress)
                            {
                              contracts.updateOne({propertyaddress:userData.oldpropaddress},{$set:{propertyaddress:userData.uppropaddress}});
                            }
        }
        else if(userData.key7 == "ccdel")
          {
            contracts.deleteOne({propertyaddress:userData.delpropaddress}); //deletes the contract based on property address
          }

        });
      }
      
      break;
  }
});
// Set up the HTTP server and listen on port 8000
server.listen(port, function () {
  console.log("\nAJAX - API - Database");
  console.log("CS230 Exam - Daniel Hannon");
  console.log("AJAX (HTTP) API server running on port: " + port + "\n");
});
//Within my database I have created 5 collections, one to hold personal details,
//one to hold home address, shipping address, phones in the store and orders from customers
//each contain what was required within the assignments, to make sure that the users personal details can be edited and linked between tables
//i made _id be the email of the user so there was a way to tell whos data was whos. 

//Sample route is localhost:8000/api/user/