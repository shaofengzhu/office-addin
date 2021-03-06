# Hello World Office Addin

## Introduction
There are some templates for office-addin, such as VS tempalte or YO Office, and those template or tool make it easy to create an office-addin. But those tool and template generate too many files and a developer may get lost. In this tutorial, we would like to build a very simple Office-Addin using simple code editor. You could Visual Studio Code as code editor. The goal of this tutorial is to show that an office addin actually only need two files:

1. An HTML page. It contains UI and logic. Let's name it as taskpane.html
2. A manifest XML. It tells Office app how to display some ribbon button and launch the HTML page. Let's name it as manifest.xml

When you walk though this tutorial, you will notice that the most difficult part is the manifest.xml.

We also show you how to add custom function support to the addin.

## Create a folder and two files.
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

Now, you could open web browser and navigate to http://localhost:8080/taskpane.html page to make sure your page works.

### Test your addin
Now, we could launch the Excel, create an empty workbook. Then click the ribbon "Insert" -> "Addins" -> "My Addins", you will see your addin "Hello World" there. Click on it, you will see a taskpane opened.

### Start to invoke an API.
Let's add a button in the html page. When the button is clicked, we will write some data to the Excel range.

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

## Add custom function
To add custom function support, we need to add three more files.
1. A JavaScript file that contains logic for custom functions. Let's name it as functions.js
2. A JSON file that describe the custom function, such as function name and description, parameter name and description.
3. A HTML page that reference the functions.js, it will be used when Office use WebView to execute custom functions

Also, we need to update the manifest to tell office that the addin contains custom functions.

### functions.js
```javascript
CustomFunctions.associate('MYFUN', function(a, b) {
    return a + b + 10;
});
```

### functions.json
```json
{
    "functions":[
        {
            "id": "MYFUN",
            "parameters": [
                {
                    "name": "first"
                },
                {
                    "name": "second"
                }
            ]
        }
    ]
}
```

### functions.html
```html
<html>
    <head>
        <script src="https://appsforoffice.microsoft.com/lib/1.1/hosted/custom-functions-runtime.js"></script>
        <script src="functions.js"></script>
    </head>
    <body>
    </body>
</html>
```

### Manifest.xml change
We need to add
```xml
            	<AllFormFactors>
					<ExtensionPoint xsi:type="CustomFunctions">
						<Script>
							<SourceLocation resid="OEP.UDF.Js" />
						</Script>
						<Page>
							<SourceLocation resid="OEP.UDF.Html"/>
						</Page>
						<Metadata>
							<SourceLocation resid="OEP.UDF.Json" />
						</Metadata>
						<Namespace resid="OEP.UDF.Namespace" />
					</ExtensionPoint>
				</AllFormFactors>
```
```xml
				<bt:Url id="OEP.UDF.Json" DefaultValue="http://localhost:8080/functions.json" />
				<bt:Url id="OEP.UDF.Js" DefaultValue="http://localhost:8080/functions.js" />
				<bt:Url id="OEP.UDF.Html" DefaultValue="http://localhost:8080/functions.html" />
```
```xml
                <bt:String id="OEP.UDF.Namespace" DefaultValue="CONTOSO" />            
```

### Connect dots
When an addin is installed, the manifest tells Excel that there is custom function. Excel will read the metadata JSON file and find out that there is a function, whose ID is 'MYFUN'. Excel will also load the JavaScript file.

When a user type in '=CONTOSO.MYFUN(1,2)' in the cell. Excel will try to find the function associated with 'MYFUN'. As there is CustomFunctions.associate('MYFUN') in the JavaScript code, Excel will invoke the corresponding JavaScript function.

### The complete manifest.xml
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
            	<AllFormFactors>
					<ExtensionPoint xsi:type="CustomFunctions">
						<Script>
							<SourceLocation resid="OEP.UDF.Js" />
						</Script>
						<Page>
							<SourceLocation resid="OEP.UDF.Html"/>
						</Page>
						<Metadata>
							<SourceLocation resid="OEP.UDF.Json" />
						</Metadata>
						<Namespace resid="OEP.UDF.Namespace" />
					</ExtensionPoint>
				</AllFormFactors>

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
				<bt:Url id="OEP.UDF.Json" DefaultValue="http://localhost:8080/functions.json" />
				<bt:Url id="OEP.UDF.Js" DefaultValue="http://localhost:8080/functions.js" />
				<bt:Url id="OEP.UDF.Html" DefaultValue="http://localhost:8080/functions.html" />
			</bt:Urls>
			<bt:ShortStrings>
				<bt:String id="OEP.UDF.Namespace" DefaultValue="CONTOSO" />            
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

## Conclusion
For a simple office addin, we need at least two files
1. an HTML page that will be displayed and run JavaScript code
2. A manifest.xml that will be used to tell office where is the html page.

To add custom function to the addin, we need to add three more files
1. A Javasript file that contains the custom function logic
2. A JSON file that describe the custom function metadata
3. A HTML page that reference the functions.js if Excel will execute custom function using web view.


