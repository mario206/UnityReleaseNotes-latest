# UnityReleaseNotes
**Last update time : `2025-05-25 16:17:50`	Powered By ChatGPT**

## More Unity Versions 
|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
| [6000.3](./merge_htmls/6000.3.md) | [6000.2](./merge_htmls/6000.2.md) | [6000.1](./merge_htmls/6000.1.md) | [6000.0](./merge_htmls/6000.0.md) | [2023.2](./merge_htmls/2023.2.md) | [2023.1](./merge_htmls/2023.1.md) | [2022.3](./merge_htmls/2022.3.md) | [2022.2](./merge_htmls/2022.2.md) | [2022.1](./merge_htmls/2022.1.md) |
| [2021.3](./merge_htmls/2021.3.md) | [2021.2](./merge_htmls/2021.2.md) | [2021.1](./merge_htmls/2021.1.md) | [2020.3](./merge_htmls/2020.3.md) | [2020.2](./merge_htmls/2020.2.md) | [2020.1](./merge_htmls/2020.1.md) | [2019.4](./merge_htmls/2019.4.md) | [2019.3](./merge_htmls/2019.3.md) | [2019.2](./merge_htmls/2019.2.md) |
| [2019.1](./merge_htmls/2019.1.md) | [2018.4](./merge_htmls/2018.4.md) | [2018.3](./merge_htmls/2018.3.md) | [2018.2](./merge_htmls/2018.2.md) | [2018.1](./merge_htmls/2018.1.md) | [2017.4](./merge_htmls/2017.4.md) | [2017.3](./merge_htmls/2017.3.md) | [2017.2](./merge_htmls/2017.2.md) | [2017.1](./merge_htmls/2017.1.md) |
| [5.6](./merge_htmls/5.6.md) | [5.5](./merge_htmls/5.5.md) | [5.4](./merge_htmls/5.4.md) | [5.3](./merge_htmls/5.3.md) | [5.2](./merge_htmls/5.2.md) | [5.1](./merge_htmls/5.1.md) | [5.0](./merge_htmls/5.0.md) | | |

## 6000.1

### Known Issues in 6000.1.4f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on D3D12CommonShader::ApplyGpuProgram when attaching material which samples "\_UnityFBInput0" to "Full Screen Pass Renderer Feature" Component ([UUM-105412](https://issuetracker.unity3d.com/issues/crash-on-d3d12commonshader-applygpuprogram-when-attaching-material-which-samples-unityfbinput0-to-full-screen-pass-renderer-feature-component))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: \[GT 730\] - Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Lighting: Android Player freezes on some Mali GPU devices when Lighting Cast Shadows changed to OFF at runtime ([UUM-105246](https://issuetracker.unity3d.com/issues/android-player-freezes-on-some-mali-gpu-devices-when-lighting-cast-shadows-changed-to-off-at-runtime))
    
