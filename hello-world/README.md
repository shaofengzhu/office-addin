# Hello World Office Addin

## Introduction
There here are some tempaltes for office-addin, such as VS tempalte or YO Office, and those template or tool make it easy to create an office-addin. But those tool and template generate too many files and a developer may get lost. In this tutorial, we would like to build a very simple Office-Addin using simple code editor. You could Visual Studio Code as code editor.

An office addin actually only need two files
1. An HTML page. Let's name it as taskpane.html
2. A manifest XML. Let's name it as manifest.xml

When you walk though this tutorial, you will notice that the most difficult part is the manifest.xml.

### Create a folder
```console
mkdir hello-world
```

Open text editor and add two files. Taskpane.html and manifest.xml

### taskpane.html
```html
<html>
    <head>
        <script src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"></script>
    </head>
    <body>
        Hello World
    </body>
</html>
```

### manifest.xml
Access https://www.guidgenerator.com/online-guid-generator.aspx to generate a GUID. Please replace the GUID in the following manifest.xml with your own GUID
```xml
<?xml version="1.0" encoding="utf-8"?>
<OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:bt="http://schemas.microsoft.com/office/officeappbasictypes/1.0"
 xmlns:ov="http://schemas.microsoft.com/office/taskpaneappversionoverrides"
 xsi:type="TaskPaneApp">
	<Id>3c3423a2-173a-46e3-a6aa-af8b63a4eba5</Id>
	<Version>1.0.0.0</Version>
	<ProviderName>Microsoft Office Platform Team</ProviderName>
	<DefaultLocale>en-US</DefaultLocale>
	<DisplayName DefaultValue="Hello World" />
	<Description DefaultValue="Hello World" />
	<Hosts>
		<Host Name="Workbook" />
	</Hosts>
	<DefaultSettings>
		<SourceLocation DefaultValue="http://localhost:8080/taskpane.html"/>
	</DefaultSettings>
	<Permissions>ReadWriteDocument</Permissions>
	<VersionOverrides xmlns="http://schemas.microsoft.com/office/taskpaneappversionoverrides" xsi:type="VersionOverridesV1_0">
		<Hosts>
			<Host xsi:type="Workbook">
				<DesktopFormFactor>
				  	<!-- PrimaryCommandSurface is the main Office Ribbon. -->
				  	<ExtensionPoint xsi:type="PrimaryCommandSurface">
						<!-- Use OfficeTab to extend an existing Tab. Use CustomTab to create a new tab. -->
						<CustomTab id="OEP.TabHello">
							<!-- Ensure you provide a unique id for the group. Recommendation for any IDs is to namespace using your company name. -->
							<Group id="OEP.Group1">
								<!-- Label for your group. resid must point to a ShortString resource. -->
								<Label resid="OEP.Group1Label" />
								<!-- Icons. Required sizes 16,32,80, optional 20, 24, 40, 48, 64. Strongly recommended to provide all sizes for great UX. -->
								<!-- Use PNG icons. All URLs on the resources section must use HTTPS. -->
								<Icon>
									<bt:Image size="16" resid="OEP.tpicon_16x16" />
									<bt:Image size="32" resid="OEP.tpicon_32x32" />
									<bt:Image size="80" resid="OEP.tpicon_80x80" />
								</Icon>

								<!-- Control. It can be of type "Button" or "Menu". -->
								<Control xsi:type="Button" id="OEP.TaskpaneButton">
									<Label resid="OEP.TaskpaneButton.Label" />
									<Supertip>
										<!-- ToolTip title. resid must point to a ShortString resource. -->
										<Title resid="OEP.TaskpaneButton.Label" />
										<!-- ToolTip description. resid must point to a LongString resource. -->
										<Description resid="OEP.TaskpaneButton.Tooltip" />
									</Supertip>
									<Icon>
										<bt:Image size="16" resid="OEP.tpicon_16x16" />
										<bt:Image size="32" resid="OEP.tpicon_32x32" />
										<bt:Image size="80" resid="OEP.tpicon_80x80" />
									</Icon>

									<!-- This is what happens when the command is triggered (E.g. click on the Ribbon). Supported actions are ExecuteFunction or ShowTaskpane. -->
									<Action xsi:type="ShowTaskpane">
										<TaskpaneId>MainTaskpane</TaskpaneId>
										<!-- Provide a url resource id for the location that will be displayed on the task pane. -->
										<SourceLocation resid="OEP.Taskpane.Url" />
									</Action>
								</Control>
							</Group>
							<Label resid="OEP.HelloTab.Label" />
						</CustomTab>
				  	</ExtensionPoint>
				</DesktopFormFactor>
			</Host>
		</Hosts>
		<Resources>
			<bt:Images>
				<bt:Image id="OEP.tpicon_16x16" DefaultValue="http://localhost:8080/images/Button16x16.png" />
				<bt:Image id="OEP.tpicon_32x32" DefaultValue="http://localhost:8080/images/Button32x32.png" />
				<bt:Image id="OEP.tpicon_80x80" DefaultValue="http://localhost:8080/images/Button80x80.png" />
			</bt:Images>
			<bt:Urls>
				<bt:Url id="OEP.Taskpane.Url" DefaultValue="http://localhost:8080/taskpane.html" />
			</bt:Urls>
			<bt:ShortStrings>
				<bt:String id="OEP.TaskpaneButton.Label" DefaultValue="Hello" />
				<bt:String id="OEP.Group1Label" DefaultValue="Hello" />
				<bt:String id="OEP.GetStarted.Title" DefaultValue="Hello" />
	  			<bt:String id="OEP.HelloTab.Label" DefaultValue="Hello" />
			</bt:ShortStrings>
			<bt:LongStrings>
				<bt:String id="OEP.TaskpaneButton.Tooltip" DefaultValue="Click to show Hello Editor" />
			</bt:LongStrings>
		</Resources>
	</VersionOverrides>
</OfficeApp>
```


Now, let's also create another batch file that will install the manifest to dev catalog. Let's name it as registermanifest.bat and its content is
```bat
REG ADD HKCU\Software\Microsoft\Office\16.0\Wef\Developer /t REG_SZ /v ManifestHelloworld /d %~dp0manifest.xml /f
```

and run the batch file
```console
registermanifest.bat
```

### run web server
As we use HTML page, the HTML page should come from a web server.

If you have not installed NodeJs before, please install NodeJs from https://nodejs.org/

First, install http-server npm package. We only need to install it once.
```console
npm install -g http-server
```

Second, we could run the http server by
```console
cd hello-world
http-server
```

### Test your addin
Now, we could launch the Excel, create an empty workbook. Then click the ribbon "Insert" -> "Addins" -> "My Addins", you will see your addin "Hello World" there. Click on it, you will see a taskpane opened.

### Start to invoke an API.
Let's add a button in the html page. When the button is clicked, we will write to the Excel range.

```html
<html>
    <head>
        <script src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"></script>
        <script>
            Office.onReady(function(){

            });

            function updateRange() {
                Excel.run(function (context) {
                    let sheet = context.workbook.worksheets.getItem('Sheet1');
                    let range = sheet.getRange('A1:B2');
                    range.values = [['Hello', 'World'], [100, 200]];
                    return context.sync();
                });
            }
        </script>
    </head>
    <body>
        Hello World
        <input type="button" value="Update Range" onclick="updateRange()" />
    </body>
</html>
```


## Conclusion
For a simple office addin, we need at least two files
1. an HTML page that will be displayed and run JavaScript code
2. A manifest.xml that will be used to tell office where is the html page.

