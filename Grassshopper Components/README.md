# Documentation
<p align="center">
  <img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/e1bf6e60-1fdd-4504-972d-809f339c4380" alt="Animation_0" width="1000">
</p>

## Subcategories
- [GeoData](#geodata)
- [StreetData](#streetdata)
- [GeoMetrical](#geometrical)
- [StreetView](#streetview)
- [Utilities](#utilities)
- [Image Processing](#image-processing)
- [CloudPoint (Upcoming)](#cloudpoint_upcoming)

## GeoData
### Geocode Requester
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/90b31b10-dabc-41ea-b9b5-c40c2b789a72" alt="Geocode Requester" width="250">
</p>
Performs a geocoding request using the Google Maps Places API to interpret geographical coordinates of places and establishments from text queries.

### Input
| Name    | Description                                                                 | Type   |
|---------|-----------------------------------------------------------------------------|--------|
| API_KEY | The API key for accessing the Google Maps Places API.                       | String |
| Site    | The text query for the place or establishment.                              | String |

### Output
| Name     | Description                                                              | Type           |
|----------|--------------------------------------------------------------------------|----------------|
| Location | A tuple containing the latitude and longitude coordinates of the location.| Tuple (Float)  |
### Excel | Batch Geocoder
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/6a062ba5-9f53-4d49-a20d-81488a34b57a" alt="Excel | Batch Geocoder" width="250">
</p>
Performs batch geocoding using the Google Maps Places API to interpret geographical coordinates of places and establishments from names or addresses in the specified Excel file.

**Inputs:**
| Name        | Description                                                         | Type   |
|-------------|---------------------------------------------------------------------|--------|
| API_KEY     | The API key for accessing the Google Maps Places API.               | String |
| File        | The path to the Excel file containing the data for geocoding.       | String |
| Worksheet   | The name of the worksheet within the Excel file.                   | String |
| Run         | A boolean value (True or False) to trigger the execution.           | Boolean|
| Column_Key  | The name of the column containing names or addresses for geocoding. | String |
| Encode      | The character encoding of the Excel file (e.g., 'utf-8', 'latin-1'). | String |

**Outputs:**
| Name      | Description                                                    | Type   |
|-----------|----------------------------------------------------------------|--------|
| NewFile   | The path to the generated CSV file with the new Dataframe.     | String |
| Time      | The time spent in the batch geocoding process.                 | String |
### Excel | File Launcher
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/cdb81107-90cc-40de-a26e-2a11375710f5" alt="Excel | File Launcher" width="125">
</p>
Opens an Excel file using the Microsoft Excel application.

**Inputs:**
| Name    | Description                                              | Type    |
|---------|----------------------------------------------------------|---------|
| File    | The path to the Excel file (e.g., .xlsx).                | String  |
| Run     | A boolean value (True or False) to trigger the execution.| Boolean |
### KMZ to Curve Decoder
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/e943c781-5593-4f15-be33-5416c8d4d663" alt="KMZ to Curve Decoder" width="250">
</p>
Decodes Google Earth KMZ files to extract traces and convert the semi-structured KML data into an ordered XML structure, then converts it into a DataFrame.

**Inputs:**
| Name            | Description                                        | Type   |
|-----------------|----------------------------------------------------|--------|
| File            | The path to the KMZ file.                         | String |

**Outputs:**
| Name            | Description                                        | Type           |
|-----------------|----------------------------------------------------|----------------|
| Location        | A tuple containing the latitude and longitude coordinates of the interpreted location. | Tuple (Float) |
| Route_Polyline  | The extracted route in polyline.                   | String         |
## StreetData
### OSMnx | Street Network Builder
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/d95d1806-31ae-4bae-8395-4ea2a4fb3abe" alt="OSMnx | Street Network Builder" width="250">
</p>
Builds a street network using OSMnx.

**Inputs:**
| Name            | Description                                                                      | Type    |
|-----------------|----------------------------------------------------------------------------------|---------|
| Run             | A boolean value (True or False) to trigger the street network construction.     | Boolean |
| Location        | The coordinates in the format "latitude,longitude" (e.g., "19.3557,-99.1900").  | String  |
| Distance        | The radius of the query from the Location point in meters (Default is 150).     | Integer |

**Outputs:**

| Name             | Description                                                             | Type           |
|------------------|-------------------------------------------------------------------------|----------------|
| Point_Coordinates| The location coordinates in tuple format (latitude, longitude).         | Tuple (Float) |
| Street_Names     | The list of street names within the specified radius.                  | List (String) |
| Street_Polylines | The data tree containing street polylines.                             | Data Tree     |
| Street_Vertices  | The data tree containing street network vertices.                      | Data Tree     |
| Time             | The time taken to build the street network.                            | String         |
### Street Selector
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/7d5d09ad-8506-42ef-8d61-a096f8fe5a5c" alt="Street Selector" width="300">
</p>
Selects a street and its corresponding polyline based on the structure provided by OSMnx.

**Inputs:**
| Name            | Description                                           | Type      |
|-----------------|-------------------------------------------------------|-----------|
| Street_Names    | The list of street names.                             | List      |
| Street_Polylines| The Datatree containing street polylines.             | Data Tree |
| Index           | The index of the street to be selected (Default is 0)| Integer   |

**Outputs:**
| Name            | Description                                      | Type    |
|-----------------|--------------------------------------------------|---------|
| Street_Name     | The name of the selected street.                | String  |
| Street_Polyline | The polyline of the selected street.            | String  |
### Street Selector
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/563a8035-a02f-47ad-9c28-128bf3352eac" alt="Street Selector" width="400">
</p>
This component provides the ability to obtain polyline segments between streets based on selected street names and geometry.

**Inputs:**
| Name                   | Description                                      | Type    |
|------------------------|--------------------------------------------------|---------|
| Main_Road_Name         | The name of the main road.                      | String  |
| Main_Road_Geometry     | The polyline of the main road.                  | String  |
| Concurrent_Name_A      | The name of the first concurrent road.          | String  |
| Concurrent_Geometry_A  | The polyline of the first concurrent road.      | String  |
| Concurrent_Name_B      | The name of the second concurrent road.         | String  |
| Concurrent_Geometry_B  | The polyline of the second concurrent road.     | String  |

**Outputs:**
| Name                   | Description                                     | Type    |
|------------------------|-------------------------------------------------|---------|
| Road_Segment           | The curve constructed based on the syntax.     | String  |
| Message                | The textual syntax message.                    | String  |
## GeoMetrical
### Haversine GeoDistance
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/66038d63-90a2-4a3d-9a98-f5f29704da3a" alt="Haversine GeoDistance" width="250">
</p>
Calculates the distance between two sets of geographic coordinates using the Haversine formula.

**Inputs:**
| Name          | Description                                          | Type         |
|---------------|------------------------------------------------------|--------------|
| Location_0    | The first set of geographic coordinates.            | Tuple(Float) |
| Location_1    | The second set of geographic coordinates.           | Tuple(Float) |

**Outputs:**
| Name          | Description                                      | Type         |
|---------------|--------------------------------------------------|--------------|
| Distance      | The calculated distance in meters.              | Float        |
### Rearrange Coordinates
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/b22e45d8-0aea-4f02-a3c2-1ac2d99cb517" alt="Rearrange Coordinates" width="200">
</p>
Rearranges the coordinate format between (latitude, longitude) for visualization in Rhino canvas (XYZ).

**Inputs:**
| Name       | Description                                      | Type           |
|------------|--------------------------------------------------|----------------|
| Point      | Point list.                                      | List (Tuple)  |

**Outputs:**
| Name       | Description                                      | Type           |
|------------|--------------------------------------------------|----------------|
| Location   | Converted Point list.                           | List (Tuple)  |
### Distance to Factor
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/eb1e8202-afed-423d-ba87-21a8cd515c3a" alt="Distance to Factor" width="200">
</p>
Converts a metric distance to a decimal factor.

**Inputs:**
| Name       | Description                                      | Type  |
|------------|--------------------------------------------------|-------|
| Distance   | The distance metric value.                      | Float |

**Outputs:**
| Name       | Description                                      | Type  |
|------------|--------------------------------------------------|-------|
| Factor     | The calculated factor value.                    | Float |
### Factor to Distance
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/d9923bed-aa51-4f61-8e61-a7800c54433c" alt="Factor to Distance" width="200">
</p>
Converts a decimal factor to a metric distance.

**Inputs:**
| Name       | Description                                      | Type  |
|------------|--------------------------------------------------|-------|
| Factor     | The decimal factor value.                       | Float |

**Outputs:**
| Name       | Description                                      | Type  |
|------------|--------------------------------------------------|-------|
| Distance   | The calculated distance value.                  | Float |
### Round Factor
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/7d711820-7e19-4ed7-aa06-c4f5aebdf90a" alt="Componentes_1" width="200">
</p>
Round a floating-point value.

**Inputs:**
| Name       | Description                          | Type  |
|------------|--------------------------------------|-------|
| Factor     | The decimal factor value.            | Float |

**Outputs:**
| Name       | Description                          | Type  |
|------------|--------------------------------------|-------|
| Round      | The rounded decimal factor value.    | Float |
## StreetView
### StreetView | Metadata Requester
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/f5efc3b0-edd5-47dd-81de-489a0f01bad3" alt="StreetView | Metadata Requester" width="200">
</p>
Performs a query to the Google Street View Static API using the provided API key and returns the keys of the response data.

**Inputs:**
| Name       | Description                                               | Type   |
|------------|-----------------------------------------------------------|--------|
| API_KEY    | The API key for accessing the Google Street View Static API.| String |

**Outputs:**
| Name       | Description                                               | Type   |
|------------|-----------------------------------------------------------|--------|
| out        | The keys of the response data from the API query.         | Keys   |
### StreetView | Thumbnail Requester
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/ff4bed96-eb5a-496a-b0b5-1fbfbc0012ae" alt="StreetView | Thumbnail Requester" width="250">
</p>
Queries Google Street View images using the Street View Static API.

**Inputs:**
| Name       | Description                                              | Type   |
|------------|----------------------------------------------------------|--------|
| API_KEY    | The API key for accessing the Google Street View Static API. | String |
| Width      | The width of the image in pixels (max. 640).            | Integer|
| Height     | The height of the image in pixels (max. 640).           | Integer|
| Location   | The location for which to retrieve the Street View image. Can be a text query or latitude and longitude coordinates.| String |
| FOV        | The horizontal field of view of the image in degrees, with a maximum allowed value of 120 (Default is 90). | Float  |
| Heading    | The compass heading of the camera in degrees, accepted values range from 0 to 360. | Float  |
| Pitch      | The pitch angle of the camera with respect to the Street View vehicle (Default is 0). | Float  |

**Outputs:**
| Name       | Description                                       | Type   |
|------------|---------------------------------------------------|--------|
| Copyright  | Copyright information for the image.             | String |
| Pano_ID    | The panorama ID of the image.                    | String |
| Status     | The status of the API request.                   | String |
| Date       | The date when the panorama was captured.         | String |
| IMG        | The URL link to the image.                       | String |
### StreetView | Thumbnail Path Visualizer
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/046e89bd-7595-4fb5-b30d-12fa96201f16)" alt="StreetView | Thumbnail Path Visualizer" width="250">
</p>
Visualizes the path of thumbnails.

**Inputs:**
| Name        | Description                                      | Type         |
|-------------|--------------------------------------------------|--------------|
| Index       | The index of the thumbnail to be selected (Default is 0). | Integer      |
| IMG_Path    | The Datatree of thumbnail image paths.          | Data Tree    |
| Point_List  | List of associated points for the thumbnails.   | List (Tuple) |
| Perp_Lines  | List of perpendicular lines.                    | List         |

**Outputs:**
| Name        | Description                                      | Type         |
|-------------|--------------------------------------------------|--------------|
| Frontal     | The path to the frontal thumbnail image.        | String       |
| Point       | The associated point for the thumbnail.         | Tuple (Float)|
| Next_Index  | The index of the next thumbnail.               | Integer      |
| Back        | The path to the back thumbnail image.           | String       |
| Vector      | List of perpendicular lines vectors.            | List         |
### StreetView | Nearest Panoramic Locator
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/dc40d74d-f5d6-47d5-843f-dce64d4844a5" alt="StreetView | Nearest Panoramic Locator" width="350">
</p>
Queries the Google Street View Static API using a personal API key to find the nearest available street-level panoramic coordinate for each point in the Point list.

**Inputs:**
| Name              | Description                                                           | Type          |
|-------------------|-----------------------------------------------------------------------|---------------|
| API_KEY           | The API key for accessing the Google Street View Static API.          | String        |
| Run               | A boolean value (True or False) to trigger the nearest panoramas query.| Boolean       |
| Point_List        | The list of points to query for nearest panoramas.                   | List (Tuple)  |

**Outputs:**
| Name                  | Description                                                             | Type            |
|-----------------------|-------------------------------------------------------------------------|-----------------|
| Panoramic_Coordinates | The list of nearest available panoramic coordinates for each point.   | List (Tuple)   |
| Time                  | The time spent for the panoramic consultation.                        | String          |
### StreetView | URL Builder
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/7da7f2e4-eb90-4247-832e-11815b7be9c5" alt="StreetView | URL Builder" width="200">
</p>
Constructs URL query strings for Google Street View.

**Inputs:**
| Name        | Description                                        | Type   |
|-------------|----------------------------------------------------|--------|
| API_KEY     | The API key for accessing the Google Street View Static API. | String |
| Location    | The location for which to retrieve the Street View image. Can be a text query or latitude and longitude coordinates. | String |
| Heading     | The compass heading of the camera in degrees, accepted values range from 0 to 360. | Float  |
| FOV         | The horizontal field of view of the image in degrees, with a maximum allowed value of 120 (Default is 90). | Float  |
| Pitch       | The pitch angle of the camera with respect to the Street View vehicle (Default is 0). | Float  |
| Width       | The width of the image in pixels (max. 640).     | Integer|
| Height      | The height of the image in pixels (max. 640).    | Integer|

**Outputs:**
| Name        | Description                                        | Type   |
|-------------|----------------------------------------------------|--------|
| URL         | List of constructed query URLs.                   | List   |
### StreetView | Image Handler
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/9df1a3d3-0c33-4a06-91f9-e7c2159ebbfa" alt="StreetView | Image Handler" width="300">
</p>
Performs web requests to download Street View images using the provided URLs.

**Inputs:**
| Name        | Description                                                               | Type         |
|-------------|---------------------------------------------------------------------------|--------------|
| URLs        | List of URLs to download images.                                          | List         |
| Run         | A boolean value (True or False) to trigger the image downloads.            | Boolean      |
| Path        | Directory to download images and build the CSV.                           | String       |
| Folder_Name | Name to assign to the created folder.                                     | String       |

**Outputs:**
| Name         | Description                                                              | Type         |
|--------------|--------------------------------------------------------------------------|--------------|
| Folder_Path  | The directory path of the created folder.                                | String       |
| File_CSV     | The path to the generated CSV file with the new Dataframe.               | String       |
| Time         | The time spent in image downloads.                                       | String       |

### StreetView | Panorama Downloader
<p align="center">
<img src="https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/cb32d27b-2c44-4849-900c-0bcb239dba43" alt="StreetView | Panorama Downloader" width="300">
</p>
Downloads equirectangular panoramic images from Google Street View using "Street View Download 360".

**Inputs:**
| Name        | Description                                             | Type   |
|-------------|---------------------------------------------------------|--------|
| SV_360      | Path to the "Street View Download 360" software directory. | String |
| Run         | A boolean value (True or False) to trigger the download of equirectangular panoramas. | Boolean|
| File_CSV    | Path to the CSV file containing unique panorama identifiers. | String |

**Outputs:**
| Name        | Description                                             | Type   |
|-------------|---------------------------------------------------------|--------|
| NewFile     | Path to the generated CSV file with the new Dataframe. | String |
| Time        | Time spent in downloading the panoramas.              | String |
## Utilities


<p align="center">
<img src="" alt="Componentes_1" width="400">
</p>


## Image Processing
<p align="center">
<img src="" alt="Componentes_1" width="400">
</p>



## CloudPoint_Upcoming
<p align="center">
<img src="" alt="Componentes_1" width="400">
</p>

