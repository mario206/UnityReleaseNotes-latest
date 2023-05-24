# UnityReleaseNotes
**Last update time : 2023-05-24 10:06:24 Powered By ChatGPT**

|-|-|-|-|-|
|:-:|:-:|:-:|:-:|:-:|
| [2022.2](./merge_htmls/2022.2.html) | [2022.1](./merge_htmls/2022.1.html) | [2021.3](./merge_htmls/2021.3.html) | [2021.2](./merge_htmls/2021.2.html) | [2021.1](./merge_htmls/2021.1.html) | [2020.3](./merge_htmls/2020.3.html) | [2020.2](./merge_htmls/2020.2.html) | [2020.1](./merge_htmls/2020.1.html) |
| [2019.4](./merge_htmls/2019.4.html) | [2019.3](./merge_htmls/2019.3.html) | [2019.2](./merge_htmls/2019.2.html) | [2019.1](./merge_htmls/2019.1.html) | [2018.4](./merge_htmls/2018.4.html) | [2018.3](./merge_htmls/2018.3.html) | [2018.2](./merge_htmls/2018.2.html) | [2018.1](./merge_htmls/2018.1.html) |
| [2017.4](./merge_htmls/2017.4.html) | [2017.3](./merge_htmls/2017.3.html) | [2017.2](./merge_htmls/2017.2.html) | [2017.1](./merge_htmls/2017.1.html) | [5.6](./merge_htmls/5.6.html) | [5.5](./merge_htmls/5.5.html) | [5.4](./merge_htmls/5.4.html) | [5.3](./merge_htmls/5.3.html) |
| [5.2](./merge_htmls/5.2.html) | [5.1](./merge_htmls/5.1.html) | [5.0](./merge_htmls/5.0.html) | | | | | |
| | | | | | | | |
| | | | | | | | |
<h3>Known Issues in 2022.2.20f1</h3>

<ul>
<li><p>Culling: [Burst Occlusion Culling] Editor Crash when occlusion enabled and enter / exit playmode
(UUM-36008)</p></li>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if VSync is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>MacOS:  Crash on objc_msgSend when the Editor UI gets redrawn
(<a href="https://issuetracker.unity3d.com/issues/macos-crash-on-objc-msgsend-when-ui-gets-redrawn">UUM-34202</a>)</p></li>
<li><p>MacOS: Crash on -[CocoaMainMenu validateMenuItem:] when pressing/searching in Help
(<a href="https://issuetracker.unity3d.com/issues/crash-on-cocoamainmenu-validatemenuitem-when-pressing-slash-searching-in-help">UUM-33727</a>)</p></li>
<li><p>MacOS: Editor silently crashes when entering Play Mode on macOS
(<a href="https://issuetracker.unity3d.com/issues/editor-silently-crashes-when-entering-play-mode-on-macos">UUM-34395</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>UI Toolkit Controls: Inspector override marker UI is not updated after "Apply All"
(<a href="https://issuetracker.unity3d.com/issues/inspector-override-marker-ui-is-not-updated-after-apply-all">UUM-34235</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Vulkan: Oculus Quest 2 build does not work when built with Vulkan
(<a href="https://issuetracker.unity3d.com/issues/oculus-quest-2-build-does-not-work-when-built-with-vulkan">UUM-10378</a>)</p></li>
<li><p>XR SRP: [URP][XR] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x
(<a href="https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x">UUM-33025</a>)</p></li>
</ul>

<h3>2022.2.20f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li>URP: Added HDR Output override per camera.</li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Graphics: Added: Added CanvasRenderer.GetMesh API, analogous to CanvasRenderer.SetMesh.</p></li>
<li><p>Graphics: Added: Added <code>TextureImporterPlatformSettings.ignorePlatformSupport</code> to bypass platform format checks.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li>IL2CPP: Ensure we get a MissingMethodException instead of a runtime crash in native code for non-AOT'd methods.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Android: Updated GetDeviceName() API to support SystemInfo.deviceName on API Level 32 or higher.
(UUM-32514)</p></li>
<li><p>Asset Pipeline: Fixed an issue where incorrect paths could be returned for constant (internal) GUIDs, causing references to these assets to break.
(<a href="https://issuetracker.unity3d.com/issues/render-pipeline-asset-references-are-not-saved-in-the-inspector-after-restarting-editor">UUM-30074</a>)</p></li>
<li><p>Core: Fixed leak in Job Debugger that would occur when using a NativeContainer's async <code>Dispose(JobHandle)</code> method.
(UUM-27552)</p></li>
<li><p>Editor: Changing the download progress calculation in 2022.2 to use doubles when downloading asset packs on Android.
(<a href="https://issuetracker.unity3d.com/issues/android-integer-division-that-will-only-give-0-or-1-assigned-to-a-float-should-be-floating-point-division">UUM-32299</a>)</p></li>
<li><p>Editor: Fixed a crash on object unload where GC incorrectly unloaded an object that was owned by the Content File system.</p></li>
<li><p>Editor: Fixed for flickering of the icons while auto expanding in the Hierarchy.
(<a href="https://issuetracker.unity3d.com/issues/hierarchy-item-is-flickering-when-dragging-over-item-and-auto-expansion-happens">UUM-29429</a>)</p></li>
<li><p>Editor: Fixed malfunctioning visual effects when MSAA is turned on.
(<a href="https://issuetracker.unity3d.com/issues/lens-flare-and-post-processing-visual-effects-dont-work-when-msaa-is-turned-on">UUM-33235</a>)</p></li>
<li><p>Editor: Fixed test instability for ReorderRootGameObjectRaisesOnHierarchyWindowChangedEventCorrectly.
(UUM-32392)</p></li>
<li><p>Editor: Optimized asset import logic to handle large amounts of files located in the same directory.
(<a href="https://issuetracker.unity3d.com/issues/freeze-when-importing-a-large-amount-of-fbx-files">UUM-17547</a>)</p></li>
<li><p>Editor: Updated XR Interaction Toolkit to 2.3.2.</p></li>
<li><p>Graphics: Fixed an issue where SystemInfo.GetCompatibleFormat would return an incompatible format for certain depth-stencil formats + FormatUsage combinations.
(UUM-3789)</p></li>
<li><p>Graphics: Fixed Caustics are not rendered on AMD GPUs.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-caustics-are-not-rendered-on-amd-gpus">UUM-21350</a>)</p></li>
<li><p>Graphics: Fixed deadlock caused by UI jobs.
(<a href="https://issuetracker.unity3d.com/issues/a-player-sometimes-freezes-and-crashes-when-graphic-jobs-are-enabled">UUM-26444</a>)</p></li>
<li><p>Graphics: Fixed float to half conversion.
(<a href="https://issuetracker.unity3d.com/issues/metal-color-value-is-wrong-in-unitypermaterial-cbuffer-when-changing-color-value-with-specific-speeds">UUM-13334</a>)</p></li>
<li><p>Graphics: Fixed some paths of eye masking in Vulkan multi view rendering.
(UUM-912)</p></li>
<li><p>HDRP: Fixed an error for VT node on decal subtargets.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-vt-decal-sg-target-doesnt-handle-unsupported-vt-samplers-correctly">UUM-4557</a>)</p></li>
<li><p>iOS: Fixed a bug with the player settings "Force iOS Speakers when Recording". It wasn't working properly when "Mute Other Audio Sources" and "Prepare iOS for Recording" were both disabled. It was also not working correctly with wired headphones, where the setting should have no effect.
(<a href="https://issuetracker.unity3d.com/issues/ios-if-force-ios-speakers-when-recording-setting-is-enabled-audio-is-playing-through-the-device-speakers-when-bluetooth-headphones-are-connected">UUM-19505</a>)</p></li>
<li><p>Package Manager: Null exception when clearing search after re-opening package manager is fixed.
(UUM-34272)</p></li>
<li><p>Package Manager: Only showing the author name for custom packages for now on.
(UUM-34518)</p></li>
<li><p>Package Manager: Refresh button now stays enabled if user goes offline.
(UUM-35005)</p></li>
<li><p>Player: Fixed a crash at player startup with Content Files when de-serializing scripting types on a thread that was not already attached.</p></li>
<li><p>Profiler: Fixed memory tracking for CubemapArrays, particularly with DirectX 11.
(<a href="https://issuetracker.unity3d.com/issues/cubemaparrays-and-cubemaps-take-up-significantly-more-memory-than-on-other-platforms-when-working-with-a-windows-project">UUM-31067</a>)</p></li>
<li><p>Scripting: Fixed an issue where IL post processing on Mac could trigger a SIGILL message.
(UUM-32905)</p></li>
<li><p>Scripting: Fixed an issue where ILPP.Runner would try to write to Windows event log.
(<a href="https://issuetracker.unity3d.com/issues/an-error-occured-while-wrting-to-logger-s">UUM-28447</a>)</p></li>
<li><p>Scripting: Fixed an issue where user's Roslyn analyzers would run on generated code.
(<a href="https://issuetracker.unity3d.com/issues/scripts-are-seen-by-roslyn-analyzer-despite-limiting-the-scope-of-analyzers">UUM-32852</a>)</p></li>
<li><p>Shaders: Added a way to construct a PassIdentifier from a subshader and pass index pair.
(UUM-3264)</p></li>
<li><p>Shaders: Fixed custom scale and offset vectors not affecting serialised texture scale and offset.
(<a href="https://issuetracker.unity3d.com/issues/changes-made-to-texture-with-a-specific-a-st-property-marked-as-noscaleoffset-in-the-inspector-are-shown-but-not-saved">UUM-21301</a>)</p></li>
<li><p>uGUI: Fixed memory leak when textures get reparented from one scene to another.
(<a href="https://issuetracker.unity3d.com/issues/memory-leaks-stop-textures-from-getting-unloaded-from-memory-when-the-textures-gets-reparented-from-one-scene-to-another">UUM-33852</a>)</p></li>
<li><p>UI Toolkit: Fixed MinAttribute for uint and ulong data types.
(<a href="https://issuetracker.unity3d.com/issues/minattribute-doesnt-work-with-uint-variable-type">UUM-31319</a>)</p></li>
<li><p>UI Toolkit: Fixed property fields for uint and ulong data types.
(<a href="https://issuetracker.unity3d.com/issues/inspector-doesnt-represent-the-actual-value-of-unsigned-variables-when-they-go-beyond-the-value-of-their-signed-equivalents">UUM-21920</a>)</p></li>
<li><p>Universal RP: Fixed wrong render resolution for TAA and SMAA when using the render scale.</p></li>
<li><p>URP: Fixed HDR output too saturated when HDR rendering is disabled on the camera.
(UUM-31589)</p></li>
<li><p>WebGL: Web: Fixed missing bitfieldExtract() function error in URP Lit shader in WebGL builds.
(UUM-34043)</p></li>
</ul>







<h3>Known Issues in 2022.2.19f1</h3>

<ul>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>MacOS:  Crash on objc_msgSend when the Editor UI gets redrawn
(<a href="https://issuetracker.unity3d.com/issues/macos-crash-on-objc-msgsend-when-ui-gets-redrawn">UUM-34202</a>)</p></li>
<li><p>MacOS: Crash on -[CocoaMainMenu validateMenuItem:] when pressing/searching in Help
(<a href="https://issuetracker.unity3d.com/issues/crash-on-cocoamainmenu-validatemenuitem-when-pressing-slash-searching-in-help">UUM-33727</a>)</p></li>
<li><p>MacOS: Editor silently crashes when entering Play Mode on macOS
(<a href="https://issuetracker.unity3d.com/issues/editor-silently-crashes-when-entering-play-mode-on-macos">UUM-34395</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>UI Toolkit Controls: Inspector override marker UI is not updated after "Apply All"
(<a href="https://issuetracker.unity3d.com/issues/inspector-override-marker-ui-is-not-updated-after-apply-all">UUM-34235</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Universal RP: URP TAA implementation leaks accumulation buffers when entering the Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-taa-implementation-leaks-accumulation-buffers-when-entering-the-play-mode">UUM-34062</a>)</p></li>
<li><p>XR SRP: [URP][XR] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x
(<a href="https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x">UUM-33025</a>)</p></li>
</ul>

<h3>2022.2.19f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>Android: Chrome OS Build &amp; Run Support - Add "Run Device" using IP address.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li>HDRP: Added a script to drive dynamic resolution scaling in HDRP.</li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Core: Added: Debug.developerConsoleEnabled toggles the IMGUI-based developer console in development builds.</p></li>
<li><p>Graphics: Added: Added IUnityGraphicsMetalV2 with a possibility to commit unity's command buffer, and to query the command queue.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed Crash on RasterizeTri when clicking "Pack Preview" after packing an Asset into Sprite Atlas.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-rasterizetri-when-clicking-pack-preview-after-packing-an-asset-into-sprite-atlas">UUM-18880</a>)</p></li>
<li><p>Android: Fixed escaped double quotes when using SetAdditionalIl2CppArgs.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-android-incorrectly-escaped-quotes-in-build-dot-gradle-when-passing-a-string-to-setadditionalil2cppargs">UUM-25447</a>)</p></li>
<li><p>Build Pipeline: Fixed build failure related to streaming assets with symbols in file names.
(<a href="https://issuetracker.unity3d.com/issues/the-project-fails-to-build-when-there-is-a-webp-asset-in-the-streamingassets-folder">UUM-9881</a>)</p></li>
<li><p>Build Pipeline: Fixed incorrect dependencies appear after building AssetBundles with Prefab Variants.
(<a href="https://issuetracker.unity3d.com/issues/incorrect-dependancies-appear-after-building-assetbundles">UUM-20038</a>)</p></li>
<li><p>Build Pipeline: Fixed renaming Prefab Objects leads to wrong Asset Bundle dependency when the Prefab is nested.
(<a href="https://issuetracker.unity3d.com/issues/renaming-prefab-objects-leads-to-wrong-asset-bundle-dependency-when-the-prefab-is-nested">UUM-639</a>)</p></li>
<li><p>Build Pipeline: Fixed Shader references are lost when building assets with BuildPipeline.BuildAssetBundles.
(<a href="https://issuetracker.unity3d.com/issues/shader-references-are-lost-when-building-assets-with-buildpipeline-dot-buildassetbundles">UUM-2259</a>)</p></li>
<li><p>Core: Fixed error when baking terrain.</p></li>
<li><p>DX12: Fixed a case where creating and destroying Renderers that use Dynamic Geometry as Ray Tracing Mode very often in ray tracing effects would cause the GPU memory to fill up quickly.
(<a href="https://issuetracker.unity3d.com/issues/dxr-gpu-memory-leaks-when-renderer-dot-raytracingmode-is-set-to-unityengine-dot-experimental-dot-rendering-dot-raytracingmode-dot-dynamicgeometry">UUM-31709</a>)</p></li>
<li><p>Editor: Fixed a crash that occurs when you set the custom-rolloff-curve to null on an audio source.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-audiosource-setcustomrolloffcurve-when-entering-play-mode-with-audiosource-component">UUM-29578</a>)</p></li>
<li><p>Editor: Fixed an problem in the Terrain Inspector that was causing an error to display that could hide the Quality Settings section.
(UUM-33676)</p></li>
<li><p>Editor: Fixed Editor freezes when clicking Prefab &gt; Select Asset for a scene exported manually with missing information.
(<a href="https://issuetracker.unity3d.com/issues/editor-freezes-when-clicking-prefab-select-asset">UUM-30060</a>)</p></li>
<li><p>Editor: Fixed project upgrade of non-physical camera animation in FBX (field of view value).
(<a href="https://issuetracker.unity3d.com/issues/camera-broken-fov-after-project-upgrade-from-2020-dot-3-to-2022-dot-1">UUM-7628</a>)</p></li>
<li><p>Editor: Fixed regression when computing UVs for faces that have their material assigned via a group.
(<a href="https://issuetracker.unity3d.com/issues/material-details-are-lost-when-used-in-the-scene">UUM-30948</a>)</p></li>
<li><p>Editor: Fixed the wrong color space of some values when using dynamic colors in a project in linear color space.
(<a href="https://issuetracker.unity3d.com/issues/usage-hints-dynamic-color-shows-incorrect-colors-when-project-is-in-linear-color-space">UUM-20443</a>)</p></li>
<li><p>Editor: Prevented tags from being created with an empty name.
(<a href="https://issuetracker.unity3d.com/issues/tag-is-named-after-the-previously-created-tag-when-creating-a-tag-with-an-empty-new-tag-name-field-and-throws-unityexception-tag-dot-dot-dot-is-not-defined-error-when-trying-to-remove-it">UUM-32286</a>)</p></li>
<li><p>Editor: Rare GLES crash fixed with SRP Batcher.
(<a href="https://issuetracker.unity3d.com/issues/android-urp-android-application-crashes-when-srp-batcher-is-enabled-with-opengles3">UUM-30449</a>)</p></li>
<li><p>Entities Graphics: Added Entities Graphics support to URP decal shaders.
(UUM-29204)</p></li>
<li><p>Graphics: Fixed an issue where copying to/from invalid mipmaps could cause a crash or hang to occur.
(<a href="https://issuetracker.unity3d.com/issues/graphics-vulkan-copying-texture2d-to-texture2d-array-with-incomplete-mip-chain-source-causes-crash-and-validation-errors">UUM-15079</a>)</p></li>
<li><p>Graphics: Fixed an issue with the "Load texture data on demand" editor streaming setting where an assertion would be hit while building player data if dynamic fonts were present in the project.
(UUM-28337)</p></li>
<li><p>IL2CPP: Added support for the refanytype opcode.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-error-the-method-or-operation-is-not-implemented-dot-is-thrown-when-building-with-genericsharingvisitor-dot-process">UUM-29465</a>)</p></li>
<li><p>IL2CPP: Allow non-blittable types without any reference fields to be pinned. This matches the behavior of .NET Core, and changes from the previous behavior of IL2CPP, which matched .NET Framework.
(<a href="https://issuetracker.unity3d.com/issues/argumentexception-error-occurs-in-copy-method-of-nativearray-class-when-building-with-windows-il2cpp">UUM-23102</a>)</p></li>
<li><p>IL2CPP: Corrected the behavior of type layout when structs with explicit layout and a size directive are used as fields.
(UUM-13597)</p></li>
<li><p>IL2CPP: Fixed an intermittent crash in the thread pool implementation when the socket no longer exists during an HTTP request.
(UUM-21671)</p></li>
<li><p>Linux: Fixed DisplayInfo.WorkArea ignores resolution scaling when working with multiple displays.
(<a href="https://issuetracker.unity3d.com/issues/linux-displayinfo-dot-workarea-ignores-resolution-scaling-when-working-with-multiple-displays">UUM-1589</a>)</p></li>
<li><p>Linux: Fixed New Input System Debugger is logging 2 events when holding a key.
(UUM-32567)</p></li>
<li><p>macOS: Implemented Display.colorBuffer and Display.depthBuffer on macOS metal.
(UUM-18382)</p></li>
<li><p>Networking: Fixed null exception in WWWForm when file name is empty string.
(<a href="https://issuetracker.unity3d.com/issues/argumentnullexception-array-cannot-be-null-error-is-printed-when-passing-an-empty-string-to-filename-of-wwwform-dot-addbinarydata-and-then-access-the-data-property">UUM-32984</a>)</p></li>
<li><p>Particles: Use double precision timers in the Shape module to improve the accuracy of long simulations.
(<a href="https://issuetracker.unity3d.com/issues/particle-system-animation-changes-when-it-has-been-running-for-a-prolonged-period">UUM-30775</a>)</p></li>
<li><p>Prefabs: Fixed for handling conflicting components during prefab merging.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-awakefromloadqueue-invokepersistentmanagerawake-when-opening-a-project">UUM-20241</a>)</p></li>
<li><p>Prefabs: Fixed for Prefab instance is not enabled if RevertPropertyOverride is called during OnEnable.
(<a href="https://issuetracker.unity3d.com/issues/gameobject-needs-to-be-activated-two-times-to-enable-it-when-using-prefabutility-dot-revertpropertyoverride">UUM-21119</a>)</p></li>
<li><p>Scripting: Avoid Editor crash in GetAssemblyScrapedMonoScripts when TypeLoadExceptions are raised.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-monoscriptinfoscraper-getassemblyscrapedmonoscripts-when-opening-the-project-containing-com-dot-unity-dot-netcode-dot-gameobjects">UUM-31318</a>)</p></li>
<li><p>Shadergraph: ShaderGraph styles were not applied correctly when the system locale was set in Turks.
(<a href="https://issuetracker.unity3d.com/issues/shadergraph-connection-nodes-appear-at-wrong-position-when-region-format-is-set-to-turkish-turkey">UUM-33522</a>)</p></li>
<li><p>UI Toolkit: Cursor is not changing color when using "--unity-cursor-color".
(<a href="https://issuetracker.unity3d.com/issues/cursor-is-not-changing-color-when-using-unity-cursor-color">UUM-28511</a>)</p></li>
<li><p>UI Toolkit: Made sure layout is correctly updated when the scale changes.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-text-splits-when-changing-panelsettings-scale">UUM-26508</a>)</p></li>
<li><p>Universal Windows Platform: Fixed a crash occuring when Cloud Diagnostics was enabled and Debug.LogException was used off the main thread.</p></li>
<li><p>Web: Fixed an issue with Unity page not being able to unload if user has already detached the canvas from DOM before calling Unity Quit function.
(UUM-30472)</p></li>
<li><p>WebGL: Loading bar in PWA WebGL template is centered.
(<a href="https://issuetracker.unity3d.com/issues/loading-bar-of-a-loading-screen-is-off-center-in-the-webgl-build">UUM-27941</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.18f1</h3>

<ul>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>MacOS:  Crash on objc_msgSend when the Editor UI gets redrawn
(<a href="https://issuetracker.unity3d.com/issues/macos-crash-on-objc-msgsend-when-ui-gets-redrawn">UUM-34202</a>)</p></li>
<li><p>MacOS: Crash on -[CocoaMainMenu validateMenuItem:] when pressing/searching in Help
(<a href="https://issuetracker.unity3d.com/issues/crash-on-cocoamainmenu-validatemenuitem-when-pressing-slash-searching-in-help">UUM-33727</a>)</p></li>
<li><p>MacOS: Editor silently crashes when entering Play Mode on macOS
(<a href="https://issuetracker.unity3d.com/issues/editor-silently-crashes-when-entering-play-mode-on-macos">UUM-34395</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>UI Toolkit Controls: Inspector override marker UI is not updated after "Apply All"
(<a href="https://issuetracker.unity3d.com/issues/inspector-override-marker-ui-is-not-updated-after-apply-all">UUM-34235</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Universal RP: URP TAA implementation leaks accumulation buffers when entering the Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-taa-implementation-leaks-accumulation-buffers-when-entering-the-play-mode">UUM-34062</a>)</p></li>
<li><p>XR SRP: [URP][XR] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x
(<a href="https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x">UUM-33025</a>)</p></li>
</ul>

<h3>2022.2.18f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Editor: Reduced impact of Shader Graph package on performance of domain reloads by making node class cache populate on-demand.</p></li>
<li><p>Universal RP: The Forward+ rendering path now supports XR rendering, and cameras using orthographic projection.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li>Editor: Added: Added Undo.isProcessing property to determine when it's safe to call Undo.RegisterCreatedObjectUndo, among other things.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed crash when a Tilemap with corrupted Tile Data calls CompressBounds.
(<a href="https://issuetracker.unity3d.com/issues/tilemap-with-corrupted-data-crashes-the-editor-when-calling-compressbounds">UUM-32832</a>)</p></li>
<li><p>Android: Added warning messages when AndroidManifest.xml from the Plugin has duplicated elements with UnityPlayerSettings.
(UUM-27274)</p></li>
<li><p>Android: Fixed the Troubleshooting button URL upon gradle error.
(<a href="https://issuetracker.unity3d.com/issues/build-error-troubleshoot-button-links-to-an-empty-web-page-when-encountering-gradle-error">UUM-30719</a>)</p></li>
<li><p>Android: Removed OPENGLES uses-feature element in AndroidManifest of the exported project when not selected in Player Settings.
(<a href="https://issuetracker.unity3d.com/issues/opengles2-uses-feature-entry-is-added-to-the-android-manifest-when-not-used">UUM-32676</a>)</p></li>
<li><p>Asset Bundles: Added error message when loading bundle without typetrees in the Editor.
(<a href="https://issuetracker.unity3d.com/issues/assetbundle-dot-loadfromfileasync-causes-errors-when-bundles-are-built-using-disablewritetypetree">UUM-660</a>)</p></li>
<li><p>Asset Bundles: Fixed Editor version is added to a bundle when using RecompressAssetBundleAsync after it's been stripped with AssetBundleStripUnityVersion.
(<a href="https://issuetracker.unity3d.com/issues/editor-version-is-added-to-a-bundle-when-using-recompressassetbundleasync-after-its-been-stripped-with-assetbundlestripunityversion">UUM-21137</a>)</p></li>
<li><p>Asset Import: Fixed a crash when importing specific FBX files with blendshapes.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-fbxsdk-fbxmemoryfile-open-when-importing-the-fbx-file">UUM-32291</a>)</p></li>
<li><p>Asset Import: Fixed a crash when importing specific FBX files with blendshapes.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-fbxsdk-fbxconnectionpoint-subconnectfind-when-importing-a-specific-fbx-asset">UUM-33322</a>)</p></li>
<li><p>Asset Pipeline: Fixed crash when re-adding animation clip to prefab.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-serializeobjectandaddtorecording-when-adding-animation-to-object-without-animator">UUM-21916</a>)</p></li>
<li><p>Asset Pipeline: Fixed Editor crash when changing Asset Serialization Mode to Force Binary with the com.unity.multiplayer.samples.coop package installed.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-on-collectallscenemanagerandobjectids-when-changing-asset-serialization-mode-to-force-binary">UUM-26417</a>)</p></li>
<li><p>Build Pipeline: Fixed android build failure issue where were are getting an error message ' build destination path collides with an existing path' when triggered using Ctrl+B (Windows) or Cmd+B (macOS) keyboard shortcut.
(<a href="https://issuetracker.unity3d.com/issues/mac-android-file-build-and-run-fails-with-a-prompt">UUM-30911</a>)</p></li>
<li><p>Documentation: Updated TextureImporter documentation regarding settings that are found under TextureImporterSettings.
(UUM-23201)</p></li>
<li><p>Editor: Fixed 1px mismatch between reported Screen size and actual back buffer size when using DPI scaling leading to errors being logged and broken rendering.
(<a href="https://issuetracker.unity3d.com/issues/1px-mismatch-between-reported-screen-size-and-actual-back-buffer-size-when-changing-display-scale">UUM-14913</a>)</p></li>
<li><p>Editor: Fixed crash when dragging game view in and out of docked view on Linux with Mesa drivers.
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-amd-undocking-the-game-view-crashes-the-editor">UUM-16015</a>)</p></li>
<li><p>Editor: Fixed Entities.graphics random crash when multi-thread and high number of meshes.
(UUM-33872)</p></li>
<li><p>Editor: Fixed inconsistent input field styling in Shortcut Manager's create and rename prompts.
(<a href="https://issuetracker.unity3d.com/issues/shortcuts-create-profile-window-has-inconsistent-style-for-profile-name-field-validation">UUM-28290</a>)</p></li>
<li><p>Editor: Fixed issue where Vulkan robustBufferAccess was enabled when it shouldn't be.
(UUM-29326)</p></li>
<li><p>Editor: Fixed issue with PackageManagerPackageAssets.RegisterPackages_LogsRegisteredPackagesByRegistryAndSource tests.
(UUM-22954)</p></li>
<li><p>Editor: Fixed loading of legacy Texture assets that were BC-compressed but didn't have multiple-of-four dimensions.
(<a href="https://issuetracker.unity3d.com/issues/multiple-errors-appear-in-the-console-window-when-reimporting-a-scenetemplate-asset-that-contains-a-texture-with-width-slash-height-not-divisible-by-4">UUM-19666</a>)</p></li>
<li><p>Editor: Fixed several problems with speech recognition in apps using Holographic Remoting.
(XRF-411)</p></li>
<li><p>Editor: Made reserved key labels in Shortcut Manager more visible on dark skin.
(<a href="https://issuetracker.unity3d.com/issues/esc-return-and-caps-lock-keys-are-barely-visible-in-the-shortcut-manager-window">UUM-28295</a>)</p></li>
<li><p>Editor: Updated UnityTLS.</p></li>
<li><p>GI: Fixed issue where lightmaps are lost when entering playmode, switching scenes, and exiting playmode.
(<a href="https://issuetracker.unity3d.com/issues/lightmap-is-unassigned-when-entering-play-mode-switching-scene-and-exiting-play-mode">UUM-29735</a>)</p></li>
<li><p>Graphics: Fixed an inspector issue where 2DArray and 3D textures would not report their size on disk correctly.
(<a href="https://issuetracker.unity3d.com/issues/texture-size-inconsistencies-between-different-shapes">UUM-28111</a>)</p></li>
<li><p>Graphics: Fixed an issue where EditorUtility.CompressTexture would silently fail for zero-sized textures.
(UUM-31569)</p></li>
<li><p>Graphics: Fixed BatchRendererGroup compatibility issues with URP Particle shaders.
(UUM-32679)</p></li>
<li><p>Graphics: Fixed planar reflection sampling. Planar reflection sampling drops at certain angles because its bounding box (influence proxy) is not view relative. This causes it to be culled when its out of the origin.
(UUM-27898)</p></li>
<li><p>Graphics: Invalid pass index error messages now include shader name.
(UUM-33598)</p></li>
<li><p>Graphics: The texture streaming system accurately tracks the size of non-streaming crunched textures.
(UUM-27512)</p></li>
<li><p>HDRP: Fixed a shader compilation issue on fog volumes when Turkish language is installed as locale.</p></li>
<li><p>HDRP: Fixed an issue where the quality settings tags were displayed cut-off.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-quality-preset-labels-get-cut-off-in-the-project-settings">UUM-31849</a>)</p></li>
<li><p>HDRP: Fixed APV brick placement when multiple probe volumes with different object layer mask and subdivision levels overlaps.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-probe-volume-density-too-high-when-using-more-than-one-probe-volume-gameobject">UUM-29073</a>)</p></li>
<li><p>HDRP: Fixed DLSS Ultra performance setting which was not calculating the correct resolution. The setting was not pushing the correct resolution due to a typo in the code.
(<a href="https://issuetracker.unity3d.com/issues/dlss-ultra-performance-mode-performs-worse-than-other-dlss-modes">UUM-29281</a>)</p></li>
<li><p>HDRP: Fixed free CullingGroups still being used during culling.
(UUM-29379)</p></li>
<li><p>HDRP: Fixed HDRP Decal Emisive Map is drawn incorrectly when Decal is at a certain distance from Camera and specific "Clipping Planes" property values are set under the "Camera" component.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-decal-emmisive-map-is-drawn-incorrectly-when-decal-is-at-a-certain-distance-from-camera-and-specific-clipping-planes-property-values-are-set-under-the-camera-component">UUM-28486</a>)</p></li>
<li><p>HDRP: Fixed ShaderGraph materials using SSS.
(UUM-27413)</p></li>
<li><p>HDRP: Fixed the default value of _ZTestDepthEqualForOpaque in unlit ShaderGraphs.
(UUM-31690)</p></li>
<li><p>HDRP: Updated some missing HDRP component documentation URLs.
(UUM-9449)</p></li>
<li><p>iOS: Fixed crash on iOS when Graphics Jobs were enabled.
(<a href="https://issuetracker.unity3d.com/issues/ios-crash-on-unityframework-scheduledependencies-when-graphics-jobs-are-enabled">UUM-22614</a>)</p></li>
<li><p>iOS: Fixed Images.xcassets not being added to the xcode project (resulting in icons not being set).
(<a href="https://issuetracker.unity3d.com/issues/ios-appicon-fails-to-be-added-to-the-xcode-project">UUM-32547</a>)</p></li>
<li><p>iOS: Fixed startup orientation going wrong sometimes.
(<a href="https://issuetracker.unity3d.com/issues/ios-screen-dot-orientation-returns-wrong-orientation-when-rotating-a-device">UUM-33690</a>)</p></li>
<li><p>Linux: Disabled SDL Dynamic API for SDL dependent Platforms except for Embedded and QNX.
(UUM-33932)</p></li>
<li><p>Package Manager: Fixed an issue where installing a package from a scoped registry will fail if a bundled package with the same name and version exists.</p></li>
<li><p>Physics: Fixed a rare PhysX crash when using the PGS solver type and either One-Directional or Two-Directional friction type.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-physx-dy-solvercoregeneralpf-solvevparallelandwriteback-when-entering-play-mode">UUM-27540</a>)</p></li>
<li><p>Physics: Fixed Articulation Bodies ignoring SetMaxImpulse from Contact Modifications.
(<a href="https://issuetracker.unity3d.com/issues/setmaximpulse-is-not-evaluated-when-using-it-on-articulationbody">UUM-29037</a>)</p></li>
<li><p>Physics: Fixed BoxCollider warning messages not being printed when Scene Reloading is enabled.
(<a href="https://issuetracker.unity3d.com/issues/windows-boxcolliders-does-not-support-negative-scale-or-size-warning-appears-only-when-enter-play-mode-options-is-enabled">UUM-28396</a>)</p></li>
<li><p>Physics: Fixed OnCollision messages not being sent when the collider has hasModifiableContacts property explicitly set to false.
(<a href="https://issuetracker.unity3d.com/issues/collision-events-are-not-reported-when-hasmodifiablecontacts-on-a-collider-is-set-to-false">UUM-28909</a>)</p></li>
<li><p>Physics: Fixed up a simulation stall when a large section of heightmap triangles was fetched for tests.
(<a href="https://issuetracker.unity3d.com/issues/unity-freezes-when-high-rigidbody-dot-addforce-force-value-is-used">UUM-21683</a>)</p></li>
<li><p>Scene/Game View: Fixed default buttons styling in overlays.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-button-style-of-list-view-are-displayed-as-mouse-is-hovering-over-them-when-created-in-overlay">UUM-25734</a>)</p></li>
<li><p>Scripting: Improved ILPP runner reliability on machines under heavy load.
(UUM-29661)</p></li>
<li><p>Shaders: Fixed an issue that HybridHDRPSamples scenes throw Tessellation shaders errors on OSX Metal.
(UUM-30549)</p></li>
<li><p>Universal RP: Disabled MSAA on devices without MSAA store support (Apple GPUs A8 and lower).</p></li>
<li><p>Universal RP: Increased lighting BRDF specular max for half float math (mobile) to match the visual look of full float math (desktop) better.
(<a href="https://issuetracker.unity3d.com/issues/urp-android-high-smoothness-material-is-rendered-differently-between-the-editor-and-android-player">UUM-2997</a>)</p></li>
<li><p>Version Control: Fixed 'Texture2D' does not contain a definition for 'ignoreMipmapLimit' error when installing Unity Version Control on previous Unity Editor Versions<br>
Fixed sign in dialog style when waiting for user to complete sign in<br>
Fixed NullReferenceException when opening a new project and the user doesn't have a Unity Version Control organization linked to a Unity ID.</p></li>
<li><p>VFX Graph: Allow particle sorting with HDRP decals.
(UUM-29727)</p></li>
<li><p>VFX Graph: Filtered out META pass from SG generated shaders.
(<a href="https://issuetracker.unity3d.com/issues/applymeshmodification-no-matching-2-parameter-function-shader-error-when-vfx-uses-custom-output-shaders">UUM-30050</a>)</p></li>
<li><p>VFX Graph: Fixed mesh LOD flickering when using TAA.
(<a href="https://issuetracker.unity3d.com/issues/lod-groups-flicker-in-scene-view-when-always-refresh-is-on">UUM-10073</a>)</p></li>
<li><p>VFX Graph: Fixed mismatching LOD between eyes in multi-pass VR.
(UUM-6004)</p></li>
<li><p>VFX Graph: Fixed some tooltips that were lost.
(UUM-18536)</p></li>
<li><p>VFX Graph: Fixed Wrong evaluation of time in VFX Control Track while using Playables API.
(<a href="https://issuetracker.unity3d.com/issues/vfx-globaltime-variable-constantly-grows-when-using-playables-api">UUM-32413</a>)</p></li>
<li><p>VFX Graph: Forces positive color values in graph.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-output-mesh-having-negative-base-color-channel-results-in-black-screen">UUM-20076</a>)</p></li>
<li><p>VFX Graph: Hide "Sorting mode" and "Revert sorting" when blend mode is set to Opaque.
(UUM-4755)</p></li>
<li><p>VFX Graph: Hide log message asking to check out the asset for version control in empty VFX window, when reseting Editor Layout.
(<a href="https://issuetracker.unity3d.com/issues/when-reseting-editor-layout-empty-vfx-window-displays-log-message-to-check-out-the-asset-for-version-control">UUM-17615</a>)</p></li>
<li><p>VFX Graph: Keep some bottom margin on blocks when collapsed.
(<a href="https://issuetracker.unity3d.com/issues/the-padding-is-insufficient-at-the-bottom-of-a-collapsed-block-when-there-is-a-connected-node">UUM-28832</a>)</p></li>
<li><p>VFX Graph: Prevent overflow on baked curve and gradient.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-gradient-node-intensifies-color-on-particle-emissions-excessively-when-connected-to-random-number-node">UUM-560</a>)</p></li>
<li><p>VFX Graph: Replaced default mesh output shader to be SRP compatible.
(UUM-4363)</p></li>
<li><p>Virtual Texturing: Virtual texturing has a severe issue: the mip chain is not available on the first frame, causing unpredictable garbage texles to be displayed on the screen. This fix helps with poping by adding a new setting to the HDRP asset. This setting lets us allocate virtual texturing mips prefetching. This setting also had to be implemented inside the VT system.<br>
A debug panel also has live reporting of the current prefetched mips in the markers debug screen. We also add a checkbox to debug disable streaming, which helps content creators see which textures are on and off.
(UUM-29814)</p></li>
<li><p>Windows: Fixed sizeof type error in StackWalker library.</p></li>
</ul>







<h3>Known Issues in 2022.2.17f1</h3>

<ul>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>MacOS: Crash on -[CocoaMainMenu validateMenuItem:] when pressing/searching in Help
(<a href="https://issuetracker.unity3d.com/issues/crash-on-cocoamainmenu-validatemenuitem-when-pressing-slash-searching-in-help">UUM-33727</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>uGUI Framework: Memory leaks stop textures from getting unloaded from memory when the textures gets reparented from one scene to another
(<a href="https://issuetracker.unity3d.com/issues/memory-leaks-stop-textures-from-getting-unloaded-from-memory-when-the-textures-gets-reparented-from-one-scene-to-another">UUM-33852</a>)</p></li>
<li><p>UI Toolkit Controls: Inspector override marker UI is not updated after "Apply All"
(<a href="https://issuetracker.unity3d.com/issues/inspector-override-marker-ui-is-not-updated-after-apply-all">UUM-34235</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Universal RP: URP TAA implementation leaks accumulation buffers when entering the Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-taa-implementation-leaks-accumulation-buffers-when-entering-the-play-mode">UUM-34062</a>)</p></li>
<li><p>Visual Effects - Legacy: [Android][Vulkan] Visualisation corruption occurs when rendering Particles to Render Texture
(<a href="https://issuetracker.unity3d.com/issues/android-vulkan-visualisation-corruption-occurs-when-rendering-particles-to-render-texture">UUM-21106</a>)</p></li>
<li><p>XR SRP: [URP][XR] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x
(<a href="https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x">UUM-33025</a>)</p></li>
</ul>

<h3>2022.2.17f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li>Editor: Improved memory allocator contention when merging static meshes making this process a little faster.</li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Editor: Added: <code>EditorApplication.focusChanged</code> event which fires when the Editor gains and loses focus.</p></li>
<li><p>Editor: Added: <code>EditorApplication.isFocused</code> property indicating the cached state of the Editors focus.</p></li>
<li><p>Scene/Game View: Added: <code>CameraEditor.CreatePreviewOverlay</code>, allowing custom editors to override the camera preview overlay.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Android: Disabled --fastdeploy during application installation, since in some cases it doesn't work correctly.
(<a href="https://issuetracker.unity3d.com/issues/application-is-not-updated-on-device-when-its-signed-with-a-different-key">UUM-28376</a>)</p></li>
<li><p>Editor: Overlays added through code are now shown in the Overlay Menu.</p></li>
<li><p>HDRP: Changed references of Diffusion Profile in the HDRP Wizard check by the ones in the HDRP Package.</p></li>
<li><p>HDRP: Enabled Extend Shadow Culling in Raytracing by default.
(UUM-21784)</p></li>
<li><p>HDRP: Fixed usage of FindObjectsOfType to use FindObjectsByType(FindObjectsSortMode.None).</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Android: Enabled the display of gradle tasks in progress dialog while building to Android.
(UUM-31890)</p></li>
<li><p>Asset Pipeline: Disabled script re-compilation when <strong>Recompile after playmode</strong> and <strong>Auto-refresh</strong> are set.
(<a href="https://issuetracker.unity3d.com/issues/script-recompiles-in-play-mode-when-script-changes-while-playing-option-is-set-to-recompile-after-finished-playing-and-auto-refresh-is-set-to-enabled">UUM-20409</a>)</p></li>
<li><p>Build Pipeline: Fixed an invalid build path error that triggers when building for WebGL on Windows.
(UUM-27982)</p></li>
<li><p>Build Pipeline: Fixed an issue where IOS may fail to build in Xcode if script debugging is enabled.
(UUM-12364)</p></li>
<li><p>Build Pipeline: Fixed Player Build fails.
(<a href="https://issuetracker.unity3d.com/issues/build-fails-until-scrolling-scenes-in-build-in-build-settings">UUM-1205</a>)</p></li>
<li><p>Core: Fixed memory ordering issues in the job system that could occur on platforms with a weak memory model. Platforms such as Android, iOS, and Apple Silicon OS X could potentially see hangs or crashes due to reading old values that had been written to inside of a job.
(UUM-32220)</p></li>
<li><p>DX12: Fixed a crash where command lists were not being cleaned up.
(UUM-27446)</p></li>
<li><p>Editor: Added tooltip support to UnityEvent header label.
(<a href="https://issuetracker.unity3d.com/issues/tooltip-prefix-is-ignored-when-used-with-unityevent">UUM-16433</a>)</p></li>
<li><p>Editor: Enabled GameObjects from the 31st layer to be rendered when <code>Camera.cullingMask</code> is set to <strong>Everything</strong>.
(<a href="https://issuetracker.unity3d.com/issues/gameobjects-from-31st-layer-are-not-rendered-when-camera-dot-cullingmask-is-set-to-everything">UUM-2698</a>)</p></li>
<li><p>Editor: Fixed an issue in the Frame Debugger with errors that appear when you enable the debugger when it was docked with the Game Window.
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-frame-debugger-window-doesnt-open-and-throws-errors-when-docked-with-game-window">UUM-17193</a>)</p></li>
<li><p>Editor: Fixed bug where objects would constantly be pinged when console log entries are collapsed.
(<a href="https://issuetracker.unity3d.com/issues/pingobject-repeats-indefinitely-when-clicking-on-a-repeating-error-in-the-console">UUM-10068</a>)</p></li>
<li><p>Editor: Fixed Overlay.OnWillBeDestroyed not being called in some cases.</p></li>
<li><p>Editor: Fixed YAML file corruption on Android Platforms caused due to some obsolete targets in PlatformGroupEnum.
(<a href="https://issuetracker.unity3d.com/issues/projectsettings-dot-asset-changes-to-an-unparsable-yaml-file-when-using-scripting-define-symbols">UUM-21944</a>)</p></li>
<li><p>Graphics: Added support for DOTS_INSTANCING_ON to the HDRP/AxF shader.
(UUM-32992)</p></li>
<li><p>Graphics: Fixed a crash on iOS, Android, and Silicon devices in ScriptableRenderLoop (DrawRenderers and DrawShadows) which was caused by a threading issue.
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Graphics: Fixed an issue with GPU Instancing providing wrong previous world matrix, leading to motion vector computation issues.
(UUM-30538)</p></li>
<li><p>Graphics: Introducing two new knobs so PBR DoF can now scale at 4k.<br>
The first is a new knob "High quality Adaptive Sampling" which is enabled by default. This change allows now to turn off this feature (which changes adaptive sampling rate) and saves massive amount of performance.  This knob improves performance massively while keeping image quality consistent.<br>
The second knob is high and low res PBR dof checkbox. The previous drop down has been removed, since PBR DoF has always been half res, independent of the previous enum value. This new knob now shows true representation of resolution. The new low res setting lets PBR DoF run at quarter resolution.
(UUM-26281)</p></li>
<li><p>HDRP: Added error when MSAA and non-MSAA buffers are bound simultaneously in custom passes.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-in-hdrp-if-the-user-selects-a-custom-color-and-camera-depth-buffer-with-msaa-on-it-silently-breaks-and-doesnt-render">UUM-22996</a>)</p></li>
<li><p>HDRP: Better Reflection Probe Debug_"Icon".</p></li>
<li><p>HDRP: Clamp mouse pixel coords in tile debug view.</p></li>
<li><p>HDRP: Enabled path tracing to now produce correct results when dynamic resolution is enabled.
(UUM-23315)</p></li>
<li><p>HDRP: Enabled the correct light position when changing distance on a Light Anchor.
(<a href="https://issuetracker.unity3d.com/issues/light-direction-changes-when-changing-light-anchor-components-distance-property">UUM-26172</a>)</p></li>
<li><p>HDRP: Enabled the volumetric clouds to be synced per camera. Previously, the clouds were synced through a global time, leading to discrepencies with cameras that update at different rates.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-volumetric-clouds-are-synced-per-camera-and-not-via-a-global-time-leading-to-discrepencies-when-you-have-a-cameras-that-updates-at-different-rate">UUM-21985</a>)</p></li>
<li><p>HDRP: Fixed a glitch in one frame in the Editor when using path tracing.
(UUM-22917)</p></li>
<li><p>HDRP: Fixed an issue occuring on TAAU when the camera rect is adjusted.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-changing-camera-rect-breaks-taau">UUM-25737</a>)</p></li>
<li><p>HDRP: Fixed an issue where LOD-related frame render settings UI on the camera component would not reflect the current global default settings.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-default-frame-settings-are-not-updating-in-the-inspector-window-when-changed-in-the-project-settings">UUM-27546</a>)</p></li>
<li><p>HDRP: Fixed an issue with Mac and HDR so it now shows correct results when HDR is enabled.
(UUM-26282)</p></li>
<li><p>HDRP: Fixed an issue with ray tracing initialization when switching between render pipeline assets.
(UUM-24692)</p></li>
<li><p>HDRP: Fixed HDSceneDepth triggering errors for uninitialized values.
(UUM-21185)</p></li>
<li><p>HDRP: Fixed issue with Light Probe Proxy Volume not rendering correctly when Bounding Box Mode is Automatic World.
(<a href="https://issuetracker.unity3d.com/issues/light-probe-proxy-volume-doesnt-render-correctly-when-bounding-box-mode-is-automatic-world">UUM-22821</a>)</p></li>
<li><p>HDRP: Fixed material upgrader when executing tests.
(UUM-20743)</p></li>
<li><p>HDRP: Fixed memory leak in HDLightRenderDatabase when switching between editor and play and no lights are in the scene.
(<a href="https://issuetracker.unity3d.com/issues/memory-leak-error-when-no-directional-light-is-present-in-the-scene-and-leak-detection-level-is-enabled">UUM-29271</a>)</p></li>
<li><p>HDRP: Fixed ray-traced emissive reflections.
(UUM-30969)</p></li>
<li><p>HDRP: Fixed some colliders being disabled when cancelling an APV bake.
(<a href="https://issuetracker.unity3d.com/issues/apv-scene-colliders-disabled-if-baking-is-cancelled-or-crashes">UUM-28815</a>)</p></li>
<li><p>HDRP: Fixed swapped tooltips on decal materials for ambient occlusion and smoothness.
(<a href="https://issuetracker.unity3d.com/issues/smoothness-and-ambient-occlusion-tooltips-are-swapped-on-hdrp-slash-decal">UUM-29660</a>)</p></li>
<li><p>HDRP: Fixed the albedo and specular color override so it is now considered as sRGB.
(UUM-23268)</p></li>
<li><p>HDRP: Fixed the exposure for SSR debug rendering.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-screen-space-reflections-debug-is-not-working">UUM-19575</a>)</p></li>
<li><p>HDRP: Fixed the init order that could cause DXR setup to fail after using the HDRP wizard to enable DXR on an existing HDRP project.
(<a href="https://issuetracker.unity3d.com/issues/the-game-view-is-black-and-the-editor-throws-a-nullreferenceexception-after-restarting-the-editor-when-pressing-the-fix-all-button-in-hdrp-wizard">UUM-21776</a>)</p></li>
<li><p>HDRP: Fixed the label and improved documentation for After Post Process depth test flag to give more detail about "Depth Test" being automatically disabled in some cases.</p></li>
<li><p>HDRP: Fixed the low resolution transparents using Shader Graph.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-buffers-sampling-in-shadergraph-is-broken-when-using-low-resultion-pass">UUM-21628</a>)</p></li>
<li><p>HDRP: Fixed the PrefabStage with Lensflare not included in the object, include the lensflare only if it was included on the prefab (children included).
(UUM-12160)</p></li>
<li><p>HDRP: Fixed the raytraced reflections for box lights so they are no longer cut off if the range is too small.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-boxlight-reflections-looks-incorrect-in-rtx">UUM-21442</a>)</p></li>
<li><p>HDRP: Fixed the volumetric clouds presets so it now propagates their values if changed by script.
(<a href="https://issuetracker.unity3d.com/issues/cloud-preset-doesnt-change-when-changing-via-script-in-play-mode">UUM-14272</a>)</p></li>
<li><p>HDRP: Fixed transparent decal textures being added into atlas even if the material properties have disabled them.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-decal-texture-are-stored-in-the-decal-atlas-even-if-all-affect-xxx-settings-are-disabled">UUM-29093</a>)</p></li>
<li><p>HDRP: Fixed Volumetric Clouds jittering when the sun was not casting shadow.
(<a href="https://issuetracker.unity3d.com/issues/clouds-are-jittering-when-enabling-volumetric-clouds-in-the-hdrp-project">UUM-27919</a>)</p></li>
<li><p>HDRP: Improved the console warning message when the maximum number of shadows is reached in the view.
(UUM-28072)</p></li>
<li><p>macOS: Fixed a deadlock when using Entities Graphics on M1 Macs.
(UUM-13783)</p></li>
<li><p>Scene/Game View: Fixed cameras in locked Inspectors not showing a preview overlay in the scene view.
(<a href="https://issuetracker.unity3d.com/issues/camera-preview-is-not-visible-in-the-scene-window-when-cameras-inspector-window-is-locked">UUM-26413</a>)</p></li>
<li><p>Scene/Game View: Fixed navigation in EditorWindow inheriting from the SceneView.
(<a href="https://issuetracker.unity3d.com/issues/can-not-navigate-through-the-scene-when-using-custom-sceneview">UUM-27556</a>)</p></li>
<li><p>Scene/Game View: Fixed the Rect Tool not showing the active element when snapping.
(<a href="https://issuetracker.unity3d.com/issues/2d-no-visual-indication-is-shown-before-selecting-snapping-points-when-using-vertex-snapping">UUM-29629</a>)</p></li>
<li><p>Scene/Game View: Fixed the Rect Tool sometimes not moving UI GameObjects if the pivot was changed.
(<a href="https://issuetracker.unity3d.com/issues/ui-gameobject-sometimes-cant-be-moved-when-pivot-is-moved-from-center">UUM-30232</a>)</p></li>
<li><p>Scene/Game View: Fixed View tool icon flickering when ALT key is pressed and mouse moved.
(<a href="https://issuetracker.unity3d.com/issues/overlay-selected-tool-switches-to-grab-tool-when-holding-orbit-movement-shortcut-key-and-moving-mouse-in-scene-view">UUM-29366</a>)</p></li>
<li><p>Scripting: Fixed a bug in ApiUpdater MovedFrom handling when aliases are referenced at non-root namespace.</p></li>
<li><p>Serialization: Fixed the issue of deletion of a script not being detected as a change in the scripts which leads to the serialization not being able to correctly detect missing reference types. A new check was added to validate if there were any scripts deleted after the latest recompile.
(UUM-31173)</p></li>
<li><p>Shadergraph: Corrected a regression in float preview properties not updating previews. [SGB-526].</p></li>
<li><p>Shaders: Reduced shader compiler memory usage.
(UUM-30445)</p></li>
<li><p>SRP Core: Fixed an IES Importer issue producing incorrect results.
(UUM-16309)</p></li>
<li><p>TextCore: Added support for line-breaking rules to the Editor.
(<a href="https://issuetracker.unity3d.com/issues/line-breaks-do-not-work-when-adding-them-to-uitextsettings">UUM-12413</a>)</p></li>
<li><p>UI Toolkit: Fixed clicking on a selectable label in a list so it now changes the selection.
(<a href="https://issuetracker.unity3d.com/issues/selectionchanged-is-not-triggered-when-clicking-on-a-selectable-label-in-a-list">UUM-28633</a>)</p></li>
<li><p>UI Toolkit: Fixed the overwriting of a decimal separator (, or .) to 0 when inserting it the first time in the input field of a slider.
(<a href="https://issuetracker.unity3d.com/issues/value-in-the-input-field-becomes-0-when-inserting-a-decimal-separator-or-before-a-number">UUM-31090</a>)</p></li>
<li><p>Universal RP: Fixed the Screen flicker in Scene view.
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
<li><p>VFX Graph: First frame of spawned particles outputs wrong motion vectors.
(<a href="https://issuetracker.unity3d.com/issues/vfx-slash-sg-slash-hdrp-unexpected-motion-vector-output-during-first-frame">UUM-20435</a>)</p></li>
<li><p>VFX Graph: Fixed a crash when logging an error messages for unexpected buffers.</p></li>
<li><p>VFX Graph: Fixed an issue that read alive from source attribute was always returning true.
(<a href="https://issuetracker.unity3d.com/issues/cant-inherit-the-alive-value-from-the-spawner-context">UUM-8698</a>)</p></li>
<li><p>VFX Graph: Fixed an unexpected motion vector when adding precompute velocity that was enabled in Shader Graph.
(<a href="https://issuetracker.unity3d.com/issues/vfx-slash-sg-wrong-motion-vector-on-mesh-using-sg">UUM-22368</a>)</p></li>
<li><p>VFX Graph: Fixed Motion Vector so it is now correct when transform isn't changed every frame.
(UUM-20638)</p></li>
<li><p>VFX Graph: Improved error feedback in case of missing reference in custom spawner.
(UUM-28537)</p></li>
<li><p>VFX Graph: Removed Loop And Delay block listing in favor of Spawn Context Settings (which can be accessed through the Inspector).
(<a href="https://issuetracker.unity3d.com/issues/vfx-spawn-and-loop-block">UUM-28655</a>)</p></li>
<li><p>VFX Graph: Unexpected Motion Vector in HDRP when effect is in World and uses Custom Velocity or Mesh Output.
(<a href="https://issuetracker.unity3d.com/issues/vfx-slash-sg-slash-hdrp-unexpected-motion-vector-custom-velocity-and-world">UUM-20437</a>)</p></li>
<li><p>Video: Internal texture queue populated by asynchronous decoding was sometimes being drained from 2 threads. Now serializing access.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getfirstreadytexturetime-when-focusing-gameobject-in-tutorial">UUM-21948</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.16f1</h3>

<ul>
<li><p>DirectX12: [DXR] GPU memory leaks when Renderer.rayTracingMode is set to UnityEngine.Experimental.Rendering.RayTracingMode.DynamicGeometry
(<a href="https://issuetracker.unity3d.com/issues/dxr-gpu-memory-leaks-when-renderer-dot-raytracingmode-is-set-to-unityengine-dot-experimental-dot-rendering-dot-raytracingmode-dot-dynamicgeometry">UUM-31709</a>)</p></li>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Visual Effects: Fatal freeze when playing a VFX made with VFX Graph and consisting many effects
(<a href="https://issuetracker.unity3d.com/issues/fatal-freeze-when-playing-a-vfx-made-with-vfx-graph-and-consisting-many-effects">UUM-31773</a>)</p></li>
<li><p>Visual Effects - Legacy: [Android][Vulkan] Visualisation corruption occurs when rendering Particles to Render Texture
(<a href="https://issuetracker.unity3d.com/issues/android-vulkan-visualisation-corruption-occurs-when-rendering-particles-to-render-texture">UUM-21106</a>)</p></li>
<li><p>XR SRP: [URP][XR] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x
(<a href="https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x">UUM-33025</a>)</p></li>
</ul>

<h3>2022.2.16f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Build System: BeeDriver: ignore System.IO.IOException: Sharing violation on path errors for console log. [BUILD-21]</p></li>
<li><p>Profiler: Added metadata support for RenderTextures in Memory Profiler.</p></li>
<li><p>Profiler: Improved graphics memory tracking in Memory Profiler.</p></li>
<li><p>Scripting: Reduced compilation time in large projects.</p></li>
<li><p>Shadergraph: Fixed parallax nodes so that they use the default UV Input Slot correctly. [SGB-511].</p></li>
<li><p>Shadergraph: Improved blackboard property drag speed when reordering the blackboard. [SGB-383].</p></li>
<li><p>Shadergraph: Made adjustments to flipbook node to avoid dropping frames on AMD GPU. [SGB-280].</p></li>
<li><p>Shaders: Added support on Metal for vprog having void return type.</p></li>
<li><p>VFX Graph: Optimize VFX.Update per component overhead.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li>UI Toolkit: Added: API to know when a panel may need to be rendered to use in conjunction with on demand rendering.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Android: Added upgrade guide information about mainTemplate.gradle file changes.
(UUM-32805)</p></li>
<li><p>Build System: Fixed unity_license.json CopyFiles build failures.
(UUM-28889)</p></li>
<li><p>DX12: Removed unnecessary image processing code on texture upload that's not needed reducing CPU overhead.
(<a href="https://issuetracker.unity3d.com/issues/d3d12-produces-low-fps-when-using-commandbuffer-dot-issueplugincustomtextureupdatev2">UUM-15519</a>)</p></li>
<li><p>Editor: Added the scrollview to the description field in the Scene template dialog.
(<a href="https://issuetracker.unity3d.com/issues/scene-template-title-section-with-its-functions-becomes-hidden-when-scroll-is-used">UUM-25425</a>)</p></li>
<li><p>Editor: Enabled types derived from type with CustomPreview have a custom preview.
(<a href="https://issuetracker.unity3d.com/issues/custompreview-doesnt-work-when-the-type-is-inherited-from-the-specified-type-in-custompreviews-parameters">UUM-9543</a>)</p></li>
<li><p>Editor: Enabled updating the SceneProvider accordingly to an additive scene being added or removed.
(<a href="https://issuetracker.unity3d.com/issues/search-quick-search-window-is-not-showing-objects-in-scenes-when-they-are-loaded-additively-until-a-change-in-the-editor-is-made">UUM-25053</a>)</p></li>
<li><p>Editor: Ensured that long titles do not clip the scene icon in the Scene Template Dialog.
(<a href="https://issuetracker.unity3d.com/issues/scene-templates-with-longer-titles-are-displayed-without-the-icons-in-new-scene-window">UUM-25511</a>)</p></li>
<li><p>Editor: Fixed a bug where the cursor was lagging when dragging files to inactive MacOS editor.
(<a href="https://issuetracker.unity3d.com/issues/general-cursor-becomes-very-laggy-when-dragging-file-from-finder-to-the-editor-on-macos">UUM-9542</a>)</p></li>
<li><p>Editor: Fixed an issue where the Editor would launch the Hub when it is not already running, but would then incorrectly display the "Install Unity Hub" dialog instead of connecting to the Hub to perform the action.
(<a href="https://issuetracker.unity3d.com/issues/hub-cant-be-opened-from-editors-v2022-dot-1-0a6-and-up">UUM-29547</a>)</p></li>
<li><p>Editor: Fixed an issue with the custom InspectorElement losing its Editor instance when the main inspector selection changes.
(UUM-27882)</p></li>
<li><p>Editor: Fixed EditorWindowTitle so it is now called automatically. Previously, it needed to be initialized explicitly through a call to <code>EditorWindow.GetLocalizedContent</code>.
(<a href="https://issuetracker.unity3d.com/issues/editorwindowtitle-attribute-does-not-work-when-applied-to-custom-editorwindow">UUM-27557</a>)</p></li>
<li><p>Editor: Fixed InvalidOperationException when adding or removing components with the inspector in debug mode.
(<a href="https://issuetracker.unity3d.com/issues/inspector-invalidoperationexception-is-spammed-when-adding-a-new-component-and-being-in-the-debug-mode">UUM-21869</a>)</p></li>
<li><p>Editor: Fixed styling on the scene template help button.
(<a href="https://issuetracker.unity3d.com/issues/help-icons-for-the-scene-template-asset-are-displayed-in-different-backgrounds">UUM-27122</a>)</p></li>
<li><p>Editor: Fixed the globally shared Allocator.Temp atomic safety handle issue.</p></li>
<li><p>Editor: Fixed the styling of extra button action bar.
(<a href="https://issuetracker.unity3d.com/issues/search-button-hide-should-be-aligned-accordingly-to-select-and-open">UUM-26518</a>)</p></li>
<li><p>Editor: Fixed Timeline performance problem when previewing animated prefab instances.
(<a href="https://issuetracker.unity3d.com/issues/timeline-performance-problem-when-previewing-animated-prefab-instances">UUM-28636</a>)</p></li>
<li><p>Editor: Fixed <code>PlayerSettings.SetAdditionalIl2CppArgs</code> not being respected.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Editor: IL2CPP backup folder is no longer created if "Create Symbols.zip" build setting is set to Disabled on Android.
(UUM-28355)</p></li>
<li><p>Editor: Preset save no longer crashes the editor.
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-on-guiview-isvsyncenabled-when-saving-a-preset">UUM-29750</a>)</p></li>
<li><p>Graphics: Enabled the lifetime of temporary pointers in BatchRendererGroup to be tied to frame completion.
(UUM-27302)</p></li>
<li><p>HDRP: Fixed emissive decals not working on shaders based on LayeredLit, LayeredLitTesselation, LitTesselation, TerrainLit, TerrainLit_Basemap.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-emissive-decal-doesnt-show-in-terrain-when-the-decal-layer-and-light-layer-are-enabled-in-the-hdrp-asset">UUM-26749</a>)</p></li>
<li><p>HDRP: Fixed UI issues in Render Graph Viewer.
(UUM-28844)</p></li>
<li><p>Physics 2D: Ensure that enabling a 2D Trigger Collider component via script, correctly produces trigger callbacks.
(UUM-31874)</p></li>
<li><p>Scene/Game View: Added a crash when attempting to render more gizmo vertices than the gfx device can allocate.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-emitgizmogeometry-when-creating-a-large-amount-of-gizmos">UUM-27659</a>)</p></li>
<li><p>Serialization: Enabled PropertyModifications created prior to 2021.2 creating SerializeReference instances so that they now generate deterministic IDs.
(<a href="https://issuetracker.unity3d.com/issues/serializereference-instance-added-through-propertymodifications-can-cause-non-deterministic-builds">UUM-13245</a>)</p></li>
<li><p>Shadergraph: Fixed for [SGB-466] and related issues where nodes with warning or error badges would fail to clean up their resources properly and leave the shader graph editor in an error state.</p></li>
<li><p>Shadergraph: Improved performance of disconnecting nodes in large graphs.
(UUM-31610)</p></li>
<li><p>Shaders: Added a profiler marker for dynamic variant loading.
(UUM-31878)</p></li>
<li><p>Shaders: Added macros for passing textures (Cube, 2DArray, and CubeArray) around without samplers.
(<a href="https://issuetracker.unity3d.com/issues/unity-args-tex2darray-nosampler-doesnt-exist">UUM-31858</a>)</p></li>
<li><p>Shaders: Disabled <strong>Invalid pass index</strong> error from appearing while a variant is compiling.
(UUM-29549)</p></li>
<li><p>Shaders: Disabled shader compilation with debug symbols from using a non-existent file name.
(UUM-31851)</p></li>
<li><p>Shaders: Enabled using real pass names when compiling shaders for mesh data optimisation.
(UUM-15298)</p></li>
<li><p>Shaders: Fixed a rare crash when destroying shaders.
(UUM-27361)</p></li>
<li><p>TextCore: Enabled glyphs to display in the Inspector of a bitmap font asset.
(UUM-20325)</p></li>
<li><p>TextCore: Enabled <code>FontAsset.HasCharacter</code> to now support UTF32.
(<a href="https://issuetracker.unity3d.com/issues/tmp-tmp-fontasset-dot-hascharacter-overloads-are-missing-utf32-support">UUM-22663</a>)</p></li>
<li><p>TextCore: Fixed a null reference exception when using multi atlas textures.
(<a href="https://issuetracker.unity3d.com/issues/uielements-throw-exceptions-when-there-are-200-and-more-symbols">UUM-14265</a>)</p></li>
<li><p>TextCore: Fixed a ZWSP character with monospace font and &lt;mspace&gt; tag.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-textfield-caret-slash-cursor-is-offet-when-at-the-end-of-a-string">UUM-21144</a>)</p></li>
<li><p>TextCore: Fixed an issue where keyNotFoundException occurs when selecting entries in diacritical mark tables.
(UUM-20342)</p></li>
<li><p>UI Toolkit: Changed text effects so they are no longer contained by the bonds of each letter.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-label-text-shadow-effect-clips-when-its-blur-radius-and-offset-exceeds-letter-space">UUM-9524</a>)</p></li>
<li><p>UI Toolkit: Disabled foldout elements not being interactable in the inspector.
(UUM-25372)</p></li>
<li><p>UI Toolkit: Fixed an issue when adding or removing components with the inspector in debug mode.
(<a href="https://issuetracker.unity3d.com/issues/invalidoperationexception-is-spammed-when-adding-a-new-component-while-inspector-is-in-debug-mode">UUM-18854</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue when renaming a prefab with the inspector in debug mode.
(UUM-7218)</p></li>
<li><p>UI Toolkit: Fixed changing a script field with the inspector in debug mode.
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>UI Toolkit: Fixed exceptions being thrown when entering play mode with the inspector in debug mode.
(<a href="https://issuetracker.unity3d.com/issues/errors-when-entering-playmode-while-the-debug-inspector-is-enabled">UUM-22475</a>)</p></li>
<li><p>UI Toolkit: Fixed private fields disappearing when entering play mode with the inspector in debug mode.
(<a href="https://issuetracker.unity3d.com/issues/private-fields-disappear-in-the-inspector-window-when-entering-play-mode-if-the-inspector-window-mode-is-debug">UUM-20170</a>)</p></li>
<li><p>UI Toolkit: Unselecting, double clicking and triple clicking text fields now produces reliable and expected behaviour.
(UUM-9706)</p></li>
<li><p>VFX Graph: Fixed a crash while rendering with indirect using a null index buffer.
(<a href="https://issuetracker.unity3d.com/issues/vfx-crash-while-assigning-mesh-with-empty-index-buffer">UUM-20944</a>)</p></li>
<li><p>VFX Graph: Fixed minor issues with Cube and Sphere particle outputs.
(UUM-4792)</p></li>
<li><p>VFX Graph: Fixed shader errors when building with sphere or cube outputs.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-having-sphere-or-cube-output-in-the-scene-results-in-shader-errors-snd-build-failure-when-building-player">UUM-29387</a>)</p></li>
<li><p>VFX Graph: Fixed unexpected per frame garbage while using Timeline.
(UUM-26997)</p></li>
<li><p>VFX Graph: Removed exception when more than 5 flow inputs are exposed in subgraph.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-index-was-outside-the-bounds-of-the-array-is-thrown-when-connecting-more-than-5-flow-inputs-in-the-subgraph">UUM-557</a>)</p></li>
<li><p>Windows: Fixed quoting of the command line arguments.
(<a href="https://issuetracker.unity3d.com/issues/commandline-receives-different-commands-when-passing-through-system-dot-environment-dot-commandline-method">UUM-21600</a>)</p></li>
</ul>















<h3>Known Issues in 2022.2.15f1</h3>

<ul>
<li><p>2D: Editor goes into a loop while importing the “UI Toolkit Sample – Dragon Crashers” asset
(<a href="https://issuetracker.unity3d.com/issues/editor-goes-into-a-loop-while-importing-the-ui-toolkit-sample-dragon-crashers-asset">UUM-32117</a>)</p></li>
<li><p>DirectX12: [DXR] GPU memory leaks when Renderer.rayTracingMode is set to UnityEngine.Experimental.Rendering.RayTracingMode.DynamicGeometry
(<a href="https://issuetracker.unity3d.com/issues/dxr-gpu-memory-leaks-when-renderer-dot-raytracingmode-is-set-to-unityengine-dot-experimental-dot-rendering-dot-raytracingmode-dot-dynamicgeometry">UUM-31709</a>)</p></li>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Metal: [iOS] Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Project Browser: Project Browser shows package resources when package visibility is disabled
(<a href="https://issuetracker.unity3d.com/issues/project-browser-shows-package-resources-when-package-visibility-is-disabled">UUM-32517</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>UI Toolkit Framework: Cannot change scripts in Inspector window when in Debug mode
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Video: Crash on WindowsVideoMedia::GetFirstReadyTextureTime when focusing GameObject in Tutorial
(<a href="https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getfirstreadytexturetime-when-focusing-gameobject-in-tutorial">UUM-21948</a>)</p></li>
<li><p>Visual Effects: Fatal freeze when playing a VFX made with VFX Graph and consisting many effects
(<a href="https://issuetracker.unity3d.com/issues/fatal-freeze-when-playing-a-vfx-made-with-vfx-graph-and-consisting-many-effects">UUM-31773</a>)</p></li>
<li><p>Visual Effects - Legacy: [Android][Vulkan] Visualisation corruption occurs when rendering Particles to Render Texture
(<a href="https://issuetracker.unity3d.com/issues/android-vulkan-visualisation-corruption-occurs-when-rendering-particles-to-render-texture">UUM-21106</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>Windows: BuildPipeline.BuildPlayer ignores BuildPlayerOptions.locationPathName and attempts to build to the cached folder
(<a href="https://issuetracker.unity3d.com/issues/buildpipeline-dot-buildplayer-ignores-buildplayeroptions-dot-locationpathname-and-attempts-to-build-to-the-cached-folder">UUM-30952</a>)</p></li>
</ul>

<h3>2022.2.15f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>Universal RP: Added support for HDR output devices for desktop and console platforms.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>Graphics: Reduced the time the render thread spends on Profiler.FlushRenderCounters.</p></li>
<li><p>macOS: HDR support updated to use the EDR value for luminance.</p></li>
<li><p>Serialization: Improved performance of restoring managed objects during a domain reload (again!).</p></li>
<li><p>Serialization: Improved performance of restoring managed objects during a domain reload.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Editor: Added: - Renamed UnityEditor.PlayerSettings.D3DHDRBitDepth to UnityEditor.PlayerSettings.hdrBitDepth.<br>
enum D3DHDRDisplayBitDepth renamed to HDRDisplayBitDepth. Also, enum value names replaced:<br></p>

<ul>
<li>D3DHDRDisplayBitDepth::D3DHDRDisplayBitDepth10 has been replaced by HDRDisplayBitDepth::BitDepth10<br></li>
<li>D3DHDRDisplayBitDepth::D3DHDRDisplayBitDepth16 has been replaced by HDRDisplayBitDepth::BitDepth16<br>
Calls to the obsolete enums will be automatically updated to the new one. If using enum names as strings, ensure that the new ones get used as it won't be automatically converted to the new ones.</li>
</ul></li>
<li><p>Graphics: Added: ColorGamutUtility to retrieve the color primaries, white point or transfer function associated with a color gamut.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Editor: "Use display in HDR mode" checkbox is visible in the MacOS player settings.</p></li>
<li><p>Universal RP: The two subshaders in main URP shaders (Lit, SimpleLit, BakedLit, ComplexLit, Particles) have now been combined in to one.</p></li>
<li><p>Version Control: - Changed the icons for Unity Version Control rebranding<br></p>

<ul>
<li>Changed onboarding workflow.</li>
</ul></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Enabled showing the Apply/revert dialog to users if there are data changes in Sprite Editor Window before domain reload.
(<a href="https://issuetracker.unity3d.com/issues/sprite-editor-unsaved-changes-get-reverted-when-script-recompilation-finishes">UUM-26175</a>)</p></li>
<li><p>Editor: Avoid Gizmo being affected by parent component Scaling.
(UUM-4782)</p></li>
<li><p>Editor: Fixed a Drag and Drop to parent folder when the parent contains a child folder with the same name.
(<a href="https://issuetracker.unity3d.com/issues/dragging-and-dropping-a-uss-file-to-a-folder-in-the-project-window-moves-the-file-to-a-subfolder">UUM-11707</a>)</p></li>
<li><p>Editor: Fixed an issue when using Entities certain types of gizmos for components in subscenes were not rendered in the Scene view.
(UUM-26723)</p></li>
<li><p>Editor: Fixed an issue where scripted importer override could cause infinite imports.
(<a href="https://issuetracker.unity3d.com/issues/editor-hangs-opening-a-project-when-the-2d-animation-package-is-removed">UUM-26859</a>)</p></li>
<li><p>Editor: Fixed copy and paste using keyboard for Transform rotation and scale in Inspector window.
(<a href="https://issuetracker.unity3d.com/issues/not-all-of-the-transform-component-parameters-get-copied-and-pasted-when-using-keyboard-shortcuts">UUM-21702</a>)</p></li>
<li><p>Editor: Fixed exceptions while opening game view mode dropdown.
(UUM-5869)</p></li>
<li><p>Editor: Fixed filtering result is not removed and folder contents shown when using "Frame Selected" or its shortcut "F" in the Project window.
(<a href="https://issuetracker.unity3d.com/issues/filtering-is-not-disabled-when-expanding-search-results-using-frame-selected-or-its-shortcut-f-in-the-project-window">UUM-31369</a>)</p></li>
<li><p>Editor: Fixed the project from freezing due to a faulty Raycast operation in the navigation system.
(UUM-28701)</p></li>
<li><p>Editor: Objects now keep their non-serializable state when reloaded.
(<a href="https://issuetracker.unity3d.com/issues/instancedcomponent-has-been-destroyed-dot-dot-dot-error-is-thrown-when-re-entering-play-mode-after-saving-a-prefab-in-play-mode-while-domain-reload-and-scene-reload-are-disabled">UUM-7785</a>)</p></li>
<li><p>Graphics: Fixed bug with Streaming Virtual Texturing throwing a "The transcoded bitstream was invalid" error that was caused by build pipeline bug corrupting virtual texture regions located in virtual texture files larger than 2GB. When using SVT, it is recommended to rebuild your Player's build in order to get the corrected streaming files  (GTS and GTP files) in the Streaming Assets folder.
(UUM-30987)</p></li>
<li><p>HDRP: Fixed water simulation time in playmode.</p></li>
<li><p>iOS: Fixed a memory leak when using <code>GL.Clear</code> in MonoBehaviour Update/LateUpdate.
(<a href="https://issuetracker.unity3d.com/issues/ios-memory-leaks-when-calling-gl-dot-clear-from-update-slash-late-update">UUM-8457</a>)</p></li>
<li><p>Shadergraph: Fixed issue where custom mesh selector for master preview would fail to initialize. [SGB-445][IN-30614]</p></li>
<li><p>Shadergraph: Fixed issue where node searcher would fail to populate when shadergraph was undocked after domain reload. [SGB-439][IN-30581]</p></li>
<li><p>Shadergraph: Fixed issue where nodes with dynamic vectors would not correctly cache properties for previews. [SGB-359]</p></li>
<li><p>Shaders: Fixed material copy-paste breaking the material by adding a CopyMatchingPropertiesFromMaterial.
(<a href="https://issuetracker.unity3d.com/issues/copy-pasting-material-properties-between-different-materials-throws-exceptions">UUM-22634</a>)</p></li>
<li><p>UI: Animation with UI Vertex colors is no longer choppy when the Color Space is set to Linear.
(<a href="https://issuetracker.unity3d.com/issues/animation-with-ui-vertex-colors-is-choppy-when-the-color-space-is-set-to-linear">UUM-12666</a>)</p></li>
<li><p>Universal RP: Fixed Render Targets being released when using multiple cameras.
(<a href="https://issuetracker.unity3d.com/issues/custom-renderer-feature-doesnt-work-and-errors-are-thrown-when-using-the-official-imported-urp-samples">UUM-25186</a>)</p></li>
<li><p>Version Control: - Fixed blurry icons in the Unity Version Control window and toolbar button<br></p>

<ul>
<li>Fixed Pending Changes tab not always opening its selected item's location in Project window<br></li>
<li>Fixed "Checked-out (changed)" status icon not showing up on Pending Changes tab<br></li>
<li>Fixed issue that prevented new packages from being installed unless user enters play mode.</li>
</ul></li>
<li><p>VFX Graph: Fixed a crash when removing VFXRenderer from a disabled GameObject.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-memorymanager-deallocate-when-reimporting-vfx-graph-asset">UUM-16391</a>)</p></li>
<li><p>VFX Graph: Improved handling of infinite values with Gizmo.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-errors-are-thrown-to-the-console-when-shape-nodes-contain-parameters-with-large-numbers">UUM-564</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.14f1</h3>

<ul>
<li><p>2D: Editor goes into a loop while importing the “UI Toolkit Sample – Dragon Crashers” asset
(<a href="https://issuetracker.unity3d.com/issues/editor-goes-into-a-loop-while-importing-the-ui-toolkit-sample-dragon-crashers-asset">UUM-32117</a>)</p></li>
<li><p>Camera: [2022.2] “targetDisplay” doesn’t change the camera’s “Target Display” setting when called from the script
(<a href="https://issuetracker.unity3d.com/issues/2022-dot-2-targetdisplay-doesnt-change-the-cameras-target-display-setting-when-called-from-the-script">UUM-25995</a>)</p></li>
<li><p>DirectX12: [DXR] GPU memory leaks when Renderer.rayTracingMode is set to UnityEngine.Experimental.Rendering.RayTracingMode.DynamicGeometry
(<a href="https://issuetracker.unity3d.com/issues/dxr-gpu-memory-leaks-when-renderer-dot-raytracingmode-is-set-to-unityengine-dot-experimental-dot-rendering-dot-raytracingmode-dot-dynamicgeometry">UUM-31709</a>)</p></li>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>iOS:  Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Linux: [Vulkan] Crash on "__sigaction" when Vulkan is set as default Graphics API
(<a href="https://issuetracker.unity3d.com/issues/linux-vulkan-crash-on-sigaction-when-vulkan-is-set-as-default-graphics-api">UUM-30668</a>)</p></li>
<li><p>Metal: [iOS] Framerate drops below 120fps when tapping the screen in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>Scene Management: Crash on Transform::CheckStructure when manually opening a scene
(<a href="https://issuetracker.unity3d.com/issues/crash-on-transform-checkstructure-when-manually-opening-a-scene">UUM-31129</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Video: Crash on WindowsVideoMedia::GetFirstReadyTextureTime when focusing GameObject in Tutorial
(<a href="https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getfirstreadytexturetime-when-focusing-gameobject-in-tutorial">UUM-21948</a>)</p></li>
<li><p>Visual Effects: Fatal freeze when playing a VFX made with VFX Graph and consisting many effects
(<a href="https://issuetracker.unity3d.com/issues/fatal-freeze-when-playing-a-vfx-made-with-vfx-graph-and-consisting-many-effects">UUM-31773</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>Windows: BuildPipeline.BuildPlayer ignores BuildPlayerOptions.locationPathName and attempts to build to the cached folder
(<a href="https://issuetracker.unity3d.com/issues/buildpipeline-dot-buildplayer-ignores-buildplayeroptions-dot-locationpathname-and-attempts-to-build-to-the-cached-folder">UUM-30952</a>)</p></li>
</ul>

<h3>2022.2.14f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Animation: Reduced the cost of building muscle clips, which among other things speeds up Animator.Awake.</p></li>
<li><p>Animation: Reduced the number of GC allocations when calling Animator.GetParameter(int index) and generally made it faster.</p></li>
<li><p>Burst: Added support for ChromeOS</p></li>
<li><p>Burst: Windows/ARM64 targeting support.</p></li>
<li><p>Editor: Animation Events are now organized into sub-menus in the inspector.</p></li>
<li><p>Editor: Reduced cost of outline rendering, which improves the frame rate of the editor when many objects are selected.</p></li>
<li><p>GI: Added hotkeys for opening the lighting window and performing bakes. These are Ctrl+9 and Ctrl+Shift+L respectively.</p></li>
<li><p>iOS: "Thread Performance Checker" is now disabled by default in a generated xcode project.</p></li>
<li><p>Kernel: Performance in heavily run code paths for NativeArray, UnsafeUtility, and AtomicSafetyHandle improved through inlining.</p></li>
<li><p>Scripting: Switched some path sorting during compilation from an invariant culture compare to an ordinal compare, speeding up C# compilation when scripts are changed.</p></li>
<li><p>Shaders: Reduced the time spent in the asset post processing code for shader assets, which speeds-up the import of shaders.</p></li>
<li><p>UI Toolkit: Added missing keyboard navigation support for left and right keys in TreeView.</p></li>
<li><p>VFX Graph: Greatly reduced the import cost of VFX Graph objects, especially when importing many at once.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li>Animation: Added: AnimationCurve: ClearKeys and CopyFromAPI.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-volume-curves-have-impact-even-if-they-are-disabled">UUM-20456</a>, <a href="https://issuetracker.unity3d.com/issues/hdrp-revert-property-doesnt-work-on-curves">UUM-20458</a>)</li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Burst: Changed Burst Inspector input handling so that arrow-keys can be used to select in search boxes.</p></li>
<li><p>Burst: Made Burst Inspector's target job load asynchronous.</p></li>
<li><p>Serialization: Big-endian serialized files will now be automatically rewritten to little-endian in the editor, as Unity 2023.2 will drop support for reading such files.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed case where Sprite is not being masked when using SpriteShape.
(<a href="https://issuetracker.unity3d.com/issues/2d-sprite-is-not-being-masked-when-using-spriteshape">UUM-26584</a>)</p></li>
<li><p>2D: Fixed truncation of path for saving Tile assets when ending is not a file.
(<a href="https://issuetracker.unity3d.com/issues/tile-palette-multi-drag-and-drop-sprite-asset-creation-location-is-non-deterministic">UUM-29490</a>)</p></li>
<li><p>Android: Enabled the unlock image to be set on each lock rather than only on the first.
(<a href="https://issuetracker.unity3d.com/issues/android-the-previous-screen-shown-when-unlocking-a-device">UUM-21954</a>)</p></li>
<li><p>Android: Fixed an issue where the Accelerometer values are not updated when the ASENSOR_TYPE_LINEAR_ACCELERATION sensor is disabled on certain Samsung devices.
(<a href="https://issuetracker.unity3d.com/issues/android-input-dot-acceleration-doesnt-get-the-acceleration-of-some-devices-when-disabling-input-dot-gyro">UUM-20754</a>)</p></li>
<li><p>Animation: Default values for animation curve parameters on Volume Components where being shared with current interpolated value on the volume stack.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-volume-curves-have-impact-even-if-they-are-disabled">UUM-20456</a>, <a href="https://issuetracker.unity3d.com/issues/hdrp-revert-property-doesnt-work-on-curves">UUM-20458</a>)</p></li>
<li><p>Audio: Fixed corrupt audio playing for the first time in the first launch, when audio mixer is assigned at runtime.
(<a href="https://issuetracker.unity3d.com/issues/an-audioclip-played-through-an-audiomixer-provides-different-sounds-of-the-same-audio-when-playing-for-the-first-time">UUM-19696</a>)</p></li>
<li><p>Burst: Burst managed breakpoints might fail to work, after a domain reload.</p></li>
<li><p>Burst: Domain completed stall when switching between debug/release scripting modes when burst compilation is needed for items in the new domain.</p></li>
<li><p>Burst: Fixed "An item with the same key has already been added" compiler error that could occur when duplicate field names were present in obfuscated assemblies.</p></li>
<li><p>Burst: Fixed "An item with the same key has already been added" hashing error that could occur if obfuscators changed nested type names to have the same name and different namespaces.</p></li>
<li><p>Burst: Fixed "Failed to find entry-points: Mono.Cecil.AssemblyResolutionException: Failed to resolve assembly" error that was displayed when Burst tried to compile an assembly that had C# compilation errors.</p></li>
<li><p>Burst: Fixed a <code>BadImageFormatException</code> error that could occur in some player builds.</p></li>
<li><p>Burst: Fixed Burst compilation error relating to <code>UnityEngine.Assertions.Assert.Fail</code> when doing player builds with high stripping settings.</p></li>
<li><p>Burst: Fixed code-gen issue where side-effects before a conditional throw would be ignored.</p></li>
<li><p>Burst: Fixed inaccurate stacktraces when throwing an exception from Burst in specific cases.</p></li>
<li><p>Burst: Fixed incorrect codegen when having multiple <code>try</code>-<code>finally</code> blocks inside another <code>try</code>-<code>finally</code> block (for example from <code>foreach</code> loops).</p></li>
<li><p>Burst: Fixed incorrect pdb path for AoT dll libraries.</p></li>
<li><p>Burst: Fixed line highlight and register highlight not clearing when Burst Inspector settings change.</p></li>
<li><p>Burst: Fixed possible deadlock when compiling after domain reload.</p></li>
<li><p>Burst: Fixed that some changes made to versioned assemblies wouldn't get picked up and compiled by Burst.</p></li>
<li><p>Burst: Fixed <code>MethodDecoderException</code> when trying to call <code>CompileFunctionPointer</code> on a nested static method.</p></li>
<li><p>Burst: Neon intrinsics: fixed default target CPU for Arm Mac Standalone builds.</p></li>
<li><p>Core: Enabled <code>JobsUtility.ThreadIndex</code> and <code>JobsUtility.ThreadIndexCount</code> to now be used in Burst compiled static constructors. Previously, their use would result in a "BC1091: External and internal calls are not allowed inside static constructors" error.
(UUM-31459)</p></li>
<li><p>DX12: Fixed for samplers resetting to point on streaming texture mips.
(UUM-27504)</p></li>
<li><p>Editor: Fixed a bug with animation preview.
(<a href="https://issuetracker.unity3d.com/issues/object-keeps-the-state-of-the-animation-frame-when-exiting-animation-preview-mode">UUM-27517</a>)</p></li>
<li><p>Editor: Fixed a situation where opening a regular window after an auxiliary window can cause a crash if the window closes.
(<a href="https://issuetracker.unity3d.com/issues/editor-crash-on-guiview-oninputevent-when-calling-editorwindow-dot-createwindow-from-inside-ongui">UUM-29982</a>)</p></li>
<li><p>Editor: Fixed EnumField not updating the value label when calling Init and the value was the same.<br>
Fixed EnumField updating the label when calling SetValueWithoutNotify and the value had not changed.
(<a href="https://issuetracker.unity3d.com/issues/inconsistent-behavior-of-enumfield-initialization-when-an-enum-type-is-used-as-a-generic-type">UUM-28904</a>)</p></li>
<li><p>Editor: Fixed freeform light tessellation for Light2D.
(<a href="https://issuetracker.unity3d.com/issues/freeform-light2d-lighting-is-incorrect-when-moving-around-nodes">UUM-9674</a>)</p></li>
<li><p>Editor: Fixed issue where -nographics command line argument was not being forwarded to the Asset Import Workers.
(UUM-29722)</p></li>
<li><p>Editor: Fixed multiple mouse click event reported in imgui.
(<a href="https://issuetracker.unity3d.com/issues/linux-ui-toolkit-callback-event-is-triggered-twice-when-pressing-on-ui-toolkit-element">UUM-30742</a>)</p></li>
<li><p>Editor: Fixed shortcut profile delete dialog message overflow in Shortcut Manager.
(<a href="https://issuetracker.unity3d.com/issues/delete-shortcut-profile-window-does-not-fit-the-size-of-the-profile-title">UUM-28294</a>)</p></li>
<li><p>Editor: Improved the formatting for the context column in Shortcut Manager.
(UUM-28692)</p></li>
<li><p>Entities Graphics: Fixed Custom passes when using the BatchRendererGroup.
(UUM-30471)</p></li>
<li><p>GI: Fixed an issue where scene debug visualization modes would look broken when baking multiple scenes together.
(UUM-17494)</p></li>
<li><p>GI: Fixed an issue with Light Explorer filtering when many lights are present.
(<a href="https://issuetracker.unity3d.com/issues/light-explorer-search-loses-focus-when-typed-into">UUM-30672</a>)</p></li>
<li><p>Graphics: Fixed blitting from <code>RenderTexture.active</code> to another RenderTexture with a shader sampling a texture at specific UV values causing visual artifacts.
(<a href="https://issuetracker.unity3d.com/issues/blitting-from-rendertexture-dot-active-to-another-rendertexture-with-a-shader-sampling-a-texture-at-specific-uv-values-causes-visual-artifacts">UUM-7994</a>)</p></li>
<li><p>Graphics: Fixed for problem with reflecton probe normalization data being invalid.
(<a href="https://issuetracker.unity3d.com/issues/baked-reflecton-probe-normalization-data-is-invalid-when-using-hdrp">UUM-28054</a>)</p></li>
<li><p>Graphics: Removed the deprecation of SceneRenderPipeline and limited its behaviour until a replacement is proposed.
(<a href="https://issuetracker.unity3d.com/issues/deprecated-scenerenderpipeline-script-does-not-mention-any-alternatives-for-setting-up-specific-render-pipelines-during-scene-loading">UUM-11126</a>)</p></li>
<li><p>IL2CPP: Corrected the clipped output from <code>System.Diagnostics.Debug.WriteLine()</code>.
(<a href="https://issuetracker.unity3d.com/issues/system-dot-diagnostics-dot-debug-dot-writeline-fails-to-print-the-first-10-characters-of-a-debug-message-when-used-in-a-uwp-build">UUM-26431</a>)</p></li>
<li><p>IL2CPP: Fixed a bug where IL2CPP returns an invalid pointer on P/Invoke methods that returns a non-blittable struct by reference.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-returns-a-pointer-to-the-stack-value-which-points-to-invalid-memory-when-generating-code">UUM-20790</a>)</p></li>
<li><p>IL2CPP: Fixed a bug where referenced assets are unloaded by <code>Resources.UnloadUnusedAssets()</code>.
(<a href="https://issuetracker.unity3d.com/issues/referenced-assets-are-unloaded-by-resources-dot-unloadunusedassets-when-used-in-il2cpp-build">UUM-26883</a>)</p></li>
<li><p>IL2CPP: Fixed a C++ compilation error when assigning to a ref parameter in shared generic code with constraints.
(UUM-28821)</p></li>
<li><p>IL2CPP: Fixed a C++ compilation error when structs had static fields with circular type references.
(<a href="https://issuetracker.unity3d.com/issues/build-fails-when-scripting-backend-is-il2cpp-and-threadstatic-attribute-is-applied-to-circular-structs">UUM-16351</a>)</p></li>
<li><p>IL2CPP: Fixed an intermittent crash on POSIX platforms which can happen when <code>Directory.GetFiles</code> is called while files in that directory are deleted on a different thread.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-android-ios-player-crash-when-system-dot-io-dot-directory-dot-getfiles-is-called-during-file-deletion-on-another-thread">UUM-29790</a>)</p></li>
<li><p>IL2CPP: Improved the stability of generated field names.
(UUM-23162)</p></li>
<li><p>IL2CPP: Marshalled a null value in a delegate field as a null delegate.
(<a href="https://issuetracker.unity3d.com/issues/crashes-when-invoking-astruct-callback">UUM-29202</a>)</p></li>
<li><p>Kernel: Added additional logging when deallocating temp memory that is older than permitted lifetime.
(UUM-23100)</p></li>
<li><p>License: Fixed an issue where the Editor quits when activating ULF license and the license already exists.
(<a href="https://issuetracker.unity3d.com/issues/editor-quits-during-license-activation-serial-mismatch">UUM-31031</a>)</p></li>
<li><p>Mono: Removed throw from attribute setters generated by profile stubber.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-using-a-service-locator-to-retrieve-a-static-list-of-classes-doesnt-work-with-il2cpp-in-a-built-player">UUM-18689</a>)</p></li>
<li><p>Mono: Removed <code>!sig-&gt;is_inflated</code> assert from icall wrapper generator.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-condition-sig-is-inflated-and-and-sig-has-type-parameters-not-met-when-a-function-pointer-is-used-in-a-generic-method">UUM-27888</a>)</p></li>
<li><p>Package: - Android SDK Level 33 (Tiramisu) support now available.<br></p>

<ul>
<li>Added necessary post notification permission to manifest.<br></li>
<li>Package will now ask for permission during initialization if required.<br></li>
<li>External Dependency Manager for Unity (EDM4U) and Mobile Dependency Resolver (MDR) support now available. When either is installed:<br></li>
<li>A new <code>PushSDKDependencies.xml</code> file is generated for them to use.<br></li>
<li><code>InsertPushNotificationDependenciesIntoGradleScript</code> will not run to prevent duplication from gradle.<br></li>
<li>Fixed errors appearing in the Editor Play Mode due to platform specific classes instantiating.</li>
</ul></li>
<li><p>Package Manager: Fixed all delayed fields when editing a package in the inspector.
(<a href="https://issuetracker.unity3d.com/issues/the-error-invalid-expected-a-semver-compatible-value-is-thrown-when-adding-a-dependency-in-the-inspector-with-letters-in-the-version-name">UUM-19658</a>)</p></li>
<li><p>Shadergraph: Addressed error feedback on import of graphs with invalid or missing targets, allowing them to be modified and saved. [SGB-166][SGB-167]</p></li>
<li><p>Shadergraph: Addressed issue where duplicate serialized blackboard category children would in subgraphs would brick the ShaderGraph editor. [SGB-378]</p></li>
<li><p>Shadergraph: Addressed issue where missing targets were not handled on import. [SGB-1]</p></li>
<li><p>Shadergraph: Addressed various issues with the Swizzle node. [SGB-159]</p></li>
<li><p>Shadergraph: Fixed issue where custom interpolator previews would provide erroneous results when connecting through a reroute node. [SGB-89]</p></li>
<li><p>Shadergraph: Fixed issue where reroute node would sometimes show the wrong color for its appropriate inputs. [SGB-17]</p></li>
<li><p>Shadergraph: Fixed issue where subgraph gradient blackboard properties could have naming conflicts with parent graphs. [SGB-310]</p></li>
<li><p>Shadergraph: Fixed issue where the Gradient Noise Node was causing implicit truncation warnings. [SGB-469]</p></li>
<li><p>Shadergraph: Fixed issue where the view position of the graph editor would sometimes be forgotten when swapping between two open shadergraph editor windows. [SGB-377]</p></li>
<li><p>SRP Core: Fixed Decal Projector Editor fields so they are now saved when editing a prefab.
(<a href="https://issuetracker.unity3d.com/issues/changes-made-to-decal-project-prefab-in-the-inspector-are-not-saved">UUM-29105</a>)</p></li>
<li><p>SRP Core: Revert Property for animation curves on Volume Components
(<a href="https://issuetracker.unity3d.com/issues/hdrp-volume-curves-have-impact-even-if-they-are-disabled">UUM-20456</a>, <a href="https://issuetracker.unity3d.com/issues/hdrp-revert-property-doesnt-work-on-curves">UUM-20458</a>)</p></li>
<li><p>UI Toolkit: Added missing support for TreeView reordering, including depth reordering, expansion when hovering an expandable item, and sibling drop marker.
(UUM-3683)</p></li>
<li><p>UI Toolkit: Fixed element becoming invisible after a reorder in an animated ListView.
(UUM-21272)</p></li>
<li><p>UI Toolkit: Fixed items going slightly out of bounds in ListViews.
(<a href="https://issuetracker.unity3d.com/issues/last-listview-element-size-is-calculated-incorrectly-when-creating-it-through-a-script">UUM-28519</a>)</p></li>
<li><p>UI Toolkit: Fixed items in animated lists sometimes disappearing.
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>UI Toolkit: Fixed NullReferenceException followed by ArgumentException when removing an element from its panel during a style transition.
(UUM-22564)</p></li>
<li><p>UI Toolkit: Fixed the reported TreeView state after a reorder operation.
(<a href="https://issuetracker.unity3d.com/issues/treeview-does-not-report-correct-state-after-reordering">UUM-3478</a>)</p></li>
<li><p>UI Toolkit: Fixed the sound on Mac when navigating collection views with keyboard.
(UUM-26264)</p></li>
<li><p>VFX Graph: Exposure weight slider was not hidden when a shadergraph was assigned to an output context.
(UUM-4753)</p></li>
<li><p>VFX Graph: Fixed errors in the console when undoing changes from gizmo in some specific conditions.
(<a href="https://issuetracker.unity3d.com/issues/vfx-errors-are-thrown-to-the-console-when-undoing-operation-after-editing-exposed-gizmos">UUM-21929</a>)</p></li>
<li><p>VFX Graph: The VFX component inspector had an unpaired <code>EditorGUI.BeginChangeCheck</code> that was breaking the state of <code>GUI.changed</code>
(<a href="https://issuetracker.unity3d.com/issues/vfx-editorgui-dot-beginchangecheck-and-editorgui-dot-endchangecheck-not-working-with-visual-effect-editor">UUM-15919</a>)</p></li>
<li><p>Video: Disabled replacement operator new/delete for Android so it no longer causes a crash with VideoPlayer.
(UUM-21724)</p></li>
<li><p>Video: Improved Variable Frame Rate support for Apple platforms.
(<a href="https://issuetracker.unity3d.com/issues/video-created-with-avfoundation-framework-is-not-played-when-entering-the-play-mode">UUM-21455</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.13f1</h3>

<ul>
<li><p>Build Systems: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>Camera: [2022.2] “targetDisplay” doesn’t change the camera’s “Target Display” setting when called from the script
(<a href="https://issuetracker.unity3d.com/issues/2022-dot-2-targetdisplay-doesnt-change-the-cameras-target-display-setting-when-called-from-the-script">UUM-25995</a>)</p></li>
<li><p>DirectX12: [DXR] GPU memory leaks when Renderer.rayTracingMode is set to UnityEngine.Experimental.Rendering.RayTracingMode.DynamicGeometry
(<a href="https://issuetracker.unity3d.com/issues/dxr-gpu-memory-leaks-when-renderer-dot-raytracingmode-is-set-to-unityengine-dot-experimental-dot-rendering-dot-raytracingmode-dot-dynamicgeometry">UUM-31709</a>)</p></li>
<li><p>DirectX12: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>iOS:  Rendering freezes when the orientation is changed
(<a href="https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed">UUM-9480</a>)</p></li>
<li><p>Linux: [Vulkan] Crash on "__sigaction" when Vulkan is set as default Graphics API
(<a href="https://issuetracker.unity3d.com/issues/linux-vulkan-crash-on-sigaction-when-vulkan-is-set-as-default-graphics-api">UUM-30668</a>)</p></li>
<li><p>Metal: [iOS] Framerate drops below 120fps when tapping the screen in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Scene Management: Crash on Transform::CheckStructure when manually opening a scene
(<a href="https://issuetracker.unity3d.com/issues/crash-on-transform-checkstructure-when-manually-opening-a-scene">UUM-31129</a>)</p></li>
<li><p>Texture: [AsyncUpload] Crash on Sprite::Transfer when building the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-sprite-transfer-when-building-the-project">UUM-31364</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>XR SRP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
</ul>

<h3>2022.2.13f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>Graphics: Added BatchCullingContext.cullingFlags to specify whether lightmapped shadow casters should be culled for this view.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>Apple TV: TvOS now uses launch screen storyboard.</p></li>
<li><p>iOS: IOS/tvOS launch screen now is shown only by OS, and is not shown again by Unity itself.</p></li>
<li><p>Player: Added -native-leak-detection command line argument to Unity Editor and standalone players. can be Disabled, Enabled, or EnabledWithStackTrace. Stack Traces are only available in the Unity Editor and development builds.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Core: Added: <code>JobsUtility.ThreadIndexCount</code> returns the maximum number of job workers that can work on a job at the same time. The job system will create a number of job worker threads that will be no greater than the number of logical CPU cores for the platform. However, since arbitrary threads can execute jobs via work stealing we allocate extra workers which act as temporary job worker threads. <code>JobsUtility.ThreadIndexCount</code> reflects the maximum number of job worker threads<br>
plus temporary workers the job system will ever use. As such, this value is useful for allocating buffers which should be subdivided evenly between job workers since <code>JobsUtility.ThreadIndex</code> and <code>NativeSetThreadIndexAttribute</code> will never return a value greater than <code>JobsUtility.ThreadIndexCount</code>.
(UUM-29945)</p></li>
<li><p>Core: Added: <code>JobsUtility.ThreadIndex</code> returns the index for the current thread when executing a job, otherwise 0. When multiple threads are working on a parallel job at once, no two threads will have the same index. The range is [0, <code>JobsUtility.ThreadIndexCount</code>). The value returned when called from within a job is the same as the one stored in a job member decorated with <code>Unity.Collections.LowLevel.Unsafe.NativeSetThreadIndexAttribute</code>, otherwise 0.
(UUM-29945)</p></li>
<li><p>Editor: Added: GetSampleMetadataAsSpan to RawFrameDataView.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Kernel: Made NativeArray.Dispose consistent when disposing uninitialized container.</p></li>
<li><p>Version Control: Updated branding from "Plastic SCM" to "Unity Version Control"<br>
Improved offline experience by disabling the plugin when there is no internet connection.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed a crash when a user loads a Tilemap with a TilemapCollider2D and CompositeCollider2D with an invalid Sprite.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-tilemapcollider2d-generatepathsfromsprite-when-opening-specific-project">UUM-29132</a>)</p></li>
<li><p>Android: Fixed a frame debugger crash when using mono scripting on Android.
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-after-pressing-renderforward-dot-renderloopjob-in-frame-debugger-when-scripting-backend-is-set-to-mono">UUM-14632</a>)</p></li>
<li><p>Animation: Fixed an issue where unexpected MonoBehaviors would remain on the GameObject in a preview scene.
(<a href="https://issuetracker.unity3d.com/issues/error-missingcomponentexception-is-thrown-when-clicking-on-prefab-with-canvasrenderer-component">UUM-21605</a>)</p></li>
<li><p>Asset Pipeline: Removed use of auto keyword in LMDB library.
(UUM-29394)</p></li>
<li><p>Core: CullResults.ComputeSpotShadowMatricesAndCullingPrimitives will now output culling planes derived from the projection matrix.</p></li>
<li><p>DX12: Fixed a crash due to copying sampler descriptors.
(UUM-29343)</p></li>
<li><p>Editor: Detect asset corruption before uploading to accelerator.
(<a href="https://issuetracker.unity3d.com/issues/asset-corruption-when-using-the-accelerator-cache-server">UUM-26502</a>)</p></li>
<li><p>Editor: Enabled Gradle file search to use RegEx when looking for Play library dependencies, which identifies dependencies included with both double or single quotes.
(UUM-29110)</p></li>
<li><p>Editor: Fixed an issue with animators where the root bone would be reset for humanoid in edge cases with the pose playable.
(<a href="https://issuetracker.unity3d.com/issues/animated-model-translated-down-when-interrupting-a-transition">UUM-26509</a>)</p></li>
<li><p>Editor: Fixed handling msaa resolve in Frame Debugger when connected to Meta Quest over display link.
(<a href="https://issuetracker.unity3d.com/issues/xr-quest-2-using-the-frame-debugger-camera-dot-render-commands-are-displayed-in-red-and-black-when-msaa-is-activated">UUM-1552</a>)</p></li>
<li><p>Editor: Fixed jumping of intensity slider values in Color Picker HDR.
(UUM-27978)</p></li>
<li><p>Editor: Fixed ReorderableList element culling when drawing with GUI rotation or scaling applied.
(<a href="https://issuetracker.unity3d.com/issues/ui-doesnt-render-list-contents-when-using-guiutility-dot-scalearoundpivot">UUM-10761</a>)</p></li>
<li><p>Editor: Fixed Vulkan shaders that use shadow map 2D array textures.
(<a href="https://issuetracker.unity3d.com/issues/android-texture2d-array-shadow-does-not-work-when-built-for-android-with-vulkan-api">UUM-17756</a>)</p></li>
<li><p>Editor: Leak Detection happens after all DomainUnload events are handled. This reduces the number of false-positive leaks detected if memory is disposed in a DomainUnload event handler.
(UUM-29342)</p></li>
<li><p>Editor: Preferences&gt;Jobs&gt;Leak Detection Level setting will reset from Enabled With Stack Trace to Enabled when the Unity Editor is restarted. The setting will persist across domain reloads. The level can be set programmatically using UnsafeUtility.SetLeakDetectionMode.
(UUM-29340)</p></li>
<li><p>Editor: Removed an unnecessary cbuffer in DOTS_INSTANCING_ON variant.
(UUM-26107)</p></li>
<li><p>Editor: The color picker can now select the proper color on a secondary monitor on macOS.
(<a href="https://issuetracker.unity3d.com/issues/cant-select-color-from-editor-with-color-picker-when-unity-editor-is-on-secondary-monitor">UUM-2501</a>)</p></li>
<li><p>GI: Fixed crash on Mac M1 when attempting to bake a reflection probe in URP.
(<a href="https://issuetracker.unity3d.com/issues/silent-crash-when-attempting-to-bake-a-reflection-probe-in-urp">UUM-1370</a>)</p></li>
<li><p>Graphics: Fixed a case where <code>GraphicsBuffer.UnlockBufferAfterWrite</code> would take an excessively long time on D3D11.
(UUM-29029)</p></li>
<li><p>Graphics: Product name will now be used as application name when creating Vulkan instance.
(<a href="https://issuetracker.unity3d.com/issues/there-is-no-option-to-change-the-string-being-passed-when-unity-passes-the-string-to-the-vkcreateinstance-function">UUM-25486</a>)</p></li>
<li><p>HDRP: Fixed error with water and dynamic pass culling.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-water-system-throws-errors-when-decal-is-off-in-hdrp-asset-and-dynamic-render-pass-culling-is-checked-on-hdrp-global-settings-water-lighting-camera-depth-texture-is-not-set">UUM-26182</a>)</p></li>
<li><p>Networking: Fixed an issue that could prevent UDP sockets from being created on Windows when TDI filters were installed.</p></li>
<li><p>Particles: Fixed crash due to access of potentially released job memory.</p></li>
<li><p>Physics 2D: Enabled a single path PolygonCollider2D to alway uses a clockwise winding internally to give consistent results when used in a CompositeCollider2D.
(<a href="https://issuetracker.unity3d.com/issues/physics2d-dot-overlappoint-does-not-work-when-go-with-the-compositecollider2d-component-has-overlapping-children">UUM-28561</a>)</p></li>
<li><p>Physics 2D: Enabled both OnTriggerExit2D and OnCollisionExit2D to be called when a scene is unloaded if required. This only works when <code>Physics2D.callbacksOnDisable</code> is active.
(<a href="https://issuetracker.unity3d.com/issues/ontriggerexit2d-not-called-when-colliders-are-disabled-due-to-getting-unloaded">UUM-28747</a>)</p></li>
<li><p>Player: Native Leak Detection now works in Player builds. Previously it would not report upon ProcessExit.
(UUM-29356)</p></li>
<li><p>Scene/Game View: Fixed the rectangle selection conflicts with scene view tools.
(<a href="https://issuetracker.unity3d.com/issues/gameobjects-deselect-while-rotating-the-scene-view-camera-using-alt-plus-lmb-combination-when-the-console-is-populated">UUM-22218</a>)</p></li>
<li><p>UI Toolkit: Enabled users to set the ScrollView's mouse wheel scroll size (and therefore, its speed) with the Mouse Wheel Scroll Size attribute, regardless of its vertical and horizontal page sizes.
(<a href="https://issuetracker.unity3d.com/issues/slow-scroll-view-scrolling-when-entering-play-mode-and-in-builds">UUM-18554</a>)</p></li>
<li><p>UI Toolkit: Fixed caret repositioning while renaming in UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-cant-reposition-caret-or-select-text-with-cursor-when-renaming-element">UUM-27169</a>)</p></li>
<li><p>UI Toolkit: Fixed error thrown when pressing the add button with a list of value types.
(<a href="https://issuetracker.unity3d.com/issues/argumentnullexception-thrown-when-clicking-the-add-footer-button-of-listview-which-itemssource-is-a-list-of-value-type">UUM-23208</a>)</p></li>
<li><p>UI Toolkit: Fixed error thrown when removing elements from the middle of a list.
(<a href="https://issuetracker.unity3d.com/issues/error-is-thrown-when-removing-an-element-from-a-list-in-a-scriptableobject-in-the-inspector-window">UUM-26290</a>)</p></li>
<li><p>UI Toolkit: Fixed issues where overwriting makeItem failed when used with bindings and ListView wouldn't refresh when itemsSource was set last.
(UUM-24689)</p></li>
<li><p>UI Toolkit: Fixed ListView's reorderable value when bound to a SerializedProperty.
(<a href="https://issuetracker.unity3d.com/issues/reordering-handles-dont-appear-in-the-listview">UUM-27687</a>)</p></li>
<li><p>UI Toolkit: Fixed renaming focus condition in UI Builder.
(UUM-22673)</p></li>
<li><p>UI Toolkit: Fixed reordering handles styling when used with items smaller than the default height.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-listview-incorrectly-draws-handles-when-the-fixeditemheight-is-less-than-22">UUM-26773</a>)</p></li>
<li><p>Universal RP: Fixed an issue where instantiating and destroying cameras, with Volume Update Mode set to ViaScripting, would allocate each time.
(<a href="https://issuetracker.unity3d.com/issues/urp-instantiating-and-destroying-camera-with-update-mode-set-to-via-scripting-causes-memory-leak">UUM-22213</a>)</p></li>
<li><p>Universal RP: Fixed an issue where the main light shadows were incorrect if the scene and game windows were open.
(UUM-9825)</p></li>
<li><p>URP: Added vertex SH option to URP rendering and fixed HL2 forward light perf regression.
(UUM-26824)</p></li>
<li><p>URP: Fixed a null exception when adding a sorting layer.
(<a href="https://issuetracker.unity3d.com/issues/error-in-console-when-creating-a-new-sorting-layer">UUM-29492</a>)</p></li>
<li><p>VFX Graph: Added support for multiple subgraphs drag&amp;drop.
(<a href="https://issuetracker.unity3d.com/issues/multiple-subgraphs-cannot-be-dragged-to-the-system">UUM-15236</a>)</p></li>
<li><p>VFX Graph: Fixed a crash when drag &amp; dropping a vfx on another vfx with a circular dependency.
(<a href="https://issuetracker.unity3d.com/issues/vfx-crash-on-serializablemanagedref-getscripttype-when-drag-and-dropping-subgraph-to-the-system">UUM-14670</a>)</p></li>
<li><p>VFX Graph: Fixed an issue that the VFX Graph documentation link was always pointing to the latest LTS version instead of current package version.
(UUM-10252)</p></li>
<li><p>VFX Graph: Fixed the VFX compute shader so it now compiles when the name of a custom attribute contains a space.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-having-space-in-custom-attribute-name-breaks-compilation">UUM-13293</a>)</p></li>
<li><p>VFX Graph: Fixed the <code>Dispose()</code> method of <code>MeshToSDFBaker</code> leading to memory leaks.
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>WebGL: Fixed FMOD console errors when a scene is reloaded.
(UUM-19241)</p></li>
<li><p>WebGL: Fixed playback of mp3 audio files loaded via UnityWebRequest on Safari.
(<a href="https://issuetracker.unity3d.com/issues/webgl-audio-source-has-no-sound-if-the-audio-clip-was-downloaded-via-webrequest-on-ios-devices">UUM-25389</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.12f1</h3>

<ul>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Linux:  Crash on GUIView::IsVSyncEnabled when saving a preset
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-on-guiview-isvsyncenabled-when-saving-a-preset">UUM-29750</a>)</p></li>
<li><p>Linux: [Vulkan] Crash on "__sigaction" when Vulkan is set as default Graphics API
(<a href="https://issuetracker.unity3d.com/issues/linux-vulkan-crash-on-sigaction-when-vulkan-is-set-as-default-graphics-api">UUM-30668</a>)</p></li>
<li><p>MacOS: [macOS] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled
(<a href="https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled">UUM-30173</a>)</p></li>
<li><p>Metal: [iOS] Framerate drops below 120fps when tapping the screen in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Scene Management: Crash on Transform::CheckStructure when manually opening a scene
(<a href="https://issuetracker.unity3d.com/issues/crash-on-transform-checkstructure-when-manually-opening-a-scene">UUM-31129</a>)</p></li>
<li><p>UI Toolkit Framework: Cannot change scripts in Inspector window when in Debug mode
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>UI Toolkit Framework: [Inspector] InvalidOperationException is spammed when adding a new Component and being in the Debug mode
(<a href="https://issuetracker.unity3d.com/issues/inspector-invalidoperationexception-is-spammed-when-adding-a-new-component-and-being-in-the-debug-mode">UUM-21869</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>XR SRP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
</ul>

<h3>2022.2.12f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Editor: Enabled Sketchup Importer on Mac ARM platforms.</p></li>
<li><p>Editor: Updated Sketchup SDK to 2023.2.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Android: An error has been added to inform when project depends on the older Google Play Library version than required by Unity.</p></li>
<li><p>Android: The BundleTool version used by Unity has been upgraded to 1.11.1.</p></li>
<li><p>Android: The default minimum version of Google Play Library for Asset Delivery has been upgraded to 2.0.0 with Unity built-in support.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Android: Fixed PlayAssetDelivery asset packs installation on Pixel 6 devices.
(UUM-17475)</p></li>
<li><p>Android: Fixed QNX changes in atomics wrapper having side effects on Android.
(UUM-10852)</p></li>
<li><p>Android: Fixed the preferred install location setting so it now works and it no longer sets to <strong>preferExternal</strong>.
(<a href="https://issuetracker.unity3d.com/issues/android-install-location-changes-when-exporting-project">UUM-25965</a>)</p></li>
<li><p>Asset Bundles: Fixed issue where empty folders remain in the cache when the max storage space is exceeded.
(<a href="https://issuetracker.unity3d.com/issues/cache-folders-remain-empty-after-discarding-the-cached-bundle">UUM-27439</a>)</p></li>
<li><p>Asset Pipeline: Fixed a case of Missing Script errors that could occur after leaving safe mode.</p></li>
<li><p>Burst: Replaced the Burst debug domain reload with a different method of informing the debugger clients, which is faster and no longer prone to dangling pointers.
(UUM-26740)</p></li>
<li><p>DX12: Fix for particle corrupution and flickering
(UUM-26192)</p></li>
<li><p>Editor: Disabled depth resolve if the camera doesn't have a depth buffer.
(UUM-22019)</p></li>
<li><p>Editor: Enabled indexing asset names with a single character.
(<a href="https://issuetracker.unity3d.com/issues/the-search-window-returns-assets-with-unrelated-names-when-using-t-with-a-specific-name-in-a-query">UUM-17474</a>)</p></li>
<li><p>Editor: Ensure that shader global values are taken into account when deciding what to rebake.
(UUM-27392)</p></li>
<li><p>Editor: Fixed a freeze when selecting multiple assets with different Scripted Importers.
(<a href="https://issuetracker.unity3d.com/issues/editor-freezes-when-selecting-multiple-assets-with-different-scripted-importers">UUM-27216</a>)</p></li>
<li><p>Editor: Fixed a rare Editor crash when using accelerator for shader cache.
(<a href="https://issuetracker.unity3d.com/issues/crash-during-project-build-when-accessing-remote-shader-cache">UUM-27645</a>)</p></li>
<li><p>Editor: Fixed an issue with Mac standalone builds where the generated Xcode project did reference .bundle plugins as a single plugin.
(<a href="https://issuetracker.unity3d.com/issues/on-macos-bundle-plugins-are-broken-when-using-xcode-to-generate-standalone-build">UUM-11278</a>)</p></li>
<li><p>Editor: Fixed console error when assigning a long tag name to a gameobject.
(<a href="https://issuetracker.unity3d.com/issues/user-gets-errors-in-the-console-when-enters-longer-tag-title">UUM-15621</a>)</p></li>
<li><p>Editor: Fixed issue when importing FBX files where memory usage grows exponentially with the amount of clips present in the file.
(<a href="https://issuetracker.unity3d.com/issues/unity-editor-not-responding-and-uses-up-all-the-memory-while-opening-project">UUM-22047</a>)</p></li>
<li><p>Editor: Implemented only changing the file status flags with chflags on OSX if the value of the requested flags differ from the current values.
(UUM-26616)</p></li>
<li><p>Editor: Prevent creation of .meta files in loadable plugin directories (.androidlib, .bundle, .framework, .plugin).
(<a href="https://issuetracker.unity3d.com/issues/macos-meta-files-are-created-inside-a-bundle-when-its-imported-into-the-project">UUM-9421</a>)</p></li>
<li><p>Graphics: Fixed an issue where the upload format for Texture2DArrays, CubemapArrays, and Texture3Ds would not be immediately updated when the color space was changed in the Player Settings until the Editor restarted.
(<a href="https://issuetracker.unity3d.com/issues/changing-color-space-is-not-consistent-when-using-texture-arrays">UUM-21305</a>)</p></li>
<li><p>Graphics: Fixed multiple delete error of ObjectSelector.
(UUM-2237)</p></li>
<li><p>Graphics: Fixed multiple issues on DLSS: DLSS 2.4 upgrade, CI tests, and GC fixes.
(UUM-6460)</p></li>
<li><p>Graphics: Fixed the light component's <code>useBoundingSphereOverride</code> property so it is no longer ignored when calculating the shadow influence distance.<br>
This change makes the custom shadow matrix and light bounding box behave properly.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-light-shadows-are-missing-when-light-gameobject-is-far-from-camera">UUM-23128</a>)</p></li>
<li><p>Graphics: Fixed VSync so it now turns off when you change the quality in the Player from <strong>High Fidelity</strong> to <strong>Performant</strong>.
(<a href="https://issuetracker.unity3d.com/issues/vsync-doesnt-turn-off-when-changing-the-quality-in-the-player-from-high-fidelity-to-performant">UUM-17522</a>)</p></li>
<li><p>HDRP: Fixed the time determinism for water surfaces.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-water-simulation-speed-in-dependent-on-framerate-with-the-recorder">UUM-22814</a>)</p></li>
<li><p>HDRP: Fixed the world position offset in water CPU simulation.
(UUM-21873)</p></li>
<li><p>HLSLcc: Fixed buffer size queries emitting wrong glsl function in some cases.
(<a href="https://issuetracker.unity3d.com/issues/linux-shader-errors-are-thrown-after-reimporting-a-compute-file">UUM-27270</a>)</p></li>
<li><p>IMGUI: Fixed IMGUI decorator height not adjusted in inspector.
(UUM-28739)</p></li>
<li><p>iOS: Added cutouts for the iPhone 14 family.
(<a href="https://issuetracker.unity3d.com/issues/ios-iphone-14-devices-crash-when-portrait-upside-down-orientation-is-forced">UUM-22474</a>)</p></li>
<li><p>Linux: Fixed memory corruption caused crash from libstdc++ basic_string due to symbol conflicts from different .so.
(<a href="https://issuetracker.unity3d.com/issues/linux-stringbuilder-marshalling-causes-runtime-free-invalid-pointer-abort-signal-crash-on-il2cpp-build">UUM-21782</a>)</p></li>
<li><p>Linux: Fixed the Mouse position so it is now correct when playing the build on a multiple monitor setup in full screen mode.
(<a href="https://issuetracker.unity3d.com/issues/linux-mouse-position-is-incorrect-when-playing-build-on-a-multiple-monitor-setup-in-full-screen-mode">UUM-26497</a>)</p></li>
<li><p>Shaders: Fix material keywords cleared when setting the exact same list of keywords
(<a href="https://issuetracker.unity3d.com/issues/setting-the-material-dot-shaderkeywords-field-causes-the-field-to-become-empty-when-the-new-shader-keywords-are-the-same-as-the-existing-ones">UUM-27639</a>)</p></li>
<li><p>Terrain: Importing out of date terrain asset with deprecated splats will no longer cause the editor to hang/crash.
(UUM-24843)</p></li>
<li><p>TextCore: Fixed italic horizontal displacement of punctuation.
(<a href="https://issuetracker.unity3d.com/issues/textmeshpro-symbols-in-the-text-has-an-offset-to-the-right-side-when-using-italic-font-style">UUM-16010</a>)</p></li>
<li><p>TLS: Cumulative TLS update.<br>
Fixed invalid verification results reported in some cases when there is a TLS handshake failure.<br>
Fixed an issue where opening multiple TLS connections with different lifetimes might affect the ability to produce log output after one of the first connections is closed.<br>
Improved TLS errors reported by Unity Web Request.</p></li>
<li><p>uGUI: Instantiating a Selectable under a CanvasGroup now sets the correct interactable state.
(<a href="https://issuetracker.unity3d.com/issues/the-button-is-interactable-when-instantiated-into-a-non-interactable-canvas-group">UUM-27611</a>)</p></li>
<li><p>UI: Fixed unstable test GUIViews_WhenEnteringPlayModeViaMenuCommand_RepaintBeforePlayModeStateChanged.
(UUM-15736)</p></li>
<li><p>UI Elements: Added a new PersistentCall to a UnityEvent is added with the default value UnityEventCallState.RuntimeOnly instead of UnityEventCallState.Off.
(<a href="https://issuetracker.unity3d.com/issues/unityevent-listener-execution-state-is-off-by-default">UUM-27561</a>)</p></li>
<li><p>UI Elements: Added the <code>-unity-slice-scale</code> USS property to UI Builder and updated the drag step for some style fields.<br>
Updated the dragger manipulators from 1.0px to 0.1px for the following UI Builder property inspectors:<br></p>

<ul>
<li>TextShadow's Blur Radius, Offset X and Y fields<br></li>
<li>Slice Scale field
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-the-border-of-visualelement-is-not-created-when-slicing-a-pixel-art-sprite">UUM-15680</a>)</li>
</ul></li>
<li><p>UI Toolkit: Fixed vector API glitches at join location, and Arc() subdivisions.
(<a href="https://issuetracker.unity3d.com/issues/lines-drawn-using-painter2d-start-disappearing-when-drawing-hundreds-of-lines">UUM-27198</a>)</p></li>
<li><p>URP: Fixed resource leak in URP deferred.
(UUM-26626)</p></li>
<li><p>VFX Graph: Enabled correct generation of the interpolator modifiers for packed structure in HDRP Shader Graph.
(<a href="https://issuetracker.unity3d.com/issues/vfx-constants-not-correctly-patched-in-vs">UUM-555</a>)</p></li>
<li><p>VFX Graph: Enabled minimizing the generated interpolator count with VFX Shader Graph to improve its performance and avoid reaching the limit.
(UUM-20787)</p></li>
<li><p>VFX Graph: Fixed a VFX instance leak due to the asset editor not being properly destroyed.
(<a href="https://issuetracker.unity3d.com/issues/vfx-instance-leak-due-to-asset-editor-not-properly-destroyed">UUM-25712</a>)</p></li>
<li><p>VFX Graph: Fixed an unsafe deletion of VFXParticleSystem which can lead to a crash while deleting VisualEffect.
(UUM-9851)</p></li>
<li><p>Windows: Fixed IME text input not being reported appropriately when users clicks away while using an IME, with the input system. The characters would be reported multiple times.
(UUM-24734)</p></li>
</ul>







<h3>Known Issues in 2022.2.11f1</h3>

<ul>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Linux:  Crash on GUIView::IsVSyncEnabled when saving a preset
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-on-guiview-isvsyncenabled-when-saving-a-preset">UUM-29750</a>)</p></li>
<li><p>Metal: [iOS] Framerate drops below 120fps when tapping the screen in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: "Resources.FindObjectsOfTypeAll(typeof(Material)).Length" increases every time when entering/exiting Play Mode
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-findobjectsoftypeall-typeof-material-dot-length-increases-every-time-when-entering-slash-exiting-play-mode">UUM-27587</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Scripting: Editor hangs opening a project when the "2D Animation" package is removed
(<a href="https://issuetracker.unity3d.com/issues/editor-hangs-opening-a-project-when-the-2d-animation-package-is-removed">UUM-26859</a>)</p></li>
<li><p>UI Toolkit Framework: Cannot change scripts in Inspector window when in Debug mode
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>UI Toolkit Framework: [Inspector] InvalidOperationException is spammed when adding a new Component and being in the Debug mode
(<a href="https://issuetracker.unity3d.com/issues/inspector-invalidoperationexception-is-spammed-when-adding-a-new-component-and-being-in-the-debug-mode">UUM-21869</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>XR SRP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
</ul>

<h3>2022.2.11f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>SpeedTree: HDRP/Nature/SpeedTree8.shadergraph now uses its Subsurface Map for the Transmission Mask node to remove the unintended light transmission from tree barks and twigs. This also fixes the overly bright billboard lighting which didn't quite match the 3D geometry's lighting.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li>Package Manager: Extended support for specifying optional path and revision to Git URLs in SCP format.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed the Tile Palette repainting a position when doing a mouse drag at the same position.
(UUM-27588)</p></li>
<li><p>Android: Unity will no longer wrap native crashes into java exceptions on Android, as has been the case, and will correctly forward signals to the previous handlers.</p></li>
<li><p>Core: Fixed a regression where the maximum number of job worker threads was reduced to 64 instead of 128.
(UUM-25377, UUM-28400)</p></li>
<li><p>Editor: Enabled prevention of AsyncGPUReadback requests accumulation when the Editor is inactive.
(<a href="https://issuetracker.unity3d.com/issues/gameobject-with-asyncgpureadback-class-in-the-script-leaks-memory-when-the-editor-is-running-in-the-background">UUM-19169</a>)</p></li>
<li><p>Editor: Fixed an exception when using Renderer2D with FullScreenPassRendererFeature.
(<a href="https://issuetracker.unity3d.com/issues/argumentnullexception-value-cannot-be-null-dot-error-when-using-the-post-processing-feature-full-screen-pass-renderer-feature-together-with-the-2d-renderer">UUM-25396</a>)</p></li>
<li><p>Graphics: Added an error message when enabling restricted keywords on a Material.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-vkgetinstanceprocaddr-and-drawbuffersbatchmodeenabling-with-keyword-instancing-on-when-using-vulkan-opengles-and-metal">UUM-3576</a>)</p></li>
<li><p>Graphics: Fixed a crash when loading a zero-sized Texture2D asset.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-importing-font-material-asset">UUM-9343</a>)</p></li>
<li><p>IL2CPP: Enabled display of the name of each thread in native and third party profilers.
(UUM-21136)</p></li>
<li><p>IL2CPP: Fixed a compile error when you enable bitcode for an Android build.
(<a href="https://issuetracker.unity3d.com/issues/an-undefined-symbol-error-is-thrown-when-building-with-the-fembed-bitcode-flag">UUM-25113</a>)</p></li>
<li><p>IL2CPP: Fixed a potential .cpp file name collision when two assembly names differ only by a number at the end of their name.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-can-fail-when-2-assembly-definitions-have-similar-names">UUM-27951</a>)</p></li>
<li><p>IL2CPP: Fixed a race condition when creating generic class metadata.
(UUM-26516)</p></li>
<li><p>IL2CPP: Fixed the incorrect custom attribute lookup on a field derived in a base class from a different assembly.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-throws-errors-when-using-custom-attributes">UUM-27593</a>)</p></li>
<li><p>IL2CPP: Projects created prior to 2021.3 and opened in 2021.3 or newer could have their Managed Stripping Level incorrectly migrated to the new default value of Minimal when the old default of Low should have been retained.
(UUM-19512)</p></li>
<li><p>Mono: Fixed a crash when using ConditionalWeakTable.
(<a href="https://issuetracker.unity3d.com/issues/crashes-on-garbagecollector-collectincremental-when-entering-the-play-mode">UUM-25411</a>)</p></li>
<li><p>Package Manager: Fixed an issue where a project with a large number of git dependencies would have resolution errors with error code 429 (Too Many Requests). The number of concurrent requests is six by default, but it can be changed by setting the <code>UPM_GIT_MAX_CONCURRENT_COMMANDS</code> environment variable.
(<a href="https://issuetracker.unity3d.com/issues/rpc-failed-http-429-curl-22-the-requested-url-returned-error-429-error-message-appears-when-executing-git-commands">UUM-6049</a>)</p></li>
<li><p>Package Manager: Fixed an issue which prevented starting UPM when a <code>package.json</code> file containing <code>"type": "module"</code> was present on any of the ancestor directories.
(UUM-18512)</p></li>
<li><p>UI Toolkit: Enabled users to edit a multiline textfield's value directly in the UI Builder Inspector.
(UUM-15988)</p></li>
<li><p>UI Toolkit: Fixed an exception thrown when the user tries to enter a negative value for the Fixed Item Height attribute of a ListView, TreeView, etc.
(<a href="https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-value-needs-to-be-positive-for-virtualization-is-thrown-when-adjusting-fixed-item-height-into-the-negatives">UUM-11324</a>)</p></li>
<li><p>Universal RP: Fixed an issue where scenes were not marked dirty after changing the volume update setting on cameras.
(<a href="https://issuetracker.unity3d.com/issues/urp-scene-is-not-marked-as-dirty-when-volume-update-mode">UUM-10812</a>)</p></li>
<li><p>Universal RP: Prevent negative color and NaN write to TAA history.
(<a href="https://issuetracker.unity3d.com/issues/temporal-anti-aliasing-taa-produces-severe-artifacting-when-quality-set-to-very-high">UUM-26709</a>)</p></li>
<li><p>Video: Fixed crashes when changing the source URL on some specific devices.
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android-v2">UUM-29011</a>)</p></li>
</ul>











<h3>Known Issues in 2022.2.10f1</h3>

<ul>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>IL2CPP:  Build argument doesn't get passed when exporting the project
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-argument-doesnt-get-passed-when-exporting-the-project">UUM-25446</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>UI Toolkit Framework: Cannot change scripts in Inspector window when in Debug mode
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>XR SRP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
</ul>

<h3>2022.2.10f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>2D: Improved the performance of creating a large number of Tile assets with the Tile Palette window.</p></li>
<li><p>2D: Improved the performance of opening the Tile Palette window when the Tile Palette references a large number of Tile assets.
(UUM-26849)</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li>Package Manager: Renamed Web3 category filter in Package Manager Window for My Assets to Decentralization.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>AI: Fixed inaccurate shape of NavMeshObstacles that prevent agents from avoiding them properly (only in Windows player non developpement builds).
(<a href="https://issuetracker.unity3d.com/issues/windows-agent-moves-into-obstacles-when-moving-towards-the-destination-in-builds">UUM-9814</a>)</p></li>
<li><p>Android: Added UI for settings.gradle template.
(UUM-27109)</p></li>
<li><p>Android: Fixed Screen.SetResolution when using split-screen and Screen.orientation changes.
(<a href="https://issuetracker.unity3d.com/issues/android-screen-dot-setresolution-doesnt-work-in-split-view-when-setting-screen-orientation-different-from-the-orientation-of-the-device">UUM-19019</a>)</p></li>
<li><p>Android: Fixed shader code generation when using SV_Coverage input.
(UUM-26807)</p></li>
<li><p>Android: Replaced <strong>DIR_UNITYPROJECT</strong> in <code>settingsTemplate.gradle</code>.
(UUM-27090)</p></li>
<li><p>Animation: Fixed a regression where root motion would not work with negative clip speeds.
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>Core: Fixed Transform.GetLossyScale() returning inaccurate results (only in Windows player non developpement builds).
(UUM-25239)</p></li>
<li><p>DX12: Fixed for crash when RenderDoc is attached to a scene with an invalid pipeline state.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-d3d12getinterface-when-opening-the-project">UUM-22222</a>)</p></li>
<li><p>Editor: Fixed a crash where destroying a component's GameObject in the Awake function of a script with ExecuteInEditMode would incorrectly try to apply serialized object changes.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-modulemetadatabindings-getmoduleincludesettingforobject-when-enabling-gameobject">UUM-21915</a>)</p></li>
<li><p>Editor: Fixed an Editor crash when switching the avatar from generic to humanoid.
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-on-guiview-sendlayoutevent-guistate-and-when-changing-animation-type-to-humanoid">UUM-22716</a>)</p></li>
<li><p>Editor: Fixed an issue where you are unable to drag the shortcut list scroller with a mouse.
(<a href="https://issuetracker.unity3d.com/issues/slider-in-the-shortcuts-menu-cannot-be-manipulated-by-dragging-with-a-mouse">UUM-15774</a>)</p></li>
<li><p>Editor: Fixed compute skinning on Adreno/Vulkan.
(<a href="https://issuetracker.unity3d.com/issues/android-vulkan-skinnedmeshrenderer-doesnt-render-mesh-when-using-snapdragon-865-sm8250-cpu-devices">UUM-20108</a>)</p></li>
<li><p>Editor: Fixed NullReferenceException's from the ProjectBrowser when selecting an error in the Console and multiple project browser windows were open.
(<a href="https://issuetracker.unity3d.com/issues/editor-with-two-locked-project-tabs-opened-throws-nullreferenceexception-in-the-console-when-selecting-an-error-in-the-console-window">UUM-17551</a>)</p></li>
<li><p>Editor: Fixed OS key binding exception in ShortcutManager.
(<a href="https://issuetracker.unity3d.com/issues/windows-keys-show-up-with-incorrect-keycodes-and-throw-errors-when-attempting-to-reassign-shortcuts-to-them">UUM-4125</a>)</p></li>
<li><p>Editor: Fixed the corrupt Animation Curve preview when the time range is less than 1.
(<a href="https://issuetracker.unity3d.com/issues/animationcurve-field-preview-displays-an-additional-curve-in-inspector-when-its-curve-time-is-less-or-greater-than-1">UUM-27045</a>)</p></li>
<li><p>Editor: Lock the cursor on linux when the state is locked.
(<a href="https://issuetracker.unity3d.com/issues/linux-mouse-escapes-the-application-window-when-using-cursorlockmode-dot-locked">UUM-25736</a>)</p></li>
<li><p>GI: Fixed incorrect fallback to CPU of GPU bake.
(<a href="https://issuetracker.unity3d.com/issues/leak-in-lightmap-bake-api-when-using-progressive-gpu-lightmapper">UUM-24685</a>)</p></li>
<li><p>Graphics: CreateExternalTexture disregarded the color space, causing external sRGB textures to be sampled as linear.
(UUM-17632)</p></li>
<li><p>Graphics: Fixed failing editor mode test on M1 trying to create a PVRTC texture smaller than the minimum required size.
(UUM-3791)</p></li>
<li><p>Graphics: Fixed HLSLcc code generation for SV_Coverage input.
(UUM-12624)</p></li>
<li><p>Graphics: HDRP: Lens Flare Data Driven are now occluded by cloud layer.</p></li>
<li><p>Graphics: Lens Flare permutation missing.
(UUM-19982)</p></li>
<li><p>HDRP: Preserve ShaderGraph custom keywords on material validation.
(<a href="https://issuetracker.unity3d.com/issues/validate-material-with-shadergraph">UUM-27176</a>)</p></li>
<li><p>Linux: Fixed the Linux Editor so it no longer ignores a SIGTERM signal.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-ignores-sigterm-signal-when-using-command-kill">UUM-24705</a>)</p></li>
<li><p>Package Manager: Fixed an issue where local and git packages are not visible in <code>Unity Registry</code> and <code>My Registries</code>.
(<a href="https://issuetracker.unity3d.com/issues/package-is-removed-from-the-scoped-registry-when-installing-the-same-package-from-a-local-disk">UUM-20549</a>)</p></li>
<li><p>Particles: Fixed race condition when scheduling c# particle jobs.</p></li>
<li><p>Physics: Updated documentation to mention new behaviour of Rigidbody interpolation and extrapolation.
(<a href="https://issuetracker.unity3d.com/issues/spawned-gameobject-position-is-not-updated-when-rigidbody-interpolation-is-used">UUM-26857</a>)</p></li>
<li><p>Prefabs: Fixed the prefab mode so it now sorts renderer components accordingly.
(<a href="https://issuetracker.unity3d.com/issues/order-in-layer-does-not-work-when-previewing-in-prefab-mode">UUM-3458</a>)</p></li>
<li><p>Serialization: Enabled <code>SerializedObject.Update</code> to now change the cache for <code>hasMultipleDifferentValues</code> if the first C# object has changed in memory in a multi-object selection scenario.
(UUM-19688)</p></li>
<li><p>Shaders: Fixed the backwards compatibility regression of asset bundles on material keywords.
(UUM-26498)</p></li>
<li><p>UI Toolkit: Fixed an issue in the UI Builder so the open file dialog now displays the current project's folder.
(UUM-24723)</p></li>
<li><p>UI Toolkit: Fixed an issue so the tint of an Image element now triggers a repaint.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-image-is-not-repainted-when-making-style-changes-to-tint-color">UUM-22563</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where an ExposedReference control would always create a new PropertyName value when changing an object reference.
(UUM-25160)</p></li>
<li><p>UI Toolkit: Fixed memory leaks when opening and closing UIBuilder window.
(UUM-5133)</p></li>
<li><p>Universal RP: Fixed the warnings that appear in <code>GlobalIllumination.hlsl</code> regarding gradient instruction used in a loop.
(<a href="https://issuetracker.unity3d.com/issues/warning-in-lightcookieinput-dot-hlsl-when-using-cookie">UUM-21675</a>)</p></li>
<li><p>URP: Fixed XR vsync so it stays enabled when the focus is lost.
(UUM-16846)</p></li>
<li><p>Windows: Fixed an Editor issue where entering an IP address for profiling would crash the Editor.
(<a href="https://issuetracker.unity3d.com/issues/unity-crashes-when-pressing-the-button-in-the-profiler-standalone-process-window">UUM-9247</a>)</p></li>
<li><p>XR: Fixed XR splash screen crash if Unity logo display is disabled.
(<a href="https://issuetracker.unity3d.com/issues/crash-at-launch-when-unity-logo-is-disabled">UUM-25774</a>)</p></li>
</ul>



<h3>Known Issues in 2022.2.9f1</h3>

<ul>
<li><p>FrameDebugger: Frame Debugger VRAM memory leak
(<a href="https://issuetracker.unity3d.com/issues/frame-debugger-vram-memory-leak">UUM-28065</a>)</p></li>
<li><p>Inspector Framework: Editor freezes when selecting multiple assets with different Scripted Importers
(<a href="https://issuetracker.unity3d.com/issues/editor-freezes-when-selecting-multiple-assets-with-different-scripted-importers">UUM-27216</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Shader System: Crash during project build when accessing Remote Shader Cache
(<a href="https://issuetracker.unity3d.com/issues/crash-during-project-build-when-accessing-remote-shader-cache">UUM-27645</a>)</p></li>
<li><p>UI Toolkit Controls: Element UI disappears and NullReferenceException is thrown when dragging off the last or first element from the list in the Inspector
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>UI Toolkit Controls: Last ListView element size is calculated incorrectly when creating it through a script
(<a href="https://issuetracker.unity3d.com/issues/last-listview-element-size-is-calculated-incorrectly-when-creating-it-through-a-script">UUM-28519</a>)</p></li>
<li><p>UI Toolkit Framework: Cannot change scripts in Inspector window when in Debug mode
(<a href="https://issuetracker.unity3d.com/issues/cannot-change-scripts-in-inspector-window-when-in-debug-mode">UUM-14069</a>)</p></li>
<li><p>Universal RP: Flickering orbs appear when using RenderTargetHandle
(<a href="https://issuetracker.unity3d.com/issues/flickering-orbs-appear-when-using-rendertargethandle">UUM-26513</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>XR SRP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
</ul>

<h3>2022.2.9f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Burst: Added a Burst AOT setting for the kind of debug information generated for player builds.</p></li>
<li><p>Burst: Added a toggle for filtering out ".Generated" jobs from the Burst Inspector target job list.</p></li>
<li><p>Burst: Added selection of line and highlight of selected line and selected lines register usage.</p></li>
<li><p>Burst: Added SIMD smell test to the Burst Inspector, highlighting ARM or x86-64 SIMD instruction differently depending on whether they work for packed or scalar inputs.</p></li>
<li><p>Burst: FunctionPointer&lt;delegate&gt;()::Invoke usage is now checked and patched to ensure the calling convention is compatible with burst.</p></li>
<li><p>Networking: Clarified error message in the logs when attempting to build a dedicated server player without having that platform's corresponding Dedicated Server Build support module installed.
(UUM-22128)</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Burst: Burst now only generates full debug information when "Native Debug Mode Compilation" and script debug information is enabled.</p></li>
<li><p>Burst: Changed burst inspector source location comments from "===" to either ";" or "#" depending on the given assembly kind.</p></li>
<li><p>Burst: Changed horizontal code focus in the Burst Inspector to only scroll when branches fill more than half the space.</p></li>
<li><p>Burst: Changed so target job list in the Burst Inspector is a fold-able/expandable tree view, instead of a simple list.</p></li>
<li><p>Burst: Improved how optimisation remarks are displayed in the "LLVM IR Optimisation Diagnostics" tab in Burst Inspector to make them more useful.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Store directory path instead of file path as the last used asset path when doing a drag and drop to create a Tile Asset.
(<a href="https://issuetracker.unity3d.com/issues/tile-palette-drag-and-dropping-multiple-sprites-to-tile-palette-auto-selects-last-asset-to-create-tile-assets">UUM-25250</a>)</p></li>
<li><p>Android: Do not move files in custom asset packs to src/main/assets, preserve the directory structure as it is.
(UUM-15109)</p></li>
<li><p>Android: Fixed an issue causing build to fail, if custom asset pack does not have a valid structure.
(<a href="https://issuetracker.unity3d.com/issues/android-aab-build-fails-when-using-asset-bundles">UUM-25501</a>)</p></li>
<li><p>Android: Fixed an issue where <code>Network.OperationalStatus</code> would always return Unknown for Android.
(<a href="https://issuetracker.unity3d.com/issues/android-network-dot-operationalstatus-method-returns-unknown-status-for-all-network-interfaces-when-observing-their-operational-state">UUM-19683</a>)</p></li>
<li><p>Android: Fixed the Time.deltaTime values so they are now stable on Android devices.
(<a href="https://issuetracker.unity3d.com/issues/android-time-dot-deltatime-values-arent-stable-on-specific-devices">UUM-10244</a>)</p></li>
<li><p>Asset Bundles: Fixed issue where UnloadAllAssetBundles does not unload scene bundles.
(<a href="https://issuetracker.unity3d.com/issues/asset-bundles-are-not-unloaded-when-unloadallassetbundles-true-method-is-called">UUM-13510</a>)</p></li>
<li><p>Asset Import: Fixed import of file with extension as file name.
(<a href="https://issuetracker.unity3d.com/issues/files-without-extensions-are-not-being-imported-by-the-default-importer-anymore">UUM-21730</a>)</p></li>
<li><p>Build Pipeline: Fixed a BuildPipeline issue for the Android platform and MacStandalone builds which asks for a name and directory, despite having the last saved location details. This is triggered by using Ctrl+B (Windows) or Cmd+B (macOS).
(<a href="https://issuetracker.unity3d.com/issues/build-and-run-asks-for-a-name-and-directory-when-it-was-previously-provided">UUM-19897</a>)</p></li>
<li><p>Burst: "LLVM IR Optimisation Diagnostics" tab in Burst Inspector was blank if "Native Debug Mode Compilation" was enabled; this is now fixed.</p></li>
<li><p>Burst: An issue that could cause function pointers to point to the wrong burst function, if a domain reload occurs and a compilation started before the reload, completes soon after.</p></li>
<li><p>Burst: Burst now updates its list of assembly paths if they change, for instance - adding packages that contain precompiled assemblies.</p></li>
<li><p>Burst: Crashes on 32bit cpus when an entry point with byvalue paramaters was called, when using dispatch (multiple supported cpu targets).</p></li>
<li><p>Burst: Enum values cast to integers in a format string previously output the enum type name; now the integer value is correctly output.</p></li>
<li><p>Burst: Fixed "Assertion failed on expression: "exception == SCRIPTING_NULL" errors and editor crash when the project path contained multi-byte Unicode characters.</p></li>
<li><p>Burst: Fixed "Callee/caller attribute ABI did not match!" error that could occur in certain player builds when calling an entry point that had at least one struct-by-value parameter.</p></li>
<li><p>Burst: Fixed "Plain Without Debug Information" outputting assembly with debug information.</p></li>
<li><p>Burst: Fixed a hashing error that could occur when a struct implements a generic interface multiple times with different generic parameters.</p></li>
<li><p>Burst: Fixed a stall that could occur at Editor shutdown.</p></li>
<li><p>Burst: Fixed a <code>BadImageFormatException</code> error that could occur in DOTS Runtime builds.</p></li>
<li><p>Burst: Fixed an issue the definition order of overloaded methods with function pointer parameters would decide which overload was actually being used.</p></li>
<li><p>Burst: Fixed AoT linking error on Windows Link based linkers when file paths (typically user names/home folders) contain non-ASCII characters.</p></li>
<li><p>Burst: Fixed ARM vector registers not being highlighted.</p></li>
<li><p>Burst: Fixed BC1361 error when trying to compile large static readonly arrays.</p></li>
<li><p>Burst: Fixed bug in a small set of managed fallback versions of intrinsics, where the bitwise representation of float values would not be maintained.</p></li>
<li><p>Burst: Fixed Burst compilation on QNX Arm.</p></li>
<li><p>Burst: Fixed Burst Inspector sometimes throwing ArugmentOutOfRangeException when copying without color-tags from assembly that is colored.</p></li>
<li><p>Burst: Fixed burst tree view items leading to wrong job if some jobs where hidden from view by filter or similar.</p></li>
<li><p>Burst: Fixed compilation error when using <code>CompileFunctionPointer</code> from Burst in code compiled with Roslyn on  .NET 7+.</p></li>
<li><p>Burst: Fixed compiler AccessViolationException that could occur when compiling two or more types with the same name but different source assemblies.</p></li>
<li><p>Burst: Fixed compiler crash when invoking <code>FunctionPointer</code>s based on a generic delegate in DOTS Runtime.</p></li>
<li><p>Burst: Fixed error when calling direct call method from background thread without having previously called a <code>BurstCompiler</code> API from the main thread.</p></li>
<li><p>Burst: Fixed internal compiler error that occurred when creating debug metadata from certain obfuscated dlls.</p></li>
<li><p>Burst: Fixed internal compiler error when implcitly converting an array to a <code>Span</code>.</p></li>
<li><p>Burst: Fixed managed fallback implementation of <code>Sse4_2.cmpestrs</code>.</p></li>
<li><p>Burst: Fixed module verification errors when using overloaded functions as function pointers.</p></li>
<li><p>Burst: Fixed namespace collision that could occur between Unity.Burst.Cecil.dll and the com.unity.nuget.mono-cecil package.</p></li>
<li><p>Burst: Fixed player build error that could occur if the project contains an assembly whose name doesn't match the assembly filename.</p></li>
<li><p>Burst: Fixed the inspector job tree view splitting jobs, with '.' in their parameters.</p></li>
<li><p>Burst: Fixed visual artifact in Burst Inspector, where block of enhanced code was cut at the bottom.</p></li>
<li><p>Editor: Added more protection if an error happens when loading a layout. That said there seems to be something fishy in the Luna package that creates the corrupted state in the first place. Package is shipped as a dll so I cannot debug it more.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-guiview-processinputevent-when-switching-editor-layout-after-luna-package-import">UUM-12892</a>)</p></li>
<li><p>Editor: Allow opening Focus inspector on non multi-edit objects.
(<a href="https://issuetracker.unity3d.com/issues/the-focused-inspector-window-cannot-be-opened-for-multiple-different-assets-via-the-inspector-window">UUM-19504</a>)</p></li>
<li><p>Editor: Copy hideflags to the cloned object when instantiating a GameObject.
(UUM-22863)</p></li>
<li><p>Editor: Fixed a bug where AssetBundle builds could fail due to incorrectly reported errors about script serialization mismatches.
(<a href="https://issuetracker.unity3d.com/issues/asset-bundles-fail-to-build-when-adding-a-serializefield-value-to-code-after-building-the-player">UUM-19452</a>)</p></li>
<li><p>Editor: Fixed a crash on shutdown when using the cli option -cacheServerWaitForUploadCompletion.</p></li>
<li><p>Editor: Fixed a regression that changed the default behaviour of animators on disabled.
(UUM-27229)</p></li>
<li><p>Editor: Fixed an issue with the initialization of raytracing which could fail during certain frames.
(UUM-26885)</p></li>
<li><p>Editor: Fixed backspace allowing to delete script name in AddComponent dialog.
(<a href="https://issuetracker.unity3d.com/issues/pressing-the-backspace-key-returns-to-the-search-view-in-the-add-component-window-when-entering-the-new-script-name">UUM-3440</a>)</p></li>
<li><p>Editor: Fixed drag and drop crashes the editor if the window is docked.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-gdk-window-get-frame-extents-when-dragging-and-dropping-an-asset-in-a-custom-editor-window">UUM-23241</a>)</p></li>
<li><p>Editor: Fixed error when opening the "Select Preset" window while having a user defined Preset class assets.
(<a href="https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-opening-the-input-manager-select-preset-window">UUM-11334</a>)</p></li>
<li><p>Editor: Fixed error while deleting a QueryBlock.
(<a href="https://issuetracker.unity3d.com/issues/quick-search-event-is-used-but-not-stopped-dot-error-is-thrown-when-deleting-search-areas-in-the-search-field">UUM-19945</a>)</p></li>
<li><p>Editor: Fixed hangup when evaluating SearchExpression, synchronous in main thread.
(UUM-14546)</p></li>
<li><p>Editor: Fixed Mac Editor crash on sprite Drag &amp; Drop.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-dragging-sprites-into-the-scene-view">UUM-20950</a>)</p></li>
<li><p>Editor: Fixed potential crash with non-gameobject selections during domain reload.</p></li>
<li><p>Editor: Fixed Slowdown spikes when moving an object in the scene caused by the PropertyDatabase.
(<a href="https://issuetracker.unity3d.com/issues/search-slowdown-spikes-when-moving-an-object-in-the-scene-caused-by-the-propertydatabase">UUM-22631</a>)</p></li>
<li><p>Editor: Fixed the inspector Transform Component foldout not responding to input on the top half.
(<a href="https://issuetracker.unity3d.com/issues/transform-component-doesnt-collapse-when-pressing-on-the-top-pixels-of-the-component">UUM-16138</a>)</p></li>
<li><p>Editor: Fixed the prefab override indicator not being shown when the component was overridden.
(<a href="https://issuetracker.unity3d.com/issues/missing-or-misplaced-prefab-override-indicator-on-some-components-in-inspector">UUM-3473</a>)</p></li>
<li><p>Editor: Make Light Probes be affected by back-facing triangles when baking with the GPU Lightmapper.
(UUM-7699)</p></li>
<li><p>Editor: MeshFilter header update title on multi edit.
(<a href="https://issuetracker.unity3d.com/issues/selecting-cube-and-sphere-gameobjects-at-the-same-time-the-inspector-window-shows-mesh-filter-for-both-of-them-as-sphere">UUM-19502</a>)</p></li>
<li><p>Editor: Show simple Unity version in release build. In source build or devMode: show the full version with revision.
(<a href="https://issuetracker.unity3d.com/issues/usability-unity-alpha-and-beta-versions-are-displayed-with-revision-in-the-title-bar-of-the-editor-when-the-latter-is-meaningless">UUM-23056</a>)</p></li>
<li><p>Entities Graphics: Fixed an issue where lightmaps involving lights inside subscenes could be too bright.
(UUM-26371)</p></li>
<li><p>Entities Graphics: Fixed BatchRendererGroup occlusion probe sampling for HDRP.
(UUM-24996)</p></li>
<li><p>GI: Fixed an issue where lightmaps would be swapped when entering playmode when the "Reload Scene" option is disabled.
(<a href="https://issuetracker.unity3d.com/issues/multiscene-lightmaps-are-swapped-when-entering-the-play-mode-for-the-first-time-after-loading-a-scene-when-reload-scene-is-disabled">UUM-21437</a>)</p></li>
<li><p>GI: Fixed the help link at the top of the Lighting Window.
(<a href="https://issuetracker.unity3d.com/issues/the-wrong-documentation-page-is-opened-when-clicking-the-help-icon-in-the-lighting-window">UUM-25787</a>)</p></li>
<li><p>Graphics: Fixed glitches on macOS when the rendering path is set to deferred.
(<a href="https://issuetracker.unity3d.com/issues/m1-glitches-and-graphical-artifacts-are-appearing-when-rendering-path-is-set-to-deferred-using-the-built-in-render-pipeline">UUM-21567</a>)</p></li>
<li><p>Graphics: Fixed SSAO in URP when using non-uniform rendering.
(UUM-15795)</p></li>
<li><p>HDRP: Fixed a serialization issue affecting other objects.</p></li>
<li><p>IL2CPP: Fixed crash when memory profiler is enabled.
(<a href="https://issuetracker.unity3d.com/issues/build-crashes-on-il2cpp-vm-class-getvirtualmethod-when-building-and-running-a-project-using-il2cpp-scripting-backend">UUM-18685</a>)</p></li>
<li><p>IL2CPP: Fixed the InvalidCastException being thrown when you serialize jagged arrays using BinaryFormatter.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-invalidcastexception-is-thrown-when-serializing-jagged-arrays-using-binaryformatter">UUM-23156</a>)</p></li>
<li><p>IL2CPP: Fixed UnintializedDataAccessException when processing a function pointer that has a function pointer as a parameter.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-not-correctly-handling-function-pointers-that-have-function-pointer-parameters-leads-to-build-failure">UUM-9030</a>)</p></li>
<li><p>Kernel: Fixed broken RECORD_ALLOCATION_SITES functionalit.
(UUM-26702)</p></li>
<li><p>Kernel: Fixed crash resulting from UnityDefaultAllocator not tracking all allocations.
(UUM-23090)</p></li>
<li><p>Kernel: Fixed potential crash at app shutdown.
(UUM-26528)</p></li>
<li><p>Kernel: Fixed unstable test ThreadSafeLinearAllocator AllocDealloc_On10Threads_DoesNotCrash.
(UUM-20607)</p></li>
<li><p>Linux: Fixed panel focus switching when arrow keys are pressed while in play mode.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-panel-focus-gets-switched-when-the-arrow-keys-are-pressed-while-in-play-mode">UUM-21632</a>)</p></li>
<li><p>Linux: Fixed the Null Reference Exception thrown when you rotate in Scene View and move the cursor outside the boundary.
(<a href="https://issuetracker.unity3d.com/issues/linux-nullreferenceexception-thrown-when-rotating-in-scene-view-and-moving-the-cursor-outside-of-the-screen-boundaries">UUM-21895</a>)</p></li>
<li><p>macOS: The macOS Player no longer contains an empty area gap on each screen vertical side when rendering fullscreen on Macs with a notch.
(UUM-12632)</p></li>
<li><p>Particles: Corrected sub-emitter simulation to ensure particle ribbons are connected in the correct order.
(<a href="https://issuetracker.unity3d.com/issues/ribbon-mode-particle-curls-and-twists-in-random-places-when-using-sub-emitter-rate-over-distance-emission">UUM-945</a>)</p></li>
<li><p>Particles: Fixed a Particle System rendering corruption.
(<a href="https://issuetracker.unity3d.com/issues/android-vulkan-visualisation-corruption-occurs-when-rendering-particles-to-render-texture">UUM-21106</a>)</p></li>
<li><p>Prefabs: Disabled IMGUI ReorderableList elements when previewing overridden values PrefabMode InContext.
(<a href="https://issuetracker.unity3d.com/issues/prefab-list-contains-the-wrong-number-of-elements-when-opening-it-through-a-prefab-variant">UUM-13618</a>)</p></li>
<li><p>Scene/Game View: Fixed windows implementing ISupportOverlays incorrectly showing Overlays targeting implementing classes.
(UUM-26841)</p></li>
<li><p>Scripting: Fixed domain reload and reference issues on assets that reference scripts from a Plugin that's not loaded in the domain.
(<a href="https://issuetracker.unity3d.com/issues/assets-inspector-window-duplicates-components-after-upgrading-the-project">UUM-21935</a>)</p></li>
<li><p>Scripting: Fixed possible crash when handling of asmdef compiled assemblies thats, thats been copied into the Project.</p></li>
<li><p>Scripting: Moving scripts around in project breaks GameObject's.
(<a href="https://issuetracker.unity3d.com/issues/script-component-no-longer-recognized-in-the-inspector-when-attached-to-a-gameobject-and-then-moved-to-a-different-location-in-the-project-window">UUM-25445</a>)</p></li>
<li><p>Scripting: When using additional file in rsp breaks MonoBehaviours.
(<a href="https://issuetracker.unity3d.com/issues/monobehaviour-is-not-recognized-in-script-files-when-additionalfile-parameter-is-used-in-csc-dot-rsp-file">UUM-25109</a>)</p></li>
<li><p>uGUI: Fixed CanvasRenderer color reset on Clear.
(<a href="https://issuetracker.unity3d.com/issues/color-set-through-canvasrenderer-dot-setcolor-is-reset-when-canvasrenderer-becomes-inactive">UUM-3527</a>)</p></li>
<li><p>uGUI: Fixed NullReferenceException in Image.sprite when setting a new Sprite and the current Sprite.Texture is null.
(<a href="https://issuetracker.unity3d.com/issues/ugui-nullreferenceexception-when-sprite-dot-texture-is-null">UUM-13053</a>)</p></li>
<li><p>uGUI: Fixed setting "Additional Shader Channels" in Canvas for all cases.
(<a href="https://issuetracker.unity3d.com/issues/canvas-gameobject-component-does-not-change-its-additional-shader-channel-value-when-everything-is-selected">UUM-24730</a>)</p></li>
<li><p>UI Elements: Fixed unable to expand import result in inspector<br></p>

<ul>
<li>First, the ListView w/ Foldout header that is created by PropertyField was missing a setting so that it could receive pointer events when disabled<br></li>
<li>Second, the Clickable manipulator did not treat events properly when disabled.
(UUM-26082)</li>
</ul></li>
<li><p>UI Toolkit: Fixed color tint transitions not working for sprites.
(<a href="https://issuetracker.unity3d.com/issues/background-tint-doesnt-work-for-sprites-when-using-transitions">UUM-25743</a>)</p></li>
<li><p>UI Toolkit: Fixed ListView binding with negative indexes when a negative scrolloffset was applied.
(<a href="https://issuetracker.unity3d.com/issues/treeview-binding-breaks-when-using-negative-scrolloffset">UUM-12868</a>)</p></li>
<li><p>UI Toolkit: Fixed the UI document so it now has the correct size for multiple displays.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-rescale-of-the-ui-document-when-using-multi-display">UUM-18757</a>)</p></li>
<li><p>Universal RP: Fixed an issue so that deferred rendering now works correctly in builds with Accurate GBuffer Normals enabled.
(<a href="https://issuetracker.unity3d.com/issues/nothing-is-rendered-in-the-built-urp-project-when-deferred-rendering-is-selected-and-accurate-g-buffer-normals-are-enabled">UUM-25112</a>)</p></li>
<li><p>Universal RP: Fixed issue where disabling/enabling ShadowCaster2Ds can create duplicate shadows.
(<a href="https://issuetracker.unity3d.com/issues/performance-loss-when-enabling-and-disabling-shadowcaster2d">UUM-16927</a>)</p></li>
<li><p>URP: 2D - Fixed 2D Sprite Light &amp; Freeform Light fast normal map quality setting to correctly use normal map.
(UUM-4613)</p></li>
<li><p>URP: 2D - Fixed a bug with ShadowCaster2D's shadow mesh bounds which was causing shadows to disappear.
(<a href="https://issuetracker.unity3d.com/issues/urp-2d-shadow-disappears-even-though-light-is-in-range-of-the-sprite-when-using-light-2d">UUM-19090</a>)</p></li>
<li><p>URP: 2D - Fixed GC.Allocs with sorting layers in Light2D.
(<a href="https://issuetracker.unity3d.com/issues/2d-light2d-dot-lateupdate-generates-136bytes-of-garbage-per-light2d-per-frame">UUM-1929</a>)</p></li>
<li><p>VFX Graph: Added extra memory to allow external threads to steal VFX update jobs.
(UUM-22049)</p></li>
<li><p>VFX Graph: Added missing DepthNormal pass for Unlit &amp; Unify SSAO integration with Unlit for URP.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-opaque-unlit-output-dont-write-to-depth">UUM-19559</a>)</p></li>
<li><p>VFX Graph: Enabled renamed blackboard categories that have been duplicated to stay on screen.
(<a href="https://issuetracker.unity3d.com/issues/vfx-category-renaming-removes-duplicated-category-from-the-blackboard">UUM-17435</a>)</p></li>
<li><p>VFX Graph: Fixed a serialization issue causing a potential crash due to bounds computation.
(<a href="https://issuetracker.unity3d.com/issues/vfx-crash-with-bounds-paddings">UUM-25009</a>)</p></li>
<li><p>VFX Graph: Fixed an error raised in the console when undoing shader assignment in the Mesh output node.
(<a href="https://issuetracker.unity3d.com/issues/undoing-actions-when-sahder-is-assigned-to-output-mesh-results-in-errrors-thrown-to-the-console">UUM-16367</a>)</p></li>
<li><p>VFX Graph: Fixed an issue where VFXs were not culled properly, causing flickering shadows.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-shadows-flicker-when-effect-is-out-of-camera-frustum">UUM-14271</a>)</p></li>
<li><p>VFX Graph: Fixed bounds padding so they are no longer ignored.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-bounds-padding-not-working">UUM-15655</a>)</p></li>
<li><p>VFX Graph: Fixed the play / pause button in the VFX Graph control panel so it now switches the icon depending on the current state.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-control-panel-pause-button-stuck">UUM-5065</a>)</p></li>
<li><p>VFX Graph: Fixed unroll related shader compilation issue on DXC.
(UUM-6058)</p></li>
<li><p>VFX Graph: Removed blackboard category with only spaces in the name.
(<a href="https://issuetracker.unity3d.com/issues/user-gets-argumentnullexception-value-cannot-be-null-dot-error-during-category-duplication">UUM-17495</a>)</p></li>
<li><p>VFX Graph: Safer GPUEvent when trying to append more event than destination capacity.
(<a href="https://issuetracker.unity3d.com/issues/m1-editor-glitches-slash-freezes-or-mac-crashes-when-increasing-particle-capacity-in-vfx-graph-1">UUM-572</a>)</p></li>
<li><p>Video: Fixed a crash in ImageFilters::Blit when saving a Timeline containing a Video while the Timeline is playing.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-imagefilters-blit-when-saving-a-timeline-containing-a-video-while-the-timeline-is-playing">UUM-12908</a>)</p></li>
<li><p>Video: Fixed error when adding file:// to point at a local file in the VideoPlayer on Android.
(<a href="https://issuetracker.unity3d.com/issues/videoplayer-dot-url-on-android-does-not-work-with-file-uri-scheme-when-using-vp8-slash-webm-file">UUM-16166</a>)</p></li>
<li><p>Windows: Fixed a potential crash during Windows Player cleanup.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-screenmanagerwin-recommitcursorlock-when-screenmanager-pointer-is-used">UUM-25383</a>)</p></li>
<li><p>Windows: Fixed Build to source folder when the project build dir is deleted.
(UUM-25240)</p></li>
<li><p>XR: Fixed TAA to work correctly with Foveated Rendering when using Non-Uniform Raster.
(UUM-16324)</p></li>
</ul>







<h3>Known Issues in 2022.2.8f1</h3>

<ul>
<li><p>Inspector Framework: Editor freezes when selecting multiple assets with different Scripted Importers
(<a href="https://issuetracker.unity3d.com/issues/editor-freezes-when-selecting-multiple-assets-with-different-scripted-importers">UUM-27216</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>UI Toolkit Controls: Element UI disappears and NullReferenceException is thrown when dragging off the last or first element from the list in the Inspector
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>Universal RP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
<li><p>WebRequest: Crash on delete_object_internal_step1 when disposing web requests
(<a href="https://issuetracker.unity3d.com/issues/crash-on-delete-object-internal-step1-when-disposing-web-requests">UUM-27869</a>)</p></li>
</ul>

<h3>2022.2.8f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li>Editor: Improved performance of Transform.Find() API especially when working with large numbers of children.</li>
</ul>

<h4>API Changes</h4>

<ul>
<li>Graphics: Added: GetVisiblePositions to TrailRenderer.
(<a href="https://issuetracker.unity3d.com/issues/trailrenderer-dot-getpositions-returns-invisible-points">UUM-21893</a>)</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Asset Pipeline: Fixed indeterministic output for any asset containing script types
(<a href="https://issuetracker.unity3d.com/issues/inconsistent-assetdatabase-dot-getdependencyhash-value-returned-for-unchanged-source-files-when-using-a-custom-scriptedimporter">UUM-22077</a>)</p></li>
<li><p>Editor: Fixed an issue with the Shortcuts Manager to catch Shift and Options keypress
(<a href="https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-modifier-1">UUM-4083</a>)</p></li>
<li><p>Editor: Fixed component added twice when dragging script asset on inspector window from project window
(<a href="https://issuetracker.unity3d.com/issues/monobehaviour-dragged-and-dropped-to-the-gameobject-ends-up-adding-twice">UUM-26276</a>)</p></li>
<li><p>Editor: Fixed Overlays not preserving enabled state through domain reloads.
(<a href="https://issuetracker.unity3d.com/issues/hidden-overlays-are-reappearing-after-relaunching-the-unity-editor">UUM-20070</a>)</p></li>
<li><p>Editor: Fixed parallel import with Blender on all Editor platforms. Multiple .blend files imported at the same time will produce their own content result instead of a random mesh from one of the files.
(<a href="https://issuetracker.unity3d.com/issues/blend-models-are-imported-incorrectly-when-using-the-parallel-import-function">UUM-10036</a>)</p></li>
<li><p>Graphics: Enabled <code>Mesh.RecalculateTangents()</code> to ensure that the tangent attribute has the correct format (Float32) and dimension (4) when called.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-mesh-recalculatetangents-when-recalculating-tangents">UUM-19137</a>)</p></li>
<li><p>Graphics: Fixed vulkan validation layers that come from incorrect barrier management when native plugin is used
(UUM-18951)</p></li>
<li><p>Package Manager: Fixed an issue causing Packages to be deleted after changing the <strong>My Assets</strong> cache location to non-default when the asset is updated in Package Manager.
(<a href="https://issuetracker.unity3d.com/issues/packages-are-deleted-after-changing-the-my-assets-cache-location-to-non-default-when-the-asset-is-updated-in-package-manager">UUM-25376</a>)</p></li>
<li><p>Profiler: Fixed Editor crash when profiler is running on machine with low memory
(UUM-14156)</p></li>
<li><p>UI Toolkit: Fixed an issue where an ExposedReference control would not serialize its value.
(UUM-25153)</p></li>
<li><p>UI Toolkit: Fixed the InspectorElement so it now applies its disabled state for embedded IMGUI inspectors.
(UUM-25149)</p></li>
<li><p>Universal RP: Fixed a missing keyword in ParticlesSimpleLit for Lightmap shadow mixing.
(<a href="https://issuetracker.unity3d.com/issues/urp-particle-simplelit-is-missing-number-pragma-multi-compile-lightmap-shadow-mixing">UUM-26403</a>)</p></li>
<li><p>Universal RP: Fixed Reflection Probe baking throwing errors with Render Scale set not to 1
(<a href="https://issuetracker.unity3d.com/issues/errors-thrown-and-reflection-probe-is-partially-black-after-baking-it">UUM-24891</a>)</p></li>
<li><p>VFX Graph: Fixed wrong particle count if read before first readback.
(UUM-18480)</p></li>
</ul>







<h3>Known Issues in 2022.2.7f1</h3>

<ul>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>Inspector Framework: Editor freezes when selecting multiple assets with different Scripted Importers
(<a href="https://issuetracker.unity3d.com/issues/editor-freezes-when-selecting-multiple-assets-with-different-scripted-importers">UUM-27216</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>OpenXR: [VR Template] Standalone Profiler Crashes when opening
(<a href="https://issuetracker.unity3d.com/issues/vr-template-standalone-profiler-crashes-when-opening">UUM-21186</a>)</p></li>
<li><p>Profiling: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>UI Toolkit Controls: Element UI disappears and NullReferenceException is thrown when dragging off the last or first element from the list in the Inspector
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>Universal RP: Nothing is rendered in the built URP project when Deferred rendering is selected and Accurate G-buffer normals are enabled
(<a href="https://issuetracker.unity3d.com/issues/nothing-is-rendered-in-the-built-urp-project-when-deferred-rendering-is-selected-and-accurate-g-buffer-normals-are-enabled">UUM-25112</a>)</p></li>
<li><p>Universal RP: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Visual Effects: [VFX Graph] Particles Flicker when sorting and/or Indirect draw is on.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-particles-flicker-when-sorting-and-slash-or-indirect-draw-is-on">UUM-24848</a>)</p></li>
<li><p>Web Platform: "wasm-ld.exe" is not terminated when canceling a WebGL Build during the "Linking build.js (wasm)" phase
(<a href="https://issuetracker.unity3d.com/issues/wasm-ld-dot-exe-is-not-terminated-when-canceling-a-webgl-build-during-the-linking-build-dot-js-wasm-phase">UUM-20797</a>)</p></li>
</ul>

<h3>2022.2.7f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li><p>Editor: Added option to Scene View preferences to only refresh the Scene view when the Editor is in focus.</p></li>
<li><p>Package Manager: Added Web3 as a Filter Category in My Assets.</p></li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>Core: Boot config option <code>no-main-thread-job-stealing=true</code> can be used to prevent the main thread from ever stealing job work. This option should only be used under special circumstances where very long running jobs cannot be broken down, and the main thread has a high likelihood of running long running work inadvertently.</p></li>
<li><p>IL2CPP: Improved error message when the GenericSharingVisitor encounters an opcode that it cannot handle.</p></li>
<li><p>Shadergraph: The asset postprocessor for shader graph now only performs the majority of its work when a shader-related asset has been changed.</p></li>
<li><p>UI Toolkit: Improved performance of tree expansion of UI Toolkit TreeViews.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li>Graphics: Combined unity_ProbesOcclusion into SHCoefficients for BatchRendererGroup.
(UUM-24996)</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed the AnimatedTile with LoopOnce set restarting animation loop when its Tilemap is selected in the Editor
(UUM-25434)</p></li>
<li><p>Asset Import: Memory leak diagnostic switches are now passed through to the asset import workers.</p></li>
<li><p>DX12: Fixed a crash caused by using a sub Mesh with 0 vertices in ray tracing effects.
(UUM-24711)</p></li>
<li><p>DX12: Fixed <code>GetNextFrameValue()</code> in DX12 native rendering plugins.
(<a href="https://issuetracker.unity3d.com/issues/getnextframefencevalue-always-returns-1">UUM-23065</a>)</p></li>
<li><p>Editor: Fix for "cannot be multi-edited" message in Inspector appearing when it should not.
(UUM-15306)</p></li>
<li><p>Editor: Fixed a build performance regression caused by shader variant prefiltering overhead.
(<a href="https://issuetracker.unity3d.com/issues/shader-prefiltering-takes-a-long-time-to-query-mono-attributes-on-hdrp">UUM-23173</a>)</p></li>
<li><p>Editor: Fixed a crash on <code>UpdateSharedDataSubMeshVertexRange</code> when importing a SpeedTree file.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-updateshareddatasubmeshvertexrange-when-importing-a-speedtree-file">UUM-25371</a>)</p></li>
<li><p>Editor: Fixed a crash when changing the source URL of a video player in Android.
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android">UUM-20661</a>)</p></li>
<li><p>Editor: Fixed an Editor crash when rendering with UsePass or Fallback via SRP batcher.
(<a href="https://issuetracker.unity3d.com/issues/unity-editor-crashes-on-scriptablebatchrenderer-applyshaderpass-after-editing-shaders-and-entering-play-mode">UUM-19898</a>)</p></li>
<li><p>Editor: Fixed an Editor crash when you try to build a project with corrupt compute shaders.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-the-unknown-line-when-building-a-specific-project">UUM-25488</a>)</p></li>
<li><p>Editor: Fixed an Editor hang when an import in the worker process fails because of an asset being changed during the import. Any following sync import (using ProduceArtifact API) request for this asset would cause the Editor to hang.
(UUM-22607)</p></li>
<li><p>Editor: Fixed an issue where overlays were resizable when they shouldn't be.
(UUM-10061)</p></li>
<li><p>Editor: Fixed an issue with spurious errors in the console being output when the lighting cache is not intact.
(<a href="https://issuetracker.unity3d.com/issues/uv-charts-preview-window-not-displayed-when-opening-lightmaps">UUM-21668</a>)</p></li>
<li><p>Editor: Fixed case where SetParent allowed setting transforms as parents when they are persistent.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-rebuildtransformhierarchy-when-setting-a-transform-parent-to-assetbundle">UUM-12399</a>)</p></li>
<li><p>Editor: Fixed editor crash on MacOS when exporting with PVRTC texture compression setting.
(<a href="https://issuetracker.unity3d.com/issues/m1-crash-on-mtlgetenvcase-when-building-the-project-for-ios">UUM-22385</a>)</p></li>
<li><p>Editor: Fixed incorrect information and improve documention for the RuntimeInitializeOnLoadMethod attribute. The documentation now clarifies the execution order and provides more detailed information about the object state during runtime initiailization.
(<a href="https://issuetracker.unity3d.com/issues/runtimeinitializeonloadmethod-documentation-is-incorrect-and-lacking-helpful-information">UUM-21543</a>)</p></li>
<li><p>Editor: Fixed recent crash regression when shader compilation error.
(UUM-26357)</p></li>
<li><p>Editor: Fixed the rendering layers in the Light inspector. You can now select <strong>Everything</strong>.
(<a href="https://issuetracker.unity3d.com/issues/urp-rendering-layers-field-gets-set-to-nothing-when-earlier-it-was-set-to-everything">UUM-14307</a>)</p></li>
<li><p>Editor: Fixed UsePass and Fallback rendering sometimes broken in Editor when using SRP batcher.
(<a href="https://issuetracker.unity3d.com/issues/sphere-gameobject-doesnt-get-rendered-when-using-unlit-dot-unlit-usepass-shader">UUM-18980</a>)</p></li>
<li><p>Editor: Removed an unnecessary "cannot be multi-edited" message in the Inspector.
(<a href="https://issuetracker.unity3d.com/issues/timeline-components-that-are-only-on-some-of-the-selected-objects-cannot-be-multi-edited-appears-in-inspector-even-after-deselecting-multiple-objects">UUM-10473</a>)</p></li>
<li><p>Editor: [SpeedTree]: Fixed overly red debug visualization for surface normals when using Rendering Debugger with HDRP projects.
(UUM-22897)</p></li>
<li><p>GI: Enabled the GPU lightmapper work on Intel Arc 750 GPUs.
(UUM-21746)</p></li>
<li><p>GI: Fixed only one GPU being available to select as the "GPU Baking Device" when multiple identical GPUs are installed.
(<a href="https://issuetracker.unity3d.com/issues/only-one-gpu-is-available-to-select-as-the-gpu-baking-device-when-two-identical-gpus-are-installed-on-a-computer">UUM-15155</a>)</p></li>
<li><p>Graphics: Fixed present callbacks so they are now called correctly when the GfxDeviceClient is set to not be serializing (ST threading mode).
(UUM-25836)</p></li>
<li><p>Graphics: Throw an ArgumentNullException if null is passed in as a parameter to Unwrapping.GeneratePerTriangleUV.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-unwrapping-custom-generatepertriangleuvimpl-injected-when-passing-null-to-unwrapping-dot-generatesecondaryuvset">UUM-4614</a>)</p></li>
<li><p>IL2CPP: Emitted code that compiles for array element access from null in a non-development player build.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-unity-fails-to-build-when-using-faulty-function-with-an-element-being-called-from-null-array">UUM-597</a>)</p></li>
<li><p>IL2CPP: Fixed an issue that did not allow access to special folders in Windows Store apps.
(<a href="https://issuetracker.unity3d.com/issues/unable-to-access-knownfolders-dot-objects3d-folder-using-system-dot-io-api-when-deployed-on-hololens-2">UUM-17611</a>)</p></li>
<li><p>IL2CPP: Fixed <code>Monitor.IsEntered</code> returning true when the monitor is entered on a different thread from the current thread.
(<a href="https://issuetracker.unity3d.com/issues/monitor-dot-isentered-checks-if-any-thread-holds-the-lock-when-using-il2cpp">UUM-22329</a>)</p></li>
<li><p>macOS: Enabled VSync now works correctly when moving the Editor window between screens with different refresh rates.
(<a href="https://issuetracker.unity3d.com/issues/apple-silicon-editor-game-view-still-running-with-120-fps-with-promotion-when-vsync-is-turned-on-external-60hz-monitor">UUM-9097</a>)</p></li>
<li><p>Mobile: Fixed the touch reset in device simulator when unity remote is disconnected.
(<a href="https://issuetracker.unity3d.com/issues/touch-input-is-reset-in-device-simulator-when-unity-remote-is-killed">UUM-6667</a>)</p></li>
<li><p>Package Manager: Fix cycling through windows stops at the Package Manager window when using a shortcut.
(<a href="https://issuetracker.unity3d.com/issues/macos-cycling-through-windows-stops-at-the-package-manager-window-when-using-plus-shortcut">UUM-21612</a>)</p></li>
<li><p>Package Manager: Fixed the Package Manager so it no longer throws an error when importing a complete project for the first time.
(UUM-20000)</p></li>
<li><p>Particles: Removed an erroneous grabpass when using Particle Standard Surface Shader. It should only be triggered when using the Distortion effect.
(UUM-12916)</p></li>
<li><p>Prefabs: Refactored PrefabSave code and fixed duplicate file ids known bugs.
(UUM-1282)</p></li>
<li><p>Scene/Game View: Fixed crashes in GetFilteredRendererNodes sometimes happening when trying to pick an object with a BatchRendererGroup active.</p></li>
<li><p>Shaders: Fixed being able to use SetVector on integer types in compute shaders.
(<a href="https://issuetracker.unity3d.com/issues/computeshader-dot-setvector-does-not-work-when-assigning-to-int4">UUM-5760</a>)</p></li>
<li><p>Shaders: Fixed missing scalar-to-vector expansion in bitFieldInsert on Metal.
(UUM-17883)</p></li>
<li><p>Shaders: Fixed SetGlobalInteger not working in compute shaders.
(<a href="https://issuetracker.unity3d.com/issues/shader-dot-setglobalinteger-does-not-work-when-used-with-compute-shaders-1">UUM-3271</a>)</p></li>
<li><p>Shaders: Fixed SV_PrimitiveID on Metal.
(<a href="https://issuetracker.unity3d.com/issues/metal-shader-is-broken-when-using-sv-primitiveid">UUM-22593</a>)</p></li>
<li><p>SRP Core: Fixed a Render Graph bug where culled passes would be delegated to releasing a resource, resulting in unwanted leaking.
(UUM-20800)</p></li>
<li><p>uGUI: Fixed the slider's direction property not marking the scene dirty once this is changed when in prefab's isolation/context mode.
(<a href="https://issuetracker.unity3d.com/issues/changes-made-to-direction-in-slider-controller-prefab-are-not-saved">UUM-20875</a>)</p></li>
<li><p>UI Toolkit: Fixed a memory leak in UI Toolkit.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-ui-documents-are-not-unloaded-correctly-when-switching-scenes">UUM-16365</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where newline caused incorrect text size rounding error.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-labels-width-is-not-extended-causing-additional-empty-lines-when-using-specific-resolutions">UUM-4169</a>)</p></li>
<li><p>UI Toolkit: Fixed dynamic-color so it now works if the background color was previously transparent.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-buttons-lose-focus-background-color-when-cycling-through-them">UUM-21405</a>)</p></li>
<li><p>UI Toolkit: Fixed long selectors names in UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-selector-names-that-contain-more-than-24-symbols-are-not-fully-visible-in-the-stylesheets-window-of-the-ui-builder">UUM-17304</a>)</p></li>
<li><p>UI Toolkit: Fixed ScrollView continuing to scroll after ScrollTo was called.
(<a href="https://issuetracker.unity3d.com/issues/scrollview-keeps-scrolling-after-scrollto-method-triggers">UUM-12584</a>)</p></li>
<li><p>UI Toolkit: Fixed ScrollView scrollbar input issues when using touch.
(<a href="https://issuetracker.unity3d.com/issues/mobile-the-scrollbar-jumps-around-and-reverses-scroll-direction-when-using-touch-input-and-interacting-with-a-dropdown">UUM-17804</a>)</p></li>
<li><p>UI Toolkit: Fixed the double click select word when selectAllOnMouseUp and selectAllOnFocus is on.
(UUM-15805)</p></li>
<li><p>UI Toolkit: Fixed the selection on input fields not being cleared when losing focus.
(<a href="https://issuetracker.unity3d.com/issues/selection-staying-after-blur">UUM-12086</a>)</p></li>
<li><p>Universal RP: Fixed a light cookie out of bounds.
(<a href="https://issuetracker.unity3d.com/issues/rendering-stops-and-error-is-spammed-when-light-limit-is-reached-on-ios-metal-using-deferred">UUM-20622</a>)</p></li>
<li><p>Universal RP: Fixed an issue causing Dynamic Resolution to be disabled during URP rendering.
(<a href="https://issuetracker.unity3d.com/issues/urp-dynamic-resolution-cant-be-checked-when-scene-view-tab-isnt-focused">UUM-18852</a>)</p></li>
<li><p>Video: Enabled URLs without extensions to now better be supported by the VideoPlayer.
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-on-nss-database-lookup-when-connecting-to-video-source-url">UUM-15705</a>)</p></li>
<li><p>Video: Fixed multi-display rendering so it now displays the first camera's view on both displays instead of displaying both camera's views when used with a mobile device.
(<a href="https://issuetracker.unity3d.com/issues/multi-display-rendering-is-displaying-the-first-cameras-view-on-both-displays-instead-of-displaying-both-cameras-views-when-used-with-a-mobile-device">UUM-13587</a>)</p></li>
</ul>







<h3>Known Issues in 2022.2.6f1</h3>

<ul>
<li><p>2D: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>DirectX12: Crash on D3D12GetInterface when opening the project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-d3d12getinterface-when-opening-the-project">UUM-22222</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>OpenGL: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Serialization: Serialized field values are lost when switching between branches using Git
(<a href="https://issuetracker.unity3d.com/issues/serialized-field-values-are-lost-when-switching-between-branches-using-git">UUM-12454</a>)</p></li>
<li><p>Templates: [VR Template] Standalone Profiler Crashes when opening
(<a href="https://issuetracker.unity3d.com/issues/vr-template-standalone-profiler-crashes-when-opening">UUM-21186</a>)</p></li>
<li><p>UI Toolkit Controls: Element UI disappears and NullReferenceException is thrown when dragging off the last or first element from the list in the Inspector
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>Universal RP: Nothing is rendered in the built URP project when Deferred rendering is selected and Accurate G-buffer normals are enabled
(<a href="https://issuetracker.unity3d.com/issues/nothing-is-rendered-in-the-built-urp-project-when-deferred-rendering-is-selected-and-accurate-g-buffer-normals-are-enabled">UUM-25112</a>)</p></li>
<li><p>Visual Effects: SDF Baking causes memory to be allocated that isn't deallocated when in Play Mode and in Builds
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-to-be-allocated-that-isnt-deallocated-when-in-play-mode-and-in-builds">UUM-25814</a>)</p></li>
<li><p>Visual Effects: [VFX Graph] Particles Flicker when sorting and/or Indirect draw is on.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-particles-flicker-when-sorting-and-slash-or-indirect-draw-is-on">UUM-24848</a>)</p></li>
</ul>

<h3>2022.2.6f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Physics: RaycastHit.textureCoord is now available off the main thread.</p></li>
<li><p>Shadergraph: Sped up rename operations on properties/keywords/dropdowns in large graph.
(SGB-382)</p></li>
<li><p>Shadergraph: Sped up setting blackboard values in large graphs.
(SGB-384)</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li>Player: Re-enabled 'timestamp' argument for debug players.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Added buffer to prevent SplitView from covering Create New Palette toolbar in Tile Palette Window.
(UUM-25170)</p></li>
<li><p>2D: Fixed an issue where the Name/FileIds in a Sprite meta file would get reordered when an importer setting is changed.
(<a href="https://issuetracker.unity3d.com/issues/texture-version-control-importing-certain-textures-with-multiple-sprites-cause-arbitrary-changes-in-namefileidtable-mapping-in-meta-file">UUM-22494</a>)</p></li>
<li><p>2D: Fixed issue where Tiles are "double painted" when a user does a mouse drag when painting on a Tilemap.
(UUM-25164)</p></li>
<li><p>Asset Bundles: Fixed an issue where a "Failed to decompress data" error occurs when loading a bundle.
(UUM-22990)</p></li>
<li><p>Asset Bundles: Fixed issue where "Failed to decompress data" error occurs when loading bundle.
(<a href="https://issuetracker.unity3d.com/issues/assetbundle-is-invalid-and-failed-to-decompress-data-errors-appear-after-exporting-and-importing-specific-asset-bundles">UUM-6639</a>)</p></li>
<li><p>Audio: Improved an FSBTool AAC-encoding error message related to small files. They need to be at least 1024 samples, not 256.
(<a href="https://issuetracker.unity3d.com/issues/webgl-throws-an-incorrect-error-when-importing-a-too-small-audio-file">UUM-16609</a>)</p></li>
<li><p>Build Pipeline: Improved error message, and remove possibility of crash, when a MonoBehaviour or ScriptableObject is being built that does not have a MonoScript.
(<a href="https://issuetracker.unity3d.com/issues/unity-editor-crashes-on-collectallserializereferencetypesandpersistentcalltargets-when-building-a-project-for-standalone-player">UUM-21886</a>)</p></li>
<li><p>DX12: Fixed a crash observed in e.g. HDRP sample project.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-template-standalone-player-crashes-after-a-few-seconds">UUM-20176</a>)</p></li>
<li><p>Editor: Dragging a component to the bottom of the inspector will now properly move that component to the end.
(<a href="https://issuetracker.unity3d.com/issues/inspector-component-isnt-placed-at-the-bottom-when-releasing-mouse-outside-of-the-blue-highlight">UUM-18711</a>)</p></li>
<li><p>Editor: Dropped warning about mismatching mipmap limits when using a region-based CopyTexture.
(<a href="https://issuetracker.unity3d.com/issues/unnecessary-amounts-of-warnings-are-logged-when-using-graphics-dot-copytexture">UUM-21771</a>)</p></li>
<li><p>Editor: Fixed a crash when there was a corrupt PrefabInstance.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-awakefromloadqueue-checkgameobjectandcomponentstructure-when-loading-a-scene-manually">UUM-1926</a>)</p></li>
<li><p>Editor: Fixed Shift modifier not allowing to use SceneView tool shortcuts.
(<a href="https://issuetracker.unity3d.com/issues/editor-shift-key-prevent-the-use-of-sceneview-tool-shortcuts">UUM-21938</a>)</p></li>
<li><p>Editor: Improved error message when an incompatible mesh is used with skinning code.
(<a href="https://issuetracker.unity3d.com/issues/mesh-error-message-about-mesh-is-missing-useful-info">UUM-13268</a>)</p></li>
<li><p>HDRP: Fixed LightList keywords showing errors in the log when strict variant matching is enabled.</p></li>
<li><p>iOS: Fixed iOS wrong orientation output when in split view mode.
(<a href="https://issuetracker.unity3d.com/issues/ios-screen-dot-orientation-reports-wrong-device-orientation-when-rotating-a-split-view-supported-ios-device-multiple-times">UUM-17545</a>)</p></li>
<li><p>Package Manager: Added security anchor to the Scoped Registry's "Read more" link in project Settings.
(UUM-25262)</p></li>
<li><p>Profiler: Fixed GPU module's sample hierarchy so that it no longer uses CPU data after a recompilation when there is an active selection.
(<a href="https://issuetracker.unity3d.com/issues/gpu-usage-hierarchy-columns-in-the-profiler-window-change-when-scripts-are-recompiled">UUM-20083</a>)</p></li>
<li><p>Shadergraph: Fixed NullReferenceException when entering Play Mode with an unfocused Shader Graph window/on closing the Shader Graph Window.
(<a href="https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-at-play-mode-entrance-when-unfocused-shader-graph-tab-is-opened">SGB-409</a>)</p></li>
<li><p>Shaders: Fixed an issue that shaders will now reimport correctly when installing a package that only has shader include files.
(UUM-16415)</p></li>
<li><p>Terrain: Fixed a crash on "QueryComponentByType" when entering Play Mode if setting "useInstancing" to true in "DetailPrototype".
(<a href="https://issuetracker.unity3d.com/issues/crash-on-querycomponentbytype-when-entering-play-mode-if-setting-useinstancing-to-true-in-detailprototype">UUM-17546</a>)</p></li>
<li><p>TextCore: Fixed an issue with the italic on wrapped text.
(<a href="https://issuetracker.unity3d.com/issues/italic-tags-only-work-for-the-first-line-of-text-when-the-texts-wrap-is-set-to-normal">UUM-22328</a>)</p></li>
<li><p>UI Elements: Fixed an issue with the GenericDropdownMenu that prevented the items from receiving input when it's reused.
(<a href="https://issuetracker.unity3d.com/issues/the-callbacks-for-attachtopanelevent-and-detachfrompanelevent-are-unregistered-when-the-ondetachfrompanel-is-called">UUM-21001</a>)</p></li>
<li><p>UI Toolkit: Fixed dynamic-transform offset occurring at large coordinates.
(<a href="https://issuetracker.unity3d.com/issues/handle-of-a-slider-is-misaligned-when-using-usagehints-dot-dynamictransform-if-the-select-platform-is-ios-or-android">UUM-20442</a>)</p></li>
<li><p>Universal RP: Fixed y-flipped shading on gizmos in game view.
(<a href="https://issuetracker.unity3d.com/issues/urp-depth-buffer-is-flipped-on-the-y-axis-and-disconnected-from-the-gameobject-when-in-the-play-mode">UUM-21607</a>)</p></li>
<li><p>VFX Graph: Fixed an issue to avoid file access as much as possible when new assets are imported.
(UUM-21642)</p></li>
<li><p>VFX Graph: Fixed compilation error when targeting .NET Standard runtime.
(<a href="https://issuetracker.unity3d.com/issues/visual-effect-graph-package-compilation-fails-when-the-editor-assemblies-compatibility-level-is-set-to-net-standard">UUM-21618</a>)</p></li>
<li><p>Windows: Fixed for incorrect display names of certain subset of keys.
(<a href="https://issuetracker.unity3d.com/issues/input-system-arrow-keys-are-displayed-as-num-when-using-arrowkey-dot-displaynames">UUM-22694</a>)</p></li>
</ul>











<h3>Known Issues in 2022.2.5f1</h3>

<ul>
<li><p>2D: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>OpenGL: [URP] The Scene View flickers when hovering over it with the cursor
(<a href="https://issuetracker.unity3d.com/issues/linux-urp-the-scene-view-flickers-when-hovering-over-it-with-the-cursor">UUM-24656</a>)</p></li>
<li><p>Profiling: [VR Template] Standalone Profiler Crashes when opening
(<a href="https://issuetracker.unity3d.com/issues/vr-template-standalone-profiler-crashes-when-opening">UUM-21186</a>)</p></li>
<li><p>RP Foundation: [Silicon] Crash on ScriptableRenderLoopJob when machine is left idle while the Editor is in Play mode
(<a href="https://issuetracker.unity3d.com/issues/silicon-crash-on-scriptablerenderloopjob-when-machine-is-left-idle-while-the-editor-is-in-play-mode">UUM-25831</a>)</p></li>
<li><p>Scripting: Script component no longer recognized in the Inspector when attached to a GameObject and then moved to a different location in the Project window
(<a href="https://issuetracker.unity3d.com/issues/script-component-no-longer-recognized-in-the-inspector-when-attached-to-a-gameobject-and-then-moved-to-a-different-location-in-the-project-window">UUM-25445</a>)</p></li>
<li><p>Serialization: Serialized field values are lost when switching between branches using Git
(<a href="https://issuetracker.unity3d.com/issues/serialized-field-values-are-lost-when-switching-between-branches-using-git">UUM-12454</a>)</p></li>
<li><p>UI Toolkit Controls: Element UI disappears and NullReferenceException is thrown when dragging off the last or first element from the list in the Inspector
(<a href="https://issuetracker.unity3d.com/issues/element-ui-disappears-and-nullreferenceexception-is-thrown-when-dragging-off-the-last-or-first-element-from-the-list-in-the-inspector">UUM-25833</a>)</p></li>
<li><p>Visual Effects: [VFX Graph] Opaque Unlit Output don't write to Depth
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-opaque-unlit-output-dont-write-to-depth">UUM-19559</a>)</p></li>
<li><p>Visual Effects: [VFX Graph] Particles Flicker when sorting and/or Indirect draw is on.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-particles-flicker-when-sorting-and-slash-or-indirect-draw-is-on">UUM-24848</a>)</p></li>
</ul>

<h3>2022.2.5f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li>EmbeddedLinux: Now enabled via BootConfig parameters, Editor Setting and has a scripting entrypoint.</li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>HDRP: Added: DecalShaderGraphGUI.SetupDecalKeywordsAndPass - Adding back a public API used to validate shadergraph materials by user scripts.</p></li>
<li><p>Scripting: Added: Object.FindFirstObjectByType() and Object.FindAnyObjectByType() functions added as potentially faster alternatives to Object.FindObjectOfType().  These new functions let you decide whether you must have the first (lowest InstanceID) object found or if any instance is adequate.  In the latter case the function can be many times faster as no internal sorting is required.  See the scripting documentation for both functions for more details.</p></li>
<li><p>Scripting: Added: Object.FindObjectsByType() function added as a potentially faster alternative to Object.FindObjectsOfType().  This new function gives users the choice whether or not to perform the expensive sorting by InstanceID on the returned collection of objects rather than having it always performed wasting time when unnecessary.  See the scripting documentation for Object.FindObjectsByType() and Object.FindObjectsOfType() for more details.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Documentation: Added documentation for public-facing methods:<br></p>

<ul>
<li>EditorUserBuildSettings.SwitchActiveBuildTarget<br></li>
<li>NamedBuildTarget.FromBuildTargetGroup<br></li>
<li>NamedBuildTarget.ToBuildTargetGroup
(UUM-22137)</li>
</ul></li>
<li><p>Editor: Updated the documentation for AudioClip.GetData. Clarified the usage of the API for all streamed clips and made a note on the return value of AudioClip.GetData which is currently undocumented.
(<a href="https://issuetracker.unity3d.com/issues/cannot-get-data-from-streamed-samples-when-using-pcm-read-callbacks">UUM-363</a>)</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Android: Fixed an issue causing builds to fail when output file has no extension and Build App Bundle (Google Play) is enabled.
(<a href="https://issuetracker.unity3d.com/issues/android-build-fails-when-building-using-a-script-and-build-app-bundle-google-play-is-enabled">UUM-10941</a>)</p></li>
<li><p>Android: Fixed mapping file output failure when destination folder doesn't exist.
(<a href="https://issuetracker.unity3d.com/issues/android-building-for-android-fails-on-processing-mapping-file-if-output-folder-did-not-exist-prior-to-build">UUM-9368</a>)</p></li>
<li><p>Android: Warn user if both template file and disabled template file exists in project.
(<a href="https://issuetracker.unity3d.com/issues/android-gradle-template-isnt-selectable-when-the-folder-contains-both-the-enabled-and-disabled-extensions-of-the-template">UUM-19338</a>)</p></li>
<li><p>Build Pipeline: Fixed an issue where UWP test certificate would be regenerated once deleted from the assets folder.
(<a href="https://issuetracker.unity3d.com/issues/uwp-build-fails-with-the-error-filenotfoundexception-no-file-found-at-specified-certificate-path-assets-slash-wsatestcertificate-dot-pfx-when-wsatestcertificate-dot-pfx-is-deleted">UUM-22116</a>)</p></li>
<li><p>Build Pipeline: Fixed null reference errors when loading user scripting objects from ContentFiles.
(UUM-24989)</p></li>
<li><p>Build Pipeline: Switching between Desktop Standalone and Dedicated Server platforms in the Build Settings window should now cause scripts to recompile.
(UUM-22125)</p></li>
<li><p>Core: Fixed a rare crash in the Job System that could occur during Editor shutdown and Domain Reload when cleaning up Job Reflection Data due to accessing dangling pointers.
(UUM-18867)</p></li>
<li><p>Editor: Enabled AND/OR block to not always be suggested in Query builder mode.
(DOTSE-1992)</p></li>
<li><p>Editor: Enabled the <strong>New Scene</strong> window to now show proper search results when a scene template is pinned.
(<a href="https://issuetracker.unity3d.com/issues/search-results-become-incorrect-after-pin-slash-unpin-functionality-use-in-new-scene-window">UUM-15393</a>)</p></li>
<li><p>Editor: Enabled the state of showtabs to persist in preferences.
(<a href="https://issuetracker.unity3d.com/issues/show-tabs-selection-gets-reset-when-search-window-is-closed-and-then-reopened">UUM-15004</a>)</p></li>
<li><p>Editor: Extracted potential Editor-only dependencies and marked those as Reference instead of Clone.
(<a href="https://issuetracker.unity3d.com/issues/scene-templates-script-gizmos-are-added-as-dependencies-and-are-cloned-by-default-1">UUM-3666</a>)</p></li>
<li><p>Editor: Fixed <strong>Pin in New Scene Dialog</strong> checkbox style in scene template inspector.
(<a href="https://issuetracker.unity3d.com/issues/pin-in-new-scene-dialog-checkbox-has-only-title-in-the-inspector-tab">UUM-15305</a>)</p></li>
<li><p>Editor: Fixed a bug where AssetBundle builds could fail due to incorrectly reported errors about script serialization mismatches.
(<a href="https://issuetracker.unity3d.com/issues/asset-bundles-fail-to-build-when-adding-a-serializefield-value-to-code-after-building-the-player">UUM-19452</a>)</p></li>
<li><p>Editor: Fixed a crash that can happen when closing Unity.
(UUM-22255)</p></li>
<li><p>Editor: Fixed a problem where a failed Unity Linker invocation may cause subsequent builds to fail with "Sequence contains no elements".
(UUM-18372)</p></li>
<li><p>Editor: Fixed Automatically Sign option.
(<a href="https://issuetracker.unity3d.com/issues/ios-m1-signing-team-id-and-automatically-sign-player-settings-are-ignored-when-building-for-ios">UUM-2683</a>)</p></li>
<li><p>Editor: Fixed bug related to scriptable objects so that they are now correctly reloaded in the import worker clients.
(<a href="https://issuetracker.unity3d.com/issues/editor-complains-that-default-renderer-is-missing">UUM-12314</a>)</p></li>
<li><p>Editor: Fixed duplicate <code>EditorApplication.update</code> delegates being registered when changing editor layout.
(<a href="https://issuetracker.unity3d.com/issues/the-reset-all-layouts-button-adds-3-duplicate-delegates-to-editorapplication-dot-update-when-reload-domain-is-disabled">UUM-12847</a>)</p></li>
<li><p>Editor: Fixed for crash that could happen during asset matching in preview thread. Preview thread was not attached to scripting domain which is used by asset matcher.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-c-number-script-compile">UUM-11627</a>)</p></li>
<li><p>Editor: Fixed for right click update in inspector window and package manager.
(<a href="https://issuetracker.unity3d.com/issues/linux-package-manager-doesnt-let-paste-text-when-using-right-click-paste">UUM-2304</a>)</p></li>
<li><p>Editor: Fixed multi select + click so it now works in dependency list.
(UUM-20649)</p></li>
<li><p>Editor: Fixed pin position.
(<a href="https://issuetracker.unity3d.com/issues/pin-in-new-scene-dialog-option-position-migrates-with-inspector-window-resizing">UUM-15301</a>)</p></li>
<li><p>Editor: Fixed showing the dependencies of scene template when there is a single dependency.
(<a href="https://issuetracker.unity3d.com/issues/scene-templates-dependencies-are-not-shown-if-theres-only-one-dependency">UUM-2524</a>)</p></li>
<li><p>Editor: Fixed the scrollbar in the Description field in the new scene dialog.
(<a href="https://issuetracker.unity3d.com/issues/new-scene-template-details-section-misses-a-scrollbar">UUM-15359</a>)</p></li>
<li><p>Editor: Fixed the URL for the Scene Template pipeline documentation.
(<a href="https://issuetracker.unity3d.com/issues/wrong-documentation-page-is-displayed-for-the-scene-template-pipeline-help-icon">UUM-15399</a>)</p></li>
<li><p>Editor: Removed the ability to apply components marked with HideFlags.DontSaveInEditor to Prefab.
(<a href="https://issuetracker.unity3d.com/issues/hideflags-dot-dontsave-hideflags-dot-noteditable-component-on-a-gameobject-still-allows-applying-that-component-to-a-prefab-when-there-is-a-check-if-it-is-already-on-the-gameobject">UUM-21110</a>)</p></li>
<li><p>GI: Fixed bug where light probes are prematurely deleted when unloading a scene after a multiscene bake.
(UUM-19357)</p></li>
<li><p>GI: Fixed corrupted probes on scenes without a lighting data asset when running the editor with -nographics.
(<a href="https://issuetracker.unity3d.com/issues/linear-color-space-always-renders-fullbright-when-target-platform-is-uwp">UUM-16874</a>)</p></li>
<li><p>GI: Fixed issue where baking a single reflection probe could result in the wrong cubemap being associated with the wrong probe.
(<a href="https://issuetracker.unity3d.com/issues/new-cubemap-is-inserted-at-the-end-of-the-array-when-baking-an-individual-probe">UUM-20194</a>)</p></li>
<li><p>Graphics: Avoid memory corruption when async readback destination NativeArray is too small. Instead the readback fails.
(<a href="https://issuetracker.unity3d.com/issues/android-build-with-vulkan-crashes-when-trying-to-invoke-asyncgpureadback">UUM-12422</a>)</p></li>
<li><p>Graphics: Fixed a crash on launch when the most prioritized graphics API is Vulkan and Vulkan drivers are not fully functional.</p></li>
<li><p>HDRP: Fixed diffusion profile list upgrade.</p></li>
<li><p>HDRP: Fixed usage of HDMaterial.ValidateMaterial for materials created from ShaderGraphs.</p></li>
<li><p>IL2CPP: Enabled properly forwarding declare generic value type pointer arguments.
(UUM-19689)</p></li>
<li><p>IL2CPP: Enabled the marshaling offset to compute properly for the first field in an explicit layout type when that field has a non-zero offset.
(<a href="https://issuetracker.unity3d.com/issues/marshal-dot-offsetof-returns-invalid-value-in-il2cpp-for-misaligned-fields-on-macos">UUM-19622</a>)</p></li>
<li><p>IL2CPP: Fixed DllNotFoundException when setting a file to hidden on non-Windows platforms.
(<a href="https://issuetracker.unity3d.com/issues/dllnotfoundexception-is-printed-in-xcode-when-using-file-dot-setattributes-path-fileattributes-dot-hidden-on-ios-devices">UUM-14580</a>)</p></li>
<li><p>IL2CPP: Fixed IL2CPP build crashes when capturing memory snapshot.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-crashes-when-capturing-memory-snapshot">UUM-21880</a>)</p></li>
<li><p>IL2CPP: Fixed incorrect code generation for references to void* pointers.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-code-has-public-ref-void-star-this-int-index-function">UUM-4299</a>)</p></li>
<li><p>IL2CPP: Fixed scenarios where assemblies that were excluded from player builds could be pulled in during managed code stripping.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-due-to-unityeditor-dot-dll-usage-in-testrunner">UUM-14403</a>)</p></li>
<li><p>IL2CPP: Improved performance of awaiting async operations on Windows.
(UUM-20917)</p></li>
<li><p>IL2CPP: Removed caching of assemblies when probing directories in the linker.
(UUM-17887)</p></li>
<li><p>iOS: Fixed freeze on startup when URP is used with memoryless depth backbuffer.
(<a href="https://issuetracker.unity3d.com/issues/ios-application-freezes-at-splash-screen-when-memoryless-depth-is-used">UUM-21910</a>)</p></li>
<li><p>Kernel: Fixed reading out of bounds in FileStreamerReader::DirectRead.
(UUM-22386)</p></li>
<li><p>Linux: Fixed <strong>Shift+alpha</strong> keys so that they are now recognized on certain keyboard layouts.
(<a href="https://issuetracker.unity3d.com/issues/input-dot-getkey-doesnt-read-all-shift-plus-alpha-keys-non-us-keyboard-layouts">UUM-19010</a>)</p></li>
<li><p>Linux: Fixed the panel focus switching when arrow keys are pressed while in play mode.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-panel-focus-gets-switched-when-the-arrow-keys-are-pressed-while-in-play-mode">UUM-21632</a>)</p></li>
<li><p>Mono: Added use of a relative path to the gdiplus dynamic library in the dllmap entry in the config file.
(<a href="https://issuetracker.unity3d.com/issues/mono-the-gdiplus-dll-mapping-has-the-bokken-machine-path-in-monobleedingedge-slash-etc-slash-mono-slash-config">UUM-20719</a>)</p></li>
<li><p>Mono: Fixed an issue where the internal debugger would refuse connections after performing multiple switches between release and debug editor runtime optimizations.
(<a href="https://issuetracker.unity3d.com/issues/unity-debugger-does-not-work-with-visual-studio-when-switching-between-debug-and-release-mode">UUM-16704</a>)</p></li>
<li><p>Physics 2D: Fixed a bug where a Rigidbody2D without interpolation using MovePosition per-frame could result in a memory leak.</p></li>
<li><p>Player: Fixed an issue where all objects are rendered black when using entities.graphics.
(UUM-24814)</p></li>
<li><p>Scene/Game View: Fixed Grid Size field snapping to minimum grid size when trying to enter a value below one.
(<a href="https://issuetracker.unity3d.com/issues/grid-size-field-snapping-to-lowest-possible-value-when-the-number-begins-with-zero">UUM-24640</a>)</p></li>
<li><p>Scripting: Fixed an issue where the API updater was not able to apply changes to internal packages when the project controlled by Perforce.
(UUM-16373)</p></li>
<li><p>Shadergraph: Fixed SRP Batcher compatibility issue with instanced properties.
(UUM-24825)</p></li>
<li><p>Shaders: Fixed a crash when loading shaders that are incompatible with the current hardware due to resource limits.
(<a href="https://issuetracker.unity3d.com/issues/ios-player-crashes-on-unitygfxdeviceworker-when-a-specific-prefab-is-in-the-scene">UUM-21964</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the UI Builder would export "none" instead of "initial" when setting a font to null.
(<a href="https://issuetracker.unity3d.com/issues/warning-warning-expected-but-found-none-is-thrown-when-setting-font-asset-to-none-in-ui-builder-window">UUM-16426</a>)</p></li>
<li><p>UI Toolkit: Fixed incorrect width calculated for Labels with style tags.
(UUM-8428)</p></li>
<li><p>UI Toolkit: Fixed <code>Painter2D.Arc()</code> notch when preceded by a <code>MoveTo()</code> command.
(UUM-22756)</p></li>
<li><p>Universal RP: Fixed an issue causing materials using Shader Graphs with material override to disappear when using the Deferred rendering path if alpha clipping is enabled in the material.
(<a href="https://issuetracker.unity3d.com/issues/material-is-not-rendered-when-changing-the-rendering-path-from-forward-to-deferred">UUM-18063</a>)</p></li>
<li><p>Universal RP: Fixed ComplexLit mixed lighting by matching ComplexLit shader keywords with the Lit shader.
(<a href="https://issuetracker.unity3d.com/issues/directional-light-does-not-affect-game-objects-with-complex-lit-shaders-when-the-light-mode-is-set-to-mixed">UUM-18553</a>)</p></li>
<li><p>VFX Graph: Fixed an exception while using Unlit ShaderGraph with VFX.
(UUM-8053)</p></li>
<li><p>VFX Graph: Fixed an issue were Alpha Clipping have unexpected behavior in editor when used in MaterialOverride with SG integration, .
(UUM-552)</p></li>
<li><p>VFX Graph: Unexpected sorting on some VFX output while using the new SG integration.
(UUM-12152)</p></li>
</ul>







<h3>Known Issues in 2022.2.4f1</h3>

<ul>
<li><p>2D: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>IMGUI Framework: Array values aren't changed when altering them in a custom EditorWindow
(<a href="https://issuetracker.unity3d.com/issues/array-values-arent-changed-when-altering-them-in-a-custom-editorwindow">UUM-15645</a>)</p></li>
<li><p>MacOS: Crash on __pthread_kill when dragging Sprites into the Scene view
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-dragging-sprites-into-the-scene-view">UUM-20950</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>Metal: [M1] Crash on MTLGetEnvCase when building the project for iOS
(<a href="https://issuetracker.unity3d.com/issues/m1-crash-on-mtlgetenvcase-when-building-the-project-for-ios">UUM-22385</a>)</p></li>
<li><p>Serialization: Serialized field values are lost when switching between branches using Git
(<a href="https://issuetracker.unity3d.com/issues/serialized-field-values-are-lost-when-switching-between-branches-using-git">UUM-12454</a>)</p></li>
<li><p>Templates: [VR Template] Standalone Profiler Crashes when opening
(<a href="https://issuetracker.unity3d.com/issues/vr-template-standalone-profiler-crashes-when-opening">UUM-21186</a>)</p></li>
<li><p>Video: [Android] Application crashes when changing the source URL of a video player in Android 
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android">UUM-20661</a>)</p></li>
</ul>

<h3>2022.2.4f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>Android: Added build_fingerprint information to android builds.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>Asset Import: Reduced the overhead of asset importing by limiting the number of copies of internal parameter structs.</p></li>
<li><p>Bug Reporter: Asset import worker logs are now attached to bugs, outside of the project zip.</p></li>
<li><p>GI: Added a toggle for automatic recalculation of environment lighting in the Workflow section of the Lighting window.
(UUM-13907)</p></li>
<li><p>Multiplayer: Added Netcode for GameObjects 1.2.0.</p></li>
<li><p>Particles: Don't call OnParticleTrigger when there are no trigger module events to report. (Optimization).
(<a href="https://issuetracker.unity3d.com/issues/onparticletrigger-is-called-every-frame-when-all-of-the-trigger-module-conditions-are-set-to-ignore-or-any-other-value">UUM-19111</a>)</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Apple TV: Added: Identifier for 3rd generation Apple TV 4K.</p></li>
<li><p>iOS: Added: Identifiers for iPad models released in 2022.</p></li>
<li><p>Version Control: Removed: Collab and its dependency from the package.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>Editor: Updated the Unity FBX SDK bindings to version 4.1.2. which updates Autodesk FBX SDK to 2020.3.2.</p></li>
<li><p>Scene/Game View: Reverted a change that caused the OnSceneGUI event to be exited early on a selection change.
(<a href="https://issuetracker.unity3d.com/issues/gameobject-is-selected-in-the-scene-view-when-clicked-on-even-though-code-preventing-that-is-attached-to-the-gameobject">UUM-17445</a>)</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Added proper manual URL for GridSelection.
(<a href="https://issuetracker.unity3d.com/issues/open-reference-for-grid-selection-help-button-opens-non-existing-page">UUM-20223</a>)</p></li>
<li><p>2D: Fixed rendering of GameObjects in a Tile Palette window when a Scriptable Render Pipeline is used.
(<a href="https://issuetracker.unity3d.com/issues/tile-palette-preview-window-shows-pink-material">UUM-22035</a>)</p></li>
<li><p>AI: Fixed a blocked passage due to seemingly valid polygons after an obstacle carved the NavMesh nearby.
(<a href="https://issuetracker.unity3d.com/issues/navmesh-navmeshobstacle-placed-near-the-edge-of-a-navmesh-causes-isolated-polygons-where-navmeshagents-can-get-stuck">UUM-8240</a>)</p></li>
<li><p>Android: Avoid GC deadlock in AndroidJavaProxy.
(UUM-15968)</p></li>
<li><p>Android: PermissionCallbacks.DeniedAndDontAskAgain is no longer invoked on Android 11 and later. Use Denied instead on all versions.
(<a href="https://issuetracker.unity3d.com/issues/wrong-callback-after-swipe-away-the-permission-dialog">UUM-20936</a>)</p></li>
<li><p>Animation: Fixed 'NullReferenceException' when Animator "Any State" transition arrow is selected.
(<a href="https://issuetracker.unity3d.com/issues/getting-nullreferenceexception-when-animator-any-state-transition-arrow-is-selected">UUM-7732</a>)</p></li>
<li><p>Asset Pipeline: Removed logged error if a preview is requested for an asset that references a deleted asset.
(UUM-6963)</p></li>
<li><p>DX12: Fixed for crash spawning particle effects.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-directx12-with-multiple-stack-traces-when-entering-play-mode">UUM-12979</a>)</p></li>
<li><p>Editor: Enabled Noise Sine Wave in ShaderGraph to now modulate all channels, not just the first.
(SGB-97)</p></li>
<li><p>Editor: Fixed a memory leak which would manifest when loading then unloading scenes additively.
(<a href="https://issuetracker.unity3d.com/issues/memory-usage-slowly-rises-overtime-when-lightprobes-dot-tetrahedralize-is-enabled">UUM-18684</a>)</p></li>
<li><p>Editor: Fixed a windows editor bug where the cursor sometimes jumped to a different screen when double-clicking the property window in multi-display mode.
(UUM-8131)</p></li>
<li><p>Editor: Fixed an issue whereby the depth pre-pass did not batch effectively.
(<a href="https://issuetracker.unity3d.com/issues/the-depth-prepass-does-not-batch-effectively">UUM-20379</a>)</p></li>
<li><p>Editor: Fixed Editor crash when calling API's to show modal dialogs while -drawRect is in progress.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-editorutility-dot-openfolderpanel-is-executed">UUM-2293</a>)</p></li>
<li><p>Editor: Fixed error triggered when reloading domain with a Property window opened.
(UUM-3529)</p></li>
<li><p>Editor: Fixed folder name is truncated when dot is used in the name.
(<a href="https://issuetracker.unity3d.com/issues/folder-name-is-truncated-when-dot-is-used-in-the-name">UUM-7046</a>)</p></li>
<li><p>Editor: Fixed forward only material validation.</p></li>
<li><p>Editor: Fixed issue on Windows where modal dialogs can get the Editor stuck if they are launched from a window that closes itself.
(<a href="https://issuetracker.unity3d.com/issues/the-unity-editor-becomes-unresponsive-when-a-modal-window-loses-focus-and-an-aux-window-exists">UUM-21096</a>)</p></li>
<li><p>Editor: Fixed OnValidate callback is called twice when entering Prefab Mode in Context.
(<a href="https://issuetracker.unity3d.com/issues/onvalidate-callback-is-called-twice-when-entering-prefab-mode">UUM-17190</a>)</p></li>
<li><p>Editor: Fixed potential crash when a scene with a component without a GameObject is loaded.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-opening-a-specific-scene">UUM-1291</a>)</p></li>
<li><p>Editor: Fixed versioned .so libraries are ignored by the Editor when they are imported.
(UUM-11909)</p></li>
<li><p>Editor: PrefabInstance status will now get correctly set if the Prefab has been deleted after the undo operation was recorded.
(<a href="https://issuetracker.unity3d.com/issues/removing-a-prefab-and-undoing-actions-makes-gameobject-being-unable-to-be-dragged-into-project-view">UUM-812</a>)</p></li>
<li><p>Editor: Removed optimization that skips backing up unchanged scene files when entering playmode. This optimization caused too many bugs.
(<a href="https://issuetracker.unity3d.com/issues/editor-unselects-elements-when-entering-and-then-exiting-the-play-mode">UUM-16018</a>)</p></li>
<li><p>Editor: Shadergraph: Shadergraphs that have a LOD Crossfade option will now write the expected disableBatching tag.</p></li>
<li><p>Editor: SpeedTree: Materials selection GUI is now enabled for Mesh Renderer components in the Inspector window.
(UUM-22569)</p></li>
<li><p>Graphics: Fixed a crash that could happen when a BatchRendererGroup is not Disposed and is leaked.
(UUM-23129)</p></li>
<li><p>Graphics: Fixed crash by preventing race condition when opening app from floating icon state on Android.
(<a href="https://issuetracker.unity3d.com/issues/android-crash-with-signal-11-when-opening-app-from-floating-icon-state">UUM-576</a>)</p></li>
<li><p>Graphics: Fixed decals screen space for non-uniforn foveated rendering and vrs foveated rendering with SPI.
(UUM-18497)</p></li>
<li><p>Graphics: Virtual Texturing: Renderer instanced materials (via a renderer.material query in a script) would not copy the correct virtual texture parameters when the original material is not fully initialized. This would incur into a missing VT texture when rendering.
(UUM-20402)</p></li>
<li><p>HDRP: Added note when debug overlay dissapears.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-debug-panel-disappears-in-player-builds-with-certain-debug-modes">UUM-18913</a>)</p></li>
<li><p>HDRP: Fixed an issue with new scene being created with bad directional light.
(UUM-8321)</p></li>
<li><p>HDRP: Fixed decal material upgrade.</p></li>
<li><p>HDRP: Fixed performance when using low quality shadows.</p></li>
<li><p>HDRP: Fixed project import time regression.
(UUM-21636)</p></li>
<li><p>HDRP: Fixed resetting water surface component.
(UUM-18911)</p></li>
<li><p>HDRP: Fixed sun direction when rotating cloud layer.</p></li>
<li><p>HDRP: Fixed the culling layers so that they are now taken into account for the water surfaces.
(UUM-21449)</p></li>
<li><p>HDRP: Fixed volumetric clouds disappearing.
(UUM-20244)</p></li>
<li><p>HDRP: Fixed water normal redirection factor.<br>
Fixed env smoothness attenuation on pools.
(UUM-18945)</p></li>
<li><p>HDRP: Fixed water position on Mac and in debug modes.
(UUM-19573)</p></li>
<li><p>macOS: Default Application.targetFrameRate for MacOS batchmode was always 60fps instead of the maximum achievable frame rate.
(UUM-22161)</p></li>
<li><p>Package Manager: Local package will no longer have tags other than Local.
(UUM-22132)</p></li>
<li><p>Prefabs: Improved the button text in the unused overrides dialog.
(UUM-19026)</p></li>
<li><p>Profiler: Fixed an issue where the Related Data view in the Hierarchy view of the CPU Usage Profiler Module would ping objects in the Editor even when the profiled data did not come from the current Editor session, thereby making these pings essentially random. With this fix, objects related to these Profiler Samples only get pinged if the data was captured from the current Editor session and the Object's Instance IDs are therefore reliable.
(UUM-2165)</p></li>
<li><p>Profiler: Fixed profiler connection allocations tracking under the ProfilerConnection entry in Memory Profiler.
(<a href="https://issuetracker.unity3d.com/issues/android-progressive-memory-consumption-on-android-when-application-is-left-to-idle">UUM-16465</a>)</p></li>
<li><p>Profiler: Fixed rendering of certain character sets in CPU Profiler Timeline view.
(<a href="https://issuetracker.unity3d.com/issues/profiler-does-not-support-characters-when-utf8-encoding-is-used">UUM-16513</a>)</p></li>
<li><p>Scene/Game View: Fixed selected child GameObjects not rendering gizmos when the root GameObject is not also selected.
(<a href="https://issuetracker.unity3d.com/issues/collider-gizmos-are-not-visible-when-a-child-gameobject-is-selected-and-parent-gameobject-is-outside-the-view">UUM-22208</a>)</p></li>
<li><p>Scripting: Fixed an issue where assembly validation errors disappear when clearing console messages.
(UUM-3087)</p></li>
<li><p>Shaders: Fixed an issue that the RenderingCommandBuffer.EnableKeyword(material, keyword) now properly affects rendering.
(UUM-21676)</p></li>
<li><p>Shaders: Preparing variants for compilation dialog now shows the name of the shader being processed.
(<a href="https://issuetracker.unity3d.com/issues/variant-preparation-does-not-show-the-name-of-the-shader">UUM-22015</a>)</p></li>
<li><p>Shaders: Strict shader variant matching will now report the shader stage along with other information when the requested variant is missing.
(<a href="https://issuetracker.unity3d.com/issues/strict-variant-matching-does-not-print-stage-information-when-the-match-is-not-found">UUM-21981</a>)</p></li>
<li><p>SRP Core: Fixed volume profile field state when asset is removed.
(UUM-4641)</p></li>
<li><p>uGUI: Enabled Physics2DRaycast to now use SortingGroups when determining the sorted order of its results.
(<a href="https://issuetracker.unity3d.com/issues/when-raycasting-with-the-physics2draycaster-function-on-overlapped-ui-elements-the-selection-order-is-not-determined-by-the-order-in-which-they-are-rendered">UUM-19833</a>)</p></li>
<li><p>UI Toolkit: Fixed TextField offset when the field has dynamic width.
(UUM-16002)</p></li>
<li><p>Universal RP: Corrected render scale value when rendering scene view.
(UUM-21505)</p></li>
<li><p>Universal RP: Fixed an issue causing GPU hangs when using Forward+ for the default renderer while using Forward or Deferred for the active camera renderer.
(UUM-19682)</p></li>
<li><p>Universal RP: Fixed an issue where enabling Rendering Layers in a URP Asset would break additional lights.
(<a href="https://issuetracker.unity3d.com/issues/rendering-layers-break-additional-lights">UUM-20184</a>)</p></li>
<li><p>Universal RP: Fixed post-process effects in scene view shaded mode.
(<a href="https://issuetracker.unity3d.com/issues/urp-post-processing-is-not-rendered-in-the-scene-view">UUM-11870</a>)</p></li>
<li><p>Universal Windows Platform: Fixed mouse wheel events on UWP.
(<a href="https://issuetracker.unity3d.com/issues/scrolling-with-the-mouse-is-logged-as-a-mousedown-event-when-the-project-is-deployed-on-uwp">UUM-19092</a>)</p></li>
<li><p>WebGL: Fixed Unity integration test PowerPreferenceTests.cs failing to build.
(UUM-15704)</p></li>
<li><p>XR: Fixed issues with CopyColorPass when foveated rendering is enabled.
(UUM-16327)</p></li>
<li><p>XR: VR platforms should also ignore vSyncCount on DX12 platform.</p></li>
</ul>











<h3>Known Issues in 2022.2.3f1</h3>

<ul>
<li><p>2D: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>IL2CPP:  InvalidCastException is thrown when serializing jagged arrays using BinaryFormatter
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-invalidcastexception-is-thrown-when-serializing-jagged-arrays-using-binaryformatter">UUM-23156</a>)</p></li>
<li><p>IMGUI Framework: Array values aren't changed when altering them in a custom EditorWindow
(<a href="https://issuetracker.unity3d.com/issues/array-values-arent-changed-when-altering-them-in-a-custom-editorwindow">UUM-15645</a>)</p></li>
<li><p>iOS: [M1] Crash on MTLGetEnvCase when building the project for iOS
(<a href="https://issuetracker.unity3d.com/issues/m1-crash-on-mtlgetenvcase-when-building-the-project-for-ios">UUM-22385</a>)</p></li>
<li><p>Kernel: [2D] The order of the Sprites is changed in the drop-down asset creation menu
(<a href="https://issuetracker.unity3d.com/issues/2d-the-order-of-the-sprites-is-changed-in-the-drop-down-asset-creation-menu">UUM-12509</a>)</p></li>
<li><p>MacOS: Crash on __pthread_kill when dragging Sprites into the Scene view
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-dragging-sprites-into-the-scene-view">UUM-20950</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>Templates: [VR Template] Standalone Profiler Crashes when opening
(<a href="https://issuetracker.unity3d.com/issues/vr-template-standalone-profiler-crashes-when-opening">UUM-21186</a>)</p></li>
<li><p>Video: [Android] Application crashes when changing the source URL of a video player in Android
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android">UUM-20661</a>)</p></li>
</ul>

<h3>2022.2.3f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Animation: Improved performance of AnimatorOverrideController.ApplyOverrides().
(<a href="https://issuetracker.unity3d.com/issues/significant-impact-on-performance-when-using-animator-override-controller">UUM-14753</a>)</p></li>
<li><p>Asset Import: Reduced the time spent in asset categorization, which happens during asset import and domain reloads.</p></li>
<li><p>Editor: Clarified that agreeing to update the "Mipmap Limit Group" property on texture importers when deleting/renaming a group cannot be reverted with an undo.</p></li>
<li><p>Editor: Improved and shortened editor dialog box messages related to mipmap limit groups.</p></li>
<li><p>Editor: Reduced time to rebuild the CreateAsset(...) menu during a domain reload, it previously was scaling badly for projects with many assemblies.</p></li>
<li><p>Editor: Texture previews now display additional information concerning mips and mipmap limits. When mipmap limits are in use, the mip slider is now properly clamped as well.</p></li>
<li><p>Graphics: Improved docs and UI to indicate that VT does not consider mipmap limits.
(UUM-12347)</p></li>
<li><p>Shaders: Improved performance of ShaderKeywordSet.IsEnabled(LocalKeyword) and ShaderUtil.PassHasKeyword(...).</p></li>
<li><p>VFX Graph: Added a toggle in both VFX preferences in VFX Graph view to allow shader debug symbols with generated shaders.
(UUM-19517)</p></li>
<li><p>Video: Report an error only when the user uses MediaFoundation directly.</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Core: Added: Gizmos.DrawLineList() API which allow a sequence of disconnected lines to be drawn with a single API call improving performance over repeated calls to Gizmos.DrawLine().</p></li>
<li><p>Core: Added: Gizmos.DrawLineStrip() API which allow a sequence of connected lines to be drawn with a single API call improving performance over repeated calls to Gizmos.DrawLine().</p></li>
<li><p>Core: Added: Several new batch Transform APIs that can process multiple points or vectors in a single API call rather than having to make repeated calls on each point in turn which drastically improves performance<br>
Transform.TransformPoints() - batch version of Transform.TransformPoint()<br>
Transform.TransformDirections() - batch version of Transform.TransformDirection()<br>
Transform.TransformVectors() - batch version of Transform.TransformVector()<br>
Transform.InverseTransformPoints() - batch version of Transform.InverseTransformPoint()<br>
Transform.InverseTransformDirections() - batch version of Transform.InverseTransformDirection()<br>
Transform.InverseTransformVectors() - batch version of Transform.InverseTransformVector().</p></li>
<li><p>Core: Added: Use these new methods for improved performance when operating on both positions and rotations at the same time.<br>
Transform.GetLocalPositionAndRotation()<br>
Transform.GetPositionAndRotation()<br>
TransformAccess.GetLocalPositionAndRotation()<br>
TransformAccess.GetPositionAndRotation()<br>
TransformAccess.SetLocalPositionAndRotation()<br>
TransformAccess.SetPositionAndRotation()</p></li>
<li><p>Graphics: Added: Texture2D.activeMipmapLimit() - Returns the mipmap limit used when Unity uploads the texture.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>HDRP: Changed the order of Lens Flare Data Driven in Post Process (now after Bloom).</p></li>
<li><p>Universal RP: Light soft shadow quality setting in URPAsset which lights use by default. Per light override is still possible.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Fixed Autodesk FBX and SketchUp SDK vulnerabilities. (<a href="https://unity.com/security/jan-2023-01">UNITY-SEC-JAN-2023-1</a>)</p></li>
<li><p>2D: Fixed case where there is Sprite Atlas warning in console when loading sprite in playmode.
(<a href="https://issuetracker.unity3d.com/issues/2d-sprite-atlas-sprite-atlas-warning-in-console-when-loading-sprite-in-playmode">UUM-18521</a>)</p></li>
<li><p>2D: Fixed collider shapes for a TilemapCollider2D when rotated Tiles are used with a collider offset.</p></li>
<li><p>2D: Fixed crash when there is an invalid Sprite on a Tilemap and a TilemapRenderer tries to bind the invalid Sprite to a Sprite Atlas.
(UUM-19275)</p></li>
<li><p>2D: Fixed sorting of Tiles in a TilemapRenderer when the Sprites of the Tiles in the TilemapRenderer come from different Texture sources and Sprites with large vertex/index counts are rendered first due to batching.
(UUM-18345)</p></li>
<li><p>2D: Fixed Sprite Mode field is empty upon changing Texture Type to Sprite in TextureImporter.
(<a href="https://issuetracker.unity3d.com/issues/default-texture-settings-are-not-set-when-importing-image">UUM-16278</a>)</p></li>
<li><p>2D: Removed hiding tint in Sprites/Default shader.
(<a href="https://issuetracker.unity3d.com/issues/changing-the-color-for-material-is-not-available-if-shader-is-set-to-sprites-slash-default">UUM-19330</a>)</p></li>
<li><p>Animation: Error is no longer thrown when calling AvatarBuilder.BuildHumanAvatar with a HumanDescription that does not contain a skeleton.
(<a href="https://issuetracker.unity3d.com/issues/avatarbuilder-dot-buildhumanavatar-is-unable-to-find-transform-when-entering-play-mode">UUM-16174</a>)</p></li>
<li><p>Asset Pipeline: Fixed an issue where scene asset labels could disappear when saving the scene.
(<a href="https://issuetracker.unity3d.com/issues/scene-asset-label-disappears-when-the-scene-is-saved">UUM-18045</a>)</p></li>
<li><p>Asset Pipeline: Fixed case of SRP changing mid refresh resulting in infinite imports.
(<a href="https://issuetracker.unity3d.com/issues/prefab-importing-gets-stuck-on-project-opening-when-parallel-importing-is-enabled">UUM-11957</a>)</p></li>
<li><p>Audio: Fixed a bug where audio import of Ogg files would fail sometimes in the Editor. This bug may have affected other audio file types as well.
(<a href="https://issuetracker.unity3d.com/issues/fsbtool-error-internal-error-from-fmod-sub-system-messages-are-thrown-when-importing-ogg-files">UUM-8637</a>)</p></li>
<li><p>Audio: Updated FMOD's FLAC from version 1.2.1 to 1.3.4. This fixes an issue identified by our application security team.
(UUM-400)</p></li>
<li><p>Core: Improved the job scheduler to better balance work across worker threads.<br>
The job scheduler now avoids potential stalls on the main thread as mobile device performance degrades due to thermal throttling.
(UUM-20132)</p></li>
<li><p>DX12: Fixed crash issue with very large project import when the amount of descriptors grows unusually high.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-gfxtaskexecutord3d12-addrequiredresourcebarriers-when-opening-the-project">UUM-20186</a>)</p></li>
<li><p>DX12: Fixed for using HLSL register keyword to assign constant buffer bind points.
(<a href="https://issuetracker.unity3d.com/issues/dx12-dx12-shaders-using-register-keyword-triggers-console-error-d3d12-missing-constants-buffer-entry-dot">UUM-20946</a>)</p></li>
<li><p>DX12: Fixed stalls in asynchronous scene loading with a large number of reflection probes.
(UUM-20766)</p></li>
<li><p>Editor: Avoid breaking SRP Batcher shadow batch when using a different "per material" texture.
(<a href="https://issuetracker.unity3d.com/issues/srp-batcher-cant-batch-draw-calls-during-mainlightshadow-pass-when-readtexturealpha-is-enabled">UUM-11166</a>)</p></li>
<li><p>Editor: Ensure scene view outline render uses the attributed main texture property name rather than the default name.
(<a href="https://issuetracker.unity3d.com/issues/dot-dot-dot-doesnt-have-a-texture-property-maintex-error-when-using-gizmos-with-maintexture-attribute">UUM-20416</a>)</p></li>
<li><p>Editor: Fixed adding additional files as compilation inputs.
(<a href="https://issuetracker.unity3d.com/issues/additional-files-are-not-always-considered-as-input-into-the-compilation-pipeline-when-passed-as-input-to-roslyn-source-generators">UUM-21715</a>)</p></li>
<li><p>Editor: Fixed an exception when searching in the Debugger and UI element has a null name.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-nullreferenceexception-is-thrown-when-searching-in-the-debugger-and-ui-element-has-a-null-name">UUM-18683</a>)</p></li>
<li><p>Editor: Fixed an issue preventing the selection of desired settings when editing them in the "Request Authorization on App Launch" or "Enable Push Notifications" menus.
(<a href="https://issuetracker.unity3d.com/issues/mobile-notification-unable-to-select-wanted-settings-when-editing-them-in-the-request-authorization-on-app-launch-or-enable-push-notifications-menus">UUM-14777</a>)</p></li>
<li><p>Editor: Fixed an issue when having a playableGraph with 2 output, one of which contained blending on the root bone.
(<a href="https://issuetracker.unity3d.com/issues/animation-is-messed-up-when-rig-builder-is-enabled">UUM-16614</a>)</p></li>
<li><p>Editor: Fixed an issue where the "Mipmap Limit Group" property on texture importers would not update correctly if the importers to update were selected when deleting/renaming a group and agreeing to update the project.</p></li>
<li><p>Editor: Fixed an issue where the "Mipmap Limit Group" property would not update correctly on texture importer presets when deleting/renaming a group and agreeing to update the project. (previous two change notes also apply to texture importer presets).</p></li>
<li><p>Editor: Fixed an issue where, while renaming a Mipmap Limit Group, clicking away would incorrectly cancel the operation instead of submitting the input.</p></li>
<li><p>Editor: Fixed camera roll animations import.
(<a href="https://issuetracker.unity3d.com/issues/camera-lookatconstraint-keyframes-are-not-imported-in-the-animation-when-importing-fbx-file-from-3ds-max">UUM-15444</a>)</p></li>
<li><p>Editor: Fixed character encoding for error messages in the Unity Accelerator.
(<a href="https://issuetracker.unity3d.com/issues/tcpprotobufclient-error-is-displayed-in-random-symbols-when-the-os-is-set-to-use-a-non-latin-alphabet-language">UUM-16372</a>)</p></li>
<li><p>Editor: Fixed colorpicker functionality on linux.
(UUM-17499)</p></li>
<li><p>Editor: Fixed crash caused when clipping is potentially needed but end of being unnecessary.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-uitoolkit-vectorutils-makevectorgraphicsstretchbackground-when-resizing-vector-image">UUM-21218</a>)</p></li>
<li><p>Editor: Fixed custom editor tools overriding native ones.
(UUM-13592)</p></li>
<li><p>Editor: Fixed EditorWindow maximum size calculations when using a display not at integer scaling.
(<a href="https://issuetracker.unity3d.com/issues/windows-custom-editorwindow-height-is-6-pixels-longer-than-the-maxsize-slash-minsize-when-its-set-to-the-biggest-slash-smallest-size">UUM-12808</a>)</p></li>
<li><p>Editor: Fixed for scene hierarchy order change when entering Play mode in the Mobile Template.
(UUM-13298)</p></li>
<li><p>Editor: Fixed material copy/paste so it now copies all properties.
(<a href="https://issuetracker.unity3d.com/issues/the-actions-copy-slash-paste-material-properties-do-not-copy-texture-tiling-and-offset-properties">UUM-6041</a>)</p></li>
<li><p>Editor: Fixed memory leaks that were detected when generating a preview when an HDRP project was selected.
(UUM-8320)</p></li>
<li><p>Editor: Fixed missing 'Ctrl/Command + Alt + Mouse 1' Zoom shortcut in SceneView.
(<a href="https://issuetracker.unity3d.com/issues/ctrl-plus-alt-plus-rmb-shortcut-does-not-work-when-using-it-in-the-sceneview">UUM-16087</a>)</p></li>
<li><p>Editor: Fixed t:prefab in AssetProvider only yields files ending in .prefab (no fbx or obj anymore).
(<a href="https://issuetracker.unity3d.com/issues/the-search-window-returns-wrong-types-of-assets-when-using-t-prefab-query">UUM-17774</a>)</p></li>
<li><p>Editor: Fixed that on Mac when hovering over arrow in the Hierarchy to open Prefab in Prefab Mode the tooltip displays shortcut as "Alt" and not "Option".
(<a href="https://issuetracker.unity3d.com/issues/macos-in-hierarchy-hovering-over-arrow-to-open-prefab-in-prefab-view-tooltip-displays-shortcut-to-alt-and-not-command">UUM-15760</a>)</p></li>
<li><p>Editor: Fixed the import process so that only transform remains after importing a broken file, if a Prefab file is found to contain multiple transforms due to external merge tool or manual edit error. <strong>Note:</strong> Import prioritization of <code>RectTransform</code> over <code>Transform</code> remains unchanged.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-gameobjecthierarchyproperty-getcolorcode-when-dragging-prefab-with-tmp-script-to-hierarchy-or-scene-window">UUM-14898</a>)</p></li>
<li><p>Editor: Fixed unexpected rendering when Fragment Normal uses Object Space.
(UUM-10045)</p></li>
<li><p>Editor: Fixed <code>Tools.viewToolActive</code> not returning true when the View tool is set manually.
(UUM-15113)</p></li>
<li><p>Editor: Implemented a domain reload after the preset window closes, to apply settings correctly.
(<a href="https://issuetracker.unity3d.com/issues/scripting-symbols-are-not-refreshed-after-changing-a-preset">UUM-17585</a>)</p></li>
<li><p>Editor: OpenSSL updated to 1.1.1s to address.
(UUM-18983)</p></li>
<li><p>Editor: Refresh the UI when the asset is changed.
(UUM-20377)</p></li>
<li><p>Editor: Reworked InspectorWindow performance tests and merge them with more recent UIToolkit ones.
(UUM-13358)</p></li>
<li><p>Editor: SpeedTree shadergraph shaders now multiply the Smoothness and Metallic slider values with the values from the ExtraTexture when the texture is provided. The default values for the sliders are set to 1.0 instead of 0.5 by default when there's an ExtraTexture is imported with the SpeedTree asset.</p></li>
<li><p>Editor: Unsaved scene changes window was updated.
(<a href="https://issuetracker.unity3d.com/issues/unsaved-changes-window-is-almost-impossible-to-use-when-closing-a-lot-of-unsaved-scenes-with-long-paths">UUM-2325</a>)</p></li>
<li><p>GI: Fixed an OpenCL related compile issue for source customers who have VS 2022 installed.
(UUM-7692)</p></li>
<li><p>GI: Fixed editor crash when baking lightmaps due to uninitialized memory in light cookies.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-aligned-free-when-generating-lighting">UUM-20089</a>)</p></li>
<li><p>GI: Fixed rare instability in SceneVisibility editor tests.
(UUM-20630)</p></li>
<li><p>Graphics: Fixed an issue where Graphics.CopyTexture could fail when using limited textures that were very small.</p></li>
<li><p>Graphics: Fixed an issue where <code>Graphics.CopyTexture</code> would handle textures with stripped mips incorrectly.
(UUM-6165)</p></li>
<li><p>Graphics: Fixed an issue with inspecting a RenderTexture with DepthAuto / ShadowMap as the Color Format so it no longer breaks the inspector.
(UUM-11764)</p></li>
<li><p>Graphics: Fixed Async SSR on D3D12.
(<a href="https://issuetracker.unity3d.com/issues/async-ssr-fails-when-accumulation-is-enabled-and-is-initialized-or-needs-clearing">UUM-3342</a>)</p></li>
<li><p>Graphics: Fixed BatchRendererGroup.GetMesh() crashing when used while re-importing a Mesh.
(UUM-9189)</p></li>
<li><p>Graphics: Fixed Entities Graphics lightmapping not working when a master texture mipmap limit was active.
(PLAT-2021)</p></li>
<li><p>Graphics: Fixed instances where the Texture2D Streaming APIs would return incorrect values for limited textures that were very small and textures with mips stripped.</p></li>
<li><p>Graphics: Fixed mipmap streaming not properly taking into account mipmap limit settings.
(UUM-11567)</p></li>
<li><p>Graphics: Fixed mipmap stripping not properly taking into account mipmap limit settings.
(UUM-11568)</p></li>
<li><p>Graphics: Fixed repeating error messages when a BatchRendererGroup leaks.
(UUM-21698)</p></li>
<li><p>Graphics: Fixed SPI for non-uniform foveated rendering.
(UUM-17563)</p></li>
<li><p>Graphics: Fixed <code>GraphicsFenceType</code> so it is now set correctly from <code>CommandBuffer.CreateGraphicsFence</code>.
(<a href="https://issuetracker.unity3d.com/issues/editor-can-not-determine-if-graphicsfence-has-passed-when-using-commandbuffer">UUM-11450</a>)</p></li>
<li><p>Graphics: Improved BatchRendererGroup error messages.
(UUM-18322)</p></li>
<li><p>Graphics: Removed shadow sampling mode error when using -batchmode.
(<a href="https://issuetracker.unity3d.com/issues/performing-android-and-ios-batch-mode-builds-causes-error-in-rendertexture">UUM-15339</a>)</p></li>
<li><p>HDRP: Enabled evaluation of stacked area lights in the path tracer.
(UUM-18897)</p></li>
<li><p>HDRP: Enabled Water Graph to support custom interpolators.
(UUM-20956)</p></li>
<li><p>HDRP: Fixed an issue where calling <code>HDCamera.Reset()</code> would not reset internal frame count of individual sky and cloud renderers.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-skybox-stops-updating-for-elapsed-time-when-hdcamera-dot-reset-is-called">UUM-19077</a>)</p></li>
<li><p>HDRP: Fixed an issue where reflection probe's will continue to reference an unused custom texture.</p></li>
<li><p>HDRP: Fixed an issue with APV debug max subdiv after having a new bake with higher subdiv level.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-probes-dont-display-for-some-brick-levels">UUM-20112</a>)</p></li>
<li><p>HDRP: Fixed an issue with flickering game view when using HDR output and a realtime reflection probe.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-the-game-view-flickers-when-interacting-with-the-editor-ui-and-a-reflection-probe-in-a-scene-is-set-to-realtime-type-on-hdr-monitors">UUM-17557</a>)</p></li>
<li><p>HDRP: Fixed an issue with focus distance and focal length affecting the scene view.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-focal-distance-has-impact-on-sceneview">UUM-20591</a>)</p></li>
<li><p>HDRP: Fixed coat mask when using iridescence.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-squared-artifacts-for-iridescent-material-when-on-top-of-lit-using-clear-coat">UUM-19681</a>)</p></li>
<li><p>HDRP: Fixed culling issues with infinite water surfaces.
(<a href="https://issuetracker.unity3d.com/issues/incorrectly-culled-polygons-and-apparent-gaps-are-seen-in-the-ocean-when-the-hdrp-water-system-is-used">UUM-10826</a>)</p></li>
<li><p>HDRP: Fixed enabling raytracing in the HDRP asset if resources are in a bad state.
(UUM-18728)</p></li>
<li><p>HDRP: Fixed forward materials with motion vectors rendered twice.</p></li>
<li><p>HDRP: Fixed issues with renderer list culling.
(<a href="https://issuetracker.unity3d.com/issues/the-game-window-view-is-not-rendered-when-scene-window-rendering-is-not-initialized">UUM-16043</a>)</p></li>
<li><p>HDRP: Fixed motion blur issues caused on fast movements.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-motion-blur-produces-artifacts-in-the-template">UUM-19339</a>)</p></li>
<li><p>HDRP: Fixed nan occuring in volumetric clouds when changing elevation drastically.</p></li>
<li><p>HDRP: Fixed stripping on shadergraph depth prepass.
(UUM-17613)</p></li>
<li><p>HDRP: Fixed when using strict variant matching option.
(UUM-13651)</p></li>
<li><p>HDRP: Removed visibility of Vertex Density debug mode on console platforms.
(UUM-14641)</p></li>
<li><p>HDRP: Renamed Amplitude Multipliers to Amplitude Dimmers for the water surface.
(UUM-18559)</p></li>
<li><p>IL2CPP: Corrected handle enums declared inside a generic type.
(UUM-612)</p></li>
<li><p>IL2CPP: Corrected the behavior of the System.IO.Compression.ZipArchive API.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-test-fails-when-writing-a-ziparchive-into-a-ziparchiveentry-within-a-parent-ziparchive">UUM-14582</a>)</p></li>
<li><p>IL2CPP: Enabled constrained calls on stackalloc'd buffers.
(UUM-14341)</p></li>
<li><p>IL2CPP: Fixed handling of numeric conversion IL opcodes in generic code when <strong>Faster (smaller) builds</strong> is enabled.
(<a href="https://issuetracker.unity3d.com/issues/treeview-is-infinitely-populating-items-when-using-il2cpp-build">UUM-15402</a>)</p></li>
<li><p>IL2CPP: Fixed Monitor.Wait with zero timeout so it now returns false.
(<a href="https://issuetracker.unity3d.com/issues/monitor-dot-wait-returns-false-when-running-tests-with-il2cpp">UUM-18188</a>)</p></li>
<li><p>IL2CPP: Fixed occasional missing stack traces in Debug.Log on Windows 10.
(<a href="https://issuetracker.unity3d.com/issues/multithreaded-builds-sometimes-dont-print-the-stack-trace-when-using-il2cpp-scripting-backend">UUM-12672</a>)</p></li>
<li><p>IL2CPP: Fixed stackalloc to return null for zero length requests.
(<a href="https://issuetracker.unity3d.com/issues/stackalloc-int-0-returns-incorrect-result-when-the-project-is-built-with-il2cpp">UUM-15533</a>)</p></li>
<li><p>IL2CPP: Removed an uncommon parameter name collision in generated C++ code.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-generates-parameters-with-the-same-name-when-building-on-android">UUM-14587</a>)</p></li>
<li><p>IL2CPP: Support casts from arrays to interfaces of their reduced type (e.g. int[] -&gt; IEnumerable&lt;uint&gt;).
(UUM-16304)</p></li>
<li><p>iOS: Restored the possibility for ViewController to control status bar appearance.
(<a href="https://issuetracker.unity3d.com/issues/ios-disabling-status-bar-hidden-on-devices-without-a-notch-is-not-working">UUM-6389</a>)</p></li>
<li><p>Linux: Fixed an issue so that Window restoration now restores Editor Window instances correctly.
(<a href="https://issuetracker.unity3d.com/issues/window-restoration-no-longer-restores-editorwindow-instances-correctly">UUM-21138</a>)</p></li>
<li><p>Linux: Fixed tab and shift+tab not working in shader graph windows.
(UUM-17516)</p></li>
<li><p>Linux: Fixed <code>SystemInfo.batteryStatus</code> and <code>SystemInfo.batteryLevel</code> so that they now work on Linux.
(<a href="https://issuetracker.unity3d.com/issues/linux-systeminfo-dot-batterystatus-slash-systeminfo-dot-batterylevel-doesnt-work-on-a-linux-laptop">UUM-16083</a>)</p></li>
<li><p>Mono: Fixed issue where DeflateStream would swallow exceptions instead of throwing them.
(<a href="https://issuetracker.unity3d.com/issues/decompressing-deflatestream-swallows-exceptions-when-they-are-thrown-by-the-wrapped-stream">UUM-17185</a>)</p></li>
<li><p>Mono: Fixed JIT assert on arm with large return structs.
(UUM-18498)</p></li>
<li><p>Mono: Updated the Brotli compression library to version 1.0.9 to correct https://github.com/advisories/GHSA-5v8v-66v8-mwm7.
(UUM-15721)</p></li>
<li><p>Networking: UnityWebRequest: Always allow HTTP on localhost, regardless of setting for secure HTTP.
(<a href="https://issuetracker.unity3d.com/issues/webrequest-cant-connect-to-localhost-when-http-is-used-for-connection">UUM-19293</a>)</p></li>
<li><p>Package Manager: Fixed a bug where importing .unitypackage with project settings into a new project would show an error in the console.
(UUM-20736)</p></li>
<li><p>Package Manager: Fixed the import of a .unitypackage only containing project settings.
(UUM-20189)</p></li>
<li><p>Package Manager: Package documentation links pointing to private Github URLs can now be opened in browser for non-Unity packages. Additionally, for all packages in general, opening local documentation will fall back on the README file if a documentation.md file cannot be found.
(<a href="https://issuetracker.unity3d.com/issues/documentationurl-and-changelogurl-is-ignored-when-package-is-located-in-private-repositorie">UUM-8337</a>)</p></li>
<li><p>Physics: Fixed Rigidbody contact listeners overriding their children colliders that had Provide Contacts set to true.
(<a href="https://issuetracker.unity3d.com/issues/rigidbody-supported-collision-messages-override-collider-messages-when-using-the-collider-dot-providescontacts-property">UUM-18871</a>)</p></li>
<li><p>Physics 2D: Deprecated 2D Physics properties were not available in Player Builds.</p></li>
<li><p>Physics 2D: Fixed an issue so that RelativeJoint2D angularOffset uses Degrees and not Radians.
(<a href="https://issuetracker.unity3d.com/issues/angular-offset-for-relative-joint-2d-displays-degrees-despite-utilizing-radians-in-the-inspector-after-altering-angular-offset-in-a-script">UUM-19333</a>)</p></li>
<li><p>Physics 2D: Fixed an issue when using the 2D Physics Multithreaded solver so that contact processing time no longer increases over time under certain circumstances.
(D2D-4284)</p></li>
<li><p>Prefabs: The Undo system now registers property modifications which replace missing prefab references on script fields.
(UUM-11402)</p></li>
<li><p>Profiler: Fixed missing highlight on select in Unity Profiler Timeline view.
(<a href="https://issuetracker.unity3d.com/issues/luminance-of-thread-block-ui-in-timeline-view-of-profiler-isnt-updated-when-selecting-them">UUM-20023</a>)</p></li>
<li><p>Profiler: Fixed Profiler charts so they show custom counters properly when the displayed frame range contains frames that have been gathered from different different targets (e.g. from Playmode and from a built Player). If those counters use custom ProfilerCategories, the charts now also properly resolve if two counters have the same name but different categories, and will correctly respect the state of the Category being enabled via Profiler.SetCategoryEnabled().
(<a href="https://issuetracker.unity3d.com/issues/profiler-custom-module-frame-chart-isnt-populated-after-player-switch-when-profiler-data-is-not-clear">UUM-6739</a>)</p></li>
<li><p>Profiler: Fixed Profiler samples in the VFX category to contribute towards the Rendering Category instead of Others.
(UUM-2166)</p></li>
<li><p>Profiler: Fixed saving and loading of Profiler Data when the frame range contains frames that have been gathered from different different targets (e.g. from Playmode and from a built Player). Previously saved .data files with such data are irreparably corrupted and will crash on opening. This fix only applies to data saved from this version onwards.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-recursiveadjustchartforgroupchange-when-loading-data-from-a-custom-module">UUM-14767</a>)</p></li>
<li><p>Profiler: Fixed values of the <code>FrameDataView.GetAllCategories</code> API result.
(UUM-20410)</p></li>
<li><p>Scene/Game View: Fixed Handles.DrawWireCube not respecting the current Handles.color.
(<a href="https://issuetracker.unity3d.com/issues/object-with-the-wrong-color-is-drawn-when-using-the-handles-dot-drawwirecube-and-handles-dot-color-functions">UUM-14288</a>)</p></li>
<li><p>Scripting: Removed warning for obsolete platforms when added plugins to plugin folders that contains both obsolete and non-obsolete platforms.
(<a href="https://issuetracker.unity3d.com/issues/cannot-set-deprecated-build-target-osxintel-warning-appears-when-setting-pluginimporters-compatible-platform-to-osx">UUM-12246</a>)</p></li>
<li><p>Serialization: Fixed issue with using SerializeReference within Prefab Variant where reference to local UnityObjects were not updated properly in Prefab Variant Instance.
(<a href="https://issuetracker.unity3d.com/issues/serializereference-working-incorrectly-when-using-prefab-variant">UUM-16434</a>)</p></li>
<li><p>Shadergraph: Fixed rare line-ending conflict in shader graph node templates when source control rewrites eol markers.
(SGB-282)</p></li>
<li><p>Shadergraph: Fixed Shader Graph BiRP Target so it now works correctly with point lights and transparent objects.
(<a href="https://issuetracker.unity3d.com/issues/an-object-does-not-receive-lighting-from-point-light-when-shader-graph-material-is-applied">UUM-9823</a>)</p></li>
<li><p>Shaders: Fixed an incorrect error message when using instanced rendering and replacement shaders.
(UUM-20961)</p></li>
<li><p>SRP Core: Fixed APV baking panel after baking once.
(UUM-21697)</p></li>
<li><p>SRP Core: Fixed changing current value  by mouse click on DebugUI.ObjectFields on the runtime UI.</p></li>
<li><p>SRP Core: Fixed ColorCurves volume leaking Texture2D objects under certain circumstances.
(UUM-16602)</p></li>
<li><p>SRP Core: Fixed reset of APV debug.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-debug-reset-button-does-nothing-in-context-of-apv">UUM-19471</a>)</p></li>
<li><p>SRP Core: Material and Shader reimport times are now being sent to the Analytics server.</p></li>
<li><p>SRP Core: Updated the Volumes when the Volume Info is collapsed.
(UUM-11068)</p></li>
<li><p>UI Toolkit: Fixed :active default style overwritten by :hover:enabled.
(<a href="https://issuetracker.unity3d.com/issues/button-in-the-ui-toolkit-samples-window-doesnt-change-the-color-when-being-pressed">UUM-19845</a>)</p></li>
<li><p>UI Toolkit: Fixed an exception in the UI Toolkit Debugger when the user types in the search bar without a panel selected.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-debugger-throws-null-reference-exceptions-when-the-user-types-in-the-search-bar-without-a-panel-selected">UUM-18090</a>)</p></li>
<li><p>UI Toolkit: Fixed an exception when deleting an element of two arrays of different size in the inspector.
(<a href="https://issuetracker.unity3d.com/issues/out-of-bounds-error-is-thrown-sometimes-when-deleting-an-element-of-two-arrays-with-unique-sizes">UUM-12869</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the list view and tree view would fire the on selection changed callback when resetting the current selection.
(UUM-3448)</p></li>
<li><p>UI Toolkit: Fixed an issue where the Progress Bar's title attribute would not reset inside the UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-progressbar-title-field-isnt-updated-when-setting-the-value-to-an-empty-string">UUM-21345</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the UI Builder would log a cryptic error when trying to save a uxml document outside of the project. It will now inform the user that the operation failed.
(<a href="https://issuetracker.unity3d.com/issues/improve-error-message-when-saving-out-side-of-project">UUM-20711</a>)</p></li>
<li><p>UI Toolkit: Fixed ArgumentOutOfRangeException exception occurring when editing a text element after its text was changing when it was disabled.
(<a href="https://issuetracker.unity3d.com/issues/attempting-to-edit-bone-data-via-textfields-in-skinningeditor-leads-to-argumentoutofrangeexception">UUM-8802</a>)</p></li>
<li><p>UI Toolkit: Fixed context menus for sub-properties not opening when using the Inspector with UI Toolkit.
(<a href="https://issuetracker.unity3d.com/issues/context-menus-for-sub-properties-do-not-show-when-using-the-inspector-with-ui-toolkit">UUM-11643</a>)</p></li>
<li><p>UI Toolkit: Fixed custom property drawers not receiving Mouse events properly.
(<a href="https://issuetracker.unity3d.com/issues/inputactionmap-window-is-not-opening-from-inspector-when-using-serialized-input-actions">UUM-11715</a>)</p></li>
<li><p>UI Toolkit: Fixed data loss while editing in context in UI Builder.
(UUM-20202)</p></li>
<li><p>UI Toolkit: Fixed duplicated decorator drawers.
(<a href="https://issuetracker.unity3d.com/issues/headers-in-the-inspector-are-duplicated-when-using-headerattribute">UUM-8259</a>)</p></li>
<li><p>UI Toolkit: Fixed editing in context not working in canvas in UI Builder.
(UUM-17573)</p></li>
<li><p>UI Toolkit: Fixed elements disappearing when changing both the border radius and padding at the same time.
(<a href="https://issuetracker.unity3d.com/issues/uir-toggling-a-style-that-contains-border-radius-and-margin-slash-padding-causes-some-elements-to-disappear">UUM-4160</a>)</p></li>
<li><p>UI Toolkit: Fixed hierarchy renaming in UI Builder.
(UUM-4900)</p></li>
<li><p>UI Toolkit: Fixed image element so it no longer ignores UV rect when a sprite was used.
(<a href="https://issuetracker.unity3d.com/issues/image-ignores-the-uv-rect-parameter-when-a-sprite-is-used">UUM-18362</a>)</p></li>
<li><p>UI Toolkit: Fixed layout of Image element so it now works with a flipped UV rect.
(<a href="https://issuetracker.unity3d.com/issues/an-image-is-not-displayed-upside-down-when-width-and-height-are-not-specified">UUM-17729</a>)</p></li>
<li><p>UI Toolkit: Fixed mouse wheel event creation.
(<a href="https://issuetracker.unity3d.com/issues/2022-dot-2-scrolling-is-not-working-when-using-ui-toolkit-scrollview">UUM-21403</a>)</p></li>
<li><p>UI Toolkit: Fixed read-only TextField so it can now be copied.
(<a href="https://issuetracker.unity3d.com/issues/input-field-value-cannot-be-copied-in-runtime-when-the-field-is-readonly">UUM-7852</a>)</p></li>
<li><p>UI Toolkit: Fixed reorderable list getting stuck when scrolling, when it contains other nested reorderable lists.
(<a href="https://issuetracker.unity3d.com/issues/editor-gets-stuck-when-scrolling-through-the-reoredable-list">UUM-17067</a>)</p></li>
<li><p>UI Toolkit: Fixed stuck preview when right clicking and dragging in UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-right-clicking-while-dragging-a-visual-element-can-get-the-visual-element-stuck">UUM-3465</a>)</p></li>
<li><p>UI Toolkit: Fixed support for compound assignment operators for UI Toolkit numeric fields (IntegerField, LongField, FloatField, DoubleField).
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-math-assignment-operators-done-in-a-numeric-field-dont-return-the-expression-result">UUM-3471</a>)</p></li>
<li><p>UI Toolkit: Fixed the context menu of the variable text field missing Cut, Copy, Paste actions.
(UUM-3484)</p></li>
<li><p>UI Toolkit: Fixed the soft keyboard functionality for UITK TextFields.
(<a href="https://issuetracker.unity3d.com/issues/input-fields-are-often-not-responsive-on-android">UUM-6153</a>)</p></li>
<li><p>UI Toolkit: Improved UI Toolkit so that flipped UVs are now properly handled by scale modes of the Image element.
(<a href="https://issuetracker.unity3d.com/issues/the-image-is-not-displayed-in-a-window-when-the-image-y-axis-is-flipped">UUM-17136</a>)</p></li>
<li><p>Universal RP: Fixed "High Dynamic Range" Grading Mode variants getting needlessly stripped when <code>Strip Unused Post Processing Variants</code> was selected (even though it's not a volume feature and is part of the UPR asset).
(<a href="https://issuetracker.unity3d.com/issues/builds-are-rendered-darker-than-in-editor-when-building-with-post-processing-enabled">UUM-12673</a>)</p></li>
<li><p>Universal RP: Fixed a missing keyword in ParticleLit for Lightmap shadow mixing.
(<a href="https://issuetracker.unity3d.com/issues/urp-particle-lit-is-missing-number-pragma-multi-compile-lightmap-shadow-mixing">UUM-18601</a>)</p></li>
<li><p>Universal RP: Fixed depth priming issues on Vulkan.
(UUM-21113)</p></li>
<li><p>URP: Fixed 2D game view flickering when using URP Pixel Perfect and Cinemachine Pixel Perfect Extension.
(UUM-20343)</p></li>
<li><p>URP: Fixed errors related to the lack of support of native shadow maps on WebGL1.
(UUM-2270)</p></li>
<li><p>VFX Graph: Fixed an issue that vertex Color was black while using new shader graph integration on planar primitive output.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-missing-vertexcolor-initialization-with-output-quad">UUM-12866</a>)</p></li>
<li><p>VFX Graph: Fixed enum fields could be cropped when text is too long.
(UUM-4420)</p></li>
<li><p>VFX Graph: Forbid drag and drop of material from project browser to VFX component in scene.
(<a href="https://issuetracker.unity3d.com/issues/vfx-dragging-regular-material-onto-a-vfx-graph-will-override-its-own-material">UUM-14790</a>)</p></li>
<li><p>WebGL: Fixed a bug where Firefox would hang at 90% while loading.
(<a href="https://issuetracker.unity3d.com/issues/webgl-player-stops-loading-at-90-percent-in-firefox-when-browser-loses-focus">UUM-1155</a>)</p></li>
<li><p>WebGL: Fixed error handling of AudioContext.resume().
(UUM-17803)</p></li>
<li><p>WebGL: Improved WebAssembly build options to avoid long link times. Added a new Release build option that is focused on faster build speeds, but note that Development builds are the fastest for iteration.
(<a href="https://issuetracker.unity3d.com/issues/webgl-build-times-have-regressed">UUM-15615</a>)</p></li>
<li><p>XR: Fixed crash on Quest when using MSAA and moving out of the guardian during startup.
(UUM-20525)</p></li>
</ul>







<h3>Known Issues in 2022.2.2f1</h3>

<ul>
<li><p>2D: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
<li><p>Animation: Root Motion character warps into a new position when negative speed values  are applied in a Blend Tree
(<a href="https://issuetracker.unity3d.com/issues/root-motion-character-warps-into-a-new-position-when-negative-speed-values-are-applied-in-a-blend-tree">UUM-21885</a>)</p></li>
<li><p>IMGUI Framework: Array values aren't changed when altering them in a custom EditorWindow
(<a href="https://issuetracker.unity3d.com/issues/array-values-arent-changed-when-altering-them-in-a-custom-editorwindow">UUM-15645</a>)</p></li>
<li><p>iOS: [M1] Crash on MTLGetEnvCase when building the project for iOS
(<a href="https://issuetracker.unity3d.com/issues/m1-crash-on-mtlgetenvcase-when-building-the-project-for-ios">UUM-22385</a>)</p></li>
<li><p>Kernel: [2D] The order of the Sprites is changed in the drop-down asset creation menu
(<a href="https://issuetracker.unity3d.com/issues/2d-the-order-of-the-sprites-is-changed-in-the-drop-down-asset-creation-menu">UUM-12509</a>)</p></li>
<li><p>MacOS: Crash on __pthread_kill when dragging Sprites into the Scene view
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-dragging-sprites-into-the-scene-view">UUM-20950</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>Shader System: GameObjects doesn't get rendered when using "Unlit.Unlit_UsePass" Shader
(<a href="https://issuetracker.unity3d.com/issues/sphere-gameobject-doesnt-get-rendered-when-using-unlit-dot-unlit-usepass-shader">UUM-18980</a>)</p></li>
<li><p>Video: [Android] Application crashes when changing the source URL of a video player in Android 
(<a href="https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android">UUM-20661</a>)</p></li>
</ul>

<h3>2022.2.2f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li>Universal RP: Added Temporal Anti-aliasing support. Available from Camera Anti-aliasing settings. Known limitations: Incompatible with MSAA, Dynamic Resolution or Camera stacking. Supports fixed resolution only, no temporal upsampling supported.</li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>Build Pipeline: Improved error handling for builds to show less redundant error messages.</p></li>
<li><p>Editor: Improved performance of Handles.DrawAAPolyLine.</p></li>
<li><p>Editor: Improved performance of rendering the Project Settings. It would previously repeatedly query all objects loaded into the editor, which meant that operations that load assets into memory (entering playmode) would make the Project Settings unusable slow.</p></li>
<li><p>Graphics: Registration of the Shader.globalRenderpipeline is done internaly and using the renderPipelineShaderTag from the RenderPipelineAsset that is currently in use.</p></li>
<li><p>Physics: Increased the Articulation Body tree limit from 64 to 256 bodies.</p></li>
<li><p>Profiler: Reduced the performance cost of drawing charts in the profiler.</p></li>
<li><p>VFX Graph: Fixed lightmap range limitations.
(UUM-19058)</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>Build Pipeline: Obsoleted: Application.SetBuildTags and Application.GetBuildTags are now obsolete.</p></li>
<li><p>Graphics: Added: Overridable property renderPipelineShaderTag on the RenderPipelineAsset.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li>Universal RP: Shader parameters used by additional lights are now removed when additional lights are disabled in URP Assets.</li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>Asset Pipeline: Fixed an issue where the standalone profiler could crash or emit errors when the script domain reloads in the editor.
(<a href="https://issuetracker.unity3d.com/issues/edit-mode-recording-standalone-profiler-crashes-on-stopassetimportingv2internal-when-reloading-the-domain">UUM-19179</a>)</p></li>
<li><p>Build Pipeline: Doing a clean build will remember state about built files, so that files no longer in a build can be deleted in subsequent builds.</p></li>
<li><p>Build Pipeline: Fixed a bug where building a development player, and then a non-development player with no other changes could show the "Development Player" watermark.</p></li>
<li><p>Build Pipeline: Fixed a potential bug where building players could in rare circumstances fail with a sharing violation on a file called buildreport.json_2.traceevents.</p></li>
<li><p>Build Pipeline: Fixed an issue where build GUIDs would sometimes not change between subsequent builds.</p></li>
<li><p>Build Pipeline: Make postprocess callbacks correctly report player path for "install in builds folder".
(UUM-4118)</p></li>
<li><p>Core: Fixed ShaderGraph code generation to properly enable GPU instanced properties.
(<a href="https://issuetracker.unity3d.com/issues/shader-graph-shader-instance-property-gets-added-to-cbuffer-which-causes-gpu-instancing-with-instanced-properties-to-not-work">UUM-20505</a>)</p></li>
<li><p>Editor: Added a check to ensure context view context can't be duplicated, copied or cut.
(<a href="https://issuetracker.unity3d.com/issues/prefab-opened-in-context-can-have-its-root-duplicated-creating-uninteractable-gameobjects-that-dont-get-saved-with-the-prefab-1">UUM-2655</a>)</p></li>
<li><p>Editor: Added a proper error message when trying to run the Editor in a misconfigured environment with no HOME variable set (Mac and Linux).
(<a href="https://issuetracker.unity3d.com/issues/macos-crash-when-opening-project-while-home-is-null">UUM-14787</a>)</p></li>
<li><p>Editor: Added EditorSceneManager event for RestoreSceneManagerSetup so systems can get notified about it.
(UUM-19655)</p></li>
<li><p>Editor: Camera relative culling options have been added to the Graphics section in Project Settings. This will potentially alleviate light popping issues due to lack of precision when the objects or lights are far from the origin. Enabling the camera relative culling setting for lights will potentially introduces issues for objects or lights that are far from the camera origin.
(<a href="https://issuetracker.unity3d.com/issues/spot-light-flickers-when-when-its-far-from-the-origin-point">UUM-7551</a>)</p></li>
<li><p>Editor: Converting the root in a Prefab Asset to a Prefab instance to create a variant is now disallowed, similarly as Replace Prefab instance. This guard is added to prevent loosing default overrides and references for all instances of the Prefab.'.
(<a href="https://issuetracker.unity3d.com/issues/2022-dot-2-feature-reconnect-to-prefab-in-prefab-mode-can-break-references">UUM-20181</a>)</p></li>
<li><p>Editor: Fixed a bug when zooming in using the orthographic camera, the terrain texture was previously rendered incorrectly. Now when zooming in, the texture on the terrain should be rendered correctly.
(<a href="https://issuetracker.unity3d.com/issues/patches-of-terrain-lose-detail-when-zoomed-in-with-orthographic-camera">UUM-1809</a>)</p></li>
<li><p>Editor: Fixed a bug which caused <strong>auto</strong> with <strong>Generate Lighting</strong> to not work as expected in connection with DOTS. Auto mode will now be ignored in the backend when the core Entities package is used.<br>
<strong>Note:</strong> An inspector window and the lighting settings window will show the value of 'Auto Generate' which has been set in the lighting settings asset. The lighting window will show a warning if <strong>Auto Generate</strong> is ticked but it will not prevent the user from doing so.<br>
Note that the following lighting window UI changes have been included in the fix:<br>
<strong>Auto Generate</strong> is not disabled when the Entities package is used. The checkbox will represent the actual value in the lighting settings asset.<br>
The warning is only shown if <strong>Auto Generate</strong> is ticked and the text is updated to say <strong>Auto Generate mode is ignored [...]</strong>.
(UUM-18955)</p></li>
<li><p>Editor: Fixed a crash when a window is closed during EditorWindow.OnLostFocus.
(<a href="https://issuetracker.unity3d.com/issues/error-slash-crash-when-editorwindow-dot-close-is-called-in-editorwindow-dot-onlostfocus">UUM-12434</a>)</p></li>
<li><p>Editor: Fixed an issue if -createProject is used would force script recompile.
(UUM-10810)</p></li>
<li><p>Editor: Fixed animation clip's preview window's grid's depth when using deferred rendering in URP.
(<a href="https://issuetracker.unity3d.com/issues/urp-grid-is-rendered-on-top-of-gameobjects-in-the-animation-preview-area-when-deferred-rendering-is-used">UUM-2947</a>)</p></li>
<li><p>Editor: Fixed Auto-save scenes checkbox.
(<a href="https://issuetracker.unity3d.com/issues/preference-not-saved-when-enabling-auto-save-scenes-before-building">UUM-11717</a>)</p></li>
<li><p>Editor: Fixed EvaluateArgs instabilities.
(UUM-16646)</p></li>
<li><p>Editor: Fixed for special characters not displaying as expected in built application names on Android.
(<a href="https://issuetracker.unity3d.com/issues/some-special-characters-in-product-name-arent-displayed-after-building-app-to-the-android-device">UUM-12251</a>)</p></li>
<li><p>Editor: Fixed intermittent crash when destroying/recreating menu items on Linux.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-burst-signal-handler-when-opening-floating-windows">UUM-11724</a>)</p></li>
<li><p>Editor: Fixed issue when there are 0 quality levels for the current platform and gathering the RP assets for the current target was not returning the one in GraphicsSettings.
(UUM-19235)</p></li>
<li><p>Editor: Fixed issue where mouse up and mouse down events were reported twice in OnGUI when using the Device Simulator.
(<a href="https://issuetracker.unity3d.com/issues/in-device-simulator-ongui-events-are-called-twice">UUM-14340</a>)</p></li>
<li><p>Editor: Fixed regression where physical camera settings were no longer affecting the scene view camera in HDRP. The settings are not properly handled.
(<a href="https://issuetracker.unity3d.com/issues/physical-cameras-properties-no-longer-affect-scene-view-exposure">UUM-18190</a>)</p></li>
<li><p>Editor: Fixed serious Editor performance issue when running on macOS Ventura.
(UUM-19011)</p></li>
<li><p>Editor: Fixed some keyboard shortcuts not working on MacOS editor.
(<a href="https://issuetracker.unity3d.com/issues/macos-command-plus-d-command-plus-c-command-plus-v-and-command-plus-delete-keyboard-shortcuts-does-not-work-in-the-editor">UUM-20428</a>)</p></li>
<li><p>Editor: Fixed tile palette dropdown flickering.
(UUM-8307)</p></li>
<li><p>Editor: Fixed UI Builder importing image in unity ask to save changes then errors out.
(UUM-8302)</p></li>
<li><p>Editor: Improved automation speed on mac.
(UUM-9301)</p></li>
<li><p>Editor: Prevent too many open files error when uploading to Accelerator.
(<a href="https://issuetracker.unity3d.com/issues/case-1389792-too-many-files-open">UUM-19028</a>)</p></li>
<li><p>Editor: Removed Exported define from SearchService to avoid domain reload.
(UUM-18922)</p></li>
<li><p>Editor: [OpenGL] Editor goes into infinite loading when the options menu in a Game View window is clicked.
(UUM-6030)</p></li>
<li><p>GI: Added the range property to the Light Explorer window.</p></li>
<li><p>GI: Fixed crash in LightProbesManager after removing the first added probeset.
(UUM-17760)</p></li>
<li><p>GI: Fixed lightprobes getting direct lighting in subtractive mode.
(<a href="https://issuetracker.unity3d.com/issues/mixed-point-slash-spot-lights-with-shadows-disabled-are-baking-direct-light-into-light-probes-on-subtractive-lighting">UUM-1344</a>)</p></li>
<li><p>GI: Fixed looping error message when baking in prefabs and subscenes.
(<a href="https://issuetracker.unity3d.com/issues/lightmap-baking-fails-when-urp-template-content-is-put-into-a-subscene">UUM-15675</a>)</p></li>
<li><p>HDRP: Enabled SSR transparent in default framesettings.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-ux-ssr-transparents-are-disabled-in-twice-by-default">UUM-19598</a>)</p></li>
<li><p>HDRP: Fixed scalarization issues on Gamecore.</p></li>
<li><p>HDRP: Improved the script linking the directional light to a Custom Render Target calling the RenderPipeline function GetMainLight().
(<a href="https://issuetracker.unity3d.com/issues/directional-light-is-not-in-line-with-the-moon-in-hdrp-fullscreen-samples-scene">UUM-14543</a>)</p></li>
<li><p>IMGUI: Removed <strong>Resolve of invalid GC handle</strong> error occurring when exiting Play mode.
(<a href="https://issuetracker.unity3d.com/issues/2020-dot-3-resolve-of-invalid-gc-handle-error-occurs-when-exiting-play-mode-after-creating-a-tilemap">UUM-14969</a>)</p></li>
<li><p>iOS: Fixed a hang on startup on iOS 16 when linking to UnityFramework.
(<a href="https://issuetracker.unity3d.com/issues/ios-player-crashes-on-ios-16-devices-when-unityframework-dot-framework-is-added-in-link-binary-with-libraries">UUM-16259</a>)</p></li>
<li><p>Linux: Fixed crash on Linux inside profiler memory sampling function.
(UUM-19153)</p></li>
<li><p>macOS: Fixed a hang on startup on MacOS 13 when running from Xcode.
(UUM-15967)</p></li>
<li><p>macOS: Removed developer placeholder text from progress dialog.
(UUM-18221)</p></li>
<li><p>Networking: Fixed race condition between DownloadHandlerTexture and Resources.UnloadUnusedAssets, sometimes cause premature destruction of the texture.
(UUM-18044)</p></li>
<li><p>Particles: Fixed some particle script API so it now syncs in-flight update jobs before modifying state.
(<a href="https://issuetracker.unity3d.com/issues/particle-renderer-distorted-particles-in-some-cases-when-max-particles-is-set-via-c-number-script">UUM-12469</a>)</p></li>
<li><p>Scripting: Fixed a bug where the editor could throw an Exception after an asmdef setup error was fixed.
(<a href="https://issuetracker.unity3d.com/issues/undoing-cyclical-asmdef-leads-to-unhandled-exception-on-bee">UUM-15296</a>)</p></li>
<li><p>Scripting: Fixed an issue where caching of package assemblies could cause script debugging to pick up files from a different project.</p></li>
<li><p>Serialization: Fixed issue where de-serializing Prefab containing a SerializeReference which has been refactored not handles MovedFrom. Improved AssetDatabase script type dependency so that if a missing SerializeReference instance type, re-appears importers depending on it will be trigerred.
(<a href="https://issuetracker.unity3d.com/issues/movedfrom-attribute-doesnt-work-on-prefab-overrides">UUM-6733</a>)</p></li>
<li><p>Shadergraph: Fixed a number of memory leaks in ShaderGraph where windows and view elements were not disposing of resources properly.
(UUM-20502)</p></li>
<li><p>Shaders: Fixed a crash in Shader Prefiltering when the Render Pipeline assets contain circular data references.
(<a href="https://issuetracker.unity3d.com/issues/crash-during-build-process-shaderkeywordfilter-dot-settingsnode-dot-gatherfilterdata">UUM-19976</a>)</p></li>
<li><p>Shaders: Fixed a rare issue with auxiliary texture properties not being initialized properly.
(<a href="https://issuetracker.unity3d.com/issues/cameradepthtextures-texelsize-is-unexplainably-set-to-11-11-when-the-actual-values-is-not-supposed-to-be-at-11-11">UUM-15576</a>)</p></li>
<li><p>Shaders: Fixed reflection probe rendering silently being skipped when the required shader is not found in the player.
(<a href="https://issuetracker.unity3d.com/issues/realtime-reflections-silently-fail-when-hidden-slash-cube-star-shaders-arent-included">UUM-12628</a>)</p></li>
<li><p>Shaders: Fixed Texture and Vector material properties not supporting displaying tooltips.
(<a href="https://issuetracker.unity3d.com/issues/tooltip-doesnt-appear-when-hovering-over-a-materials-property-in-the-inspector">UUM-5691</a>)</p></li>
<li><p>SRP Core: Added Local mode to fit Probe Volumes to scene.
(UUM-17784)</p></li>
<li><p>SRP Core: Fixed recalculating of apv probe positions.
(UUM-19991)</p></li>
<li><p>SRP Core: Fixed virtual offset pushing probes outside of geometry.
(UUM-19697)</p></li>
<li><p>TextCore: Corrected the ellipsis behavior on last visible lines.
(<a href="https://issuetracker.unity3d.com/issues/text-inside-listview-with-text-overflow-ellipsis-is-not-displayed-in-play-mode">UUM-10417</a>)</p></li>
<li><p>UI Toolkit: Element collapse/expand arrows were invisible when using UI Elements List View.
(<a href="https://issuetracker.unity3d.com/issues/element-collapse-slash-expand-arrows-invisible-when-using-ui-elements-list-view-1">UUM-9854</a>)</p></li>
<li><p>UI Toolkit: Fix playmode tint not applied to text color.
(<a href="https://issuetracker.unity3d.com/issues/label-with-dynamic-color-is-not-getting-playmode-tint-in-the-ui-builder-window">UUM-7215</a>)</p></li>
<li><p>UI Toolkit: Fixed display issue when resizing parent of Visual Element with negative scale.
(<a href="https://issuetracker.unity3d.com/issues/y-flipped-visual-element-has-a-gap-between-its-parent-when-its-resized">UUM-18196</a>)</p></li>
<li><p>UI Toolkit: Fixed layout instabilities with scrollviews and IMGUIContainers in scrollviews.
(<a href="https://issuetracker.unity3d.com/issues/imguicontainer-in-scrollview-causes-flickering">UUM-16435</a>)</p></li>
<li><p>UI Toolkit: Fixed Painter2D thin strokes so that they don't look semi-transparent anymore.
(UUM-15265)</p></li>
<li><p>UI Toolkit: Fixed the old theme not being removed from the list of documentElement's stylesheet when changing the current theme.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-leaks-defaultcommondark-inter-dot-uss-stylesheet-into-ui-documents">UUM-11196</a>)</p></li>
<li><p>UI Toolkit: Fixed tight-mesh showing neighboring sprite artefact caused by the background-repeat feature.
(UUM-20050)</p></li>
<li><p>UI Toolkit: Make sure clickable is not invoked when target Visual Element is not enabled.
(<a href="https://issuetracker.unity3d.com/issues/button-still-processes-clicks-after-being-disabled-by-the-script">UUM-16476</a>)</p></li>
<li><p>Universal RP: Fixed an issue with slower build-times caused by large Additional Light Shadows arrays in URP Shaders.
(<a href="https://issuetracker.unity3d.com/issues/shader-compilation-time-is-higher-in-2021-dot-3-than-in-2020-dot-3">UUM-17405</a>)</p></li>
<li><p>Universal RP: Fixed releasing render targets when using multiple renderers.
(UUM-16481)</p></li>
<li><p>URP: Fixed a bug where lights with different blend styles may have missing shadows.
(<a href="https://issuetracker.unity3d.com/issues/shadows-are-rendered-from-one-light-source-when-using-two-2d-lights-with-different-blend-styles">UUM-1872</a>)</p></li>
<li><p>URP: Fixed an issue where the Universal Renderer could incorrectly clear the render target during the forward opaques pass even if the render target contains valid rendering data produced by a pass that ran before opaque rendering.
(ARFB-190)</p></li>
<li><p>URP: Fixed mixed lights when using deferred rendering and shadow mask.
(<a href="https://issuetracker.unity3d.com/issues/gbuffer-shadowmask-only-contains-red-channel">UUM-19587</a>)</p></li>
<li><p>VFX Graph: Fixed an issue that VisualEffect spawned behind the camera were always updated until visible and culled.
(<a href="https://issuetracker.unity3d.com/issues/vfx-vfx-is-updated-if-spawned-behind-the-camera">UUM-6379</a>)</p></li>
<li><p>VFX Graph: Fixed an issue with the out of range exception on GPU when multiple spawn context are plugged to the same initialize system.
(<a href="https://issuetracker.unity3d.com/issues/vfx-oom-on-gpu-causing-unexpected-behavior-with-multiple-spawner">UUM-8351</a>)</p></li>
<li><p>VFX Graph: Removed unexpected GC.Alloc while accessing to <code>state.vfxEventAttribute</code> in [VFXSpawnerCallbacks](https://docs.unity3d.com/ScriptReference/VFX.VFXSpawnerCallbacks.OnUpdate.html).
(<a href="https://issuetracker.unity3d.com/issues/vfx-unexpected-garbage-from-spawnoverdistance">UUM-14769</a>)</p></li>
<li><p>VFX Graph: Six-way lighting fixes.
(UUM-19052)</p></li>
<li><p>Video: Video is displayed with one frame delay when videoPlayer.Play() is called.
(<a href="https://issuetracker.unity3d.com/issues/video-is-displayed-with-one-frame-delay-when-videoplayer-dot-play-is-called-1">UUM-15543</a>)</p></li>
<li><p>Web: Fixed a bug on Chrome on iOS where the WebGL canvas cannot regain focus after losing it.
(<a href="https://issuetracker.unity3d.com/issues/ios-chrome-ui-button-stops-working-after-opening-new-tab-and-going-back-to-unity-project-tab">UUM-1166</a>)</p></li>
<li><p>XR: Fixed VR run in background focus issue.</p></li>
</ul>







<h3>Known Issues in 2022.2.1f1</h3>

<ul>
<li><p>Asset - Database: Crash on GameObject::ActivateAwakeRecursivelyInternal when opening project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-gameobject-activateawakerecursivelyinternal-when-opening-project">UUM-17633</a>)</p></li>
<li><p>IMGUI Framework: Array values aren't changed when altering them in a custom EditorWindow
(<a href="https://issuetracker.unity3d.com/issues/array-values-arent-changed-when-altering-them-in-a-custom-editorwindow">UUM-15645</a>)</p></li>
<li><p>Linux: Folder name is truncated when dot is used in the name
(<a href="https://issuetracker.unity3d.com/issues/folder-name-is-truncated-when-dot-is-used-in-the-name">UUM-7046</a>)</p></li>
<li><p>MacOS: Crash on __pthread_kill when dragging Sprites into the Scene view
(UUM-20950)</p></li>
<li><p>MacOS: Crash on __pthread_kill when EditorUtility.OpenFolderPanel is executed
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-editorutility-dot-openfolderpanel-is-executed">UUM-2293</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>Shader System: GameObjects doesn't get rendered when using "Unlit.Unlit_UsePass" Shader
(<a href="https://issuetracker.unity3d.com/issues/sphere-gameobject-doesnt-get-rendered-when-using-unlit-dot-unlit-usepass-shader">UUM-18980</a>)</p></li>
<li><p>UI Toolkit Framework: Crash on UIToolkit::VectorUtils::MakeVectorGraphicsStretchBackground when resizing vector image 
(UUM-21218)</p></li>
<li><p>Universal RP: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
</ul>

<h3>2022.2.1f1 Release Notes</h3>

<h4>Improvements</h4>

<ul>
<li><p>Documentation: Optimized the example code in HDRP documentation related to Ray Tracing Settings override.</p></li>
<li><p>Graphics: Increased the maximum Async Upload Buffer Size to 2047 MB and updated docs.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Fixed error when a Tile asset with an instanced GameObject is removed from the Tilemap during a Collider2D.OnCollision***2D event.
(UUM-15455)</p></li>
<li><p>DX12: Fixed for PSO naming in PIX.
(UUM-7381)</p></li>
<li><p>Editor: Composite Extensions for Text/Speedtree files are now correctly selected.
(<a href="https://issuetracker.unity3d.com/issues/scriptedimporters-are-selected-by-default-when-using-multiple-in-the-extension">UUM-9204</a>)</p></li>
<li><p>Editor: D3D11 BRG visibility cbuffer creation optimization.
(UUM-18207)</p></li>
<li><p>Editor: Fixed "SerializedProperty m_Enabled has disappeared!" error arpeared in console while undoying switching scripts in debug inspector.
(<a href="https://issuetracker.unity3d.com/issues/serializedproperty-m-enabled-has-disappeared-error-arpeared-in-console-while-undoying-switching-scripts-in-debug-inspector">UUM-4170</a>)</p></li>
<li><p>Editor: Fixed a Crash/Freeze when using Handles.DrawGizmos in OnDrawGizmos.
(<a href="https://issuetracker.unity3d.com/issues/crash-slash-freeze-when-using-handles-dot-drawgizmos-in-ondrawgizmos">UUM-15008</a>)</p></li>
<li><p>Editor: Fixed an issue where an ArgumentNullException could be logged when viewing Entities in hierarchy.</p></li>
<li><p>Editor: Fixed an issue where AssetDatabase.FindAssets would return invalid results when specifying multiple search folders.
(<a href="https://issuetracker.unity3d.com/issues/probuilder-srp-wrong-material-assigned-to-probuilder-shape-upon-creation">UUM-19314</a>)</p></li>
<li><p>Editor: Fixed BRG &amp; entities.graphics crash on some GLES android.
(UUM-16708)</p></li>
<li><p>Editor: Fixed random user input combination would open debug canvas in playmode.
(<a href="https://issuetracker.unity3d.com/issues/linux-debug-canvas-gameobject-gets-added-to-the-scene-when-shift-plus-w-is-pressed-while-in-play-mode">UUM-17026</a>)</p></li>
<li><p>Editor: Removed Fullscreen Play Mode experimental feature. Required additional backend work to support input in all scenarios.
(UUM-12941)</p></li>
<li><p>Editor: Under the Enter Playmode Options, the Disable Scene Backup label was inverted compared to its actual behaviour.</p></li>
<li><p>Editor: Unsaved changes made to assets are now preserved when renaming an asset while using Perforce.
(<a href="https://issuetracker.unity3d.com/issues/changes-made-to-assets-are-not-saved-when-renaming-the-asset-while-using-perforce-2">UUM-17896</a>)</p></li>
<li><p>GI: Lighting Settings Assets values default to another Assets values when multiple Assets are selected.
(<a href="https://issuetracker.unity3d.com/issues/lighting-settings-assets-values-default-to-another-assets-values-when-multiple-assets-are-selected">UUM-10419</a>)</p></li>
<li><p>Graphics: Added safe-guards to prevent GetPixels / GetPixels32 crashes in cases where C# array creation would fail.</p></li>
<li><p>Graphics: Fixed a bug where ReadPixels would fail for textures larger than 2 GB.</p></li>
<li><p>Graphics: Fixed crash in depth resolve when using HDR render textures.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d11base-resolvedepthintotexture-when-using-hdr-enabled-rendertextures">UUM-2316</a>)</p></li>
<li><p>Graphics: Fixed cubemap uploads failing on Vulkan, D3D11 and D3D12 for cubemaps larger than 2 GB.</p></li>
<li><p>Graphics: Fixed for incorrect values in ReadPixel for some graphics formats on DirectX.
(<a href="https://issuetracker.unity3d.com/issues/incorrect-values-in-readpixel-for-some-16bit-graphicsformat-when-on-windows">UUM-15344</a>)</p></li>
<li><p>Graphics: Fixed GetPixelData / SetPixelData failing for textures larger than 2 GB. Added safe-guards to prevent NativeArray length overflows for the former API.</p></li>
<li><p>Graphics: Fixed LoadRawTextureData failing when the input NativeArray contained more than 2 GB of data. Added safe-guards to GetRawTextureData. (prevent NativeArray length overflow and C# array creation failure).</p></li>
<li><p>Graphics: Fixed mipmap generation for textures larger than 2 GB.</p></li>
<li><p>Graphics: Fixed RenderTexture assets not accepting texture dimensions greater than 20000 in UI, even though they currently can already go up to 32768 in script if the graphics capabilities allow for it.</p></li>
<li><p>Graphics: Fixed the Read/Write texture import setting becoming grayed out when "Max Size" was greater than 8192, regardless of actual texture dimensions or size. Replaced with an info box when enabling "Read/Write" that triggers if Unity detects a &gt;512MB texture.</p></li>
<li><p>Graphics: Texture 3D Preview (Volume / SDF mode) now becomes disabled if Unity detects a potential driver hang risk. Fixed an assert incorrectly being triggered when inspecting external Texture 3Ds.</p></li>
<li><p>Particles: Fixed errors when baking a particle mesh after calling mesh-&gt;Clear(false).
(<a href="https://issuetracker.unity3d.com/issues/particlesystemrenderer-bakemesh-method-throws-out-of-bounds-arguments-error-when-invoked">UUM-8489</a>)</p></li>
<li><p>Particles: Fixed SetParticles API sometimes failing to emit the correct number of particles.
(<a href="https://issuetracker.unity3d.com/issues/particlesystem-does-not-add-all-particles-when-a-large-number-of-particle-systems-exist-in-a-scene">UUM-17027</a>)</p></li>
<li><p>Player: Fixed <code>RuntimeInitializeOnLoad</code> not working when used in precompiled assemblies in packages.
(<a href="https://issuetracker.unity3d.com/issues/initializeonload-is-not-called-in-build-when-relocating-and-reinstalling-a-package">UUM-14487</a>)</p></li>
<li><p>Scene/Game View: Fixed "Auto-hide Gizmos" preference not remember state on application restart.
(<a href="https://issuetracker.unity3d.com/issues/auto-hide-gizmos-preference-is-not-saved-when-reopening-the-project">UUM-7848</a>)</p></li>
<li><p>Scene/Game View: Fixed the Rect Tool center handle not drawing in the correct position during a resize event.
(<a href="https://issuetracker.unity3d.com/issues/gameobject-center-indicator-is-offset-whilst-resizing-gameobject-to-the-point-where-center-indicator-is-no-longer-visible">UUM-17618</a>)</p></li>
<li><p>Shaders: Fixed asset bundles with shaders not loading correctly on newer versions of Unity.
(<a href="https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-m-bufferstobind-shadertype-bind-dot-buffer-equals-equals-null-is-thrown-when-entering-the-play-mode">UUM-17421</a>)</p></li>
<li><p>UI Elements: An EnumField no longer requires the associated EnumType to contain a value of 0 in order to be bound.
(<a href="https://issuetracker.unity3d.com/issues/enumfield-throws-nullreferenceexception-error-when-the-enum-doesnt-have-the-default-value-of-0">UUM-11706</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where pressing the arrow keys in the input field of a slider would change its value.
(<a href="https://issuetracker.unity3d.com/issues/arrow-keys-change-slider-value-instead-of-caret-position-when-the-range-attribute-is-used">UUM-12796</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the dragger of a slider would become visually corrupted after toggling the showMixedValue property.
(<a href="https://issuetracker.unity3d.com/issues/slider-handle-position-is-offset-when-sliders-showmixedvalue-value-is-changed">UUM-13013</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the ListView would generate the wrong hierarchy when the path from the list to the item is also a valid path for the item itself.
(UUM-8144)</p></li>
<li><p>UI Toolkit: Fixed the UI Toolkit property drawer for TextArea so it behaves like the imgui version.
(UUM-9969)</p></li>
<li><p>UI Toolkit: Fixed UI Builder undoing a selection takes two undo's.
(UUM-16008)</p></li>
<li><p>UI Toolkit: Show UI Toolkit warning when the serialize reference are missing (as per IMGUI).
(UUM-15589)</p></li>
<li><p>Windows: Modified full stack traces so that when they are enabled on Windows, Unity will no longer try to resolve symbols from the symbol server. This prevents a potential stall the first time a stack trace is printed.
(<a href="https://issuetracker.unity3d.com/issues/stackwalker-is-misconfigured-to-downloads-symbols-from-symbol-servers">UUM-11802</a>)</p></li>
</ul>











<h3>Known Issues in 2022.2.0f1</h3>

<ul>
<li><p>Asset - Database: Crash on GameObject::ActivateAwakeRecursivelyInternal when opening project
(<a href="https://issuetracker.unity3d.com/issues/crash-on-gameobject-activateawakerecursivelyinternal-when-opening-project">UUM-17633</a>)</p></li>
<li><p>IMGUI Framework: Array values aren't changed when altering them in a custom EditorWindow
(<a href="https://issuetracker.unity3d.com/issues/array-values-arent-changed-when-altering-them-in-a-custom-editorwindow">UUM-15645</a>)</p></li>
<li><p>Linux: Folder name is truncated when dot is used in the name
(<a href="https://issuetracker.unity3d.com/issues/folder-name-is-truncated-when-dot-is-used-in-the-name">UUM-7046</a>)</p></li>
<li><p>MacOS: Crash on __pthread_kill when EditorUtility.OpenFolderPanel is executed
(<a href="https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-editorutility-dot-openfolderpanel-is-executed">UUM-2293</a>)</p></li>
<li><p>Metal: [iOS]Unable to maintain 120fps consistently in a near-empty scene on iPhone 13 Pro
(<a href="https://issuetracker.unity3d.com/issues/ios-target-fps-is-ignored-on-iphone-13-pro">UUM-5944</a>)</p></li>
<li><p>Shader System: GameObjects doesn't get rendered when using "Unlit.Unlit_UsePass" Shader
(<a href="https://issuetracker.unity3d.com/issues/sphere-gameobject-doesnt-get-rendered-when-using-unlit-dot-unlit-usepass-shader">UUM-18980</a>)</p></li>
<li><p>Universal RP: [URP] Memory leak when in Play Mode
(<a href="https://issuetracker.unity3d.com/issues/urp-memory-leak-when-in-play-mode">UUM-19089</a>)</p></li>
</ul>

<h3>Final 2022.2.0f1 Release Notes</h3>

<h4>Features</h4>

<ul>
<li><p>2D: New Light Batching Debugger feature use to debug sorting layers batched with Light2D and ShadowCaster2D.</p></li>
<li><p>AI: Added an option to create a height mesh when you build the NavMesh at runtime.</p></li>
<li><p>Android: Added preliminary support for Magic Leap 2.</p></li>
<li><p>Android: Added support for Armv9 security features (PAC/BTI) for Arm64 builds.</p></li>
<li><p>Animation: Added support for Animation Clips for multi-editing.</p></li>
<li><p>Animation: Changed so fields on SerializeReference instances of MonoBehaviours can now be animated like fields directly on MonoBehaviours.</p></li>
<li><p>Asset Import: Warnings and Errors logged by AssetImporters during the import of an asset are now saved in the import result. Erroneous assets can be found in the project browser using a new filter and logged warnings and errors can be displayed on demand in the console from the asset inspector.</p></li>
<li><p>Burst: Support for detecting managed breakpoints in code compiled with burst, and automatically switching the affected code to the mono execution path to allow managed debugging. Requires Burst 1.8.</p></li>
<li><p>Editor: Added a button in Device Simulator device list that installs com.unity.device-simulator.devices package, which contains the latest device definitions from Unity.</p></li>
<li><p>Editor: Added ability to import export profiles in shortcut manager.</p></li>
<li><p>Editor: Added context column to ShortcutManager.</p></li>
<li><p>Editor: Added Edit-mode preview overlay for the Trail Renderer.</p></li>
<li><p>Editor: Added MinMaxCurveProperty Drawer for UIToolkit Inspector.</p></li>
<li><p>Editor: Added the ability to block shortcuts from triggering during playmode while the game view window is focused.</p></li>
<li><p>Editor: Added the ability to resize overlays.</p></li>
<li><p>Editor: Added the possibility of running tests in a specified order from a test list.</p></li>
<li><p>Editor: Frame Debugger: Not possible to set the min and max values for the Levels slider.</p></li>
<li><p>Editor: Frame Debugger: Now possible to add a shortcut to enable/disable a capture.</p></li>
<li><p>Editor: Frame Debugger: Now possible to copy a foldout or an entire event.</p></li>
<li><p>Editor: Frame Debugger: Now possible to see the Original and Used shaders in an event. Useful for events that are using USEPASS or falling back to an assigned fallback shader.</p></li>
<li><p>Editor: Frame Debugger: Now possible to view individual meshes in an SRP Batch inside the Mesh Preview.</p></li>
<li><p>Editor: Frame Debugger: Stage, Scope and Dynamic info added to keywords.</p></li>
<li><p>Editor: Frame Debugger: Texture format now split into two fields, Color Format and DepthStencil Format.</p></li>
<li><p>Graphics: Added a visual debug tool for buffer load/store actions.</p></li>
<li><p>Graphics: Added access to the bounds of the current renderer in the per object constant buffer for SRPs.</p></li>
<li><p>Graphics: Added Foveated Rendering support for D3D12/Vulkan.</p></li>
<li><p>Graphics: Added gaze foveated rendering (GFR) on Vulkan using fragment density map offset.</p></li>
<li><p>Graphics: Added mipmap limit groups for more fine-grained configurability over the single value that applies to all mipmapped texture2Ds.</p></li>
<li><p>Graphics: Added Terrain heightmap support in RayTracingAccelerationStructure when using RayTracingAccelerationStructure.CullInstances function.</p></li>
<li><p>Graphics: Added the ability in the Texture2D importer and constructor to add the texture to a project-defined mipmap limit group for more fine-grained control of how texture quality gets affected per quality level.</p></li>
<li><p>Graphics: Added the ability in the Texture2D importer and constructor to exclude the texture from mipmap limits, ensuring that all mips can get uploaded regardless of the quality settings.</p></li>
<li><p>Graphics: Added the runtime-modifiable Texture2D property to toggle excluding the texture from mipmap limits (only for readable Texture2Ds).</p></li>
<li><p>Graphics: Implemented custom error/loading shader support for the <code>BatchRendererGroup</code>.</p></li>
<li><p>Graphics: OpenGL ES 3.1 support for BatchRendererGroup.</p></li>
<li><p>Graphics: Shader Warmup can now compile pipeline state objects asynchronously.</p></li>
<li><p>HDRP: Added a new Eye Shader type called Eye Cinematic with Caustic.</p></li>
<li><p>HDRP: Added a property called target in the custom pass drawer to access the current custom pass instance.</p></li>
<li><p>HDRP: Added Asymmetric projection and Screen Coordinates Override frame settings. Adapted post effects to support Screen Coordinates Override. (Used, for example, to support Cluster Display.).</p></li>
<li><p>HDRP: Added debug color monitors (Vectorscope, Waveform &amp; Parade).</p></li>
<li><p>HDRP: Added Ray Tracing Terrain support for HDRP.</p></li>
<li><p>HDRP: Added settings to overwrite diffusion profile IOR on StackLit.</p></li>
<li><p>HDRP: Volumetric material support for local volumetric fog volumes.</p></li>
<li><p>Kernel: Added a new Memory Manager Plugin interface to allow Unity's native Memory Manager to do native memory allocations.</p></li>
<li><p>License: Added editor licensing notification system.</p></li>
<li><p>Package Manager: Added a dropdown to the tab headers for Package Details when tab headers exceed the width of the Package Details pane.</p></li>
<li><p>Package Manager: Added the <code>deprecated</code> property to the <code>UnityEditor.PackageManager.VersionsInfo</code> class (usually accessed through the <code>versions</code> property of a <code>UnityEditor.PackageManager.PackageInfo</code> instance), which lists all versions of that package that are labelled as deprecated on the registry.</p></li>
<li><p>Package Manager: Added the <code>isDeprecated</code> and <code>deprecationMessage</code> properties to the <code>UnityEditor.PackageManager.PackageInfo</code> class, which are set when a given package version is labelled as deprecated on the registry by its author.</p></li>
<li><p>Package Manager: Added UI support for UPM packages that come from the Asset Store.</p></li>
<li><p>Package Manager: Moved the package action toolbar in the package details header and implemented new design changes on the details header.</p></li>
<li><p>Package Manager: Reorganized Package Details into tab-based display. Packages now have individual tabs for <em>Description</em>, <em>Version History</em>, <em>Samples</em>, and <em>Dependencies</em>, while Asset Store Packages have tabs for <em>Overview</em>, <em>Releases</em>, and <em>Images</em>.</p></li>
<li><p>Physics: Added an option to override Layer collisions for Colliders, Rigidbodies, ArticulationBodies and Character Controllers, which allows to fine tune which bodies should collide with what layers.</p></li>
<li><p>Physics 2D: Added a new 2D Physics Profiler Area with Custom Profile Counters.</p></li>
<li><p>Physics 2D: Added a new Editor Preference editor for 2D Physics that allows the configuration of gizmo colours and settings.</p></li>
<li><p>Physics 2D: Added the ability for 2D Physics Collider Gizmos to optionally draw Outlines and/or Filled Colldiers.  These are new options in the Physics 2D Project Settings Editor.</p></li>
<li><p>Physics 2D: Added the ability to select per-Collider2D, which layers that contacts are captured for querying and producing physics callbacks.</p></li>
<li><p>Physics 2D: Added the ability to select, per-Collider2D, which layers that contacts will produce a physics callbacks for.</p></li>
<li><p>Physics 2D: Allowed a Collider2D to control Send and Receive forces per-layer upon contact with another Collider2D.</p></li>
<li><p>Physics 2D: Allowed a Joint2D to select one of four modes that control an action to be taken when the joint breaks. These are <em>Ignore</em>, <em>CallbackOnly</em>, <em>Disable</em>, or <em>Destroy</em>. Previously <em>Destroy</em> was the fixed action and is still the default.</p></li>
<li><p>Physics 2D: Allowed a Rigidbody2D to read or write the total force or torque that has been applied to it directly via add force or add torque calls.</p></li>
<li><p>Physics 2D: Allowed a Rigidbody2D/Collider2D to explicitly override (include or exclude) contact layers, so it can override the Layer Collision Matrix per-object.</p></li>
<li><p>Player: Preview support for Magic Leap 2 provider version 7.0.0.</p></li>
<li><p>Prefabs: Replace Prefab Asset of Prefab intsance. With this feature you can now replace the Prefab Asset for a Prefab instance that exists in a Scene or nested inside other Prefabs. This will keep the Prefab instance position, rotation and scale in the Scene but merge the contents from the new Prefab Asset while by default maintaining as many overrides and references as possible using name based matching.</p></li>
<li><p>Prefabs: Supported Undo for Prefab stages in the editor.</p></li>
<li><p>Serialization: Changed so fields on <code>SerializeReference</code> instances of <code>MonoBehaviours</code> can now be animated like fields directly on <code>MonoBehaviours</code>.</p></li>
<li><p>Serialization: Made EditorSerializationUtility services to access and manipulate <code>SerializeReference</code> instances with IDs available at runtime in <code>Serialization.ManagedReferenceUtility</code>.</p></li>
<li><p>Shadergraph: Added access to the renderer bounds in shadergraph through the object node.</p></li>
<li><p>Terrain: Added Quality Settings for controling various Terrain settings at different quality levels.</p></li>
<li><p>Text: Synchronized the Text Core's text generation with the latest code from <code>TextMeshPro</code>.</p></li>
<li><p>TextMeshPro: Added support for Color Glyphs and extracting OpenType font features.</p></li>
<li><p>UI Toolkit: Added a UI Toolkit version of NavigationDrawer.</p></li>
<li><p>UI Toolkit: Added align-self field in UI Builder style inspector.</p></li>
<li><p>UI Toolkit: Added call to implement DecoratorDrawers.</p></li>
<li><p>UI Toolkit: Added library icons in UI Builder.</p></li>
<li><p>UI Toolkit: Added support for background-position, background-size and background-repeat for background rendering.</p></li>
<li><p>UI Toolkit: Added UI Toolkit version of <code>ColorBlockDrawer</code>.</p></li>
<li><p>UI Toolkit: Improved the UI/UX of the inspector displaying appropriate visual cues accordingly to the statuses of properties and provided more details about how properties'  values are bound and resolved.</p></li>
<li><p>UI Toolkit: Improved UI Builder inspector.</p></li>
<li><p>Universal RP: Added a feature to create custom post processing effects by adding a renderer feature.</p></li>
<li><p>Universal RP: Added light cookies stripping.</p></li>
<li><p>Universal RP: Changed light and decal layers to rendering layers.</p></li>
<li><p>Universal RP: SSAO: AO Method dropdown added to select between Interleaved Gradient Noise and Blue Noise.</p></li>
<li><p>Universal RP: SSAO: Blur Quality dropdown added to select between: High (Bilateral), Medium (Gaussian) and Low (Single-Pass Kawase).</p></li>
<li><p>Universal RP: SSAO: Falloff field added to control the distance from the camera the AO should affect.</p></li>
<li><p>URP: Added clustered reflection probe support to the URP Forward+ rendering path. This enables the use of more than 2 reflection probes per object, allows Unity to skip per-object culling of lights and reflection probes, and enables Entities Graphics and procedural draws to make use of reflection probes.</p></li>
<li><p>URP: Added decal layers.</p></li>
<li><p>URP: Added Forward+ rendering path, allowing for more lights per object and enabling lighting on non-GameObjects.</p></li>
<li><p>URP: Added Screen Coordinates Override feature. Adapted post effects to support Screen Coordinates Override. (Used, for example, to support Cluster Display.).</p></li>
<li><p>URP: All built-in URP shaders and URP ShaderGraph shaders support Mesh LOD CrossFade, which you can select in <code>UniversalRenderPipelineAsset.lodCrossFadeDitheringType</code> property.</p></li>
<li><p>Version Control: Added a checkout option in scene prefab view.</p></li>
<li><p>Version Control: Added branch name column in changeset view.</p></li>
<li><p>Version Control: Added option to "Save Revision as" to the context menu in the changesets view.<br></p>

<ul>
<li>Added incoming changes overview bar for Gluon workspace.</li>
</ul></li>
<li><p>VFX Graph: Activation boolean port on blocks</p></li>
<li><p>VFX Graph: Added a new lighting model for smoke : Six-way lighting.</p></li>
<li><p>VFX Graph: Added passthrough space (None).</p></li>
<li><p>VFX Graph: Skinned Mesh Sampling out of experimental (https://jira.unity3d.com/browse/VFXG-194).</p></li>
<li><p>VFX Graph: VFX Instancing now optimizes both CPU and GPU VFX runtime.</p></li>
<li><p>VFX Graph: VFX instancing: Allow several VFX of the same type to be updated and rendered at the same time, improving performance.</p></li>
<li><p>Video: VideoPlayer now has a configurable time update mode, to support game time, unscaled game time and audio dsp time.</p></li>
<li><p>Video: WebGL VideoPlayer now has a configurable time update mode, to support game time, unscaled game time and audio dsp time.</p></li>
<li><p>Web: This PR adds Javascript and WASM heap memory diagnostics for WebGL applications, and implements an overlay to display this data to the default template using HTML/CSS and a JS library called diagnostics.js. It also implements a flag in the Player Settings to enable this diagnostics UI.</p></li>
</ul>

<h4>Improvements</h4>

<ul>
<li><p>2D: Added an Alpha Clip option for Sprite Subtargets in Shadergraph.</p></li>
<li><p>2D: Added icon to Sprite Editor Window.</p></li>
<li><p>2D: Added shader support for URP Sprite Subtargets to be compatible with VFX assets.</p></li>
<li><p>2D: Changed theTile Palette Window to use UIToolkit for UI.</p></li>
<li><p>2D: Exposed the ITilemap constructor.</p></li>
<li><p>2D: Set the minimum size to 64x64 pixels for Sprite previews.</p></li>
<li><p>2D: Sprite-Atlas is now usable in Edit mode for 2D and Particle Renderers.</p></li>
<li><p>2D: Updated 2D URP Template for 2022.2 to match with latest URP version.</p></li>
<li><p>Android: Added a way to include custom symbol files in the symbol zip package which can later on be uploaded to Google Play.</p></li>
<li><p>Android: Added new PlayerSettings Resolution Scaling Mode "Letterboxed".<br>
Added black bars when the aspect ratio of the specified resolution does not match the aspect ratio of the native SurfaceView to avoid stretching.</p></li>
<li><p>Android: Apks are installed with <code>--fastdeploy</code> to improve replace performance for large projects.</p></li>
<li><p>Android: Fixed Android to use identical code folding with the LLD linker.</p></li>
<li><p>Android: Improved issues with Android NDK r23b.</p></li>
<li><p>Android: Improved the input event handling performance in the Input Manager by up to 30%.</p></li>
<li><p>Animation: Further improvements to animation job performance (esp. some forms of IK)</p></li>
<li><p>Animation: Improved animation performance across the board.</p></li>
<li><p>Animation: Optimized AnimationClip size calculation reducing asset load time in the Editor.</p></li>
<li><p>Asset Bundles: Fixed so that repeated calls to <code>AssetBundle.LoadAsync</code> doesn't lead to stalls on the main thread.</p></li>
<li><p>Asset Import: Improved behavior of mono script importer when creating/importing a class/struct with an identical name to a Unity component type. This will no longer show a warning when not inheriting from the Monobehaviour base class.</p></li>
<li><p>Asset Pipeline: Added <code>AssetDatabase.LoadObjectAsync</code> to load Asset asynchronously from the AssetDatabase.</p></li>
<li><p>Asset Pipeline: The following API functions generates error messages if used during in-process Import and throw an exception if used during out-of-process Import:<br></p>

<ul>
<li>StartAssetImporting<br></li>
<li>StopAssetImporting<br></li>
<li>Refresh<br></li>
<li>SaveAssets.</li>
</ul></li>
<li><p>Audio: The FsbTool is alive for each import process worker to speed up audio importing.</p></li>
<li><p>Build Pipeline: Added a "Force skip data build" option for incremental player builds so users can skip the data build even if there are changes.</p></li>
<li><p>Build Pipeline: Added <code>ContentLoadInterface</code> for loading unity serialized files.</p></li>
<li><p>Build Pipeline: Optimized the Asset Bundle building for large scale objects, such as the preload table generation and computing the dependencies.</p></li>
<li><p>Build System: Optimized use of a linux clang compiler for speed instead of size.</p></li>
<li><p>Build System: Used a faster linux clang toolchain built with a newer bootstrap compiler.</p></li>
<li><p>Burst: Added support for the <code>System.Runtime.CompilerServices.IsExternalInit</code> workaround documented [here](https://docs.unity3d.com/2022.1/Documentation/Manual/CSharpCompiler.html) into Burst when used in 2022.1+.</p></li>
<li><p>Burst: Improved exception type support when thrown from non-job burst compiled methods.
(1369088)</p></li>
<li><p>Burst: Used explicit namespace for UnityEditor.PackageManager.Events to avoid conflicts.</p></li>
<li><p>Core: Added Transform.SetLocalPositionAndRotation(). This allows you to set both the localPosition and localRotation of a transform in a single call, which is more efficient than assigning to localPosition and localRotation separately. (Thank you to @DevDunk on the forum for the request!).</p></li>
<li><p>Core: Applied the safety disabling attributes recursively into marked fields.</p></li>
<li><p>Core: Changed so that IJob, IJobFor, and IJobParallelFor schedule sites can be burst compiled.</p></li>
<li><p>Core: Changed UnsafeUtility.Free to no longer throw an exception when given the Allocator.None allocator.</p></li>
<li><p>Core: Improved Job Debugger performance to avoid redundant work. Most users should feel comfortable to leave the Job Debugger enabled at all times.</p></li>
<li><p>Core: Improved the Job System to better scale as core counts increase and reduced the cost of scheduling jobs and combining dependencies.</p></li>
<li><p>Documentation: Added a summary and code example for IJobParallelForTransform.</p></li>
<li><p>Documentation: Elaborated on how ForceMode affects velocity and angular velocity in AddForce/AddTorque.</p></li>
<li><p>DX12: Improved CPU performance in DX12 drawcall setup.</p></li>
<li><p>DX12: Improved Editor performance in cases of heavy renderthread utilization by removing a stalling sync between mainthread and renderthread.</p></li>
<li><p>DX12: Improved stability of DX12 backend, when running out of memory.</p></li>
<li><p>DX12: Optimized async readback by using scratch buffer for small buffers.</p></li>
<li><p>DX12: Reduced calls to CreateConstantBufferView by moving constant buffer views to root signature which is faster (SetRootConstantBufferView).</p></li>
<li><p>Editor: Added a confirmation dialog if you try to open more than one asset using the inspector.
(1304612)</p></li>
<li><p>Editor: Added a new filter in project browser for VFX Asset files.</p></li>
<li><p>Editor: Added an info box when emissive lighting is locked to black by material hierarchy.
(<a href="https://issuetracker.unity3d.com/issues/child-material-variant-does-not-emit-light-when-parent-emission-color-is-black">1387434</a>)</p></li>
<li><p>Editor: Added Enable PlayMode Tooltips toggle to preferences.</p></li>
<li><p>Editor: Added mouse shortcuts to Shortcut Manager.</p></li>
<li><p>Editor: Added timestamps argument to include timestamps and thread ID prefix to logs.</p></li>
<li><p>Editor: Changed so that SceneView view tool interactions are customizable through Shortcut Manager.</p></li>
<li><p>Editor: Changed so the build subtarget is reported in editor analytics.</p></li>
<li><p>Editor: Fixed the VisualElement and BaseField tooltips positions.
(1424198)</p></li>
<li><p>Editor: Frame Debugger: Arrays are now displayed inside the window instead of using a popup.</p></li>
<li><p>Editor: Frame Debugger: Holding down Shift or Alt buttons while clicking a foldout triangle will now open/close them all.</p></li>
<li><p>Editor: Frame Debugger: Scope values changed from v/f/g/h/d to vs/fs/gs/hs/ds.</p></li>
<li><p>Editor: Frame Debugger: Shader Properties are now sorted by property names.</p></li>
<li><p>Editor: Frame Debugger: Table headers added to properties.</p></li>
<li><p>Editor: Improved documentation for HideFlags.DontSave.
(<a href="https://issuetracker.unity3d.com/issues/objects-which-are-instantiated-as-children-and-have-hideflags-dot-dontsave-flag-dont-get-destroyed-when-entering-a-different-scene">1420510</a>)</p></li>
<li><p>Editor: Improved Editor performance when selecting a GameObject with Scripts that have a lot of data in the <code>SerializableField</code> field in the Inspector.
(<a href="https://issuetracker.unity3d.com/issues/selecting-a-gameobject-with-scripts-that-have-a-lot-of-data-in-serializablefield-field-in-inspector-causes-performance-issues">1383826</a>)</p></li>
<li><p>Editor: Improved performance of AnnotationManager refresh.</p></li>
<li><p>Editor: Improved performance of the Editor when entering Playmode with a reduction in cost of multi-display support Editor preferences initialization.</p></li>
<li><p>Editor: Improved performance when you enter and exit playmode in the Editor.</p></li>
<li><p>Editor: Improved quality of AnimationCurve preview rendering.</p></li>
<li><p>Editor: Improved the UI for the Frame Debugger. Added a search field to the tree view and added a button to the Game Window to open the Frame Debugger.</p></li>
<li><p>Editor: Improved the <code>ShortcutManager</code> window modifier key hover styles.</p></li>
<li><p>Editor: Made new leak checking simpler and faster when callstacks aren't recorded.</p></li>
<li><p>Editor: Prevented your computer from automatically going to sleep while waiting for a task which shows a progress bar.</p></li>
<li><p>Editor: Reduced the time taken by AssetDatabase.FindAssets when used with a custom filter, speeding up domain reloads and other editor operations that made the poor choice of calling this function in the first place.</p></li>
<li><p>Editor: Removed the managed reference to <code>DisposeSentinel</code> from <code>NativeArray</code>.</p></li>
<li><p>Editor: Updated the Physical Camera Presets list.
(1371464)</p></li>
<li><p>Editor: Updated <code>SearchUtils.GetTypeIcon</code> to not create component.
(<a href="https://issuetracker.unity3d.com/issues/selecting-scene-template-in-the-project-settings-removes-the-active-render-pipelines">1414921</a>)</p></li>
<li><p>EmbeddedLinux: Exposed a port field for the managed debugger in the Build settings when the Debugging script is checked.</p></li>
<li><p>GI: Changed to load all sub scenes recursively when you start a GI bake to support GI baking when using the entities package.<br>
Disabled auto mode checkbox in the Lighting window when the entities package is present.</p></li>
<li><p>GI: Cleaned up the Lighting settings in the Editor GUI.</p></li>
<li><p>GI: Made the information managed through LightProbes consistent. The result of appending and removing LightProbes is exposed after Tetrahedralization.</p></li>
<li><p>GI: Removed the info box in the lighting window.</p></li>
<li><p>GI: Updated the Lightmap Parameters Custom UI to make it easier to understand what each parameter should affect.</p></li>
<li><p>GI: Upgraded the Optix SDK used by the progressive lightmapper denoiser to version 7. Reduces memory usage during denoising. Requires NVIDIA R495.89 driver or newer.</p></li>
<li><p>Graphics: Added a new "perceptual blend" interpolation mode to gradients that blends between colors more naturally using "Oklab" color space.</p></li>
<li><p>Graphics: Added a warning for Metal when you to render with blending while dest RT is discarded/not-loaded.</p></li>
<li><p>Graphics: Added an error message for indirect compute buffers that are incorrectly flagged on DX11.
(<a href="https://issuetracker.unity3d.com/issues/unable-to-modify-rwstructuredbuffer-elements-via-indirect-dispatch-of-a-compute-shader-when-using-the-direct3d11-api">1389382</a>)</p></li>
<li><p>Graphics: Added new contructor on DebugUI.Container to allow having containers with an ID.
(1409096)</p></li>
<li><p>Graphics: Added support for sampling light probe grid from jobs / threads. See LightProbeQuery in the documentation.</p></li>
<li><p>Graphics: Applied the use of memoryless MSAA to the MSAA attachment when you use depth resolve.</p></li>
<li><p>Graphics: Avoided any redundant Vulkan pipeline switches when you use shaders with identical passes.</p></li>
<li><p>Graphics: Changed so you see an error if the configured Render Pipeline Assets on the Quality Levels are different on Type.</p></li>
<li><p>Graphics: Changed the scope of Frame Timing Manager FrameTime.GPU on DX11 to include VFX.Update for more accurate GPU frame timings.</p></li>
<li><p>Graphics: Changed URP and HDRP to use the Physical Camera Settings in the UnityEngine.Camera class to allow these settings to be shared and unified.</p></li>
<li><p>Graphics: Changed Vulkan shaders to use combined image and sampler that don't require separate SamplerState.</p></li>
<li><p>Graphics: Fixed so that the state of the widgets on the rendering debugger are maintained when when you enter Play Mode.
(1401599)</p></li>
<li><p>Graphics: Improved AlphaIsTransparency API docs and tooltip.
(<a href="https://issuetracker.unity3d.com/issues/color-artifacts-in-imported-textures-when-alpha-source-is-set-to-input-texture-alpha">UUM-2364</a>)</p></li>
<li><p>Graphics: Improved render thread performance (20% better performance) when using ray tracing effects.</p></li>
<li><p>Graphics: Migrated Particle System Collision module Scene View tools to the new Overlay system.</p></li>
<li><p>Graphics: Migrated Particle System Shape module Scene View tools to the new Overlay system.</p></li>
<li><p>Graphics: Migrated the Line Renderer Scene View tools to the new Overlay system.</p></li>
<li><p>Graphics: Reduced command buffer CPU overhead.</p></li>
<li><p>Graphics: Reduced RenderGraph CPU overhead.</p></li>
<li><p>Graphics: Refactored RayTracingAccelerationStructure.AddInstance(GraphicsBuffer) Scripting API to generate ray tracing instances using AABB GraphicsBuffer (procedural geometry generation using intersection shaders).<br></p>

<ul>
<li>Added a MaterialPropertyBlock parameter for binding per ray tracing instance.<br></li>
<li>Added new Scripting API functions to RayTracingAccelerationStructure for managing the following types of instances: RemoveInstance, UpdateInstanceTransform and UpdateInstancePropertyBlock.</li>
</ul></li>
<li><p>Graphics: Unified the code of shader variant strippers across the SRP's.</p></li>
<li><p>Graphics: Updated ASTC compressor to astcenc version 3.5 to improve ASTC texture compression speed.</p></li>
<li><p>Graphics: Updated QualitySettings.maxQueuedFrames to work in Vulkan API.</p></li>
<li><p>Graphics: Use Vulkan format VK_FORMAT_A4R4G4B4_UNORM_PACK16_EXT for GraphicsFormat.B4G4R4A4_UNormPack16 if it is supported.</p></li>
<li><p>HDRP: Added a new iteration on the water system.</p></li>
<li><p>HDRP: Added a new sample for fullscreen master node.</p></li>
<li><p>HDRP: Added a new/clone button to lens flare data picker.
(1400415)</p></li>
<li><p>HDRP: Added clamp to reflection probe normalization factor computed from APV.</p></li>
<li><p>HDRP: Added Screen space for the Transform node.</p></li>
<li><p>HDRP: Added Volumetric Material samples.</p></li>
<li><p>HDRP: Changed ACES luminance fit to allow pure whites.</p></li>
<li><p>HDRP: Changed default size of the debug APV probes, moved the menu entry for the APV baking window and clarified the tooltip for APV simplification levels.</p></li>
<li><p>HDRP: Changed the reflection probes cube texture array cache to be a 2D texture atlas in the octahedral projection.<br></p>

<ul>
<li>Reflection probe resolution resolution can be chosen individually.<br></li>
<li>Reflection probes and planar reflection probes atlas's are combined in a single atlas.</li>
</ul></li>
<li><p>HDRP: Changed the way HDRP volumetric clouds presets are handled to allow blending.</p></li>
<li><p>HDRP: Fixed so the Rendering Debugger isn't recreated on UI changes.
(1412467)</p></li>
<li><p>HDRP: Further improved the consistency of non-physical depth of field at varying native rendering resolutions and resolution scales.</p></li>
<li><p>HDRP: Improved area light soft shadow - when the new <strong>Very High</strong> shadow filtering quality level is selected, area lights use improved PCSS filtering for wider penumbras and better contacts.</p></li>
<li><p>HDRP: Improved Material sample by adding 3 scenes about stacking transparent materials in the 3 different rendering path (Raster, Ray Tracing, Path Tracing).</p></li>
<li><p>HDRP: Removed diffusion profiles from global settings.</p></li>
<li><p>HDRP: Updated an out-of-date guide in TextureStack.hlsl.
(UUM-2513)</p></li>
<li><p>HDRP: Used anti leaking in reflection probes and changed the default values for APV.</p></li>
<li><p>IL2CPP: Built Libil2cpp as a static library to allow caching it in the future.</p></li>
<li><p>IL2CPP: Corrected performance regression calling a managed method via a function pointer.</p></li>
<li><p>IL2CPP: Corrected stack trace being overwritten when an exception filter does not match the thrown exception.</p></li>
<li><p>IL2CPP: Fixed issues with internal IL2CPP type layout calculations on types with explicit layout.</p></li>
<li><p>IL2CPP: Fixed missing static initialization calls in static constructors on generic instances that reference different instances of the same generic type.</p></li>
<li><p>IL2CPP: Improved dead branch elimination in generic methods.</p></li>
<li><p>IL2CPP: Improved memory usage tracking in memory profiler.</p></li>
<li><p>IL2CPP: Improved the performance of generic virtual and generic interface methods calls when called from multiple threads.</p></li>
<li><p>IL2CPP: Lowered the cost of each sequence point check to improve the run time performance of managed code when script debugging is enabled.</p></li>
<li><p>IL2CPP: Made Visual Studio 2022 the recommended C++ compiler tool chain for Windows Desktop builds.</p></li>
<li><p>IL2CPP: Optimized out boxing on null checks on nullable types in.</p></li>
<li><p>IL2CPP: Reduced memory usage by removing caching of custom attribute instances.</p></li>
<li><p>IL2CPP: Reduced the amount of memory allocated for type metadata.</p></li>
<li><p>IL2CPP: Removed the null check before constructor calls.</p></li>
<li><p>Input: Made common API with string parameters callable from Burst.</p></li>
<li><p>iOS: Added the UnityHandleTouches function in trampoline, so you can send fake touches to the Unity application.</p></li>
<li><p>Kernel: Improved native containers so you can nest them if they aren't used in jobs.</p></li>
<li><p>Kernel: Optimized the Unity <code>ThreadsafeLinearAllocator</code> performance so it's 2-6 times faster depending on the platform architecture.</p></li>
<li><p>License: Added a proper license error dialog when the Editor is opened with a build license.</p></li>
<li><p>Mono: Added support for direct ETW profiler integration on Windows Desktop for managed code, with no plugin required.</p></li>
<li><p>Multiplayer: Added Netcode for GameObjects 1.0.2.</p></li>
<li><p>Package Manager: Changed the Advanced gear icon in the Package Manager window.</p></li>
<li><p>Package Manager: Changed the Package Manager native progress dialog to show progress information for a Resolve operation.</p></li>
<li><p>Package Manager: Expanded the input field size when you add packages by Git URL to fit the entire URL pasted in.</p></li>
<li><p>Particles: Changed so align to Direction allows World and Local Render alignment instead of forcing Local alignment.</p></li>
<li><p>Physics: Added ability to access RaycastHit.textureCoord off the main thread.</p></li>
<li><p>Physics: Added support to get multiple hits per 1 batch command.</p></li>
<li><p>Physics: Added the ability to get multiple hits per mesh when you use Raycast batch query.</p></li>
<li><p>Physics: Changed the GameObject name field to a reference field in the Info tab of the Physics Debug window.</p></li>
<li><p>Physics: Enabled the option to extend angular limits for Hinge Joint.</p></li>
<li><p>Physics: Improved the performance of the cloth system and parallelized system operations. The cloth system update is split into three stages: skinning, simulation and read-back. Each stage is distributed across multiple jobs and properly represented inside the profiler's timeline.
(<a href="https://issuetracker.unity3d.com/issues/cloth-performance-drops-when-displaying-more-gameobjects-with-cloth-and-then-hiding-them-off-screen">1173457</a>)</p></li>
<li><p>Physics: Made the values in the <strong>Info</strong> tab of the Physics Debugger copyable.</p></li>
<li><p>Physics: Removed unnecessary data to improve the memory footprint of Cloth components and the cloth system. The NvCloth backend's memory footprint is tracked and reported by the Unity's profiling tools.
(<a href="https://issuetracker.unity3d.com/issues/cloth-performance-drops-when-displaying-more-gameobjects-with-cloth-and-then-hiding-them-off-screen">1173457</a>)</p></li>
<li><p>Physics 2D: Improved the draw performance and features for 2D Physics Collider Gizmos by ensuring the gizmo drawing is batched as efficiently as possible.</p></li>
<li><p>Physics 2D: Improved the layout of 2D Physics Project Settings Editor so that it is easier to access the Layer Collision Matrix and the other General Settings.</p></li>
<li><p>Player: Added timestamps argument to include timestamps and thread ID prefix to logs.</p></li>
<li><p>Player: Optimized Resources.LoadAsync main thread use (from 1s to 13ms in a large asset test case).</p></li>
<li><p>Prefabs: Added a preference called 'Default Prefab Mode" for the behavior when you open Assets for the Prefab instances in the Hierarchy ('In Context' or 'In Isolation').</p></li>
<li><p>Prefabs: Changed so GameObjects can be removed from Prefab instances as overrides.</p></li>
<li><p>Prefabs: Fixed so that a invalid fileID can't be written to scene file.
(1373325)</p></li>
<li><p>Profiler: Added GPU allocations information to the Memory Profiler snapshot.</p></li>
<li><p>Profiler: Added object names markup to operations on the render thread.</p></li>
<li><p>Profiler: Added Unity version information to the profiler data file and profiler connection.
(<a href="https://issuetracker.unity3d.com/issues/no-proper-error-message-when-mismatching-player-build-and-editor-version">1342262</a>)</p></li>
<li><p>Profiler: Improved performance of rendering the CPU timeline view when viewing large captures.</p></li>
<li><p>Scene/Game View: Improved performance of the Orientation Gizmo.</p></li>
<li><p>Scene/Game View: Loaded SceneView Toolbar icons using variables defined in the USS.</p></li>
<li><p>Scripting: Allowed you to pass additional files to the roslyn analyzer and make them part of the dependency graph.</p></li>
<li><p>Scripting: Always inline the Mathf Sign() script API function.</p></li>
<li><p>Scripting: Calls to <code>UnityEngine.Diagnostics.Utils.ForceCrash</code> and <code>UnityEngine.Diagnostics.Native*</code> functions are now allowed from non main thread.</p></li>
<li><p>Scripting: Changed Unity to cache package assemblies locally on your machine to speed up compilation of packages.</p></li>
<li><p>Scripting: Does not discard AssemblyUpdater output when no updates have been applied.</p></li>
<li><p>Scripting: Improved invalid ApiUpdater configs detection.</p></li>
<li><p>Scripting: Improved performance of AssemblyBuilder API.
(<a href="https://issuetracker.unity3d.com/issues/apple-silicon-much-slower-than-i9-when-using-test-runner">1359764</a>)</p></li>
<li><p>Scripting: Improved pop-up error messages when attaching scripts to GameObjects.
(UUM-2557)</p></li>
<li><p>Scripting: Improved the performance of the geometry scripting APIs.</p></li>
<li><p>Scripting: Improved the startup performance of script compilation.</p></li>
<li><p>Scripting: Performance improvements on startup time and code iterations.</p></li>
<li><p>Search: Changed the advanced object selector to commit values upon closing and cancel when you press Escape.</p></li>
<li><p>Search: Restored queries and sorting options when you re-open the advanced object selector window.</p></li>
<li><p>Serialization: Improved GlobalObjectId object reference documentation.</p></li>
<li><p>Services: All customers can opt out of analytics in the editor and these settings sync with the Unity backend.</p></li>
<li><p>Shadergraph: Reduced time taken by code generation when a shader graph asset is imported.</p></li>
<li><p>Shaders: Added a warning with a workaround suggestion if a shader is targeting GL/Vulkan and uses large immediate constant arrays as it might cause problems for some drivers.</p></li>
<li><p>Shaders: Added an editor only option to disable shader optimizations for reduced compile times.</p></li>
<li><p>SRP Core: Improved performance of APV baking.</p></li>
<li><p>Terrain: Fixed so when you resize detail map resolution, it does not erase previously placed details.</p></li>
<li><p>Terrain: Improved terrain details scattering algorithm to allow more consistent coverage. Legacy distribution is still available in the quality settings.
(1425291)</p></li>
<li><p>UI: The TextureImporterInspector disables the "sRGB (Color Texture)" toggle for HDR targets (reflected in API docs).
(1324432)</p></li>
<li><p>UI Toolkit: Added a ProfilerMarker in BaseVerticalCollectionView Rebuild and RefreshItems.</p></li>
<li><p>UI Toolkit: Added the missing Field icons in UI Builder.
(1424724)</p></li>
<li><p>UI Toolkit: Changed so the Editor flags a setting usage hint when USS transitions start and could have a better performance with those settings.</p></li>
<li><p>UI Toolkit: Improved the performance of TextField.</p></li>
<li><p>UI Toolkit: Reduced unnecessary Layout and Repaint changes caused by style changes.</p></li>
<li><p>UI Toolkit: Refactored the UI Builder's asset modification processor's OnWillSaveAssets() callback to save changes automatically on the Save and Save Project global commands.<br></p>

<ul>
<li>The save operation is properly skipped on the Duplicate command.<br></li>
<li>Removed the Cmd+S handler code and the associated OnSaveDocument callback.</li>
</ul></li>
<li><p>UI Toolkit: Renamed the UI toolkit background property test to match the allocated entry.</p></li>
<li><p>Undo System: The Undo history now records the name of changed properties ("Modified Intensity") instead of just showing "Modified Property".</p></li>
<li><p>Universal RP: Added tooltips for upscaling filters.</p></li>
<li><p>Universal RP: SSAO: Depth test improved to avoid incorrectly adding AO in places where two objects are far away from one another.</p></li>
<li><p>Universal RP: SSAO: Downsampling will now not only affect the AO pass but also the blur passes.</p></li>
<li><p>Universal Windows Platform: Changed the <strong>Executable Only</strong> build to honor the selected Visual Studio version.</p></li>
<li><p>URP: Added Screen space for the Transform node.</p></li>
<li><p>URP: Changed so Unity exports shader variants information into a file in a temp folder.</p></li>
<li><p>URP: Improved edge quality for alpha-clipped materials when multisampling is used in URP.</p></li>
<li><p>URP: Reduced the number of memcpy operations from NativeArray access in URP for performance.</p></li>
<li><p>Version Control: Added offline mode toggle for smoother offline experience.</p></li>
<li><p>Version Control: Added support for Multi Factor Authentication to the Perforce plugin. The Plugin uses Perforce API v19.1.</p></li>
<li><p>Version Control: Added support for TLSv1.2 connections to Perforce servers. The Plugin is now using Perforce API v17.2.</p></li>
<li><p>VFX Graph: Added a missing range slider for the blend property to the custom attribute blend block.</p></li>
<li><p>VFX Graph: Fixed so that the context name isn't lost when you convert to a different type.</p></li>
<li><p>VFX Graph: Fixed so the space property is carried over when copying/pasting a VFX property.</p></li>
<li><p>VFX Graph: Fixed the OutputParticle context inspector content so it doesn't shift vertically when you resize the inspector panel.</p></li>
<li><p>VFX Graph: Made the input property label colors consistent.</p></li>
<li><p>VFX Graph: Reduced the time taken by VFXGraph.CheckCompilationVersion that would previously potentially query all assets on every domain reload.</p></li>
<li><p>VFX Graph: Reduced time taken by code generation when a VFX asset is imported.</p></li>
<li><p>VFX Graph: Sticky notes are no longer lost when you convert to block subgraph.</p></li>
<li><p>Video: Changed <code>VideoPlayer.timeUpdateMode</code> to emit warnings on the platforms where it is not currently supported.</p></li>
<li><p>Web: Rewrote the <code>WebCamTexture upload</code> implementation to be less CPU-heavy.</p></li>
<li><p>Windows: Added the <code>-force-d3d11-flip-model</code> command line parameter to force Unity to use DXGI flip model swap chain.</p></li>
<li><p>Windows: Unity warns you if you run it as an administrator and offers to restart with non-administrator privileges.</p></li>
<li><p>XR: Added profiler markers for some XR Display subsystem entry points. Markers are named XR.Display.*.</p></li>
<li><p>XR: Added support for late latch debug mode to help verify late latch functionality.</p></li>
<li><p>XR: Changed TryGetBoundaryPoints to return proper boolean values.</p></li>
<li><p>XR: Updated FMOD to use new MLAudio libraries [if available].</p></li>
</ul>

<h4>API Changes</h4>

<ul>
<li><p>2D: Added: Expose TilePaletteFocusDropdown.</p></li>
<li><p>2D: Added: New API to create Sprites with Seconday Texture properties.</p></li>
<li><p>2D: Added: New API to query Secondary Textures used by a Sprite.</p></li>
<li><p>2D: Added: New APIs for configuring Tile Animations:<br></p>

<ul>
<li>Tilemap.SetTileAnimationFlags<br></li>
<li>Tilemap.AddTileAnimationFlags<br></li>
<li>Tilemap.RemoveTileAnimationFlags<br></li>
<li>Tilemap.GetTileAnimationFlags.</li>
</ul></li>
<li><p>2D: Added: New Tilemap.GetTilesBlockNonAlloc API.</p></li>
<li><p>2D: Added: TileAnimationsFlags for configuring Tile Animations<br></p>

<ul>
<li>TileAnimationFlags.LoopOnce (Tile Animations that play and run once)<br></li>
<li>TileAnimationFlags.PauseAnimation (Pause Tile Animation)<br></li>
<li>TileAnimationFlags.UpdatePhysics (Update the physics shape for the Tile as the Tile Animation plays).</li>
</ul></li>
<li><p>2D: Obsoleted: Support for accessing sprite meta data through TextureImporter.spritesheet has been removed. Please use the UnityEditor.U2D.Sprites.ISpriteEditorDataProvider interface instead.</p></li>
<li><p>AI: Added: NavMeshBuildSettings.buildHeightMesh flag.</p></li>
<li><p>AI: Added: New parameter in the <code>CollectSources()</code> methods can limit the search to only the game objects that have markups.</p></li>
<li><p>AI: Added: New parameter <code>generateLinksByDefault</code> in the <code>CollectSources()</code> methods can set if the NavMesh sources are allowed to produce Off-mesh links in the case when no markups are associated with them.</p></li>
<li><p>AI: Added: New properties <code>ledgeDropHeight</code> and <code>maxJumpAcrossDistance</code> in <code>NavMeshBuildSettings</code> allow for Off-mesh links to be automatically generated when building the NavMesh at runtime.</p></li>
<li><p>AI: Added: New property <code>applyToChildren</code> in <code>NavMeshBuildMarkup</code> allows the markup to be assigned to all the children of the <code>root</code> object.</p></li>
<li><p>AI: Added: New property <code>generateLinks</code> in <code>NavMeshBuildMarkup</code> allows for Off-mesh links to be automatically created from the marked object when the NavMesh is built.</p></li>
<li><p>AI: Added: New property <code>overrideIgnore</code> in <code>NavMeshBuildMarkup</code> allows for <code>ignoreFromBuild</code> to have a value opposite to what is defined by the parent markup.</p></li>
<li><p>Android: Added: Classes AndroidJNI, AndroidJNIHelper, AndroidJavaObject, AndroidJavaClass, AndroidJavaProxy have new methods for more efficient low-level interop with Java. See API docs for full list.</p></li>
<li><p>Android: Added: Hindi support to SystemLanguage.
(<a href="https://issuetracker.unity3d.com/issues/application-dot-systemlanguage-returns-unknown-when-system-language-is-set-to-hindi">1380309</a>)</p></li>
<li><p>Android: Added: Introduced UnityEditor.Android.ADB.KillServerOnExit which controls a behavior where Unity would call adb kill-server on exit, effectively killing adb process, the default value for this property is true, meaning Unity will always kill adb upon exit. This can be changed either through this newly added API or from Preferences-&gt;External Tools in Unity.
(<a href="https://issuetracker.unity3d.com/issues/hub-3-its-not-possible-to-uninstall-editor-with-all-of-its-modules">1376211</a>)</p></li>
<li><p>Android: Added: SetAndroidCPU and SetAndroidSharedLibraryType extension methods for PluginImporter (from UnityEditor.Android.Plugins namespace).</p></li>
<li><p>Android: Changed: The Android Java interop APIs now do nothing when used from unattached thread. Previously they would temporary attach a thread and return invalid local references. No change for properly written code that attaches a thread prior to calling JNI.</p></li>
<li><p>Android: Changed: Updated SupportsAccelerometer() API to return whether a device has an accelerometer sensor or not.</p></li>
<li><p>Android: Obsoleted: <code>PlayerSettings.Android.minifyWithR8</code> is now obsolete: setting it now has no effect will always return <code>true</code>.</p></li>
<li><p>Animation: Added: TransformSceneHandle.GetLocalToParentMatrix and TransformSceneHandle.GetLocalToWorldMatrix.</p></li>
<li><p>Animation: Added: TransformStreamHandle.GetLocalToParentMatrix and TransformStreamHandle.GetLocalToWorldMatrix.</p></li>
<li><p>Asset Pipeline: Added: AssetDatabase.InstanceIDsToGUIDs() to fill a NativeArray of GUIDs for a NativeArray of instance IDs.</p></li>
<li><p>Build Pipeline: Added: New API for <code>assemblyCompilationNotRequired</code>, which we'll use in Burst to earlier inform Burst when an assembly hasn't been modified during compilation.</p></li>
<li><p>Build Pipeline: Obsoleted: <code>BuildPipelineExperimental</code> is now deprecated.</p></li>
<li><p>Core: Added: A new event <code>Application.memoryUsageChanged</code>, that is fired when applications memory usage changes significantly (for example goes critically low).</p></li>
<li><p>Core: Added: API for Handles that did not expose their IDs.</p></li>
<li><p>Core: Added: Direct faster support for 1D PerlinNoise.</p></li>
<li><p>Core: Added: Resources.InstanceIDsToValidArray() which allows you to batch check the validity of Objects by instance ID.</p></li>
<li><p>Core: Added: ScheduleByRef and RunByRef variants added to built-in managed job types.</p></li>
<li><p>Editor: Added: Editor.hasUnsavedChanges API so each single Editor in the Inspector can prevent entering playmode, closing the Inspector and changing selection while pending changes requires specific apply.</p></li>
<li><p>Editor: Added: EditorUtility.IsValidUnityYAML, which determines whether or not a string contains YAML that can be parsed by Unity.</p></li>
<li><p>Editor: Added: Exposed Handles.DrawAAPolyLine(Color[] colors, Vector3[] points) and Handles.DrawAAPolyLine(float width, Color[] colors, Vector3[] points).</p></li>
<li><p>Editor: Added: IDataModeController is added to handle data mode related functionalities.
(DOTSE-1855)</p></li>
<li><p>Editor: Added: Implement API to access PlayMode Views (GameView and Simulator).</p></li>
<li><p>Editor: Added: Introduce 2 new editor mode capabilities allowing user to hide the Add Component button, or to filter which component are shown in the AddComponent dialog.</p></li>
<li><p>Editor: Added: New APIs to support editor windows that can be in different modes when operating over runtime data vs authoring data.</p></li>
<li><p>Editor: Added: New Settings API to verify the existence of a particular settings path.</p></li>
<li><p>Editor: Added: RespectSceneVisibilityWhenBakingGI property to LightSettings for offline baking configuration.</p></li>
<li><p>Editor: Added: Support for callbacks and filters on the execution of cut/copy/paste/duplicate of GameObjects.</p></li>
<li><p>Editor: Added: Support to hide any method from the detail area of the console window.</p></li>
<li><p>Editor: Added: <code>Handles.elementSelectionColor</code> and <code>Handles.elementPreselectionColor</code> to the public API, allowing user defined <code>EditorToolContext</code> to have consistent coloring of selectable elements.</p></li>
<li><p>Editor: Added: <code>HandleUtility.FindNearestVertex</code> now returns the GameObject in addition to the vertex.</p></li>
<li><p>Editor: Changed: Lightmapping.SetAdditionalBakedProbes now accepts a boolean value to indicate if probes should be deringed.</p></li>
<li><p>Editor: Obsoleted: IDataModeHandler and IDataModeHandlerAndDispatcher are obsoleted.</p></li>
<li><p>Editor: Removed: Made Il2CppEagerStaticClassConstructionAttribute internal to avoid conflicts with other definitions outside of the package.</p></li>
<li><p>GI: Added: Rendering.GraphicsSettings.lightProbeOutsideHullStrategy<br></p>

<ul>
<li>Rendering.LightProbeOutsideHullStrategy.kLightProbeSearchTetrahedralHull<br></li>
<li>Rendering.LightProbeOutsideHullStrategy.kLightProbeUseAmbientProbe.
(<a href="https://issuetracker.unity3d.com/issues/bad-performance-with-generated-lighting-data-after-looking-at-gameobjects-that-are-far-away-from-light-probe-group">1340282</a>)</li>
</ul></li>
<li><p>GI: Deprecated: Enlighten Baked GI is deprecated and will be removed with release 2023.1. It recommended to use the CPU or GPU Progressive Lightmapper instead. Enlighten can be reactivated from the Project Settings up until release 2023.1.</p></li>
<li><p>GI: Deprecated: Various API endpoints related to Enlighten baking backend.</p></li>
<li><p>Graphics: Added: API to blend between baking states for Probe Volumes.</p></li>
<li><p>Graphics: Added: BeginRenderPass function overloading to support XR.</p></li>
<li><p>Graphics: Added: Blending for curves in post processing volumes.</p></li>
<li><p>Graphics: Added: Callback to obtain changes in the current Render Pipeline Asset.</p></li>
<li><p>Graphics: Added: CommandBuffer API to pass flags to our native plugin callback managing code to perform device state invalidation if needed.</p></li>
<li><p>Graphics: Added: Common support code for FSR.</p></li>
<li><p>Graphics: Added: Context menu on Volume Parameters to restore them to their default values.</p></li>
<li><p>Graphics: Added: Enum <code>BatchCullingContext.projectionType</code>.</p></li>
<li><p>Graphics: Added: Error on ResourceReloader when attempting to use [ReloadGroup] on ScriptableObject.</p></li>
<li><p>Graphics: Added: Explicit control over scenario blending factor and a debug mode for visualization.</p></li>
<li><p>Graphics: Added: Hidding Volume Components not available for the current pipeline on the Volume Profile Inspector.</p></li>
<li><p>Graphics: Added: Introduced QualitySettings.enableLODCrossFade.</p></li>
<li><p>Graphics: Added: IsHDR(GraphicsFormat/TextureFormat) to GraphicsFormatUtility.</p></li>
<li><p>Graphics: Added: Linear version of function that sets FSR RCAS shader constants.</p></li>
<li><p>Graphics: Added: Mesh.GetBindposes that returns a NativeArray, and Mesh.bindposeCount.
(1384368)</p></li>
<li><p>Graphics: Added: New API for accessing Bone Weight and Blend Shape Graphics Buffers.</p></li>
<li><p>Graphics: Added: New denoising API to access hardware specific denoising backends.</p></li>
<li><p>Graphics: Added: New extension <code>TryRemoveElementsInRange</code> to remove a range of elements from a <code>IList</code>.</p></li>
<li><p>Graphics: Added: New Foveated Rendering API on the command buffer interface.</p></li>
<li><p>Graphics: Added: New functions for setting materials on renderer using a list of materials.</p></li>
<li><p>Graphics: Added: New QualitySettings API to work with excluded platforms.</p></li>
<li><p>Graphics: Added: New Screen Coordinates Override shader utilities.</p></li>
<li><p>Graphics: Added: New <code>RenderPipelineGlobalSettingsProvider</code> to help adding a settings panel for editing global settings.</p></li>
<li><p>Graphics: Added: Overload for <code>CommandBuffer.SetComputeBufferParam</code>, which allows binding a resource with <code>GraphicsBufferHandle</code>.</p></li>
<li><p>Graphics: Added: Overloads using TextureFormat to various GraphicsFormatUtility functions.</p></li>
<li><p>Graphics: Added: Probe volume influence weight parameter.</p></li>
<li><p>Graphics: Added: RenderPipeline.SupportsRenderRequest. Checks the active pipeline whether the given RequestData type is supported.<br></p>

<ul>
<li>RenderPipeline.SubmitRenderRequest. Triggers a render with the active render pipeline according to the passed in RequestData.<br></li>
<li>RenderPipeline.ProcessRenderRequest. Protected method, render pipelines can override this to implement the rendering logic for RenderRequests.<br></li>
<li>RenderPipeline.IsRenderRequestSupported. Protected method, render pipelines can override this to specify their support for RequestData types.<br></li>
<li>RenderPipeline.StandardRequest. Use this as the RequestData parameter in SubmitRenderRequest to trigger a default srp render on the specified camera.</li>
</ul></li>
<li><p>Graphics: Added: Resolution.refreshRateRatio, which returns a non-rounded refresh rate value.</p></li>
<li><p>Graphics: Added: Screen.SetResolution(int, int, FullScreenMode, RefreshRate) overload which allows setting specific refresh rate without rounding it to an integer.</p></li>
<li><p>Graphics: Added: Support for multiple Baking States to Prove Volumes.</p></li>
<li><p>Graphics: Added: Texture.isDataSRGB. This can be used to detect whether a texture's pixel data on disk/CPU memory/GPU memory is sRGB.</p></li>
<li><p>Graphics: Added: <code>DebugUI.ObjectPopupField</code> to render a list of <code>UnityEngine.Objects</code> as a popup on the Rendering Debugger.</p></li>
<li><p>Graphics: Added: <code>Material.GetBufferHandle</code> to get the <code>GraphicsBufferHandle</code> in a material property sheet.</p></li>
<li><p>Graphics: Added: <code>Material.GetPropertyNames(&lt;PropertyType&gt;)</code> to query the property sheet names in a material based on a given property type.</p></li>
<li><p>Graphics: Changed: DrawingSettings now has a overrideShader parameter. Allowing ScriptableRenderers to render with override shaders without overriding material properties.</p></li>
<li><p>Graphics: Changed: Moved RendererList and RendererListStatus in the UnityEngine.Rendering namespace.</p></li>
<li><p>Graphics: Changed: New cullingNearPlane field to the BatchCullingContext class. This field lets you specify the near plane distance that Unity uses to cull objects. It's available to the OnPerformCulling() callback.</p></li>
<li><p>Graphics: Deprecated: Display.Activate(int, int, int) has been deprecated. Use Display.Activate(int, int, RefreshRate) instead.</p></li>
<li><p>Graphics: Deprecated: Resolution.refreshRate has been deprecated. Use Resolution.refreshRateRatio instead.</p></li>
<li><p>Graphics: Deprecated: Screen.SetResolution(int, int, bool, int) and Screen.SetResolution(int, int, FullScreenMode, int) have been deprecated. Use Screen.SetResolution(int, int, FullScreenMode, RefreshRate) instead.</p></li>
<li><p>HDRP: Added: #pragma editor_sync_compilation directive to MaterialError.shader.</p></li>
<li><p>HDRP: Added: A button in the Probe Volume Baking window to open the Probe Volume debug panel.</p></li>
<li><p>HDRP: Added: A callback to override the View matrix of Spot Lights.</p></li>
<li><p>HDRP: Added: A new option to animate APV sample noise to smooth it out when TAA is enabled.</p></li>
<li><p>HDRP: Added: An initial version of under water rendering for the water system.</p></li>
<li><p>HDRP: Added: An option for culling objects out of the ray tracing acceleration structure.</p></li>
<li><p>HDRP: Added: An option on the lit shader to perform Planar and Triplanar mapping in Object Space.</p></li>
<li><p>HDRP: Added: An optional CPU simulation for the water system.</p></li>
<li><p>HDRP: Added: An overlay render queue to custom passes.</p></li>
<li><p>HDRP: Added: Default DOTS compatible loading shader (MaterialLoading.shader).</p></li>
<li><p>HDRP: Added: Denoising for the path tracer.</p></li>
<li><p>HDRP: Added: Implemented an initial version of the HDRP water system.</p></li>
<li><p>HDRP: Added: Importance sampling of the sky in path tracing (aka environment sampling).</p></li>
<li><p>HDRP: Added: Layer Mask in the Probe Volume Settings window to filter which renderers to consider when placing the probes.</p></li>
<li><p>HDRP: Added: More explicit error messages when trying to use HDSceneColor, NormalFromHeight, DDX, DDY or DDXY shader graph nodes in ray tracing.</p></li>
<li><p>HDRP: Added: New Expose SSR parameters to control speed rejection from Motion Vector including computing Motion Vector in World Space.</p></li>
<li><p>HDRP: Added: New Unity material ball matching the new Unity logo.</p></li>
<li><p>HDRP: Added: Public API for Diffusion Profile Override volume Component.</p></li>
<li><p>HDRP: Added: Refract Node, Fresnel Equation Node and Scene-Difference-Node (https://jira.unity3d.com/browse/HDRP-1599).</p></li>
<li><p>HDRP: Added: Remap alpha channel of baseColorMap for Lit and LayeredLit.</p></li>
<li><p>HDRP: Added: The culling matrix and near plane for lights, so that they can be custom-culled with the BatchRenderGroup API.</p></li>
<li><p>HDRP: Added: Time slicing support for realtime reflection probes.</p></li>
<li><p>Input: Added: Moved Input System gamepad from XInput to Windows.Gaming.Input on Windows.</p></li>
<li><p>iOS: Added: Identifiers for iPhone 14 models.</p></li>
<li><p>iOS: Added: IPad Air 5 and iPhone SE 3 to devices.</p></li>
<li><p>License: Removed: Legacy licensing module.</p></li>
<li><p>Mono: Added: New Diagnostic Utility API ValidateHeap for use when attempting to debug suspected memory corruption issues.</p></li>
<li><p>Networking: Deprecated: UnityWebRequest.Post() taking string payload has been deprecated. A direct replacement is UnityWebRequest.PostWwwForm(), also introduced UnityWebRequest.Post() taking string payload and Content-Type, the later being intended for sending string data other than HTML form.</p></li>
<li><p>Package Manager: Added: <code>VersionsInfo.recommended</code> property which defines the recommended package version to be used in the project.</p></li>
<li><p>Package Manager: Deprecated: <code>VersionsInfo.verified</code> property in favour of the <code>VersionsInfo.recommended</code> property. The <code>verified</code> property is now an alias for the <code>recommended</code> property.</p></li>
<li><p>Physics: Added: ArticulationBody.GetJointExternalForces method which allows to get the forces in reduced space needed to counteract forces applied in the general space for your Articulation chain.</p></li>
<li><p>Physics: Added: Drive type enumerator for Articulation Body drives.</p></li>
<li><p>Physics: Added: Expose a way to set wheel rotation speed.</p></li>
<li><p>Physics: Added: Expose additional ArticulationDrive setters that allow direct access to the properties.</p></li>
<li><p>Physics: Added: Expose setting inertia tensor and center of mass for Rigidbody and ArticulationBody components from the Inspector.</p></li>
<li><p>Physics: Added: Methods for getting accumulated force and torque for Rigidbodies and Articulation Bodies.</p></li>
<li><p>Physics: Added: Option to use accelerations instead of forces for Configurable and Hinge joints.</p></li>
<li><p>Physics: Added: Physics.ContactEvent event that allows jobified contact reading.</p></li>
<li><p>Physics: Added: Two new methods (PhysicsScene.InterpolateBodies() and PhysicsScene. ResetInterpolationPoses()) for interpolating non-default Physics Scenes.</p></li>
<li><p>Physics: Changed: Exposed a new method of controlling how the Physics simulation is run. Physics.autoSimulation is now obsolete, use Physics.simulationMode instead.</p></li>
<li><p>Physics 2D: Added: "Collider2D.callbackLayers" which allows the control of which layers that physics callbacks will be produced for.</p></li>
<li><p>Physics 2D: Added: "Collider2D.contactCaptureLayers" which allows the control of which layers that contacts will be captured.</p></li>
<li><p>Physics 2D: Added: Ability to run OverlapBox, OverlapCapsule and OverlapSphere queries asynchronously in a job.</p></li>
<li><p>Physics 2D: Deprecated: "Physics2D.alwaysShowColliders" is now deprecated. It is now only available in the Physics 2D Project Settings.<br></p>

<ul>
<li>"Physics2D.showColliderAABB" is now deprecated. It is now only available in the Physics 2D Project Settings.<br></li>
<li>"Physics2D.showColliderContacts" is now deprecated. It is now only available in the Physics 2D Project Settings.<br></li>
<li>"Physics2D.showCollidersFilled" is now deprecated. It is now only available in the Physics 2D Project Settings.<br></li>
<li>"Physics2D.showColliderSleep" is now deprecated. It is now only available in the Physics 2D Project Settings.<br></li>
<li>"Physics2D.colliderAABBColor" is now deprecated. All Physics 2D gizmo options have been moved to Preferences (See "2D | Physics" preference) and is now displayed as "Bounds Color".<br></li>
<li>"Physics2D.colliderAsleepColor" is now deprecated. All Physics 2D gizmo options have been moved to Preferences (See "2D | Physics" preference) and is now displayed as "Asleep Color (Outline)".<br></li>
<li>"Physics2D.colliderAwakeColor" is now deprecated. All Physics 2D gizmo options have been moved to Preferences (See "2D | Physics" preference) and is now displayed as "Awake Color (Outline)".<br></li>
<li>"Physics2D.colliderContactColor" is now deprecated. All Physics 2D gizmo options have been moved to Preferences (See "2D | Physics" preference) and is now displayed as "Contact Color".<br></li>
<li>"Physics2D.contactArrowScale" is now deprecated. All Physics 2D gizmo options have been moved to Preferences under (See "2D | Physics" preference) and is now displayed as "Contact Arrow Scale.</li>
</ul></li>
<li><p>Profiler: Added: ProfilerMarker BeginSample/EndSample API to CommandBuffer.</p></li>
<li><p>Profiler: Changed: Deprecated <code>UnityEditor.MemoryProfiler.MemorySnapshot.RequestNewSnapshot()</code> and the event <code>MemorySnapshot.RequestNewSnapshot()</code>. Consider using <code>Unity.Profiling.Memory.MemoryProfiler.TakeCapture()</code> which takes a callback as a parameter instead of using an event. It also allows for more specific capture options and if you pass a path to a ".snap"-file, you can use that API to capture memory snapshots from code to later inspect them in the Memory Profiler Package.</p></li>
<li><p>Profiler: Changed: Deprecated <code>UnityEditor.MemoryProfiler.PackedMemorySnapshot</code> and all related API it will be removed in a future Unity Version. The related API includes <code>MemoryProfiler.Connection</code>, <code>MemoryProfiler.FieldDescription</code>, <code>MemoryProfiler.MemorySection</code>, <code>MemoryProfiler.PackedGCHandle</code>, <code>MemoryProfiler.PackedNativeType</code>, <code>MemoryProfiler.PackedNativeUnityEngineObject</code>, <code>PackedNativeUnityEngineObject.ObjectFlags</code>, <code>MemoryProfiler.TypeDescription</code>, <code>TypeDescription.TypeFlags</code> and <code>MemoryProfiler.VirtualMachineInformation</code>.</p></li>
<li><p>Profiler: Changed: Deprecated <code>UnityEditor.Profiling.Memory.Experimental.PackedMemorySnapshot</code> and all related API it will be removed in a future Unity Version. The related API includes <code>ArrayEntries&lt;T&gt;</code>, <code>ByteArrayEntries</code>, <code>ConnectionEntries</code>, <code>FieldDescriptionEntries</code>, <code>ManagedMemorySectionEntries</code>, <code>GCHandleEntries</code>, <code>NativeTypeEntries</code>, <code>NativeObjectEntries</code>, <code>NativeMemoryLabelEntries</code>, <code>NativeRootReferenceEntries</code>, <code>NativeAllocationEntries</code>, <code>NativeMemoryRegionEntries</code>, <code>NativeAllocationSiteEntries</code>, <code>NativeCallstackSymbolEntries</code>, <code>ObjectFlags</code>, <code>ObjectFlagsExtensions</code>, <code>TypeFlags</code>, <code>TypeFlagsExtensions</code> and <code>VirtualMachineInformation</code>.</p></li>
<li><p>Profiler: Changed: Moved <code>UnityEngine.Profiling.Experimental.DebugScreenCapture</code> API to <code>Unity.Profiling.Memory.DebugScreenCapture</code>. The casing of the member names was adjusted to CamelCase. The Scripting API Udater can migrate existing usage of this API automatically.</p></li>
<li><p>Profiler: Changed: Moved <code>UnityEngine.Profiling.Memory.Experimental.CaptureFlags</code> API to <code>Unity.Profiling.Memory.CaptureFlags</code>. The Scripting API Updater can migrate existing usage of this API automatically.</p></li>
<li><p>Profiler: Changed: Moved <code>UnityEngine.Profiling.Memory.Experimental.MemoryProfiler</code> API to <code>Unity.Profiling.Memory.MemoryProfiler including TakeCapture()</code>. Consider using this API over using <code>UnityEditor.MemoryProfiler.MemorySnapshot.RequestNewSnapshot()</code> if you want to capture memory snapshots from code to later inspect them in the Memory Profiler Package. The casing of the member names was adjusted to CamelCase. The Scripting API Updater can migrate existing usage of this API automatically.</p></li>
<li><p>Profiler: Changed: Moved <code>UnityEngine.Profiling.Memory.Experimental.MetaData</code> API to <code>Unity.Profiling.Memory.MemorySnapshotMetadata</code>. The <code>.content</code> field was renamed to <code>.Description</code>, which will be adjusted automatically by the Script API Updater. The <code>.plaform</code> field was removed and all references to it will need to be manually removed.</p></li>
<li><p>Project Browser: Changed: StartNameEditingIfProjectWindowExists' now takes an extra argument indicating if the asset being created needs to be selected during name editing.</p></li>
<li><p>Scene/Game View: Added: Exposed collapsedIcon property for overlays.</p></li>
<li><p>Scene/Game View: Added: Exposed grid snapping API.</p></li>
<li><p>Scene/Game View: Added: Support for DOTS Entity picking.</p></li>
<li><p>Scene/Game View: Added: <code>SceneView.cameraViewport</code> property to get the scene camera content rect.</p></li>
<li><p>Scene/Game View: Added: <code>ToolManager.RefreshAvailableTools()</code> to rebuild the Scene View Tools Overlay.</p></li>
<li><p>Scripting: Added: CancellationToken property to UnityEngine.Application (raised on exiting playmode), Added CancellationToken property to UnityEngine.MonoBehaviour (raised on Destroy).</p></li>
<li><p>Scripting: Added: New IsUnityExtensionsInitialized method in EditorUtility.
(1403928)</p></li>
<li><p>Scripting: Changed: Renamed CancellationToken properties on Application and MonoBehaviour classes to OnDestroyCancellationToken and OnExitCancellationToken.</p></li>
<li><p>Search: Added: API to register custom advanced object selectors.</p></li>
<li><p>Search: Added: New Query Builder Search API.</p></li>
<li><p>Search: Added: New Search API for search expression.</p></li>
<li><p>Search: Added: New Search API for search property database.</p></li>
<li><p>Search: Added: New Search API for search string views.</p></li>
<li><p>Search: Added: New Search API to embedded search property tables.</p></li>
<li><p>Search: Added: Various search utilities API.</p></li>
<li><p>Search: Changed: UnityEditor.Search.Query class name to prevent name collision.</p></li>
<li><p>Search: Changed: Updated PropertyDatabase to prevent opening multiple instances on the same file.</p></li>
<li><p>Serialization: Added: New API for enumerating Archive contents and organizing Archives.</p></li>
<li><p>Shadergraph: Added: New mip sampling modes for 2d textures, 2d texture arrays and 3d textures.</p></li>
<li><p>Shaders: Added: API ShaderVariantCollection.WarmUpProgressively that allows users to timeslice shader warmup across multiple frames.</p></li>
<li><p>Shaders: Added: API to control shader memory usage at runtime.
(<a href="https://issuetracker.unity3d.com/issues/unlit-shader-uses-more-than-100mb-of-memory-when-in-player">UUM-5583</a>)</p></li>
<li><p>SRP Core: Added: New XRSystem API to allow SRPs override the XR built-in stereo matrices.</p></li>
<li><p>Terrain: Changed: All built-in Terrain Tools can now be overridden and Detail API is publicized.</p></li>
<li><p>UI Toolkit: Added: A two-value constructor for TransformOrigin.
(1392862)</p></li>
<li><p>UI Toolkit: Added: Allow the creation of a Painter2D object to use the vector graphics APIs.</p></li>
<li><p>UI Toolkit: Added: DrawText API in MeshGenerationContext class.</p></li>
<li><p>UI Toolkit: Added: DrawVectorImage API in MeshGenerationContext class.</p></li>
<li><p>UI Toolkit: Added: gradientStroke property on Painter2D class.</p></li>
<li><p>UI Toolkit: Added: NestedInteractionKind enum to ScrollView to give control over event propagation while scrolling.</p></li>
<li><p>UI Toolkit: Removed: Non-generic overload for retrieving a custom style property of type UnityEngine.Object.</p></li>
<li><p>Undo System: Added: UndoRedoEvent callback containing undo information added.</p></li>
<li><p>Undo System: Deprecated: Undo callback UndoRedoPerformed to be updated using new UndoRedoEvent callback.</p></li>
<li><p>Universal RP: Added: UniversalRenderPipeline.SingleCameraRequest. Use this as the RequestData parameter in SubmitRenderRequest to render a single camera.</p></li>
<li><p>Universal RP: Obsoleted: RenderSingleCamera is now obsolete. Please use RenderPipeline.SubmitRenderRequest with RequestData of the SingleCameraRequest type.<br></p>

<ul>
<li>Graphics: Camera.SubmitRenderRequests is now obsolete. Please use RenderPipeline.SubmitRenderRequest with RequestData of a supported type such as RenderPipeline.StandardRequest.</li>
</ul></li>
<li><p>URP: Added: #pragma editor_sync_compilation directive to FallbackError.shader.</p></li>
<li><p>URP: Added: Batch mode support for the converters.</p></li>
<li><p>URP: Added: Changed "_USE_DRAW_PROCEDURAL" to be used only in vertex shader in Post Processing related shaders as they are not needed for fragment shaders. In result we now generate less shader variants.</p></li>
<li><p>URP: Added: CommandBuffer variable to RenderingData struct and switched all of the renderer to use that buffer instead of creating local command buffers.</p></li>
<li><p>URP: Added: Default DOTS compatible loading shader (FallbackLoading.shader).</p></li>
<li><p>URP: Added: Inspector documentation URLs to the SSAO, Decal, and Render Objects renderer features.</p></li>
<li><p>URP: Added: New Downscale and Max Iterations options for Bloom.</p></li>
<li><p>URP: Added: Renderer Features can now use the HelpURLAttribute to specify a documentation URL to be used in the inspector.</p></li>
<li><p>URP: Added: Soft Shadows filtering quality as per light option. Low, PCF 3x3 pixel area with fixed offsets which is recommended for mobile. Medium, Tent 5x5 pixel area as the default. High, Tent 7x7 pixel area.</p></li>
<li><p>URP: Added: Support for FidelityFX Super Resolution 1.0 upscaling filter.</p></li>
<li><p>URP: Added: Support for user-selected upscaling filters. Current options are automatic, bilinear, and nearest-neighbor.</p></li>
<li><p>VFX Graph: Added: New Timeline Integration which supports scrubbing.</p></li>
<li><p>VFX Graph: Added: Samples project github link button in package manager.</p></li>
</ul>

<h4>Changes</h4>

<ul>
<li><p>2D: Added support for Mipmap Streaming for Textures from the <code>TextureImporter</code>.</p></li>
<li><p>2D: Removed support for Legacy Sprite-Packing based on Packing Tags.</p></li>
<li><p>2D: Sprite.OverrideGeometry is called when a Sprite is created with SpriteMeshType.FullRect. The mesh type of the Sprite is changed to SpriteMeshType.Tight if the API is called.</p></li>
<li><p>AI: Changed so navigation components can't be added to a game object and the Navigation window is not available without the navigation package installed.</p></li>
<li><p>AI: The Navigation components and UI become available only through the AI Navigation package.</p></li>
<li><p>Android: Android SDK must have cmdline-tools component installed now. Unity will ignore tools component.</p></li>
<li><p>Android: Default gradle templates have changed significantly with new Gradle and AGP versions. Gradle templates in existing projects will have to be recreated based on new default templates when upgrading projects created with previous Unity versions.</p></li>
<li><p>Android: Implemented a new system to generate Android manifests internally.</p></li>
<li><p>Android: JDK 11 is now required to build Android apps.</p></li>
<li><p>Android: Removed Editor UI option that previously allowed you to choose between R8 and Proguard tools to minify code. The new AGP version doesn't have an option to minify using proguard, so R8 is always used instead.</p></li>
<li><p>Android: Unity uses Android Gradle Plugin 7.1.2 by default.</p></li>
<li><p>Android: Unity uses Gradle 7.2 by default.</p></li>
<li><p>Android: Upgraded to using Android NDK r23b. Default linker is now lld which fixes issues with large projects and IL2CPP.</p></li>
<li><p>Asset Import: Changed some functionalities around the Apply/Revert/Cancel button of AssetImporterEditor:<br></p>

<ul>
<li>The user cannot enter playmode while an asset has pending changes that would trigger a re-import.<br></li>
<li>If an assembly reload occurs with pending changes on an asset, the changes are applied and the asset re-imported.<br></li>
<li>Switching between importer override while an asset has pending changes doesn't ask for Apply/Revert/Cancel.<br></li>
<li>Undo/Redo with modified and re-imported assets will ask for Apply/Revert/Cancel if an undo/redo would have to re-import the affected asset.</li>
</ul></li>
<li><p>Asset Pipeline: Added a warning to <code>AssetDatabase.CreateAsset()</code> if you use it during an already-running import.</p></li>
<li><p>Build Pipeline: Added a visible warning if there are pending uncompiled script changes when you do a player build.</p></li>
<li><p>Build Pipeline: Changed so log messages from the player build system are printed to <code>Editor.log</code> immediately instead of at the end of the build.</p></li>
<li><p>Build Pipeline: Changed so Unity doesn't recompile editor scripts during a player build.</p></li>
<li><p>Burst: Changed the process for static <code>readonly</code> fields in static constructors to allow more computational budget per static field. so it doesn't fail to compile.</p></li>
<li><p>Core: Stopped the reset of<code>NativeArray</code> and <code>NativeSlice</code> length when an instance is disposed, to ensure entry into iterators that would likely yield a disposed object exception.</p></li>
<li><p>Documentation: Added more details to documentation for material and texture export.</p></li>
<li><p>Documentation: Added pages to HDRP, URP, and Shader Graph Docs to support the new Material Variant feature.</p></li>
<li><p>Documentation: Added troubleshooting documentation for exporting camera animation only from Maya plugin.</p></li>
<li><p>Editor: Deprecated navigation-related static flags that can be set on a GameObject.</p></li>
<li><p>Editor: Disabled the <code>CS0282</code> compiler warning when <code>PlayerSettings.SuppressCommonWarnings</code> is enabled.</p></li>
<li><p>Editor: Improved internal debuggability of corrupted pointers in GameObjects.</p></li>
<li><p>Editor: Removed Project Settings Service default entries so it is empty if no Services package are installed.</p></li>
<li><p>Editor: Replaced the prefab overlay icons with colored ones.</p></li>
<li><p>Editor: Updated the MacOS x64 Editor to require macOS 10.14.</p></li>
<li><p>GI: Removed the minimum bounces from the lighting settings GUI. The API for this property field will remain intact.</p></li>
<li><p>Graphics: Migrated the physical properties of the HDRP camera down into the core Unity camera.</p></li>
<li><p>Graphics: Removed "Supported Aspect Ratios" setting from player settings.</p></li>
<li><p>Graphics: Removed the legacy deferred lighting rendering path "light pre-pass".</p></li>
<li><p>Graphics: Specified the Volume Component editor with <code>CustomEditorAttribute</code> instead of <code>VolumeComponentEditorAttribute</code>.</p></li>
<li><p>Graphics: Updated Splash Screen logo to new Unity Logo. It is now also possible to remove the Unity Logo from a build when not using the splash screen by disabling the <code>Show Unity Logo</code> option in the project settings.</p></li>
<li><p>Graphics Tests: Updated the TextCore reference images to match the latest changes from TextMeshPro.</p></li>
<li><p>HDRP: Added shadow transparency (raster, ray-traced, path-traced) to the sample scene for HDRP material samples.</p></li>
<li><p>HDRP: Added support for encoded HDR cubemaps, configurable via the HDR Cubemap Encoding project setting.</p></li>
<li><p>HDRP: Added that you can edit Post Process in the default frame settings.</p></li>
<li><p>HDRP: Changed how the ambient probe is sent to the volumetric clouds trace pass.</p></li>
<li><p>HDRP: Changed the behavior the max ray length for recursive rendering to match RTR and rasterization.</p></li>
<li><p>HDRP: Changed Volumetric Lighting to use an ambient probe computed directly on the GPU to avoid latency.</p></li>
<li><p>HDRP: Changed <code>DiffusionProfileOverride</code> to accumulate profiles instead of replacing when interpolating at runtime.</p></li>
<li><p>HDRP: Cleared Render Graph object pools with render graph cleanup.</p></li>
<li><p>HDRP: Converted most TGA texture files to TIF to reduce the size of HDRP material samples.</p></li>
<li><p>HDRP: Disabled the "Reflect Sky" feature in the case of transparent screen space reflections for the water system.</p></li>
<li><p>HDRP: Disabled the volumetric clouds for the indoor template scenes (normal and DXR).</p></li>
<li><p>HDRP: Disabled volumetric clouds in the lens flares sample indoor scene.</p></li>
<li><p>HDRP: Disallowed "Gradient Diffusion" parameter to be negative for the "Gradient Sky".</p></li>
<li><p>HDRP: Enabled Force Alpha To Coverage when MSAA is enabled and removed the Alpha to Mask UI control.</p></li>
<li><p>HDRP: Improved the probe placement of APV when dealing with scenes that contains objects smaller than a brick.</p></li>
<li><p>HDRP: Improved the water system (Deferred, Decals, SSR, Foam, Caustics, etc.).</p></li>
<li><p>HDRP: Made improvements to the UX for the Unlit Distortion field.</p></li>
<li><p>HDRP: Made Vertical gate fit the default for physical camera.</p></li>
<li><p>HDRP: Moved internals of the sky manager to the proper Render Graph passes.</p></li>
<li><p>HDRP: Moved some custom path tracing code to the SensorSDK package.</p></li>
<li><p>HDRP: Renamed the <em>Ambient Occlusion Volume Component</em> to <em>Screen Space Ambient Occlusion</em>.
(1335387)</p></li>
<li><p>HDRP: Replaced the geometry distance offset in the Probe Volume component by a minimum renderer volume threshold to ignore small objects when you place probes.</p></li>
<li><p>HDRP: Reversed the rendering order of decals that have a similar draw order value.</p></li>
<li><p>HDRP: Stopped unnecessary copy per fave to optimize real-time probe rendering.</p></li>
<li><p>HDRP: Updated Physically Based Sky documentation with more warnings about warmup cost.</p></li>
<li><p>IL2CPP: Corrected performance regression from Unity 2021.2 when script debugging is enabled.</p></li>
<li><p>IL2CPP: Removed unneeded generic method context initialization calls.</p></li>
<li><p>iOS: Changed how selection is handled if it's set before the on screen keyboard has showed up.</p></li>
<li><p>iOS: Changed IOS Xcode projects to use the il2cpp executable to compile il2cpp sources, so the Xcode doesn't compile the sources directly. This makes iOS consistent with other platforms.</p></li>
<li><p>iOS: IOS player build requires Xcode13.</p></li>
<li><p>Networking: Removed UNET LLAPI.</p></li>
<li><p>Package: Updated the Python for .NET DLL to a custom patch, based on the official version 3.0.0-rc4.</p></li>
<li><p>Package Manager: Removed the tools tab in the package manager.</p></li>
<li><p>Scene/Game View: Changed the overlay default shortcuts to avoid conflicts with Spacebar and changed the overlay activation through the burger menu to favor discovery of the Overlay menu.</p></li>
<li><p>Scripting: Added that Unity suggests that you install Visual Studio 2022 update 1 instead of Visual Studio 2019 when you install on Windows.</p></li>
<li><p>Scripting: Fixed so Unity doesn't synchronously recompile scripts in batchmode when you change settings that affect script compilation.</p></li>
<li><p>Search: Hid the Default group in the search view (default items only show up in the All group).</p></li>
<li><p>Serialization: Changed alignment in Resource Image transfer function from 4 to 16 bytes to improve patching results on some platforms.</p></li>
<li><p>Services: Renamed Unity Analytics to Legacy Analytics to aid deprecation of the Analytics package.</p></li>
<li><p>Services: Updated the discoverability of services packages in the Package Manager, all the Unity Gaming Services.</p></li>
<li><p>Shadergraph: Renamed the Shader Graph Texel Size node to Texture Size and added two additional output ports that output the texel and texture size.</p></li>
<li><p>SRP Core: Allow VolumeComponent BoolParameter UI to display enabled/disabled dropdown instead of checkboxes.</p></li>
<li><p>Text: Renamed the runtime default resource <code>Arial.ttf</code> to <code>LegacyRuntime.tff</code>.</p></li>
<li><p>UI Toolkit: Changed default Inspectors to use the UI Toolkit by default.</p></li>
<li><p>Universal RP: Messages regarding reducing resolution for additional punctual lights are now only displayed in debug builds.
(<a href="https://issuetracker.unity3d.com/issues/urp-reduced-additional-punctual-light-shadows-resolution-warnings-are-being-thrown-on-playmode-enter-slash-exit-1">UUM-10166</a>)</p></li>
<li><p>Universal RP: SSAO: The final After Opaque passes have now been merged with the last blur pass.</p></li>
<li><p>Universal RP: SSAO: The samples field has been changed to a dropdown: High (12 samples), Medium (8 samples) and Low (4 samples).</p></li>
<li><p>Universal Windows Platform: Moved the backup folder so it's next to the build output folder instead of nested inside.</p></li>
<li><p>Universal Windows Platform: The following defines are no longer defined when compiling Cpp plugins through Visual Studio (none of them were defined in <strong>Executable Only</strong> build mode): <code>WINDOWS_UWP</code>, <code>UNITY_UWP</code>, <code>UNITY_WSA_10_0</code>, <code>UNITY_WSA</code>, <code>UNITY_WINRT</code>, <code>PLATFORM_WINRT</code>.</p></li>
<li><p>Universal Windows Platform: <code>AppxContentGroupMap.xml</code> is now it is part of the "Unity Data" project if generated.</p></li>
<li><p>URP: Adapted URP to use Blitter interface for full screen draws.<br></p>

<ul>
<li>Removed <code>DRAW_PRCEDURAL</code> variant for shaders.<br></li>
<li>Factored out full screen blits to utility function.<br></li>
<li>Updated terrain SSAO tests for DX11 and DX12 by using the reference images from Vulkan.</li>
</ul></li>
<li><p>URP: Added new UI/UX for the converter framework.</p></li>
<li><p>URP: Avoid using Depth32Stencil8 format on Android.</p></li>
<li><p>URP: Changed <code>PostProcessPass</code> to internal visibility since it's in internal namespace.</p></li>
<li><p>URP: Integrated Foveated Rendering into URP for supported platforms.</p></li>
<li><p>URP: Merged the <code>MaterialError.shader</code> and <code>FallbackError.shader</code>.</p></li>
<li><p>URP: Moved the Shader Variant Log Level from the URP Asset to URP Global Settings.</p></li>
<li><p>URP: Re-added the menu button so you can convert selected materials.</p></li>
<li><p>URP: Removed low quality light fade for lighting consistency on both desktop and mobile.</p></li>
<li><p>URP: Removed SHADER_QUALITY_LOW, SHADER_QUALITY_MEDIUM, SHADER_QUALITY_HIGH from shaders so everything is SHADER_QUALITY_HIGH.</p></li>
<li><p>URP: Removed skipIterations from Bloom settings. It has now been replaced with maxIterations.</p></li>
<li><p>URP: Removed the name input for the SSAO and Screen Space Shadows renderer features.</p></li>
<li><p>URP: Removed <code>SHADER_API_MOBILE</code> from shaders in cases where it affected quality.</p></li>
<li><p>URP: Removed <code>SHADER_HINT_NICE_QUALITY</code> from shaders.</p></li>
<li><p>URP: Reverted behavior of intermediate texture .</p></li>
<li><p>URP: Updated the "Add Renderer Feature" menu to support filtering.</p></li>
<li><p>UTR: Changed to run playmode tests on ios on macOS 10.14.</p></li>
<li><p>Version Control: Moved Plastic Package settings to the Unity Project Settings window.<br></p>

<ul>
<li>Refined styling for the Updating Workplace success state.<br></li>
<li>Updated the text for the empty state and the overview bar.<br></li>
<li>Removed thr Incoming Changes notification from empty state.<br></li>
<li>Updated the text for Forced Checkout option.<br></li>
<li>Refined the status overlay icons.<br></li>
<li>Updated the refresh icon on the toolbar.<br></li>
<li>Updated the texts for empty checkin message dialog.</li>
</ul></li>
<li><p>Version Control: Updated file overlay icon size to adapt to project window zoom level and updated the styling of number of items in a category in Gluon incoming changes view.</p></li>
<li><p>Version Control: Updated the checkin comment box to keep the last comment after a checkin error.</p></li>
<li><p>XR: Added warning if stereo projection matrices are accessed before they have been set.</p></li>
<li><p>XR: Removed deprecated package <code>com.unity.xr.arkit-face-tracking</code> from AR Feature Set. The APIs from ARKit Face Tracking package has been moved to ARKit package.</p></li>
<li><p>XR: The Oculus XR Plugin package has been updated to 3.2.1 with support for Quest Pro.</p></li>
</ul>

<h4>Fixes</h4>

<ul>
<li><p>2D: Added 2D Triangle default asset to replace missing place holder.
(DANB-125)</p></li>
<li><p>2D: Allowed user MaterialPropertyBlock values for secondary textures to override values declared in the Texture asset.
(<a href="https://issuetracker.unity3d.com/issues/2d-tilemap-mask-texture-is-not-overridden-when-using-setpropertyblock-on-tilemap-renderer">1398241</a>)</p></li>
<li><p>2D: Fixed an issue where the Sprite field in the SpriteRenderer would not be assigned after creating Sprite keys in an Animation Clip.
(1396423)</p></li>
<li><p>2D: Fixed an issue with sprites where negative x or y scaling would cause normal maps to be flipped when using the 2D renderer.
(<a href="https://issuetracker.unity3d.com/issues/urp-2d-normals-maps-are-flipped-when-the-sprites-scale-is-flipped-from-slash-to-negative">1339571</a>)</p></li>
<li><p>2D: Fixed asset previews for Tilemap Prefabs by not stripping away the Grid Component when generating the asset preview.
(<a href="https://issuetracker.unity3d.com/issues/tile-palette-prefab-preview-does-not-show-the-correct-image">UUM-2503</a>)</p></li>
<li><p>2D: Fixed case of duplicate instantiated GameObjects from Tiles on Tilemap Prefabs when instantiating the Tilemap Prefabs.
(<a href="https://issuetracker.unity3d.com/issues/instantiating-tilemap-that-has-rule-tile-with-default-gameobject-set-creates-extra-copy-of-gameobject-at-00-0-in-builds-1">UUM-1671</a>)</p></li>
<li><p>2D: Fixed case where <em>Importer generated inconsistent result</em> warning is displayed when importing Texture2D with <code>AlphaSource == None &amp;&amp; GeneratePhysicsShape == true</code>.
(<a href="https://issuetracker.unity3d.com/issues/importer-generated-inconsistent-result-warning-is-thrown-when-reimporting-a-texture-2d-that-has-the-alpha-source-set-to-none">1382730</a>)</p></li>
<li><p>2D: Fixed case where <em>Inconsistent result</em> warning when reimporting Sprite by calling <code>Sprite.overrideGeometry()</code>.
(<a href="https://issuetracker.unity3d.com/issues/calling-sprite-dot-overridegeometry-when-reimporting-sprite-triggers-inconsistent-result-warning">1389297</a>)</p></li>
<li><p>2D: Fixed case where SpriteAtlasImporterInspector and SpriteAtlasInspector causes errors when entering play mode.
(1381553)</p></li>
<li><p>2D: Fixed case where StackOverflowException is thrown when packing Sprite Atlas.
(<a href="https://issuetracker.unity3d.com/issues/2d-sprite-atlas-stackoverflowexception-error-appear-when-packing-a-sprite-atlas">1360667</a>)</p></li>
<li><p>2D: Fixed error for ITilemap.Finalize.</p></li>
<li><p>2D: Fixed memory leak with the TilemapCollider2D when used with a CompositeCollider2D.
(UUM-15822)</p></li>
<li><p>2D: Fixed regression where GameObjects are not instantiated by Tiles when the Tilemap is not active.
(<a href="https://issuetracker.unity3d.com/issues/tilemap-dot-settiles-doesnt-work-when-the-gameobject-is-deactivated">UUM-14293</a>)</p></li>
<li><p>2D: Fixed SortingGroup status when a Renderer is disabled, reparented while disabled and enabled.
(<a href="https://issuetracker.unity3d.com/issues/sprites-displayed-incorrectly-when-unparenting-a-gameobject-with-a-disabled-spriterenderer-enabling-it-and-changing-sorting-layer">1390888</a>)</p></li>
<li><p>2D: Fixed undesired behaviour when chaging SpriteRenderer's drawmode property via SerializedProperty.
(1376189)</p></li>
<li><p>2D: Prevented the use of GameObjects with <code>HideFlags.NotEditable</code> as the Active Tilemap for <code>GridBrush</code>.
(<a href="https://issuetracker.unity3d.com/issues/hideflags-is-not-working-when-compilation-is-finished">1416421</a>)</p></li>
<li><p>2D: Removed the border value in Square default asset.
(<a href="https://issuetracker.unity3d.com/issues/square-sprite-border-changes-to-4px-after-converting-it-to-single-mode">1397357</a>)</p></li>
<li><p>2D: When a recursive depth from instantiating GameObjects using a Tilemap Tile reaches a threshold, an error message is now logged and the recursive loop is stopped in the Editor or in Development Players.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-painting-tiles-using-the-tilemap-editor">UUM-8380</a>)</p></li>
<li><p>AI: Colliders set as trigger are excluded from NavMesh generation.
(<a href="https://issuetracker.unity3d.com/issues/trigger-volumes-are-included-in-nav-mesh-generation-for-navmeshsurface-when-geometry-is-set-to-physics-colliders">UUM-10109</a>)</p></li>
<li><p>AI: Patches of the generated NavMesh were sometimes getting the area type from distant objects below due to their connection through a sloped wall.
(<a href="https://issuetracker.unity3d.com/issues/navmesh-modifiers-influence-navmesh-areas-far-above-them-on-asset-edges-when-using-notwalkable-or-water-modifier">UUM-3457</a>)</p></li>
<li><p>Android: Added proper support for Stylus in the new input system. Previously Pen was reported as mouse, now it should be reported as Pen.</p></li>
<li><p>Android: Allowed any file to be selected as keystore.
(<a href="https://issuetracker.unity3d.com/issues/keystore-file-is-not-recognized-by-editor-when-keystore-has-any-other-extension-than-keystore">1398997</a>)</p></li>
<li><p>Android: Changed boost documentation and timing values in the simulator to reflect the boost mode timing of 10s instead of the previous 15 seconds as it changes on the driver side.</p></li>
<li><p>Android: Changed bottleneck profiler colors to reflect warning states correctly.</p></li>
<li><p>Android: Fixed a potential app store validation issue related to a QueryIntentActivities() call when initializing the engine.</p></li>
<li><p>Android: Fixed an intermittent issue with manual lifetime tests failing.</p></li>
<li><p>Android: Fixed an issue with scaler not being initialized with settings from the Editor UI properly when using profiles.</p></li>
<li><p>Android: Fixed an issue with scaler types getting stripped out when building with IL2CPP.</p></li>
<li><p>Android: Fixed an issue with the test provider and settings showing up in Project Settings.</p></li>
<li><p>Android: Fixed Android build failure when Windows Display Language is set to Thai.
(1413080)</p></li>
<li><p>Android: Fixed crash if Java proxy is invoked at the same time as Unity is quit.
(UUM-15968)</p></li>
<li><p>Android: Fixed error 'Source directory '....'. is not a directory when Symlink Sources option is on.
(<a href="https://issuetracker.unity3d.com/issues/android-error-unitylibrary-compiledebugkotlin-in-the-android-studio-when-project-exported-with-symlink-sources-enabled">1379917</a>)</p></li>
<li><p>Android: Fixed frequency change error case (e.g. when boost is activated). Does not retry every frame. Manual retry is required.</p></li>
<li><p>Android: Fixed issue whereby executing an Android SDK tool command would fail with a missing java error. Additionally added printed environment variables to help identify/debug similar issues.
(UUM-2106)</p></li>
<li><p>Android: Fixed memory leak in WebCamTexture when using OpenGL ES.
(<a href="https://issuetracker.unity3d.com/issues/android-memory-leak-when-repeatedly-stopping-and-playing-webcamtexture-on-specific-devices">1319089</a>)</p></li>
<li><p>Android: Fixed opening TouchScreenKeyboard when one already exists with different parameters. Now it reopens the keyboard if parameters are different.
(<a href="https://issuetracker.unity3d.com/issues/android-ui-toolkit-the-input-field-text-dont-change-according-to-parameters-when-navigating-between-different-input-fields">1381845</a>)</p></li>
<li><p>Android: Fixed overhead of memory allocations in the Vulkan backend for allocation sizes between 128kB and 1024kB.
(UUM-5966)</p></li>
<li><p>Android: Fixed ReadPixels for RGBA half formats and realtime GI on Mali using ES 2.0.
(1396036)</p></li>
<li><p>Android: Fixed regression where TouchScreenKeyboard.Open() was not opening.
(<a href="https://issuetracker.unity3d.com/issues/tmp-android-keyboard-doesnt-show-up-when-touchscreenkeyboard-dot-open-function-is-called-on-an-android-device">UUM-2112</a>)</p></li>
<li><p>Android: Fixed simulator where temperature level and trend would not get updated when thermal action was updated.</p></li>
<li><p>Android: Fixed so that the AAB size warning in Unity editor displays base module size and total install size separately when those sizes are different.
(1361085)</p></li>
<li><p>Android: Fixed the long compile times in shader warmup issue on Android with OpenGL EX by using fixed instancing batch size on PowerVR GPU.
(<a href="https://issuetracker.unity3d.com/issues/shader-variants-causes-freeze-on-android-devices-with-powervr-gpu-when-gpu-instancing-is-enabled">UUM-739</a>)</p></li>
<li><p>Android: Fixed the new Input System's Keyboard class so it treats Button Start button clicks as <code>Key.Enter</code>.</p></li>
<li><p>Android: Fixed the new Input System's Keyboard class so it treats DPad Center button clicks as <code>Key.Enter</code>.
(<a href="https://issuetracker.unity3d.com/issues/input-system-unity-does-not-register-amazon-fire-tv-remotes-d-pad-center-button-press">1361325</a>)</p></li>
<li><p>Android: Fixed <code>Screen.safeArea</code> calculations.
(UUM-3972)</p></li>
<li><p>Android: Removed <code>styles*.xml</code> files from launcher module, since styles.xml are only used by unityLibrary <code>AndroidManifest.xml</code>.</p></li>
<li><p>Android: Updated Gradle build configuration to include hidden files and folders into APK, when Gradle builds.
(<a href="https://issuetracker.unity3d.com/issues/hidden-files-in-streamingassets-folder-are-not-included-in-builds-for-android-but-included-for-other-platforms">1382574</a>)</p></li>
<li><p>Android: Workaround for crash for many PowerVR based devices.
(<a href="https://issuetracker.unity3d.com/issues/android-urp-project-crashes-when-built-on-a-device-with-powervr-rogue-ge8320-gpu">UUM-7782</a>)</p></li>
<li><p>Animation: Added back old method signature for backward compatibility.
(<a href="https://issuetracker.unity3d.com/issues/animancer-is-throwing-missingmethodexception-errors-when-entering-play-mode-in-the-animancer-scenes">1366425</a>)</p></li>
<li><p>Animation: Enabled supporting clips with animation bindings on enum inside structs.
(<a href="https://issuetracker.unity3d.com/issues/enum-of-struct-returns-as-float-rather-than-int-when-used-as-animated-property">UUM-11386</a>)</p></li>
<li><p>Animation: Fixed a bug where so when you rename an event function name, it keeps the event's string value.
(<a href="https://issuetracker.unity3d.com/issues/animation-event-string-value-disappears-when-renaming-the-function">1423966</a>)</p></li>
<li><p>Animation: Fixed an issue when creating events inside events using animation legacy, crashing the application.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-an-animationevent-is-created-via-script-and-played-by-a-legacy-animation">1390997</a>)</p></li>
<li><p>Animation: Fixed Animation Window workflows not working for nested avatar root transforms.
(<a href="https://issuetracker.unity3d.com/issues/animator-with-nested-avatar-root-show-missing-properties-in-the-animation-window">1395685</a>)</p></li>
<li><p>Animation: Fixed bug where clip with only one pose computed a speed value of NaN.
(<a href="https://issuetracker.unity3d.com/issues/blend-tree-motions-threshold-values-are-nan-and-motions-background-is-transparent-when-compute-thresholds-is-set-to-speed">1410826</a>)</p></li>
<li><p>Animation: Fixed modifying property value fields in the animation window when recording candidates.
(<a href="https://issuetracker.unity3d.com/issues/animation-window-value-dragging-gets-stuck-if-value-was-previosuly-changed-via-the-inspector">1382193</a>)</p></li>
<li><p>Animation: Fixed multiple errors are thrown when resizing the Inspector while the Texture Sheet Animation Module is expanded.
(<a href="https://issuetracker.unity3d.com/issues/multiple-errors-are-thrown-when-resizing-the-inspector-while-the-texture-sheet-animation-module-is-expanded">1409813</a>)</p></li>
<li><p>Animation: Fixed the ArgumentOutOfRange exception when you select a transition that leads to an exit state in the Animator Controller.
(1393085)</p></li>
<li><p>Animation: Fixed <code>AnimationClip.EnsureQuaternionContinuity</code> on clips with keyframes too close together.
(<a href="https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-dot-dot-dot-error-is-thrown-when-calling-ensurequaternioncontinuity-on-animationcurves">1365995</a>)</p></li>
<li><p>Animation: Prevented generating Prefab overrides when you animate a value on a Prefab instance.
(<a href="https://issuetracker.unity3d.com/issues/animating-a-value-on-a-prefab-instance-generates-prefab-overrides">1279845</a>)</p></li>
<li><p>Animation: Stopped negative discrete integer values being removed from the animation clip.
(<a href="https://issuetracker.unity3d.com/issues/negative-discrete-int-deletes-key">1395978</a>)</p></li>
<li><p>Asset Bundles: Fixed issue where empty folders remain in the cache.
(<a href="https://issuetracker.unity3d.com/issues/empty-folders-are-left-when-the-cache-is-cleaned">UUM-15702</a>)</p></li>
<li><p>Asset Bundles: Fixed performance caused by overreading LZMA AssetBundles when they are embedded in a larger file.
(<a href="https://issuetracker.unity3d.com/issues/android-loading-assetbundle-from-install-time-aab-is-about-2-times-slower-than-loading-from-streamingassets">1332021</a>)</p></li>
<li><p>Asset Bundles: Refactored out the requiresTextureCompression boolean flag.<br>
The texture compression setting is now set internally from either the existing EditorPrefs setting kCompressTexturesOnImport or checking if the BuildPipeline build is in progress.
(UUM-3653)</p></li>
<li><p>Asset Import: Amended documentation of OnPostprocessMaterial, OnPreprocessMaterialDescription and ModelImporter.materialImportMode to make it clear in which case each AssetPostprocessor is used.
(<a href="https://issuetracker.unity3d.com/issues/fbx-onpostprocessmaterial-isnt-called-when-material-creation-mode-is-materialdescription">1360614</a>)</p></li>
<li><p>Asset Import: AssetImportContext.AddObjectToAssets does not work in AssetPostprocessor methods.</p></li>
<li><p>Asset Import: Changed so FBX files with a broken skeleton do not crash the importer.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-importing-an-fbx-asset">1384314</a>)</p></li>
<li><p>Asset Import: Fixed <strong>ScriptedImporters</strong> so it doesn't leak <strong>Allocator.Temp</strong> allocated memory when you use it on the asset import worker.</p></li>
<li><p>Asset Import: Fixed an issue where animationClips references can be lost when adding and renaming clips in the ModelImporter inspector.
(<a href="https://issuetracker.unity3d.com/issues/some-references-of-animation-clip-are-missing-in-prefab-when-referenced-file-guid-slash-fileid-is-present-in-project">1359229</a>)</p></li>
<li><p>Asset Import: Fixed an issue where the ModelImporter would needlessly re-import when referencing a texture outside of its Textures folder and this texture was modified.
(<a href="https://issuetracker.unity3d.com/issues/assetdb-strange-import-dependencies-between-textures-fbx-files-and-textureimporter">1381009</a>)</p></li>
<li><p>Asset Import: Fixed intermittent Accelerator client disconnect on Linux caused by unhandled error codes.
(<a href="https://issuetracker.unity3d.com/issues/intermittent-disconnection-from-the-cache-server-when-reimporting-an-asset">1385441</a>)</p></li>
<li><p>Asset Import: Fixed issue at import time where a failing ScriptedImporter could leak GameObjects in the active scene.
(1334618)</p></li>
<li><p>Asset Import: Fixed multiple issues with the Apply/Revert/Cancel popup when you edit importer settings.
(1356748)</p></li>
<li><p>Asset Import: Fixed out of bounds exception on empty array access when importing SpeedTree billboards with no mesh data.
(UUM-8950)</p></li>
<li><p>Asset Import: Fixed rare missing texture dependency on Models when the texture is in an embedded package.
(1383474)</p></li>
<li><p>Asset Import: Fixed so that if you select <strong>Apply</strong> after you edit the <code>ScriptedImporterEditor</code> settings when you use serialized files in ScriptedImporter triggers reimport.
(1422966)</p></li>
<li><p>Asset Import: Fixed so that newly created GameObject Tags are serialized to <code>TagManager.asset</code> file.
(<a href="https://issuetracker.unity3d.com/issues/newly-created-gameobject-tags-are-not-serialized-to-tagmanager-dot-asset-file">1396727</a>)</p></li>
<li><p>Asset Import: Fixed the Inspector Model Preview so that orientation isn't reversed when you enable Bake Axis Conversion.
(<a href="https://issuetracker.unity3d.com/issues/inspector-model-preview-orientation-is-reversed-when-bake-axis-conversion-is-enabled">1364821</a>)</p></li>
<li><p>Asset Import: Fixed the missing <strong>Update referenced clips</strong> button in the Model Importer.
(1423207)</p></li>
<li><p>Asset Import: Fixed <code>OnPostprocessGameObjectWithUserProperties</code> so it's called when you use <code>extraUserProperties</code>.
(<a href="https://issuetracker.unity3d.com/issues/onpostprocessgameobjectwithuserproperties-isnt-called-when-setting-extrauserproperties">1394085</a>)</p></li>
<li><p>Asset Import: Made the accelerator cache server respect the upload and download settings in Project settings when you use Parallel Import.
(<a href="https://issuetracker.unity3d.com/issues/cacheserver-data-is-uploaded-to-cacheserver-even-while-upload-and-download-are-disabled-in-project-settings">1372865</a>)</p></li>
<li><p>Asset Import: Textures passed to AssetPostprocessor methods have no name.</p></li>
<li><p>Asset Pipeline: Asset preview thumbnails in the Editor's project window would sometimes be missing reflection probe lighting, this has been fixed and re-baking reflection probes (after making some change, such as to the material) will update thumbnails.
(<a href="https://issuetracker.unity3d.com/issues/mesh-is-untextured-in-the-project-browser">UUM-1820</a>)</p></li>
<li><p>Asset Pipeline: Changed the  ModelImporterPostProcessor to use new API to query importer type efficiently.
(1404202)</p></li>
<li><p>Asset Pipeline: Changed the Default Shader to depend on the GUID and fileID of the Shader rather than on the name of the shader.
(<a href="https://issuetracker.unity3d.com/issues/getdefaultshader-custom-dependency-does-not-update-correctly-when-adding-a-shader-named-standard-in-the-project">1309217</a>)</p></li>
<li><p>Asset Pipeline: Fixed <strong>learn more</strong> online documentation links for asset import workers and Unity Accelerator in the editor UI, so they target the currently loaded version of Unity.
(<a href="https://issuetracker.unity3d.com/issues/four-learn-more-links-direct-to-default-2020-dot-3-manual-version-instead-of-using-current-editor-version">1395653</a>)</p></li>
<li><p>Asset Pipeline: Fixed a bug where subsequent builds or manually-selected script only builds could result in incorrect code stripping.</p></li>
<li><p>Asset Pipeline: Fixed an issue where calling Resources.Load() during [InitializeOnLoad] could affect the result of calling it again in a postprocess callback.
(<a href="https://issuetracker.unity3d.com/issues/resources-dot-load-returns-false-in-onpostprocessallassets-when-the-asset-was-externally-changed-and-loaded-in-initializeonload">1362489</a>)</p></li>
<li><p>Asset Pipeline: Fixed an issue where calling <code>ClearImporterOverride()</code> could cause unexpected value changes in the original importer.
(1340382)</p></li>
<li><p>Asset Pipeline: Fixed an issue where generating previews of some prefabs could raise an 'unknown importer' error in the console.
(<a href="https://issuetracker.unity3d.com/issues/asset-importer-errors-on-the-initial-import-of-prefabs">1397386</a>)</p></li>
<li><p>Asset Pipeline: Fixed an issue where renaming a prefab or prefab variant with unsaved changes would discard the changes.
(1333623)</p></li>
<li><p>Asset Pipeline: Fixed an issue where scripts are not recompiled if changes are made while the Build Settings Build folder select window is open.
(<a href="https://issuetracker.unity3d.com/issues/scripts-are-not-recompiled-when-the-script-changes-are-made-while-the-build-settings-build-folder-select-window-is-open">1337602</a>)</p></li>
<li><p>Asset Pipeline: Fixed an issue where the asset database might fail to detect that custom postprocessing of assets had produced an infinite loop during project import.
(<a href="https://issuetracker.unity3d.com/issues/infinite-loop-not-detected-when-importing-shadergraph-assets">1378193</a>)</p></li>
<li><p>Asset Pipeline: Fixed an issue where the Inspector could incorrectly prompt users to fix the main object name of PlayerSettings.
(<a href="https://issuetracker.unity3d.com/issues/android-building-a-project-where-product-name-starts-with-a-number-results-in-fix-object-name-button-which-does-not-respond">1363626</a>)</p></li>
<li><p>Asset Pipeline: Fixed crash that could happen when mono script is used before mono scripts are registered.
(1396595)</p></li>
<li><p>Asset Pipeline: Fixed crash where "VirtualArtifacts/Primary/ could not be found" message would appear when reimporting all assets in project.
(1376593)</p></li>
<li><p>Asset Pipeline: Fixed deadlock in accelerator client when cancelling request during '-quit'.
(<a href="https://issuetracker.unity3d.com/issues/deadlock-during-shutdown-while-uploading-assets-to-accelerator">UUM-4004</a>)</p></li>
<li><p>Asset Pipeline: Fixed issue when either the SourceAssetDB or the ArtifactDB could not be deleted and the project would never open.
(1388489)</p></li>
<li><p>Asset Pipeline: Fixed issue with material preview not updating when a shader is modified.
(1371756)</p></li>
<li><p>Asset Pipeline: Fixed missing OnWillCreateAsset callbacks for scenes and assets generated from templates.
(<a href="https://issuetracker.unity3d.com/issues/assetmodificationprocessor-dot-onwillcreateasset-callbacks-are-inconsistent-with-different-assets">1163684</a>)</p></li>
<li><p>Asset Pipeline: Fixed of tests failing due to parallel importer.</p></li>
<li><p>Asset Pipeline: Fixed regression for enter play mode when testing with the Lost Crypt (Fix 1 out of 3).</p></li>
<li><p>Asset Pipeline: Fixed so the directory monitor is used on Startup.
(1403080)</p></li>
<li><p>Asset Pipeline: Fixed spritesheet and other previews not being updated in project browser sometimes.
(UUM-2811)</p></li>
<li><p>Asset Pipeline: Improved the speed of <code>PluginManager::RefreshPlugins</code> and <code>MonoManager::InitializeScripts</code> at startup.
(1403626)</p></li>
<li><p>Asset Pipeline: Optimized Project Startup time.
(1403075)</p></li>
<li><p>Asset Pipeline: Re-factored the load asset management sub-system to fix a scalability issue that caused the import time to increase when a large scene with many objects was loaded.
(<a href="https://issuetracker.unity3d.com/issues/performance-possible-preformance-regression-between-2021-dot-1-and-2021-dot-2">1371439</a>, 1410544)</p></li>
<li><p>Asset Pipeline: Reduced time taken to EnterPlayMode by more selectively clearing AssetDatabase's resolver cache.
(<a href="https://issuetracker.unity3d.com/issues/slowdown-of-entering-play-mode-in-lost-crypt-project">1355830</a>)</p></li>
<li><p>Asset Pipeline: Removed the option to <strong>Recompile after finished playing</strong> and added a new option to  only auto refresh outside playmode.
(<a href="https://issuetracker.unity3d.com/issues/a-false-pup-up-appears-when-modifying-a-script-and-having-recompile-after-finished-playing-set">1325047</a>)</p></li>
<li><p>Audio: Added new functions to prevent cycle of enum value -&gt; ToString -&gt; enum value in the Audio Importer API.
(1379835)</p></li>
<li><p>Audio: Fixed a crash when passing a null argument to AudioMixer.SetFloat.
(<a href="https://issuetracker.unity3d.com/issues/unity-crashes-when-audiomixer-dot-setfloat-name-parameter-is-null">1375980</a>)</p></li>
<li><p>Audio: Fixed Audio Clip Import Settings not getting saved when the "Override for Dedicated Server" setting is enabled.
(<a href="https://issuetracker.unity3d.com/issues/audio-clip-import-settings-do-not-get-saved-when-the-override-for-dedicated-server-setting-is-enabled">UUM-399</a>)</p></li>
<li><p>Audio: Fixed audio mixer groups not visible from the packages.
(<a href="https://issuetracker.unity3d.com/issues/audio-mixer-groups-are-not-displayed-in-object-picker-when-located-in-a-package">UUM-369</a>)</p></li>
<li><p>Audio: Fixed AudioClipPlayable.IsDone is false when AudioClipPlayable.Seek is used to reset the time.
(<a href="https://issuetracker.unity3d.com/issues/audioclipplayable-dot-isdone-is-false-when-audioclipplayable-dot-seek-is-used-to-reset-the-time">UUM-398</a>)</p></li>
<li><p>Audio: Fixed issue with Audio Echo Filter component Delay value not being able to be keyframed when animating it in the Animation Window.
(<a href="https://issuetracker.unity3d.com/issues/audio-echo-filter-component-delay-value-cannot-be-keyframed-when-animating-it-in-the-animation-window">1364384</a>)</p></li>
<li><p>Audio: Fixed the inconsistency warning messages when you reimport audio files with AAC and Vorbis compression formats.
(<a href="https://issuetracker.unity3d.com/issues/webgl-macos-reimporting-audio-assets-throws-importer-audioimporter-generated-inconsistent-result-for-asset-warnings">1398220</a>)</p></li>
<li><p>Audio: Fixed unexpected output from OnAudioFilterRead when the audio source is stopped and the 'spatialize' property is enabled.
(<a href="https://issuetracker.unity3d.com/issues/stopped-audio-souce-outputs-audio-when-the-spatialize-property-is-enabled">UUM-6318</a>)</p></li>
<li><p>Audio: Updated the doc for streaming and compressed audio clips within <code>DownloadHandledAudioClip</code> that streaming supersedes audioclip compression.
(<a href="https://issuetracker.unity3d.com/issues/ios-downloadhandleraudioclip-streamaudio-ignores-compression">1278567</a>)</p></li>
<li><p>Bug Reporter: Fixed the crash reporter text button when the screen is scaled.
(<a href="https://issuetracker.unity3d.com/issues/linux-crash-reporter-window-is-so-small-that-text-logo-and-buttons-get-truncated-and-layered-over-each-other">1415600</a>)</p></li>
<li><p>Build Pipeline: Fixed a regression introduced that prevented referencing built-in data.
(1393827)</p></li>
<li><p>Build Pipeline: Fixed an Editor crash when you open it with <code>-standaloneBuildSubtarget Server</code> CLI.</p></li>
<li><p>Build Pipeline: Fixed an issue causing erroneous warnings during the build pipeline.
(<a href="https://issuetracker.unity3d.com/issues/ios-unfreed-allocation-errors-thrown-in-console-when-executing-build-and-run-with-ios-platform">1358453</a>)</p></li>
<li><p>Build Pipeline: Fixed edge case passing in missing or deleted objects could crash the Editor during the build.</p></li>
<li><p>Build Pipeline: Fixed edge case where built scenes could pull in unused data when components are hide flagged DontSaveInBuild.
(<a href="https://issuetracker.unity3d.com/issues/assets-still-included-in-build-when-hideflags-dot-dontsaveinbuild-is-used">1287614</a>)</p></li>
<li><p>Build Pipeline: Fixed edge case where isDebugBuild would not revert to true after the build.</p></li>
<li><p>Build Pipeline: Fixed errors about Microphone or Camera usage failing mac player builds not showing in the editor console correctly.
(<a href="https://issuetracker.unity3d.com/issues/macos-build-fails-with-command-failing-to-write-to-output-file-when-using-3rd-party-plugin">1422084</a>)</p></li>
<li><p>Build Pipeline: Fixed stack overflow crash when Builds with Resource folders contains very large prefabs or models.</p></li>
<li><p>Build Pipeline: Fixed static batching sorting to ensure deterministic build results.
(UUM-11427)</p></li>
<li><p>Build Pipeline: Fixed <code>PlayerBuildInterface.ExtraTypesProvider</code> API not working.</p></li>
<li><p>Build System: Added a back deadlock workaround for <code>bee_backend</code>/unix.</p></li>
<li><p>Build System: Fixed <code>ProjectFile</code> dependency breakage for source code customers.</p></li>
<li><p>Burst: Added workaround for "cannot dlopen until fork() handlers have completed" issue seen in macOS 12.3.</p></li>
<li><p>Burst: Burst will now correctly handle projects with paths containing semi-colon (;) characters.
(UUM-8322)</p></li>
<li><p>Burst: Fixed a bug that manifested when using IAP in UWP builds with Burst - we were scanning the assembly hierarchy too deep for Bursted types, which led to an <code>AssemblyResolutionException</code>.</p></li>
<li><p>Burst: Fixed a bug with <code>Span</code> and <code>ReadOnlySpan</code> types where if the indices used were not already 32-bit signed integers, an internal compiler error would occur if running with safety checks enabled.</p></li>
<li><p>Burst: Fixed a compiler crash if users used <code>__refvalue</code> or <code>__arglist</code> in Burst. Neither of these are supported, but now we will nicely tell you via a compiler error that they aren't supported.</p></li>
<li><p>Burst: Fixed a compiler error when trying to acquire the function pointer of a generic function from Bursted code.</p></li>
<li><p>Burst: Fixed a crash when you used a function only through a C# function pointer.</p></li>
<li><p>Burst: Fixed a really convoluted bug that could manifest in Burst returning out of date cached libraries, which would manifest as random exceptions in Burst jobs/function-pointers (users deleting the BurstCache would workaround the bug).</p></li>
<li><p>Burst: Fixed a regression where out parameters of C# 9.0 function pointers weren't working in Burst.</p></li>
<li><p>Burst: Fixed bug in static constructor ordering in the presence of indirect dependencies between static constructors (i.e. static constructor -&gt; static method -&gt; static constructor) that could result in a runtime crash.</p></li>
<li><p>Burst: Fixed bug where disabling native debug mode, after having previously enabled it in the same editor session, didn't in fact disable native debug mode.</p></li>
<li><p>Burst: Fixed Burst in macOS Standalone Xcode player builds.</p></li>
<li><p>Burst: Fixed burst inspector sometimes stalling during loading for script reloads.</p></li>
<li><p>Burst: Fixed compiler crash when the only usage of a static field was in a formatted exception string.</p></li>
<li><p>Burst: Fixed compiler crash when trying to dynamically call <code>BurstCompiler.CompileFunctionPointer</code>  in Burst-compiled code.</p></li>
<li><p>Burst: Fixed hashing bug that could occur when a function pointer type is used in a method parameter.</p></li>
<li><p>Burst: Fixed hashing error that could occur in the presence of multiple synthesized explicit interface implementations with the same name and signature.</p></li>
<li><p>Burst: Fixed internal compiler error when encountering a <code>calli</code> with closed generics.</p></li>
<li><p>Burst: Fixed some ARM branch instructions not being processed as such.</p></li>
<li><p>Burst: Whitespace changes in ILPP'd assemblies would not be detected.</p></li>
<li><p>Core: Asset import workers will no longer inherit open handles from the main editor causing trouble rebinding network sockets.
(UUM-939)</p></li>
<li><p>Core: Changed player auto connect so it only attempt to connect to the editor once.
(1268896)</p></li>
<li><p>Core: Fixed issue where player did not multicast when BuildOptions.ConnectToHost was used.
(1248301)</p></li>
<li><p>Core: Improved logging when connecting thru USB to device that do not have running player.
(<a href="https://issuetracker.unity3d.com/issues/profiler-failed-to-connect-to-player-error-is-thrown-when-trying-to-connect-to-a-closed-player">1297201</a>)</p></li>
<li><p>Core: Removed disposed <code>NativeArray</code> and <code>NativeSlice</code> check when you iterate or access properties like Length due to a performance regression when collections checks are enabled.</p></li>
<li><p>Documentation: Added documentation for <code>UWP.UserBuildSettings</code> and all its members.
(1389305)</p></li>
<li><p>Documentation: Fixed misleading information for <code>ModifiableContactPair.SetPoint()</code>.</p></li>
<li><p>Documentation: Updated HDRP raytracing docs to clarify that the new RenderMesh API is not compatible with raytracing.</p></li>
<li><p>DX12: Fixed crash that can occur when you call <code>ComputeBuffer.GetData()</code> with a non zero <code>computeBufferStartIndex parameter</code>.
(1424644)</p></li>
<li><p>DX12: Fixed for crash when an upload subupdates buffer was assigned to a compute shader as a UAV.
(1425081)</p></li>
<li><p>Editor: Added a key shortcut to capture frame in RenderDoc.
(1427034)</p></li>
<li><p>Editor: Added a new Edit button for Light Probe UI.
(<a href="https://issuetracker.unity3d.com/issues/edit-light-probes-button-in-light-probe-group-component-is-squished">UUM-919</a>)</p></li>
<li><p>Editor: Added missing color formats to the RenderTexture inspector.
(1353837)</p></li>
<li><p>Editor: Added on-hover tooltips to the <strong>Project Settings &gt; Graphics &gt; Tier Settings</strong> options.
(<a href="https://issuetracker.unity3d.com/issues/editor-tooltips-are-missing-for-all-properties-under-tier-setting-window">1264509</a>)</p></li>
<li><p>Editor: Added retina support for the Editor Launch Screen.</p></li>
<li><p>Editor: Added the option to set something as the first child of the root.
(<a href="https://issuetracker.unity3d.com/issues/a-prefabs-child-gameobject-cant-be-dropped-to-the-top-position-in-prefab-mode-when-a-long-blue-separator-appears">1413568</a>)</p></li>
<li><p>Editor: Added warning log when the size of a Sprite in a Secondary Texture used in a Sprite Atlas does not match its size in the Main Texture.
(<a href="https://issuetracker.unity3d.com/issues/the-normal-map-on-the-tilemap-stops-working-after-pressing-the-play-button">UUM-11164</a>)</p></li>
<li><p>Editor: Allow parsing of expression with explicit AND operator in the Query Builder.
(<a href="https://issuetracker.unity3d.com/issues/search-applying-any-changes-to-operator-blocks-when-outside-of-query-builder-mode-breaks-them">1394738</a>)</p></li>
<li><p>Editor: Allowed you to change the fullscreen/maximization state in the on play behavior menu when PlayMode is paused.</p></li>
<li><p>Editor: Blocked the instantiation of variants with a broken or missing prefab parent.
(<a href="https://issuetracker.unity3d.com/issues/prefab-copies-are-generated-every-frame-and-exceptions-are-thrown-when-its-dragged-into-the-scene-view">1395769</a>)</p></li>
<li><p>Editor: Changed a label in the Multi-Display dropdown.
(1396139)</p></li>
<li><p>Editor: Changed so that FBX files that match the legacy  <code>@</code> naming convention are no longer added as referenced clips when the AnimationType is not 'legacy'.
(<a href="https://issuetracker.unity3d.com/issues/referencedclips-of-a-file-includes-the-guid-of-a-different-file-when-the-latter-has-the-same-beginning-of-name-with-at-symbol">1401419</a>)</p></li>
<li><p>Editor: Changed the constrain proportions scale toggle so you can set it using GetConstrainProportions() and SetConstrainProportions() from TransformUtils.</p></li>
<li><p>Editor: Changed the light map exposure panel icon from "LS" to the exposure icon.</p></li>
<li><p>Editor: Changed the World Transform copy and paste context menu name in the Inspector.
(<a href="https://issuetracker.unity3d.com/issues/copying-option-in-the-transform-component-copy-that-copies-all-the-global-transform-data-is-named-position-world">1399817</a>)</p></li>
<li><p>Editor: Enabled pasting individual Gradients and Colors to a <code>MinMaxGradient</code> field.
(<a href="https://issuetracker.unity3d.com/issues/a-gradient-can-not-be-pasted-by-clicking-on-the-label">1391971</a>)</p></li>
<li><p>Editor: Enabling shader keyword pre-filtering so that build process does not have to enumerate through full shader variant space. This fixes the issue of URP builds even with warm shader cache taking really long time. This fix does not reduce the time spent on actually compiling shaders.
(<a href="https://issuetracker.unity3d.com/issues/shader-variant-build-preparation-does-not-scale">UUM-3711</a>)</p></li>
<li><p>Editor: Ensure that if a searchquery with a tableConfig and no columns creates a default table view.
(<a href="https://issuetracker.unity3d.com/issues/search-legacy-search-query-doesnt-open-in-21-dot-2">1379874</a>)</p></li>
<li><p>Editor: Ensured that the <code>ShortcutManager</code> has access to all shortcuts on the first domain reload. This means if you register a callback in an <code>[InitializeOnLoad]</code> function, it doesn't break the shortcut manager display.
(<a href="https://issuetracker.unity3d.com/issues/shortcut-commands-in-main-menu-category-are-missing-when-using-shortcutbindingchanged-in-a-static-class-with-initializeonload">1384276</a>)</p></li>
<li><p>Editor: Fixed 'Cyclic Prefab nesting not supported' error to only show when relevant.
(<a href="https://issuetracker.unity3d.com/issues/cyclic-prefab-nesting-not-supported-error-window-is-thrown-when-trying-to-nest-two-sibling-prefab-variants">1395865</a>)</p></li>
<li><p>Editor: Fixed a crash that occurs when disconnecting and reconnecting a monitor when the editor is in full screen fullscreen on macOS.
(<a href="https://issuetracker.unity3d.com/issues/disconnecting-external-monitor-crashes-unity-editor-when-in-full-screen-mode-and-more-than-one-external-monitor-is-present">1356560</a>)</p></li>
<li><p>Editor: Fixed a crash when importing an invalid FBX file in which the vertex color wedge mapping mode is ill defined.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-importing-an-fbx-model-with-enone-wedge-mapping-mode">1394981</a>)</p></li>
<li><p>Editor: Fixed a crash when stop a playable director and evaluating at the same time in a notification output.
(<a href="https://issuetracker.unity3d.com/issues/crash-sigsev-in-playabledirector-dot-stop-nativecode-slash-directormanager-initializeclass">UUM-14640</a>)</p></li>
<li><p>Editor: Fixed a crash when using URP on some Adreno 6xx devices with shaders that use clip().
(<a href="https://issuetracker.unity3d.com/issues/crash-on-adreno-630-devices-when-using-shader-with-mixed-stencil">UUM-4367</a>)</p></li>
<li><p>Editor: Fixed a scaling issue in device simulator when the view is unmaximized.
(1330233)</p></li>
<li><p>Editor: Fixed Add Component not refreshing objects used to render the Selection Outline in the SceneView.
(1384736)</p></li>
<li><p>Editor: Fixed an issue causing C# serializable generic types to incorrectly contain data for editor only fields in serialized data when in a player context.</p></li>
<li><p>Editor: Fixed an issue in the Editor so newly selected mouse cursors set via script show even when you don't move the mouse.
(<a href="https://issuetracker.unity3d.com/issues/mousecursor-is-not-being-changed-if-using-eventype-dot-keydown">1396030</a>)</p></li>
<li><p>Editor: Fixed an issue where certain properties could not be excluded in the TextureImporterInspector.
(<a href="https://issuetracker.unity3d.com/issues/preset-some-properties-cannot-be-excluded-from-texture-importer-preset-through-the-inspector-window">UUM-3787</a>)</p></li>
<li><p>Editor: Fixed an issue where <code>TextureImporter.GetPlatformTextureSettings</code> would not perform fix-up on the platform string argument correctly.
(<a href="https://issuetracker.unity3d.com/issues/unable-to-get-textureoverridesettings-from-buildpipeline-dot-getbuildtargetname-when-trying-to-pass-in-the-platform-string">UUM-15361</a>)</p></li>
<li><p>Editor: Fixed bug where selecting the search field would not deselect the GameObject rename overlay.
(<a href="https://issuetracker.unity3d.com/issues/when-editing-an-object-name-in-the-hierarchy-window-it-is-impossible-to-change-the-hierarchy-search-field">1078881</a>)</p></li>
<li><p>Editor: Fixed case where Editor would crash when a selected renderer was deleted.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-the-play-mode-while-a-certain-gameobject-is-selected">UUM-3249</a>)</p></li>
<li><p>Editor: Fixed checkbox selection that is moving around if the number of dependencies is more than 4000. This also fixes a double scrollbar.
(1383757)</p></li>
<li><p>Editor: Fixed ColorUtility <code>darkblue</code> to  match the W3 standard, which should be #00008B.
(<a href="https://issuetracker.unity3d.com/issues/colorutility-dot-tryparsehtmlstring-parses-darkblue-as-number-0000a0-instead-of-number-00008b">1408463</a>)</p></li>
<li><p>Editor: Fixed constrain proportions scale to respect selected keyframe in the animation window.</p></li>
<li><p>Editor: Fixed crash in standalone profiler during shutdown.
(<a href="https://issuetracker.unity3d.com/issues/standalone-profiler-crash-in-rtlentercriticalsection-on-exit">UUM-13932</a>)</p></li>
<li><p>Editor: Fixed crash when calling EditorUtility.UnloadUnusedAssetsImmediate(false).
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-editorutility-dot-unloadunusedassetsimmediate-is-called">UUM-11648</a>)</p></li>
<li><p>Editor: Fixed crash with TilemapCollider2D when used with a CompositeCollider2D and a Tile with no Sprite with Collider Type Sprite is set.
(UUM-15912)</p></li>
<li><p>Editor: Fixed custom MenuItems to update when the priority is changed.
(<a href="https://issuetracker.unity3d.com/issues/cutom-menuitem-only-updates-the-editor-after-restart">1182282</a>)</p></li>
<li><p>Editor: Fixed deadlock scenario in shader compiler.
(UUM-14040)</p></li>
<li><p>Editor: Fixed diagnostic switches can not be set using command line arguments.
(UUM-10269)</p></li>
<li><p>Editor: Fixed dragging with hot key pressed on linux.
(<a href="https://issuetracker.unity3d.com/issues/linux-ghost-assets-are-left-in-the-scene-while-drag-and-dropping-prefabs-to-scene-while-holding-ctrl-key">UUM-1601</a>)</p></li>
<li><p>Editor: Fixed EditorUtility.DisplayDialog layout after showing dialog with a long text.
(<a href="https://issuetracker.unity3d.com/issues/macos-editorutility-dot-displaydialog-dialog-layout-gets-corrupted-after-displaying-a-17-plus-lines-477-plus-non-broken-characters-long-message">UUM-9447</a>)</p></li>
<li><p>Editor: Fixed error message referring to the wrong name of a function.
(1415893)</p></li>
<li><p>Editor: Fixed exception incorrectly reporting object already in pool when equal instances of classes implementing IEquatable&lt;T&gt; are released to ObjectPool.
(UUM-8083)</p></li>
<li><p>Editor: Fixed exceptions that arose due to editing multiple reorderable lists in multiple visible IMGUI inspectors.
(<a href="https://issuetracker.unity3d.com/issues/invalid-iteration-error-message-appears-when-adding-elements-to-the-list-through-multiple-inspectors-and-two-objects-selected">1399445</a>)</p></li>
<li><p>Editor: Fixed exceptions when assigning array size via array size field in ReorderableList inspector control.</p></li>
<li><p>Editor: Fixed exceptions when deleting array elements via keyboard.</p></li>
<li><p>Editor: Fixed floating windows becoming inaccessible on Windows when monitor setup changes.
(<a href="https://issuetracker.unity3d.com/issues/editor-windows-become-inaccesible-when-disabling-additional-monitors">1364970</a>)</p></li>
<li><p>Editor: Fixed focus on the search field when opening the settings window.
(1407464)</p></li>
<li><p>Editor: Fixed fullscreen play mode UI scaling incorrectly when changing the size or focusing the editor's suppressed non-fullscreen game view.
(1386415)</p></li>
<li><p>Editor: Fixed GameObjectChangeTracker not being able to detect GameObject sibling order change.</p></li>
<li><p>Editor: Fixed GetCachedIcon returning the incorrect icon in dark editor style when a custom icon was assigned to an asset that contained a dark version with the d_ prefix.</p></li>
<li><p>Editor: Fixed gizmo rendering of a selected area in a Hexagonal Grid with a non-zero Z position.
(UUM-11308)</p></li>
<li><p>Editor: Fixed handling of exceptions in CreateGUI that could cause the window to not open correctly.
(<a href="https://issuetracker.unity3d.com/issues/jsonutility-fails-to-update-object-references-when-running-the-test-on-standalone-build-and-using-instanceid">1342327</a>)</p></li>
<li><p>Editor: Fixed HDR color values are rounded when changing intensity.
(<a href="https://issuetracker.unity3d.com/issues/hdr-color-values-are-rounded-when-changing-intensity">1372353</a>)</p></li>
<li><p>Editor: Fixed incorrect DPI scale on startup causing game view icons to be pixelated at higher scale levels.
(1334355)</p></li>
<li><p>Editor: Fixed inspector and documentation to reflect intended behavior.
(<a href="https://issuetracker.unity3d.com/issues/urp-greyed-out-culling-mask-option-still-takes-effect-when-light-layers-are-enabled">UUM-2392</a>)</p></li>
<li><p>Editor: Fixed instabilities in <code>Unity.IntegrationTests.Builds.AssetBundleBuildLegactyReportTest</code> tests.
(1401332)</p></li>
<li><p>Editor: Fixed issue where IndexOutOfRangeException was thrown when inspecting an array of ExposedReferences.
(<a href="https://issuetracker.unity3d.com/issues/indexoutofrangeexception-is-thrown-when-increasing-the-size-of-an-exposedreference-array-in-the-inspector">1384423</a>)</p></li>
<li><p>Editor: Fixed lighting in a Material's asset thumbnail to be consistent before and after saving the scene.
(<a href="https://issuetracker.unity3d.com/issues/thumbnails-in-a-project-window-get-darker-after-saving-scene">1368973</a>)</p></li>
<li><p>Editor: Fixed LODGroup editor not updating immediately when changed.
(<a href="https://issuetracker.unity3d.com/issues/lods-array-is-not-updated-instantly-when-inserting-new-lods">UUM-5815</a>)</p></li>
<li><p>Editor: Fixed lost references to AnimationClips when the ModelImporter clips settings are modified for the first time.
(<a href="https://issuetracker.unity3d.com/issues/backport-assetimporter-updating-existing-animationclip-import-setting-results-in-a-new-internalid-and-lost-references-to-the-clip">UUM-2203</a>)</p></li>
<li><p>Editor: Fixed material duplication when source is a variant.
(<a href="https://issuetracker.unity3d.com/issues/material-variants-dont-apply-tint-when-using-mask-component">1392058</a>)</p></li>
<li><p>Editor: Fixed mesh Properties... display a blank window for built-in primitive Objects.
(<a href="https://issuetracker.unity3d.com/issues/mesh-inspector-showing-blank-window-for-built-in-primitive-meshes">1379780</a>)</p></li>
<li><p>Editor: Fixed mouse offset for dragging elements to the inspector on Linux.
(<a href="https://issuetracker.unity3d.com/issues/linux-dragging-script-to-inspector-doesnt-trigger-the-blue-indicator-when-dropping-between-components">UUM-1568</a>)</p></li>
<li><p>Editor: Fixed null reference exception in the FreeCamera component when there is no keyboard.
(UUM-17801)</p></li>
<li><p>Editor: Fixed NullReferenceException is thrown in Play mode when GO Properties window is open and the GO has certain Canvas components.
(<a href="https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-in-play-mode-when-ui-gameobject-properties-window-is-open">1371833</a>)</p></li>
<li><p>Editor: Fixed Object Selector not changing position when called from another window.
(<a href="https://issuetracker.unity3d.com/issues/object-picker-field-get-repainted-but-doesnt-change-place-when-called-from-another-window">1407423</a>)</p></li>
<li><p>Editor: Fixed occasional crash when loading TIFFs with bad thumbnail tags.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-on-freeimage-makethumbnail-after-importing-tif-file">UUM-3783</a>)</p></li>
<li><p>Editor: Fixed OnDrawGizmos is not called on child GOs to an empty parent.
(1394023)</p></li>
<li><p>Editor: Fixed performance issue for looping small clip with root motion extraction.
(<a href="https://issuetracker.unity3d.com/issues/backport-performance-cost-of-looping-animations-increases-over-time">UUM-6515</a>)</p></li>
<li><p>Editor: Fixed ReorderableList creating a small Prefab override indicator dot below the header when its 'displayHeader' is false.
(<a href="https://issuetracker.unity3d.com/issues/prefab-override-indicator-for-dropdowns-extends-beyond-the-header-element-bounds-creating-a-separated-indicator-dot-below">1396770</a>)</p></li>
<li><p>Editor: Fixed ReorderableList drawing element GUI incorrectly when the list doesn't span across all window width.
(1424600)</p></li>
<li><p>Editor: Fixed ReorderableList errors when drawing recursive editors.
(<a href="https://issuetracker.unity3d.com/issues/reorderablelist-causes-an-argumentoutofrangeexception-error-when-propertydrawer-is-used-recursively">1374418</a>)</p></li>
<li><p>Editor: Fixed ReorderableList not executing OnChangedCallback when performing context menu actions.
(1381005)</p></li>
<li><p>Editor: Fixed right click paste not working in package manager.
(<a href="https://issuetracker.unity3d.com/issues/linux-package-manager-doesnt-let-paste-text-when-using-right-click-paste">UUM-2304</a>)</p></li>
<li><p>Editor: Fixed save as scene template with proper naming.
(<a href="https://issuetracker.unity3d.com/issues/scene-template-file-name-reverts-to-original-scenes-name-when-saving-a-renamed-scene-template">1385544</a>)</p></li>
<li><p>Editor: Fixed scripted importer registration errors, when changing platform.
(<a href="https://issuetracker.unity3d.com/issues/switching-target-platform-in-build-settings-throws-assetimporters-dot-scriptedimporter-errors">UUM-14062</a>)</p></li>
<li><p>Editor: Fixed selection outline rendering when using Mask Interaction in Sprites, Lines, Trails or Particle Systems.
(<a href="https://issuetracker.unity3d.com/issues/trailrenderer-and-linerenderer-does-not-render-selection-outline-while-mask-interaction-set-to-visible-inside-mask">1376886</a>)</p></li>
<li><p>Editor: Fixed Selection Outline toggle disabling Selection Wire.
(<a href="https://issuetracker.unity3d.com/issues/selection-wire-turns-off-when-turning-off-selection-outline-in-gizmo-settings">1379390</a>)</p></li>
<li><p>Editor: Fixed shortcut-manager init if new events are registered in domain reload.</p></li>
<li><p>Editor: Fixed side panel and graph divider getting stuck when the drag was started to the left of the divider.
(<a href="https://issuetracker.unity3d.com/issues/editor-side-panel-and-graph-divider-gets-stuck-when-dragged-after-selecting-transition-from-any-state-in-animator-window">1397509</a>)</p></li>
<li><p>Editor: Fixed so it's possible to set <code>text-overflow: ellipsis;</code> in the UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/impossible-to-set-text-overflow-ellipsis-in-the-ui-builder">1393109</a>)</p></li>
<li><p>Editor: Fixed so that all GameObjects respect Default Parent.
(<a href="https://issuetracker.unity3d.com/issues/some-gameobjects-ignore-the-default-parent-when-creating-them-in-the-hierarchy">1385025</a>)</p></li>
<li><p>Editor: Fixed so that changes to Transform, Position, and Rotation sets GUI.changed = true;.
(<a href="https://issuetracker.unity3d.com/issues/inspectors-transform-fields-position-and-rotation-is-not-setting-gui-dot-changed-to-true-when-being-changed">1396280</a>)</p></li>
<li><p>Editor: Fixed so that penstatus flags (in old input system) are set properly for pen buttons on macOS.
(1380493)</p></li>
<li><p>Editor: Fixed so that when you type transform expressions like <code>/=3</code> acts on the original values instead of restting the value to 0.<br></p>

<ul>
<li>Fixed so initial values for a field are stored when starting edit instead of being applied on top of the current value.
(<a href="https://issuetracker.unity3d.com/issues/typing-transform-expressions-like-slash-equals-3-first-resets-the-value-to-0-instead-of-acting-on-the-original-value">1399184</a>)</li>
</ul></li>
<li><p>Editor: Fixed so the Editor's GameView window doesn't flicker when you change OnDemandRendering.renderFrameInterval.
(<a href="https://issuetracker.unity3d.com/issues/changing-the-ondemandrendering-dot-renderframeinterval-value-causes-flickering">1274200</a>)</p></li>
<li><p>Editor: Fixed so when you rename the first animator parameter, it stops renaming when you click on search field above it.
(<a href="https://issuetracker.unity3d.com/issues/animation-clicking-on-search-field-doesnt-cancel-name-selection-mode-for-int-parameters">1406899</a>)</p></li>
<li><p>Editor: Fixed spurious assembly file locking so it doesn't prevent rebuilds after you use the right click <strong>Open source code</strong> on a test in the Test Runner window.</p></li>
<li><p>Editor: Fixed the appearance of the help text when the autocomplete pop-up's width is too small.
(<a href="https://issuetracker.unity3d.com/issues/search-filter-pop-up-text-overlaps-when-window-width-is-decreased">1399720</a>)</p></li>
<li><p>Editor: Fixed the bake diffuse lighting not affeced by the diffuse color.
(1425814)</p></li>
<li><p>Editor: Fixed the help link for scene assets.
(<a href="https://issuetracker.unity3d.com/issues/documentation-page-is-not-displayed-for-the-user-when-he-clicks-on-a-question-mark-on-the-inspector-window">1408303</a>)</p></li>
<li><p>Editor: Fixed the loading of 16-bit TIFF that contains more than 4 channels (usually created with Photoshop).
(<a href="https://issuetracker.unity3d.com/issues/file-could-not-be-read-error-is-thrown-when-a-16-bit-tif-file-is-present-in-the-project">1404047</a>)</p></li>
<li><p>Editor: Fixed the package manager <strong>Import by git</strong> dropdown size to be consistent.
(<a href="https://issuetracker.unity3d.com/issues/linux-packman-options-to-add-package-from-git-url-or-by-name-contains-empty-space-on-the-produced-sub-window">1394785</a>)</p></li>
<li><p>Editor: Fixed the validation of the Application Identifier.</p></li>
<li><p>Editor: Fixed to avoid freeze when Inspector recursively expands a field that references a cyclical graph of SerializeReference objects.
(<a href="https://issuetracker.unity3d.com/issues/expanding-all-nodes-of-an-endless-tree-that-is-using-serializereference-in-the-inspector-window-causes-an-editor-freeze">1180716</a>)</p></li>
<li><p>Editor: Fixed tooltips to close automatically when the mouse moves out from the rect of the UI part that triggered them.</p></li>
<li><p>Editor: Fixed UI frame captures not being cleared by the profiler which could create a gradual memory increase in the Editor when using the Profiler.
(<a href="https://issuetracker.unity3d.com/issues/gfx-memory-usage-in-editor-is-significantly-higher-than-in-player-when-updating-canvas-renderers-meshes-with-setmesh">1334548</a>)</p></li>
<li><p>Editor: Fixed Unity crashes in batch mode when using -vcsMode Perforce.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-running-editor-with-batch-mode-and-vcsmode-flags-1">UUM-17597</a>)</p></li>
<li><p>Editor: Fixed utility windows opening behind popup windows by moving them to the same window level.
(1370754)</p></li>
<li><p>Editor: Fixed wrong color space conversion with Materials albedo color when the Material Import Mode is 'Import via MaterialDescription'.
(<a href="https://issuetracker.unity3d.com/issues/fbx-import-materialdescription-does-incorrect-color-conversion-when-project-color-space-is-set-to-linear">1381764</a>)</p></li>
<li><p>Editor: Fixed <code>EditorGUILayout.MaskField</code> to return the correct values regardless of if the dropdown list was closed when selecting options.
(<a href="https://issuetracker.unity3d.com/issues/editorguilayout-dot-maskfield-returns-different-values-if-the-dropdown-list-was-closed-when-selecting-options">1390405</a>)</p></li>
<li><p>Editor: Frame Debugger: Fixed an issue where depth and shadow maps were not displayed in HDRP projects.
(UUM-4101)</p></li>
<li><p>Editor: Frame Debugger: Fixed an issue where the Depth buffer was incorrectly displayed after selecting DrawOpaqueObjects event.
(<a href="https://issuetracker.unity3d.com/issues/framedebugger-depth-buffer-is-shown-when-drawopaqueobjects-pass-is-selected-and-an-overlay-camera-is-enabled-in-urp">UUM-4087</a>)</p></li>
<li><p>Editor: Frame Debugger: Fixed an issue where the output image would flicker when looking at DrawMesh events in URP Deferred.
(<a href="https://issuetracker.unity3d.com/issues/framedebugger-flickers-when-urp-deferred-drawmesh-event-is-selected">UUM-4102</a>)</p></li>
<li><p>Editor: Frame Debugger: Fixed an issue where the window would constantly refresh when debugging a remote device.
(<a href="https://issuetracker.unity3d.com/issues/mobile-frame-debugger-constantly-refreshes-when-making-a-ui-update-for-frame-debug-window">UUM-4096</a>)</p></li>
<li><p>Editor: GetMaterialParentFromFile returns null for material variants stored as sub assets.
(1383366)</p></li>
<li><p>Editor: Hid <strong>Copy/Paste</strong> for <code>ReorderableList</code> controls that contain <code>SerializedReferences</code>.
(1387561)</p></li>
<li><p>Editor: Hid fhe Open button for Scene Template Asset because that function doesn't exist.
(<a href="https://issuetracker.unity3d.com/issues/scene-template-has-non-functioning-button">1400333</a>)</p></li>
<li><p>Editor: Made the <code>BuilderCanvasStyleControls</code> the same size as the icon they contain.
(1425858)</p></li>
<li><p>Editor: New folders can be created using Ctrl/CMD+Shift+N shortcut when Project window is focused.
(1264819)</p></li>
<li><p>Editor: Prevented a crash when material variants have a circular dependency.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-cyclic-dependency-not-detected-caused-by-a-git-merge-and-not-through-the-ui">1387426</a>)</p></li>
<li><p>Editor: Prevented incorrect undo actions when you select Particle Systems via the Inspector thumbnail.</p></li>
<li><p>Editor: Reduced the amount of open files when you download from Accelerator.
(1389792)</p></li>
<li><p>Editor: Reenable editor window close test on linux.
(UUM-1593)</p></li>
<li><p>Editor: Reimplemented the RecompileAfterFinishedPlaying option.
(<a href="https://issuetracker.unity3d.com/issues/recompile-after-finish-playmode-option-is-gone">UUM-16168</a>)</p></li>
<li><p>Editor: Removed TextCore related entries in the UI Builder test project asmdef.</p></li>
<li><p>Editor: Removed unneeded dialog when renaming open scenes.
(<a href="https://issuetracker.unity3d.com/issues/renaming-the-modified-scene-wipes-all-the-unsaved-content-from-it">1386815</a>)</p></li>
<li><p>Editor: Resolvesd instabilities on two tests and managed the initialization process of perforce (p4d) so that tests aren't run until it's completely initialiized.
(1411732)</p></li>
<li><p>Editor: Right clicking on a rotation component will allow the user to copy value and property path of the proper sub property.
(1338677)</p></li>
<li><p>Editor: Stopped Game/Scene view window from flickering on resizing when Graphics API is set to OpenGL.
(<a href="https://issuetracker.unity3d.com/issues/windows-game-slash-scene-view-window-is-flickering-on-resizing-when-graphics-apis-set-to-openglcore-slash-opengles2-slash-opengles3">1238391</a>)</p></li>
<li><p>Editor: Updated the drag sensitivity of <code>DelayedIntField</code> method.
(<a href="https://issuetracker.unity3d.com/issues/lighting-settings-sample-count-editor-field-scrubbing-is-heavy-and-inconsistent">UUM-1347</a>)</p></li>
<li><p>Editor: Windows: you can now switch to Editor Launch Screen using alt+tab.</p></li>
<li><p>Editor: [SpeedTree] Fixed an issue where an ExtraTexture texture was marked sRGB (Color Data) when imported with a SpeedTree asset.
(UUM-10912)</p></li>
<li><p>Editor: <code>MenuItems</code> support paths with double separators.
(<a href="https://issuetracker.unity3d.com/issues/menuitem-is-not-shown-in-the-item-list-if-the-string-contains-symbols">1393774</a>)</p></li>
<li><p>EmbeddedLinux: Query EGL to get the correct max supported VSync value.</p></li>
<li><p>GI: Added proper clamping of Lightmap Streaming Priority in Player Settings window.
(<a href="https://issuetracker.unity3d.com/issues/lightmap-streaming-priority-fields-value-doesnt-change-when-an-unacceptable-value-is-entered">UUM-10016</a>)</p></li>
<li><p>GI: Fixed a bug causing phantom probe tetrahedra to be displayed after deleting probe groups and selecting a probe group centered at the origin.
(<a href="https://issuetracker.unity3d.com/issues/light-probes-tetrahedral-cells-not-refreshed-when-selecting-light-probe-group-causes-phantom-probe-positions">1377421</a>)</p></li>
<li><p>GI: Fixed a bug in the progressive lightmapper Gaussian filter that caused burn out and haloed when you filtered lightmaps.<br></p>

<ul>
<li>Fixed incorrect Gaussian weights with analytically derived values so that the filter behaves correctly.
(<a href="https://issuetracker.unity3d.com/issues/cpulm-enabling-indirect-denoising-and-gaussian-ao-filter-causes-bright-halos-1">1286955</a>)</li>
</ul></li>
<li><p>GI: Fixed a bug where the environment reflections is not correctly set when exiting the prefab editor mode.</p></li>
<li><p>GI: Fixed a crash on <code>Radeon::DenoiserContext::DenoiseGPUBuffer</code> when you bake Global Illumination and change the Post Processing settings.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-radeon-denoisercontext-denoisegpubuffer-when-baking-global-illumination-and-changing-the-post-processing-settings">1384263</a>)</p></li>
<li><p>GI: Fixed a failing assert by relaxing the precision requirement in the ray's <code>IsNormalized</code> check.</p></li>
<li><p>GI: Fixed a memory leak which would occur upon closing the Unity Editor. case 1382169.
(1382169)</p></li>
<li><p>GI: Fixed an issue where emission color was erroneously reused for different renderers using the same material when they have similar lightmap UVs.
(<a href="https://issuetracker.unity3d.com/issues/color-of-baked-lightmaps-is-incorrect-when-a-material-with-emission-is-present-and-generate-lightmap-uvs-is-enabled">UUM-2771</a>)</p></li>
<li><p>GI: Fixed an issue where Enlighten RTGI schedules material updates indefinitely when animating the emission color of an emissive mesh renderer.
(<a href="https://issuetracker.unity3d.com/issues/enlighten-rtgi-ticks-indefinitely-after-the-emissive-color-of-a-renderer-has-been-updated-via-animation">UUM-10037</a>)</p></li>
<li><p>GI: Fixed an issue where environment lighting is missing from player builds when the scene hasn't been baked.
(<a href="https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time-1">UUM-2743</a>)</p></li>
<li><p>GI: Fixed an issue where the skybox reflection cubemap would be deleted when baking multiple multi-scene setups with some scenes in common.
(1373986)</p></li>
<li><p>GI: Fixed APV Partial Baking when using GPU Lightmapper.
(1365692)</p></li>
<li><p>GI: Fixed baking stall occuring when baking terrain with holes.
(<a href="https://issuetracker.unity3d.com/issues/backport-plm-baking-stalls-with-terrains-containing-lots-of-holes">UUM-950</a>)</p></li>
<li><p>GI: Fixed incorrect calculation for total bake time when baking lights in a scene.
(<a href="https://issuetracker.unity3d.com/issues/gpu-plm-total-bake-time-shows-unrealistically-low-baking-time">1374059</a>)</p></li>
<li><p>GI: Fixed light probes so they retain lighting data after you enter Play mode with Baked and Realtime GI are enabled.
(<a href="https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled">1052045</a>)</p></li>
<li><p>GI: Fixed prefab assets to how in Light Explorer when you select Show Inactive Objects.
(<a href="https://issuetracker.unity3d.com/issues/prefabs-with-light-component-are-listed-in-the-light-explorer-when-the-show-inactive-objects-property-is-checked">1280008</a>)</p></li>
<li><p>GI: Fixed so the Editor-only shader variant with <code>EDITOR_VISUALIZATION</code> keyword enabled is stripped when building the player.
(1342117)</p></li>
<li><p>GI: Fixed the initialization order to be deterministic in Wintermute.
(1413923)</p></li>
<li><p>GI: Fixed the pushoff setter on GPU lightprobes baking.
(1369757)</p></li>
<li><p>GI: Fixed the <code>RenderLightProbes</code> job with hash xxx in the Apple silicon editor.
(1362600)</p></li>
<li><p>GI: Low framerate when looking at GameObjects that are far away from Light Probe Group.
(<a href="https://issuetracker.unity3d.com/issues/bad-performance-with-generated-lighting-data-after-looking-at-gameobjects-that-are-far-away-from-light-probe-group">1340282</a>)</p></li>
<li><p>GI: [GPU PLM] OpenCL shader loading time in new projects has become significantly slower. Fixed regression by speeding up OpenCL shader loading stage by caching binaries in the GICache.
(<a href="https://issuetracker.unity3d.com/issues/gpu-plm-opencl-shader-loading-time-in-the-new-projects-has-become-significantly-slower-1">UUM-1350</a>)</p></li>
<li><p>Graph Tool Foundation: Fixed an issue where the movedFrom attribute didn't work when moving a class from no namespace to a namespace.</p></li>
<li><p>Graphics: 2D Textures with multiple faces or images now correctly update their hash values when any face/image is changed and not just the first one.
(<a href="https://issuetracker.unity3d.com/issues/cubemap-hash-value-changes-only-when-modifying-the-first-face">UUM-2506</a>)</p></li>
<li><p>Graphics: Added a missing msaa flag for 32bit integer types on OSX.</p></li>
<li><p>Graphics: Added a <code>_Float16</code> variable in the shaders for Metal.
(<a href="https://issuetracker.unity3d.com/issues/mesh-is-rendered-incorrectly-when-float16-property-is-used-in-shader">1403327</a>)</p></li>
<li><p>Graphics: Added an assert  and warning when we exceed 16 GPU buffer binding limit when using the BatchRendererGroup API.
(1393908)</p></li>
<li><p>Graphics: Added proper support for the "Integer" shader property with SRP Batcher UnityPerMaterial cbuffer use.
(1403768)</p></li>
<li><p>Graphics: Allowed more than 16 UBO in SRP Batcher (and BRG).
(1393906)</p></li>
<li><p>Graphics: BatchRendererGroup: Removed asset subscribers from Mesh &amp; Materials upon deletion.
(UUM-18159)</p></li>
<li><p>Graphics: Custom Render Textures that are marked Dirty are now released when switching scenes.
(1363263)</p></li>
<li><p>Graphics: Disabled dynamic lightmapping shaders when DOTS_INSTANCING_ON is enabled.</p></li>
<li><p>Graphics: Disabled Multi-threaded update when Frame Debugger is enabled.
(1385016)</p></li>
<li><p>Graphics: Don't mark Lines, Trails or ParticleSystems as dirty unless their data actually changes.</p></li>
<li><p>Graphics: Enabled Ray Tracing Support in Terrain settings by default for new Terrains.</p></li>
<li><p>Graphics: Ensured <code>-nographics</code> use in Standalone Player yields correct <code>SystemInfo</code> results.
(<a href="https://issuetracker.unity3d.com/issues/findkernel-doesnt-work-when-player-built-in-server-build">1354394</a>)</p></li>
<li><p>Graphics: Ensured <code>LineRenderers</code> and <code>TrailRenderers</code> with only 2 points don't vanish if the points are close together.
(<a href="https://issuetracker.unity3d.com/issues/linerenderer-is-not-drawn-if-the-length-is-0-dot-003162-or-less">1368988</a>)</p></li>
<li><p>Graphics: Fixed (Custom) RenderTexture not being recreated when undoing a dimension change through the inspector.
(<a href="https://issuetracker.unity3d.com/issues/maintex-dimensions-must-match-error-if-assigning-2d-texture-to-2d-array-texture-property">1372143</a>)</p></li>
<li><p>Graphics: Fixed a crash in BatchRendererGroup that would sometimes happen when assets are loaded or unloaded.</p></li>
<li><p>Graphics: Fixed a crash when you use indirect rendering with tessellation on Metal.
(1397458)</p></li>
<li><p>Graphics: Fixed a shadow issue with user-created command buffer that outputs to a render texture.
(<a href="https://issuetracker.unity3d.com/issues/models-becomes-unlit-when-using-rawimage-in-windows-build">1338467</a>)</p></li>
<li><p>Graphics: Fixed a sporadic freeze in mesh upload.
(UUM-4293)</p></li>
<li><p>Graphics: Fixed an Editor black out when you call Graphics.Blit on the first frame in a non-main thread, so it outputs a correct error message.
(<a href="https://issuetracker.unity3d.com/issues/editor-blacks-out-when-calling-graphics-dot-blit-on-non-main-thread-in-the-first-frame">1392298</a>)</p></li>
<li><p>Graphics: Fixed an issue causing Render Graph execution errors after a random amount of time.</p></li>
<li><p>Graphics: Fixed an issue in ray tracing when a <code>.shader</code> name could conflict with one of the hit shader names from a shader pass and cause ray tracing dispatches to fail with d3d12 errors.
(<a href="https://issuetracker.unity3d.com/issues/dxr-simple-closesthit-shader-fails-to-execute-with-d3d12-errors">1416410</a>)</p></li>
<li><p>Graphics: Fixed an issue so that entering playmode with disabled compositor no longer breaks all its layers.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-entering-playmode-with-disabled-compositor-breaks-all-its-layers">UUM-11633</a>)</p></li>
<li><p>Graphics: Fixed an issue so that skinned motion vectors are supported with entities graphics and the HDRP.
(1296266)</p></li>
<li><p>Graphics: Fixed an issue to prevent a crash on some platforms when the mesh buffers do not exist on a MeshRenderer.
(<a href="https://issuetracker.unity3d.com/issues/android-instantiating-a-mesh-with-r-slash-w-disabled-causes-crash">UUM-4150</a>)</p></li>
<li><p>Graphics: Fixed an issue where creating SparseTextures with certain TextureFormats could crash Unity, even though the equivalent GraphicsFormat is marked as unsupported for SparseTextures.<br></p>

<ul>
<li>Fixed an issue where <code>SystemInfo.IsFormatSupported((My GraphicsFormat), FormatUsage.Sparse)</code> would always return false on Metal, even if the requested GraphicsFormat actually is supported.
(1379863)</li>
</ul></li>
<li><p>Graphics: Fixed an issue where TextureImporter.GetAutomaticFormat would return the incorrect format for platforms that had their override turned off.
(<a href="https://issuetracker.unity3d.com/issues/textureimporter-dot-getautomaticformat-doesnt-return-the-correct-format-when-override-for-os-is-turned-off">UUM-11694</a>)</p></li>
<li><p>Graphics: Fixed an issue where the D3D11 WARP driver would crash when creating a SparseTexture with the BC1/BC4 GraphicsFormats.
(1378254)</p></li>
<li><p>Graphics: Fixed an issue where using <code>TextureFormat.YUY2</code> or <code>GraphicsFormat.YUV2</code> with a SparseTexture would crash on Metal (if sparse textures are supported).
(1392869)</p></li>
<li><p>Graphics: Fixed an issue which caused the Game View FPS to drop when you move the Editor to a different display when you use Metal.
(<a href="https://issuetracker.unity3d.com/issues/apple-silicon-m1-game-view-fps-is-very-low-when-the-view-is-moved-to-an-external-display">1383448</a>)</p></li>
<li><p>Graphics: Fixed assert in UWP when you delete external textures.
(1378150)</p></li>
<li><p>Graphics: Fixed bad performance when Game View is displayed in a different window at the same time as the Scene View when you use Metal.
(<a href="https://issuetracker.unity3d.com/issues/m1-performance-frame-rate-significantly-drops-when-game-view-window-is-moved-outside-the-editor-during-the-play-mode">1408037</a>)</p></li>
<li><p>Graphics: Fixed batching issues with the renderer bounds when the SRP batcher is disabled.
(1400068)</p></li>
<li><p>Graphics: Fixed BatchRendererGroup sometimes not reloading Mesh data correctly and leading to BatchDrawCommand error logs.</p></li>
<li><p>Graphics: Fixed BatchRendererGroup TempJob memory leak in special rendering situations like HDRP AOV rendering.
(<a href="https://issuetracker.unity3d.com/issues/jobtempalloc-has-allocations-that-are-more-than-4-frames-old-warnings-are-thrown-when-using-aovrequest-and-batchrenderergroup">UUM-16733</a>)</p></li>
<li><p>Graphics: Fixed Blit(null,rt) failing on Metal for some combinations of "backbuffer" and destination RT formats.
(1347118)</p></li>
<li><p>Graphics: Fixed bug in mip bias setting on DX11.
(<a href="https://issuetracker.unity3d.com/issues/repeat-texture-wrap-mode-set-through-textureimporter-in-assetpostprocessor-behaves-like-clamp-when-mipmapbias-is-set-to-100">1383424</a>)</p></li>
<li><p>Graphics: Fixed bug where using Graphics.RenderMesh would cause a crash when exiting play mode.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-delete-object-internal-step1-when-using-graphics-dot-rendermesh-to-render-a-lot-of-sprites-to-screen">1404498</a>)</p></li>
<li><p>Graphics: Fixed bug with CommandBuffer.Blit(BuiltinRenderTextureType.CurrentActive, ...) where _MainTex was not getting set when using a custom material and MSAA is enabled with multiple cameras.
(<a href="https://issuetracker.unity3d.com/issues/commandbuffer-dot-blit-fails-to-copy-builtinrendertexturetype-dot-currentactive-to-a-rendertexture-when-multiple-cameras-are-enabled">1382199</a>)</p></li>
<li><p>Graphics: Fixed calling Texture2D with a negative width or height on Metal to return an error message.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-an-out-of-memory-error-when-running-play-mode-on-metal-macos">1365218</a>)</p></li>
<li><p>Graphics: Fixed closesthit, anyhit or intersection shaders in .raytrace files being silently ignored. Log an error when these shader types are present in a .raytrace file since they are not currently supported.
(<a href="https://issuetracker.unity3d.com/issues/dxr-closesthit-shaders-from-a-raytrace-shader-are-not-executed">1416367</a>)</p></li>
<li><p>Graphics: Fixed consistent <code>Gfx.WaitForPresentOnGfxThread</code> editor spikes when you use Metal.
(<a href="https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api">1378985</a>)</p></li>
<li><p>Graphics: Fixed crash and validation errors when loading Vulkan shaders from asset bundles that were created with an old version of Unity.
(<a href="https://issuetracker.unity3d.com/issues/linux-unity-crashes-or-freezes-when-loading-an-assetbundle-with-assetbundle-dot-loadfromfile">1331073</a>)</p></li>
<li><p>Graphics: Fixed crash in MeshUtility.SetMeshCompression() when null is used for Mesh.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-meshutility-custom-setmeshcompression-when-mesh-is-set-to-null-or-destroyed">1387705</a>)</p></li>
<li><p>Graphics: Fixed crash in ScriptableBatchRenderer::ApplyShaderPass when switching between URP and HDRP.
(UUM-18163)</p></li>
<li><p>Graphics: Fixed crash on some platforms when calling Graphics.Blit(null, destination) with a destination texture larger than the backbuffer.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-opening-project-with-weather-maker">1374709</a>)</p></li>
<li><p>Graphics: Fixed crash when using bad args in CommandBuffer.DrawRenderer.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-trying-to-render-a-specific-submesh-with-commandbuffer-dot-drawrenderer">1315821</a>)</p></li>
<li><p>Graphics: Fixed cubemap array macros for GLCore.</p></li>
<li><p>Graphics: Fixed depth-only rendering to Texture2DArray not working on Metal.
(<a href="https://issuetracker.unity3d.com/issues/texture2darray-depth-format-does-not-work-when-using-macos-with-an-m1-macbook">UUM-14488</a>)</p></li>
<li><p>Graphics: Fixed DX11 bug where depth texture would not be bound as a shader resource because it was still bound as a render target.
(<a href="https://issuetracker.unity3d.com/issues/water-reflections-disappear-when-a-gameobject-with-default-material-is-no-longer-in-the-scene">1364460</a>)</p></li>
<li><p>Graphics: Fixed early return calls in patch constant function so that artifacts and/or patches render on Metal.
(<a href="https://issuetracker.unity3d.com/issues/metal-urp-gameobjects-with-tessalation-shader-get-artifacts-slash-become-corrupted-when-lod-group-is-changed">1407434</a>)</p></li>
<li><p>Graphics: Fixed error when creating 2D Array RenderTexture with MSAA using Vulkan on desktop platforms.
(1387652)</p></li>
<li><p>Graphics: Fixed false positives from checking if all buffers are bound correctly on Metal.
(1416338)</p></li>
<li><p>Graphics: Fixed flicker in splash screen rendering on macOS with OpenGL.
(<a href="https://issuetracker.unity3d.com/issues/osx-opengl-scene-flickers-for-a-bit-after-splash-screen-disappears-if-player-is-launched-in-native-fullscreen-resolution">963097</a>)</p></li>
<li><p>Graphics: Fixed GPU hang when using stencil view with dynamic resolution with Vulkan and rendering errors with Metal.
(1400701)</p></li>
<li><p>Graphics: Fixed Graphic and Compute Buffer allocations to allocate less garbage collected memory.
(<a href="https://issuetracker.unity3d.com/issues/graphicsbuffers-constructor-and-other-api-that-returns-graphicsbuffers-allocate-garbage">1418412</a>)</p></li>
<li><p>Graphics: Fixed half outputs coalescing so it doesn't result in a broken metal code.
(1429019)</p></li>
<li><p>Graphics: Fixed IES profile importer handling of overflow (outside 0-1 range) of attenutation splines values.</p></li>
<li><p>Graphics: Fixed incorrect mip levels dropping for PVRTC textures in the case of not full mip chain provided.
(<a href="https://issuetracker.unity3d.com/issues/ios-pvrtc-rgba-2bpp-discards-lowests-4-mips">1427604</a>)</p></li>
<li><p>Graphics: Fixed incorrect sRGB backbuffer with Linear Rendering and some AMD Vulkan drivers on Windows with multiple GPUs.
(1387774)</p></li>
<li><p>Graphics: Fixed incorrect SRP batching for shadow rendering.
(<a href="https://issuetracker.unity3d.com/issues/urp-srp-batcher-doesnt-batch-materials-in-shadowcaster-pass-when-emmision-is-enabled-on-one-of-them">1364035</a>)</p></li>
<li><p>Graphics: Fixed initialization of particles created with GPU events.</p></li>
<li><p>Graphics: Fixed issue in which editor would get stuck when importing corrupted FBX models.
(<a href="https://issuetracker.unity3d.com/issues/editor-get-stuck-loading-when-importing-corrupted-fbx-models">UUM-3981</a>)</p></li>
<li><p>Graphics: Fixed issue when assigning RenderTexture in onPreRender and it was null before.
(<a href="https://issuetracker.unity3d.com/issues/camera-active-texture-is-not-written-if-another-camera-has-a-script-using-onrenderimage">1385163</a>)</p></li>
<li><p>Graphics: Fixed issue with debug markers in Unity Profiler in deep profiler mode.</p></li>
<li><p>Graphics: Fixed issue with Probe Volume Baking window incorrectly displaying the icon for probe volumes in scenes that don't contain probe volumes.</p></li>
<li><p>Graphics: Fixed loading of BMP with BMP header V4/V5.
(<a href="https://issuetracker.unity3d.com/issues/error-file-could-not-be-read-when-importing-bmp-assets-with-specific-properties">1397028</a>)</p></li>
<li><p>Graphics: Fixed lost graphics device when using Vulkan with some combinations of shaders besing used.
(1422403)</p></li>
<li><p>Graphics: Fixed mapped index debug error when rendering null geometry.
(UUM-11997)</p></li>
<li><p>Graphics: Fixed mesh corruption with Keep Quads -option set, when adding a new vertex channel.
(<a href="https://issuetracker.unity3d.com/issues/model-topology-is-broken-when-using-mesh-dot-setuvs-with-keep-quads-setting-on">1390422</a>)</p></li>
<li><p>Graphics: Fixed Metal crash when reading pixels from depth-only RT.
(<a href="https://issuetracker.unity3d.com/issues/crash-in-unitygfxdeviceworker-when-using-a-rendertexturesensor">1375846</a>)</p></li>
<li><p>Graphics: Fixed minor performance penalty in OpenGL ReadPixels.
(1382949)</p></li>
<li><p>Graphics: Fixed missing information about RTAS debug mode in documentation.
(1411500)</p></li>
<li><p>Graphics: Fixed motion blur in the URP so it can handle multiple cameras.
(<a href="https://issuetracker.unity3d.com/issues/urp-motion-blur-applies-on-non-moving-cameras-when-using-different-volume-masks">1377839</a>)</p></li>
<li><p>Graphics: Fixed null reference to lambda when executing context menu of an additional data component.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-failed-to-call-instance-function-invoke-error-is-thrown-when-right-clicking-the-hd-additional-camera-data-script">1396805</a>)</p></li>
<li><p>Graphics: Fixed partial upload of a compute buffer using SetData.
(<a href="https://issuetracker.unity3d.com/issues/directx11-urp-incorrect-render-result-in-play-mode-when-graphics-api-is-set-to-directx11">1398510</a>)</p></li>
<li><p>Graphics: Fixed particleGUI's <strong>fix me</strong> button
(<a href="https://issuetracker.unity3d.com/issues/fix-now-button-for-vertex-stream-is-missing-when-urp-particles-shader-is-used-and-the-particles-render-mode-is-non-mesh">1389023</a>)</p></li>
<li><p>Graphics: Fixed race condition when using Lock/UnlockBuffer with Vulkan.
(1394185)</p></li>
<li><p>Graphics: Fixed regression on ResourceReloader due to change for supporting built-in resources.</p></li>
<li><p>Graphics: Fixed rendering of scene and game views when the "Shadow Debug Mode" is set to "Single Shadow".
(<a href="https://issuetracker.unity3d.com/issues/scene-and-game-views-become-black-when-the-shadow-debug-mode-is-set-to-single-shadow">1385412</a>)</p></li>
<li><p>Graphics: Fixed shadow cascade computation for non implicit projections.
(<a href="https://issuetracker.unity3d.com/issues/directional-shadow-gets-cut-with-certain-aspect-ratios-and-camera-projection-matrices-regardless-of-shadow-cascade-settings">1366218</a>)</p></li>
<li><p>Graphics: Fixed so that debug menu updates render when a widget becomes visible or hidden.
(1409372)</p></li>
<li><p>Graphics: Fixed so that there is no mainthread stall on native graphics jobs platforms when you delete textures or rendertargets.
(1423274)</p></li>
<li><p>Graphics: Fixed texture gather macros for GLCore and moved them from target 4.6 to target 4.5.</p></li>
<li><p>Graphics: Fixed the GameView window so it doesn't clear entirely when nothing is rendered to it.
(<a href="https://issuetracker.unity3d.com/issues/vulkan-editor-whole-game-view-gets-cleared-when-camera-clear-flags-are-set-to-solid-color-and-msaa-is-disabled">1420353</a>)</p></li>
<li><p>Graphics: Fixed the issue with the special Turkish i, when looking for the m_IsGlobal property in VolumeEditor.</p></li>
<li><p>Graphics: Fixed the Metal shader code generated when <code>uint</code> and <code>float3</code> outputs are coalesced into one register.
(1419450)</p></li>
<li><p>Graphics: Fixed the use of <code>GraphicsBuffer.LockBufferForWrite</code> with Vulkan without a manual initialization of the buffer so it doesn't trigger assertion.
(1417283)</p></li>
<li><p>Graphics: Fixed the Volume Panel on the Rendering Debugger to correctly show cameras when they're added or deleted.</p></li>
<li><p>Graphics: Fixed unnecessary memory allocation inside FSR's RCAS shader constants helper function.</p></li>
<li><p>Graphics: Fixed uploading of dynamic mode compute buffers.
(<a href="https://issuetracker.unity3d.com/issues/computebuffer-dot-setdata-for-computebuffertype-dot-constant-is-not-synchronized-correctly-on-d3d11-when-clustered-rendering-is-used">1383601</a>)</p></li>
<li><p>Graphics: Fixed virtual texture updates sometimes being missed by the SRP Batcher, especially when using BatchRendererGroup.</p></li>
<li><p>Graphics: Fixed Vulkan fence tracking when trying to recover from swapchain error.
(1417311)</p></li>
<li><p>Graphics: Fixed Vulkan validation error when using DrawProcedural with quad primitives.
(UUM-18502)</p></li>
<li><p>Graphics: Fixed when using Vulkan with shaders that use more than 8 constant buffers on AMD GPUs.
(1403736)</p></li>
<li><p>Graphics: Fixed XR support in CoreUtils.DrawFullscreen function.</p></li>
<li><p>Graphics: Fixed <code>DebugUI.Enum</code> fields collapsing their parent <code>DebugUI.Foldout</code>.</p></li>
<li><p>Graphics: Fixed <code>RenderTexture</code> stencil view (<code>RenderTexture.stencilFormat</code>, <code>RenderTextureSubElement.Stencil</code>) when using Vulkan with dynamic resolution.
(1398961)</p></li>
<li><p>Graphics: Fixed <code>SceneRenderPipeline</code> for it to not change project when used with <code>AddComponent</code>.
(<a href="https://issuetracker.unity3d.com/issues/selecting-scene-template-in-the-project-settings-removes-the-active-render-pipelines">1414921</a>)</p></li>
<li><p>Graphics: Fixed: On Metal, objects using the Universal Render Pipeline/Lit shader with a normal map are not rendered when using an albedo override in the Rendering Debugger.
(1374226)</p></li>
<li><p>Graphics: Improved shadow map draw sorting for BatchRendererGroup.
(UUM-18165)</p></li>
<li><p>Graphics: Normal maps are no longer inverted with static batching when the meshes have negative scale transforms on an odd number of axes.
(<a href="https://issuetracker.unity3d.com/issues/normal-map-of-prefab-with-negative-scale-is-inverted-when-rendered-in-the-game-view">1369919</a>)</p></li>
<li><p>Graphics: Removed spam messages from the Log or Console Window when using Renderer.rayTracingMode but Ray Tracing is not supported by the system configuration.
(1406885)</p></li>
<li><p>Graphics: SkinnedMeshRenderer and MeshRenderer are now in the same SRP Batch during shadow pass.
(<a href="https://issuetracker.unity3d.com/issues/draw-calls-that-batch-in-opaque-pass-do-not-batch-in-shadow-pass-when-some-of-the-draw-calls-come-from-skinnedmeshrenderer-and-some-come-from-meshrenderer">UUM-4336</a>)</p></li>
<li><p>Graphics: Support wireframe rendering in GL core players.<br></p>

<ul>
<li>Fixed OpenGL hull shaders code generation in case immediate constant buffers are used.
(1371542)</li>
</ul></li>
<li><p>Graphics: Updated libjpeg-turbo to version 2.1.2 to solve security issues with version 1.3.1, used by Texture2D and ImageConversion LoadImage API and ImageConversion EncodeToJPG API.
(1351886)</p></li>
<li><p>HDRP: Added a specular occlusion fallback on normal when bent normal is not available.
(<a href="https://issuetracker.unity3d.com/issues/bent-normals-and-shadergraph-1">UUM-6662</a>)</p></li>
<li><p>HDRP: Added async compute support doc.
(UUM-6183)</p></li>
<li><p>HDRP: Added clarification on HDR Output not supporting Scene View.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-hdr-documentation-missing-info-about-supported-views">UUM-16184</a>)</p></li>
<li><p>HDRP: Added injection points options for DLSS (After Depth of Field and After Post) which should mitigate some of the performance cost in post process.
(1385178)</p></li>
<li><p>HDRP: Added missing using statements in one of the example scripts in the documentation for the accumulation API.
(UUM-3224)</p></li>
<li><p>HDRP: Added the ability to remap the occlusion to anything via a curve for <code>LensFlareOcclusionSRP</code> (DataDriven).
(1416429)</p></li>
<li><p>HDRP: Added the option to automatically register diffusion profiles on import.
(1411786)</p></li>
<li><p>HDRP: Allowed you to select the multiscattering method from SG advanced settings.
(1427317)</p></li>
<li><p>HDRP: Changed the Box Model name to Planar Model.
(1422103)</p></li>
<li><p>HDRP: Clamp negative absorption distance.
(UUM-6746)</p></li>
<li><p>HDRP: Disabled Volumetric Clouds for Default Sky Volumes.
(UUM-6185)</p></li>
<li><p>HDRP: Fixed a black screen issue with master builds on HDRP.
(UUM-17388)</p></li>
<li><p>HDRP: Fixed a compilation warning when installing the procedural sky HDRP sample.</p></li>
<li><p>HDRP: Fixed a crash with render graph viewer when render graph is not provided with an execution name.</p></li>
<li><p>HDRP: Fixed a discrepency between recursive rendering and path tracing for refraction models.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-recursive-rendering-refraction-is-very-different-compared-to-rasterization-slash-pathtracing">UUM-6179</a>)</p></li>
<li><p>HDRP: Fixed a few UX issues in APV.</p></li>
<li><p>HDRP: Fixed a null ref exception in Volume Explorer.</p></li>
<li><p>HDRP: Fixed a null ref exception when destroying a used decal material.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-deleting-a-decal-material-that-is-currently-in-use-crashes-the-render-loop">UUM-4353</a>)</p></li>
<li><p>HDRP: Fixed a nullref exception when creating a new scene while LightExplorer is open.</p></li>
<li><p>HDRP: Fixed a nullref when enabling raycount without ray tracing.</p></li>
<li><p>HDRP: Fixed a number of outdated reference to "HDRP Default Settings" in the UI.
(UUM-11494)</p></li>
<li><p>HDRP: Fixed a regression issue which breaks XR font rendering.
(GFXRPCXR-17)</p></li>
<li><p>HDRP: Fixed a render graph error when rendering a scene with no opaque objects in forward.
(<a href="https://issuetracker.unity3d.com/issues/transparent-custom-pass-renders-opaque-with-msaa-disabled-in-player">UUM-6189</a>)</p></li>
<li><p>HDRP: Fixed a rounding issue in ray traced reflections at half resolution.
(UUM-6177)</p></li>
<li><p>HDRP: Fixed a shader warning in UnityInstancing.hlsl.</p></li>
<li><p>HDRP: Fixed a warning because of a null texture in the lens flare pass.</p></li>
<li><p>HDRP: Fixed a warning on first frame when a realtime probe is set to OnEnable.</p></li>
<li><p>HDRP: Fixed ambient probe for volumetric clouds.</p></li>
<li><p>HDRP: Fixed an invalid undo step when you edit some values on the Rendering Debugger.
(1412465)</p></li>
<li><p>HDRP: Fixed an issue by greying out the profile list button instead of throwing an error.
(UUM-6174)</p></li>
<li><p>HDRP: Fixed an issue in the instance ID management for tesselation shaders.</p></li>
<li><p>HDRP: Fixed an issue that the Shaders now correctly fallback to error shader.
(UUM-1417)</p></li>
<li><p>HDRP: Fixed an issue where APV cells were not populated properly when probe volumes have rotations.</p></li>
<li><p>HDRP: Fixed an issue where forced sky update (like PBR sky amortized updated) would not update ambient probe.</p></li>
<li><p>HDRP: Fixed an issue where sometimes full screen debug would cause render graph errors.</p></li>
<li><p>HDRP: Fixed an issue with accumulation motion blur and depth of field when path tracing is enabled.</p></li>
<li><p>HDRP: Fixed an issue with Bloom and Depth of Field in game view when filtering in the hierarchy.
(UUM-17739)</p></li>
<li><p>HDRP: Fixed an issue with DOTS and Look Dev tool causing entities in the tool to be drawn in the game view.
(<a href="https://issuetracker.unity3d.com/issues/prefabs-using-hybrid-convert-to-entity-component-are-visible-in-the-game-view-if-used-in-hdrp-look-dev-when-entering-play-mode">UUM-6188</a>)</p></li>
<li><p>HDRP: Fixed an issue with dynamic resolution and low res transparency sampling garbage outside of the render target.</p></li>
<li><p>HDRP: Fixed an issue with raytraced shadows being visible alongside shadowmask.</p></li>
<li><p>HDRP: Fixed AO dissapearing when DRS would be turned off through a camera, while hardware drs is active in DX12 or Vulkan.</p></li>
<li><p>HDRP: Fixed APV loading data outside of the relevant area containing probes.</p></li>
<li><p>HDRP: Fixed artifacts on PBR DOF camera cuts such as the COC sticking around with blurry values.
(UUM-6187)</p></li>
<li><p>HDRP: Fixed artifacts on the volumetric clouds when you enable the fog.
(1407759)</p></li>
<li><p>HDRP: Fixed atmospheric scattering being incorrectly enabled when scene lighting is disabled.</p></li>
<li><p>HDRP: Fixed auto-exposure mismatch between sky background and scene objects in path tracing.</p></li>
<li><p>HDRP: Fixed bad undo behaviour with light layers and shadows.
(<a href="https://issuetracker.unity3d.com/issues/light-layer-undo-doesnt-work-for-shadows">UUM-5701</a>)</p></li>
<li><p>HDRP: Fixed black dots when clouds rendered in local mode.
(<a href="https://issuetracker.unity3d.com/issues/flickering-black-pixels-in-the-game-view-when-volumetric-clouds-with-local-clouds-are-enabled-in-an-hdrp-project">UUM-11651</a>)</p></li>
<li><p>HDRP: Fixed broken denoiser for ray traced shadows in HDRP.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-dxr-temporal-denoising-is-broken-up-to-2021-dot-3-in-punctuals-raytraced-shadows">UUM-2140</a>)</p></li>
<li><p>HDRP: Fixed broken rendering when duplicating a camera while the Rendering Debugger is opened.</p></li>
<li><p>HDRP: Fixed bug in path tracing dirtiness check.
(UUM-13514)</p></li>
<li><p>HDRP: Fixed cached directional light shadows disappearing without reappearing when the going outside of the range of shadow validity.</p></li>
<li><p>HDRP: Fixed camera motion vector pass reading last frame depth texture.</p></li>
<li><p>HDRP: Fixed CoC size computation when dynamic resolution is enabled.</p></li>
<li><p>HDRP: Fixed color grading issue when multiple cameras have same volume properties but different frame settings.
(UUM-3314)</p></li>
<li><p>HDRP: Fixed color grading so it no longer outputs negative colors.
(UUM-11110)</p></li>
<li><p>HDRP: Fixed compilation issue related to shader stripping in ray tracing.</p></li>
<li><p>HDRP: Fixed contact shadow disappearing when shadowmask is used and no non-static object is available.</p></li>
<li><p>HDRP: Fixed Correlated Color Temperature not being applied in Player builds for Enlighten realtime GI lights ;.</p></li>
<li><p>HDRP: Fixed couple bugs in the volumetric clouds shader code.</p></li>
<li><p>HDRP: Fixed custom pass name being cut when too long in the inspector.</p></li>
<li><p>HDRP: Fixed custom pass scaling issues with dynamic resolution.
(<a href="https://issuetracker.unity3d.com/issues/dynamic-resolution-broken-with-custom-pass-3">UUM-10882</a>)</p></li>
<li><p>HDRP: Fixed custom pass UI not refreshed when changing the injection point.
(UUM-8410)</p></li>
<li><p>HDRP: Fixed custom pass utils Blur and Copy functions in XR.</p></li>
<li><p>HDRP: Fixed custom shader GUI for material inspector.</p></li>
<li><p>HDRP: Fixed debug data for probes to not longer be cleared every time a cell is added/removed. This helps performance with streaming.</p></li>
<li><p>HDRP: Fixed debug probe visualization affecting screen space effects.</p></li>
<li><p>HDRP: Fixed debug window reset.</p></li>
<li><p>HDRP: Fixed Decal Layer Texture lifetime in rendergraph.
(<a href="https://issuetracker.unity3d.com/issues/decal-layer-texture-lifetime-in-rendergraph-1">UUM-6664</a>)</p></li>
<li><p>HDRP: Fixed decal material validation after saving.
(<a href="https://issuetracker.unity3d.com/issues/decalmeshforwardemissive-and-decalprojectorforwardemissive-are-re-enabled-when-saving-project-for-the-first-time">UUM-12750</a>)</p></li>
<li><p>HDRP: Fixed decal performances when they use different material and the same draw order.</p></li>
<li><p>HDRP: Fixed default value of "Distortion Blur" from 1 to 0 according to the doc.</p></li>
<li><p>HDRP: Fixed default value of "Distortion Blur" from 1 to 0 according to the doc.</p></li>
<li><p>HDRP: Fixed Depth Of Field compute shader warnings on metal.
(UUM-7783)</p></li>
<li><p>HDRP: Fixed discrepency in the fog in RT reflections and RTGI between perf and quality.
(UUM-7434)</p></li>
<li><p>HDRP: Fixed duplicated code sample in the custom pass documentation.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-sample-code-for-custom-pass-scripting-is-incorrect">UUM-6173</a>)</p></li>
<li><p>HDRP: Fixed editor issue with the LiftGammaGain and ShadowsMidtonesHighlights volume components.</p></li>
<li><p>HDRP: Fixed embedding the config package when it's not a direct dependency.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-error-thrown-on-clicking-the-embed-configuration-editable-package-button-in-the-hdrp-wizard-window-1">UUM-8012</a>)</p></li>
<li><p>HDRP: Fixed error thrown when layered lit material has an invalid material type.</p></li>
<li><p>HDRP: Fixed exposure of recorded frames with path tracing and auto exposure.
(UUM-14985)</p></li>
<li><p>HDRP: Fixed flickering / edge aliasing issue when DoF and TAAU or DLSS are enabled.</p></li>
<li><p>HDRP: Fixed flipped UV for directional light cookie on PBR Sky.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-directional-light-surface-texture-is-flipped-horizontally">1382656</a>)</p></li>
<li><p>HDRP: Fixed for APV debug mode breaking rendering when switching to an asset with APV disabled.</p></li>
<li><p>HDRP: Fixed for changes of color curves not being applied immediately.</p></li>
<li><p>HDRP: Fixed for screen space overlay rendered by camera when HDR is disabled.</p></li>
<li><p>HDRP: Fixed FOV change when enabling physical camera.</p></li>
<li><p>HDRP: Fixed Geometric AA tooltip.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-grammar-mistake-in-geometric-specular-aa-tooltip">UUM-2294</a>)</p></li>
<li><p>HDRP: Fixed graphics issues with sky and fog in game view when filtering objects in the hierarchy.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-visual-glitching-appear-in-game-view-after-selecting-a-gameobject-from-hierarchy-searching-results-whilst-fog-volume-override-is-enabled">UUM-11952</a>)</p></li>
<li><p>HDRP: Fixed HDR Output behaviour when platform doesn't give back properly detected data.
(UUM-6400)</p></li>
<li><p>HDRP: Fixed HDRP build issues with DOTS_INSTANCING_ON shader variant.</p></li>
<li><p>HDRP: Fixed HDRP camera debug panel rendering foldout.</p></li>
<li><p>HDRP: Fixed history transform management not being properly handeled for ray traced area shadows.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-dxr-rt-shadows-ghosts-on-one-view-when-we-have-two-cameras-at-the-same-time">UUM-2150</a>)</p></li>
<li><p>HDRP: Fixed isssue with up direction of the light anchor tool sometime getting wrong.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-switching-back-and-forth-the-up-direction-f-the-light-anchor-when-the-elevation-is-a-multiple-of-90-looses-the-settings">UUM-6190</a>)</p></li>
<li><p>HDRP: Fixed issue at edge of screen on some platforms when SSAO is on.</p></li>
<li><p>HDRP: Fixed issue during reloading scenes in a set when one of the scenes has been renamed.</p></li>
<li><p>HDRP: Fixed issue in APV with scenes saved only once when creating them.</p></li>
<li><p>HDRP: Fixed issue of index for APV running out space way before it should.</p></li>
<li><p>HDRP: Fixed issue showing controls for Probe Volumes when Enlighten is enabled and therefore Probe Volumes are not supported.</p></li>
<li><p>HDRP: Fixed issue that caused the uber post process to run even if nothing is to be done, leading to different results when disabling every post process manually vs disabling the whole post-processing pipeline.</p></li>
<li><p>HDRP: Fixed issue that placed an OnDemand shadow in the atlas before it was ever rendered.</p></li>
<li><p>HDRP: Fixed issue where changes to APV baking set lists were not saved.</p></li>
<li><p>HDRP: Fixed issue where scene list was not refreshed upon deleting an APV baking set.</p></li>
<li><p>HDRP: Fixed issue with automatic RendererList culling option getting ignored.</p></li>
<li><p>HDRP: Fixed issue with detail normals when scale is null.</p></li>
<li><p>HDRP: Fixed issue with Final Image Histogram displaying a flat histogram on certain GPUs and APIs.</p></li>
<li><p>HDRP: Fixed issue with HDRI Sky and shadow filtering quality set to high.</p></li>
<li><p>HDRP: Fixed issue with Stacklit raytrace reflection.</p></li>
<li><p>HDRP: Fixed issue with typed loads on RGBA16F in Volumetric Lighting Filtering.</p></li>
<li><p>HDRP: Fixed Layer List is not duplicated when duplicating a LayeredLit Material.
(<a href="https://issuetracker.unity3d.com/issues/layer-list-is-not-duplicated-when-duplicating-a-layeredlit-material">UUM-11123</a>)</p></li>
<li><p>HDRP: Fixed layer lit shader UI.</p></li>
<li><p>HDRP: Fixed leaks in ray tracing effects due to missing ambient probe for ray tracing effects.
(UUM-589)</p></li>
<li><p>HDRP: Fixed light layers when using motion vectors.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-enable-both-light-layers-and-decal-layers-breaks-visual-environment-on-skinned-mesh-renderers">UUM-15125</a>)</p></li>
<li><p>HDRP: Fixed Local Volumetric Fog tooltips.</p></li>
<li><p>HDRP: Fixed MinMax of Transparent Thickness.</p></li>
<li><p>HDRP: Fixed minor bug in the shadow ray culling for the cone spot light.
(UUM-9708)</p></li>
<li><p>HDRP: Fixed misc shader warnings.</p></li>
<li><p>HDRP: Fixed missing doc API for RTAS Debug display.</p></li>
<li><p>HDRP: Fixed missing tag on decal shader properties.</p></li>
<li><p>HDRP: Fixed Missing tooltip for Screen Weight Distance in Screen Space Refraction Override.
(UUM-16930)</p></li>
<li><p>HDRP: Fixed mouse position in debug menu with scaled screens in editor.
(UUM-16880)</p></li>
<li><p>HDRP: Fixed NeedMotionVectorForTransparent checking the wrong flag.</p></li>
<li><p>HDRP: Fixed noisy top shadows when using 'High' Filtering Quality with Tesselated Meshes (Lit Tesselation).
(<a href="https://issuetracker.unity3d.com/issues/hdrp-noisy-top-shadows-when-using-high-filtering-quality-with-tesselated-meshes-lit-tesselation">UUM-3341</a>)</p></li>
<li><p>HDRP: Fixed Normal Map assiignation when importing FBX Materials.</p></li>
<li><p>HDRP: Fixed null reference error in the rendering debugger when no camera is available.
(UUM-18189)</p></li>
<li><p>HDRP: Fixed nullref from debug menu in release build.</p></li>
<li><p>HDRP: Fixed objects belonging to preview scenes being marked as dirty during migration.</p></li>
<li><p>HDRP: Fixed option to force motion blur off when in XR.</p></li>
<li><p>HDRP: Fixed options to trigger cached shadows updates on light transform changes.</p></li>
<li><p>HDRP: Fixed path tracer denoising in player builds.
(1424658)</p></li>
<li><p>HDRP: Fixed path tracing to better match transparent object behavior observed in rasterization.
(1408034)</p></li>
<li><p>HDRP: Fixed performance penalty when hardware DRS was used between multiple views like editor or other gameviews.</p></li>
<li><p>HDRP: Fixed pivot position in the eye material sample scene.</p></li>
<li><p>HDRP: Fixed Probe Debug view misbehaving with fog.</p></li>
<li><p>HDRP: Fixed probe volume baking not generating any probes on mac.</p></li>
<li><p>HDRP: Fixed quad artifacts on TAA and fixed an issue on bicubic filtering.
(<a href="https://issuetracker.unity3d.com/issues/taa-quad-like-artifacts-around-moving-silhouettes">UUM-6205</a>)</p></li>
<li><p>HDRP: Fixed range of spill removal parameter in graphics compositor UI.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-compositors-chroma-spill-rmoval-spills-magenta-over-the-layer">UUM-11634</a>)</p></li>
<li><p>HDRP: Fixed Ray Tracing Mixed Mode Collisions.
(UUM-14613)</p></li>
<li><p>HDRP: Fixed raytrace shader not working in final player build.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-rtx-rtr-does-not-seem-to-reflect-what-they-should-in-a-player">1410966</a>)</p></li>
<li><p>HDRP: Fixed realtime reflection probes using a mode of every frame to update at most once per frame.
(1427634)</p></li>
<li><p>HDRP: Fixed reflection issue upon scene filtering.
(UUM-6514)</p></li>
<li><p>HDRP: Fixed reflection probe rendering order when visible in multiple cameras.</p></li>
<li><p>HDRP: Fixed refraction fallback when object center is out of screen.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-refraction-proxy-volumes-projection-breaks-depending-on-camera-orientation-and-position">UUM-3324</a>)</p></li>
<li><p>HDRP: Fixed screen space shadow debug view not showing when no shadows is available.</p></li>
<li><p>HDRP: Fixed screen space shadow when multiple lights cast shadows.</p></li>
<li><p>HDRP: Fixed shader graph errors when disabling the bias on texture samplers.</p></li>
<li><p>HDRP: Fixed shadergraph using derivatives and Raytracing Quality keyword.
(<a href="https://issuetracker.unity3d.com/issues/nodes-using-derivatives-are-not-stripped-out-in-raytracing-even-when-using-the-raytracing-quality-keyword">UUM-8358</a>)</p></li>
<li><p>HDRP: Fixed shadow cascade transition not working properly with bias.</p></li>
<li><p>HDRP: Fixed shadow dimmer not affecting screen space shadows.
(UUM-6512)</p></li>
<li><p>HDRP: Fixed Show/Hide all Additional Properties.</p></li>
<li><p>HDRP: Fixed sky jittering when TAA is enabled.</p></li>
<li><p>HDRP: Fixed sky rendering in the first frame of path tracing. This also fixes issues with auto-exposure.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-pathtracer-flashing-at-first-frame-blow-up-the-automatic-progressive-exposure-and-create-an-overexposed-converged-frame-when-using-recorder-with-accumulation">UUM-2427</a>)</p></li>
<li><p>HDRP: Fixed slight change of color in background when changing scene hierarchy.
(UUM-14324)</p></li>
<li><p>HDRP: Fixed so that when you perform a reset on the rendering debugger, it hides elements.
(1411399)</p></li>
<li><p>HDRP: Fixed some artifacts that happened when ray traced shadows are evaluated for a surface that is far from the camera.
(<a href="https://issuetracker.unity3d.com/issues/ray-traced-shadows-show-zfighting-artifacts-when-the-camera-is-far-from-a-plane">1425941</a>)</p></li>
<li><p>HDRP: Fixed some fields of the light explorer so they don't allow out of range values.
(1401610)</p></li>
<li><p>HDRP: Fixed some XR devices: Pulling camera world space position from mainViewConstants instead of transform.</p></li>
<li><p>HDRP: Fixed SpeedTree graph compatibility by removing custom interpolators.</p></li>
<li><p>HDRP: Fixed SpeedTree importer when shader has no diffusion profile.
(UUM-1875)</p></li>
<li><p>HDRP: Fixed spot light shadows near plane.</p></li>
<li><p>HDRP: Fixed SSGI using garbage outside the frustum.
(UUM-6175)</p></li>
<li><p>HDRP: Fixed stackLit coat screen space reflection and raytrace reflection light hierarchy and IBL fallback.</p></li>
<li><p>HDRP: Fixed static lighting sky update when using an HDRI sky with a render texture in parameter.</p></li>
<li><p>HDRP: Fixed tessellation in XR.
(<a href="https://issuetracker.unity3d.com/issues/xr-sdk-hdrp-tessellation-shader-is-applied-per-eye">UUM-3338</a>)</p></li>
<li><p>HDRP: Fixed Text alignment in Transparency Inputs section.
(UUM-17208)</p></li>
<li><p>HDRP: Fixed texture wrapping of cloud layer.
(<a href="https://issuetracker.unity3d.com/issues/lowering-cloud-layer-channel-opacity-beyond-a-certain-threshold-results-in-graphical-artifact">UUM-15591</a>)</p></li>
<li><p>HDRP: Fixed the ambient probe for the volumetric clouds for the sky cubemap so they're ready at the first frame.
(1403468)</p></li>
<li><p>HDRP: Fixed the behavior of the multi-selection on the material field <strong>Motion Vector For Vertex Animation</strong>.
(<a href="https://issuetracker.unity3d.com/issues/shadergraph-material-motion-vector-for-vertex-animation-toggle-doesnt-support-multipple-inspector-targets">1383666</a>)</p></li>
<li><p>HDRP: Fixed the clamp happening on the sum of ray tracing samples instead of per sample.
(<a href="https://issuetracker.unity3d.com/issues/clamping-is-behaving-wrong-for-quality-ray-tracing-global-illumination">UUM-6513</a>)</p></li>
<li><p>HDRP: Fixed the default custom pass buffer format from R8G8B8A8_SNorm to R8G8B8A8_UNorm. Additionally, an option in the custom pass buffer format settings is available to use the old format.</p></li>
<li><p>HDRP: Fixed the default DXR volume not having any DXR effects enabled.
(UUM-6182)</p></li>
<li><p>HDRP: Fixed the fallback section so it now disappears when hiding the additional data.
(UUM-16780)</p></li>
<li><p>HDRP: Fixed the HDRP path tracer denoising temporal mode when rt handle scale is not one.
(1421249)</p></li>
<li><p>HDRP: Fixed the indirect diffuse lighting in ray tracing so it now always works properly.
(UUM-14083)</p></li>
<li><p>HDRP: Fixed the list of included HDRP asset used for stripping in the build process.</p></li>
<li><p>HDRP: Fixed the material rendering pass not correctly changed with multi-selection.
(UUM-2236)</p></li>
<li><p>HDRP: Fixed the missing debug menus to visualize the ray tracing acceleration structure.
(1371410)</p></li>
<li><p>HDRP: Fixed the ray traced ambient occlusion not rejecting the history when it should leading to severe ghosting.
(UUM-3225)</p></li>
<li><p>HDRP: Fixed the ray tracing fallbacks being broken since an Nvidia Driver Update.</p></li>
<li><p>HDRP: Fixed the ray tracing shadow denoiser s it no longer produces leaks at the edge of spotlight shadows.
(UUM-17794)</p></li>
<li><p>HDRP: Fixed the roughness value used for screen space reflections and ray traced reflections to match environment lighting.</p></li>
<li><p>HDRP: Fixed the rt screen space shadows not using the correct asset for allocating the history buffers.</p></li>
<li><p>HDRP: Fixed the unloading of scenes so it doesn't cause the unload of APV data of other scenes.
(1398573)</p></li>
<li><p>HDRP: Fixed the water system not working on metal.</p></li>
<li><p>HDRP: Fixed Tile/Cluster Debug in the Rendering Debugger for Decal and Local Volumetric Fog.</p></li>
<li><p>HDRP: Fixed timeline not updating PBR HDAdditionalLightData parameters properly.</p></li>
<li><p>HDRP: Fixed tonemapping not being applied when using the Show Cascades debug view.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-tonemapping-not-applied-when-switching-scenes-with-show-cascades-enabled">UUM-3942</a>)</p></li>
<li><p>HDRP: Fixed transmission for box lights.
(UUM-8765)</p></li>
<li><p>HDRP: Fixed transmission on directional lights.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-transmission-from-directional-light-on-thick-object-mode-is-rendered-even-when-object-is-in-shadow">UUM-15003</a>)</p></li>
<li><p>HDRP: Fixed Transparent Depth Pre/Post pass by default for the built-in HDRP Hair shader graph.</p></li>
<li><p>HDRP: Fixed unlit pixels contributing to screen space effects.
(UUM-7911)</p></li>
<li><p>HDRP: Fixed unnecessary loss of precision when all post processing are disabled.
(<a href="https://issuetracker.unity3d.com/issues/different-results-when-disabling-post-processing-effects-individually-and-disabling-post-processing-completely-on-the-camera-1">UUM-13277</a>)</p></li>
<li><p>HDRP: Fixed unsupported material properties show when rendering pass is Low Resolution.</p></li>
<li><p>HDRP: Fixed using the wrong coordinate to compute the sampling direction for the screen space global illumination.</p></li>
<li><p>HDRP: Fixed using the wrong directional light data for clouds and the definition of current Sun when the shadow pass is culled.</p></li>
<li><p>HDRP: Fixed various issues with render graph viewer when entering playmode.</p></li>
<li><p>HDRP: Fixed various issues with using SSR lighting with IBL fallback for Lit shader with clear coat.</p></li>
<li><p>HDRP: Fixed vertex color mode Add name whicgh was misleading, renamed to AddSubstract.</p></li>
<li><p>HDRP: Fixed volumetric cloud incorrectly display in lighting debug mode</p></li>
<li><p>HDRP: Fixed warning upon deleting APV data assets.</p></li>
<li><p>HDRP: Fixed warning when an APV baking set is renamed.</p></li>
<li><p>HDRP: Fixed water simulation so it stops when you enter pause mode in the unity editor.
(1400668)</p></li>
<li><p>HDRP: Fixed write to VT feedback in debug modes.</p></li>
<li><p>HDRP: Fixed zfighting artifacts for ray tracing.
(UUM-7668)</p></li>
<li><p>HDRP: Improved error reporting from exceptional RenderGraph states.</p></li>
<li><p>HDRP: Improved the motion and receiver rejection tooltips for RTGI and RTAO.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-receiver-motion-rejection-raytraced-ssgi-tooltip-improvement">UUM-13152</a>)</p></li>
<li><p>HDRP: Initialize DLSS at loading of HDRP asset. Previously intialization was too late (ad HDRP pipeline constructor). Moved initialization to OnEnable of SRP asset.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-dlssdetected-doesnt-return-correct-value-when-app-starts">UUM-5928</a>)</p></li>
<li><p>HDRP: Removed misleading part of a LensFlare tooltip.
(UUM-13946)</p></li>
<li><p>HDRP: Removed unused voluimetric clouds volume component on new scenes templates.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-new-scene-templates-created-with-unused-volumetric-clouds-component">UUM-11451</a>)</p></li>
<li><p>HDRP: Removed unwanted RTAO effect on indirect specular lighting.
(UUM-8772)</p></li>
<li><p>HDRP: Renamed IOR output in Eye shadergraph for clarification.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-rename-ior-input-port">UUM-15849</a>)</p></li>
<li><p>HDRP: SRP Lens flares occlusion improvements.
(UUM-11771)</p></li>
<li><p>HDRP: Updated DLSS test images for a driver update.
(1416077)</p></li>
<li><p>HDRP: Updated misleading tooltip in the environment lighting in HDRP.
(UUM-6178)</p></li>
<li><p>HDRP: Worked around exception when enabling raytracing when resources for raytracing have not been built.
(UUM-9570)</p></li>
<li><p>IL2CPP: Allow breakpoints to be set in managed code in private and internal types.
(<a href="https://issuetracker.unity3d.com/issues/unable-to-hit-breakpoint-in-visual-studio-when-debugging-il2cpp-build">UUM-9132</a>)</p></li>
<li><p>IL2CPP: Avoid a possible race condition when the garbage collector is enabled or disabled that could cause it to become permanently disabled.
(UUM-16300)</p></li>
<li><p>IL2CPP: Avoid an exception from Buffer.BlockCopy when the destination array is of type sbyte.
(<a href="https://issuetracker.unity3d.com/issues/android-sbyte-type-is-considered-to-be-not-primitive-when-compiling-il2cpp-code">UUM-12875</a>)</p></li>
<li><p>IL2CPP: Avoid an intermittent crash in the .NET thread pool implementation when a thread is incorrectly removed from the pool twice.
(<a href="https://issuetracker.unity3d.com/issues/android-il2cpp-system-dot-threading-dot-threadpool-sometimes-causes-player-to-crash-when-queueing-tasks">UUM-11191</a>)</p></li>
<li><p>IL2CPP: Changed Socket Handle implementation to use file descriptor.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-builds-gives-wrong-value-for-socket-dot-handle-on-windows">1389108</a>)</p></li>
<li><p>IL2CPP: Corrected the behavior of Ping on Windows platforms.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-notsupportedexception-is-thrown-when-using-ping-from-system-dot-net-dot-networkinformation">UUM-8801</a>)</p></li>
<li><p>IL2CPP: Corrected the behavior of RuntimeInformation.OSDescription on WebGL.
(<a href="https://issuetracker.unity3d.com/issues/notsupportedexception-thrown-when-calling-any-member-of-system-dot-runtime-dot-interopservices-dot-runtimeinformation-in-webgl">UUM-1144</a>)</p></li>
<li><p>IL2CPP: Corrected the build of a Mac Standalone player with an exported Xcode project when script debugging is enabled.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-xcode-build-fails-when-building-an-exported-project-with-script-debugging-enabled">UUM-11352</a>)</p></li>
<li><p>IL2CPP: Do not strip out ETW patterns on non-windows platforms.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-new-operator-causes-a-nullreferenceexception-error-in-a-build">UUM-5771</a>)</p></li>
<li><p>IL2CPP: Fixed a crash in the IL2CPP runtime when the GUID property of a type is obtained for a type with a StructLayout attribute but without a Guid attribute.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-il2cpp-icalls-mscorlib-system-runtimetype-getguid-when-building-and-running-a-project-using-il2cpp-scripting-backend">UUM-10859</a>)</p></li>
<li><p>IL2CPP: Fixed a crash when using GetFiles multiple times for directories with many files on iOS.
(<a href="https://issuetracker.unity3d.com/issues/ios-crash-when-calling-directory-dot-getfiles-twice">UUM-8885</a>)</p></li>
<li><p>IL2CPP: Fixed an exception when calling <code>Enum.CompareTo</code> on enum with a System.Uint16 underling type.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-object-must-be-the-same-type-as-the-enum-exception-is-thrown-when-using-sorteddictionary">UUM-11944</a>)</p></li>
<li><p>IL2CPP: Fixed an intermittent crash on shutdown when many threads are waiting on a Monitor object inside for a C# lock statement.
(<a href="https://issuetracker.unity3d.com/issues/crash-in-getmonitorandthrowifnotlockedbycurrentthread-when-running-the-project-repeatedly-and-using-il2cpp">UUM-10374</a>)</p></li>
<li><p>IL2CPP: Fixed an issue so IL2CPP correctly determines a generic instance with all blittable fields was not itself blittable.
(<a href="https://issuetracker.unity3d.com/issues/argumentexception-when-running-a-project-with-a-il2cpp-scripting-backend">1391730</a>)</p></li>
<li><p>IL2CPP: Fixed compilation error that occurred when a enum was passed by reference in a marshalling definition.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-enum-marshaling">UUM-11353</a>)</p></li>
<li><p>IL2CPP: Fixed crash in IL2CPP metadata code when loading a field RVA value
(UUM-17473)</p></li>
<li><p>IL2CPP: Fixed fatal error in Unity CIL Linker with RecognizedReflectionAccessPattern reporting.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-fatal-error-in-unity-cil-linker-when-using-unitylinker">UUM-13281</a>)</p></li>
<li><p>IL2CPP: Fixed IL2CPP build failure when using Unbox instruction with generic by reference return type.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-an-assembly-renamed-via-sentrys-assembly-alias-tool">UUM-5942</a>)</p></li>
<li><p>IL2CPP: Fixed leak of internal thread objects that could manifest in a pause on player exit.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-player-hangs-for-20-seconds-after-closing-it-when-running-threads">UUM-607</a>)</p></li>
<li><p>IL2CPP: Fixed line numbers in exceptions when you use IL2CPP scripting backend and Visual Studio 2017.</p></li>
<li><p>IL2CPP: Fixed line numbers in exceptions when you use IL2CPP scripting backend and Visual Studio 2022 17.1 or later.</p></li>
<li><p>IL2CPP: Fixed performance regression in regular expressions.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-regex-perfomance-regression-when-using-il2cpp-scripting-backend">UUM-590</a>)</p></li>
<li><p>IL2CPP: Fixed possible crash/corruption when invoking a virtual generic method on a generic type by reflection or when Faster (smaller) builds is enabled.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-crashes-when-symbols-cannot-be-found">UUM-12498</a>)</p></li>
<li><p>IL2CPP: Fixed readdir reporting wrong names on QNX.
(PIA-557)</p></li>
<li><p>IL2CPP: Fixed syntax error: ')' " when "Faster (smaller) builds" is selected on function pointer call with a return type but no parameters.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-error-c2059-syntax-error-when-faster-smaller-builds-is-selected">UUM-14778</a>)</p></li>
<li><p>IL2CPP: Improved error messages for unsupported Process API methods.
(<a href="https://issuetracker.unity3d.com/issues/player-crashes-when-processs-priority-is-set-to-high-and-using-il2cpp-scripting-backend">UUM-11147</a>)</p></li>
<li><p>IL2CPP: Made sure that the latest build code is used for il2cpp when you export to IDE projects.</p></li>
<li><p>IL2CPP: Prevent a memory corruption that could happen when the "Faster (smaller) builds" option is used with generic types that have a generic base class with no fields, and a different base class with at least one generic field.
(UUM-3066)</p></li>
<li><p>IL2CPP: Throw an exception from Buffer.BlockCopy when the destination array has a non-primitive element type.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-running-il2cpp-build-that-uses-system-dot-buffercopy">UUM-3302</a>)</p></li>
<li><p>IL2CPP: Workaround for a MSVC C++ compiler optimization bug related the Math.Max implementation for System.Decimal.
(<a href="https://issuetracker.unity3d.com/issues/decimal-function-values-are-incorrect-when-running-the-build-with-il2cpp-scripting-backend">UUM-11487</a>)</p></li>
<li><p>IMGUI: Fixed the incorrect scene icons in the project window upon switching themes.
(<a href="https://issuetracker.unity3d.com/issues/scene-icon-in-the-project-window-changes-its-theme-to-the-opposite-of-the-current-theme-when-changing-the-editor-theme">1349458</a>)</p></li>
<li><p>IMGUI: Gives out a warning to the user if a child has the same id as a parent inside a DropdownMenu.
(<a href="https://issuetracker.unity3d.com/issues/advanceddropdown-opens-an-item-without-children-when-the-item-has-the-same-id-as-its-parent">1380024</a>)</p></li>
<li><p>iOS: Added "Processing" background mode.
(<a href="https://issuetracker.unity3d.com/issues/ios-ios-dot-xcode-dot-backgroundmodesoptions-is-missing-processing-option">1333761</a>)</p></li>
<li><p>iOS: Disabled capitalization, autocorrection and others when soft keyboard is secure and input is hidden.
(<a href="https://issuetracker.unity3d.com/issues/shift-is-pressed-in-the-keyboard-when-textmeshpro-input-field-content-type-is-password-and-hide-mobile-input-is-checked">UUM-5974</a>)</p></li>
<li><p>iOS: Disabled depth16 support on pre-iOS14 or pre-A9, since depth-bias does not work correctly.
(UUM-9562)</p></li>
<li><p>iOS: Fixed crash on warming up shader variants with procedural instancing.
(UUM-10114)</p></li>
<li><p>iOS: Fixed embedded frameworks loosing "sign on copy".
(<a href="https://issuetracker.unity3d.com/issues/embedded-ios-frameworks-are-not-automatically-signed">UUM-7653</a>)</p></li>
<li><p>iOS: Fixed forcing jobified metal rendering.
(UUM-7195)</p></li>
<li><p>iOS: Fixed iphone player dylib missing "sign on copy" in simulator.
(<a href="https://issuetracker.unity3d.com/issues/cocoapods-simulator-editor-2022-issue">UUM-2829</a>)</p></li>
<li><p>iOS: Fixed orientation handling on startup (when the phone is rotated between starting up and showing unity itself).
(<a href="https://issuetracker.unity3d.com/issues/input-dot-gyro-dot-gravity-inverted-sign-on-x-and-y-axis-depending-on-ios-device-orientation-when-app-starts">UUM-7461</a>)</p></li>
<li><p>iOS: Fixed unity view behavior when in "split view".
(<a href="https://issuetracker.unity3d.com/issues/ios-players-resolution-changes-when-opening-a-scene-with-a-different-orientation-if-using-split-view">UUM-9081</a>)</p></li>
<li><p>iOS: When using "Replace" we will now overwrite any custom changes to project files again.
(<a href="https://issuetracker.unity3d.com/issues/replace-no-longer-replaces-when-using-incremental-pipeline">1374317</a>)</p></li>
<li><p>Kernel: Fixed a crash introduced in a previous internal iteration with managed exception types in a global namespace thrown from burst compiled code.</p></li>
<li><p>Kernel: Fixed Application.targetFrameRate to not cause jitter in Time.deltaTime measurements.</p></li>
<li><p>Kernel: Fixed AssertOnRecursiveCall with tests.
(<a href="https://issuetracker.unity3d.com/issues/assertonrecursivecall-dot-does-not-works">UUM-13234</a>)</p></li>
<li><p>Kernel: Fixed race condition in DualThreadAllocator when using BatchDelete.
(UUM-5941)</p></li>
<li><p>License: Allowed ULF activation on machines that have an empty BIOS identifier (empty mb4 - BIOS Id on Windows).</p></li>
<li><p>License: Extended the maximum possible time to connect to the Licensing Client.</p></li>
<li><p>License: Fixed Editor console getting spammed with: 'Generic message code 233 has not been handled.'</p></li>
<li><p>Linux: Fix inspector window black out after addComponent through menu or shortcut
(UUM-1565)</p></li>
<li><p>Linux: Fixed "ExternalProcess::OnExitedMainThread" logged in the Console window when closing Profiler (Standalone Process) window.
(<a href="https://issuetracker.unity3d.com/issues/profiler-linux-rocky-externalprocess-onexitedmainthread-logged-in-the-console-window-when-closing-profiler-standalone-process-window">UUM-5888</a>)</p></li>
<li><p>Linux: Fixed ability to make Apple silicon related builds on Linux.
(1388311)</p></li>
<li><p>Linux: Fixed CinemachineVirtualCamera Component's body's "ScreenY" and "ScreenX" values move towards 1.5 while pressing and moving the mouse
(<a href="https://issuetracker.unity3d.com/issues/linux-cinemachinevirtualcamera-components-bodys-screeny-and-screenx-values-move-towards-1-dot-5-while-pressing-and-moving-the-mouse">UUM-14611</a>)</p></li>
<li><p>Linux: Fixed prefab override button in inspector spams gui error when clicking it multiple times.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-throwing-argumentexceptions-while-opening-prefab-overrides-context-window-1">UUM-1566</a>)</p></li>
<li><p>Linux: Fixed scrolling with the scroll wheel is slower on builds when using the New Input System package on Linux Standalone.
(<a href="https://issuetracker.unity3d.com/issues/linux-scrolling-with-the-scroll-wheel-is-slower-on-builds-when-using-the-new-input-system-package">UUM-12564</a>)</p></li>
<li><p>Linux: Fixed soft crash/deadlock when dragging editor window tabs around different monitors while using open source drivers.
(1370541)</p></li>
<li><p>Linux: Fixed standalone profiler crashing when launched on Linux.
(<a href="https://issuetracker.unity3d.com/issues/profiler-linux-standalone-profiler-does-not-open-logs-externalprocess-onexitedmainthread">1371326</a>)</p></li>
<li><p>Linux: Prevented a crash after assert during a failed material remapping in the LEGO Learn tutorial.
(<a href="https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-gfxdevicegles-drawbuffersbatchmode-when-entering-play-mode-in-the-lego-tutorial">1423683</a>)</p></li>
<li><p>Linux: Prevented Linux from going to sleep when the progress bar is busy. This only supports GNOME desktop environment.
(1407354)</p></li>
<li><p>Linux: Updated Simple DirecMedia Layer to 2.0.22
(UUM-6773)</p></li>
<li><p>macOS: Added warning to inform that on Apple Silicon builds that OpenGL is not available and Metal will be used instead.
(<a href="https://issuetracker.unity3d.com/issues/m1-switching-to-openglcore-doesnt-actually-change-the-active-graphics-api">1388438</a>)</p></li>
<li><p>macOS: Fixed crash when toggling fullscreen shortcut on/off at a rapid rate.
(1400208)</p></li>
<li><p>macOS: Fixed Display systemWidth and systemHeight being wrong until window was moved to another display.
(<a href="https://issuetracker.unity3d.com/issues/macos-returned-systemwidth-and-systemheight-are-half-of-the-correct-values-when-using-display-dot-main">UUM-501</a>)</p></li>
<li><p>macOS: Fixed new InputSystem mouse position not being updated after resolution change.
(<a href="https://issuetracker.unity3d.com/issues/mouse-position-is-not-updated-when-screen-resolution-is-changed">UUM-10519</a>)</p></li>
<li><p>macOS: Fixed undocked editor windows always being displayed on top when the Editor is fullscreened using the OSX's greeen fullscreen button.
(<a href="https://issuetracker.unity3d.com/issues/undocked-windows-are-always-on-top-of-other-apps-when-the-mac-editor-has-been-fullscreened-and-then-windowed">1384620</a>)</p></li>
<li><p>macOS: Prevented the <strong>invalid shortcut</strong> sound from playing when you interact with a fullscreen play mode view.
(1400206)</p></li>
<li><p>Mobile: Fixed incorrect external keyboard GUI events on Android and iOS. Now Event.character is set correctly.</p></li>
<li><p>Mobile: Fixed Patch feature for some devices running Android 12.
(1379518)</p></li>
<li><p>Mobile: Fixed Screen.orientation returning deprecated "Landscape" value instead of "LandscapeLeft".
(<a href="https://issuetracker.unity3d.com/issues/screen-dot-orientation-returns-landscape-despite-it-being-made-obsolete">1394769</a>)</p></li>
<li><p>Mobile: Fixed <code>OnMouse</code> events so they trigger for iOS/Android builds.
(<a href="https://issuetracker.unity3d.com/issues/ios-android-onmouse-events-are-not-triggered-on-mobile-builds">1412741</a>)</p></li>
<li><p>Mono: Avoid an editor crash when the debugger code fails to lookup the signature of a method.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-method-commands-internal-when-unity-is-attached-to-visual-studio-and-a-breakpoint-is-set">UUM-9219</a>)</p></li>
<li><p>Mono: Avoid exception when registering a window class in different domain instances.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-callwindowprocw-when-opening-windows-form-in-play-mode">UUM-13189</a>)</p></li>
<li><p>Mono: Corrected issue where FileSystemEventArgs.FullPath did not return a fully qualified path.
(<a href="https://issuetracker.unity3d.com/issues/failed-to-load-a-custom-asset-when-using-naninovel-package">1376258</a>)</p></li>
<li><p>Mono: Fixed "The BinaryReader read data to a Span &lt;byte&gt; is always zero.".
(<a href="https://issuetracker.unity3d.com/issues/the-binaryreader-read-data-to-a-span-is-always-zero">1377375</a>)</p></li>
<li><p>Mono: Fixed a crash when mixed callstack debugging was enabled on non-Windows platforms.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-on-startup-when-mixed-callstacks-diagnostics-switch-is-enabled">UUM-16791</a>)</p></li>
<li><p>Mono: Fixed crash that would occur when assigning a large struct to the field of a null object.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-string-memcpy-when-component-which-is-inside-editor-folder-is-applied-to-a-prefab">1349195</a>)</p></li>
<li><p>Mono: Fixed crash when passing a generic class to a function pointer.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-invoking-function-pointer-runtime-invoke-object-when-type-argument-is-a-class">UUM-603</a>)</p></li>
<li><p>Mono: Fixed Editor liveness crash when processing RealProxy classes.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-mono-traverse-objects-when-using-appdomain-dot-unload-and-trying-to-load-dll-file">UUM-13031</a>)</p></li>
<li><p>Mono: Fixed incorrect Burst exception control flow in Unity Editor.
(<a href="https://issuetracker.unity3d.com/issues/incorrect-burst-exception-control-flow-in-editor-due-to-mono-handling-of-calli-instruction">1396617</a>)</p></li>
<li><p>Mono: Fixed Interlocked.CompareExchange float on M1.
(UUM-9159)</p></li>
<li><p>Mono: Fixed LINQ performance regression on linux by switching to a more efficient stack checking method.
(<a href="https://issuetracker.unity3d.com/issues/linux-c-number-reflection-performance-is-50-to-60-times-slower">UUM-11526</a>)</p></li>
<li><p>Mono: Fixed System.Windows.Forms.SendKeys.Send on Windows.</p></li>
<li><p>Mono: Updated the machine config file for Android Player builds.
(<a href="https://issuetracker.unity3d.com/issues/mono-android-nullreferenceexception-error-is-thrown-in-device-logs-when-calling-webrequest-dot-createhttp-function">1405235</a>)</p></li>
<li><p>Networking: UnityWebRequest will not change HEAD to GET on 302 or 303 response.
(UUM-7274)</p></li>
<li><p>Package Manager: Changed the Editor to show the cancel button text during multi-select.
(1408049)</p></li>
<li><p>Package Manager: Disabled element toggle in import wizard when none of it's child can be toggled.
(1385403)</p></li>
<li><p>Package Manager: Fixed a bug so that the <strong>redownload</strong> button is disabled when offline.
(1425912)</p></li>
<li><p>Package Manager: Fixed a bug where the "experimental package in use" dropdown would show up when packages not coming from the Unity registry were being used.
(1382920)</p></li>
<li><p>Package Manager: Fixed a crash when the editor window is closed during package export.
(<a href="https://issuetracker.unity3d.com/issues/graphics-editor-crashes-if-unity-is-closed-in-the-middle-of-light-baking-and-exporting-package">1305962</a>)</p></li>
<li><p>Package Manager: Fixed a failure in <code>Unity.IntegrationTests.EditorUI.EditorCrashOnBroadcastMessageAny.Crash</code>.
(1428882)</p></li>
<li><p>Package Manager: Fixed a typo in Package Manager preferences.</p></li>
<li><p>Package Manager: Fixed an issue where .unitypackage dependencies exported from an older editor were not updated when importing in a newer editor.
(<a href="https://issuetracker.unity3d.com/issues/importing-a-unitypackage-does-not-upgrade-its-dependencies-using-the-editor-manifest-based-upgrade-logic">UUM-15081</a>)</p></li>
<li><p>Package Manager: Fixed an issue where having package folders without a package manifest in the project's Library folder would fail resolving <code>local-tarball</code> or <code>git</code> packages.</p></li>
<li><p>Package Manager: Fixed an issue where JSON files encoded using UTF-8 with BOM could not be parsed.</p></li>
<li><p>Package Manager: Fixed an issue where package metadata would be fetched even though the locally cached metadata was up-to-date.</p></li>
<li><p>Package Manager: Fixed an issue where <code>local-tarball</code> dependencies would become unresolved if the source tarball was removed.</p></li>
<li><p>Package Manager: Fixed custom packages hosted on a scoped registry so they don't appear as being hosted on Unity Registry.
(1410947)</p></li>
<li><p>Package Manager: Fixed GPU usage spikes to 20% when downloading packages from Package Manager.
(<a href="https://issuetracker.unity3d.com/issues/package-manager-when-downloading-big-assets-gpu-usage-is-unstable">1364444</a>)</p></li>
<li><p>Package Manager: Fixed the inconsistencies around link styles in Package Manager windows and Package Manager window settings.
(1405220)</p></li>
<li><p>Package Manager: Fixed UnityPackageManager process leaving dangling IPC socket file after it exited.</p></li>
<li><p>Package Manager: Fixed warning when exporting a package containing invalid cross platform character.
(<a href="https://issuetracker.unity3d.com/issues/unity-allows-to-export-a-package-that-has-an-invalid-path-and-does-not-strip-illegal-symbols-when-importing-it">1322064</a>)</p></li>
<li><p>Package Manager: Improved readability of the Package Details Dependencies list at low width.
(1430657)</p></li>
<li><p>Package Manager: Package Manager: Ensure that only the manifest version and patches of that version are tagged as Release in Package Manager.
(UUM-8938)</p></li>
<li><p>Package Manager: Removed the default package.
(1406974)</p></li>
<li><p>Particles: Ensured that MeshFilter components load before Particle Systems so you can use them during prewarms.
(<a href="https://issuetracker.unity3d.com/issues/particle-system-ignores-the-shape-parameter-and-shoots-particles-in-the-straight-line-when-the-prewarm-setting-is-turned-on">1410915</a>)</p></li>
<li><p>Particles: Fixed a crash race condition in geometry jobs that were used by the shuriken particle system when native graphics jobs in use.
(UUM-14684)</p></li>
<li><p>Particles: Fixed an issue to ensure GetTriggerParticles always returns the correct results.
(<a href="https://issuetracker.unity3d.com/issues/gettriggerparticles-returns-0-every-few-frames-when-getting-a-number-of-particles-inside">UUM-14581</a>)</p></li>
<li><p>Particles: Fixed an issue with the particle bounding box so it correctly contains all particles.
(<a href="https://issuetracker.unity3d.com/issues/particle-system-flickers-slash-disappears-when-using-custom-simulation-space">1377023</a>)</p></li>
<li><p>Particles: Fixed erroneous error message: "all(sheetIndexNormalized &gt;= 0.0f) &amp;&amp; all(sheetIndexNormalized &lt;= 1.0f)".
(<a href="https://issuetracker.unity3d.com/issues/assertion-failed-thrown-when-running-particle-system-with-texture-sheet-animation-enabled-in-play-mode-for-a-while">1364565</a>)</p></li>
<li><p>Particles: Fixed invert culling api when used with Particle Systems.
(<a href="https://issuetracker.unity3d.com/issues/particle-system-effects-are-not-flipped-inside-out-when-using-the-gl-dot-invertculling-function">UUM-890</a>)</p></li>
<li><p>Particles: Improved lifetime precision of the Trail module when Unity runs for many hours.
(<a href="https://issuetracker.unity3d.com/issues/particle-system-trail-becomes-longer-after-time-progression">1370365</a>)</p></li>
<li><p>Particles: Orbital velocity curves must all use the same mode. Display an error and don't crash, if this is not the case.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-evaluateslow-when-running-particle-system">UUM-8679</a>)</p></li>
<li><p>Particles: Prevented the Standard Unlit Particle shader from performing unneeded lighting calculations on the CPU when you use the Built-in Rendering Pipeline.
(<a href="https://issuetracker.unity3d.com/issues/duplicate-unlit-particle-system-draw-calls-cant-be-batched-when-there-are-multiple-lights-in-the-scene">1402353</a>)</p></li>
<li><p>Physics: Fixed a case where the Transform scale would not affect Anchor Transform tool gizmo position.
(<a href="https://issuetracker.unity3d.com/issues/physics-articulation-body-scale-does-not-affect-anchor-transform-tool-gizmo-position">1381538</a>)</p></li>
<li><p>Physics: Fixed an error message when trying to set an empty mesh on a MeshCollider component.
(<a href="https://issuetracker.unity3d.com/issues/this-mesh-collider-is-attached-to-gameobject-but-doesnt-have-read-slash-write-enabled-error-when-creating-a-mesh-without-vertices">1409430</a>)</p></li>
<li><p>Physics: Fixed an issue where gfx buffers on dx12 would be corrupted by cloth attempting to still read into them post SkinnedMeshRenderer being cleaned up.
(1381647)</p></li>
<li><p>Physics: Fixed an set of architectural issues with cloth, that improved performance during skinning and simulation. Furthermore enabling and disabling of Cloth components no longer stalls the main thread attempting to recreate the internal physics representation.
(<a href="https://issuetracker.unity3d.com/issues/cloth-performance-drops-when-displaying-more-gameobjects-with-cloth-and-then-hiding-them-off-screen">1173457</a>)</p></li>
<li><p>Physics: Fixed Articulation Bodies teleporting to NaN coordinates when changing joint type at runtime.<br></p>

<ul>
<li>Fixed Articulation Bodies with spherical joints spinning uncontrollably in some scenarios.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-internalabp-abp-pairmanager-addpair-when-switching-to-articulationjointtype-dot-sphericaljoint-during-runtime">1418715</a>)</li>
</ul></li>
<li><p>Physics: Fixed ArticulationBody Anchor rotation values disappearing when Inspector window width is reduced.
(<a href="https://issuetracker.unity3d.com/issues/anchor-rotation-values-disappear-when-scaling-inspector-window">1393075</a>)</p></li>
<li><p>Physics: Fixed different Force Modes overwriting previously applied forces for Articulation Bodies.
(<a href="https://issuetracker.unity3d.com/issues/forcemode-overload-in-any-variant-of-addforce-for-articulationbody-cancels-any-previous-applied-physics-in-the-same-frame">1349587</a>)</p></li>
<li><p>Physics: Fixed non-convex Colliders not being recreated after removing a Rigidbody.<br></p>

<ul>
<li>Fixed all Colliders not being recreated after removing an Articulation Body.
(<a href="https://issuetracker.unity3d.com/issues/physics-debugger-doesnt-show-non-convex-mesh-colliders-after-removing-non-kinematic-rigidbody-until-colliders-are-recalculated">1322843</a>)</li>
</ul></li>
<li><p>Physics: Fixed Null Reference Exception when entering play mode with the Cloth Constraints window open.
(<a href="https://issuetracker.unity3d.com/issues/nullreferenceexception-errors-are-thrown-after-exiting-play-mode-when-edit-cloth-constraints-is-enabled-on-a-cloth-component">1371050</a>)</p></li>
<li><p>Physics: Fixed <code>ArticulationBody</code> indices so they match when using methods like <code>GetJointPositions</code> and <code>GetDriveTargets</code>.
(<a href="https://issuetracker.unity3d.com/issues/data-indices-dont-match-when-using-articulationbody-getdrivetargets-and-getjointpositions">1386970</a>)</p></li>
<li><p>Physics: Fixed <code>ArticulationBody</code> indices so they match when using the <code>GetDriveForces</code> method.
(<a href="https://issuetracker.unity3d.com/issues/articulationbody-index-hierarchy-is-incorrect-when-using-getdriveforces-method">1397106</a>)</p></li>
<li><p>Physics: Removed SetJointAcceleration methods as they were added by mistake and not serving a purpose.
(<a href="https://issuetracker.unity3d.com/issues/articulationbody-dot-setjointaccelerations-does-not-change-the-accelerations-of-the-joints">1322614</a>)</p></li>
<li><p>Physics 2D: Corrected a typo in the tooltip for "SurfaceEffector2D.useContactForce".
(<a href="https://issuetracker.unity3d.com/issues/description-of-the-surface-effector-2d-use-contact-force-option-contains-a-typo">1396766</a>)</p></li>
<li><p>Physics 2D: Fixed an issue now that when a CompositeCollider2D is copied to a new GameObject, any persisted 2D Collider paths are rebuilt if they are no longer appropriate to the new hierarchy.
(<a href="https://issuetracker.unity3d.com/issues/painting-tilemap-crashes-when-tilemap-collider-2d-is-used-by-composite-and-composite-collider-2d-are-copied">UUM-7860</a>)</p></li>
<li><p>Physics 2D: Fixed an issue where "Rigidbody2D.IsTouching()" resulted in incorrect results even though there were valid contacts.
(<a href="https://issuetracker.unity3d.com/issues/rigidbody2d-dot-istouching-does-not-return-true-on-collision-for-its-duplicate-gameobjects-when-contactfilter2d-and-layermask-are-used">UUM-7698</a>)</p></li>
<li><p>Physics 2D: Fixed and issue where the ContactPoint2D relative velocity reported was incorrect when using Continuous Collision Detection.
(<a href="https://issuetracker.unity3d.com/issues/relative-velocity-spikes-when-there-are-a-lot-of-rigidbody2d-gameobjects-with-collision-detection-set-to-continuous">UUM-6574</a>)</p></li>
<li><p>Physics 2D: Fixed incorrect tooltip information regarding keyboard shortcuts, displayed for the <strong>Edit Collider</strong> button in the Inspector view for all 2D Colliders.
(<a href="https://issuetracker.unity3d.com/issues/incorrect-tooltip-displayed-for-the-edit-polyline-button-of-polygon-collider-2d-and-edge-collider-2d-components">1393523</a>)</p></li>
<li><p>Plugins: Fixed a typo in the Vulkan native plugin documentation.</p></li>
<li><p>Prefabs: Added a PrefabFamilyPopup for Prefab Assets. This popup gives an overview of the inheritance tree for a selected Prefab Asset along with the number of overrides per variant for consistency with the Material Variant popup.
(1393268)</p></li>
<li><p>Prefabs: Added ability to revert a property override on a single/multiple Prefab instance(s) if an ordinary GameObject is also selected.
(<a href="https://issuetracker.unity3d.com/issues/multi-selection-with-non-prefabs-prevents-unapplied-changes-from-reverting">1370630</a>)</p></li>
<li><p>Prefabs: Added components in prefab variants now has more correct handling of the order.
(<a href="https://issuetracker.unity3d.com/issues/prefab-variant-instances-component-positions-in-the-inspector-are-inconsistent-when-added-from-inside-the-prefab-mode">1165214</a>)</p></li>
<li><p>Prefabs: Added components on a prefab instance can now be reordered and have the order persisted.
(<a href="https://issuetracker.unity3d.com/issues/prefab-component-order-in-the-inspector-window-is-reverted-upon-exiting-prefab-mode-after-changes-are-made">1275173</a>, <a href="https://issuetracker.unity3d.com/issues/unapplied-prefab-override-components-cannot-be-reordered-by-dragging-them-with-a-mouse">1276047</a>, <a href="https://issuetracker.unity3d.com/issues/added-components-to-the-instance-of-a-prefab-cannot-be-reordered-when-dragging-the-added-components">1297737</a>)</p></li>
<li><p>Prefabs: Added public callbacks before and after unpacking prefab instances.
(1393216)</p></li>
<li><p>Prefabs: Enabled saving Prefab Instances with missing source &amp; disabled dragging Prefab Instances merged as missing.
(<a href="https://issuetracker.unity3d.com/issues/redo-drag-action-creates-duplicates-of-prefabs-disconnects-from-prefab-instance-and-makes-them-unable-to-delete-or-unpack">1362794</a>)</p></li>
<li><p>Prefabs: Enabled user clean-up of unused removed components from Prefab instances from the Prefab Overrides Window and via Scene Hierarchy context menus. Details of removals are added to the Editor.log.
(<a href="https://issuetracker.unity3d.com/issues/editor-does-not-show-removed-components-when-they-are-no-longer-a-part-of-the-original-prefab">1389000</a>)</p></li>
<li><p>Prefabs: Exposed loadedSceneCount in SceneManager and updated documentation.
(<a href="https://issuetracker.unity3d.com/issues/scenemanager-dot-scenecount-includes-the-unloaded-scene-when-it-is-called-in-scenemanager-dot-sceneunloaded-event">1312900</a>)</p></li>
<li><p>Prefabs: Fixed crash when opening scenes in builds that had missing Prefab sources.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-build-when-running-the-build-with-missing-prefabs">UUM-2546</a>)</p></li>
<li><p>Prefabs: Fixed crashes caused by transform access before Awake.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-opening-a-scene-when-no-errors-are-present">1166612</a>)</p></li>
<li><p>Prefabs: Fixed OnValidate is called twice when duplicating Prefab instances in the scene.
(<a href="https://issuetracker.unity3d.com/issues/onvalidate-is-called-twice-when-modifying-gameobjects">1373124</a>)</p></li>
<li><p>Prefabs: Fixed Overrides window height is not adjusted when notifications are also present in this window.
(<a href="https://issuetracker.unity3d.com/issues/overrides-window-height-is-not-adjusted-when-notifications-also-present-in-this-window">1393028</a>)</p></li>
<li><p>Prefabs: Fixed regression of prefab override text not being bold.</p></li>
<li><p>Prefabs: Fixed so you can only create variants out of models.
(1393245)</p></li>
<li><p>Prefabs: Fixed the Scene icon in the Hierarchy window so it scales correctly with Display Scales above 125%.
(<a href="https://issuetracker.unity3d.com/issues/scene-icons-in-the-hierarchy-window-are-pixelated-when-display-scale-is-set-more-than-125-percent">1403415</a>)</p></li>
<li><p>Prefabs: Fixed two prefab bugs and made sure data loads correctly with the latest version.
(1410570, 1410577)</p></li>
<li><p>Prefabs: Improved the error messages when Prefab Assets are missing when you import and load scenes.
(1399734)</p></li>
<li><p>Profiler: Added MarkerFlags.AvailabilityNonDevelopment to ensure consistency with declarations in IUnityProfiler.h.
(<a href="https://issuetracker.unity3d.com/issues/unity-dot-profiling-dot-lowlevel-dot-markerflags-is-inconsistent-with-profiler-plugin-api-declarations-in-iunityprofiler-dot-h">1376843</a>)</p></li>
<li><p>Profiler: Fixed a crash on profiler data file load that was caused by duplicate markers with different IDs.</p></li>
<li><p>Profiler: Fixed a GC.Alloc error messages for Fake-Null objects allocated for GetComponent calls in the Editor not getting filtered in the Profiler when the "Collapse EditorOnly Samples" option is on, which is the default.
(<a href="https://issuetracker.unity3d.com/issues/allocations-under-editoronly-profilermarkers-are-not-properly-hidden-when-getcomponent-is-used-for-a-non-existent-component">1378339</a>)</p></li>
<li><p>Profiler: Fixed a potential crash when you load AudioClips.
(1387299)</p></li>
<li><p>Profiler: Fixed consistency of profiler stat flags between development and release Players on all platforms but OSX/iOS.
(<a href="https://issuetracker.unity3d.com/issues/not-all-non-dev-profiler-stats-are-marked-with-a-kunityprofilermarkerflagavailabilitynondev-flag">1376913</a>)</p></li>
<li><p>Profiler: Fixed failures in opening local documentation files from Editor on macOS.
(<a href="https://issuetracker.unity3d.com/issues/application-cannot-be-opened-error-on-pressng-help-icon-in-profiler-window">UUM-6164</a>)</p></li>
<li><p>Profiler: Fixed freeze caused when opening profiler data recorded on Editor versions 2019.4.28f1 and prior.
(<a href="https://issuetracker.unity3d.com/issues/profiler-freezes-when-loading-profiler-data-that-was-saved-in-unity-2019-dot-4-28f1-or-earlier">UUM-2234</a>)</p></li>
<li><p>Profiler: Fixed issue on Metal where an error message about texture binding may appear in some situations.
(<a href="https://issuetracker.unity3d.com/issues/metal-fragment-shader-missing-texture-binding-at-index-0-warning-produced-on-switching-to-timeline-mode-in-profiler">1398282</a>)</p></li>
<li><p>Profiler: Fixed issue where autoconnecting to/disconnecting from profiling tools could cause a crash.
(<a href="https://issuetracker.unity3d.com/issues/ios-crash-when-launching-build-with-autoconnect-profiler-enabled-with-the-profiler-window-closed">1383511</a>)</p></li>
<li><p>Profiler: Fixed Memory Profiler capture reloading managed objects and altering serializable fields.
(<a href="https://issuetracker.unity3d.com/issues/the-value-of-a-variable-is-changed-after-taking-a-memory-profiler-snapshot">1387503</a>)</p></li>
<li><p>Profiler: Fixed Memory Profiler incorrectly reported memory regions on some platforms.
(<a href="https://issuetracker.unity3d.com/issues/memory-profiler-alloc-default-main-is-reported-as-not-used-on-android-even-though-the-dynamic-heap-allocator-is-used">1369231</a>)</p></li>
<li><p>Profiler: Fixed profiler not opening the correct version of the documentation.
(<a href="https://issuetracker.unity3d.com/issues/profiler-help-button-redirects-to-wrong-stream-documentation-page">1402516</a>)</p></li>
<li><p>Profiler: Fixed ProfilerMarker initialization and usage in Release players.
(UUM-9541)</p></li>
<li><p>Profiler: Fixed SRP profiler marker doesn't work in deep profiler mode.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-inl-prefixed-calls-are-not-tracked-in-deep-profiling-mode">1372769</a>)</p></li>
<li><p>Profiler: Fixed System Used Memory values being lower than expected on GameCore.
(UUM-7060)</p></li>
<li><p>Profiler: Fixed the deadlock in Memory Profiler gfx resources tracking code when you enable the profiler.
(1424623)</p></li>
<li><p>Profiler: Fixed the Module Editor so it doesn't execute a redundant loop when collecting counters for display.
(<a href="https://issuetracker.unity3d.com/issues/redundant-for-loop-when-using-unityeditor-dot-profiling-dot-moduleeditor-dot-countercollector">1377994</a>)</p></li>
<li><p>Profiler: Fixed the OpenGL setting so it doesn't appear in the UWP project settings.</p></li>
<li><p>Profiler: Prevented whitespace only display names for Profiler Modules created via the Module Editor or the Profiler Module Extensibility API.
(<a href="https://issuetracker.unity3d.com/issues/new-profiler-module-can-be-created-without-the-title-when-user-adds-a-space-in-the-title">1405678</a>)</p></li>
<li><p>Profiler: Removed invalidly reported Camera.Render marker from the list available in release mode.
(1381559)</p></li>
<li><p>Profiler: Removed utility thread profiler markers to ensure consistency between Development and Release Players.
(<a href="https://issuetracker.unity3d.com/issues/profilerrecorder-render-thread-statistic-reports-the-lastvalue-as-0-when-the-profiler-window-isnt-open">1339387</a>)</p></li>
<li><p>Profiler: Taking a memory capture no longer logs a message to the console displaying the temporary file location.</p></li>
<li><p>Scene Manager: Fixed an issue where opening a broken scene with light mapping enabled could crash the editor.
(<a href="https://issuetracker.unity3d.com/issues/scene-causes-editor-crash-when-specific-lighting-data-asset-is-used">UUM-9319</a>)</p></li>
<li><p>Scene Manager: Fixed EditorApplication.hierarchyWindowItemOnGUI callback isn't called when scrolling with multiple Scenes loaded.
(<a href="https://issuetracker.unity3d.com/issues/editorapplication-dot-hiearchywindowitemongui-callback-isnt-called-when-scrolling-with-multiple-scenes-loaded">1403105</a>)</p></li>
<li><p>Scene Manager: Fixed errors when Lighting Explorer is docked with Scene view and  you double-click on a gameobject in the Hierarchy.
(<a href="https://issuetracker.unity3d.com/issues/invalid-guilayout-state-in-scenehierarchywindow-view-after-double-clicking-on-an-root-prefab-gameobject-in-the-hierarchy">1401261</a>)</p></li>
<li><p>Scene Manager: Fixed readability issue in hierarchy with multiple scenes for Dark theme.
(1330670)</p></li>
<li><p>Scene Manager: Fixed that copying GameObjects into another Scene was renaming them with an incremented number when not needed.
(<a href="https://issuetracker.unity3d.com/issues/copying-game-objects-into-another-scene-renames-them-with-an-incremented-number-when-both-scenes-are-loaded-in-the-hierarchy">1371127</a>)</p></li>
<li><p>Scene Manager: Fixed unnecessary save pop-up window is shown when creating a new Scene with 'Load additively' checked from the Scene template dialog.
(<a href="https://issuetracker.unity3d.com/issues/unnecessary-pop-up-window-is-shown-when-creating-a-new-scene-with-load-additively-checked">1395265</a>)</p></li>
<li><p>Scene/Game View: Ensured that you have a valid current tool when you use shortcuts in custom contexts.
(1384461)</p></li>
<li><p>Scene/Game View: Fixed "Scale All" tool exit on right click.
(<a href="https://issuetracker.unity3d.com/issues/linux-scale-all-gizmo-gets-stuck-in-stretched-mode-if-the-action-is-stopped-by-mouse-right-click">1398848</a>)</p></li>
<li><p>Scene/Game View: Fixed a case where clicking the title of an Overlay could unnecessarily rebuild the contents.
(1419892)</p></li>
<li><p>Scene/Game View: Fixed a crash caused by changing the base class of a custom editor to MonoBehaviour while the editor is active in the current the selection.
(<a href="https://issuetracker.unity3d.com/issues/crash-with-missing-stack-trace-information-after-changing-a-scene-view-script">1379123</a>)</p></li>
<li><p>Scene/Game View: Fixed a crash when exiting play mode with a GameObject that is not associated with a scene.</p></li>
<li><p>Scene/Game View: Fixed a possible crash when setting scene visibility properties with corrupted data.
(<a href="https://issuetracker.unity3d.com/issues/freeze-slash-crash-on-hierarchicalscenedata-remove-when-opening-scene">1372736</a>)</p></li>
<li><p>Scene/Game View: Fixed additional tool not left after leaving contex.
(1395110)</p></li>
<li><p>Scene/Game View: Fixed button size for ToolContext button.
(1379515)</p></li>
<li><p>Scene/Game View: Fixed case where canceling an overlay drag with context click could result in the overlay container preview persisting.
(<a href="https://issuetracker.unity3d.com/issues/overlay-gets-stuck-to-the-cursor-when-hovering-over-its-handle-after-dragging-it-and-right-clicking-outside-of-the-scene-view">1344854</a>)</p></li>
<li><p>Scene/Game View: Fixed DrawMode and GameObjectContext icons resolution.
(<a href="https://issuetracker.unity3d.com/issues/icons-of-the-draw-mode-menu-play-pause-and-step-buttons-are-low-quality">1399284</a>)</p></li>
<li><p>Scene/Game View: Fixed Editor Tools incorrectly being made available when selecting assets.
(1388647)</p></li>
<li><p>Scene/Game View: Fixed EditorToolManager calling multiple OnWillBeDeactivating when entering playmode.
(1398041)</p></li>
<li><p>Scene/Game View: Fixed instability cause by the test Picking/PhysicsDebugDraw/TestBoxCollider.
(1396900)</p></li>
<li><p>Scene/Game View: Fixed issue where VFX graph overlays would appear as docked toolbars on first show.
(1392478)</p></li>
<li><p>Scene/Game View: Fixed missing selection outline rendering in filtered scene views.
(<a href="https://issuetracker.unity3d.com/issues/missing-game-object-selection-outlines-when-viewing-prefabs-in-scene-context-or-searching-in-the-hierarchy">1392693</a>)</p></li>
<li><p>Scene/Game View: Fixed Overlay popups incorrectly closing when opening a Color field selector.
(1373436)</p></li>
<li><p>Scene/Game View: Fixed Overlays with a default <code>DockZone.Floating</code> attribute overlapping toolbars.
(1408370)</p></li>
<li><p>Scene/Game View: Fixed Pivot Mode and Pivot Rotation buttons incorrectly wrapping text when using Japanese editor localization.
(<a href="https://issuetracker.unity3d.com/issues/tool-handle-button-name-doesnt-fit-in-the-button-ui-when-the-language-is-set-to-japanese-in-the-scene-view">1388372</a>)</p></li>
<li><p>Scene/Game View: Fixed root gizmo ordering when selecting rect transforms.
(<a href="https://issuetracker.unity3d.com/issues/when-clicking-on-overlapped-ui-elements-the-selection-order-is-determined-not-by-the-order-in-which-they-are-rendered">1377544</a>)</p></li>
<li><p>Scene/Game View: Fixed so that the selection order when you click on overlapped UI elements is determined by the order they are rendered in.</p></li>
<li><p>Scene/Game View: Fixed so the restored overlay preset sends displayChanged events.
(1398366)</p></li>
<li><p>Scene/Game View: Fixed toolbar dropdown toggle buttons not highlighting on hover.
(<a href="https://issuetracker.unity3d.com/issues/scene-toggle-buttons-with-additional-options-are-not-lighting-up-on-hover">1379444</a>)</p></li>
<li><p>Scene/Game View: Fixed vertex/surface snapping behavior.
(<a href="https://issuetracker.unity3d.com/issues/vertex-snapping-to-surface-doesnt-work-correctly-when-using-center-as-tool-handle-position">1388556</a>)</p></li>
<li><p>Scene/Game View: Fixed <code>OnDrawSelectedHandles.OnDrawHandles()</code> to be reactive to the gizmo activation state.
(1384838)</p></li>
<li><p>Scene/Game View: Fixed <code>SceneView</code> incorrectly subscribing to <code>EditorApplication.update</code> multiple times when maximizing and un-maximizing window.</p></li>
<li><p>Scene/Game View: Scene/Game View: Fixed "Scene View Render Mode Textured" shortcut throwing an exception.
(<a href="https://issuetracker.unity3d.com/issues/console-error-is-thrown-when-using-a-shortcut-key-to-change-scene-view-render-mode-to-shaded">1369377</a>)</p></li>
<li><p>Scripting: Added a warning when Unity can't deterministically make a reference, the rule is that one needs to have same name.<br></p>

<ul>
<li>Fixed Roslyn Analyzers to run on startup.<br></li>
<li>Folders with name <code>Foo.cs</code> are not included as script change and included in the compilation.</li>
</ul></li>
<li><p>Scripting: Added an automatic redirect to the assembly by name.
(1393045)</p></li>
<li><p>Scripting: ApiUpdater could corrupt sources when updating attributes with parameters.</p></li>
<li><p>Scripting: Application.logMessageReceived callbacks are restored on re-entering play mode when domain reload is disabled.
(<a href="https://issuetracker.unity3d.com/issues/application-dot-logmessagereceived-callbacks-are-cleared-when-exiting-play-mode">1378388</a>)</p></li>
<li><p>Scripting: Changed Compilation+Domain reload to happen before Import so we can use the domain to extract the information. This means that that we are not depending on import order anymore.
(<a href="https://issuetracker.unity3d.com/issues/custom-built-dlls-scripts-which-have-classes-derived-from-uibehaviour-cannot-be-added-as-a-component-after-deleting-library">1223295</a>)</p></li>
<li><p>Scripting: Don't cast Mathf.Abs to float when passing a float value (increases performance).
(<a href="https://issuetracker.unity3d.com/issues/unnecessary-cast-to-float-when-calling-mathf-dot-abs">1372997</a>)</p></li>
<li><p>Scripting: Fixed a crash of the editor when calling DestroyImmediate(this) within a MonoBehaviour Reset method.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-on-menucontroller-executemenuitem-when-resetting-a-script-that-contains-reset-destroyimmediate-this">1391014</a>)</p></li>
<li><p>Scripting: Fixed a crash of the editor whenever coroutines recursively call themselves.</p></li>
<li><p>Scripting: Fixed a crash that occured when you performed a memory capture with the profiler while a <code>ScriptedImporter</code> type was still alive.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-having-a-psb-prefab-in-the-scene-and-pressing-take-sample-in-the-profiler">1405597</a>)</p></li>
<li><p>Scripting: Fixed an issue where adding a component declared in a nested class could end up adding the wrong component type.
(<a href="https://issuetracker.unity3d.com/issues/the-wrong-component-slash-class-gets-added-when-adding-a-nested-class-via-script-that-has-a-duplicate-class-elsewhere">UUM-9221</a>)</p></li>
<li><p>Scripting: Fixed an issue where Application.logMessageReceived can be called from a job, when the job is scheduled on the main thread.
(<a href="https://issuetracker.unity3d.com/issues/application-dot-logmessagereceived-is-called-from-worker-thread-when-logging-errors-from-bursted-ijob">UUM-3085</a>)</p></li>
<li><p>Scripting: Fixed an issue where applying player build settings on entering play mode does not work properly.
(<a href="https://issuetracker.unity3d.com/issues/scripting-define-symbols-changes-are-not-applied-when-apply-is-clicked-on-sds-have-been-modified-window-when-entering-play-mode">1330433</a>)</p></li>
<li><p>Scripting: Fixed an issue where assigning a Scriptable Object type to a scriptable object asset would fail.
(<a href="https://issuetracker.unity3d.com/issues/scriptableobject-script-property-does-not-get-set-to-the-one-selected">1375945</a>)</p></li>
<li><p>Scripting: Fixed an issue where define constraints on unity's pre-defined symbols like "UNITY_INCLUDE_TESTS" were misbehaving for Precompiled assemblies.
(<a href="https://issuetracker.unity3d.com/issues/managed-assembly-is-included-in-player-build-when-using-define-constraint-unity-include-tests">1379943</a>)</p></li>
<li><p>Scripting: Fixed an issue where missing references in MonoScript default references were displayed as None instead of Missing.
(<a href="https://issuetracker.unity3d.com/issues/missing-default-references-show-up-as-none-in-scriptableobject-script-asset">1345194</a>)</p></li>
<li><p>Scripting: Fixed an issue where scripts created trough the "Add Component" would not use custom script templates.
(<a href="https://issuetracker.unity3d.com/issues/custom-script-templates-defined-in-the-project-dont-get-applied-when-creating-a-new-script-via-the-add-component-menu">1298935</a>)</p></li>
<li><p>Scripting: Fixed an issue where yielding <code>WaitForEndOfFrame</code> was called too many times per Editor player loop.
(<a href="https://issuetracker.unity3d.com/issues/coroutine-with-waitforendofframe-finishes-too-soon-when-the-framerate-is-capped-using-application-dot-targetframerate">1391440</a>)</p></li>
<li><p>Scripting: Fixed an issue while doing domain reloads, we sometimes got the Standard default shader.
(UUM-4383)</p></li>
<li><p>Scripting: Fixed case when double-clicking message wouldn't open the correct file and line.
(<a href="https://issuetracker.unity3d.com/issues/script-not-opening-when-double-clicking-error">1385910</a>)</p></li>
<li><p>Scripting: Fixed case when trying to serialize generics with generic fields of types from different assemblies.
(<a href="https://issuetracker.unity3d.com/issues/exception-for-unresolved-inflated-type-arguments">UUM-8844</a>)</p></li>
<li><p>Scripting: Fixed Disabled Plugin Assembly validation not working on startup.
(UUM-4560)</p></li>
<li><p>Scripting: Fixed issues with operation on invalid gc handles. As part of this 2 new asserts are introduced that are triggered when invalid gc handle operations are detected. The operations are skipped when detected to avoid scripting domain / memory corruption.
(1394146)</p></li>
<li><p>Scripting: Fixed memory error caused in ArticulationBody.GetDenseJacobian.
(<a href="https://issuetracker.unity3d.com/issues/unity-crashes-on-mono-traverse-objects-when-exiting-play-mode">1420957</a>)</p></li>
<li><p>Scripting: Fixed possible Editor hang while it waits for AssemblyUpdater when importing assemblies.
(<a href="https://issuetracker.unity3d.com/issues/apiupdater-reaches-a-timeout-while-updating-assemblies">UUM-7944</a>)</p></li>
<li><p>Scripting: Fixed potential AssemblyUpdater assembly corruption if the assembly referenced specific Texture.Resize() overloads.</p></li>
<li><p>Scripting: Fixed Scripting Defines Symbols not being shown correctly in the Player Settings for platforms that aren't the default platform (usually the Editor's platform).
(<a href="https://issuetracker.unity3d.com/issues/scripting-define-symbols-are-deleted-after-applying-changes-when-external-script-editor-is-set-to-open-by-file-extension">UUM-3083</a>)</p></li>
<li><p>Scripting: Fixed so that Unity uses the newest version (by assembly name) of an assembly when there are duplicates.
(<a href="https://issuetracker.unity3d.com/issues/build-fails-when-multiple-newtonsoft-dot-json-dot-dll-files-are-included-in-the-project">1291253</a>)</p></li>
<li><p>Scripting: Fixed so the AssemblyBuilde picks up analyzers configured in the project.</p></li>
<li><p>Scripting: Improved performance of GetComponents(List&lt;T&gt;) by ~30x.
(<a href="https://issuetracker.unity3d.com/issues/performance-degrades-when-using-getcomponents-list-results">1376488</a>)</p></li>
<li><p>Scripting: Removed unnessary compilation during startup when no file on disk has been detected.
(1407952)</p></li>
<li><p>Scripting: When no Asmdef is referenced by an Assembly definition reference, make sure the "UseGuids" option is disabled.
(<a href="https://issuetracker.unity3d.com/issues/use-guid-option-does-not-disables-for-assetdefinitionreference-asset-at-first-attempt">1182337</a>)</p></li>
<li><p>Scripting: When no reference is added to an Asmdef, make sure the "UseGuids" option is disabled.
(<a href="https://issuetracker.unity3d.com/issues/assembly-definition-use-guids-value-reverts-to-previous-value-when-applied-with-no-references">1310994</a>)</p></li>
<li><p>Scripting: When using ObjectFactory.CreateInstance with a custom type deriving directly from UnityEngine.Object, a clearer exception message is thrown.
(<a href="https://issuetracker.unity3d.com/issues/argumentexception-thrown-when-calling-objectfactory-dot-createinstance-with-a-custom-class-inheriting-from-unityengine-dot-object-1">UUM-7896</a>)</p></li>
<li><p>Search: Added support for non capturing groups and escaped parentheses in QueryEngine regex filters.
(1379908)</p></li>
<li><p>Search: Disabled drag and drop for the advanced object selector to prevent issues.
(1423711)</p></li>
<li><p>Search: Fixed advanced search picker do not list Transform objects and focus is not on the search field.
(1394512)</p></li>
<li><p>Search: Fixed assets can't be found using the <strong>name:</strong> filter in Unity Search.
(<a href="https://issuetracker.unity3d.com/issues/assets-cant-be-found-using-the-name-filter-in-unity-search">1416653</a>)</p></li>
<li><p>Search: Fixed error show in the console when the project is launched with the Asset Store Search window open.
(<a href="https://issuetracker.unity3d.com/issues/error-in-fetching-user-purchases-when-the-project-is-launched-with-the-asset-store-search-window-open">1367675</a>)</p></li>
<li><p>Search: Fixed package visibility toggle is ignored when searching in the Project window using the advanced search engine.
(<a href="https://issuetracker.unity3d.com/issues/package-visibility-toggle-is-ignored-when-searching-in-the-project-window">1336739</a>)</p></li>
<li><p>Search: Fixed search cannot find asset by path after it has been moved without any changes.
(<a href="https://issuetracker.unity3d.com/issues/quick-search-cannot-find-asset-by-path-after-it-has-been-moved">1389394</a>)</p></li>
<li><p>Search: Fixed sub asset filtering when using the search object picker.</p></li>
<li><p>Search: Fixed test runner triggers an asset search index update when running play mode tests.
(<a href="https://issuetracker.unity3d.com/issues/test-runner-triggers-an-asset-search-index-update">1394039</a>)</p></li>
<li><p>Search: Fixed Unity freezes when using foreach in the main UI thread on ISearchList if search sessions are asynchronous.
(1381621)</p></li>
<li><p>Serialization: Avoid a crash and log error message when struct assigned to SerializeReference field.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-mono-class-is-subclass-of-internal-when-having-iserializationcallbackreceivers-on-a-specific-struct">UUM-661</a>)</p></li>
<li><p>Serialization: Fixed a case where enum fields on <code>SerializeReference</code> instance would show up as int if an enum field was present prior to <code>SerializeReference</code> instance on the host object.
(1401172)</p></li>
<li><p>Serialization: Fixed bug in YAML parsing, where spaces in double quoted multi-line strings could be lost when there was an escaped newline directly at the end of a line.
(<a href="https://issuetracker.unity3d.com/issues/a-space-at-the-beginning-of-the-text-disappears-after-reopening-the-scene">1345149</a>)</p></li>
<li><p>Serialization: Fixed bug that was incorrectly printing object's identifier in error message, when there are duplicated objects in an asset file.
(<a href="https://issuetracker.unity3d.com/issues/duplicate-identifier-error-can-report-the-wrong-object-identifier">1388565</a>)</p></li>
<li><p>Serialization: Fixed case where Enums could display as an Integer fields in the Inspector, when working with SerializedReference fields and doing an Undo operation.
(UUM-608)</p></li>
<li><p>Serialization: Fixed crash during domain reload when user changed state during OnBeforeSerialize.
(<a href="https://issuetracker.unity3d.com/issues/editor-sometimes-crashes-on-serializablemanagedrefsutilities-backupanddeflateall-after-recompiling-scripts">1360518</a>)</p></li>
<li><p>Serialization: Fixed EditorUtility.CopySerialized failing in some case where there are [SerializedReference] present.
(<a href="https://issuetracker.unity3d.com/issues/editorutility-dot-copyserialized-fails-when-objects-assigned-to-serializereference-fields-have-different-types">1265844</a>)</p></li>
<li><p>Serialization: Fixed issue where a PropertyModification targetting a serialize reference instance which was no longer being present could cause memory corruption.
(1415837)</p></li>
<li><p>Serialization: Fixed padding due to alignment after a resize array.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-dynamic-array-unsigned-char-0-erase-when-using-a-player-settings-preset">1254132</a>)</p></li>
<li><p>Serialization: Fixed performance regression reading yaml objects containing large number of SerializeReference instances which were created prior to 2021.2.
(<a href="https://issuetracker.unity3d.com/issues/serializereference-content-in-yaml-from-prior-to-2021-dot-2-takes-much-longer-to-load">UUM-15130</a>)</p></li>
<li><p>Serialization: Fixed regression where if a mesh was used in VFX and included in an AssetBundle there could be indeterminism in its streaming info offset field.
(<a href="https://issuetracker.unity3d.com/issues/assetbundle-indeterminism-caused-by-mesh-streaming-info">UUM-12721</a>)</p></li>
<li><p>Serialization: Fixed SerializedProperty::enumDisplayNames to support custom enum member labels specified with InspectorNameAttribute.
(<a href="https://issuetracker.unity3d.com/issues/inspectornameattribute-is-not-used-when-using-serializedproperty-dot-enumdisplaynames">1375077</a>)</p></li>
<li><p>Serialization: Fixed the format for unity object references used by JsonUtility in the standalone player to match the format used in the editor. In standalone the property name changes from m_FileID to instanceId.</p></li>
<li><p>Serialization: Fixed to avoid a possible crash in the support for enum fields, when a class in one namespace is included as a field inside a class with the same name from a different namespace.
(<a href="https://issuetracker.unity3d.com/issues/crash-in-serializedproperty-enum-in-when-class-name-repeated-in-different-namespaces">1417532</a>)</p></li>
<li><p>Serialization: Hash128 field will now generate a single PropertyModification when value is different, instead of 1 per byte.
(<a href="https://issuetracker.unity3d.com/issues/serialization-unityengine-dot-hash128-fields-overridden-in-prefabs-generate-poor-property-modification-serialization">1379872</a>)</p></li>
<li><p>Serialization: Prevent "Objects are trying to be loaded during a domain backup. This is not allowed as it will lead to undefined behaviour!" from occuring on DomainReload when SerializeReference instance contained a Unity.Object reference to an already unloaded asset.
(<a href="https://issuetracker.unity3d.com/issues/deleting-a-private-material-in-custompass-dot-cleanup-causes-a-objects-are-trying-to-be-loaded-during-a-domain-backup-error-when-domain-reloads">UUM-2116</a>)</p></li>
<li><p>Serialization: Properly track managed-only classes so they are not stripped by the il2cpp linker.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-webgl-ui-is-not-visible-when-in-built-player-and-serialization-errors-are-thrown">1359259</a>)</p></li>
<li><p>Serialization: When performing an undo on an object that uses SerializeReference, reuse existing C# objects, instead of recreating them.
(<a href="https://issuetracker.unity3d.com/issues/serialized-references-are-recreated-when-modifiying-any-field-and-then-doing-ctrl-plus-z">UUM-651</a>)</p></li>
<li><p>Services: Added installation identifiers to default crash report metadata.</p></li>
<li><p>Services: Fixed issue that would make it so that services could not be used after computer returned from sleep.</p></li>
<li><p>Services: Link Project ID button in Services tab now activates properly when the organization name and project name selected are the same.</p></li>
<li><p>Services: Marked UserInfo APIs as obsolete.</p></li>
<li><p>Services: Selected project in Services tab is now properly reset and Link Project ID button is now properly disabled when changing organization.</p></li>
<li><p>Shadergraph: Fixed a compilation bug in BiRP Target in some variants with lightmaps.
(UUM-7354)</p></li>
<li><p>Shadergraph: Fixed broken documentation URL for block nodes.
(<a href="https://issuetracker.unity3d.com/issues/shader-graph-documentation-urls-lead-to-missing-pages-when-right-clicking-nodes-and-selecting-open-documentation">1381488</a>)</p></li>
<li><p>Shadergraph: Fixed shader graph incorrectly stripping variants for BiRP shaders that weren't built with shader graph.
(<a href="https://issuetracker.unity3d.com/issues/standard-shader-with-cutout-mode-doesnt-work-in-the-player-when-shader-graph-is-installed-with-built-in-render-pipeline">UUM-14800</a>)</p></li>
<li><p>Shadergraph: Fixed SRP-batching when PVT stacks are bound per material by properly declaring properties for PVT stacks.</p></li>
<li><p>Shadergraph: Fixed the behavior of checkerboard node with raytracing.</p></li>
<li><p>Shadergraph: Fixed the sample buffer nodes in ShaderGraph.</p></li>
<li><p>Shadergraph: Fixed unity_StereoEyeIndex error when building XR project with URP Fullscreen master node containing Shader.
(<a href="https://issuetracker.unity3d.com/issues/unity-stereoeyeindex-is-undeclared-in-full-screen-graph-when-using-with-xr">SGB-278</a>)</p></li>
<li><p>Shaders: Exposed Player settings to control shader memory usage at runtime.
(<a href="https://issuetracker.unity3d.com/issues/unlit-shader-uses-more-than-100mb-of-memory-when-in-player">UUM-5583</a>)</p></li>
<li><p>Shaders: Fixed "#pragma require Native16Bit" not setting appropriate DXC flags on DX12.
(<a href="https://issuetracker.unity3d.com/issues/shaders-dxc-using-native16bit-requirement-pragma-does-not-work-for-dx12-target">1388292</a>)</p></li>
<li><p>Shaders: Fixed "State comes from an incompatible keyword space" assertion firing sometimes when building asset bundles.
(UUM-11958)</p></li>
<li><p>Shaders: Fixed a bug where integer properties were sometimes being declared as floats instead of integers.
(1387228)</p></li>
<li><p>Shaders: Fixed a case where compiling shaders wasn't showing a modal progress bar.
(<a href="https://issuetracker.unity3d.com/issues/missing-progress-bar-when-compiling-aov-shaders-for-recording">1403476</a>)</p></li>
<li><p>Shaders: Fixed a crash when calling GetShaderKeywords on a user-constructed ShaderKeywordSet.
(<a href="https://issuetracker.unity3d.com/issues/editor-crashes-when-building-if-calling-shaderkeyword-methods-in-ipreprocessshaders-classes">UUM-2536</a>)</p></li>
<li><p>Shaders: Fixed a crash when changing Scene view Draw mode from Shaded to Custom.
(<a href="https://issuetracker.unity3d.com/issues/crash-when-changing-scene-view-draw-mode-from-shaded-to-custom">UUM-9452</a>)</p></li>
<li><p>Shaders: Fixed a GLSL translation issue so the structured buffer reads doesn't miss a cast.
(<a href="https://issuetracker.unity3d.com/issues/android-compiled-glsl-compute-shader-fails-uint-cast">1417232</a>)</p></li>
<li><p>Shaders: Fixed a null pointer dereference with <code>ShaderVariantCollection</code> API.
(<a href="https://issuetracker.unity3d.com/issues/unity-editor-crashes-on-keywords-localkeywordstate-localkeywordstate-when-a-shader-is-null">UUM-16058</a>)</p></li>
<li><p>Shaders: Fixed a rare crash when opening a project with compute shaders.
(<a href="https://issuetracker.unity3d.com/issues/crash-on-setcurrentmemoryowner-when-opening-the-project">UUM-10259</a>)</p></li>
<li><p>Shaders: Fixed a warning log error when calling <code>EnableKeyword</code> on <code>RenderingCommandBuffer</code>.
(1421883)</p></li>
<li><p>Shaders: Fixed an error that occurred when drawing an instanced mesh with async shader compilation enabled.
(<a href="https://issuetracker.unity3d.com/issues/drawmeshinstanced-does-not-support-dot-dot-dot-error-in-the-console-pops-up-when-the-shader-does-support-instanced-rendering">UUM-13174</a>)</p></li>
<li><p>Shaders: Fixed an error with the pass code for a grab pass. Also added IsGrabPass to the Pass api so a user can pre-emptively check a pass.
(<a href="https://issuetracker.unity3d.com/issues/trying-to-access-shader-snippet-1-is-thrown-when-accessing-pass-dot-sourcecode-for-a-grabpass-pass-type">1383155</a>)</p></li>
<li><p>Shaders: Fixed an issue where Material.SetOverrideTag would not warn when trying to override LightMode.
(<a href="https://issuetracker.unity3d.com/issues/material-dot-setoverridetag-setting-lightmode-tag-has-no-effect">UUM-11988</a>)</p></li>
<li><p>Shaders: Fixed an issue where shader import didn't register searched include file paths as import dependencies.
(<a href="https://issuetracker.unity3d.com/issues/adding-previously-missing-shader-include-does-not-reimport-dependent-shader">1394035</a>)</p></li>
<li><p>Shaders: Fixed catching preprocessing time errors for surface shaders, now providing more helpful error messages for users.
(<a href="https://issuetracker.unity3d.com/issues/missing-include-in-surface-shader-outputs-wrong-errors">1411454</a>)</p></li>
<li><p>Shaders: Fixed compute shaders to allow you to cancel after you select <strong>show compiled code</strong>.
(<a href="https://issuetracker.unity3d.com/issues/show-compiled-code-for-compute-shaders-has-the-cancel-button-greyed-out">1367624</a>)</p></li>
<li><p>Shaders: Fixed HLSLcc half precision on sample and MOVC combo.
(<a href="https://issuetracker.unity3d.com/issues/full-floating-precision-register-is-used-when-compiling-shader-to-gles3">1398163</a>)</p></li>
<li><p>Shaders: Fixed shader compilation error when using bit-shift operations to create the destination vector from the scalar source.
(<a href="https://issuetracker.unity3d.com/issues/ios-macos-assertion-failed-errors-appear-when-using-bit-shift-operations">UUM-16113</a>)</p></li>
<li><p>Shaders: Fixed shader translation for <code>firstbithigh</code>, <code>firstbitlow</code>, and <code>reversebits</code>.
(<a href="https://issuetracker.unity3d.com/issues/opengl-glsl-compilation-failed-for-shader-error-thrown-in-console-window-when-hlsl-firstbithigh-function-is-converted-to-glsl">1399910</a>)</p></li>
<li><p>Shaders: Fixed Shader Variant Collection UI not working correctly with shaders with stage-specific keywords.
(<a href="https://issuetracker.unity3d.com/issues/some-shader-variants-dont-show-up-when-vertex-is-added-to-shader-code">UUM-12220</a>)</p></li>
<li><p>Shaders: Fixed so that when you add packages to a project, it updates the Shader Compiler include search paths.
(<a href="https://issuetracker.unity3d.com/issues/vfxcommon-dot-hlsl-shader-errors-on-creating-vfx-graph">1393842</a>)</p></li>
<li><p>Shaders: Fixed that progressive shader warmup was not terminating when a single shader required three or more calls to warm up.</p></li>
<li><p>Shaders: Fixed the GLSL/Vulkan translation of Gather4_PO_C instruction.
(<a href="https://issuetracker.unity3d.com/issues/problem-with-gathercmp-star-methods-hlsl-glsl-conversion">1399475</a>)</p></li>
<li><p>Shaders: Fixed the typed buffer size query on GLSL/Vulkan shaders.
(<a href="https://issuetracker.unity3d.com/issues/problem-with-getdimensions-method-hlsl-glsl-conversion">1399478</a>)</p></li>
<li><p>Shaders: Fixed unintentional low precision sampling on mobiles when using a inline sampler states.
(<a href="https://issuetracker.unity3d.com/issues/android-the-precision-of-render-texture-is-low-on-android-devices-with-non-adreno-gpus">1379057</a>)</p></li>
<li><p>Shaders: Fixed <code>firstbithigh</code> translation in glsl and vulkan.
(<a href="https://issuetracker.unity3d.com/issues/compiler-bug-translation-of-hlsl-function-firstbithigh-to-vulkan-and-opengl-is-incorrect">1413173</a>)</p></li>
<li><p>Shaders: Fixed <code>MaterialPropertyBlock.SetInteger</code> with instanced draws.
(<a href="https://issuetracker.unity3d.com/issues/materialpropertyblock-dot-setinteger-sets-the-value-incorrectly">1397113</a>)</p></li>
<li><p>Shaders: Made the compute shaders respect <code>#pragma enable_cbuffers</code>.
(<a href="https://issuetracker.unity3d.com/issues/compute-shader-is-not-using-defined-constants-when-setting-data-with-setconstantbuffer">1416880</a>)</p></li>
<li><p>Source Code Build: Fixed so <code>PlatformDependent/UnixCommon</code> isn't stripped from source code releases.</p></li>
<li><p>SRP Core: Added Shader Stripping Watcher so you get notifications when a Shader Variant is stripped.</p></li>
<li><p>SRP Core: Fixed an issue so that APV dilated data not being written back to disk.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-probes-change-value-after-project-reload">1403357</a>)</p></li>
<li><p>SRP Core: Fixed NaN when you bake high intensity lights.</p></li>
<li><p>SRP Core: Fixed probes so that the max distance between then are respected.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-probes-are-lost-when-apv-simplification-level-is-reduced-resulting-in-white-patches">1415310</a>)</p></li>
<li><p>SRP Core: Fixed realtime subdivision so it culls empty cells.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-realtime-cell-update-does-not-perform-the-culling-process-properly">1418164</a>)</p></li>
<li><p>SRP Core: Fixed shadow cascade editor so the snatches now appear and the gradient appearance is improved.
(UUM-12585)</p></li>
<li><p>SRP Core: Fixed so that data isn't cleared for probes to be dilated into, to avoid bright colored splotches.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-dilation-generates-weird-results-red-and-green-patches">1413078</a>)</p></li>
<li><p>SRP Core: Fixed the APV touchup volume test so it uses OBB instead of AABB.</p></li>
<li><p>SRP Core: Fixed the reset of APV volume placement when using multi selection.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-apv-the-apv-volume-placement-resets-when-using-multi-selection">1413009</a>)</p></li>
<li><p>SRP Core: Fixed uninitialized memory for virtual offset.</p></li>
<li><p>SRP Core: Hid the warning on the reflection probe if you disable APV.
(1408219)</p></li>
<li><p>Terrain: Fixed an issue where Terrain shadows were not rendered when zooming out in Scene/Game View with Deferred Rendering enabled.
(<a href="https://issuetracker.unity3d.com/issues/terrain-shadows-are-not-rendered-when-zooming-out-in-scene-slash-game-view-with-deferred-rendering-enabled">UUM-1860</a>)</p></li>
<li><p>Terrain: Fixed bug https://fogbugz.unity3d.com/f/cases/1396818/. When accessing the GUI for Paint Texture Tool, it accesses the editor width through EditorGUIUtility.currentViewWidth. On the first frame however, this value is 0, so we get a DivideByZeroException. This is fixed by accounting for the instance in which the width = 0 and avoiding division by zero.
(<a href="https://issuetracker.unity3d.com/issues/dividebyzeroexception-in-uniityeditor-dot-terraininspector-dot-getaspectrect-after-selecting-terrain-with-enabled-paint-texture-panel">1396818</a>)</p></li>
<li><p>Terrain: Fixed crash when you assign directly to a <code>TerrainData</code>'s <code>detailPrototype</code> array from GUI thread.
(<a href="https://issuetracker.unity3d.com/issues/assigning-directly-to-a-terraindatas-detailprototype-array-from-gui-thread-crashes-editor">1354240</a>)</p></li>
<li><p>Terrain: Fixed so Billboard grass doesn't wave faster when more than one camera is active in the scene.
(<a href="https://issuetracker.unity3d.com/issues/terrain-grass-animation-speed-increases-when-calling-different-camera-render-methods">1358679</a>)</p></li>
<li><p>Terrain: Fixed so that details and trees don't disappear when you paint height on Terrain.
(1394295)</p></li>
<li><p>Terrain: When selecting a .raw file to import as a Heightmap, the following error is no longer thrown: "EndLayoutGroup: BeginLayoutGroup must be called first".</p></li>
<li><p>Text: Fixed cursor position reset in UI Toolkit text field when you focus on text field while <code>selectAllOnFocus = false</code>.
(1424670)</p></li>
<li><p>Text: Fixed Text component so that it renders elements with floating point coordinates correctly on machines with locale set to one that uses commas as decimal separators.
(UUM-868)</p></li>
<li><p>Timeline: Fixed Animator culling so it can now be used in conjunction with Timeline without stopping the whole Timeline.
(<a href="https://issuetracker.unity3d.com/issues/timeline-stops-when-any-recorded-animator-is-culled">UUM-17672</a>)</p></li>
<li><p>uGUI: Expose RaycastManager.GetRaycasters public for use by users making their own EventSystem.
(<a href="https://issuetracker.unity3d.com/issues/unityengine-dot-eventsystems-dot-raycastermanager-is-inaccessible-due-to-its-protection-level">1379489</a>)</p></li>
<li><p>uGUI: Fixed an issue where a RectTransform that is part of a nested Canvas would get its values overridden when it would become disabled.
(<a href="https://issuetracker.unity3d.com/issues/canvas-rect-transform-is-calculated-incorrectly-when-its-a-child-of-another-canvas">1374782</a>)</p></li>
<li><p>uGUI: Fixed an issue where a rouge image would increase the AABB of the canvas, causing its center of rendering to potentially be off shifted from the distance it should be rendered.
(<a href="https://issuetracker.unity3d.com/issues/rendering-order-of-canvas-depends-on-a-childs-z-position-when-render-mode-is-screen-space-camera">1385838</a>)</p></li>
<li><p>uGUI: Fixed an issue where events would get registered to prefab object and would be called upon entering play mode.
(<a href="https://issuetracker.unity3d.com/issues/the-prefab-is-altered-while-in-the-play-mode-when-the-prefab-is-opened-in-the-prefab-mode">1384257</a>)</p></li>
<li><p>uGUI: Fixed an <code>ArgumentOutOfRange</code> exception when you remove an entry from an <code>EventTrigger</code> during execution.
(<a href="https://issuetracker.unity3d.com/issues/argumentoutofrange-exception-is-thrown-when-removing-handler-in-callback-in-eventtrigger">1401557</a>)</p></li>
<li><p>uGUI: Fixed calculation of pointer position when running in multiple display mode and the main display was fullscreen with a non-native aspect ratio.
(<a href="https://issuetracker.unity3d.com/issues/broken-mouse-pointer-input-coordinates-in-graphicraycaster-for-certain-window-sizes-in-build-when-run-in-windowed-mode">UUM-7893</a>)</p></li>
<li><p>uGUI: Fixed the canvas override sorting behavior when entering play mode.
(<a href="https://issuetracker.unity3d.com/issues/nested-canvases-with-override-sorting-enabled-will-not-sort-correctly-until-closing-and-reopening-the-project">1331988</a>)</p></li>
<li><p>uGUI: Fixed the UGUI Slider OnValueChanged event to be called when the value is changed through the inspector.
(<a href="https://issuetracker.unity3d.com/issues/slider-onvaluechanged-event-is-not-called-when-changing-value-from-the-inspector">1372975</a>)</p></li>
<li><p>uGUI: Fixed <code>Graphic.Raycast</code> so it ignores <code>CanvasGroups</code> when they're disabled.
(<a href="https://issuetracker.unity3d.com/issues/canvas-group-components-block-raycasts-and-interactable-options-work-when-the-component-is-disabled">1409210</a>)</p></li>
<li><p>uGUI: Made sure the position isn't corrupted when you call <code>SetParent</code> during a Copy as a child by marking the position as valid.
(<a href="https://issuetracker.unity3d.com/issues/rect-transform-edge-position-changes-when-pasting-as-child-on-a-different-gameobject">1376184</a>)</p></li>
<li><p>uGUI: Some Input Tests on the InputSystem package were failing. Initialize the target view correctly so they work again.
(1378084)</p></li>
<li><p>UI: Fixed missing tooltip for "Screen Weight Distance" in Screen Space Refraction override.
(UUM-12116)</p></li>
<li><p>UI: Fixed the reordering of style after a new file duplicates the style.
(1413566)</p></li>
<li><p>UI: Updated COPPA compliance link.</p></li>
<li><p>UI Elements: Fixed Min Max slider behaving abnormally when using larger thumb styling.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkits-slider-behaves-abnormally-with-unity-default-runtime-theme">UUM-5017</a>)</p></li>
<li><p>UI Toolkit: Added a UITK version of AnimationTriggersDrawer.</p></li>
<li><p>UI Toolkit: Added a warning for empty UXML instantiation.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-loading-an-invalid-uxml-and-cloning-root-on-it-gives-nullreferenceexception-instead-of-an-explanatory-warning">1407618</a>)</p></li>
<li><p>UI Toolkit: Added fixed sensitivity to the slider label dragging.
(1387793)</p></li>
<li><p>UI Toolkit: Added pseudo states for Foldout.
(1427102)</p></li>
<li><p>UI Toolkit: Added TreeView to the Standard Controls Library.
(1402314)</p></li>
<li><p>UI Toolkit: Changed so the GenericDropDownMenu is now affected by its BasePopupField font-size.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-dropdown-choices-size-doesnt-change-when-changing-the-dropdown-size">1387340</a>)</p></li>
<li><p>UI Toolkit: EnumFlagsField is now available in the UI Builder Library.
(1378011)</p></li>
<li><p>UI Toolkit: Fixed 1404024: Moving a root item lower in the root of a TreeView doesn't resolve in the correct position.
(1404024)</p></li>
<li><p>UI Toolkit: Fixed a bug where a scale of 0 was affecting the layout of the label.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-child-label-of-visual-element-gets-height-set-to-0-when-parent-has-transition-to-scale-toggled-between-1-and-0">1404078</a>)</p></li>
<li><p>UI Toolkit: Fixed a bug where ListView and TreeView using SelectionType.None would still be selectable with double click and navigation keys.
(1381727)</p></li>
<li><p>UI Toolkit: Fixed a bug where the resolved style's padding would be set to 0 on elements having a measure (label or image).
(<a href="https://issuetracker.unity3d.com/issues/button-padding-resets-when-aspect-ratio-is-changed">1351235</a>)</p></li>
<li><p>UI Toolkit: Fixed a bug where using different types under the same uxml object could cause them to duplicate in the builder.
(1383732)</p></li>
<li><p>UI Toolkit: Fixed alternate row background sometimes disappearing after a refresh.</p></li>
<li><p>UI Toolkit: Fixed an issue in the UI builder so the <strong>Open in IDE</strong> menu option doesn't fail in VisualStudio Code.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-uxml-and-uss-files-cant-be-opened-through-code-preview-panel-when-using-visual-studio-code">1405443</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue in the UI Builder so the layout of the UI Builder's inspector doesn't break when you unfold the Text Shadow properties.
(1423612)</p></li>
<li><p>UI Toolkit: Fixed an issue so the <code>ObjectField.objectType</code> configures correctly for built-in types.
(1423715)</p></li>
<li><p>UI Toolkit: Fixed an issue where assigning to both text and value in a TextField from uxml would result in the wrong value being displayed.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-text-field-control-has-a-value-field">1375721</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where changes in UI Builder are lost when editing a 2D sprite.
(<a href="https://issuetracker.unity3d.com/issues/changes-in-ui-builder-are-lost-when-editing-a-2d-sprite">1357086</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where creating a UI Document would re-generate the UXML schema files every time.
(<a href="https://issuetracker.unity3d.com/issues/creating-a-ui-document-takes-too-much-time">UUM-3985</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the expanded state of the ListView would not be serialized across selections.
(<a href="https://issuetracker.unity3d.com/issues/ui-tools-lists-in-the-inspector-window-are-re-expanded-when-de-selecting-and-re-selecting-a-gameobject">UUM-1461</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the UI Builder breaks the cursor property when saving by appending a comma between the additional parameters.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-breaks-cursors-parameters-in-the-uss-file-when-changing-uss-files-values-in-the-ui-builder-window">1379099</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the UI Builder would export asset references with <code>resource()</code> instead of <code>url()</code> when the asset path contained a folder with Resources in its name.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-cant-use-image-store-in-gameresources-folder">UUM-14889</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the UI Builder would strip the @import directives from a StyleSheet when you save it to disk.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-at-import-is-stripped-from-the-associated-uss-file-when-saving-uxml">1404986</a>)</p></li>
<li><p>UI Toolkit: Fixed an issue where the VisualElement and EnumField's uxml attributes would not get properly clearly after calling "Unset" or "Unset All".
(1385056)</p></li>
<li><p>UI Toolkit: Fixed an issue where UI Toolkit controls under a namespace named "Assets" would cause an exception in the Project pane of the UI Builder..
(<a href="https://issuetracker.unity3d.com/issues/argumentexception-error-appears-when-opening-project-library-in-the-ui-builder-if-the-script-is-using-namespace-assets">UUM-3481</a>)</p></li>
<li><p>UI Toolkit: Fixed API documentation for VisualElement.generateVisualContent and MeshGenerationContext.
(1398636)</p></li>
<li><p>UI Toolkit: Fixed backspace support on linux.
(<a href="https://issuetracker.unity3d.com/issues/linux-backspace-has-no-effect-on-ui-toolkit-text-fields-when-an-event-system-is-present-in-the-scene">UUM-3695</a>)</p></li>
<li><p>UI Toolkit: Fixed bind/unbind discrepancies with items in ListView/TreeViews controls.</p></li>
<li><p>UI Toolkit: Fixed bug where prefabs dragged to the Scene window aren't properly canceled if the drag ends on top of an overlay window.
(<a href="https://issuetracker.unity3d.com/issues/dragging-prefab-on-the-overlay-is-the-scene-window-makes-prefab-not-selectable">1373512</a>)</p></li>
<li><p>UI Toolkit: Fixed builder selection test.
(1292403)</p></li>
<li><p>UI Toolkit: Fixed color space conversion for text.
(1410899)</p></li>
<li><p>UI Toolkit: Fixed default TreeView.bindItem implementation to set the Label text to its data string representation.
(1401943)</p></li>
<li><p>UI Toolkit: Fixed disabled ObjectFields reacting to drag and drop as if they were not disabled.
(1410558)</p></li>
<li><p>UI Toolkit: Fixed disabled UIDocument still being rendered on editor start.
(<a href="https://issuetracker.unity3d.com/issues/ui-document-is-visible-in-the-game-window-when-ui-document-component-is-disabled">1388963</a>)</p></li>
<li><p>UI Toolkit: Fixed dynamic height caching and reordering issues on ListView/TreeView controls.</p></li>
<li><p>UI Toolkit: Fixed EventSystem error logged in Editor when entering and leaving Play mode if there's a UIDocument in the scene.
(UUM-10360)</p></li>
<li><p>UI Toolkit: Fixed focus grabbing when you refresh BaseVerticalCollectionView.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-treeview-drop-down-arrow-is-focused-after-adding-new-children-items">1399006</a>)</p></li>
<li><p>UI Toolkit: Fixed focusController.focusedElement sometimes still returning element after it was removed from panel.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-button-is-focused-and-can-be-activated-with-enter-key-when-it-is-removed">1379300</a>)</p></li>
<li><p>UI Toolkit: Fixed incorrect indentation in the UI Builder when a Foldout element is nested in another Foldout.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-incorrect-indentation-when-foldout-nested-in-a-foldout">1388475</a>)</p></li>
<li><p>UI Toolkit: Fixed invalid vertex count shown for UIToolkit draw calls in the frame debugger and the game view statistics.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-uitoolkit-accumulating-total-extra-vertices-and-draw-calls-when-objects-made-hidden-slash-visible">UUM-2725</a>)</p></li>
<li><p>UI Toolkit: Fixed issues with zoom &amp; pan in the UI Builder to improve user experience on touchpad devices.</p></li>
<li><p>UI Toolkit: Fixed layout is skipped if an element has auto margin an its flex direction size is auto.
(1393151)</p></li>
<li><p>UI Toolkit: Fixed ListView events to follow Unity's coding conventions.
(<a href="https://issuetracker.unity3d.com/issues/listview-events-do-not-follow-unitys-coding-conventions">1388926</a>)</p></li>
<li><p>UI Toolkit: Fixed mismatch between event processing and rendering sorting rules for UGUI canvas and UI Toolkit runtime panel when sorting orders are identical.
(<a href="https://issuetracker.unity3d.com/issues/order-in-layer-doesnt-effect-ui-document-button-when-it-is-stacked-on-canvas-button">1364449</a>)</p></li>
<li><p>UI Toolkit: Fixed missing NavigationMoveEvent for controls that wish to respond to Tab navigation that's not specifically tied to a keyboard action. Though there is no way to currently remap how that action is generated, it can be prevented altogether by unticking the "Send Navigation Events" box on the EventSystem component, if one is present in the active scene.
(<a href="https://issuetracker.unity3d.com/issues/tab-key-functionality-exist-when-deleted-from-input-actions-and-in-input-system-event-system-component-tab-key-is-set-to-none">1336833</a>)</p></li>
<li><p>UI Toolkit: Fixed multi-editing assets with multiple inspectors open.
(1400147)</p></li>
<li><p>UI Toolkit: Fixed nested scroll view behaviour on mobile scrolling stays in the scroll view that initiated the drag.</p></li>
<li><p>UI Toolkit: Fixed offset issues and layout delays in default PropertyField on array values when adding or removing items.
(1388269)</p></li>
<li><p>UI Toolkit: Fixed Pick Element in the UI Toolkit debugger.
(1374392)</p></li>
<li><p>UI Toolkit: Fixed PlayerSettings window splitter to stop moving after yo release the mouse.
(<a href="https://issuetracker.unity3d.com/issues/window-sidebar-is-resized-with-unpressed-mouse-button-after-clicking-on-the-resize-tool-overlapping-with-selected-highlight-area">1398586</a>)</p></li>
<li><p>UI Toolkit: Fixed PointerDownEvent.clickCount when receiving a double-click event using UGUI's EventSystem.
(<a href="https://issuetracker.unity3d.com/issues/uitoolkit-baseverticalcollectionview-dot-onitemschosen-is-called-only-on-3rd-click-when-using-old-input-system">1379054</a>)</p></li>
<li><p>UI Toolkit: Fixed runtime navigation issues in TextField and composite fields, sometimes not entering text editing mode, or inserting undesired characters when doing so, or not allowing navigation to other elements.</p></li>
<li><p>UI Toolkit: Fixed shader bug observable on macOS Ventura with AMD gpus that was causing Graphview (e.g. Shader Graph, VFX Editor) edges to be missing.
(<a href="https://issuetracker.unity3d.com/issues/ventura-intel-shader-graph-nodes-connections-are-not-visible-when-using-macos-13-dot-0-ventura">UUM-19016</a>)</p></li>
<li><p>UI Toolkit: Fixed shader bug observable on MacOS Ventura with AMD GPUs that was causing UIToolkit elements to be missing, clipped, or to display incorrectly.
(<a href="https://issuetracker.unity3d.com/issues/labels-and-icons-are-missing-when-using-macos-13-dot-0-ventura">UUM-18978</a>)</p></li>
<li><p>UI Toolkit: Fixed showMixedValue in Toggles.
(<a href="https://issuetracker.unity3d.com/issues/2d-input-value-of-all-properties-are-not-changing-when-a-mouse-is-dragged-over-it-in-the-skinning-editor">1294945</a>)</p></li>
<li><p>UI Toolkit: Fixed Slider not changing value when using GamePad input with InputSystem package.
(<a href="https://issuetracker.unity3d.com/issues/slider-cannot-be-controlled-with-gamepad-when-using-new-input-system-with-ui-toolkit">1396789</a>)</p></li>
<li><p>UI Toolkit: Fixed slider property being inverted after saving uxml in UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/scrolling-is-horizontal-when-scrollview-component-scrolling-mode-is-vertical">1408250</a>)</p></li>
<li><p>UI Toolkit: Fixed slider text field size.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-slider-slider-input-field-doesnt-show-values-and-theres-no-ability-to-enter-value-in-play-mode">1382815</a>)</p></li>
<li><p>UI Toolkit: Fixed so that Inspector bindings don't try to access invalid properties.
(<a href="https://issuetracker.unity3d.com/issues/serializedproperty-m-converterstates-console-error-appears-when-trying-to-convert-project-from-built-in-to-urp">1377648</a>)</p></li>
<li><p>UI Toolkit: Fixed so the IntegerStyleField dragger is reset in UI Builder.
(1394592)</p></li>
<li><p>UI Toolkit: Fixed so when you hide a GenericDropdownMenu, it gives the focus back to its DropdownField.
(<a href="https://issuetracker.unity3d.com/issues/uielements-dropdown-menu-does-not-lose-focus-when-an-option-from-the-dropdown-is-selected">1387335</a>)</p></li>
<li><p>UI Toolkit: Fixed some Layout Update Struggling issues related to ScrollViews.</p></li>
<li><p>UI Toolkit: Fixed text artifacts when using a Radeon GPU.
(<a href="https://issuetracker.unity3d.com/issues/shadergraph-text-displays-errrors">1393056</a>)</p></li>
<li><p>UI Toolkit: Fixed the copy-paste of labels that contain rich text so it excludes the rich text tags.
(1410973)</p></li>
<li><p>UI Toolkit: Fixed the highlight when when you hover selectors with a Runtime theme which references an invalid path in the UI builder.
(1402309)</p></li>
<li><p>UI Toolkit: Fixed the InspectorElement layout when parent container flex direction is set to row.
(1401384)</p></li>
<li><p>UI Toolkit: Fixed the layout engine to consider the max-width property on an element with an absolute position and a measure method.
(<a href="https://issuetracker.unity3d.com/issues/the-height-of-the-label-isnt-the-same-size-as-content-of-the-label-when-using-max-width">1379062</a>)</p></li>
<li><p>UI Toolkit: Fixed the position of the drag line anchor of the <code>TwoPanSplitView</code> when the orientation is changed and when there is margin around the child elements.
(1359284)</p></li>
<li><p>UI Toolkit: Fixed the slider property so it's not inverted after you save uxml in UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/in-ui-builder-the-parameter-inverted-of-a-slider-element-gets-checked-after-saving-changes">1391575</a>)</p></li>
<li><p>UI Toolkit: Fixed the UI Debugger text highlight when using the search field.
(<a href="https://issuetracker.unity3d.com/issues/search-results-not-highlighted-when-searching-in-ui-toolkit-debugger">1361087</a>)</p></li>
<li><p>UI Toolkit: Fixed the UI Toolkit and UI Builder packages so they aren't accidentally inserted into a users project when there's an indirect dependency from a different package.</p></li>
<li><p>UI Toolkit: Fixed the <code>dragElement</code> of the scroller so it doesn't go out of the limits when <code>ScrollView.touchScrollBehavior</code> is <code>TouchScrollBehavior.Elastic</code>.
(<a href="https://issuetracker.unity3d.com/issues/able-to-scroll-past-the-scrollview-bounds-when-using-mouse-wheel">1404321</a>)</p></li>
<li><p>UI Toolkit: Fixed the <code>NullReferenceException</code> in transition when an object is selected in the UI builder.
(1403727)</p></li>
<li><p>UI Toolkit: Fixed the <code>Vector2Field</code> value so it's displayed when using View Data Key in the UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/vector2field-value-doesnt-get-displayed-when-using-view-data-key">1341613</a>)</p></li>
<li><p>UI Toolkit: Fixed UI Builder reparenting.
(1400389)</p></li>
<li><p>UI Toolkit: Fixed Vector image rendering was ignoring the target rect position.
(<a href="https://issuetracker.unity3d.com/issues/vector-image-is-being-scaled-wrong-when-using-padding">1371690</a>)</p></li>
<li><p>UI Toolkit: Fixed vertices allocation when moving a ScrollView dragger element.
(1401928)</p></li>
<li><p>UI Toolkit: Fixed VisualElement alignment issue in non-standard DPIs.
(<a href="https://issuetracker.unity3d.com/issues/ios-uitoolkit-border-renders-incorrectly">1385706</a>)</p></li>
<li><p>UI Toolkit: Fixed VisualElement holding a reference to its Panel after being removed from the hierarchy.
(1371139)</p></li>
<li><p>UI Toolkit: Fixed VisualElement.CaptureMouse not working when GUIUtility.hotcontrol is set.
(<a href="https://issuetracker.unity3d.com/issues/enlighten-should-not-be-capturing-when-there-is-a-hotcontrol-warning-after-closing-per-renderers-lightmap-preview-window">1371023</a>)</p></li>
<li><p>UI Toolkit: Fixed VisualElements change scaling when mouse moves over a different window on a higher DPI display.
(<a href="https://issuetracker.unity3d.com/issues/visualelements-change-scaling-when-mouse-moves-over-ui-builder-window-on-a-higher-dpi-display-1">UUM-7260</a>)</p></li>
<li><p>UI Toolkit: Fixed warning caused by unprocessed focus events sometimes happening when detaching a UIDocument containing a focused element from its parent panel.
(<a href="https://issuetracker.unity3d.com/issues/focuscontroller-has-unprocessed-focus-events-warnings-are-thrown-when-deactivating-a-uidocument-during-an-event-callback">1378840</a>)</p></li>
<li><p>UI Toolkit: Fixed <code>columnSortingChanged</code> event sent multiple times when sorting by mouse-clicking on column.<br></p>

<ul>
<li>Multi sorting is performed using Command modifier in MacOSX instead of Control.
(<a href="https://issuetracker.unity3d.com/issues/multicolumntreeview-columnsortingchanged-callback-is-invoked-multiple-times-when-sorting-changes">1400346</a>)</li>
</ul></li>
<li><p>UI Toolkit: Fixed <code>IMGUIContainerTests.ChangeOnGUIHandler</code> test instability.
(1421514)</p></li>
<li><p>UI Toolkit: Fixed <code>NullReferenceException</code> when you hover with any Object over the Object Field.
(<a href="https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-dragging-and-hovering-anything-over-object-field-in-the-ui-toolkit-samples-window">1407422</a>)</p></li>
<li><p>UI Toolkit: Fixed: Text Shadow and Outline effects do not render correctly.
(<a href="https://issuetracker.unity3d.com/issues/text-shadow-and-outline-effects-do-not-render-correctly">1361130</a>)</p></li>
<li><p>UI Toolkit: Hid the UI Builder selector tooltip preview when the user adds a new selector.
(1398722)</p></li>
<li><p>UI Toolkit: Improved performance of layout update in display:none cases.
(UUM-9694)</p></li>
<li><p>UI Toolkit: Made it so you can add the <code>RadioButtons</code> manually to <code>RadioButtonGroup</code> and it's considered in the choices property.
(1405551)</p></li>
<li><p>UI Toolkit: Make sure buttons are navigatable by default.
(<a href="https://issuetracker.unity3d.com/issues/gamepad-left-stick-is-not-working-with-modified-ui-builder-components">UUM-5077</a>)</p></li>
<li><p>UI Toolkit: Make sure read-only <code>InputFields</code> aren't affected by escape.
(1404283)</p></li>
<li><p>UI Toolkit: Optimized layout computation with the use of absolute positioned elements.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-update-layout-cpu-usage-is-huge-even-when-only-one-element-is-changed">1401339</a>)</p></li>
<li><p>UI Toolkit: Optimized the UI Builder to reduce overhead when dragging/resizing elements in the canvas. (UI Builder).
(1313163)</p></li>
<li><p>UI Toolkit: Prevented the slider dragger from going out of bounds.
(<a href="https://issuetracker.unity3d.com/issues/the-slider-dragger-goes-past-the-maximum-possible-position">1404066</a>)</p></li>
<li><p>UI Toolkit: Stopped BaseVerticalCollectionView Rebuild and RefreshItems from being called when setting bindItem and makeItem to the same value in ListView and TreeView.
(1402308)</p></li>
<li><p>UI Toolkit: The ./jam UIElementsGenerator generates a Markdown file that lists all USS properties.</p></li>
<li><p>UI Toolkit: The hierarchy tree keeps its expanded state and selection when saving in the UI Builder.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-hierarchy-collapses-when-changes-are-saved">1385133</a>)</p></li>
<li><p>UI Toolkit: The UXML Inspector preview clears its Panel and elements receive a DetachFromPanelEvent.
(<a href="https://issuetracker.unity3d.com/issues/uxml-inspector-preview-never-clears-its-panel">1393360</a>)</p></li>
<li><p>UI Toolkit: The Visual Element is rendered with 0 percent alpha value and sets its size to 0 height when changing alpha.
(<a href="https://issuetracker.unity3d.com/issues/ui-toolkit-visual-element-is-rendered-with-0-percent-alpha-value-and-sets-its-size-to-0-height-when-changing-alpha">1344003</a>)</p></li>
<li><p>UI Toolkit: [UI Builder] Fixed an issue where the ProgressBar Component was missing a field for setting the current value.
(<a href="https://issuetracker.unity3d.com/issues/ui-builder-progressbar-component-is-missing-a-field-for-setting-the-current-value-1">UUM-496</a>)</p></li>
<li><p>Undo System: Fixed for incorrect sibling order after undo.
(<a href="https://issuetracker.unity3d.com/issues/redo-changes-the-order-of-prefabs-children">1393058</a>)</p></li>
<li><p>Undo System: Fixed memory leaks in <code>UndoManager</code> on early returns.</p></li>
<li><p>Undo System: Fixed so that OnDestroy is called during undo and redo.
(<a href="https://issuetracker.unity3d.com/issues/undo-undoing-tmp-input-component-and-then-adding-it-again-throws-missingreferenceexception-for-meshrenderer">1399998</a>)</p></li>
<li><p>Undo System: Fixed so unnecessary warnings aren't produced when you delete multiple children, then <strong>undo</strong> and <strong>redo</strong>.
(<a href="https://issuetracker.unity3d.com/issues/warnings-are-thrown-when-deleting-and-undoing-deletion-of-child-game-objects-via-redo">1417422</a>)</p></li>
<li><p>Undo System: Fixed the incomplete undo backup.
(<a href="https://issuetracker.unity3d.com/issues/child-gameobject-gameobject-was-not-registered-into-undo-system-and-became-dangling-during-an-undo-operation-warning-appears">1409543</a>)</p></li>
<li><p>Undo System: Fixed Undo so it doesn't create a component when it's game object is no longer existing and the undo operation does not intend to create it.
(<a href="https://issuetracker.unity3d.com/issues/crash-with-unityeditor-dot-undo-revertalldowntogroup-when-calling-destroyimmediate-on-gameobject-with-children-in-tests">1419944</a>)</p></li>
<li><p>Universal RP: Fixed 2D Spot Light artifacts in light.
(<a href="https://issuetracker.unity3d.com/issues/2d-spot-light-artifacts-regression">UUM-7839</a>)</p></li>
<li><p>Universal RP: Fixed alpha discard on Unlit Sprite targets for Shadergraph.
(<a href="https://issuetracker.unity3d.com/issues/2d-shadergraph-alpha-clipping-is-not-taken-into-account-when-using-unlit-shadergraph-with-multiply-blend-mode">UUM-6998</a>)</p></li>
<li><p>Universal RP: Fixed an issue in deferred rendering mode where the Material inspector would log errors about color and depth dimensions not matching.
(<a href="https://issuetracker.unity3d.com/issues/universal-rp-processevent-method-throws-errors-at-material-selection-when-rendering-path-is-deferred-and-render-scale-value-isnt-1">UUM-15631</a>)</p></li>
<li><p>Universal RP: Fixed decals to pass correct viewDirectionWS to screen space and gbuffer lighting.</p></li>
<li><p>Universal RP: Fixed depth pre-pass being always executed on GLES devices.
(<a href="https://issuetracker.unity3d.com/issues/urp-depth-pre-pass-is-always-executed-regardless-of-project-slash-pipeline-settings-when-opengles3-graphics-api-is-used">UUM-8381</a>)</p></li>
<li><p>Universal RP: Fixed Gizmos in Game View when using Viewports (UUM-7069).</p></li>
<li><p>Universal RP: Fixed incorrect light brightness when using SimpleLit shader.
(<a href="https://issuetracker.unity3d.com/issues/lights-appear-significantly-brighter-when-using-the-simple-lit-shader">UUM-7851</a>)</p></li>
<li><p>Universal RP: Fixed instacing error when decals loaded, but not the decal shaders.</p></li>
<li><p>Universal RP: Fixed light banding artifacts on normal maps.
(<a href="https://issuetracker.unity3d.com/issues/urp-mobile-precision-related-noise-appears-around-specular-highlights-when-using-android-or-ios-platform">UUM-11325</a>)</p></li>
<li><p>Universal RP: Fixed soft shadow filtering quality when using large empty shadow atlas. Use allocated atlas size instead of requested size.
(<a href="https://issuetracker.unity3d.com/issues/urp-shadows-are-jagged-when-shadow-atlas-resolution-is-set-to-4096">UUM-10520</a>)</p></li>
<li><p>Universal RP: Fixed specular highlight edges on Android.
(<a href="https://issuetracker.unity3d.com/issues/android-specular-highlights-have-precision-issues-on-devices-with-adreno-gpu">UUM-7654</a>)</p></li>
<li><p>Universal RP: Set default contribution to 0 for ColorLookup VolumeComponent, which makes the interpolation with the implicit default global volume behave as expected.
(<a href="https://issuetracker.unity3d.com/issues/colors-majorly-change-when-the-volume-components-weight-property-value-changes-from-0-to-any-small-value">UUM-12321</a>)</p></li>
<li><p>Universal Windows Platform: Fixed a crash when entering a composition string longer than 64 characters into the IME.
(<a href="https://issuetracker.unity3d.com/issues/uwp-player-crashes-when-typing-in-japanese-full-width-katakana">UUM-928</a>)</p></li>
<li><p>Universal Windows Platform: Fixed Build &amp; Run picking the wrong instance of Visual Studio which potentially doesn't have required components installed to deploy the application.
(<a href="https://issuetracker.unity3d.com/issues/uwp-build-and-run-picks-the-wrong-instance-of-visual-studio-to-build-when-there-are-multiple-installed">UUM-931</a>)</p></li>
<li><p>Universal Windows Platform: Fixed case of <code>Application.OpenURL</code> asserting due to not freeing temporary memory.
(<a href="https://issuetracker.unity3d.com/issues/backport-uwp-universal-windows-platform-build-crashes-when-using-application-dot-openurl">UUM-2205</a>)</p></li>
<li><p>Universal Windows Platform: Fixed development builds not starting up on Windows 10 versions prior to build 15063.</p></li>
<li><p>Universal Windows Platform: Fixed errors when you use the <code>System.Web.HttpUtility</code> class on UWP.
(<a href="https://issuetracker.unity3d.com/issues/error-cs0103-the-name-httputility-does-not-exist-in-the-current-context-thrown-when-switching-platform-to-uwp">1417085</a>)</p></li>
<li><p>Universal Windows Platform: Fixed float values stored in player prefs getting corrupted on startup.
(<a href="https://issuetracker.unity3d.com/issues/playerprefs-dot-getfloat-returns-wrong-values-when-used-in-uwp-build">UUM-14671</a>)</p></li>
<li><p>Universal Windows Platform: Fixed IL2CPP failing to initialize when called from Windows Runtime component.</p></li>
<li><p>Universal Windows Platform: Fixed IL2CPP failing to initialize when invoked in background task.
(<a href="https://issuetracker.unity3d.com/issues/wns-push-notifications-via-background-task-is-not-working-when-push-notifications-are-sent-from-the-portal-or-using-the-wns-rest-apis">UUM-9644</a>)</p></li>
<li><p>Universal Windows Platform: Fixed memory leak when creating new PlayerPrefs with key that is longer than 25 characters.
(<a href="https://issuetracker.unity3d.com/issues/tls-allocator-alloc-temp-thread-error-is-thrown-when-creating-new-playerprefs-with-key-that-is-longer-than-15-characters">1422374</a>)</p></li>
<li><p>Universal Windows Platform: Fixed so that creating new project sets the package identity name after the project name, rather than the template name.</p></li>
<li><p>URP: Fixed a capture pass issue so the recorder screenshot doesn't miss the post processing results.
(1405209)</p></li>
<li><p>URP: Fixed a capture pass issue so the recorder screenshot doesn't miss the post processing results.
(1405224)</p></li>
<li><p>URP: Fixed a shader compilation error on certain platforms. ([URP-1415](https://jira.unity3d.com/browse/URP-1415)).</p></li>
<li><p>URP: Fixed a shader compiler issue with mismatching variable types when calling lerp.</p></li>
<li><p>URP: Fixed a stencil test issue when a <strong>RendererObjects</strong> feature is injected after Post Processing.
(<a href="https://issuetracker.unity3d.com/issues/urp-mask-component-stops-working-when-a-renderer-feature-renders-it-after-post-processing">1403640</a>)</p></li>
<li><p>URP: Fixed an issue in where a user could stack cameras with different renderers and not get a warning in the editor (this is not supported).</p></li>
<li><p>URP: Fixed an issue in where the _ScreenParams is not setup correctly.</p></li>
<li><p>URP: Fixed an issue that the Shaders now correctly fallback to error shader.
(UUM-1417)</p></li>
<li><p>URP: Fixed an issue where camera UI inspector's clearFlag is not respected.
(<a href="https://issuetracker.unity3d.com/issues/backport-transition-fading-disappears-and-the-cameras-blue-background-appears-when-using-animator-in-urp">UUM-3991</a>)</p></li>
<li><p>URP: Fixed an issue where specular color was not matching behaviour in Legacy and HDRP.
(<a href="https://issuetracker.unity3d.com/issues/urp-specular-color-behavior-does-not-match-legacy-or-hdrp">1326941</a>)</p></li>
<li><p>URP: Fixed camera sorting layer render target not being allocated in the 2d renderer.</p></li>
<li><p>URP: Fixed FXAA quality issues when render scale is not 1.0.</p></li>
<li><p>URP: Fixed incorrect Decal rendering when rendescale is different than one.</p></li>
<li><p>URP: Fixed incorrect Depth for Camera Stacks.
(<a href="https://issuetracker.unity3d.com/issues/canvas-is-not-drawn-without-clear-depth-on-iphone-12-pro">1404157</a>)</p></li>
<li><p>URP: Fixed inspector documentation URLs for the URP asset and Universal Renderer asset.</p></li>
<li><p>URP: Fixed Light2D upgrading issue with m_AlphaBlendOnOverlap property.
(<a href="https://issuetracker.unity3d.com/issues/light-2d-alpha-blend-on-overlap-setting-does-not-update-when-upgrading-project-to-urp-11">UUM-1845</a>)</p></li>
<li><p>URP: Fixed material converter not being able to be called in batch mode.
(1375962)</p></li>
<li><p>URP: Fixed materials that use Autodesk Interactive shader to convert correctly.
(<a href="https://issuetracker.unity3d.com/issues/urp-render-pipeline-converter-converts-and-assigns-shader-to-internalerrorshader-when-the-shader-is-broken-before-converting">1391912</a>)</p></li>
<li><p>URP: Fixed missing depth for Depth of Field in an overlay camera.
(<a href="https://issuetracker.unity3d.com/issues/urp-android-depth-of-field-doesnt-provide-blur-on-android-7-and-older-when-base-and-overlay-cameras-use-different-layer">1365623</a>)</p></li>
<li><p>URP: Fixed property wrappers around material properties.</p></li>
<li><p>URP: Fixed setters so they don't cause an infinite loop in URP pipeline asset.</p></li>
<li><p>URP: Fixed so objects don't disappear when using Depth Priming and Rendering Debugger.
(1379409)</p></li>
<li><p>URP: Fixed stale light cookie data when the last cookie is removed inside a prefab.<br></p>

<ul>
<li>Added a warning when there are more visible lights than maximum light cookies.
(<a href="https://issuetracker.unity3d.com/issues/urp-vulkan-some-lights-stop-emitting-light-when-light-cookie-is-set-to-texture-and-then-set-to-none">1400696</a>)</li>
</ul></li>
<li><p>URP: Fixed the shader graph usage of Unity cross fade.
(1423201)</p></li>
<li><p>URP: Fixed vertex color for sprite shapes in URP 2D.
(<a href="https://issuetracker.unity3d.com/issues/2d-sprite-shape-urp-spriteshape-alpha-value-of-color-not-working-when-using-urp-and-sprite-lit-default-mat">UUM-1921</a>)</p></li>
<li><p>URP: Fixed wireframe view in URP ([UUM-2548](https://jira.unity3d.com/browse/UUM-2548)).</p></li>
<li><p>URP: Improved fallback to single shadow cascade on GLES2.
(<a href="https://issuetracker.unity3d.com/issues/urp-shadows-are-rendered-for-the-first-cascade-only-when-using-gles2">1418462</a>)</p></li>
<li><p>Version Control: Fixed an editor hang when you enter Play Mode.</p></li>
<li><p>Version Control: Fixed capitalization of Pending Changes and File History tab names<br></p>

<ul>
<li>Fixed the amount of spacing after the Item column title in the Pending Changes tab<br></li>
<li>Removed pin striping from line items in File History tab<br></li>
<li>Fixed project view context menu and icons missing after Collaborate project migration<br></li>
<li>Fixed migrated projects not downloading correctly from Unity Hub.</li>
</ul></li>
<li><p>Version Control: Fixed editor refresh triggering when a workspace update is in progress<br>
Fixed pending changes show global ignored as private<br>
Removed encryption checkbox from create organization dialog.</p></li>
<li><p>Version Control: Fixed editor unhandled errors being hijacked by the plugin Fixed toolbar icon not displaying incoming changes notification when Plastic window is closed.</p></li>
<li><p>Version Control: Fixed performance issue with FindWorkspaceForPath method called multiple times every frame<br>
Fixed performance issue with UI.CooldownWindowDelayer.OnUpdate running on project without Plastic SCM workspace.</p></li>
<li><p>Version Control: Fixed performance regression in large projects due to FindObjectsOfTypeAll calls.<br></p>

<ul>
<li>Fixed a working mode error after migration from Unity Collaborate.</li>
</ul></li>
<li><p>Version Control: Fixed Plastic X not opening from plugin menu Fixed error when trying to invite members to project.</p></li>
<li><p>Version Control: Fixed VCCache::instance != NULL error when opening a project with Plastic window opened.</p></li>
<li><p>VFX Graph: Added dedicated icons to the VFX Subgraph operator and block windows.</p></li>
<li><p>VFX Graph: Added missing operators to the node search window.</p></li>
<li><p>VFX Graph: Allowed attribute-less systems.</p></li>
<li><p>VFX Graph: Allowed for attribute-less systems.</p></li>
<li><p>VFX Graph: Changed so when you create a new VFX of the same name as an already opened VFX, it will reuse the existing window.</p></li>
<li><p>VFX Graph: Creating a new VFX of the same name as an already opened VFX reuses the existing window.</p></li>
<li><p>VFX Graph: Displayed context labels in the inspector with all outputs.</p></li>
<li><p>VFX Graph: Enabled specifying the maximum point count in Attribute from Map blocks.
(<a href="https://issuetracker.unity3d.com/issues/pcache-texture-size-used-instead-of-pcache-count-leading-to-samples-with-undefined-values">UUM-542</a>)</p></li>
<li><p>VFX Graph: Fixed an issue to avoid unnessary allocations in the SDF Baker by using Mesh Buffer API.
(<a href="https://issuetracker.unity3d.com/issues/sdf-baking-causes-memory-usage-to-continually-rise-when-entering-play-mode-1">UUM-2285</a>)</p></li>
<li><p>VFX Graph: Fixed an issue with Motion Vector target offset with Line Output.
(UUM-3303)</p></li>
<li><p>VFX Graph: Fixed crash when loading a subscene with VFX in DOTS
(UUM-13772)</p></li>
<li><p>VFX Graph: Fixed delayed property changes so they apply when you save.
(1422686)</p></li>
<li><p>VFX Graph: Fixed GPU event particle init after restarting <code>VisualEffect</code>.
(<a href="https://issuetracker.unity3d.com/issues/attributes-set-in-the-initialize-context-of-gpu-event-systems-return-0">1378335</a>)</p></li>
<li><p>VFX Graph: Fixed Motion vectors in XR.</p></li>
<li><p>VFX Graph: Fixed null reference exception when opening another VFX and a debug mode is enabled.</p></li>
<li><p>VFX Graph: Fixed possible NaNs in Vortex Subgraph node.</p></li>
<li><p>VFX Graph: Fixed resetting of needsComputeBounds.
(<a href="https://issuetracker.unity3d.com/issues/vfx-changing-bounds-mode-from-automatic-to-manual-keeps-doing-the-automatic-bounds-computation">1414185</a>)</p></li>
<li><p>VFX Graph: Fixed single pass stereo rendering issue with SG integration due to uncorrectly setup instanceID.
(<a href="https://issuetracker.unity3d.com/issues/dx11-singlepassinstanced-output-particle-mesh-renders-only-1-particle-when-the-shader-graph-has-active-targets-set-to-universal">UUM-540</a>)</p></li>
<li><p>VFX Graph: Fixed so that the enabled state of VFX blocks and operators are preserved after copy/paste.</p></li>
<li><p>VFX Graph: Fixed so that when you duplicate Event Array elements, it creates linked instances of the elements.
(1411756)</p></li>
<li><p>VFX Graph: Fixed so that when you edit the values in the graph after saving, it impacts the system in real-time.</p></li>
<li><p>VFX Graph: Fixed the <strong>Preserve Specular Lighting</strong> mode on non-Shader Graph lit outputs.
(<a href="https://issuetracker.unity3d.com/issues/hdrp-vfx-pixels-removed-by-alpha-still-receive-specular-when-preserve-specular-lighting-is-enabled">UUM-13778</a>)</p></li>
<li><p>VFX Graph: Fixed the behavior of Tangent Space in ShaderGraph.</p></li>
<li><p>VFX Graph: Fixed the mixing of Vector4 &amp; Color with SampleGraphicsBuffer within the same graph.
(<a href="https://issuetracker.unity3d.com/issues/vfx-compile-error-when-using-more-than-one-graphicsbuffer">1406873</a>)</p></li>
<li><p>VFX Graph: Fixed the sticky note title so it keeps the selected font size when you edit it.</p></li>
<li><p>VFX Graph: Fixed Undo/Redo with Prefabs.
(<a href="https://issuetracker.unity3d.com/issues/vfx-graph-cannot-undo-changed-properties-when-the-visual-effect-is-contained-in-a-prefab-variant">1395584</a>)</p></li>
<li><p>VFX Graph: HDRP Decals are not in experimental.</p></li>
<li><p>VFX Graph: Improved node position when you create a node by dragging an edge.</p></li>
<li><p>VFX Graph: Made the shader graph <strong>exposed properties</strong> order consistent with the shader graph blackboard in the <code>Output Particle</code> blocks.</p></li>
<li><p>VFX Graph: Missing clear of pending events while calling Reinit.
(1386548)</p></li>
<li><p>VFX Graph: Reduced GC.Allocs in the SceneViewGUICallback.
(<a href="https://issuetracker.unity3d.com/issues/vfx-empty-visual-effect-component-generates-about-14-kb-of-garbage-every-frame-in-the-editor">1305929</a>)</p></li>
<li><p>VFX Graph: Resized the custom operator to the minimum size when you change input types.</p></li>
<li><p>VFX Graph: Showed opened VFX asset in inspector when you click in a void area and unselect node when VFX graph lose focus.</p></li>
<li><p>Video: Added "Can't play movie" error message when setting VideoPlayer.url to an invalid url through a script.
(<a href="https://issuetracker.unity3d.com/issues/backport-cant-play-movie-error-is-thrown-when-setting-videoplayer-dot-url-to-an-invalid-url-through-a-script">UUM-11380</a>)</p></li>
<li><p>Video: Fixed the integer division in MediaRational.
(1383367)</p></li>
<li><p>Video: Fixed the timing of how the first video's frame is drawn when the H.264 B-Frames video is used.
(<a href="https://issuetracker.unity3d.com/issues/android-the-first-videos-frame-is-drawn-after-some-time-when-the-h-dot-264-b-frames-video-is-used">1341903</a>)</p></li>
<li><p>Video: Fixed Video's Alpha that was not transparent when built with WebGL.</p></li>
<li><p>Video: Fixed virtual camera not playing due to DevicePath missing.
(<a href="https://issuetracker.unity3d.com/issues/could-not-find-specified-video-device-error-when-using-webcamtexture-with-obs-virtual-camera">UUM-3367</a>)</p></li>
<li><p>Video: Reduced the number of warnings when the color standard is unknown.
(<a href="https://issuetracker.unity3d.com/issues/video-windowsvideomedia-error-unhandled-color-standard-warning-when-importing-various-video-formats">1374819</a>)</p></li>
<li><p>Video: VP8 Video Encoder bitrate was corrected to use bps instead of kbps.
(UUM-12918)</p></li>
<li><p>Virtual Texturing: Added a notice regarding the experimental state of Virtual Texturing to the Player Settings editor.</p></li>
<li><p>Virtual Texturing: Added a warning for Procedural Virtual Texturing clarifying that the feature is not currently supported.</p></li>
<li><p>Virtual Texturing: The experimental state of Streaming Virtual Texturing and Procedural Virtual Texturing was not clearly indicated in the API docs and Manual, this has been corrected. For clarity, these features should not be used in production.</p></li>
<li><p>Web: Blur active element before focusing window to correct behavior on Firefox.
(<a href="https://issuetracker.unity3d.com/issues/touchscreen-unity-webgl-instance-loses-focus-with-touch-input-and-cant-regain-focus-using-touch-input">UUM-1169</a>)</p></li>
<li><p>WebGL: Added fallback configuration for company name, product name and product version to ensure the web cache is always enabled.
(UUM-3944)</p></li>
<li><p>WebGL: Added streaming download of response body in UnityWebRequest.
(<a href="https://issuetracker.unity3d.com/issues/unitywebrequest-buffers-http-response-in-webgl-player-and-sends-all-elements-at-once-instead-of-one-at-the-time">UUM-1149</a>)</p></li>
<li><p>WebGL: Fixed a bug where losing focus on the player would cause buttons to become stuck.
(<a href="https://issuetracker.unity3d.com/issues/input-value-is-constantly-repeated-on-webgl-player-when-changing-focus-of-the-player">UUM-3230</a>)</p></li>
<li><p>WebGL: Fixed a bug where pressing the <code>CMD</code> key on Safari would cause buttons to become stuck.
(UUM-12013)</p></li>
<li><p>WebGL: Fixed audio keeps playing when scene is unloaded.
(<a href="https://issuetracker.unity3d.com/issues/audiosource-keeps-playing-when-other-scene-is-loaded-and-audiosource-is-destroyed">1383561</a>)</p></li>
<li><p>WebGL: Fixed bug where the rendering canvas wasn't resizing when changing orientation.
(<a href="https://issuetracker.unity3d.com/issues/mobile-web-half-of-screen-is-not-rendered-on-mobile-when-screen-orientation-is-landscape">UUM-1135</a>)</p></li>
<li><p>WebGL: Fixed connection between the WebGL player and the profiler.
(<a href="https://issuetracker.unity3d.com/issues/backport-webgl-profiler-does-not-autoconnect-on-webgl-builds">UUM-798</a>)</p></li>
<li><p>WebGL: Fixed extra space between mobile soft keyboard and input field.
(<a href="https://issuetracker.unity3d.com/issues/web-mobile-inputfield-blank-slash-unused-space-between-mobile-input-field-and-soft-keyboard">1409313</a>)</p></li>
<li><p>WebGL: Fixed playback of audio clips on timeline.
(<a href="https://issuetracker.unity3d.com/issues/webgl-multiple-audio-clips-not-playing-in-the-same-timeline-when-its-ran-on-webgl-player-1">UUM-6801</a>)</p></li>
<li><p>WebGL: Fixed stopping of compressed audio clips.
(<a href="https://issuetracker.unity3d.com/issues/audio-keeps-playing-after-calling-audiosource-dot-stop-when-audio-clips-load-type-is-set-to-compressed-in-memory">1384382</a>)</p></li>
<li><p>WebGL: Improved shader compilation performance problems on MacOS when you use GPU instancing.
(<a href="https://issuetracker.unity3d.com/issues/instanced-urp-shaders-using-spherical-harmonics-variables-causes-long-initial-mesh-render-time-when-used-in-webgl">1415766</a>)</p></li>
<li><p>WebGL: Made RGB9E5 selectable as a target texture format for the WebGL texture importer settings.
(<a href="https://issuetracker.unity3d.com/issues/webgl-cannot-manually-override-to-rgb9e5-format">1424639</a>)</p></li>
<li><p>WebGL: Made RGBAHalf selectable as a target texture format for the WebGL texture importer settings.
(<a href="https://issuetracker.unity3d.com/issues/texture-importer-settings-for-webgl-does-not-list-rgba-half-in-the-format-list">1422823</a>)</p></li>
<li><p>WebGL: Made WebGL ignore <code>BuildOptions.AllowDebugging</code> so it can build when the option is used.</p></li>
<li><p>WebGL: Optimized deferred rendering for WebGL.
(1400439)</p></li>
<li><p>Windows: Fixed builds launching on the wrong display after upgrading the project from Unity 2020.3. If the project was previously upgraded to 2021.3, this may cause the builds to start up on a different display first. Use Win + Shift + Left/Right arrow to move the window to the desired display.
(<a href="https://issuetracker.unity3d.com/issues/backport-build-is-launched-in-the-wrong-display-when-main-display-is-changed">UUM-4178</a>)</p></li>
<li><p>Windows: Fixed IL2CPP runtime compilation failing when building C++ code using Visual Studio 2022 17.4 or newer.
(<a href="https://issuetracker.unity3d.com/issues/il2cpp-windows-builds-fails-when-using-vs-2022-17-dot-4-0-preview">UUM-17921</a>)</p></li>
<li><p>Windows: Fixed lack of profiler output from il2cpp when building player via Visual Studio for UWP &amp; Windows.
(UUM-4412)</p></li>
<li><p>Windows: Fixed resolution misdetection on vertical displays, which caused APIs like Screen.currentResolution or Screen.GetDisplayLayout() return wrong data and the player contain letterboxing when it shouldn't.
(<a href="https://issuetracker.unity3d.com/issues/the-player-does-not-refresh-window-display-properties-when-opening-the-player-on-another-display">UUM-7552</a>)</p></li>
<li><p>Windows: Fixed the game window to stay on the right display when you switch to exclusive fullscreen mode at a resolution that's significantly lower than the display's native resolution.
(<a href="https://issuetracker.unity3d.com/issues/screen-dot-setresolution-with-exclusivefullscreen-and-lower-than-half-the-native-resolution-moves-the-window-to-another-display">UUM-1513</a>)</p></li>
<li><p>Windows: Fixed the input System to process gamepad input in the Editor's GameView when you focus a different window.
(1421559)</p></li>
<li><p>Windows: Fixed <code>Screen.currentResolution</code> so it has a correctly rounded refresh rate.
(<a href="https://issuetracker.unity3d.com/issues/windows-the-returned-screen-refresh-rate-is-rounded-down-when-calling-screen-dot-currentresolution-1">UUM-1512</a>)</p></li>
<li><p>Windows: Removed "Unity playback engine" text from the property sheets for Windows player executable.
(<a href="https://issuetracker.unity3d.com/issues/windows-player-exe-contains-unwanted-properties-causing-text-unity-playback-engine-to-appear-in-task-bar-when-mousing-over-it">UUM-15330</a>)</p></li>
<li><p>Windows: Restored the display enumeration behaviour of Unity 2021.1 and earlier: the primary display will always be treated as display 1.</p></li>
<li><p>XR: Fix audio speed up when using MLAudio on Magic Leap.</p></li>
<li><p>XR: Fixed a crash when using MRTK on MagicLeap2.</p></li>
<li><p>XR: Fixed an error string that was not actionable by user so it no longer appears in the Unity editor's Console window.
(1217949)</p></li>
<li><p>XR: Fixed texture memory leak on texture uploads.</p></li>
<li><p>XR: Fixed Unity VR Splash screen so it shows up on UWP.</p></li>
<li><p>XR: Fixed XR devices not following RunInBackground setting in Player Setting on PC standalone and playmode in Editor.</p></li>
</ul>

<h4>Final 2022.2.0f1 Package changes</h4>









































