# UnityReleaseNotes
**Last update time : `2025-06-27 19:13:59`	Powered By ChatGPT**

## More Unity Versions 
|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
| [6000.3](./merge_htmls/6000.3.md) | [6000.2](./merge_htmls/6000.2.md) | [6000.1](./merge_htmls/6000.1.md) | [6000.0](./merge_htmls/6000.0.md) | [2023.2](./merge_htmls/2023.2.md) | [2023.1](./merge_htmls/2023.1.md) | [2022.3](./merge_htmls/2022.3.md) | [2022.2](./merge_htmls/2022.2.md) | [2022.1](./merge_htmls/2022.1.md) |
| [2021.3](./merge_htmls/2021.3.md) | [2021.2](./merge_htmls/2021.2.md) | [2021.1](./merge_htmls/2021.1.md) | [2020.3](./merge_htmls/2020.3.md) | [2020.2](./merge_htmls/2020.2.md) | [2020.1](./merge_htmls/2020.1.md) | [2019.4](./merge_htmls/2019.4.md) | [2019.3](./merge_htmls/2019.3.md) | [2019.2](./merge_htmls/2019.2.md) |
| [2019.1](./merge_htmls/2019.1.md) | [2018.4](./merge_htmls/2018.4.md) | [2018.3](./merge_htmls/2018.3.md) | [2018.2](./merge_htmls/2018.2.md) | [2018.1](./merge_htmls/2018.1.md) | [2017.4](./merge_htmls/2017.4.md) | [2017.3](./merge_htmls/2017.3.md) | [2017.2](./merge_htmls/2017.2.md) | [2017.1](./merge_htmls/2017.1.md) |
| [5.6](./merge_htmls/5.6.md) | [5.5](./merge_htmls/5.5.md) | [5.4](./merge_htmls/5.4.md) | [5.3](./merge_htmls/5.3.md) | [5.2](./merge_htmls/5.2.md) | [5.1](./merge_htmls/5.1.md) | [5.0](./merge_htmls/5.0.md) | | |

## 6000.1

### Known Issues in 6000.1.9f1

