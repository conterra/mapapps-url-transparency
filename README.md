# mapapps-url-transparency
This bundle passes the tranparency settings of layers via the URL. For all operational layers for which you can
change the opacity a URL extension will be generated. 
This way it is possible to pass an application with user-defined transparencies of layers. 

Installation Guide
------------------
**Requirement: map.apps 3.8.0**

To generate the URL with the layer transparency add the ```parametermanager``` bundle.

No special configuration needed. Just add the bundle to the app.json.

**Demo**

https://demos.conterra.de/mapapps/resources/apps/downloads_urltransparency 

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`