# Street Data Insight
[![121132Artboard 2](https://github.com/EDGARZR54/StreetDataInsight/assets/114836515/de67caa2-a486-4f98-bd1e-d09db6b35e37)](https://edgarzr54.github.io/StreetDataInsight/)

When planning an urban-architectural intervention in public space, it is essential to have a solid understanding of the environment in which it is located, in order to fully appreciate its relationship with the city or the surrounding landscape. This study presents a methodology based on the acquisition and processing of geospatial data to digitally reconstruct urban profiles, with the aim of analyzing and planning public space.

Street Data Insight is a plugin composed of 7 categories and more than 70 components, designed as an experimental toolset for urban planners and architects. It provides custom tools to reconstruct, visualize, and process street environments through geolocation, spatial orientation, and georeferenced operations on street networks and urban blocks, leveraging panoramic imagery, depth data, and computer vision techniques within the Rhino and Grasshopper ecosystem.

The plugin incorporates advanced features uncommon in typical Grasshopper extensions, including a custom graphical user interface, animated icons, GPU-accelerated processes, refined UX details, and live preview capabilities directly within component capsules, enabling a more interactive and responsive workflow.

[![StreetDataInsight](https://img.shields.io/badge/StreetData%20Insight-1.0.1-000000.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAxNCI%2BPGRlZnM%2BPHN0eWxlPi5ie2ZpbGw6IzQyODVmNDt9LmN7ZmlsbDojZmZjMTBhO30uZHtmaWxsOiMxYTFhMWE7fTwvc3R5bGU%2BPC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNNywxLjc1aDUuMjVWMy44M2wtLjg3LS41MS0uODcsLjUxdjEuMDFsLS44Ny0uNTEtLjg3LC41MXYxLjAxbC0uODctLjUxLS44NywuNTF2MS4wMWwtLjg4LS41MS0uODcsLjVoMHYxLjAxbC0uODctLjUtLjg3LC41MXYtMi42MmMwLTEuOTMsMS41Ny0zLjUsMy41LTMuNVoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTEyLjI1LDExLjM3aDBjMCwuNDgtLjM5LC44OC0uODgsLjg4SDEuNzVWMi42MmMwLS40OCwuMzktLjg3LC44Ny0uODdoMFYxMS4zN0gxMi4yNVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTQuMzcsNy4zN3YzLjEzaC0uODd2LTIuNjJsLjg3LS41MVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTcuODcsNS4zNXYzLjkxaC0xLjc1bC0uODctLjUxaDEuNzV2LTIuOWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNOS42Miw0LjM0djQuNDFoLS44N3YtMy45MWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNNi4xMiw2LjM2djIuMzloLS44N3YtMS44OWwuODctLjUxWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNOC43NSw4Ljc1djEuNzVoLS44N3YtMS4yNWwuODctLjVaIi8%2BPHBhdGggY2xhc3M9ImQiIGQ9Ik01LjI1LDguNzV2MS43NWgtLjg3di0xLjI0bC44Ny0uNVoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTExLjM3LDMuMzN2NS45M2gtMS43NWwtLjg3LS41aDEuNzVWMy44M2wuODctLjUxWiIvPjwvc3ZnPg%3D%3D&logoColor=white&labelColor=white)](https://www.food4rhino.com/en/app/street-data-insight)
---

**Current code version:** v1.0  
**Permanent repository link:** https://github.com/EDGARZR54/StreetDataInsight  
**Project website:** https://edgarzr54.github.io/StreetDataInsight  
**Distribution page:** Food4Rhino & Package Manager  
**Publication:** https://www.food4rhino.com/en/app/street-data-insight  

---

**Operating systems & platforms:**  
[![Microsoft Windows](https://img.shields.io/badge/Microsoft%20Windows-10-0078D7?logo=windows10&logoColor=white)](https://www.microsoft.com/windows) [![Rhinoceros](https://img.shields.io/badge/Rhino-7-000000?logo=rhinoceros&logoColor=white&labelColor=000000&color=ED1C24)](https://www.rhino3d.com/) [![Grasshopper](https://img.shields.io/badge/Grasshopper%203D-548F3F.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAxNCI%2BPGRlZnM%2BPHN0eWxlPi5ie2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM%2BPHBhdGggY2xhc3M9ImIiIGQ9Ik05LjEzLDMuOTNjLS4wMi0uMDYtLjA1LS4xMS0uMDQtLjE3LDAtLjA2LC4wNC0uMTIsLjA2LS4xNywuMDUsLjA0LC4xMiwuMDcsLjE0LC4xMiwuMDIsLjA2LDAsLjEzLDAsLjIsMCwuMDIsLjAyLC4wMywuMDMsLjA1LC4wMS0uMDEsLjAzLS4wMiwuMDMtLjA0LC4wNC0uMTQsLjE1LS4xNiwuMjgtLjE0LC4xMSwuMDIsLjE0LS4wNCwuMTQtLjE0LS4wNS0uNjYtLjEtMS4zMi0uMTQtMS45OCwwLS4wNCwwLS4wOCwuMDEtLjEyLC4wNCwuMDIsLjEsLjA0LC4xMSwuMDcsLjA0LC4wOCwuMDcsLjE3LC4wNywuMjUsLjAzLC41NywuMDYsMS4xMywuMDksMS43LDAsLjAzLDAsLjA3LDAsLjEsLjAxLC4wNywuMDMsLjEzLC4wNCwuMiwuMDUtLjA0LC4xMS0uMDgsLjE1LS4xMywuMzktLjQzLC45LS42OSwxLjQ0LS44NywuMDUtLjAyLC4xMSwuMDIsLjE2LC4wMi0uMDQsLjA0LS4wNywuMDktLjEyLC4xMS0uNDgsLjItLjk0LC40NS0xLjM0LC43OXEtLjIxLC4xOC0uMDksLjQyYy4xNCwuMjksLjEsLjQxLS4xOSwuNTUtLjEzLC4wNy0uMTUsLjE4LS4wMywuMjcsLjA1LC4wNCwuMTEsLjA3LC4xNiwuMDksLjM3LC4xMywuNzUsLjA3LDEuMTIsMCwuMS0uMDIsLjE3LS4wOSwuMjYsMCwuMDIsLjAzLC4wNiwuMDgsLjA1LC4xLS4wMiwuMDMtLjA3LC4wNy0uMTEsLjA3LS4xNi0uMDItLjI3LC4wMy0uMzYsLjE3LS4wOCwuMTItLjIyLC4wOC0uMzQsLjA1LS4yMi0uMDYtLjQzLS4xMy0uNjUtLjItLjA2LS4wMi0uMTItLjAyLS4xOC0uMDItLjI2LDAtLjM2LC4xMS0uMzUsLjM3LC4wMiwuNSwuMDUsMSwuMDgsMS41LDAsLjA1LC4wMywuMSwuMDYsLjE0LC4wNSwuMDcsLjEyLC4xMywuMTgsLjIsLjMsLjMzLC42LC42NywuOSwxLjAxLC4wNCwuMDUsLjA0LC4xNCwuMDYsLjIxLS4wNy0uMDItLjE2LS4wMi0uMjEtLjA3LS4xMi0uMTEtLjIyLS4yNC0uMzMtLjM2LS4yMi0uMjUtLjQzLS40OS0uNjUtLjc0LS4wOS0uMTEtLjItLjIxLS4yNy0uMzMtLjEtLjE2LS4xMS0uMzMtLjA1LS41MSwuMDQtLjEzLC4wNS0uMjcsLjA2LS40LDAtLjA1LS4wNi0uMTItLjEtLjEzLS4wNCwwLS4xLC4wNC0uMTQsLjA4LS4wNCwuMDUtLjA2LC4xMS0uMDgsLjE2LS4yOSwuNjEtLjcyLDEuMDktMS4yOSwxLjQ1LS4zMSwuMTktLjU5LC40MS0uODgsLjYzLS4wNiwuMDUtLjEsLjE0LS4xMywuMjItLjA0LC4xMy0uMTQsLjIxLS4yNiwuMjMtLjE1LC4wMi0uMiwuMTEtLjI2LC4yMy0uMjksLjYtLjU4LDEuMTktLjg3LDEuNzktLjEsLjIxLS4xOSwuNDItLjMsLjYyLS4wNSwuMDgtLjE1LC4xMy0uMjEsLjIxLS4xMiwuMTctLjIzLC4zNC0uMzQsLjUxLS4wMywuMDQtLjA1LC4xLS4wOCwuMTEtLjA3LC4wMy0uMTUsLjA0LS4yMiwuMDYsLjAyLS4wNiwuMDItLjEzLC4wNS0uMTgsLjE1LS4yMywuMzEtLjQ1LC40Ni0uNjgsLjQ3LS43MSwuODEtMS41LDEuMTktMi4yNiwuMS0uMjEsLjE5LS40MywuMzEtLjYyLC4wNi0uMSwuMTctLjE5LC4yOC0uMjYsLjE3LS4xMywuMzctLjIzLC41My0uMzcsLjMxLS4yOCwuNi0uNTgsLjkxLS44NiwuMTQtLjEzLC4zMS0uMjIsLjQ2LS4zNCwuMDMtLjAyLC4wMy0uMDgsLjA1LS4xMi0uMDMsLjAyLS4wNywuMDMtLjEsLjA1LS4zOSwuMjYtLjc3LC41Mi0xLjE2LC43Ny0uMjcsLjE3LS41NywuMjQtLjg4LC4xOS0uMi0uMDMtLjI3LS4xNi0uMTMtLjI4LC4yMy0uMTksLjI4LS40NywuNDMtLjcsLjE5LS4yOSwuNDItLjU1LC42NC0uODIsLjAyLS4wMywuMDUtLjA2LC4wNy0uMDktLjA0LDAtLjA4LS4wMy0uMTEtLjAyLS40OSwuMDEtLjk3LC4wMy0xLjQ2LC4wNS0uMzUsLjAyLS42OSwuMDQtMS4wNCwuMDgtLjA2LDAtLjEzLC4wNC0uMTgsLjA4LS4zNCwuMjYtLjY3LC41My0xLjAxLC44LS4wNSwuMDQtLjExLC4wOC0uMTYsLjEzLS4xMywuMTQtLjI4LC4xOS0uNDYsLjE3LS4xNy0uMDEtLjM0LS4wMi0uNTEtLjA0LS4wMywwLS4wNS0uMDMtLjA4LS4wNSwuMDItLjAzLC4wNS0uMDYsLjA4LS4wOCwuMDEsMCwuMDQsMCwuMDYsMCwuNSwuMTMsLjgzLS4yLDEuMi0uNDUsLjMxLS4yMSwuNTktLjQ0LC44Mi0uNzQsLjA5LS4xMiwuMjQtLjE1LC4zOS0uMTUsLjUsMCwxLC4wNSwxLjQ5LS4wNywuNDItLjExLC44NS0uMTMsMS4yOC0uMTIsLjA2LDAsLjE0LS4wMywuMTgtLjA3LC4xNS0uMTUsLjI5LS4zMSwuNDQtLjQ1LC4yMS0uMTksLjQzLS4zOCwuNjQtLjU3LC4wNC0uMDQsLjA4LS4xMSwuMDctLjE2LDAtLjA5LS4wNi0uMTgtLjA4LS4yNy0uMDEtLjA2LDAtLjEyLDAtLjE4LC4wNywuMDEsLjE0LC4wMiwuMiwuMDUsLjAzLC4wMSwuMDUsLjA2LC4wOCwuMDloMFoiLz48L3N2Zz4%3D&logoColor=white&labelColor=548F3F)](https://www.grasshopper3d.com/)

**Programming languages:**  
[![Python](https://img.shields.io/badge/Python-2.7-14354C.svg?logo=python&logoColor=white&labelColor=14354C&color=FFD43B)](https://www.python.org/) [![C Sharp](https://img.shields.io/badge/C%23-.NET-512BD4?logo=dotnet&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/) [![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/)

**Development environments:**  
[![Miniconda](https://img.shields.io/badge/Miniconda%203-3CAA47?logo=anaconda&logoColor=white)](https://docs.conda.io/en/latest/miniconda.html) [![Visual Studio](https://img.shields.io/badge/Visual%20Studio-2022-5C2D91?logo=visualstudio&logoColor=white)](https://visualstudio.microsoft.com/) [![GH Python Remote](https://badgen.net/badge/GH%20Python%20Remote/1.4.6/2EA44F)](https://github.com/pilcru/ghpythonremote)

**Development tools & services:**  
[![GoogleCloud](https://img.shields.io/badge/GoogleCloud-4285F4?logo=google-cloud&logoColor=white)](https://developers.google.com/maps/documentation/streetview/overview) [![Street View Download 360](https://badgen.net/badge/Street%20View%20Download%20360/4.0.17/FDC900)](https://svd360.istreetview.com/) [![Adobe Photoshop](https://img.shields.io/badge/Adobe%20Photoshop-027797?logo=Adobe-Photoshop&logoColor=white)](https://www.adobe.com/mx/products/photoshop.html)

**Development libraries:**  
[![NumPy](https://badgen.net/badge/NumPy/1.16.6/FF9100)](https://numpy.org/doc/stable/) [![Pandas](https://badgen.net/badge/Pandas/0.24.2/FF2E63)](https://pandas.pydata.org/) [![OSMnx](https://badgen.net/badge/OSMnx/0.8.2/2E71FF)](https://osmnx.readthedocs.io/en/stable/) [![Shapely](https://badgen.net/badge/Shapely/1.6.4/00B0FF)](https://shapely.readthedocs.io/en/stable/manual.html) [![Pillow](https://badgen.net/badge/Pillow/6.2.1/FF4081)](https://pillow.readthedocs.io/en/stable/) [![ImageIO](https://badgen.net/badge/ImageIO/2.6.1/blue)](https://imageio.readthedocs.io/en/stable/) [![OpenCV](https://badgen.net/badge/OpenCV/4.2.0.32/FF6E00)](https://opencv.org/) [![Piexif](https://badgen.net/badge/Piexif/1.1.3/FFC300)](https://piexif.readthedocs.io/en/latest/) [![fractions](https://badgen.net/badge/fractions/2.2.0/AA00FF)](https://docs.python.org/3/library/fractions.html) [![PyWin32](https://badgen.net/badge/PyWin32/228/FF5722)](https://mhammond.github.io/pywin32/)

**Compilation requirements:**  
[![.NET Framework](https://img.shields.io/badge/.NET%20Framework-4.8-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/) [![RhinoCommon](https://img.shields.io/badge/RhinoCommon-SDK-000000)](https://developer.rhino3d.com/) [![Grasshopper SDK](https://img.shields.io/badge/Grasshopper-SDK-548F3F)](https://developer.rhino3d.com/) [![Visual Studio](https://img.shields.io/badge/Visual%20Studio-Required-5C2D91?logo=visualstudio&logoColor=white)](https://visualstudio.microsoft.com/)

**Runtime dependencies:**  
[![Magick.NET](https://img.shields.io/badge/Magick.NET-14.8.2-5C2D91)](https://github.com/dlemstra/Magick.NET) [![WebView2](https://img.shields.io/badge/WebView2-1.0.3485.44-0078D7?logo=microsoftedge&logoColor=white)](https://developer.microsoft.com/microsoft-edge/webview2/) [![Newtonsoft.Json](https://img.shields.io/badge/Newtonsoft.Json-13.0.4-000000)](https://www.newtonsoft.com/json) [![OpenCvSharp4](https://img.shields.io/badge/OpenCvSharp4-4.11.0-FF6E00)](https://github.com/shimat/opencvsharp) [![OpenCvSharp Runtime](https://img.shields.io/badge/OpenCvSharp4.runtime.win-4.11.0-FF6E00)](https://github.com/shimat/opencvsharp) [![OpenTK](https://img.shields.io/badge/OpenTK-3.3.3-4B0082)](https://opentk.net/) [![System.Net.Http](https://img.shields.io/badge/System.Net.Http-4.3.4-0078D7)](https://learn.microsoft.com/dotnet/api/system.net.http)

---

# Requirements

Windows 64x | Rhino 7 | Image processing software (Adobe Photoshop, Affinity or GIMP)

---

# Installation Instructions

1. Run the **PackageManager** command in **Rhino 7**  
2. Search for and install the latest version of the **Street Data Insight** plugin  
3. The plugin will be installed in:  
   *%APPDATA%\McNeel\Rhinoceros\packages\7.0\StreetDataInsight*  
4. Verify in *Windows Defender Firewall* that **Rhino 7** has permission for ***Private*** and ***Public*** networks  

---

# Development

Edgar Zambrano Rodríguez | [@EDGARZR54](https://discourse.mcneel.com/u/EDGARZR54) | [Food4Rhino](https://www.food4rhino.com/en/app/street-data-insight) | [Site](https://edgarzr54.github.io/StreetDataInsight/) | [Documentation](https://edgarzr54.github.io/StreetDataInsight/Tools/Tools.html)

---

# Basic Workflow

![Definición_SV2](https://github.com/EDGZR5429/Street-Data-Insight/assets/114836515/14da7486-ab3b-4fd7-afc9-977c6b8167db)

Initially, georeferenced locations or routes are obtained, and available panoramas are queried along with their metadata and equirectangular images. Orientation parameters are then calculated and leveling corrections are applied.

For urban profile generation, gnomonic projections are performed and image stitching (homography) is computed, integrating the results into a unified multi-perspective panorama.

For point cloud generation, depth maps are decoded, their leveling is corrected, and they are processed to obtain a simplified reconstruction of the environment.

---

# Acknowledgements

I would like to express my sincere thanks to the Laboratorio de Arquitectura + Diseño y Tecnología Experimental [(LATE)](https://www.late.mx/), and to all advisors, colleagues, friends, and family.  
This work was supported by UNAM-PAPIIT IT400424.

---

# Support

If you find Street Data Insight useful, you can support its development by [buying me a coffee](https://buymeacoffee.com/edgarzr54)

---

# Citation

Zambrano Rodríguez Edgar (2026).  
"Street Data Insight | A tool for assembling urban-architectural profiles through online panoramic images".  
UNAM, México.

---

# License

Apache License 2.0.

---

# Disclaimer

Street Data Insight is free toolset provided under the Apache License, Version 2.0.

Copyright (c) 2025 Edgar Zambrano Rodríguez | @EDGARZR54

You may use and redistribute this software in accordance with the terms of the Apache License, Version 2.0. A copy of the license is available at http://www.apache.org/licenses/LICENSE-2.0.

This software is provided "as is", without any warranties or guarantees of any kind, either express or implied, including but not limited to the warranties of merchantability or fitness for a particular purpose. The author shall not be held liable for any damages arising from the use of this software.
