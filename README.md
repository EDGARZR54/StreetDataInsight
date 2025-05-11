# StreetData Insight
[![121132Artboard 2](https://github.com/EDGARZR54/StreetData-Insight/assets/114836515/de67caa2-a486-4f98-bd1e-d09db6b35e37)](https://edgarzr54.github.io/StreetData-Insight/)

When planning an urban-architectural intervention in public space, it is essential to have a solid understanding of the environment in which it is located, in order to fully appreciate its relationship with the city or the surrounding landscape. This study presents a methodology based on the acquisition and processing of geospatial data to digitally reconstruct urban profiles, with the aim of analyzing and planning public space.

The plugin uses the Google API "Street View Static" in combination with the GH Python Remote plugin for Grasshopper

Computing platforms/Operating Systems:
[![Rhinoceros](https://img.shields.io/badge/Rhino-7-000000?logo=rhinoceros&logoColor=white&labelColor=000000&color=ED1C24)](https://www.rhino3d.com/)
[![Grasshopper](https://img.shields.io/badge/Grasshopper%203D-548F3F.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAxNCI%2BPGRlZnM%2BPHN0eWxlPi5ie2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM%2BPHBhdGggY2xhc3M9ImIiIGQ9Ik05LjEzLDMuOTNjLS4wMi0uMDYtLjA1LS4xMS0uMDQtLjE3LDAtLjA2LC4wNC0uMTIsLjA2LS4xNywuMDUsLjA0LC4xMiwuMDcsLjE0LC4xMiwuMDIsLjA2LDAsLjEzLDAsLjIsMCwuMDIsLjAyLC4wMywuMDMsLjA1LC4wMS0uMDEsLjAzLS4wMiwuMDMtLjA0LC4wNC0uMTQsLjE1LS4xNiwuMjgtLjE0LC4xMSwuMDIsLjE0LS4wNCwuMTQtLjE0LS4wNS0uNjYtLjEtMS4zMi0uMTQtMS45OCwwLS4wNCwwLS4wOCwuMDEtLjEyLC4wNCwuMDIsLjEsLjA0LC4xMSwuMDcsLjA0LC4wOCwuMDcsLjE3LC4wNywuMjUsLjAzLC41NywuMDYsMS4xMywuMDksMS43LDAsLjAzLDAsLjA3LDAsLjEsLjAxLC4wNywuMDMsLjEzLC4wNCwuMiwuMDUtLjA0LC4xMS0uMDgsLjE1LS4xMywuMzktLjQzLC45LS42OSwxLjQ0LS44NywuMDUtLjAyLC4xMSwuMDIsLjE2LC4wMi0uMDQsLjA0LS4wNywuMDktLjEyLC4xMS0uNDgsLjItLjk0LC40NS0xLjM0LC43OXEtLjIxLC4xOC0uMDksLjQyYy4xNCwuMjksLjEsLjQxLS4xOSwuNTUtLjEzLC4wNy0uMTUsLjE4LS4wMywuMjcsLjA1LC4wNCwuMTEsLjA3LC4xNiwuMDksLjM3LC4xMywuNzUsLjA3LDEuMTIsMCwuMS0uMDIsLjE3LS4wOSwuMjYsMCwuMDIsLjAzLC4wNiwuMDgsLjA1LC4xLS4wMiwuMDMtLjA3LC4wNy0uMTEsLjA3LS4xNi0uMDItLjI3LC4wMy0uMzYsLjE3LS4wOCwuMTItLjIyLC4wOC0uMzQsLjA1LS4yMi0uMDYtLjQzLS4xMy0uNjUtLjItLjA2LS4wMi0uMTItLjAyLS4xOC0uMDItLjI2LDAtLjM2LC4xMS0uMzUsLjM3LC4wMiwuNSwuMDUsMSwuMDgsMS41LDAsLjA1LC4wMywuMSwuMDYsLjE0LC4wNSwuMDcsLjEyLC4xMywuMTgsLjIsLjMsLjMzLC42LC42NywuOSwxLjAxLC4wNCwuMDUsLjA0LC4xNCwuMDYsLjIxLS4wNy0uMDItLjE2LS4wMi0uMjEtLjA3LS4xMi0uMTEtLjIyLS4yNC0uMzMtLjM2LS4yMi0uMjUtLjQzLS40OS0uNjUtLjc0LS4wOS0uMTEtLjItLjIxLS4yNy0uMzMtLjEtLjE2LS4xMS0uMzMtLjA1LS41MSwuMDQtLjEzLC4wNS0uMjcsLjA2LS40LDAtLjA1LS4wNi0uMTItLjEtLjEzLS4wNCwwLS4xLC4wNC0uMTQsLjA4LS4wNCwuMDUtLjA2LC4xMS0uMDgsLjE2LS4yOSwuNjEtLjcyLDEuMDktMS4yOSwxLjQ1LS4zMSwuMTktLjU5LC40MS0uODgsLjYzLS4wNiwuMDUtLjEsLjE0LS4xMywuMjItLjA0LC4xMy0uMTQsLjIxLS4yNiwuMjMtLjE1LC4wMi0uMiwuMTEtLjI2LC4yMy0uMjksLjYtLjU4LDEuMTktLjg3LDEuNzktLjEsLjIxLS4xOSwuNDItLjMsLjYyLS4wNSwuMDgtLjE1LC4xMy0uMjEsLjIxLS4xMiwuMTctLjIzLC4zNC0uMzQsLjUxLS4wMywuMDQtLjA1LC4xLS4wOCwuMTEtLjA3LC4wMy0uMTUsLjA0LS4yMiwuMDYsLjAyLS4wNiwuMDItLjEzLC4wNS0uMTgsLjE1LS4yMywuMzEtLjQ1LC40Ni0uNjgsLjQ3LS43MSwuODEtMS41LDEuMTktMi4yNiwuMS0uMjEsLjE5LS40MywuMzEtLjYyLC4wNi0uMSwuMTctLjE5LC4yOC0uMjYsLjE3LS4xMywuMzctLjIzLC41My0uMzcsLjMxLS4yOCwuNi0uNTgsLjkxLS44NiwuMTQtLjEzLC4zMS0uMjIsLjQ2LS4zNCwuMDMtLjAyLC4wMy0uMDgsLjA1LS4xMi0uMDMsLjAyLS4wNywuMDMtLjEsLjA1LS4zOSwuMjYtLjc3LC41Mi0xLjE2LC43Ny0uMjcsLjE3LS41NywuMjQtLjg4LC4xOS0uMi0uMDMtLjI3LS4xNi0uMTMtLjI4LC4yMy0uMTksLjI4LS40NywuNDMtLjcsLjE5LS4yOSwuNDItLjU1LC42NC0uODIsLjAyLS4wMywuMDUtLjA2LC4wNy0uMDktLjA0LDAtLjA4LS4wMy0uMTEtLjAyLS40OSwuMDEtLjk3LC4wMy0xLjQ2LC4wNS0uMzUsLjAyLS42OSwuMDQtMS4wNCwuMDgtLjA2LDAtLjEzLC4wNC0uMTgsLjA4LS4zNCwuMjYtLjY3LC41My0xLjAxLC44LS4wNSwuMDQtLjExLC4wOC0uMTYsLjEzLS4xMywuMTQtLjI4LC4xOS0uNDYsLjE3LS4xNy0uMDEtLjM0LS4wMi0uNTEtLjA0LS4wMywwLS4wNS0uMDMtLjA4LS4wNSwuMDItLjAzLC4wNS0uMDYsLjA4LS4wOCwuMDEsMCwuMDQsMCwuMDYsMCwuNSwuMTMsLjgzLS4yLDEuMi0uNDUsLjMxLS4yMSwuNTktLjQ0LC44Mi0uNzQsLjA5LS4xMiwuMjQtLjE1LC4zOS0uMTUsLjUsMCwxLC4wNSwxLjQ5LS4wNywuNDItLjExLC44NS0uMTMsMS4yOC0uMTIsLjA2LDAsLjE0LS4wMywuMTgtLjA3LC4xNS0uMTUsLjI5LS4zMSwuNDQtLjQ1LC4yMS0uMTksLjQzLS4zOCwuNjQtLjU3LC4wNC0uMDQsLjA4LS4xMSwuMDctLjE2LDAtLjA5LS4wNi0uMTgtLjA4LS4yNy0uMDEtLjA2LDAtLjEyLDAtLjE4LC4wNywuMDEsLjE0LC4wMiwuMiwuMDUsLjAzLC4wMSwuMDUsLjA2LC4wOCwuMDloMFoiLz48L3N2Zz4%3D&logoColor=white&labelColor=548F3F)](https://www.grasshopper3d.com/)

Software code languages, tools, and services used:
[![Python](https://img.shields.io/badge/Python-2.7-14354C.svg?logo=python&logoColor=white&labelColor=14354C&color=FFD43B)](https://www.python.org/download/releases/2.7/)
[![Google Cloud](https://img.shields.io/badge/GoogleCloud-4285F4?logo=google-cloud&logoColor=white)](https://developers.google.com/maps/documentation/streetview/overview)
[![Street View Download 360](https://badgen.net/badge/Street%20View%20Download%20360/4.0.17/FDC900)](https://svd360.istreetview.com/)
[![Adobe Photoshop](https://img.shields.io/badge/Adobe%20Photoshop-027797?logo=Adobe-Photoshop&logoColor=white)](https://www.adobe.com/mx/products/photoshop.html)

Compilation requirements, operating environments & dependencies:
[![Microsoft Windows](https://img.shields.io/badge/Microsoft%20Windows-10-0078D7?logo=windows10&logoColor=white)](https://www.microsoft.com/es-mx/windows)
[![Miniconda3](https://img.shields.io/badge/Miniconda%203-3CAA47?logo=anaconda&logoColor=white)](https://docs.conda.io/en/latest/miniconda.html)
[![GH Python Remote](https://badgen.net/badge/GH%20Python%20Remote/1.4.6/2EA44F)](https://github.com/pilcru/ghpythonremote)

Libraries:
[![NumPy](https://badgen.net/badge/NumPy/1.16.6/FF9100)](https://numpy.org/doc/stable/)
[![Pandas](https://badgen.net/badge/Pandas/0.24.2/FF2E63)](https://pandas.pydata.org/)
[![OSMnx](https://badgen.net/badge/OSMnx/0.8.2/2E71FF)](https://osmnx.readthedocs.io/en/stable/)
[![Shapely](https://badgen.net/badge/Shapely/1.6.4/00B0FF)](https://shapely.readthedocs.io/en/stable/manual.html)
[![Pillow](https://badgen.net/badge/Pillow/6.2.1/FF4081)](https://pillow.readthedocs.io/en/stable/)
[![ImageIO 2.6.1](https://badgen.net/badge/ImageIO/2.6.1/blue)](https://imageio.readthedocs.io/en/stable/)
[![OpenCV](https://badgen.net/badge/OpenCV/4.2.0.32/FF6E00)](https://opencv.org/)
[![Piexif](https://badgen.net/badge/Piexif/1.1.3/FFC300)](https://piexif.readthedocs.io/en/latest/)
[![fractions](https://badgen.net/badge/fractions/2.2.0/AA00FF)](https://docs.python.org/3/library/fractions.html)
[![PyWin32](https://badgen.net/badge/PyWin32/228/FF5722)](https://mhammond.github.io/pywin32/)


************
# Installation
![Ribbon](https://github.com/EDGARZR54/StreetData-Insight/assets/114836515/3d5029e4-2adf-4498-98fd-f51976ea0476)
Requires a Python 2.7 installation, Compatible with Windows and Rhino 7.

1. Activate Conda Environment:
   Use the following command to activate the "rhinoremote" environment:
```
conda activate rhinoremote
```
2. Clone the Repository:
   Clone the repository from the provided GitHub URL using the following command:
```
git clone https://github.com/EDGARZR54/StreetData-Insight.git
```
3. Navigate to the Repository Directory:
   Change your working directory to the cloned repository folder:
```
cd StreetData-Insight
```
4. Install Dependencies:
   Inside the repository directory, install the required dependencies using the requirements.txt file:
```
pip install -r requirements.txt
```
5. Download the latest version of [the StreetData Insight plugin on Food4Rhino](https://www.food4rhino.com/en/app/street-data-insight?lang=es)
and copy the file StreetData_Insight.ghpy to the Grasshopper Libraries folder (*%APPDATA%\Grasshopper\Libraries*).

    [![StreetData-Insight](https://img.shields.io/badge/StreetData%20Insight-0.1-000000.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAxNCI%2BPGRlZnM%2BPHN0eWxlPi5ie2ZpbGw6IzQyODVmNDt9LmN7ZmlsbDojZmZjMTBhO30uZHtmaWxsOiMxYTFhMWE7fTwvc3R5bGU%2BPC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNNywxLjc1aDUuMjVWMy44M2wtLjg3LS41MS0uODcsLjUxdjEuMDFsLS44Ny0uNTEtLjg3LC41MXYxLjAxbC0uODctLjUxLS44NywuNTF2MS4wMWwtLjg4LS41MS0uODcsLjVoMHYxLjAxbC0uODctLjUtLjg3LC41MXYtMi42MmMwLTEuOTMsMS41Ny0zLjUsMy41LTMuNVoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTEyLjI1LDExLjM3aDBjMCwuNDgtLjM5LC44OC0uODgsLjg4SDEuNzVWMi42MmMwLS40OCwuMzktLjg3LC44Ny0uODdoMFYxMS4zN0gxMi4yNVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTQuMzcsNy4zN3YzLjEzaC0uODd2LTIuNjJsLjg3LS41MVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTcuODcsNS4zNXYzLjkxaC0xLjc1bC0uODctLjUxaDEuNzV2LTIuOWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNOS42Miw0LjM0djQuNDFoLS44N3YtMy45MWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNNi4xMiw2LjM2djIuMzloLS44N3YtMS44OWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNOC43NSw4Ljc1djEuNzVoLS44N3YtMS4yNWwuODctLjVaIi8%2BPHBhdGggY2xhc3M9ImQiIGQ9Ik01LjI1LDguNzV2MS43NWgtLjg3di0xLjI0bC44Ny0uNVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTExLjM3LDMuMzN2NS45M2gtMS43NWwtLjg3LS41aDEuNzVWMy44M2wuODctLjUxWiIvPjwvc3ZnPg%3D%3D&logoColor=white&labelColor=white)](https://github.com/EDGARZR54/StreetData-Insight)
-------------------------------------
# Basic workflow:
![Definición_SV2](https://github.com/EDGZR5429/Street-Data-Insight/assets/114836515/14da7486-ab3b-4fd7-afc9-977c6b8167db)
Initially, a georeferenced route is obtained, which is interpolated into segments to make queries through the "Street View Static" API in order to obtain available panoramas. Next, orientation parameters are calculated, and thumbnails of facades, as well as equirectangular panoramas, are obtained. After preprocessing steps involving image projection, distortion correction, and homography, they are combined into a unified urban profile, providing a valuable tool for spatial understanding and informed decision-making regarding public space.

-------------------------------------
# Citation Information
An article about the ......... is available on ........ If the ....... helped you in your research, please cite:

    @inproceedings{python-control2021,
    title={The Python Control Systems Library (python-control)},
    author={Fuller, Sawyer and Greiner, Ben and Moore, Jason and
            Murray, Richard and van Paassen, Ren{\'e} and Yorke, Rory},
    booktitle={60th IEEE Conference on Decision and Control (CDC)},
    pages={4875--4881},
    year={2021},
    organization={IEEE}
    
or the GitHub site: https://github.com/EDGARZR54/StreetData-Insight

-------------------------------------
# Library References

Numpy: Harris, C.R., Millman, K.J., van der Walt, S.J. et al. Array programming with NumPy. Nature 585, 357–362 (2020). DOI: 10.1038/s41586-020-2649-2.

Pandas: McKinney, W., & others. (2010). Data structures for statistical computing in python. In Proceedings of the 9th Python in Science Conference (Vol. 445, pp. 51–56).

OSMnx: Boeing, G. 2017. OSMnx: New Methods for Acquiring, Constructing, Analyzing, and Visualizing Complex Street Networks. Computers, Environment and Urban Systems 65, 126-139.

Shapely: Gillies, S., & others. (2007). Shapely: manipulation and analysis of geometric objects. Retrieved from "https://github.com/Toblerity/Shapely"

Pillow: Clark, A. (2015). Pillow (PIL Fork) Documentation. readthedocs. Retrieved from https://buildmedia.readthedocs.org/media/pdf/pillow/latest/pillow.pdf

ImageIO: Almar Klein, Sebastian Wallkötter, Steven Silvester, Anthony Tanbakuchi, actions-user, Paul Müller, Juan Nunez-Iglesias, Mark Harfouche, Dennis, Antony Lee, Matt McCormick, lschr, OrganicIrradiation, Arash Rai, Ariel Ladegaard, Tim D. Smith, Hugo van Kemenade, Ghislain Vaillant, jackwalker64, … Graham Inggs. (2023). imageio/imageio: v2.31.1 (v2.31.1). Zenodo. https://doi.org/10.5281/zenodo.8025955

OpenCV: Bradski, G. (2000). The OpenCV Library. Dr. Dobb&#x27;s Journal of Software Tools.

Gh-python-remote: 

Piexif: 

fractions: 

PyWin32: 