*   Android: \[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Video: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Vulkan: AndroidPlayer selects Vulkan Graphics API over GLES even on devices with limited support ([UUM-109250](https://issuetracker.unity3d.com/issues/androidplayer-selects-vulkan-graphics-api-over-gles-even-on-devices-with-limited-support))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    
*   Web Platform: Garbage Collector memory leak when allocating and deallocating memory in Web builds ([UUM-86352](https://issuetracker.unity3d.com/issues/garbage-collector-memory-leak-when-allocating-and-deallocating-memory-in-web-builds))
    

### 6000.1.9f1 Release Notes

#### Improvements

*   UI Toolkit: Added the ability to change the TreeView item indent via a custom style property called `--unity-tree-view-indent`. ([UUM-44460](https://issuetracker.unity3d.com/issues/treeview-indent-width-does-not-correspond-to-the-treeview-arrow-element-width-and-remains-8ptx-wider-when-compared-to-the-treeview-arrow-elements-width))

#### Fixes

*   2D: Fixed issue where Palette camera position and zoom was not stored and restored when Tile Palette is reopened. ([UUM-108337](https://issuetracker.unity3d.com/issues/tile-palette-window-zoom-level-resets-when-the-window-becomes-inactive))
    
*   2D: Fixed perf regression when SRP batcher is disabled. (UUM-108333)
    
*   Android: Enforcing to use Streaming Assets extensions for noCompress string in Android Gradle project to avoid problem with too many entries in the list, which may cause Gradle build fail. ([UUM-105133](https://issuetracker.unity3d.com/issues/android-build-fails-when-streamingassets-contains-998-or-more-files))
    
*   Android: Fixed issue where RenderBufferLoadAction.DontCare is ignored in some situation when switching between use of RenderPass API and SetRenderTarget. ([UUM-104821](https://issuetracker.unity3d.com/issues/vulkan-dont-care-loadaction-resets-to-load-when-running-on-mali-devices))
    
*   Android: Fixed issue where Vulkan is preferred over GLES even though the drivers were detected as incompatible. ([UUM-109250](https://issuetracker.unity3d.com/issues/androidplayer-selects-vulkan-graphics-api-over-gles-even-on-devices-with-limited-support))
    
*   DX12: Fixed performance regression on some devices on DX12. (UUM-105545)
    
*   DX12: Graphics: Added support for generating mips when using Render Pass. ([UUM-105804](https://issuetracker.unity3d.com/issues/game-view-renders-yellow-color-when-using-rendertexture-dot-autogeneratemips-with-dx12))
    
*   Editor: Fixed an issue which could cause the Editor Launch Screen to spontaneously crash on Linux. ([UUM-104828](https://issuetracker.unity3d.com/issues/linux-crash-on-editorlaunchscreen-platformeditorlaunchscreen-setprogress-when-opening-a-project-and-progress-bar-is-showing))
    
*   Editor: Fixed artifacts when using HDRP with Screen Space Reflections in XR. ([UUM-84213](https://issuetracker.unity3d.com/issues/quest-artifacts-when-using-hdrp-with-screen-space-reflections-in-xr))
    
*   Editor: Fixed ExposedReference property drawer not allowing scene references. ([UUM-108754](https://issuetracker.unity3d.com/issues/drag-and-drop-and-object-picker-assignment-fail-when-exposedreference-variables-are-used-in-a-timeline-clip))
    
*   Editor: Resolved hang where the Editor could hang on Linux when running under a misconfigured display session. (UUM-101798)
    
*   Graphics: Better error handling when trying to use Volume framework before initialization. ([UUM-104542](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-trying-to-access-volumestack-from-the-hdcamera-class))
    
*   Graphics: Fixed a validation warning on DirectX by changing the fake input layout format. ([UUM-105001](https://issuetracker.unity3d.com/issues/a-vertex-stream-with-a-stride-of-1-is-bound-to-the-gpu-in-player-when-mesh-is-compressed))
    
*   Physics 2D: Ensure that changing the Transform Z position only does not affect Rigidbody2D interpolation. ([UUM-108922](https://issuetracker.unity3d.com/issues/changing-transform-dot-position-dot-z-per-frame-should-not-affect-rigidbody2d-interpolation))
    
*   Scene/Game View: Resolved issue where the Camera first person mode in Cameras overlay is not clickable when the Editor is restarted with the Game View focused. ([UUM-108801](https://issuetracker.unity3d.com/issues/the-camera-first-person-mode-in-cameras-overlay-is-greyed-out-and-not-clickable-when-the-editor-is-restarted-with-the-game-view-focused))
    
*   Serialization: Added additional checks to better catch merging errors in UnityYAML. ([UUM-98013](https://issuetracker.unity3d.com/issues/editorutility-dot-isvalidunityyaml-failing-to-properly-validate-yaml-parsed-into-it))
    
*   UI Toolkit: Fixed an issue where binding to a GradientField or a CurveField could hang the editor. ([UUM-103737](https://issuetracker.unity3d.com/issues/editor-freezes-when-changing-gradient-or-animationcurve-fields-with-the-runtime-binding-system))
    
*   UI Toolkit: Fixed intermittent crash on AppleTV on Painter2D.ClosePath() call. ([UUM-105548](https://issuetracker.unity3d.com/issues/tvos-exc-bad-access-error-is-thrown-when-painter2d-dot-closepath-is-called))
    
*   UI Toolkit: Pressing the "Fit Viewport" button will now centre a canvas, in the UI Builder, if the canvas size is 0,0. ([UUM-109243](https://issuetracker.unity3d.com/issues/fit-viewport-doesnt-work-if-uxml-document-output-is-resized-to-the-smallest-possible-size))
    
*   Universal RP: Handle case where a main light is disabled in the URP Asset. ([UUM-104391](https://issuetracker.unity3d.com/issues/lights-are-being-culled-and-appear-pixelated-when-the-main-light-property-is-disabled-and-forward-plus-or-deferred-plus-rendering-paths-are-used))
    
*   VFX Graph: Exception with inspector when block exposes a skinned mesh renderer. ([UUM-102357](https://issuetracker.unity3d.com/issues/exposing-skinned-mesh-property-in-subgraph-throws-errors-when-interacting-with-the-parent-graph))
    
*   Video: Fixed sporadic crash of video player on iOS when app is brought from background to foreground. (UUM-93765)
    
*   XR: Fixed an issue where the XrDisplaySubsystem tries to destroy textures that are still being used by other processes. This fix uses FinishRendering() to block the simulation thread until those resources are no longer in use before trying to destroy them. (UUM-109086)
    
*   XR: Fixed and issue where deployed URP Quest Applications throw Vulkan Errors on App Exit. (UUM-109083)

### Known Issues in 6000.1.8f1

*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   : All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   : Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   : AndroidPlayer selects Vulkan Graphics API over GLES even on devices with limited support ([UUM-109250](https://issuetracker.unity3d.com/issues/androidplayer-selects-vulkan-graphics-api-over-gles-even-on-devices-with-limited-support))
    
*   : Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   : Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   : Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   : Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   : Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   : Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   : GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   : Garbage Collector memory leak when allocating and deallocating memory in Web builds ([UUM-86352](https://issuetracker.unity3d.com/issues/garbage-collector-memory-leak-when-allocating-and-deallocating-memory-in-web-builds))
    
*   : Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   : Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   : Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   : \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   : \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   : \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    
*   : \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   : \[Android\]\[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   : \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    

### 6000.1.8f1 Release Notes

#### Improvements

*   iOS: Added support for CAMetalDisplayLink. It is enabled by default on ios (when built with xcode15+ and run ios17+). It can be overriden at runtime by tweaking/overriding \[UnityAppController shouldUseMetalDisplayLink\] method. By default it is disabled on tvos, since most of them are slow, and failing to catch up with target FPS (on complex scenes) will result in confusing GPU hang messages. ([UUM-66493](https://issuetracker.unity3d.com/issues/ios-framerate-drops-when-screen-is-touched-on-promotion-devices))

#### Fixes

*   Animation: Fixed an issue where disabling an Animator would stop the Animator from evaluating. ([UUM-107650](https://issuetracker.unity3d.com/issues/animator-does-not-continue-animation-indefinitely-when-toggling-animator-dot-enabled-through-code))
    
*   Animation: Improved warnings associated with automatic calculations for 2D blend trees where some or none of the clips have any velocity. ([UUM-107878](https://issuetracker.unity3d.com/issues/warnings-thrown-when-computing-positions-in-a-2d-blendtree-are-not-helpful-to-the-user))
    
*   Animation: Improved warnings associated with Homogenous Speed calculations for blend trees where some or none of the clips have any velocity. ([UUM-107877](https://issuetracker.unity3d.com/issues/warnings-thrown-when-adjusting-time-scale-to-homogenous-speed-in-a-blendtree-are-not-helpful-to-the-user))
    
*   DX12: Fixed by displaying more details in the log message and displaying them only once to avoid spam. ([UUM-105174](https://issuetracker.unity3d.com/issues/attempting-to-draw-with-missing-bindings-warning-lacks-root-cause-indication-and-is-thrown-each-frame-when-structuredbuffer-is-accessed-on-directx12))
    
*   DX12: Fixed by displaying more details in the log message and displaying them only once to avoid spam. (UUM-97790)
    
*   DX12: Fixed by making sure we don't do anything with invalid input attachment indices. ([UUM-105412](https://issuetracker.unity3d.com/issues/crash-on-d3d12commonshader-applygpuprogram-when-attaching-material-which-samples-unityfbinput0-to-full-screen-pass-renderer-feature-component))
    
*   Editor: Enabled horizontal scroll for search Index Manager window. ([UUM-104905](https://issuetracker.unity3d.com/issues/assets-objects-and-keywords-tabs-cannot-be-scrolled-horizontally-in-search-index-manager-window))
    
*   Editor: Fixed TMP's GetSpriteIndexFromName method. ([UUM-61436](https://issuetracker.unity3d.com/issues/sprite-index-cannot-be-found-when-using-the-getspriteindexfromname-method))
    
*   Editor: Fixed `HeaderAttribute` property drawer issue when used with collections. ([UUM-104395](https://issuetracker.unity3d.com/issues/headerattribute-does-not-work-when-used-with-arrays-or-lists))
    
*   Editor: Popup regression caused by a multi-platform fix only affecting OSX. ([UUM-107557](https://issuetracker.unity3d.com/issues/linux-crash-on-gtk-widget-get-window-when-attempting-to-create-a-new-tilemap))
    
*   Editor: Random crash in BatchRendererGroup rendering fixed. (UUM-105252)
    
*   Editor: RG16 texture format is now fully supported and available in Editor Inspector. (UUM-81515)
    
*   GI: Valid mesh fails extraction for LightBaking. ([UUM-101294](https://issuetracker.unity3d.com/issues/pathtracer-addgeometry-job-error-is-thrown-when-baking-lighting))
    
*   Graphics: Fixed by converting the mismatching format to correct one. ([UUM-82662](https://issuetracker.unity3d.com/issues/cubemap-dot-createexternaltexture-assumes-to-use-the-projects-color-space-when-native-texture-pointer-is-set-to-srgb))
    
*   Graphics: Fixed DispatchRays not being able to setup shader records correctly for the first time when is called when not using async shader compilation. (UUM-83017)
    
*   HDRP: Removed DLSS Sharpness slider as it has been deprecated. ([UUM-98939](https://issuetracker.unity3d.com/issues/dlss-sharpening-slider-is-visible-when-it-is-deprecated))
    
*   Mono: Fixed GC Handle leak that would happen every time a new function pointer was returned for a managed delegate. ([UUM-105139](https://issuetracker.unity3d.com/issues/unmanagedreadorwrite-objects-are-not-disposed-off-when-gzipstream-is-used-in-the-using-statement))
    
*   Physics 2D: Fixed memory leak when reporting 2D physics collision callbacks. ([UUM-108093](https://issuetracker.unity3d.com/issues/memory-leak-when-using-rigidbody2d-physics-in-webgl))
    
*   Profiler: Fixed FrameTiming.cpuMainThreadFrameTime and Profiler to not include RenderThread wait times when Split Graphics Jobs are enabled. (UUM-104394)
    
*   Terrain: Fixed low resolution icons for high PPI and retina displays. ([WBTRB-147](https://issuetracker.unity3d.com/issues/terrain-tools-icons-are-low-quality))
    
*   TextCore: Fixed richTextTag not taking into account the display scaling. (UUM-104160)
    
*   UI Toolkit: Added missing UxmlAttribute converters for byte, sbyte, short and ushort.
    
*   UI Toolkit: Adjusted min size of UI Builder viewport to avoid clipping issues. ([UUM-100559](https://issuetracker.unity3d.com/issues/hierarchy-and-library-parts-in-ui-builder-are-inaccessible-when-ui-builder-window-is-resized-and-these-elements-no-longer-fit-in-the-window))
    
*   UI Toolkit: Adjusted min size of UI Builder window and panes to avoid clipping issues. ([UUM-103062](https://issuetracker.unity3d.com/issues/buttons-in-the-ui-builder-viewport-section-get-cut-off-if-the-window-is-resized))
    
*   UI Toolkit: Automatically set the alpha channel of unset style color properties to 1 when picked through the color picker. ([UUM-76955](https://issuetracker.unity3d.com/issues/in-ui-builder-background-colours-start-with-an-alpha-of-0-which-can-be-easily-missed-by-users))
    
*   UI Toolkit: Fixed an issue where debug names would not appear when pressing the Alt key in debug inspector mode. ([UUM-18712](https://issuetracker.unity3d.com/issues/uitoolkit-inspector-property-names-dont-show-up-correctly-when-inspector-is-in-debug-mode))
    
*   UI Toolkit: Fixed cosmetic issue with the padding of sections in the UI Builder inspector. (UUM-86658)
    
*   UI Toolkit: Fixed dirty builder state on switching to a document with a different canvas size. ([UUM-107410](https://issuetracker.unity3d.com/issues/switching-between-ui-documents-with-different-canvas-sizes-marks-the-uxml-file-as-dirty))
    
*   UI Toolkit: Fixed dirty builder state on UXML and USS changes. (UUM-105717)
    
*   UI Toolkit: Fixed excessive empty space is present when observing Editor tabs. ([UUM-108287](https://issuetracker.unity3d.com/issues/excessive-empty-space-is-present-when-observing-editor-tabs))
    
*   UI Toolkit: Fixed flickering of the data source and path view when refreshing the UIBuilder inspector. ([UUM-97556](https://issuetracker.unity3d.com/issues/inspector-window-flickers-when-a-selector-is-created-using-a-style-class-list-section))
    
*   UI Toolkit: Fixed highlight color of the uxml header when doing a drag and drop from the Library. ([UUM-76953](https://issuetracker.unity3d.com/issues/dragging-any-ui-element-under-the-uxml-file-in-the-ui-builder-hierarchy-doesnt-highlight-it))
    
*   UI Toolkit: Fixed lack of cohesion and spacing in UI Builder's variables section. (UUM-97031)
    
*   UI Toolkit: Fixed UI Builder Hierarchy files are not marked dirty when Inspector fields in Attributes category are changed. ([UUM-105143](https://issuetracker.unity3d.com/issues/ui-builder-hierarchy-files-are-not-marked-dirty-when-inspector-fields-in-attributes-category-are-changed))
    
*   UI Toolkit: Fixed USS preview not updated on deletion of selector. ([UUM-104904](https://issuetracker.unity3d.com/issues/uss-code-is-not-updated-when-a-selector-is-deleted-or-is-moved-to-a-new-uss-file))
    
*   UI Toolkit: Improved memory layout of UxmlSerializedData to reduce padding. ([UUM-108363](https://issuetracker.unity3d.com/issues/improve-uxmlserializeddata-generation-to-reduce-padding))
    
*   XR: Updated XR Interaction Toolkit (com.unity.xr.interaction.toolkit) to version 3.1.2.

### Known Issues in 6000.1.7f1

*   Android: \[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on D3D12CommonShader::ApplyGpuProgram when attaching material which samples "\_UnityFBInput0" to "Full Screen Pass Renderer Feature" Component ([UUM-105412](https://issuetracker.unity3d.com/issues/crash-on-d3d12commonshader-applygpuprogram-when-attaching-material-which-samples-unityfbinput0-to-full-screen-pass-renderer-feature-component))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Lighting: Android Player freezes on some Mali GPU devices when Lighting Cast Shadows changed to OFF at runtime ([UUM-105246](https://issuetracker.unity3d.com/issues/android-player-freezes-on-some-mali-gpu-devices-when-lighting-cast-shadows-changed-to-off-at-runtime))
    
*   Lighting: Lights are being culled and appear pixelated when the "Main Light" property is disabled and Forward+ or Deferred+ Rendering Paths are used ([UUM-104391](https://issuetracker.unity3d.com/issues/lights-are-being-culled-and-appear-pixelated-when-the-main-light-property-is-disabled-and-forward-plus-or-deferred-plus-rendering-paths-are-used))
    
*   Mono: UnmanagedReadOrWrite objects are not disposed off when GZipStream is used in the "using" statement ([UUM-105139](https://issuetracker.unity3d.com/issues/unmanagedreadorwrite-objects-are-not-disposed-off-when-gzipstream-is-used-in-the-using-statement))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Video: Crash on WindowsVideoMedia::GetVideoFrameAtIndex when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    

### 6000.1.7f1 Release Notes

#### Fixes

*   2D: Fixed FullScreenRendererFeature exception when use with Rendergraph 2D. ([UUM-104830](https://issuetracker.unity3d.com/issues/assertion-failed-and-argumentexception-are-thrown-and-scene-slash-game-views-do-not-render-when-render-graph-is-enabled-and-requirements-are-set-in-full-screen-pass-renderer-feature))
    
*   2D: Fixed normals to account for Sprite FlipXY. (UUM-104352)
    
*   Android: The application will continue to update/render while built for 'GameActivity + run in split screen + permission dialog is shown' if RunWithFocus is set to true. Previously the application would pause for GameActivity, but would continue to run if built for Activity. (UUM-105630)
    
*   Editor: Added new callback `onDeleteArrayElementCallback` to `ReorderableList`. This is called from the "Delete Array Element" context menu to let you control the removal, like `onRemoveCallback`. ([UUM-104534](https://issuetracker.unity3d.com/issues/onremovecallback-is-not-called-when-removing-an-element-from-the-reoderablelist-using-contextmenu))
    
*   Editor: Fixed a Windows Editor crash on exit that could occur with some specific combinations of packages such as Google Mobile Ads and JetBrains Rider integration. ([UUM-103723](https://issuetracker.unity3d.com/issues/crash-on-pluginmanager-refreshplugins-when-closing-the-editor-without-making-any-changes-with-jetbrains-rider-selected-as-the-external-code-editor-and-google-mobile-ads-third-party-plugin-imported))
    
*   Editor: Fixed an issue where Scene view gizmo icons were not loaded properly if "Load textures on demand" was enabled in project settings. ([UUM-104825](https://issuetracker.unity3d.com/issues/load-texture-data-on-demand-corrupts-unitys-packages-gizmos-in-scene-view))
    
*   Editor: Fixed case where ScreenCapture.CaptureScreenshotAsTexture() could cause the player or editor to crash when a XR device was connected. ([UUM-103220](https://issuetracker.unity3d.com/issues/capturescreenshotastexture-fails-when-vr-headset-is-connected-and-is-inactive-during-play-mode))
    
*   Editor: Fixed IMGUI Errors on LinuxEditor arising when RepaintImmediately() called on window currently being painted. ([UUM-104622](https://issuetracker.unity3d.com/issues/linux-using-ctrl-plus-alt-plus-a-shortcut-for-add-component-throws-gui-rendering-errors))
    
*   Editor: Fixed macOS progress bars always being shown on the main display rather than over the main Editor window. ([UUM-102920](https://issuetracker.unity3d.com/issues/progress-bar-defaults-to-main-monitor-when-editor-is-on-secondary-monitor))
    
*   Editor: Fixed `PlayerSettings` icon APIs so that `GetIcons`, `GetIconsForTargetGroup`, `GetIconSizes`, and `GetIconSizesForTargetGroup` return the correct icon arrays for the provided `NamedBuildTarget` or `BuildTargetGroup` argument. ([UUM-97474](https://issuetracker.unity3d.com/issues/player-settings-icons-are-not-retrieved-when-using-playersettings-dot-geticons-method))
    
*   Graphics: BatchRendererGroup's OnPerformCulling function now correctly checks for job safety between the provided buffers and the JobHandle returned by the user. ([UUM-98559](https://issuetracker.unity3d.com/issues/no-error-slash-warning-in-console-when-batchrenderergroup-reads-draw-commands-before-culling-jobs-are-complete))
    
*   Graphics: Fixed duplicated color resolve when mixing native render pass and set render target workflows. (UUM-103751)
    
*   HDRP: Prevent CustomPass using camera depth if the injection point is set to AfterPostprocess. Show a warning in the CustomPass inspector if this configuration is present. ([UUM-79283](https://issuetracker.unity3d.com/issues/drawrendererescustompass-onpostprocess-only-draws-within-the-original-render-area-when-dynamic-resolution-is-enabled-and-graphics-api-is-set-to-directx12))
    
*   Kernel: JobHandle.Complete() goes to sleep sooner when there is no work to steal. This allows the waiting thread to give up the CPU core sooner to allow another thread to perform work or to preserve battery life. (UUM-83082)
    
*   Package Manager: Fixed an issue where installing a git package using Git LFS would not work with Git LFS 3.6.0 and higher. (UUM-91342)
    
*   Package Manager: Fixed the issue where Assets cannot be imported when the Asset package contains project settings and all project settings are unchanged. ([UUM-100078](https://issuetracker.unity3d.com/issues/assets-do-not-get-imported-from-an-asset-package-when-library-assets-in-the-asset-package-are-unchanged))
    
*   Physics: Better tooltips for PhysicsSettings window. (UUM-105527)
    
*   UI Elements: Fixed the items not expanding on creation when autoExpand is set to true. ([UUM-107968](https://issuetracker.unity3d.com/issues/multicolumntreeview-does-not-auto-expand-foldouts-when-autoexpand-is-set-to-true))
    
*   UI Toolkit: Fixed USS preview is not updated when a selector is moved to a new USS file. ([UUM-104904](https://issuetracker.unity3d.com/issues/uss-code-is-not-updated-when-a-selector-is-deleted-or-is-moved-to-a-new-uss-file))
    
*   Undo System: Keep undo stack in sync during project load by pausing serialization. (UUM-97070)
    
*   URP: Fixed unclear warnings when user creates more lights than the light limit when using Deferred rendering path. ([UUM-102023](https://issuetracker.unity3d.com/issues/property-additionalshadowparams-exceeds-previous-array-size-41-vs-32-dot-dot-dot-warning-is-spammed-when-exceeding-the-light-limit-set-in-urp-config-package))
    
*   Video: Fixed double invocation of onLoopPoint callback when `skipOnDrop` is false and codec is decoding to memory. ([UUM-97953](https://issuetracker.unity3d.com/issues/videoplayer-dot-looppointreached-invokes-twice-when-waitforfirstframe-is-enabled))

### Known Issues in 6000.1.6f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on D3D12CommonShader::ApplyGpuProgram when attaching material which samples "\_UnityFBInput0" to "Full Screen Pass Renderer Feature" Component ([UUM-105412](https://issuetracker.unity3d.com/issues/crash-on-d3d12commonshader-applygpuprogram-when-attaching-material-which-samples-unityfbinput0-to-full-screen-pass-renderer-feature-component))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
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
    
*   Mecanim Animation: Animator does not continue animation indefinitely when toggling Animator.enabled through code ([UUM-107650](https://issuetracker.unity3d.com/issues/animator-does-not-continue-animation-indefinitely-when-toggling-animator-dot-enabled-through-code))
    
*   Mono: Crash on scripting\_method\_invoke when the Player is build before entering the Play mode in the Editor ([UUM-108338](https://issuetracker.unity3d.com/issues/crash-on-scripting-method-invoke-when-the-player-is-build-before-entering-the-play-mode-in-the-editor))
    
*   Mono: UnmanagedReadOrWrite objects are not disposed off when GZipStream is used in the "using" statement ([UUM-105139](https://issuetracker.unity3d.com/issues/unmanagedreadorwrite-objects-are-not-disposed-off-when-gzipstream-is-used-in-the-using-statement))
    
*   OpenGL: \[Linux\] Crash on glXCreateGLXPixmap when hovering over labels in the Inspector window ([UUM-87106](https://issuetracker.unity3d.com/issues/linux-crash-on-glxcreateglxpixmap-when-hovering-over-labels-in-the-inspector-window))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### 6000.1.6f1 Release Notes

#### Fixes

*   2D: Fixed a rendering issue where soft shadows were darker than expected. (UUM-18392)
    
*   2D: Fixed hdr encoding and postprocess resolve for rendergraph 2d. ([UUM-105392](https://issuetracker.unity3d.com/issues/game-view-is-rendered-white-when-viewing-the-editor-with-hdr-display-and-post-proccesing-is-enabled-on-the-main-camera-with-2d-urp))
    
*   Android: Fixed Integer input field allowing multiple "-" symbols under certain conditions. ([UUM-103402](https://issuetracker.unity3d.com/issues/multiple-symbols-are-allowed-to-appear-in-a-row-when-inputting-dot-into-a-non-decimal-numeric-field))
    
*   Editor: Added emoji font fallback on WIN, OSX and Linux. (UUM-97030)
    
*   Editor: Fixed a bug where the 'RectTransform' component values were set to NaN when scaling UI elements using the Scene Rect Tool. ([UUM-102690](https://issuetracker.unity3d.com/issues/rect-transform-values-are-set-to-nan-when-scaling-ui-element-with-centered-scaling))
    
*   Editor: Fixed OverlayMenu behaviour when deleting or reverting presets. ([UUM-103066](https://issuetracker.unity3d.com/issues/when-reverting-all-presets-or-deleting-the-currently-chosen-preset-the-overlay-preset-is-not-switched-to-the-default-preset))
    
*   Editor: Fixed OverlayMenu width when preset name is very long. ([UUM-103059](https://issuetracker.unity3d.com/issues/the-overlay-menu-preset-option-text-is-not-truncated-and-the-overlay-menu-is-unusable-at-certain-sizes-when-preset-name-is-a-long-string))
    
*   Editor: Fixed tooltip position when mouse is over Scripting Defines in Build Profiles window. (UUM-104272)
    
*   Graphics: Fixed an issue where mesh changes would not propagate correctly when using GPU Resident Drawer and GPU Occlusion Culling. ([UUM-103207](https://issuetracker.unity3d.com/issues/modified-meshes-are-not-uploaded-to-gpu-in-urp-when-resident-drawer-is-enabled))
    
*   Graphics: Fixed an issue where the value reported by "Texture.nonStreamingTextureMemory" would not update when mipmap limits were modified. ([UUM-79327](https://issuetracker.unity3d.com/issues/texture-dot-nonstreamingtexturememory-value-does-not-update-when-qualitysettings-dot-globaltexturemipmaplimit-is-changed))
    
*   Graphics: Fixed shadow culling not working correctly for intermediate renderers like Graphics.RenderMesh or Terrain. ([UUM-96217](https://issuetracker.unity3d.com/issues/terrain-detail-mesh-triangles-value-increases-when-occlusion-culling-is-used-and-cast-shadows-is-enabled-on-the-mesh))

### Known Issues in 6000.1.5f1

*   Asset - Database: Crash on "The GUID inside 'Assets/asset.png.meta' cannot be extracted by the YAML Parser." when opening the project ([UUM-107711](https://issuetracker.unity3d.com/issues/crash-on-the-guid-inside-assets-slash-asset-dot-png-dot-meta-cannot-be-extracted-by-the-yaml-parser-dot-when-opening-the-project))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX12: Crash on D3D12CommonShader::ApplyGpuProgram when attaching material which samples "\_UnityFBInput0" to "Full Screen Pass Renderer Feature" Component ([UUM-105412](https://issuetracker.unity3d.com/issues/crash-on-d3d12commonshader-applygpuprogram-when-attaching-material-which-samples-unityfbinput0-to-full-screen-pass-renderer-feature-component))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
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
    
*   OpenGL: \[Linux\] Crash on glXCreateGLXPixmap when hovering over labels in the Inspector window ([UUM-87106](https://issuetracker.unity3d.com/issues/linux-crash-on-glxcreateglxpixmap-when-hovering-over-labels-in-the-inspector-window))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   SRP Foundation: Game View turns black, Scene View turns grey, Console error NullReferenceException when Wireframe is turned on because the DecalGBufferRenderPass references a non existent GBuffer ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### 6000.1.5f1 Release Notes

#### Features

*   HDRP: Upgraded FSR2 from v2.2.0 to v2.2.1, release notes from FSR2:  
    *   Fixed DRS issue where resource was not correctly cleared on first use  
        
    *   Fixed issue where luma instability logic could introduce output artefacts with strobing lights  
        
    *   Fixed incorrect luma resource size.

#### Improvements

*   Documentation: Removed the CreateRenderGraphTexture API references from the create-custom-renderer-feature page.
    
*   Graphics: Optimized Skinned Mesh Renderer matrix calculations to enable Unity to parallelize matrix calculations even when using the non-optimized import setting. (UUM-105251)
    

#### Changes

*   XR: Updated com.unity.xr.openxr package version to 1.15.0-pre.2.

#### Fixes

*   2D: Fixed case where last segment is missed if any of the segment uses Null Sprite inbetween. ([UUM-105570](https://issuetracker.unity3d.com/issues/last-segment-of-a-sprite-shape-spline-is-affected-by-other-segments-sprite-variant-change-when-no-edge-sprite-is-selected))
    
*   2D: Fixed case where sprite does not update when playing Animation. (UUM-104198)
    
*   2D: Fixed TextureImporter meta file modification when reimporting a texture while the "Default Behaviour Mode" is set to 2D for new imported files. ([UUM-104536](https://issuetracker.unity3d.com/issues/namefileidtable-entry-changes-in-the-meta-file-when-reimporting-a-texture-while-the-default-behaviour-mode-is-set-to-2d))
    
*   2D: Fixed the Sprite Editor Toolbar module dropdown visual overlap when selecting an imported non-sprite texture in a 3D project. (UUM-104519)
    
*   2D: Fixed uninitialized sprite shader properties when used with mesh renderers. ([UUM-95758](https://issuetracker.unity3d.com/issues/mesh-rendered-gameobject-using-the-spritelitdefault-material-becomes-invisible-when-animating-with-the-urp-sprite-lit-default-shader))
    
*   Accessibility: Fixed multiple accessibility node focus issues on Android. ([UUM-103808](https://issuetracker.unity3d.com/issues/android-assistivesupport-dot-nodefocuschanged-is-not-called-after-sendscreenchanged-or-sendlayoutchanged))
    
*   AI: The HeightMesh was sometimes containing faulty polygons that stretched between arbitrary vertices over long distances. ([UUM-78065](https://issuetracker.unity3d.com/issues/height-mesh-generation-results-in-unexpected-spikes-slash-streaks-across-the-whole-map-in-the-generated-navmesh-surface-when-re-baking))
    
*   Android: Fixed Integer input field allowing multiple "-" symbols under certain conditions. ([UUM-103402](https://issuetracker.unity3d.com/issues/multiple-symbols-are-allowed-to-appear-in-a-row-when-inputting-dot-into-a-non-decimal-numeric-field))
    
*   Animation: Fixed an issue where undoing the creation of an AnimatorController layer while the layer view was not visible in the Animator Window would throw exceptions. ([UUM-104017](https://issuetracker.unity3d.com/issues/animator-controller-throws-missingreferenceexception-after-undoing-layer-creation))
    
*   Build System: Only glob build system files in Platforms/ that are not disabled. (UUM-98292)
    
*   Editor: Align the layout of HelpBoxes in the Build Profile window. ([UUM-99453](https://issuetracker.unity3d.com/issues/meta-quest-platform-enable-platform-button-text-is-misaligned-in-build-profiles-window))
    
*   Editor: Fixed a bug where the 'RectTransform' component values were set to NaN when scaling UI elements using the Scene Rect Tool. ([UUM-102690](https://issuetracker.unity3d.com/issues/rect-transform-values-are-set-to-nan-when-scaling-ui-element-with-centered-scaling))
    
*   Editor: Fixed a crash when exiting the editor after removing the HDRP package. ([UUM-97847](https://issuetracker.unity3d.com/issues/crash-on-monobehaviour-virtualredirecttransfer-when-closing-editor-after-removing-hdpr-and-importing-water-samples-before))
    
*   Editor: Fixed a GRD memory leak that happened in some cases when materials changed.
    
*   Editor: Fixed an issue where, for compressed cubemap texture assets, the 'CubemapInspector' would display controls that perform operations unsupported by such textures. This also fixes an issue where merely inspecting a crunched cubemap texture asset would provoke errors. (UUM-86485)
    
*   Editor: Fixed bitmap system font to match OS font smoothing setting. ([UUM-72936](https://issuetracker.unity3d.com/issues/the-editor-does-not-align-with-os-preferences-when-font-smoothing-is-disabled-on-windows-and-the-bitmap-setting-is-chosen-in-the-editor))
    
*   Editor: Fixed crash that could occur when repeatedly performing actions that require a progress dialog such as saving and entering play mode at the same time. ([UUM-104261](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-saving-while-play-mode-is-loading))
    
*   Editor: Fixed exceptions thrown when using function key shortcuts to select Terrain tools when Terrain Tools package is installed. ([UUM-97013](https://issuetracker.unity3d.com/issues/editor-event-handler-error-error-is-thrown-when-using-terrain-tool-shortcuts))
    
*   Editor: Fixed function key shortcuts for Terrain Trees and Details tools.
    
*   Editor: Fixed issue with static time access to BuildTargetDiscovery causes importer to fail. (UUM-105132)
    
*   Editor: Fixed issue with TMP bloom effects not working anymore. ([UUM-90091](https://issuetracker.unity3d.com/issues/non-hdr-color-picker-opens-when-selecting-material-color-with-hdr-enabled))
    
*   Editor: Fixed LinuxEditor failing to trigger some shortcuts when InputManager is disabled. ([UUM-104604](https://issuetracker.unity3d.com/issues/linux-shortcuts-that-use-shift-modifier-and-numbers-row-are-not-triggered))
    
*   Editor: Fixed stray error message in the console when changing Shader settings in a build profile. ([UUM-81556](https://issuetracker.unity3d.com/issues/endlayoutgroup-beginlayoutgroup-must-be-called-first-error-is-thrown-when-changing-shader-precision-model-from-the-build-profiles-window))
    
*   Editor: Fixed stray error message in the console when changing XCode settings for tvOS. ([UUM-96819](https://issuetracker.unity3d.com/issues/user-gets-endlayoutgroup-beginlayoutgroup-must-be-called-first-dot-error-during-xcode-selection-canceling))
    
*   Editor: Fixed UnityEvent drawer changing the object argument when editing multiple objects. ([UUM-104854](https://issuetracker.unity3d.com/issues/references-placed-in-a-unityevent-change-to-the-same-reference-when-multi-selecting-their-gameobjects))
    
*   Editor: Resolved an issue where components were visible in the Add Component menu when \[AddComponentMenu("")\] was used. ([UUM-99267](https://issuetracker.unity3d.com/issues/component-is-not-hidden-from-add-component-menu-when-using-addcomponentmenu))
    
*   Editor: The icon for editor plugin settings now uses the correct icon when using the dark theme. (UUM-104115)
    
*   Editor: When a BuildProfile is renamed, update the BuildProfileEditor to refresh the name displayed. (UUM-104263)
    
*   GI: Adaptive Probe Volumes Fails to Bake with Dilation Enabled and exception "Cannot allocate more brick chunks, probe volume brick pool is full" is printed. ([UUM-103976](https://issuetracker.unity3d.com/issues/adaptive-probe-volumes-fails-to-bake-with-dilation-enabled-and-exception-cannot-allocate-more-brick-chunks-probe-volume-brick-pool-is-full-is-printed))
    
*   GI: Fixed a bug where the unity\_RendererBounds\_Min and unity\_RendererBounds\_Max uniforms would be set to random uninitialized memory in the ShadowCaster pass. ([UUM-100264](https://issuetracker.unity3d.com/issues/shadows-flicker-and-cause-visual-artifacts-when-modifying-a-gameobjects-bounds-using-swizzle-y-mask-and-sine-time-nodes))
    
*   Graphics: Fixed a potential deadlock that could freeze players when loading or unloading AssetBundles with threaded texture uploads enabled. ([UUM-102896](https://issuetracker.unity3d.com/issues/arm-the-player-freezes-when-awaiting-g-uploadedtexturecondvar-in-the-main-thread))
    
*   Graphics: Fixed an issue where the value reported by "Texture.nonStreamingTextureMemory" would not update when mipmap limits were modified. ([UUM-79327](https://issuetracker.unity3d.com/issues/texture-dot-nonstreamingtexturememory-value-does-not-update-when-qualitysettings-dot-globaltexturemipmaplimit-is-changed))
    
*   Graphics: Fixed issues with recycling buffers in WebGPU. ([UUM-97406](https://issuetracker.unity3d.com/issues/webgpu-graphics-dot-renderprimitives-fails-on-meshtopology-dot-quads-with-validation-errors-when-exceeding-64k-vertices))
    
*   Graphics: Fixed libGLES.so crash on small subset of PowerVR devices. (UUM-102249)
    
*   Graphics: Removed an assert exception in UnityEngine.Rendering.CreateDrawBatchesJob.ProcessRenderer when changing a material property of a material used in MeshRenderers with multiple submeshes, after re-importing URP or HDRP. ([UUM-103975](https://issuetracker.unity3d.com/issues/assertionexception-thrown-and-mesh-turns-invisible-when-changing-material-offset-manually-via-the-inspector-or-through-settextureoffset-on-a-mesh-with-more-than-one-material))
    
*   HDRP: Custom mesh for the water system is rendering the normal map the same as the water surface regardless of a world position. ([UUM-95800](https://issuetracker.unity3d.com/issues/custom-mesh-water-surface-normal-map-fades-out-when-y-position-increases))
    
*   HDRP: Fixed a crash in AMDUnityPlugin.dll when there are multiple cameras and one is toggled off. ([UUM-88980](https://issuetracker.unity3d.com/issues/crash-on-amdunityplugin-dot-dll-in-specific-built-project-when-using-fsr2-upscaler))
    
*   HDRP: Fixed a ghosting issue with DX11. (UUM-102605)
    
*   iOS: Fixed "Unexpected duplicate tasks" error when appending builds. ([UUM-104527](https://issuetracker.unity3d.com/issues/ios-xcode-project-building-fails-when-the-build-is-appended))
    
*   iOS: Fixed errors when removing ODR variant in Player Settings. (UUM-103892)
    
*   iOS: Fixed UI behavior when entering custom ODR variant settings in PlayerSettings. (UUM-103881)
    
*   iOS: Fixed warning in the Xcode console when keyboard is open and changing orientation on iPad. (UUM-95530)
    
*   Package Manager: Fixed the issue where extension buttons are not consistently shown. ([UUM-84399](https://issuetracker.unity3d.com/issues/inconsistent-logic-on-when-open-vfx-graph-samples-button-appears-on-visual-effect-graph-in-package-manager))
    
*   Package Manager: Make GetPatckagesPath thread/serialization safe. (UUM-104998)
    
*   Physics: Added a clamp to \[0,inf\] for for values passed to Rigidbody.linearDamping and Rigidbody.angularDamping property setters. (UUM-104920)
    
*   Physics 2D: Fixed "Physics2D.GetRayIntersection" overload to correctly use the "layerMask" argument. ([UUM-103933](https://issuetracker.unity3d.com/issues/the-layermask-parameter-is-ignored-when-using-physics2d-dot-getrayintersection-method))
    
*   Physics 2D: Fixed tooltip rendering for the Rigidbody2D Simulation Mode layer selection in the Physics2DSettings. (UUM-105521)
    
*   Player: Fixed an issue where the startup logs would be missing from the normal log file (or standard output) when the "Capture Startup Logs" player setting was enabled. ([UUM-102670](https://issuetracker.unity3d.com/issues/startup-logs-are-missing-in-player-logs-when-capture-startup-logs-is-enabled))
    
*   Scene/Game View: Fixed a bug where Camera overlays dropdown wouldn't display the camera name. ([UUM-104633](https://issuetracker.unity3d.com/issues/scene-view-cameras-overlay-shows-no-camera-found-when-main-camera-exists-in-the-scene))
    
*   Shadergraph: Fixed additional cases where certain Node Reference sample graphs would report unsaved changes on open. ([UUM-76080](https://issuetracker.unity3d.com/issues/shader-graph-node-reference-samples-become-dirty-on-opening))
    
*   SRP Core: Fixed out of bounds read in CoreUnsafeUtils.FixedBufferStringQueue.TryPop when the remaining bytes in the buffer is less than 4. ([UUM-104687](https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-length-cannot-be-less-than-zero-dot-error-or-nullreferenceexception-object-reference-not-set-to-an-instance-of-an-object-error-is-thrown-when-coreunsafeutils-dot-fixedbufferstringqueue-reads-out-of-bounds))
    
*   Terrain: Ensure that TreeRenderer position is initialized when creating Terrain camera render data. (UUM-104978)
    
*   Text: Fixed IME issue. ([UUM-100552](https://issuetracker.unity3d.com/issues/the-textmeshpro-input-field-gets-cleared-when-characters-are-entered-using-a-japanese-keyboard-layout-and-a-suggestion-is-selected-from-the-composition-string-window))
    
*   UI Toolkit: Added clarity around selection in the samples window. ([UUM-87336](https://issuetracker.unity3d.com/issues/unexpected-behaviour-when-selecting-items-in-ui-toolkits-treeview-sample))
    
*   UI Toolkit: Aligned text and arrow icon for TreeView and MultiColumnTreeView in the samples window. ([UUM-104924](https://issuetracker.unity3d.com/issues/text-and-dropdown-icon-are-not-aligned-in-ui-toolkit-samples))
    
*   UI Toolkit: Batched the scroll events on fixed height virtualizations for ListView and TreeView controls. (UUM-55912)
    
*   UI Toolkit: Fixed a cosmetic issue where toolbar buttons shrank when the container shrank. (UUM-104876)
    
*   UI Toolkit: Fixed issue when dragging a reorderable list view item on the X axis making the item disappear from the list. (UUM-103527)
    
*   UI Toolkit: Fixed specificity for ScrollView button styling when placed in a TabView control. ([UUM-105551](https://issuetracker.unity3d.com/issues/broken-scrollview-styling-when-placed-inside-a-tabview))
    
*   UI Toolkit: Fixed the ListView content disappearing when removing items outside of the offset. (UUM-104445)
    
*   UI Toolkit: Fixed the position of the Editor Only label in the tree view mode of the UI Builder Library. ([UUM-102817](https://issuetracker.unity3d.com/issues/non-consistent-editor-only-label-position-in-the-library-section))
    
*   UI Toolkit: Fixed the threshold on drag when near the end of the ListView. (UUM-44911)
    
*   UI Toolkit: Fixed USS selector is reparented when clicking on stylesheet after applying to element. ([UUM-104962](https://issuetracker.unity3d.com/issues/uss-selector-is-duplicated-when-it-is-added-to-an-element-the-action-is-undone-and-then-another-selector-is-clicked))
    
*   Undo System: Don't overwrite flags which are updated during Awake or OnEnable. ([UUM-96314](https://issuetracker.unity3d.com/issues/hideflags-dot-hideanddontsave-flag-does-not-work-when-the-components-are-added-in-onenable-and-awake-methods))
    
*   Universal RP: Fixed Screen Space Shadows issue when using Deferred Rendering in URP. ([UUM-85291](https://issuetracker.unity3d.com/issues/gameobjects-in-the-game-view-are-rendered-differently-than-in-the-scene-view-when-the-rendering-path-is-set-to-deferred-and-screen-space-shadows-renderer-feature-is-added))
    
*   URP: Check that GBuffers are valid before using them in the DecalGBufferRenderPass. ([UUM-103836](https://issuetracker.unity3d.com/issues/game-view-turns-black-scene-view-turns-grey-console-error-nullreferenceexception-when-wireframe-is-turned-on-because-the-decalgbufferrenderpass-references-a-non-existent-gbuffer))
    
*   URP: Fixed IndexOutOfRangeException by allocating size with respect to visible light's length. ([UUM-102022](https://issuetracker.unity3d.com/issues/an-unclear-error-occurs-when-exceeding-the-light-limit-set-in-urp-config-package))
    
*   VFX Graph: Domain reload does not trigger a reimport of VFX asset opened in VFX window. (UUM-57043)
    
*   VFX Graph: Fixed an exception when using the shortcut SHIFT+5 when no VFX component is attached or when the debug panel is not displayed in the VFX Graph editor. ([UUM-102691](https://issuetracker.unity3d.com/issues/toggle-all-debug-panels-shortcut-throws-nullreferenceexception-object-reference-not-set-to-an-instance-of-an-object-error))
    
*   VFX Graph: Fixed matrix 4x4 was overflowing when displayed in a context block. ([UUM-102349](https://issuetracker.unity3d.com/issues/matrix4x4-exposed-property-is-cropped-in-subgraph-block))
    
*   VFX Graph: Fixed rendering of volumetric output connected to particle strips. ([UUM-102654](https://issuetracker.unity3d.com/issues/connecting-volumetric-fog-output-to-a-strip-breaks-compilation-and-throws-errors))
    
*   VFX Graph: Fixed VFX command culling when using Custom Passes in HDRP. ([UUM-83094](https://issuetracker.unity3d.com/issues/frustumculling-is-not-functional-in-vfx-graph-rendered-with-custom-pass-when-using-aggregatecullingparameters))
    
*   VFX Graph: Opening/Closing subgraphs in VFX window does not trigger a recompilation of its dependent VFX anymore. This has to be done explicitely by saving the subgraph. ([UUM-97016](https://issuetracker.unity3d.com/issues/editor-takes-a-long-time-to-open-vfx-graph-subgraph-asset-when-it-is-heavily-referenced-by-multiple-other-vfx-graphs))
    
*   VFX Graph: Restore the usage of global textures for textures set to None, when using instancing. (UUM-102751)
    
*   WebGL: Fixed a WebGL error with URP and MSAA, when a depth only render pass is involved. ([UUM-90459](https://issuetracker.unity3d.com/issues/scene-is-not-rendered-and-renderpass-errors-when-urp-msaa-is-enabled-in-the-webgl-player))
    
*   Windows: Added warning for windows Arm64 when selecting a Graphics API other than Dx11 or Dx12. (UUM-51898)

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