*   Lighting: Lights are being culled and appear pixelated when the "Main Light" property is disabled and Forward+ or Deferred+ Rendering Paths are used ([UUM-104391](https://issuetracker.unity3d.com/issues/lights-are-being-culled-and-appear-pixelated-when-the-main-light-property-is-disabled-and-forward-plus-or-deferred-plus-rendering-paths-are-used))
    
*   Mono: UnmanagedReadOrWrite objects are not disposed off when GZipStream is used in the "using" statement ([UUM-105139](https://issuetracker.unity3d.com/issues/unmanagedreadorwrite-objects-are-not-disposed-off-when-gzipstream-is-used-in-the-using-statement))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP Foundation: Game View turns black, Scene View turns grey, Console error NullReferenceException when Wireframe is turned on because the DecalGBufferRenderPass references a non existent GBuffer ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: Light is culled incorrectly when Deferred+ and Forward+ Rendering Paths are used ([UUM-103384](https://issuetracker.unity3d.com/issues/light-is-culled-incorrectly-when-deferred-plus-and-forward-plus-rendering-paths-are-used))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### 6000.1.4f1 Release Notes

#### Improvements

*   Documentation: Added remarks, API references and code samples to AMD.AMDUnityPlugin.
    
*   Documentation: Added remarks, API references and code samples to AMD.FSR2CommandExecutionData.
    
*   Documentation: Added remarks, API references and code samples to AMD.FSR2Context.
    
*   Documentation: Added remarks, API references and code samples to AMD.FSR2Quality.
    
*   Documentation: Added remarks, API references and code samples to AMD.FSR2TextureTable.
    
*   Documentation: Added remarks, API references and code samples to AMD.GraphicsDevice.
    
*   Graphics: Improved CopyTexture documentation (warning about using Apply, mentions of the readability property, and general improvements).
    
*   UI Toolkit: Removed few gc allocs from TextElement's internal implementation. (UUM-103707)
    
*   VFX Graph: Reduced allocations in VFXBatch.Update causing slowdown. (UUM-96241)
    

#### API Changes

*   Physics: Added: Added Physics.GetCurrentIntegrationInfo in order to allow retrieving an instance of IntegrationInfo containing data about the currently running Physics SDK integration.
    
*   Physics: Added: Exposed the IntegrationInfo type containing basic data about the currently used Physics SDK integration.
    

#### Fixes

*   2D: Fixed issue in the Tile Palette window where the brushes toolbar expands its height when its width is reduced to a certain level. ([UUM-103089](https://issuetracker.unity3d.com/issues/default-brush-dropdown-expands-vertically-when-resizing-tile-palette-window-horizontally))
    
*   2D: Fixed issue where an error message is shown in the console window when the Tile Palette clipboard is open with an invalid width or height. ([UUM-103942](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-errors-appear-when-selecting-specific-tile-palette-gameobjects))
    
*   2D: Fixed issue where the mask interaction settings of one TilemapRenderer can persist to the next immediate TilemapRenderer. ([UUM-103926](https://issuetracker.unity3d.com/issues/the-tilemap-gameobject-causes-other-tilemap-gameobjects-to-become-invisible-when-its-mask-interaction-is-set-to-visible-inside-mask))
    
*   2D: Fixed issue with SpriteAtlas v1 inspector where the labels do not adjust in size when the inspector's width changes. (UUM-103036)
    
*   2D: Fixed issue with the adjustment of the Sprite Atlas settings in the Tile Set Editor when the inspector's width changes. (UUM-103036)
    
*   2D: Fixed RGB 48 bit format for SpriteAtlas. (UUM-104007)
    
*   Asset Pipeline: Fixed problem where main thread in editor or player could become blocked, while async loading is in progress. (UUM-104218)
    
*   Bug Reporter: Fixed an issue where bug reporter executable version is incorrectly set to Editor version rather than Bug Reporter version. (SUS-5708)
    
*   Bug Reporter: Fixed Unity Licence Client request failures on specific conditions where only partial organization data exists. (SUS-5711)
    
*   Documentation: Added documentation for CommandBuffer.BuildRayTracingAccelerationStructure method parameters.
    
*   Editor: Added a minimum width for the Inspector window container to prevent content overflow. (UUM-103030)
    
*   Editor: Before running the macOS Editor, perform a check if Rosetta is installed and if not then prompt to install it. (UUM-104562)
    
*   Editor: Changing the UnityEvent target in the inspector will now clear the method when incompatible. ([UUM-101710](https://issuetracker.unity3d.com/issues/unityevents-break-when-a-different-object-is-assigned))
    
*   Editor: Editor can crash when playable graph topology is changed by an animation event callback. ([UUM-104081](https://issuetracker.unity3d.com/issues/crash-on-mecanim-animation-transformvaluesfromclip-when-entering-the-play-mode-in-a-project-with-animancer-pro-v8))
    
*   Editor: Fixed an issue where passing a long string label for a dialog box could cause an editor crash. ([UUM-90434](https://issuetracker.unity3d.com/issues/crash-on-editordisplaydialogproc-when-opening-dialog-box-containing-buttons-with-unusually-long-labels))
    
*   Editor: Fixed an issue where the Editor would hang when cutting and pasting a script to another folder during Play mode. ([UUM-104031](https://issuetracker.unity3d.com/issues/editor-hangs-when-cutting-and-pasting-a-script-to-another-folder-during-play-mode))
    
*   Editor: Fixed bugs seen within the OpenXR package using Composition Layers where projection layers and videos would be flipped upside down.
    
*   Editor: Fixed invalid a tag exception with UITK. (UUM-90526)
    
*   Editor: Fixed link tag broken when used with ellipsis in UITK. ([UUM-103041](https://issuetracker.unity3d.com/issues/links-dont-work-in-ui-toolkit-when-text-is-elided))
    
*   Editor: Fixed macro redefinition warnings by first checking if PUNCTUAL\_SHADOW\_LOW, USE\_FPTL\_LIGHTLIST and DIRECTIONAL\_SHADOW\_LOW have already been defined previously.
    
*   Editor: Fixed some performance issues when moving Terrain objects (eg. for shifting world origin to support large worlds) while Tree rendering is disabled. Renderers for tree instances would still be updated but this is not particularly useful or wanted if you are using some other system to render Tree instances. So now the updating of tree instances is bypassed in this scenario. Re-enabling tree rendering will resume updating tree instance and detail renderers. When tree rendering is enabled, performance remains roughly the same as before. ([UUM-98086](https://issuetracker.unity3d.com/issues/frame-spike-due-to-many-treerenderer-dot-treeupdated-calls-when-repositioning-terrains-in-large-scenes))
    
*   Editor: Updated Build Profile window icons for Web platform. (UUM-82559)
    
*   Graphics: Fixed infinite progress bar when converting PostProcess v2 from Built-in Render Pipeline to Universal Render Pipeline in the Converter. ([UUM-102790](https://issuetracker.unity3d.com/issues/editor-freezes-when-initializing-converters-with-post-processing-stack-v2-converter-enabled))
    
*   Graphics: Replaced IRenderPipelineGraphicsSettingsContextMenu interface by IRenderPipelineGraphicsSettingsContextMenu2 to remove the PropertyDrawer argument that was recreated (contained data lost) when a DomainReload occured. The new interface replace it by a SerializedProperty onto the IRenderPipelineGraphicsSettings instead. (UUM-99684)
    
*   Graphics: Upgraded DLSS version from v3.1.10 to v3.7.20, fixing some ghosting artifacts and improving image stability. ([UUM-102344](https://issuetracker.unity3d.com/issues/dlss-smearing-artifacts-when-idle-animation-repeats))
    
*   IL2CPP: Fixed crash in GetAllocatedBytesForCurrentThread where unreachable code is hit. ([UUM-100690](https://issuetracker.unity3d.com/issues/crash-on-runtimefieldinfo-resolvetype-with-il2cpp-and-returns-0-with-mono-when-calling-gc-dot-getallocatedbytesforcurrentthread-method))
    
*   IL2CPP: Fixed incorrect exception handler generation when an exception handler with a filter throws an exception. ([UUM-91180](https://issuetracker.unity3d.com/issues/exception-block-is-being-rewritten-to-throw-an-incorrect-number-of-exceptions-when-running-a-project-built-using-il2cpp-scripting-backend))
    
*   Mono: Fixed crash on incorrectly optimized calls to EqualityComparer<T>.Default in Generic Record Type Equals implementations. ([UUM-99151](https://issuetracker.unity3d.com/issues/crash-on-raiseexception-when-checking-for-null-equality-in-a-specific-variable))
    
*   Physics: Fixed an issue where ArticulationBody components would disregard update calls from Animator components playing a clip which animates an ArticulationBody property. ([UUM-84463](https://issuetracker.unity3d.com/issues/articulation-body-fails-to-move-the-gameobject-when-the-xdrives-target-value-is-set-in-animation))
    
*   Physics 2D: Fixed an issue where modifying the sub-colliders used by a `CompositeCollider2D` inside a prefab caused unexpected behavior. ([UUM-103177](https://issuetracker.unity3d.com/issues/crash-on-compositecollider2d-prepareshapes-when-adding-or-removing-components-from-a-prefab-with-a-composite-collider-2d-component))
    
*   Scene/Game View: Fixed an issue where cursor rects added using EditorGUIUtility.AddCursorRect would have a slight positional offset. ([UUM-98348](https://issuetracker.unity3d.com/issues/cursor-doesnt-change-to-the-resizing-when-using-the-rect-tool-and-the-sprite-is-too-close-to-the-bottom-of-the-scene-view))
    
*   Scripting: Binary2text crashed if a TypeTree was missing. (UUM-100864)
    
*   SRP Core: Fixed a memory leak that occurred when entering and exiting Play mode in the Editor. (UUM-104541)
    
*   Text: Fixed a scaling issue with the Advanced Text Generator. (UUM-104412)
    
*   TextCore: Resolve TextCore selection issues for single-character lines. (UUM-103255)
    
*   UI: Display proper message when multiple build profiles selected. ([UUM-77826](https://issuetracker.unity3d.com/issues/user-gets-a-misleading-informational-message-in-the-build-profile-window-when-multiple-build-profiles-are-selected))
    
*   UI Toolkit: Fixed an issue where label tooltips were displayed offset from the cursor's position. ([UUM-102885](https://issuetracker.unity3d.com/issues/tooltip-is-offset-when-hovering-over-a-serialized-field-in-the-inspector))
    
*   UI Toolkit: Fixed an issue where resetting a data source would not always register to the INotifyBindablePropertyChanged callbacks. ([UUM-104829](https://issuetracker.unity3d.com/issues/inotifybindablepropertychanged-is-unusable-when-a-project-has-domain-reload-disabled-and-uidocument-starts-enabled-in-the-scene))
    
*   UI Toolkit: Fixed bindings for BaseField elements of UnityEngine.Object derived types. ([UUM-104241](https://issuetracker.unity3d.com/issues/binding-a-field-to-a-type-that-inhertis-from-unity-dot-object-fails))
    
*   UI Toolkit: Fixed display style property to not trigger transitions. ([UUM-70286](https://issuetracker.unity3d.com/issues/layout-of-elements-is-delayed-when-elements-are-styled-with-transition-duration))
    
*   UI Toolkit: Fixed exception when unbinding UxmlObjectReference fields. ([UUM-104574](https://issuetracker.unity3d.com/issues/nullreferenceexception-object-reference-not-set-to-an-instance-of-an-object-error-is-thrown-when-attempting-to-remove-a-binding-in-the-uibuilder-for-a-uxmlobjectreference))
    
*   UI Toolkit: Fixed RuntimePanelUtils.CameraTransformWorldToPanel sometimes not working for secondary displays in the editor. ([UUM-102346](https://issuetracker.unity3d.com/issues/runtimepanelutils-dot-cameratransformworldtopanel-returns-incorrect-values-when-viewed-in-the-game-view-during-play-mode))
    
*   UI Toolkit: Removed the invalid "Add Selector" option from the StyleSheet context menu in the UI Builder. (UUM-102726)
    
*   UI Toolkit: Use icons instead of text for slice type in UIBuilder. (UUM-103768)
    
*   Universal RP: Create GBuffers before BeforeRenderingGbuffer in the render graph. (UUM-98558)
    
*   Universal RP: Fixed linear upscale wrong color space by clearing keywords set by previous upscale settings. ([UUM-102082](https://issuetracker.unity3d.com/issues/a-color-filter-slash-tint-is-applied-to-game-view-when-using-non-fsr-upscaling-filter-and-using-fxaa))
    
*   Version Control: Fixed false positive error showing in console if creating a workspace from the Hub with a version of the Unity Editor shipping with a default Version Control package older than version 2.7.1.
    
*   VFX Graph: Fixed "Error assigning 2D texture to 3D texture property" errors being thrown when no Texture3D is assigned to a Texture3D property in ShaderGraph outputs. ([UUM-101749](https://issuetracker.unity3d.com/issues/vfxg-having-texture3d-property-in-sg-throws-console-errors-when-vfx-output-has-no-texture-asset-assigned))
    
*   VFX Graph: Fixed erroneous error feedback within the Visual Effect Graph. ([UUM-104768](https://issuetracker.unity3d.com/issues/error-warning-log-badges-are-not-present-in-vfx-graph))
    
*   VFX Graph: Prevent potential crash when deleting VisualEffect, Mesh or Texture while using Native Graphics Jobs. (UUM-100342)
    
*   VisionOS: Updated visionOS trampoline to respect RunInBackground setting. VisionOS apps now pause when the user opens the home screen if RunInBackground is set to false. Note that this changes the behavior for the default value of this setting, which is false. (UUM-103799)
    
*   Web: Fixed the diagnostic overlay to be available for PWA and minimal Web template builds. ([UUM-103203](https://issuetracker.unity3d.com/issues/the-web-diagnostics-overlay-only-works-with-the-default-template))
    
*   Windows: Fixed for saving corrupted PlayerPrefs when application is closed when out of focus. ([UUM-100970](https://issuetracker.unity3d.com/issues/playerprefs-get-corrupted-when-a-minimized-fullscreen-player-is-closed-through-the-taskbar))
    
*   XR: Fixed issue where Quest Link would fail when using DX12 and single pass rendering.

### Known Issues in 6000.1.3f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Graphics Tools: Editor freezes when initializing converters with Post-Processing Stack V2 Converter enabled ([UUM-102790](https://issuetracker.unity3d.com/issues/editor-freezes-when-initializing-converters-with-post-processing-stack-v2-converter-enabled))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Lighting: Lights are being culled and appear pixelated when the "Main Light" property is disabled and Forward+ or Deferred+ Rendering Paths are used ([UUM-104391](https://issuetracker.unity3d.com/issues/lights-are-being-culled-and-appear-pixelated-when-the-main-light-property-is-disabled-and-forward-plus-or-deferred-plus-rendering-paths-are-used))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Scene Management: Editor hangs when cutting and pasting a Script to another folder during Play Mode ([UUM-104031](https://issuetracker.unity3d.com/issues/editor-hangs-when-cutting-and-pasting-a-script-to-another-folder-during-play-mode))
    
*   SRP Foundation: Game View turns black, Scene View turns grey, Console error NullReferenceException when Wireframe is turned on because the DecalGBufferRenderPass references a non existent GBuffer ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   SRP XR: Light is culled incorrectly when Deferred+ and Forward+ Rendering Paths are used ([UUM-103384](https://issuetracker.unity3d.com/issues/light-is-culled-incorrectly-when-deferred-plus-and-forward-plus-rendering-paths-are-used))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Visual Effects: VFX throw errors upon importing it and breaks rendering for certain effects ([UUM-103734](https://issuetracker.unity3d.com/issues/vfx-throw-errors-upon-importing-it))
    

### 6000.1.3f1 Release Notes

#### Features

*   Version Control: Added to most dialogs an "Enter" keyboard shortcut to confirm the operation like the corresponding button.
    
*   Version Control: Added to the check-in and shelve notification a link to go to the list of changesets/shelves. The user can also copy the direct diff link.
    
*   Version Control: Added to the history a context action to diff changes for files that were moved/renamed.
    
*   Version Control: Added to the history of a folder a context action to revert changes.
    
*   Version Control: Added to the list of branches a context action to diff the branch.
    
*   Version Control: Added to the list of branches a context action to hide branches. You can use the filter to list the hidden branches and unhide them from the context menu.
    
*   Version Control: Added to the list of changesets a context action to create a new branch from a specific changeset.
    
*   Version Control: Added to the merge operation a notification with a link to go to the pending changes.
    
*   Version Control: Added to the merge view the avatars for authors of changes.
    
*   Version Control: Added to the pending changes view the user avatar if available from Gravatar.
    
*   Version Control: Added to the status bar an action to copy to the clipboard the name of the current branch.
    
*   Version Control: Added to the undo and update workspace operations an ephemeral notification.
    

#### Improvements

*   Documentation: Added examples to show how to use UseGlobalTexture and UseAllGlobalTextures APIs

#### API Changes

*   Package: Added: Unity Test Framework interface `ITestPlayerBuildModifier` updated to include override for building with `BuildPlayerWithProfileOptions`. (UUM-90288)

#### Changes

*   EmbeddedLinux: Removed unused LGPL libusb code from SDL
    
*   Linux: Removed unused LGPL libusb code from SDL
    
*   QNX: Removed unused LGPL libusb code from SDL
    
*   XR: The Unity XR SDK is no longer available as we have focused our investments towards OpenXR.
    

#### Fixes

*   DX12: Fixed graphical artifacts when the HD Dynamic Resolution Component changes the resolution scale. ([UUM-95509](https://issuetracker.unity3d.com/issues/graphical-artifacts-appear-when-the-hd-dynamic-resolution-component-changes-the-resolution-scale))
    
*   Editor: Fixed errors spamming console when the inspector of a .androidlib asset is displayed. ([UUM-103757](https://issuetracker.unity3d.com/issues/a-could-not-generate-preview-image-error-is-shown-in-the-console-window-when-viewing-a-dot-androidlib-asset))
    
*   Editor: Fixed Gizmo text not being displayed when using Bitmap Font. ([UUM-99449](https://issuetracker.unity3d.com/issues/label-text-is-not-shown-when-default-editor-text-rendering-mode-is-set-to-bitmap))
    
*   Editor: Fixed HasCharacters and TryAddCharacters for utf32. ([UUM-102582](https://issuetracker.unity3d.com/issues/hascharacters-returns-false-when-checking-emojis-using-surrogate-pairs-despite-characters-being-present-in-the-font-asset))
    
*   Editor: Fixed missing script warning in Environment Samples.  
    Fixed h1 tag replace with a non-responsive markup in all HDRP samples.  
    Fixed grammar in Environment Samples.
    
*   Editor: Fixed potential file read errors when an AssetBundle unloads Textures when Texture Streaming is enabled. (UUM-84237)
    
*   Editor: Fixed Search Default Index is not created when a package already has an index. ([UUM-102532](https://issuetracker.unity3d.com/issues/search-default-index-is-not-created-when-a-package-already-has-an-index))
    
*   Editor: Fixed text selection being unstable when using ellipsis. (UUM-87979)
    
*   Editor: Fixers an issue where Text and Text Icons were hidden when the overlay/toolbar was put into a vertical layout, allowing a toggle to be blank in vertical layout if it had no image icon. (UUM-85321)
    
*   GI: Baking lighting with APV does not work in batch mode. ([UUM-82840](https://issuetracker.unity3d.com/issues/baking-lights-with-apv-does-not-work-when-it-is-done-in-batchmode))
    
*   GI: Make APV sky occlusion baking take terrain into account. ([UUM-98656](https://issuetracker.unity3d.com/issues/apv-sky-occlusion-doesnt-consider-the-terrain))
    
*   Graphics: Fixed an issue where ASTC compression can have different results if called multiple times within the same process ([UUM-96066](https://issuetracker.unity3d.com/issues/calling-texture2d-dot-getrawdata-on-a-texture-with-astc-format-returns-different-results-when-the-editor-is-started-without-library-folder-and-then-restarted-with-library-folder))
    
*   Graphics: Fixed clear in renderpass' subpass using wrong RT. (UUM-103778)
    
*   IL2CPP: Fixed missing time zone adjustments for British Summer Time. ([UUM-102210](https://issuetracker.unity3d.com/issues/datetime-dot-now-in-the-uk-timezone-does-not-adjust-when-the-british-summer-time-is-active))
    
*   iOS: Fixed "hang" after calling UnityBatchPlayerLoop. ([UUM-97542](https://issuetracker.unity3d.com/issues/ios-unitybatchplayerloop-causes-a-freeze-in-the-ios-application-when-it-is-put-to-the-background-and-brought-back-to-the-foreground))
    
*   Mono: Fixed Process.Start hangs on intel mac editors running on apple silicon. (UUM-101541)
    
*   Networking: Updated Mbed TLS to version 3.6.3 to improve security. (UUM-103889)
    
*   Particles: Added missing tooltips in the Particle System overlay. ([UUM-92524](https://issuetracker.unity3d.com/issues/hovering-on-the-particle-system-controls-shows-an-offset-tooltip-with-the-overlay-window-name))
    
*   Particles: Allow to horizontally scroll the curve presets when they do not fit the editor window width. ([UUM-92529](https://issuetracker.unity3d.com/issues/particle-system-curve-presets-cant-be-scrolled-and-some-of-them-cant-be-selected-if-window-is-too-narrow-to-fit-them-all))
    
*   Physics: Fixed an issue with Rigidbody component sweep apis where Colliders would not respect ignore collision pairs. ([UUM-91059](https://issuetracker.unity3d.com/issues/physics-dot-ignorecollision-is-not-respected-when-used-with-rigidbody-dot-sweeptest))
    
*   Physics: Fixed dpi scaling for the collision layer matrix found inside Project Settings/Physics/Settings. ([UUM-82261](https://issuetracker.unity3d.com/issues/physics-layer-collision-matrixs-layer-names-checkboxes-and-hover-highlights-become-misaligned-when-the-editors-ui-scaling-gets-changed))
    
*   Physics: Improved the performance of Physics.TransformSync in cases where deeply nested hierarchies containing large amounts of Collider components would add an Animator to any child within that hierarchy. Previously this would incur a massive performance hit. After these changes there is still a performance cost but far smaller than before, somewhere in the range of 8x-9x less depending on hierarchy. ([UUM-87199](https://issuetracker.unity3d.com/issues/physics-synccolliders-3x-7x-performance-regression-from-2022lts-to-u6))
    
*   SRP Core: Fixed an editor crash that could sometimes occur when throwing an exception from `Dispose()` in a custom SRP renderer feature. ([UUM-98161](https://issuetracker.unity3d.com/issues/crash-on-pptr-operator-or-nullexception-errors-spammed-in-console-when-calling-dispose-on-null-graphicsbuffer-with-baked-reflection-probes))
    
*   UI Toolkit: Fixed an issue to prevent multiple rebuild calls when resizing a column, improving performance and responsiveness. (UUM-104454)
    
*   UI Toolkit: Fixed an issue where assigning a PanelSettings value on a UIDocument with a visual tree asset assigned to it will leave a copy of the visual tree asset in the GameView until the Editor is closed and reopened. (UUM-72343)
    
*   UI Toolkit: Fixed an issue where ScrollView sometimes didn't expand the scroller range when adding a child element through code. ([UUM-64521](https://issuetracker.unity3d.com/issues/scrollview-doesnt-expand-when-elements-are-added-in-play-mode))
    
*   UI Toolkit: Fixed Pixels Per Unit setting field unaligned with other fields in Panel Settings Asset. ([UUM-103176](https://issuetracker.unity3d.com/issues/pixels-per-unit-setting-field-is-unaligned-with-other-fields-in-panel-settings-asset))
    
*   UI Toolkit: Fixed RadioButton.value cannot be set to true when initializing the radio buttons. ([UUM-101740](https://issuetracker.unity3d.com/issues/radiobutton-dot-value-cannot-be-set-to-true-when-initializing-the-radio-buttons))
    
*   UI Toolkit: Fixed TextOverlay displaying the wrong information. (UUM-98976)
    
*   UI Toolkit: Fixed UIDocument content sometimes not immediately refreshed when changing the panel settings property. ([UUM-87528](https://issuetracker.unity3d.com/issues/ui-does-not-display-until-editor-refresh-if-assign-source-asset-before-panel-settings-to-ui-document-component))
    
*   UI Toolkit: Improved ExposedReference property drawer so it responds to changes to source asset, supports drag and drop and aligns with other inspector fields. (UUM-98725)
    
*   UI Toolkit: The ColorField no longer shows a vestigial progress indication when the alpha is set 0. ([UUM-101231](https://issuetracker.unity3d.com/issues/color-node-alpha-slider-displays-incorrect-value-when-viewed-in-shader-graph))
    
*   URP: Fixed light rendering incorrectly from certain angles when using Forward+ in URP. ([UUM-98788](https://issuetracker.unity3d.com/issues/forward-plus-deferred-plus-light-is-not-rendered-in-the-scene-view-at-a-specific-angle-slash-distance))
    
*   Version Control: Added the option to add a folder by path to the ignore or hidden changes list, instead of the incorrect option "Using the item extension".
    
*   Version Control: Fixed a null exception that could occur on Revert to this revision if the selected change triggered a domain reload.
    
*   Version Control: Fixed a null exception that could occur when switching to the changesets tab very quickly after checkin.
    
*   Version Control: Fixed a null exception that occured when using the diff search filter without any shelve in the repository.
    
*   Version Control: Fixed an error that was showing when deleting a shelveset that wasn't the one selected in the list.
    
*   Version Control: Fixed bulk editing meta files that was only performing a single checkout for the last element.
    
*   Version Control: Fixed incorrect branch name in the history of a file for a revision where it was moved, displaying details of the move instead of the name of the branch.
    
*   Version Control: Fixed merge success notification that was showing in the view potentially colliding with contents.
    
*   Version Control: Fixed project download from the Hub that was silently skipped when trying to download inside another workspace. It's now logging an explicit error in the console.
    
*   Version Control: Fixed the apply shelve operation so that it checks for dirty changes and warn the user before applying the shelve.
    
*   Version Control: Fixed the auto checkout for assets to only apply for file containing actual changes.
    
*   Version Control: Fixed the scroll that was not at the top when opening the branches or the shelves view.
    
*   Version Control: Fixed the UI that could start refreshing forever, never completing the ongoing operations.
    
*   Version Control: Fixed the Unity Editor crashing on macOS when opening the Unity Version Control window with the PiXYZ Plugin installed.
    
*   Version Control: Fixed Undo changes of a Moved asset using the Asset Context Menu from the Project View that was leaving an inconsistent .meta file.
    
*   Version Control: Implemented a mechanism to fix the path to UnityYAMLMerge.exe in the client.conf so it always points to an existing Unity installation.
    
*   VFX Graph: Fixed VFX URP Decal output on macOS silicon. (UUM-104384)
    
*   XR: Fixed problem with multiple "UnityGame: GameManager not available." logcat messages when running application on Oculus Quest 2. (UUM-104169)

### Known Issues in 6000.1.2f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Graphics Tools: Editor freezes when initializing converters with Post-Processing Stack V2 Converter enabled ([UUM-102790](https://issuetracker.unity3d.com/issues/editor-freezes-when-initializing-converters-with-post-processing-stack-v2-converter-enabled))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Scene Management: Editor hangs when cutting and pasting a Script to another folder during Play Mode ([UUM-104031](https://issuetracker.unity3d.com/issues/editor-hangs-when-cutting-and-pasting-a-script-to-another-folder-during-play-mode))
    
*   SRP Foundation: Game View turns black, Scene View turns grey, Console error NullReferenceException when Wireframe is turned on because the DecalGBufferRenderPass references a non existent GBuffer ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   SRP Foundation: \[Mobile\] Visual artifacts when RenderGraphPass is merged into NativePass ([UUM-102824](https://issuetracker.unity3d.com/issues/mobile-visual-artifacts-when-rendergraphpass-is-merged-into-nativepass))
    
*   SRP XR: Light is culled incorrectly when Deferred+ and Forward+ Rendering Paths are used ([UUM-103384](https://issuetracker.unity3d.com/issues/light-is-culled-incorrectly-when-deferred-plus-and-forward-plus-rendering-paths-are-used))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Visual Effects: VFX throw errors upon importing it and breaks rendering for certain effects ([UUM-103734](https://issuetracker.unity3d.com/issues/vfx-throw-errors-upon-importing-it))
    

### 6000.1.2f1 Release Notes

#### Changes

*   2D: Remove com.unity.2d.pixel-perfect package from 2D URP template because users should be using the PixelPerfect feature that comes with 2D URP. (UUM-95753)
    
*   Build Pipeline: Allow building AssetBundles with both the DisableTypeTree and StripUnityVersion flags. Fix the ability to load these AssetBundles in the Runtime. ([UUM-102575](https://issuetracker.unity3d.com/issues/an-error-is-thrown-when-building-assetbundles-with-disablewritetypetree-and-stripunityversion-flags))
    

#### Fixes

*   2D: Fix manual reference link for GridSelection ([UUM-101641](https://issuetracker.unity3d.com/issues/manual-reference-page-for-grid-selection-is-missing))
    
*   Asset Pipeline: Fixed import worker crash when switching Platform from Android to another platform. ([UUM-103258](https://issuetracker.unity3d.com/issues/android-xr-import-workers-crash-when-changing-platform))
    
*   Audio: Fixed audio parameters not being applied soon enough when AudioSource is in fixed update mode due to RigidBody component in the same hierarchy. ([UUM-102166](https://issuetracker.unity3d.com/issues/audiorandomcontainer-distorts-when-heirarchy-contains-rigid-body-and-spatial-blend-is-set-to-3d))
    
*   Build Pipeline: Improve BeeLocalCacheTool error reporting when copying files (UUM-102819)
    
*   Documentation: Added links to the startWidth, endWidth and widthCurve properties which replace the obsolete SetWidth method on the LineRenderer component.
    
*   Editor: .androidlib plugins if used extension plugins will work with Symlink Sources On. ([UUM-103543](https://issuetracker.unity3d.com/issues/tilemap-dropdown-highlight-stuck-on-create-new-tilemap-after-hovering-outside-and-returning))
    
*   Editor: Fix upload button is not aligned with other buttons in the Build Profiles window footer. (UUM-92546)
    
*   Editor: Fixed a performance regression for Volumes in Dev builds and in Editor. (UUM-101874)
    
*   Editor: Fixed a runtime crash when changing MSAA levels on OpenGL.
    
*   Editor: Fixed active profile disappears when opening a project with active server profile when server module is not installed (UUM-101846)
    
*   Editor: Fixed an issue on Windows where some popups appear incorrectly scaled when displayed close to the border between two monitors with different DPI scaling settings. ([UUM-86925](https://issuetracker.unity3d.com/issues/debug-mode-popup-window-is-inaccessible-slash-cut-off-when-opened-on-widescreen-monitors-or-resizing-to-specific-editor-window-resolution))
    
*   Editor: Fixed console icons. ([UUM-103134](https://issuetracker.unity3d.com/issues/error-icon-color-in-console-window-differs-from-other-tabs-in-dark-theme))
    
*   Editor: Fixed editor crash when serializing files bigger than 2GB ([UUM-103305](https://issuetracker.unity3d.com/issues/crash-on-yamlwrite-outputtocachedwriter-when-generating-lighting))
    
*   Editor: Fixed EditorUserBuildSettings.activeBuildTarget unmatch the active profile shown in the window (UUM-101847)
    
*   Editor: Fixed issue with dynamic fonts having some characters included in a clean build when using TMP. ([UUM-103618](https://issuetracker.unity3d.com/issues/clear-dynamic-data-on-build-does-not-clear-data-after-a-clean-build-when-the-atlas-population-mode-is-set-to-dynamic-or-dynamic-os))
    
*   Editor: Fixed issue with transition color on text with ATG. (UUM-78493)
    
*   Editor: Fixed pixelated icon in search window. ([UUM-102758](https://issuetracker.unity3d.com/issues/inspector-icon-in-the-inspector-window-is-less-sharp-slash-more-pixelated-than-other-editor-icons))
    
*   Editor: Fixed pixelated icon in search window. ([UUM-103429](https://issuetracker.unity3d.com/issues/low-resolution-icons-in-search-window-labels-options-tags-and-inspector-panel))
    
*   Editor: Fixed some BIDI selection issues with ATG. (UUM-78977)
    
*   Editor: Fixed Universal\_Foundation\_GraphicsTests.214\_Motion\_Vectors\_SG\_Shader\_Types\_Vertex\_Animation fails with GC.Alloc tests on ARM64 macOS (UUM-98144)
    
*   Editor: Fixed Windows profile not showing install in build folder checkbox based on player settings overrides. (UUM-93004)
    
*   Editor: Remove max width limit for search query panel. ([UUM-103391](https://issuetracker.unity3d.com/issues/a-blank-narrow-section-becomes-visible-on-the-right-side-of-the-searches-section-on-max-view))
    
*   Editor: Updated the precompiled assemblies update consent request message so that the dialog instructions always remain visible. ([UUM-99073](https://issuetracker.unity3d.com/issues/the-api-updater-consent-request-message-is-cropped-when-the-dll-file-list-is-too-big))
    
*   Editor: Windows now restored correctly to their last positions when opened on Ubuntu 24.04. ([UUM-95655](https://issuetracker.unity3d.com/issues/linux-window-location-is-not-saved-when-reopening-windows))
    
*   Graphics: Correct bounding box transformations in SkinnedMeshRenderer when "Update When Offscreen" is enabled and scaling is applied. ([UUM-69984](https://issuetracker.unity3d.com/issues/point-light-does-not-affect-skinnedmeshrenderer-when-its-deformed-has-update-when-offscreen-enabled-and-rendering-path-is-set-to-forward))
    
*   Graphics: Fixed Input Attachments + MSAA not working on platforms that emulate it using texture lods. (UUM-67324)
    
*   Graphics: Fixed issue where LookDev's default VolumeProfile content was destroyed when creating new project from HD template in the hub. ([UUM-100350](https://issuetracker.unity3d.com/issues/changing-environment-profiles-in-lighting-window-throws-nullreferenceexception-error))
    
*   Kernel: Fixed leak detection for ThreadSafeLinearAllocator. ([UUM-100968](https://issuetracker.unity3d.com/issues/to-debug-run-app-with-diag-job-temp-memory-leak-validation-cmd-line-argument-this-will-output-the-callstacks-of-the-leaked-allocations-dot-warning-is-printed-when-jobtempmemoryleakvalidation-switch-is-enabled))
    
*   Linux: Fixed Player creates a maximized window when launched with batchmode argument. ([UUM-100366](https://issuetracker.unity3d.com/issues/linux-player-creates-a-maximized-window-when-launched-with-batchmode-argument))
    
*   Particles: Prevent NaN in Rotation3D if Shape Scale is Zero. ([UUM-97828](https://issuetracker.unity3d.com/issues/particles-are-not-rendered-when-align-to-direction-is-enabled-and-the-z-scale-is-set-to-0-under-the-shape-module-in-the-particle-system-component))
    
*   Physics: Fixed Crash in Collider::FindNewAttached when parenting a root GameObject in OnDisable. ([UUM-102784](https://issuetracker.unity3d.com/issues/crash-on-collider-findnewattached-when-parenting-a-gameobject-in-ondisable-and-the-script-component-is-above-the-collider))
    
*   Physics 2D: Ensure that all 2D Physics OnCollision/OnTrigger produce Enter/Exit callbacks in the correct order under all circumstances. ([UUM-101320](https://issuetracker.unity3d.com/issues/ontriggerexit2d-is-called-before-ontriggerenter2d-when-object-is-destroyed-immediately))
    
*   Scene/Game View: Fixed a specific case where the SceneView DebugDrawMode serialization could be incorrect. (UUM-102090)
    
*   Search: Fixed DirectoryNotFoundException in FindProvider. ([UUM-99644](https://issuetracker.unity3d.com/issues/directorynotfoundexception-error-appears-in-the-console-window-when-opening-the-search-window))
    
*   Search: Fixed exception thrown when searching for filters in the "Select Scene" window. ([UUM-103398](https://issuetracker.unity3d.com/issues/user-gets-nullreferenceexception-object-reference-not-set-to-an-instance-of-an-object-error-in-the-console-during-the-search-in-the-select-scene-window))
    
*   Shaders: In lightmapped objects some mesh channels weren't detected as used. ([UUM-103200](https://issuetracker.unity3d.com/issues/the-optimize-mesh-data-player-setting-strips-used-channels-when-building-the-project))
    
*   SRP Core: Subpass attachment indices are updated when adding a depth attachment to the renderpass in RenderGraph. ([UUM-99670](https://issuetracker.unity3d.com/issues/android-windows-the-frame-buffer-is-replaced-incorrectly-when-using-framebuffer-fetch))
    
*   Terrain: Fixed a bug in which the Terrain Settings tab state reverts to the previous selected tab when leaving and returning to the Terrain Inspector window. ([UUM-103264](https://issuetracker.unity3d.com/issues/the-terrain-settings-tab-state-reverts-to-the-previous-selected-tab-when-leaving-and-returning-to-the-inspector-window))
    
*   UI Elements: Correct the order in which stylesheets are applied in the UIBuilder. ([UUM-60382](https://issuetracker.unity3d.com/issues/the-root-selector-does-not-get-applied-in-the-ui-builder-when-using-default-theme-and-applying-uss))
    
*   UI Elements: Fixed an assertion error thrown when discarding changes in builder. ([UUM-99290](https://issuetracker.unity3d.com/issues/assertion-error-is-thrown-when-discarding-the-changes-made-to-the-selectors-overriding-the-default-controls))
    
*   UI Toolkit: Fixed an ArgumentOutOfRangeException when clicking through ListView and its scrollbar. ([UUM-103037](https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-is-thrown-when-clicking-through-listview-and-its-scrollbar))
    
*   UI Toolkit: Fixed an issue in ListView dynamic height virtualization where content could disappear after scrolling. ([UUM-102835](https://issuetracker.unity3d.com/issues/content-of-a-listview-is-rendered-empty-when-clicking-on-the-scrollbar-to-scroll))
    
*   UI Toolkit: Fixed UI Debugger matching selectors accounting for pseudo states. ([UUM-71782](https://issuetracker.unity3d.com/issues/matching-selectors-list-not-updating-correctly-with-elements-pseudo-state-updates))
    
*   Universal RP: Fixed HDR debug mode not working when Compatibility Mode is enabled. (UUM-101571)
    
*   Universal Windows Platform: .androidlib plugins if used extension plugins will work with Symlink Sources On. ([UUM-79675](https://issuetracker.unity3d.com/issues/audio-is-paused-when-the-player-is-minimized-and-application-dot-runinbackground-is-true))
    
*   VFX Graph: Disable Indirect Draw checkbox if the system does not have an update context ([UUM-100962](https://issuetracker.unity3d.com/issues/vfx-graph-particles-disapear-with-indirectdraw-on-and-without-update-context))
    
*   VFX Graph: Fixed Mesh Output compilation error while plugged on strip system. ([UUM-97850](https://issuetracker.unity3d.com/issues/converting-shadergraph-output-to-urp-lit-mesh-output-results-in-broken-shader-compilation-and-error))

### Known Issues in 6000.1.1f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Graphics Tools: Editor freezes when initializing converters with Post-Processing Stack V2 Converter enabled ([UUM-102790](https://issuetracker.unity3d.com/issues/editor-freezes-when-initializing-converters-with-post-processing-stack-v2-converter-enabled))
    
*   Lighting: Spot light with high Outer Spot Angle produces artefacts/clipping when using the Forward+ Rendering Path ([UUM-85566](https://issuetracker.unity3d.com/issues/spot-light-with-high-outer-spot-angle-produces-artefacts-slash-clipping-when-using-the-forward-plus-rendering-path))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Scene Management: Editor hangs when cutting and pasting a Script to another folder during Play Mode ([UUM-104031](https://issuetracker.unity3d.com/issues/editor-hangs-when-cutting-and-pasting-a-script-to-another-folder-during-play-mode))
    
*   SRP Foundation: Game View turns black, Scene View turns grey, Console error NullReferenceException when Wireframe is turned on because the DecalGBufferRenderPass references a non existent GBuffer ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   SRP Foundation: \[Mobile\] Visual artifacts when RenderGraphPass is merged into NativePass ([UUM-102824](https://issuetracker.unity3d.com/issues/mobile-visual-artifacts-when-rendergraphpass-is-merged-into-nativepass))
    
*   SRP XR: Light is culled incorrectly when Deferred+ and Forward+ Rendering Paths are used ([UUM-103384](https://issuetracker.unity3d.com/issues/light-is-culled-incorrectly-when-deferred-plus-and-forward-plus-rendering-paths-are-used))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Visual Effects: VFX throw errors upon importing it and breaks rendering for certain effects ([UUM-103734](https://issuetracker.unity3d.com/issues/vfx-throw-errors-upon-importing-it))
    

### 6000.1.1f1 Release Notes

#### Fixes

*   2D: Add tooltip on Sprite Editor Window's module drop down to indicate what module is selected. The drop down text will now have ellipsis when the text is cutoff. ([UUM-100927](https://issuetracker.unity3d.com/issues/custom-physics-shape-mode-title-is-cut-off-in-sprite-editor-tab))
    
*   2D: Fixed error when using pixel perfect camera with camera stacking. ([UUM-100776](https://issuetracker.unity3d.com/issues/errors-are-thrown-in-the-console-and-the-game-view-fails-to-render-when-rendergraph-compatability-is-disabled-and-a-camera-stack-has-a-pixel-perfect-camera-component-with-stretch-fill-crop-frame))
    
*   2D: Fixed grid size in the Tile Palette window when the window aspect greatly differs from the aspect of the Palette ([UUM-102547](https://issuetracker.unity3d.com/issues/2d-grid-in-tile-palette-window-does-not-extend-to-edge-of-viewport))
    
*   2D: Fixed NullReferenceException in DrawRenderer2DPass. ([UUM-102798](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-calling-camera-dot-render-on-sceneview-camera-during-editorscenemanager-dot-scenesaved-due-to-missing-null-check-in-drawrenderer2dpass))
    
*   2D: Fixed Sprite Meta contains invalid internal ID during creation via TextureImporter. ([UUM-90488](https://issuetracker.unity3d.com/issues/ui-source-image-property-gets-set-to-none-when-using-a-specific-sprite-and-play-mode-is-entered))
    
*   2D: Improve scrolling of Palette in the Tile Palette window
    
*   Android: Fixed case where text using certain fonts were not rendered properly. (UUM-102387)
    
*   Android: Fixed gradle-wrapper.properties not getting updated when modifying Gradle path in "Preferences -> External Tools". (UUM-103233)
    
*   Animation: Fixed scroll view position being reset when making changes to animation layers. ([UUM-98224](https://issuetracker.unity3d.com/issues/scroll-bar-in-animator-window-resets-to-top-when-making-changes-to-layers))
    
*   Apple TV: Fixed provisioning profile type not being set on tvOS. ([UUM-99480](https://issuetracker.unity3d.com/issues/tvos-provisioning-profile-type-is-ignored-when-it-is-set-to-distribution))
    
*   Asset Pipeline: Fixed crash loading Content Archive from different version which also contains Managed type references. (UUM-103186)
    
*   Audio: Fixed AudioRandomContainer not playing AudioClips with the PlayInBackground flag enabled. (UUM-102027)
    
*   Documentation: Fixed help icon in Physics2D Settings page not linking to the manual correctly. (UUM-102131)
    
*   Documentation: HDRP + URP: added "Adaptive Probe Volumes Options" tooltip link in Graphics > Lighting ([UUM-102161](https://issuetracker.unity3d.com/issues/hdrp-graphics-adaptive-probe-volumes-options-are-missing-a-documentation-link))
    
*   Documentation: HDRP: fixed "Screen Space Global Illumination" tooltip link in Graphics > Lighting ([UUM-102163](https://issuetracker.unity3d.com/issues/hdrp-graphics-screen-space-global-illumination-has-a-link-to-a-wrong-documentation))
    
*   Editor: Adding validation on the "Edit/Play Mode/Step" menu item to invalidate it outside of playmode. ([UUM-103051](https://issuetracker.unity3d.com/issues/step-menu-item-is-displayed-as-active-even-in-a-game-slash-scene-view-it-is-disabled))
    
*   Editor: Change minimum size for `Saved Searches` panel within search window. ([UUM-102800](https://issuetracker.unity3d.com/issues/wrong-minimum-size-for-saved-searches-panel-in-the-search-window))
    
*   Editor: fix subtarget revert back to global setting when switching derived platforms. (UUM-91439)
    
*   Editor: Fixed a crash when 0 vertex skinmesh. ([UUM-93061](https://issuetracker.unity3d.com/issues/crash-on-skinnedmeshrenderer-updateskinnedmeshes-when-interacting-with-the-editor-in-a-specific-scene))
    
*   Editor: Fixed a padding issue with EditorToolbarDropdownToggle when an icon is provided. (UUM-101249)
    
*   Editor: Fixed a warning when deleting a folder from favorite list in project browser. ([UUM-101696](https://issuetracker.unity3d.com/issues/the-operation-softdelete-cannot-be-executed-because-the-selection-is-a-root-folder-dot-warnings-appear-when-deleting-the-favorite-with-the-keyboard))
    
*   Editor: Fixed an issue where OverlayMenu toolbar toggles would become untoggled after maximizing the Game view or entering Play mode. ([UUM-101342](https://issuetracker.unity3d.com/issues/buttons-in-the-overlay-menu-in-the-scene-view-are-all-gray-even-if-theyre-activated-when-game-view-is-maximized-and-minimized))
    
*   Editor: Fixed an issue where the Debug dialog did not render when the Editor was placed across monitors with varying display scaling. (UUM-102224)
    
*   Editor: Fixed an issue where the gizmo icon, when changed or cleared, does not update in the gizmo dropdown menu. (UUM-101655)
    
*   Editor: Fixed an issue where the mesh was not properly cleared when shadow providers supplied no mesh. ([UUM-100007](https://issuetracker.unity3d.com/issues/shadows-from-shadow-caster-2d-using-2d-colliders-show-incorrectly-when-tiles-are-removed-at-runtime))
    
*   Editor: Fixed an issue where Tools overlay would display the abbreviated text content rather than the full text content of the EditorTool when the overlay is in Panel or Horizontal layout. (UUM-101261)
    
*   Editor: Fixed an issue where use of mouse scrolling could prevent the Linux Editor from refreshing and detecting asset changes. ([UUM-101543](https://issuetracker.unity3d.com/issues/linux-editor-doesnt-auto-reload-when-an-asset-is-imported-or-a-script-is-changed))
    
*   Editor: Fixed building AndroidPlayer for external source-code customers. (UUM-103356)
    
*   Editor: Fixed contextual flags for openReferenceInProject. ([UUM-101658](https://issuetracker.unity3d.com/issues/find-reference-in-project-will-print-a-useless-error-message))
    
*   Editor: Fixed cursor position when clicking at then end of a multiline text field with ATG. (UUM-96309)
    
*   Editor: Fixed customIndexing (support for lowercase value). ([UUM-101208](https://issuetracker.unity3d.com/issues/search-customindexer-workflow-using-indexprorpety-doesnt-work-if-property-name-is-not-in-lowercase))
    
*   Editor: Fixed issue causing some detail popups to appear in the wrong place on macOS. Examples include Shader Graph and VFX detail popup views. ([UUM-102046](https://issuetracker.unity3d.com/issues/macos-keydownevent-dot-originalmouseposition-returns-incorrect-coordinates-when-last-focused-element-was-a-textfield-in-text-editing-mode))
    
*   Editor: Fixed legacy "Build Settings" window being incorrectly shown instead of the "Build Profiles" window when saved in an old project's layout. (UUM-61498)
    
*   Editor: Fixed lights for XR. ([UUM-97011](https://issuetracker.unity3d.com/issues/lights-only-visible-in-left-eye-in-vr-when-using-built-in-pipeline))
    
*   Editor: Fixed Search previews that were not displayed. ([UUM-99995](https://issuetracker.unity3d.com/issues/search-window-preview-sometimes-to-not-update))
    
*   Editor: Fixed wrong cursor position when using ATG when highlighting text on mobile. (UUM-90981)
    
*   Editor: Improves some API documentation for Terrain and TerrainData. Also corrects the TerrainData GetAlphamaps and SetAlphamaps pages.
    
*   Editor: Now saving the HDR Cubemap Encoding setting. ([UUM-102024](https://issuetracker.unity3d.com/issues/hdr-cubemap-encoding-setting-resets-itself-when-the-project-is-reopened))
    
*   Editor: \[Shader Graph\] Fixed texture asset conflicts when multiple Shader Graph sample content sets were imported at the same time. ([UUM-103183](https://issuetracker.unity3d.com/issues/importing-multiple-shader-graph-samples-throws-warnings-in-the-console))
    
*   Graphics: Fixed a crash when using legacy image effects with Metal stereo rendering (visionOS). (UUM-103020)
    
*   Graphics: Fixed issue where LookDev's default VolumeProfile content was destroyed when creating new project from HD template in the hub. ([UUM-100350](https://issuetracker.unity3d.com/issues/changing-environment-profiles-in-lighting-window-throws-nullreferenceexception-error))
    
*   Graphics: Replace costly WMI videocontroller query (UUM-102971)
    
*   macOS: Fixed macOS build when using additional IL2CPP stacktrace information. ([UUM-99403](https://issuetracker.unity3d.com/issues/apple-silicon-build-fails-with-an-internal-build-system-error))
    
*   Multiplayer: Fixed an issue that caused errors when instantiating an object with Multiplayer Roles stripping to an existing parent transform. ([UUM-99517](https://issuetracker.unity3d.com/issues/crash-on-transform-removefromparent-when-deleting-a-child-gameobject))
    
*   Package Manager: Fixed an issue where some locally installed packages where appearing in the Unity Registry tab that shouldn't be. (UUM-70534)
    
*   Particles: Ensure scripted Simulate call schedules managed jobs. ([UUM-102162](https://issuetracker.unity3d.com/issues/onparticleupdatejobscheduled-is-never-called-when-using-particlesystem-dot-simulate-in-fixedupdate))
    
*   Scene/Game View: Adding tooltips for aspect ratio and gizmos dropdowns in the game view. ([UUM-102087](https://issuetracker.unity3d.com/issues/aspect-ratio-toolbar-doesnt-have-tooltip-to-display-contextual-help-or-information-when-hovering-over-it))
    
*   Scripting: Fixed an issue where shutdown could crash when cleaning up UnityObjects. ([UUM-97648](https://issuetracker.unity3d.com/issues/crash-on-object-setcachedscriptingobject-when-opening-the-project))
    
*   Scripting: Fixed crash if passing null results list to FindGameObjectsWithTag. ([UUM-98111](https://issuetracker.unity3d.com/issues/crash-on-resizescriptinglist-when-passing-an-undeclared-variable-to-the-results-parameter-for-gameobject-dot-findgameobjectswithtag))
    
*   Scripting: Fixed documentation to match GetComponentInParent / GetComponentsInParent implemented behaviour towards inactive game objects. (UUM-84962)
    
*   Shadergraph: Ensured SHADERGRAPH\_PREVIEW\_MAIN define is defined in all cases for the main preview. ([UUM-87786](https://issuetracker.unity3d.com/issues/error-cannot-map-expression-to-ps-4-0-instruction-set-in-shader-graph-preview-when-using-the-gather-red-texture2d-macro-in-custom-hlsl-function))
    
*   Shaders: Fixed shader cache uploads and downloads to Accelerator so that they respect Editor upload enabled and download enabled settings.
    
*   Text: Fix ATG word-wrapping issue with complex sequences of clusters ([UUM-102006](https://issuetracker.unity3d.com/issues/crash-on-raiseexception-or-freeze-when-rendering-malaylam-text-using-the-advanced-text-generator-in-a-specific-project))
    
*   Text: Fixed ATG Face Info Scaling. ([UUM-101293](https://issuetracker.unity3d.com/issues/font-scaling-is-not-working-when-advanced-text-generator-is-enabled))
    
*   uGUI: Fixed NullReferenceException sometimes occuring when setting TMP\_Text.isTextObjectScaleStatic on a disabled object. ([UUM-92041](https://issuetracker.unity3d.com/issues/nullreferenceexception-when-setting-istextobjectscalestatic-to-false-on-a-disabled-textmeshpro-gameobject))
    
*   UI Elements: Fixed duplicated characters in delayed textfield when using IME. ([UUM-86896](https://issuetracker.unity3d.com/issues/text-input-duplicates-in-the-textfield-when-textfield-dot-isdelayed-is-set-to-true-and-typing-with-a-japanese-keyboard-layout))
    
*   UI Toolkit: Fixed an issue where slots would not be re-exported after a change in the UI Builder. (UUM-102862)
    
*   UI Toolkit: Fixed UI Builder elements disappear and "Semantic - Unknown template name" error appears when changes to "Template" parameter are saved ([UUM-96427](https://issuetracker.unity3d.com/issues/ui-builder-elements-disappear-and-semantic-unknown-template-name-error-appears-when-changes-to-template-parameter-are-saved))
    
*   Web: Fixed an issue where backslash keys (IntlYen, IntlRo) were not detected on Japanese 106/109 keyboard. ([UUM-97892](https://issuetracker.unity3d.com/issues/input-from-the-backslash-key-is-not-detected-in-the-web-player-when-using-the-japanese-106-slash-109-key-keyboard))
    
*   Web: Fixed handling of multiple touch inputs and the computation of Touch.deltaPostion and Touch.deltaTime. ([UUM-83348](https://issuetracker.unity3d.com/issues/touch-input-is-inversed-and-otherwise-broken-on-a-touch-screen-monitor-when-a-project-is-built-for-webgl))
    
*   Web: Fixed the audio context suspend/resume mechanic. ([UUM-74921](https://issuetracker.unity3d.com/issues/audiosource-dot-timesamples-are-offset-when-looping-a-part-of-audio-by-subtracting-a-fixed-number-of-samples-in-webgl-player))

### Known Issues in 6000.1.0f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Graphics Tools: Editor freezes when initializing converters with Post-Processing Stack V2 Converter enabled ([UUM-102790](https://issuetracker.unity3d.com/issues/editor-freezes-when-initializing-converters-with-post-processing-stack-v2-converter-enabled))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP Foundation: \[Mobile\] Visual artifacts when RenderGraphPass is merged into NativePass ([UUM-102824](https://issuetracker.unity3d.com/issues/mobile-visual-artifacts-when-rendergraphpass-is-merged-into-nativepass))
    
*   SRP XR: Light is culled incorrectly when Deferred+ and Forward+ Rendering Paths are used ([UUM-103384](https://issuetracker.unity3d.com/issues/light-is-culled-incorrectly-when-deferred-plus-and-forward-plus-rendering-paths-are-used))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### New 6000.1.0f1 Entries since 6000.1.0b15

#### Improvements

*   HDRP: Added a more descriptive failure message when reflection probe has the wrong format. ([UUM-102339](https://issuetracker.unity3d.com/issues/hdrp-assertionexception-errors-are-thrown-and-scene-is-corrupted-when-baking-reflection-probe-with-custom-textureimporter-preset-added-to-texture-importer-default))

#### Changes

*   Asset Import: Improved the error message that displays when the Editor loses connection to an asset import worker process.

#### Fixes

*   2D: Fixed an issue where an incorrect normal texture size in 'RenderGraph2D' caused sampling artifacts. (UUM-102077)
    
*   2D: Fixed an issue where an outdated page opened when accessing the Sprite Atlas v2 Help page. ([UUM-102245](https://issuetracker.unity3d.com/issues/outdated-page-opens-when-accessing-sprite-atlas-v2-reference-page))
    
*   2D: Fixed an issue where Canvas Image artifacts appeared when Sprite Packer was enabled. ([UUM-98140](https://issuetracker.unity3d.com/issues/sprite-artefacts-appear-when-sprite-packer-is-enabled))
    
*   2D: Fixed an issue where Mipmap generation for SpriteAtlas failed for various formats when sRGB was turned off. ([UUM-102172](https://issuetracker.unity3d.com/issues/unsupported-source-texture-format-7-in-computenextmiplevel-error-is-shown-and-the-texture-atlas-is-corrupted-when-the-texture-format-rgb-compressed-etc2-4bits-is-selected))
    
*   2D: Fixed an issue where selecting a Light 2D would cause other selected lights to have their shadow and volumetric states overwritten. ([UUM-82822](https://issuetracker.unity3d.com/issues/light2d-shadows-and-volumetric-configurations-are-overwritten-when-multiple-lights-are-selected-in-the-hierarchy))
    
*   Audio: Fixed an issue where sample rate settings were not displayed in the audio importer Inspector. ([UUM-86654](https://issuetracker.unity3d.com/issues/sample-rate-setting-is-not-shown-in-the-default-tab-when-importing-an-audio-file))
    
*   DX12: Fixed an issue where `DirectML.dll` was not stripped from the built project when it was not used. (UUM-92918)  
    _First seen in 6000.1.0a10._
    
*   DX12: Reduced the memory consumption by reducing the size of internal buffer allocations. ([UUM-90065](https://issuetracker.unity3d.com/issues/increased-memory-usage-when-update-mode-on-demand-realtime-lights-are-used-and-dx12-api-is-selected))
    
*   Editor: Changed message in Font Asset Creator Window to make exception more clear. ([UUM-101484](https://issuetracker.unity3d.com/issues/font-asset-creator-error-code-invalid-file-dot-dot-dot-error-message-is-displayed-when-generating-font-atlas))
    
*   Editor: Ensured System Font is supported with TMP installed in the project. ([UUM-102444](https://issuetracker.unity3d.com/issues/editor-ui-text-is-displayed-incorrectly-or-blank-and-unable-to-load-font-face-for-system-normal-dot-and-other-warnings-are-spammed-when-editor-font-is-set-to-system-font-and-tmp-package-is-imported))
    
*   Editor: Fixed "Serialized object has been disposed" errors when closing the Player Settings window. (UUM-87022)  
    _First seen in 6000.1.0a5._
    
*   Editor: Fixed a crash in the Editor that occurred when a vector with a sufficiently large magnitude was passed to a navigation agent's `SetDestination` method. ([UUM-99274](https://issuetracker.unity3d.com/issues/crash-on-platform-memmove-when-a-moving-gameobject-is-selected-in-the-scene-view-while-in-play-mode))
    
*   Editor: Fixed a crash that occurred in `TypeContainer<int>::rtti` when deleting a Render Texture that was assigned to the Main Camera. ([UUM-101233](https://issuetracker.unity3d.com/issues/crash-on-typecontainer-rtti-when-deleting-a-render-texture-that-is-used-by-the-main-camera))
    
*   Editor: Fixed an issue where hyperlinks won't open to the correct code line when scrolling in the console. ([UUM-101694](https://issuetracker.unity3d.com/issues/code-links-open-incorrect-line-on-code-editor-or-are-unclickable-when-the-log-is-around-100-lines))
    
*   Editor: Fixed an issue where the Contact Sales button was not aligned with the "No module loaded" text by adding more spacing. ([UUM-99321](https://issuetracker.unity3d.com/issues/android-xr-platform-enable-platform-button-text-is-misaligned-in-build-profiles-window))  
    _First seen in 6000.1.0b8._
    
*   Editor: Fixed argument exceptions when using 'SpriteAsset' in UITK. ([UUM-101232](https://issuetracker.unity3d.com/issues/multiple-argumentexceptions-are-thrown-when-adding-a-visualtreeasset-with-sprite-glyphs-to-a-uidocument))
    
*   Editor: Fixed color styling for query blocks with icons in the Light theme. ([UUM-101085](https://issuetracker.unity3d.com/issues/component-logo-icon-is-poorly-visible-in-a-query-build-mode-then-light-editor-theme-is-selected))
    
*   Editor: Fixed the toggle search icon in the Query TreePanel. ([UUM-101139](https://issuetracker.unity3d.com/issues/the-search-icon-in-the-searches-sections-is-blurry-and-inconsistent))
    
*   Editor: Fixed typo in Text Mesh Pro. ([UUM-101686](https://issuetracker.unity3d.com/issues/typo-in-tmp-inputfield-when-viewing-reset-on-deactivation-setting-tooltip))
    
*   Editor: OSX: Fixed an issue where changes made to values on a Prefab Asset were not retained when entering Play mode. ([UUM-100594](https://issuetracker.unity3d.com/issues/values-changed-on-a-prefab-are-not-retained-when-entering-play-mode))
    
*   GI: Fixed an issue where baked shadows would be missing in URP when realtime shadows were disabled. ([UUM-98838](https://issuetracker.unity3d.com/issues/adaptive-probe-volumes-are-not-applied-to-urp-simple-lit-or-lit-shaders-when-using-mixed-light-mode))
    
*   Graphics: Fixed a rare crash that can happen when using multiple 'RayTracingAccelerationStructures' and 'SkinnedMeshRenderers' or other dynamic geometries. ([UUM-101163](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-allocbottomlevelaccelerationstructure-when-using-raytracing))
    
*   Graphics: Fixed standalone player freeze when built using Vulkan Graphics API and when multiple monitors are in use. ([UUM-101692](https://issuetracker.unity3d.com/issues/standalone-player-unresponsive-slash-frozen-in-hdrp-when-built-using-vulkan-graphics-api-on-specific-gpus))
    
*   Graphics: Fixed the 'CustomRenderTexture' Shader Properties array size warning. ([UUM-96096](https://issuetracker.unity3d.com/issues/property-exceeds-previous-array-size-2-vs-1-warnings-are-thrown-making-it-impossible-to-work-with-the-update-zones-of-the-customrendertexture-when-updating-the-script))
    
*   HDRP: Skipped 'Sky LUT Blur' on specific hardware to work around incorrect output. (UUM-86915)
    
*   iOS: Fixed an issue by updating 'Device.advertisingTrackingEnabled' to report the status based on AppTrackingTransparency for devices running iOS 14 and later. (UUM-101288)
    
*   Serialization: Fixed an issue where migrating projects from versions after 2021.3 could cause severe performance impacts due to the Fixed Timestep in the Time Project Settings being imported as 0.0001. ([UUM-103516](https://issuetracker.unity3d.com/issues/performance-drops-significantly-when-many-tilemap-modifications-are-made))
    
*   SRP Core: Fixed an issue where calling `RenderGraph.Cleanup()` corrupted the `RenderGraph` instance. (UUM-101108)
    
*   UI Toolkit: Fixed an issue where `UIDocument` was not selectable in the Scene view. (UUM-102603)
    
*   UI Toolkit: Fixed an issue with dynamic color play tint. ([UUM-48533](https://issuetracker.unity3d.com/issues/slider-tracker-gets-wrong-color-in-play-mode-in-editor))
    
*   Universal Windows Platform: Fixed an issue with keyboard modifier state during application suspension. ([UUM-71730](https://issuetracker.unity3d.com/issues/modifier-key-debounce-issue-with-uwp-when-losing-focus-via-alt-plus-tab))
    
*   Version Control: Fixed an issue where the UnityYAMLMerge tool did not wait for the opendiff tool to finish on macOS, ensuring proper operation synchronization. (UUM-102589)
    

#### New 6000.1.0f1 Package Changes since 6000.1.0b15

