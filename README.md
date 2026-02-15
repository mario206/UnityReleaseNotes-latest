# UnityReleaseNotes
**Last update time : `2026-02-15 15:17:48`	Powered By ChatGPT**

## More Unity Versions 
|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
| [6000.3](./merge_htmls/6000.3.md) | [6000.2](./merge_htmls/6000.2.md) | [6000.1](./merge_htmls/6000.1.md) | [6000.0](./merge_htmls/6000.0.md) | [2023.2](./merge_htmls/2023.2.md) | [2023.1](./merge_htmls/2023.1.md) | [2022.3](./merge_htmls/2022.3.md) | [2022.2](./merge_htmls/2022.2.md) | [2022.1](./merge_htmls/2022.1.md) |
| [2021.3](./merge_htmls/2021.3.md) | [2021.2](./merge_htmls/2021.2.md) | [2021.1](./merge_htmls/2021.1.md) | [2020.3](./merge_htmls/2020.3.md) | [2020.2](./merge_htmls/2020.2.md) | [2020.1](./merge_htmls/2020.1.md) | [2019.4](./merge_htmls/2019.4.md) | [2019.3](./merge_htmls/2019.3.md) | [2019.2](./merge_htmls/2019.2.md) |
| [2019.1](./merge_htmls/2019.1.md) | [2018.4](./merge_htmls/2018.4.md) | [2018.3](./merge_htmls/2018.3.md) | [2018.2](./merge_htmls/2018.2.md) | [2018.1](./merge_htmls/2018.1.md) | [2017.4](./merge_htmls/2017.4.md) | [2017.3](./merge_htmls/2017.3.md) | [2017.2](./merge_htmls/2017.2.md) | [2017.1](./merge_htmls/2017.1.md) |
| [5.6](./merge_htmls/5.6.md) | [5.5](./merge_htmls/5.5.md) | [5.4](./merge_htmls/5.4.md) | [5.3](./merge_htmls/5.3.md) | [5.2](./merge_htmls/5.2.md) | [5.1](./merge_htmls/5.1.md) | [5.0](./merge_htmls/5.0.md) | | |

## 6000.1

### 6000.1.17f1 Release Notes

#### Fixes

*   Scripting: Adressed CVE-2025-59489

### Known Issues in 6000.1.16f1

*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   GPU Resident Drawer: Crash on DynamicHeapAllocator::CreateTLSFBlock when opening a specific project ([UUM-108694](https://issuetracker.unity3d.com/issues/crash-on-dynamicheapallocator-createtlsfblock-when-opening-a-specific-project))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Metal: \[iOS\] The Player freezes and "Execution of the command buffer was aborted due to an error during execution." error is continuously logged ([UUM-111494](https://issuetracker.unity3d.com/issues/ios-the-player-freezes-and-execution-of-the-command-buffer-was-aborted-due-to-an-error-during-execution-dot-error-is-continuously-logged))
    
*   Mono: Crash on mono\_domain\_jit\_foreach when performing various Unity operations ([UUM-112001](https://issuetracker.unity3d.com/issues/crash-on-mono-domain-jit-foreach-when-performing-various-unity-operations))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP Foundation: Gizmos are not rendering in Game view ([UUM-104383](https://issuetracker.unity3d.com/issues/gizmos-are-not-rendering-in-game-view))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### 6000.1.16f1 Release Notes

#### Features

*   Android: Added app category support - Allows users to retain Android 15 orientation and rotation behavior on Android 16.

#### Fixes

*   DX12: Fixed a crash when FSR2 from AMDUnityPlugin is toggled on/off. ([UUM-100044](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-disabling-allow-fsr2-parameter-while-in-play-mode-with-direct3d12-set-as-graphics-api))
    
*   Editor: Fixed a bug where terrain with GPU instancing enabled would not render in the Scene view when using one of the debug visualization modes. ([UUM-109468](https://issuetracker.unity3d.com/issues/terrain-disappears-in-debug-draw-mode-when-draw-instanced-is-enabled))
    
*   Editor: Fixed BRG raw buffer binding when no metadata. (UUM-110313)
    
*   Editor: Fixed InspectorTitlebar always showing enabled state when no enabled SerializedProperty was provided. ([UUM-112560](https://issuetracker.unity3d.com/issues/editorguilayout-dot-inspectortitlebar-appears-enabled-when-inspecting-a-disabled-monobehaviour-component))
    
*   Editor: Fixed Water Decals Foam UV. ([UUM-111267](https://issuetracker.unity3d.com/issues/water-decals-do-not-render-to-anchored-position-in-local-space-when-the-distant-wind-speed-is-set-to-a-higher-value))
    
*   Editor: Unity\_RendererBounds\_Min/max available in URP with BRG, EG or GRD. ([UUM-103990](https://issuetracker.unity3d.com/issues/different-custom-shader-behavior-when-gpu-resident-drawer-is-enabled))
    
*   Graphics: Fixed an issue in URP that could cause a GPU hang when lights were clipping far plane. (UUM-112640)
    
*   Graphics: Fixed GameView not always resetting when VolumeProfile is Reset. ([UUM-111415](https://issuetracker.unity3d.com/issues/volume-profile-effects-are-still-showing-and-active-in-game-view-when-the-volume-profile-is-reset))
    
*   Graphics: Fixed missing Light theme for Volume inspector icon. ([UUM-111418](https://issuetracker.unity3d.com/issues/light-theme-icon-is-missing-for-volume-component-in-the-inspector-window))
    
*   Graphics: The Game view and Scene view fail to render when launching the Editor with a maximized Render Graph Viewer window. ([UUM-111510](https://issuetracker.unity3d.com/issues/the-game-view-and-scene-view-fail-to-render-when-launching-the-editor-with-a-maximized-render-graph-viewer-window))
    
*   N/A (internal): Fixed instability in Windows Editor Uninstall test script. (UUM-111904)
    
*   Search: Fixed crash in Search when a domain reload occurs while an index merge operation is in progress. (UUM-112498)
    
*   uGUI: Fixed Images being ignored by raycast when they were outside of a Masks bounds but had maskable set to false. ([UUM-113314](https://issuetracker.unity3d.com/issues/ugui-elements-behind-a-mask-are-not-clickable-when-maskable-is-disabled))
    
*   UI Toolkit: Fixed the performance issues when adding a lot of items through AddItem and TryRemoveItem with rebuildTree set to false. ([UUM-112202](https://issuetracker.unity3d.com/issues/treeview-dot-additem-performance-regression-when-opening-editorwindow))
    
*   UI Toolkit: Fixed the UI Builder "Fit Viewport" button so it also includes the selected element. ([UUM-112721](https://issuetracker.unity3d.com/issues/ui-builder-fit-viewport-button-zooms-to-fit-canvas-instead-of-the-selected-element))
    
*   Web: Fixed an issue where window events were being registered and handled before the engine fully initialized with WebGPU. (UUM-100658)

### Known Issues in 6000.1.15f1

*   2D: Crash on "TransferPixelDataForMaskTemplate<\_sprite\_packing\_char2>" when building for Android ([UUM-113215](https://issuetracker.unity3d.com/issues/crash-on-transferpixeldataformasktemplate-when-building-for-android))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Metal: \[iOS\] The Player freezes and "Execution of the command buffer was aborted due to an error during execution." error is continuously logged ([UUM-111494](https://issuetracker.unity3d.com/issues/ios-the-player-freezes-and-execution-of-the-command-buffer-was-aborted-due-to-an-error-during-execution-dot-error-is-continuously-logged))
    
*   Mono: Crash on mono\_domain\_jit\_foreach when performing various Unity operations ([UUM-112001](https://issuetracker.unity3d.com/issues/crash-on-mono-domain-jit-foreach-when-performing-various-unity-operations))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP Foundation: Gizmos are not rendering in Game view ([UUM-104383](https://issuetracker.unity3d.com/issues/gizmos-are-not-rendering-in-game-view))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    

### 6000.1.15f1 Release Notes

#### Improvements

*   2D: Improved performance of instantiation of GameObjects from Tiles. ([UUM-110584](https://issuetracker.unity3d.com/issues/freeze-when-entering-play-mode-with-a-certain-tilemap-enabled))
    
*   Android: Improved Android symbols documentation, explain better what happens when both executable library has debug sections and a custom symbol file is present. (UUM-112242)
    
*   Audio: Improved timing accuracy of AudioRandomContainer.
    
*   Editor: Improved performance of RectTransform.GetWorldCorners by removing an unneeded call to the Transform property. (UUM-112591)
    

#### Changes

*   2D: Added a warning to the Tilemap Inspector when the Tilemap is not attached to an enabled Grid. ([UUM-110584](https://issuetracker.unity3d.com/issues/freeze-when-entering-play-mode-with-a-certain-tilemap-enabled))
    
*   2D: Disabled the instantiation of GameObjects from Tiles when the Tilemap is not attached to an enabled Grid to prevent performance issues from these GameObjects. ([UUM-110584](https://issuetracker.unity3d.com/issues/freeze-when-entering-play-mode-with-a-certain-tilemap-enabled))
    
*   2D: Reduced recursive limit from 11 to 6 for instantiation of GameObjects from Tiles.
    

#### Fixes

*   2D: Added null check for missing secondary sprite textures. ([UUM-111901](https://issuetracker.unity3d.com/issues/dereferencing-nullptr-pptr-errors-are-logged-when-source-image-is-selected-in-the-image-component))
    
*   2D: Fixed issue where the material property block of a SpriteRenderer is reset when the SpriteRenderer is updated through an Animation clip. ([UUM-111921](https://issuetracker.unity3d.com/issues/changes-of-materialpropertyblock-via-script-reset-when-sprite-renderer-dot-color-is-changed-in-animation))
    
*   Animation: Added an error to explain why AnimatorController states stop working when they reach a normalized time which is too large (100,000+loops). ([UUM-111056](https://issuetracker.unity3d.com/issues/animation-playback-and-transitions-start-being-erratic-when-state-normalized-time-gets-too-large-with-no-indication-what-is-the-problem))
    
*   Asset Bundles: Ensure that the activeBuildTarget is correctly set before build callbacks are initialized. ([UUM-109242](https://issuetracker.unity3d.com/issues/asset-bundles-the-active-build-platform-is-being-used-instead-of-the-build-target-to-determine-material-slash-shader-compilation))
    
*   Asset Pipeline: Fixed AssetDatabase.ForceReserializeAssets will not try re-serializing assets that were recently deleted. (UUM-109985)
    
*   Asset Pipeline: Silent crash no longer happens when attempting to extract YAML data from binary meta files (meta files should never be in binary format). ([UUM-100218](https://issuetracker.unity3d.com/issues/silent-crash-when-opening-a-specific-project))
    
*   Audio: Fixed native memory of first loaded AudioClip being reported incorrectly in profiler. ([UUM-103201](https://issuetracker.unity3d.com/issues/allocated-memory-size-of-the-first-loaded-audioclip-is-much-higher-when-compared-to-the-rest-of-the-audioclips-memory-allocations))
    
*   Audio: Fixed PlayDelayed/PlayScheduled not working correctly with AudioRandomContainer. ([UUM-108008](https://issuetracker.unity3d.com/issues/audiosource-dot-playdelayed-does-not-work-with-audio-random-containers))
    
*   Editor: Fixed a crash in the Model Importer when a FBX file has corrupted Blendshape data. ([UUM-109143](https://issuetracker.unity3d.com/issues/crash-on-unityfbx-convertfbxscenetoimportscene-when-importing-a-specific-fbx-file))
    
*   Editor: Fixed Awaitables that use main thread affinity logic for continuations so they are not hanging when paused in play mode. (UUM-110950)
    
*   Editor: Fixed crash in GameObject::IsActiveIgnoreImplicitPrefab(). ([UUM-92622](https://issuetracker.unity3d.com/issues/crash-on-gameobject-isactiveignoreimplicitprefab-when-opening-a-specific-project))
    
*   Editor: Fixed previous splash screen background/logo from being cleared. ([UUM-111658](https://issuetracker.unity3d.com/issues/splash-image-logo-is-shown-after-being-removed-when-pressing-the-preview-button))
    
*   Graphics: Fixed crash after disconnecting an external display on Android. ([UUM-110456](https://issuetracker.unity3d.com/issues/android-crash-or-freeze-when-disconnecting-an-external-monitor-from-an-android-device))
    
*   Graphics: Fixed crashes when reading Texture2D (sub)assets with a data payload larger than expected. ([UUM-101784](https://issuetracker.unity3d.com/issues/crash-on-persistentmanager-getserializedfileifobjectavailable-when-opening-a-specific-project))
    
*   Graphics: Fixed flickering of gpu instanced particle system in linux when using OpenGL. ([UUM-100915](https://issuetracker.unity3d.com/issues/linux-gpu-instanced-particles-rendering-issue-when-using-opengl))
    
*   Graphics: Fixed flickering of gpu instanced particle system when using OpenGL. ([UUM-98222](https://issuetracker.unity3d.com/issues/particle-systems-that-use-meshes-flicker-in-player-when-gpu-instancing-is-enabled-on-older-adreno-gpus))
    
*   Graphics: URP: Fixed an issue where specific configurations would cause \_ProjectionParams.x to become incorrectly negated for some cameras. ([UUM-109860](https://issuetracker.unity3d.com/issues/scene-view-has-y-coordinates-of-the-screen-position-node-flipped-when-some-of-the-urp-features-are-disabled))
    
*   Input System: Added missing support for normalised or raw scroll wheel values for macOS (OSX). (UUM-90425)
    
*   Linux: Fixed Linux runtime window unexpectedly resizes to monitor dimensions when calling "Screen.SetResolution" function with hardcoded resolution matching current display's width or height. ([UUM-107466](https://issuetracker.unity3d.com/issues/linux-player-window-unexpectedly-resizes-to-monitor-dimensions-when-calling-screen-dot-setresolution-function-with-hardcoded-resolution-matching-current-displays-width-or-height))
    
*   macOS: Create an universal .dSYM in build folder when building Intel+Silicon build. (UUM-112044)
    
*   Particles: Fixed crash in trail geometry job. ([UUM-103773](https://issuetracker.unity3d.com/issues/crash-on-writeparticlelinevertex-when-particle-systems-are-rendered-in-a-specific-project))
    
*   Profiler: Fixed serialization system memory attribution to MonoScript and global caches. ([UUM-110303](https://issuetracker.unity3d.com/issues/visualtreeasset-has-significantly-increased-memory-allocation-size-at-runtime-when-the-project-is-built-with-il2cpp-scripting-backend))
    
*   Scripting: Fixed ObjectPool clear timing in no domain reload environment. ([UUM-111093](https://issuetracker.unity3d.com/issues/objectpools-pool-is-destroyed-when-entering-play-mode-without-reloading-domain))
    
*   uGUI: Disabled culling of empty Rects in the Editor to avoid false positives in the Scene View. ([UUM-100206](https://issuetracker.unity3d.com/issues/ui-elements-are-not-visible-on-certain-x-axis-positions-when-the-rotation-of-the-y-axis-is-90-or-90-degrees))
    
*   UI Toolkit: Fixed all UnityEvent listeners that are inherited class members are unassigned. ([UUM-111210](https://issuetracker.unity3d.com/issues/persisted-event-listeners-are-reset-when-collapsing-and-expanding-a-component-in-the-inspector))
    
*   UI Toolkit: Fixed an issue where a null value of type object would not be convertible to any other type. ([UUM-112074](https://issuetracker.unity3d.com/issues/ui-binding-event-is-not-triggered-when-the-object-of-custom-type-is-set-to-null))
    
*   UI Toolkit: Fixed the IndexOutOfRangeException when redoing elements that came after the styled visual element in the UI Builder. ([UUM-109157](https://issuetracker.unity3d.com/issues/ui-builder-performing-redo-action-for-creating-a-nested-element-throws-nvalid-uxml-or-uss-system-dot-indexoutofrangeexception-and-corrupts-the-opened-document-causing-data-loss))
    
*   UI Toolkit: Fixed UIBuilder Selector and Hierarchy view items being selectable using Touch and Pen devices. ([UUM-105026](https://issuetracker.unity3d.com/issues/ui-builder-elements-and-selectors-cannot-be-selected-when-using-a-touchscreen-monitor))
    
*   UI Toolkit: Prevent the ScrollView from scrolling when the scrollbar is visible and the content does not overflow. (UUM-111723)
    
*   UI Toolkit: The UI Builder now allows for wider selection of elements in the canvas. ([UUM-74631](https://issuetracker.unity3d.com/issues/ui-builder-inconsistent-selection-when-element-is-outside-of-canvas-bounds))
    
*   Video: Fixed freezing video playback on Galaxy S25 and similar Android devices. ([UUM-111599](https://issuetracker.unity3d.com/issues/videoplayer-freezes-or-stops-on-certain-android-devices-when-enabling-and-disabling-the-video-multiple-times))
    
*   VisionOS: Fixed crash when using WebCamTexture in visionOS builds.
    
*   Web: Fixed a bug caused by the use of a deprecated windows utility. (UUM-104979)
    
*   WebGL: Fixed an issue where resizing the WebGL canvas would cause flickering. ([UUM-30810](https://issuetracker.unity3d.com/issues/webgl-player-flickers-and-logs-warnings-when-viewport-is-resized-and-linear-color-space-is-used))

### Known Issues in 6000.1.14f1

*   2D: UI is not rendering and an error is thrown when FXAA is enabled and cameras are stacked in a 2D URP project ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   3D Physics: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: Crash with multiple stacktraces when rendering large models ([UUM-111263](https://issuetracker.unity3d.com/issues/crash-with-multiple-stacktraces-when-rendering-large-models))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) \[Hub version 3.13\] ([UUM-110923](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found-hub-version-3-dot-13))
    
*   License: Crash on WorkerLicense::HasEntitlement when starting the Editor ([UUM-112436](https://issuetracker.unity3d.com/issues/crash-on-workerlicense-hasentitlement-when-starting-the-editor))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Metal: \[iOS\] The Player freezes and "Execution of the command buffer was aborted due to an error during execution." error is continuously logged ([UUM-111494](https://issuetracker.unity3d.com/issues/ios-the-player-freezes-and-execution-of-the-command-buffer-was-aborted-due-to-an-error-during-execution-dot-error-is-continuously-logged))
    
*   Mono: Crash on mono\_domain\_jit\_foreach when performing various Unity operations ([UUM-112001](https://issuetracker.unity3d.com/issues/crash-on-mono-domain-jit-foreach-when-performing-various-unity-operations))
    
*   Native Editor Window Foundation: Crash on -\[NSApplication endModalSession:\] when entering Play Mode in a specific project ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP Foundation: Gizmos are not rendering in Game view ([UUM-104383](https://issuetracker.unity3d.com/issues/gizmos-are-not-rendering-in-game-view))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Texture: Crash on PersistentManager::GetSerializedFileIfObjectAvailable when opening a specific project ([UUM-101784](https://issuetracker.unity3d.com/issues/crash-on-persistentmanager-getserializedfileifobjectavailable-when-opening-a-specific-project))
    
*   Video: VideoPlayer freezes or stops on certain Android devices when enabling and disabling the Video multiple times ([UUM-111599](https://issuetracker.unity3d.com/issues/videoplayer-freezes-or-stops-on-certain-android-devices-when-enabling-and-disabling-the-video-multiple-times))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    

### 6000.1.14f1 Release Notes

#### Fixes

*   2D: Fixed Rendergraph 2D builders. (UUM-110269)
    
*   DX12: Fixed and improved DRED functionality. (UUM-111436)
    
*   Editor: Crash on RenderTarget::SetActive when opening the project. ([UUM-103185](https://issuetracker.unity3d.com/issues/crash-on-rendertarget-setactive-when-opening-the-project))
    
*   Editor: Documentation update to PostProcessSceneAttribute.
    
*   Editor: Ensure preference to accept to modify the Diagnostics page stays valid for the life of the SettingsWindow. ([UUM-104094](https://issuetracker.unity3d.com/issues/diagnostic-warning-resets-when-navigating-away-and-returning-to-diagnostics-settings))
    
*   Editor: Ensure updating the Search window title when receving async results will triggers repaint. ([UUM-111417](https://issuetracker.unity3d.com/issues/search-window-still-shows-found-results-number-when-the-text-is-already-deleted-from-the-search-bar-and-no-results-are-shown))
    
*   Editor: Fixed an issue where the Editor would crash if you called AssetBundle.UnloadAsync(...) and then immediately called AssetBundle.LoadFromFileAsync(...) that pointed to the same bundle you were in the process of unloading. (UUM-108651)
    
*   Editor: Fixed error message and refresh missing when going into playmode if no domain reload. ([UUM-108340](https://issuetracker.unity3d.com/issues/project-settings-panels-disappear-and-do-not-repaint-when-entering-play-mode-without-reloading-domain))
    
*   Editor: Fixed for macOS editor crash that could occur during specific situations when entering playmode. ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Editor: Fixed query panel icon. ([UUM-111403](https://issuetracker.unity3d.com/issues/searches-is-missing-an-icon-in-search-window))
    
*   Editor: Fixed VFX not repainted when changing some asset properties. ([UUM-99917](https://issuetracker.unity3d.com/issues/vfx-are-not-reinit-immediatly-when-changing-properties-in-asset-inspector))
    
*   Editor: Fixed `GetIcons` API for Standalone platforms. ([UUM-97474](https://issuetracker.unity3d.com/issues/player-settings-icons-are-not-retrieved-when-using-playersettings-dot-geticons-method))
    
*   Editor: Mac: Fix issue that when loading a multi-monitor window layout on Mac then all Unity windows would be clamped to the same screen where the mouse is, instead of keeping their positions on the various monitors. ([UUM-110840](https://issuetracker.unity3d.com/issues/the-editor-window-does-not-appear-in-the-monitor-where-it-was-previously-closed-when-launching-the-editor))
    
*   Editor: Search disable find reference in menu if indexing options are not enabled. ([UUM-86364](https://issuetracker.unity3d.com/issues/prefab-referencing-a-script-is-not-shown-in-the-search-windows-project-tab-when-using-find-references-in-project))
    
*   EmbeddedLinux: Vulkan Multidisplay Crash. ([UUM-101885](https://issuetracker.unity3d.com/issues/linux-urp-vulkan-player-crash-when-activating-a-second-display-with-a-second-camera-targeting-it))
    
*   GI: Fixed issue causing crash when no valid lightmap parameters are assigned. ([UUM-111154](https://issuetracker.unity3d.com/issues/crash-on-inputextraction-extractootssnapshot-when-opening-scene))
    
*   Graphics: Fixed GBuffer index mismatch in URP. ([UUM-109709](https://issuetracker.unity3d.com/issues/some-textures-do-not-render-when-deferred-renderpass-is-selected))
    
*   Graphics: Fixed issue that may cause redundant clear-only renderpass when using Vulkan. ([UUM-100540](https://issuetracker.unity3d.com/issues/urp-vulkan-vkcmdbeginrenderpass-is-called-twice-with-the-same-framebuffer))
    
*   Graphics: Fixed Vulkan performance decrease from redundant clear-only renderpass. ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    
*   Graphics: Removed redundant target requirements from APV includes in URP. (UUM-97906)
    
*   Graphics: Speculative fix for potential race conditions in CalculateSkinningMatrices by ensuring direct job completion for improved safety. ([UUM-111486](https://issuetracker.unity3d.com/issues/android-crash-on-skinnedmeshrenderermanager-calculateskinningmatrices))
    
*   iOS: Improved keyboard input field toolbar positioning by using inputAccessoryView, especially for floating keyboards. (UUM-100139)
    
*   Linux: Vulkan Multidisplay Crash. ([UUM-101885](https://issuetracker.unity3d.com/issues/linux-urp-vulkan-player-crash-when-activating-a-second-display-with-a-second-camera-targeting-it))
    
*   Prefabs: Fixed issue where m\_Modifications block serializes incorrectly when replacing source prefabs. ([UUM-107408](https://issuetracker.unity3d.com/issues/m-modifications-block-serializes-incorrectly-when-replacing-source-prefabs))
    
*   QNX: Vulkan Multidisplay Crash. ([UUM-101885](https://issuetracker.unity3d.com/issues/linux-urp-vulkan-player-crash-when-activating-a-second-display-with-a-second-camera-targeting-it))
    
*   Search: Changed the default operator for the filter "dir" from "equals" to "contains". ([UUM-110821](https://issuetracker.unity3d.com/issues/dir-search-proposition-uses-equals-as-its-default-comparison-operator))
    
*   VisionOS: Fixed type in platform define check. (UUM-111401)

### Known Issues in 6000.1.13f1

*   2D: UI is not rendering and an error is thrown when FXAA is enabled and cameras are stacked in a 2D URP project ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   3D Physics: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Asset Store / Publisher portal: Fix for 6000.1.X: Accepting Asset Store EULA endless loop in Package Manager window (UUM-88532)
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: Crash with multiple stacktraces when rendering large models ([UUM-111263](https://issuetracker.unity3d.com/issues/crash-with-multiple-stacktraces-when-rendering-large-models))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Environment Effects: \[HDRP\] Water displacement fades when camera move far in worldspace. ([UUM-111903](https://issuetracker.unity3d.com/issues/hdrp-water-displacement-fades-when-camera-move-far-in-worldspace))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) \[Hub version 3.13\] ([UUM-110923](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found-hub-version-3-dot-13))
    
*   License: Crash on WorkerLicense::HasEntitlement when starting the Editor ([UUM-112436](https://issuetracker.unity3d.com/issues/crash-on-workerlicense-hasentitlement-when-starting-the-editor))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Metal: \[iOS\] The Player freezes and "Execution of the command buffer was aborted due to an error during execution." error is continuously logged ([UUM-111494](https://issuetracker.unity3d.com/issues/ios-the-player-freezes-and-execution-of-the-command-buffer-was-aborted-due-to-an-error-during-execution-dot-error-is-continuously-logged))
    
*   Mono: Crash on mono\_domain\_jit\_foreach when performing various Unity operations ([UUM-112001](https://issuetracker.unity3d.com/issues/crash-on-mono-domain-jit-foreach-when-performing-various-unity-operations))
    
*   Native Editor Window Foundation: Crash on -\[NSApplication endModalSession:\] when entering Play Mode in a specific project ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP Foundation: Gizmos are not rendering in Game view ([UUM-104383](https://issuetracker.unity3d.com/issues/gizmos-are-not-rendering-in-game-view))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Video: VideoPlayer freezes or stops on certain Android devices when enabling and disabling the Video multiple times ([UUM-111599](https://issuetracker.unity3d.com/issues/videoplayer-freezes-or-stops-on-certain-android-devices-when-enabling-and-disabling-the-video-multiple-times))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    

### 6000.1.13f1 Release Notes

#### Changes

*   Documentation: Added link to relevant area of Discussions on the multiplayer landing page.
    
*   Editor: The game view rendering statistics window now displays a warning of incorrect triangle and vertex count when indirect draw calls are issued, such as is the case with GPU Occlusion Culling. ([UUM-102572](https://issuetracker.unity3d.com/issues/statistics-window-shows-incorrect-information-when-gpu-resident-drawer-and-gpu-occlusion-culling-are-enabled))
    

#### Fixes

*   2D: Fixed artifacts occurring on Metal when using Rendergraph pipeline. (UUM-109986)
    
*   2D: Fixed UI rendering when FXAA is enabled with camera stack. ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   2D: Fixed URP 2D lighting with meshes in Rendergraph. (UUM-109312)
    
*   2D: Improved validation of RefreshTile Tilemap argument signature in Editor. ([UUM-109125](https://issuetracker.unity3d.com/issues/crash-on-tilemap-gettileasset-when-calling-tilemap-dot-gettile-in-new-refreshtile-method-for-tilebase-class))
    
*   Android: Fixed a bug where calls lead to a state where starting new audio streams caused a main thread stall. ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Android: Fixed crash on GameActivity, when touching screen with 9 fingers or more. GameActivity only supports up to 8 fingers touching screen at the same time. ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Android: Fixed warning showing libraries as not 16 KB page aligned when they have been updated externally. ([UUM-111393](https://issuetracker.unity3d.com/issues/android-native-libraries-dot-so-are-not-checked-for-16kb-alignment-when-modified-externally))
    
*   Asset Import: Detect a corrupt library when loading a project in the Unity Editor, and present an error message with instructions on how to delete the corrupt library, with documentation URL. ([UUM-109873](https://issuetracker.unity3d.com/issues/crash-on-raiseexception-when-opening-a-specific-project-1))
    
*   Editor: "Asset Labels" section should not appear when a non-asset is being selected. ([UUM-110356](https://issuetracker.unity3d.com/issues/asset-labels-section-appears-in-inspector-when-selecting-a-scene-gameobject))
    
*   Editor: Exception thrown when renaming component with symbols in UIBuilder. ([UUM-107901](https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-errors-are-thrown-everytime-a-keyboard-key-is-pressed-when-renaming-a-component-in-ui-builder-with-a-symbol-and-changing-the-name-after-label-attribute-warning))
    
*   Editor: Fixed a bug where ctrl + left click would not open the contextual menu for the Orientation Gizmo and added support for Mac's two-finger click. (UUM-102749)
    
*   Editor: Fixed an issue where progress messages displayed during editor startup on Windows would sometimes stop updating. ([UUM-110166](https://issuetracker.unity3d.com/issues/launch-screen-progress-bar-is-stuck-on-initialize-asset-database-when-opening-a-project-with-different-editor-version))
    
*   Editor: Fixed prefab stage applying changes too early. ([UUM-107890](https://issuetracker.unity3d.com/issues/values-in-rect-transform-component-are-only-partially-updated-when-changing-values-in-prefab-mode))
    
*   Editor: Fixed SerializedProperty errors that could occur when editing and canceling the edit for an int2 followed by float2. ([UUM-110524](https://issuetracker.unity3d.com/issues/serializedproperty-errors-are-thrown-when-pressing-the-esc-key-to-cancel-the-modification-of-int-or-float-values))
    
*   Editor: Fixed the method to get object picker control ID while avoiding creating a new instance. ([UUM-110121](https://issuetracker.unity3d.com/issues/invalid-editor-window-of-type-unityeditor-dot-objectselector-error-message-is-thrown-when-maximizing-any-editor-window))
    
*   Editor: Fixed Underline with font fallback chain. ([UUM-110065](https://issuetracker.unity3d.com/issues/the-text-underline-partially-disappears-when-the-bold-effect-is-applied-with-certain-fonts-in-the-ui-builder))
    
*   Editor: LaunchScreen for Windows Editor only closed with Esc key and not also Enter. ([UUM-111095](https://issuetracker.unity3d.com/issues/editor-launch-screen-will-close-when-enter-is-pressed-on-it))
    
*   Editor: Removed redundant NUnit include from SRP Core code. (UUM-110025)
    
*   Editor: Updated 7-Zip to 25.00.
    
*   GI: Fixed a bug where the Renderer Light Probe Selection setting malfunctions when set to "Use Ambient Probe". Renderers outside the probe hull would, in fact, not use the ambient probe, but just get black SH data. ([UUM-96421](https://issuetracker.unity3d.com/issues/renderers-outside-light-probe-hull-use-incorrect-ambient-probe-values-when-renderer-light-probe-selection-is-set-to-use-ambient-probe-and-light-probes-on-mesh-is-set-to-blend-probes))
    
*   GI: Fixed case where custom properties on a Renderer are not taken into account, leading to incorrectly baked lightmaps. ([UUM-108565](https://issuetracker.unity3d.com/issues/material-property-block-emits-and-reflects-incorrect-color-when-baked-indirect-light-is-used))
    
*   Graphics: Added missing initialization in EvaluateAdaptiveProbeVolume. ([UUM-110695](https://issuetracker.unity3d.com/issues/shader-error-in-shader-graphs-slash-sg-unlit-warning-appears-and-material-fails-to-render-when-accessing-adaptive-probe-volume-data-through-evaluateadaptiveprobevolume-method))
    
*   HDRP: Fixed material debug view when path tracing is enabled. ([UUM-103401](https://issuetracker.unity3d.com/issues/rendering-debugger-throws-a-warning-and-renders-the-scene-view-in-solid-black-when-material-debug-tools-and-path-tracing-are-used))
    
*   IL2CPP: Ensure macOS `.dSYM` debug symbol bundles are reliably copied to the build output on clean builds when detailed stacktraces are enabled. ([UUM-108362](https://issuetracker.unity3d.com/issues/dsym-file-is-not-created-during-macos-standalone-build))
    
*   IL2CPP: Fixed issue where Linux was running out of memory pages due to them not being returned. (UUM-110285)
    
*   IMGUI: Fixed fallback font weight for Roboto-Mono in IMGUI. ([UUM-110337](https://issuetracker.unity3d.com/issues/monospaced-fonts-do-not-maintain-a-fixed-width-when-using-the-bold-variants))
    
*   Mono: Fixed crash that would occur due to symbol collision between builtin Brotli compression and system installed versions. ([UUM-108000](https://issuetracker.unity3d.com/issues/silicon-freeze-slash-crash-on-brotlidecoderdecompressstream-when-using-system-dot-io-dot-compression-dot-brotlidecoder-dot-trydecompress))
    
*   Player: The DeveloperConsole now correctly opens after being re-enabled, fixing an issue where it would remain stuck in a closed state. ([UUM-109718](https://issuetracker.unity3d.com/issues/debug-console-does-not-reappear-when-disabling-and-re-enabling-debug-dot-developerconsoleenabled))
    
*   Scene/Game View: Fixed an issue where Focus Pan command would often set an impractical zoom pivot if Canvas object was picked. ([UUM-108790](https://issuetracker.unity3d.com/issues/scene-view-doesnt-select-the-canvas-when-its-clicked-with-the-view-tool))
    
*   TextCore: Make sure disabled TextField do not collapse. ([UUM-103184](https://issuetracker.unity3d.com/issues/text-field-becomes-narrow-when-selecting-children-of-toggle-element-in-ui-builder))
    
*   uGUI: Updated Image raycast behavior to ensure consistent handling of screenPoints outside bounds, preventing parent Images from blocking child Images. ([UUM-110769](https://issuetracker.unity3d.com/issues/child-image-does-not-trigger-an-event-when-the-parent-image-is-using-alphahittestminimumthreshold-0))
    
*   UI Toolkit: Clicking on Spacing/Border Widget values in the UI Builder now selects these values. ([UUM-105818](https://issuetracker.unity3d.com/issues/ui-builder-value-is-not-selected-when-left-clicking-on-spacing-slash-border-widget-values))
    
*   UI Toolkit: Fixed change events being sent when the text had not changed, but the precision of the text value did not exactly match the float value. ([UUM-100527](https://issuetracker.unity3d.com/issues/the-inspector-rounds-up-float-values-up-to-a-maximum-of-7-digits-and-overwrites-the-actual-values-in-the-file-when-saving-the-asset))
    
*   UI Toolkit: Fixed elements sometimes still referenced in memory after being removed from their panel. ([UUM-109369](https://issuetracker.unity3d.com/issues/memory-address-leaks-when-using-visual-elements-in-a-specific-project))
    
*   UI Toolkit: Fixed focus in UI Builder code preview when clicking on ScrollView controls. ([UUM-105775](https://issuetracker.unity3d.com/issues/ui-builder-scroll-button-for-code-preview-section-automatically-selects-all-of-the-code))
    
*   UI Toolkit: Fixed property field indentation. ([UUM-108741](https://issuetracker.unity3d.com/issues/header-attribute-is-misaligned-when-placed-before-an-inputactionproperty-field))
    
*   UI Toolkit: Fixed the argument exception when docking a window that contains a RadioButtonGroup control. ([UUM-105010](https://issuetracker.unity3d.com/issues/argumentexception-cannot-unschedule-unknown-scheduled-function-error-thrown-when-filling-out-multiplayer-center-recommendation-tab))
    
*   Video: \[Android\] VideoPlayer leaks memory when repeating Play and Stop on a Video. ([UUM-77668](https://issuetracker.unity3d.com/issues/android-videoplayer-leaks-memory-when-repeating-play-and-stop-on-a-video))
    
*   XR: Fixed for the background motion vectors being generated incorrectly for spacewarp.

### Known Issues in 6000.1.12f1

*   2D: UI is not rendering and an error is thrown when FXAA is enabled and cameras are stacked in a 2D URP project ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   3D Physics: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Android: \[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Asset Store / Publisher portal: Fix for 6000.1.X: Accepting Asset Store EULA endless loop in Package Manager window (UUM-88532)
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: Crash with multiple stacktraces when rendering large models ([UUM-111263](https://issuetracker.unity3d.com/issues/crash-with-multiple-stacktraces-when-rendering-large-models))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Editor Platform: Crash on -\[NSApplication endModalSession:\] when entering Play Mode in a specific project ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) \[Hub version 3.13\] ([UUM-110923](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found-hub-version-3-dot-13))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Metal: \[iOS\] The Player freezes and "Execution of the command buffer was aborted due to an error during execution." error is continuously logged ([UUM-111494](https://issuetracker.unity3d.com/issues/ios-the-player-freezes-and-execution-of-the-command-buffer-was-aborted-due-to-an-error-during-execution-dot-error-is-continuously-logged))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP XR: Custom Skybox shader does not render all Skybox's faces in Standalone Player for Meta Quest when 'Allow Material Override' is enabled in ShaderGraph ([UUM-107763](https://issuetracker.unity3d.com/issues/custom-skybox-shader-does-not-render-all-skyboxs-faces-in-standalone-player-for-meta-quest-when-allow-material-override-is-enabled-in-shadergraph))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    

### 6000.1.12f1 Release Notes

#### API Changes

*   Asset Pipeline: Added: Added FindAssetGUIDs methods that return an array of GUIDs instead of strings.
    
*   Asset Pipeline: Added: Added LoadAssetByGUID method that accepts a GUID as an input argument.
    

#### Fixes

*   AI: Agent was not progressing past a corner between polygons of different area types. ([UUM-72975](https://issuetracker.unity3d.com/issues/navmeshagent-gets-stuck-when-going-over-a-vertex-of-a-higher-cost-area))
    
*   AI: Agent was some times getting stuck in its movement along axis-aligned NavMesh edges. ([UUM-18593](https://issuetracker.unity3d.com/issues/game-objects-get-stuck-in-an-infinite-loop-when-passing-navmesh-surface-nodes))
    
*   AI: Agent was taking steps back while trying to correct the path it had computed through the NavMesh. ([UUM-79120](https://issuetracker.unity3d.com/issues/nav-mesh-agent-gets-stuck-and-oscillate-when-traveling-along-edges-and-corners-of-nav-mesh-areas-with-different-costs))
    
*   Android: Fixed the problem with installing AAB to some Samsung devices which have Secure Folder. ([UUM-110694](https://issuetracker.unity3d.com/issues/android-exception-shell-does-not-have-permission-to-access-user-150-and-app-does-not-get-deployed-on-a-samsung-device-with-secure-folder-when-building-an-app-bundle-google-play))
    
*   Animation: Fixed an issue where a state machine state's name would be extending beyond the bounds of the node if the name was too long. ([UUM-107423](https://issuetracker.unity3d.com/issues/animator-state-name-overflows-outside-the-visual-box-when-the-state-has-a-long-name))
    
*   Asset Import: Fixed indeterminism of artifact ids which could occur when importers set dependencies to other assets. (UUM-107448)
    
*   Asset Pipeline: Asset Import workers could get out of sync with their main editor process, rendering them unable to load assets. (UUM-100493)
    
*   DX12: Fixed for crash when running with Native Jobs. (UUM-110198)
    
*   Editor: Black boxes no longer show when a modal window is open. ([UUM-101514](https://issuetracker.unity3d.com/issues/black-artifact-becomes-visible-in-the-build-profiles-window-when-the-build-automation-window-is-opened))
    
*   Editor: Changed the TextInputBaseField Blur behaviour so that it now resets and scrolls the text back to the start when focus is lost. (UUM-73005)
    
*   Editor: Fixed an exception when accessing the toolbar of the animator window with a deleted animator. ([UUM-107430](https://issuetracker.unity3d.com/issues/animator-window-has-a-dropdown-button-that-throws-missingreferenceexception-error-on-a-new-project-when-the-previous-project-had-a-gameobject-with-an-animation))
    
*   Editor: Fixed distorted TagManagerInspector pop up window if tag confirmed using Enter. ([UUM-110586](https://issuetracker.unity3d.com/issues/the-tag-popup-window-is-deformed-and-stretched-out-when-creating-a-tag-with-the-same-name-as-an-already-existing-tag))
    
*   Editor: Fixed IMGUI EditorGUIUtility.labelWidth value being changed by the Scene View UI. This could impact other windows drawn afterwards. ([UUM-110450](https://issuetracker.unity3d.com/issues/editorguilayout-dot-toggle-clickable-area-is-shifted-when-using-built-in-render-pipeline))
    
*   Editor: Fixed the issue with search results are stacked on top of each other. ([UUM-107495](https://issuetracker.unity3d.com/issues/search-results-are-stacked-on-top-of-each-other))
    
*   Editor: Fixed warning about inability to create a file containing "~UnityDirMonSyncFile~" in the filename located in a modules file. ([UUM-109594](https://issuetracker.unity3d.com/issues/warnings-appear-in-the-console-window-when-opening-a-new-project))
    
*   Graphics: Fixed additional separator in menu when the VolumeComponent is in the default VolumeProfile. ([UUM-108517](https://issuetracker.unity3d.com/issues/double-separation-lines-are-present-in-override-controls-in-a-defaultvolumeprofile-asset))
    
*   Graphics: Fixed additional separator in menu when there is no advanced properties in the VolumeComponent. ([UUM-108543](https://issuetracker.unity3d.com/issues/double-separation-lines-are-present-in-override-controls-in-a-new-volume-profile-asset))
    
*   HDRP: Fixed the position node in ShaderGraph with the fog volume material type not working as intended. ([UUM-83347](https://issuetracker.unity3d.com/issues/local-volumetric-fog-gameobject-ignores-position-node-settings-when-applying-a-custom-fog-volume-shadergraph))
    
*   IL2CPP: Prevent possible shutdown deadlock when using waits with zero time out. ([UUM-104910](https://issuetracker.unity3d.com/issues/player-with-il2cpp-scripting-backend-crashes-when-calling-application-dot-quit-while-a-thread-is-running))
    
*   Kernel: Fixed rare deadlock on Windows in `Resources.UnloadUnusedAssets`. (UUM-100691)
    
*   Mono: Fixed crash on some default interface method calls. ([UUM-99049](https://issuetracker.unity3d.com/issues/crash-on-raiseexception-when-using-default-interface-methods))
    
*   Mono: Fixed Crash when invoking a default interface method that is generic with value type generic argument. ([UUM-109706](https://issuetracker.unity3d.com/issues/crash-on-mono-class-inflate-generic-method-full-checked-when-accessing-static-properties-or-methods-of-a-generic-interface-in-a-generic-class))
    
*   Mono: Fixed issue where mono's debugger agent thread would not restart when a connection issue was encountered. (UUM-107431)
    
*   Scripting: Optimized the Main Thread times of InstantiateAsync and added a new OriginalImmutable flag to reduce the times even more. ([UUM-102307](https://issuetracker.unity3d.com/issues/long-scheduler-times-on-main-thread-when-using-instantiateasync-with-a-singular-massive-prefab))
    
*   UI Toolkit: Ensure margin gizmo stays visible while dragging. ([UUM-105900](https://issuetracker.unity3d.com/issues/ui-builder-viewports-gizmos-for-margin-and-padding-disappear-when-dragging-to-modify-the-value-and-the-cursor-leaves-the-spacing-section))
    
*   UI Toolkit: Fixed an exceptions when displaying PropertyFields bound to an array named "Array" in the inspector. ([UUM-110573](https://issuetracker.unity3d.com/issues/binding-listview-failed-warning-is-thrown-when-a-gameobject-with-an-attached-script-containing-an-array-or-list-named-array-is-selected))
    
*   UI Toolkit: Fixed an issue where the IMGUI TreeView's context menu option to rename wouldn't work when the containing view was not focused. ([UUM-110067](https://issuetracker.unity3d.com/issues/gameobject-cannot-be-renamed-when-right-clicked-and-a-different-window-is-in-focus))
    
*   UI Toolkit: Fixed an issue with PropertyFields bound to an array named "Array" throwing an exception when the add button was clicked. ([UUM-110572](https://issuetracker.unity3d.com/issues/nullreferenceexception-error-is-thrown-when-attempting-to-add-an-element-to-an-array-or-list-named-array-in-the-inspector))
    
*   UI Toolkit: Fixed bound fields not showing an indication if they were animated or driven. (UUM-105089)
    
*   UI Toolkit: Fixed crash when stroking rounded joins with Painter2D. ([UUM-110455](https://issuetracker.unity3d.com/issues/crash-on-uitoolkit-uipainter2d-strokeroundedcap-when-drawing-an-arc-with-painter2d-on-specific-progress-value-using-linecap-dot-round))
    
*   UI Toolkit: Fixed QuickSearch warning from removing an element during its AttachToPanel event. ([UUM-107328](https://issuetracker.unity3d.com/issues/modifying-the-parent-of-a-visualelement-while-its-already-being-modified-is-not-allowed-error-is-thrown-when-entering-text-and-pressing-tab-in-the-search-window))
    
*   Universal RP: Added missing apv keywords to TerrainLitAdd.shader. ([UUM-100526](https://issuetracker.unity3d.com/issues/distant-shadowmask-does-not-cast-shadows-on-terrain-when-baking-with-adaptive-probe-volumes))
    
*   Video: Fixed an issue where the VideoPlayer component failed to play MP4 files from StreamingAssets on some Android devices using Vulkan. The required NV12 decode shaders are now correctly included, restoring video playback on affected hardware. ([UUM-105019](https://issuetracker.unity3d.com/issues/vulkan-on-certain-android-devices-unitys-videoplayer-component-fails-to-play-mp4-files-located-under-the-streamingassets-folder))
    
*   Windows: Fixed SystemInfo.deviceType to correctly return the type of device the Windows Standalone player is running on. (UUM-110392)

### Known Issues in 6000.1.11f1

*   2D: UI is not rendering and an error is thrown when FXAA is enabled and cameras are stacked in a 2D URP project ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   Android: \[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Asset Store / Publisher portal: Accepting Asset Store EULA endless loop in Package Manager window ([UUM-83708](https://issuetracker.unity3d.com/issues/accepting-asset-store-eula-endless-loop-in-package-manager-window))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12DeviceState::ApplyRenderTargets when creating a new "Get Started With Unity" project ([UUM-105801](https://issuetracker.unity3d.com/issues/crash-on-d3d12devicestate-applyrendertargets-when-creating-a-new-get-started-with-unity-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Editor Platform: Crash on -\[NSApplication endModalSession:\] when entering Play Mode in a specific project ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Environment Effects: Custom Skybox shader does not render all Skybox's faces in Standalone Player for Meta Quest when 'Allow Material Override' is enabled in ShaderGraph ([UUM-107763](https://issuetracker.unity3d.com/issues/custom-skybox-shader-does-not-render-all-skyboxs-faces-in-standalone-player-for-meta-quest-when-allow-material-override-is-enabled-in-shadergraph))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Video: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Vulkan: AndroidPlayer selects Vulkan Graphics API over GLES even on devices with limited support ([UUM-109250](https://issuetracker.unity3d.com/issues/androidplayer-selects-vulkan-graphics-api-over-gles-even-on-devices-with-limited-support))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    

### 6000.1.11f1 Release Notes

#### API Changes

*   UI Toolkit: Added: Added two new fields to UxmlElementAttribute:  
    *   visibility: Defaults to "Default" but can be set to "Visible" or "Hidden" to override the default behavior, which hides elements with namespaces starting with Unity, UnityEngine, and UnityEditor.  
        
    *   libraryPath: Allows customization of the path where the element is displayed in the Project Library tab. ([UUM-104888](https://issuetracker.unity3d.com/issues/custom-elements-not-visible-in-ui-builder-when-defined-in-a-namespace-starting-with-unity))

#### Changes

*   Bug Reporter: Small change to the UI of the Bug Reporter to remove the small cross buttons at the end of each text input.
    
*   XR: Updated com.unity.xr.openxr package version to 1.15.0.
    

#### Fixes

*   2D: Fixed an issue in the Shadow Caster 2D shape editor that could cause exceptions to be thrown. (UUM-97647)
    
*   2D: Fixed issue with the TilemapRenderer when the TilemapRenderer has a Mask Interaction set to None and the user uses a shader which utilises the stencil buffer, and the stencil settings in the shader are not respected. ([UUM-109109](https://issuetracker.unity3d.com/issues/tilemap-renderer-does-not-reflect-the-stencil-buffer-when-the-tilemap-renderer-mode-is-set-to-chunk))
    
*   Accessibility: Set a minimum width on HierarchyViewer panes to fix resizing issues. ([UUM-109362](https://issuetracker.unity3d.com/issues/accessibility-hierarchy-viewer-sections-can-be-resized-to-zero-width))
    
*   Audio: Fixed an issue that would cause the main thread to stall when loading projects/scenes. ([UUM-100966](https://issuetracker.unity3d.com/issues/main-thread-stalling-when-loading-audio-source-asset-asynchronously-while-preloading-another-audio-source-asset))
    
*   Audio: Fixed an issue where the "Audio Resource" field on an Audio Source in some cases wouldn't be properly updated in prefabs. ([UUM-104751](https://issuetracker.unity3d.com/issues/overrides-in-nested-prefabs-are-ignored-when-importing))
    
*   Bug Reporter: Added preservation of "+" characters in bug report data by ensuring correct string encoding. (UUM-104899)
    
*   Bug Reporter: Fixed a bug on Linux where bug reporter fails to automatically attach the project after crash. (SUS-5761)
    
*   Bug Reporter: Fixed a bug where progress bar blinks red when removing Attachments in Offline mode. ([UUM-105567](https://issuetracker.unity3d.com/issues/progress-bar-blinks-red-when-removing-attachments-in-offline-mode))
    
*   DX12: Stencil reference value is applied correctly when using graphics jobs. (UUM-92267)
    
*   Editor: Added a message so the macOS Editor can properly ask the user for permission to access the microphone. This fixes a bug where if the Editor was launched via './run', instead of the Unity Hub, the microphone would not work. (UUM-109276)
    
*   Editor: Fixed issue on macOS where a dropdown can appear very far away from the button that was clicked. ([UUM-109011](https://issuetracker.unity3d.com/issues/ui-builder-dropdown-options-appear-on-top-of-the-window-when-part-of-the-window-is-covered))
    
*   Editor: Fixed issue where the Unity Editor would still open after a user terminated the launch screen during project load. ([UUM-107863](https://issuetracker.unity3d.com/issues/the-editor-opens-when-the-window-is-closed-right-after-launch))
    
*   Editor: Fixed method decorated with HideInCallstack attribute being opened by IDE instead of the caller method. ([UUM-99776](https://issuetracker.unity3d.com/issues/hidden-method-is-opened-in-ide-when-double-clicking-the-log-message-in-the-console-that-has-the-hideincallstackattribute))
    
*   Editor: Fixed ray tracing shaders from .shader files ignoring Strict shader variant matching option from Player Settings. (UUM-107689)
    
*   Editor: Improved preview window toolbar style so large labels do not take too much space. ([UUM-110119](https://issuetracker.unity3d.com/issues/preview-window-buttons-are-pushed-out-by-header-text))
    
*   Editor: Loading RenderDoc in Windows Editor does not crash when GPU skinning(Batched) is enabled. ([UUM-105820](https://issuetracker.unity3d.com/issues/crash-on-d3dkmtopenresource-when-capturing-with-renderdoc-while-gpu-skinning-is-set-to-gpu-batched))
    
*   Editor: Removed an assert to replace it with a debug assert due to an issue with hierarchical animation component. ([UUM-109748](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-error-occurs-when-multiple-animation-components-are-instantiated-after-changing-the-culling-type))
    
*   Editor: SpeedTree meshes and objects count differs when comparing the numbers in the Player with the Editor. ([UUM-105402](https://issuetracker.unity3d.com/issues/speedtree-meshes-and-objects-count-differs-when-comparing-the-numbers-in-the-player-with-the-editor))
    
*   GI: Make APV work with Subscenes in URP. (UUM-104165)
    
*   Graphics: Fixed the "get\_disableApplyMaterialPropertyDrawers can only be called from the main thread" exception that occurred occasionally with GPU Resident Drawer after a domain reload. ([UUM-101193](https://issuetracker.unity3d.com/issues/unityexception-get-disableapplymaterialpropertydrawers-can-only-be-called-from-the-main-thread))
    
*   Input System: Resolved issue with the Siri Remote (Gen2) where navigating with the Directional Pad caused `buttonSouth` to become true. This was due to OS propogating A button events after a D-Pad click (rather than a swipe). (UUM-110170)
    
*   Profiler: Fixed Player hang during Autoconnect on long Player initialization. ([UUM-101218](https://issuetracker.unity3d.com/issues/player-unresponsive-when-building-a-specific-project-with-autoconnect-profiler-enabled))
    
*   Scripting: Added warning to tag manager if trying to add the same tag more than once. ([UUM-99990](https://issuetracker.unity3d.com/issues/no-error-notification-is-displayed-when-creating-a-tag-with-an-already-existing-name))
    
*   Search: Support interface filtering for component and asset types. ([UUM-109613](https://issuetracker.unity3d.com/issues/search-filtering-by-interface-type-does-not-work))
    
*   UI Toolkit: Clicks in dead zones of the canvas selection header won't select the element underneath in UI Builder. ([UUM-107380](https://issuetracker.unity3d.com/issues/ui-builder-viewports-tool-gizmo-has-deadzones))
    
*   UI Toolkit: Fixed an exception thrown by the runtime dropdown field when choices list is empty. ([UUM-105552](https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-is-thrown-when-an-empty-dropdownfield-is-clicked-at-runtime))
    
*   UI Toolkit: Fixed an issue in UI Builder where clicking the scrollbar buttons in the code preview would focus and select the content. ([UUM-105775](https://issuetracker.unity3d.com/issues/ui-builder-scroll-button-for-code-preview-section-automatically-selects-all-of-the-code))
    
*   UI Toolkit: Fixed ListView bug where a drag operation would select the item even with SelectionType.None. (UUM-107346)
    
*   UI Toolkit: Fixed runtime dropdown checkmark styling. ([UUM-109393](https://issuetracker.unity3d.com/issues/check-mark-in-enum-element-is-misaligned-when-hovered-on-in-play-mode))
    
*   UI Toolkit: Fixed the UI Builder New Selector field, changing the insertion point to the end when typing. ([UUM-109015](https://issuetracker.unity3d.com/issues/ui-builder-insertion-point-jumps-to-the-end-of-the-string-when-editing-a-new-selector-name))
    
*   UI Toolkit: Text in the new selector field in UI Builder is no longer covered by the pseudo states button. ([UUM-109121](https://issuetracker.unity3d.com/issues/add-new-selector-input-text-is-partially-covered-by-the-add-pseudo-class-button))
    
*   Universal RP: Fixed black screen when using lens flare with bloom mip bias 0. ([UUM-109463](https://issuetracker.unity3d.com/issues/game-view-fails-to-render-and-becomes-dark-when-the-screen-space-lens-flare-components-intensity-is-set-to-1-and-the-bloom-mip-bias-is-set-to-0))
    
*   URP: Avoid persistent memory allocation (\_CameraTargetAttachmentX and \_CameraUpscaledTargetAttachmentX) in RenderGraph when possible (single camera), and use a RenderGraph texture instead. ([UUM-99384](https://issuetracker.unity3d.com/issues/cameratargetattachmentb-unnecessarily-allocates-memory-even-when-post-processing-is-disabled-and-camera-stacking-is-not-used))
    
*   Version Control: Added Beyond Compare 5 support to Yaml Merge. ([UUM-109861](https://issuetracker.unity3d.com/issues/beyond-compare-5-is-not-supported-by-yaml-merge))
    
*   Video: \[Windows\] Editor no longer crashes when listing webcams whose name is missing or empty. Such cameras are now skipped safely (with a warning in the Editor). ([UUM-105563](https://issuetracker.unity3d.com/issues/editor-crashes-with-platformwebcamtexture-getdevicenames-when-a-virtual-camera-is-present-and-friendlyname-property-is-deleted-from-registry))

### Known Issues in 6000.1.10f1

*   2D: UI is not rendering and an error is thrown when FXAA is enabled and cameras are stacked in a 2D URP project ([UUM-110338](https://issuetracker.unity3d.com/issues/ui-is-not-rendering-and-an-error-is-thrown-when-fxaa-is-enabled-and-cameras-are-stacked-in-a-2d-urp-project))
    
*   Android: \[GameActivity\] Crash on "UnityMotionEventCallbacks::\_GetPointerIdImpl" when giving 9+ simultaneous touch inputs ([UUM-108743](https://issuetracker.unity3d.com/issues/android-crash-on-unitymotioneventcallbacks-getpointeridimpl-when-giving-8-simultaneous-touch-inputs))
    
*   Asset Store / Publisher portal: Accepting Asset Store EULA endless loop in Package Manager window ([UUM-83708](https://issuetracker.unity3d.com/issues/accepting-asset-store-eula-endless-loop-in-package-manager-window))
    
*   Cloud Diagnostics: \[Android\]Crash on lib/arm64/libil2cpp.so when Unity Analytics and Engine Code stripping are enabled ([UUM-95408](https://issuetracker.unity3d.com/issues/android-crash-on-lib-slash-arm64-slash-libil2cpp-dot-so-when-unity-analytics-and-engine-code-stripping-are-enabled))
    
*   DirectX11: \[AMD\] Crash on VerifyD3DTextureSharingCallback when creating a new project ([UUM-104855](https://issuetracker.unity3d.com/issues/crash-on-verifyd3dtexturesharingcallback-when-creating-a-new-project))
    
*   DirectX12: Crash on D3D12RenderSubPassInfo::Begin when creating a new "Universal 3D sample" project ([UUM-105811](https://issuetracker.unity3d.com/issues/crash-on-d3d12rendersubpassinfo-begin-when-creating-a-new-universal-3d-sample-project))
    
*   DirectX12: Crash on D3D12SwapChain::Present when performing various Unity operations ([UUM-107390](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-present-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12::ProcessReleaseQueue when performing various Unity operations ([UUM-107470](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12-processreleasequeue-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when opening a project after changing the Graphics API to DirectX12 ([UUM-77757](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-opening-a-project-after-changing-the-graphics-api-to-directx12))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::DrawBuffersCommon when performing various Unity operations ([UUM-104826](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-drawbufferscommon-when-performing-various-unity-operations))
    
*   DirectX12: Crash on GfxDeviceD3D12Base::InitializeAsWorker when performing various Unity operations ([UUM-107766](https://issuetracker.unity3d.com/issues/crash-on-gfxdeviced3d12base-initializeasworker-when-performing-various-unity-operations))
    
*   DirectX12: \[AMD\] Crash on D3D12SwapChain::CreateHWND when creating or opening a project ([UUM-104715](https://issuetracker.unity3d.com/issues/crash-on-d3d12swapchain-createhwnd-when-when-creating-or-opening-a-project))
    
*   DirectX12: \[Intel\] Crash on BufferD3D12::BeginWrite when opening a newly created URP project with DirectX12 set as the default graphics API ([UUM-104889](https://issuetracker.unity3d.com/issues/crash-on-bufferd3d12-beginwrite-when-opening-a-newly-created-urp-project-with-directx12-set-as-the-default-graphics-api))
    
*   Editor Platform: Crash on -\[NSApplication endModalSession:\] when entering Play Mode in a specific project ([UUM-109764](https://issuetracker.unity3d.com/issues/crash-on-nsapplication-endmodalsession-when-entering-play-mode-in-a-specific-project))
    
*   Graphics Device Features: Graphics.RenderMeshIndirect does not issue multi-draw rendering commands when using a graphics API capable of multi-draw commands ([UUM-91617](https://issuetracker.unity3d.com/issues/graphics-dot-rendermeshindirect-does-not-issue-multi-draw-rendering-commands-when-using-a-graphics-api-capable-of-multi-draw-commands))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub ([UUM-103995](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-1))
    
*   Hub: Licensing Client fails to launch when opening Unity Hub (licensing client path is not found) ([UUM-103996](https://issuetracker.unity3d.com/issues/licensing-client-fails-to-launch-when-opening-unity-hub-licensing-client-path-is-not-found))
    
*   Lighting: All baked data for all scenes using APV is always loaded in Editor ([UUM-104833](https://issuetracker.unity3d.com/issues/all-baked-data-for-all-scenes-using-apv-is-always-loaded-in-editor))
    
*   Platform Audio: Android Player freezes when an Audio Source is playing and an incoming call is picked up and then hung up and the Audio Source is started again ([UUM-103525](https://issuetracker.unity3d.com/issues/android-player-freezes-when-an-audio-source-is-playing-and-an-incoming-call-is-picked-up-and-then-hung-up-and-the-audio-source-is-started-again))
    
*   Shader System: Crash on tlsf\_free when adding a 3D object to a Scene of a new Universal 3D project ([UUM-107673](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-adding-a-3d-object-to-a-scene-of-a-new-universal-3d-project))
    
*   SRP XR: GameObjects are transparent when a custom fog renderer feature is enabled ([UUM-104832](https://issuetracker.unity3d.com/issues/gameobjects-are-transparent-when-a-custom-fog-renderer-feature-is-enabled))
    
*   SRP XR: The Player renders black on a Quest headset when MSAA, Post Processing, and Spacewarm depth submission are enabled ([UUM-84612](https://issuetracker.unity3d.com/issues/the-player-renders-black-on-a-quest-headset-when-msaa-post-processing-and-spacewarm-depth-submission-are-enabled))
    
*   Video: Crash on mono-2.0-bdwgc.dll when instantiating a Prefab with Rigidbody after loading a scene from an Asset Bundle ([UUM-108799](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getvideoframeatindex-when-instantiating-a-prefab-with-rigidbody-after-loading-a-scene-from-an-asset-bundle))
    
*   Video: Editor crashes with PlatformWebCamTexture::GetDeviceNames when a Virtual Camera is present and FriendlyName property is deleted from Registry ([UUM-105563](https://issuetracker.unity3d.com/issues/editor-crashes-with-platformwebcamtexture-getdevicenames-when-a-virtual-camera-is-present-and-friendlyname-property-is-deleted-from-registry))
    
*   Vulkan: AndroidPlayer selects Vulkan Graphics API over GLES even on devices with limited support ([UUM-109250](https://issuetracker.unity3d.com/issues/androidplayer-selects-vulkan-graphics-api-over-gles-even-on-devices-with-limited-support))
    
*   Vulkan: \[Android\] Runtime performance deteriorates on certain Android devices when Graphics API is set to Vulkan on an upgraded project ([UUM-107530](https://issuetracker.unity3d.com/issues/build-performance-deteriorates-on-certain-android-devices-when-graphics-api-is-set-to-vulkan-on-an-upgraded-project))
    
*   Web Platform: Garbage Collector memory leak when allocating and deallocating memory in Web builds ([UUM-86352](https://issuetracker.unity3d.com/issues/garbage-collector-memory-leak-when-allocating-and-deallocating-memory-in-web-builds))
    

### 6000.1.10f1 Release Notes

#### Improvements

*   Animation: Improved memory allocations related to Animator callbacks, leading to improved performance. (UUM-107293)
    
*   Documentation: Added keyboard support for copying code examples.
    
*   DX12: Set ID3D12GraphicsCommandList::IASetVertexBuffers once instead of several times in a loop inside GfxDeviceD3D12Base::DrawBuffersCommon. (UUM-109282)
    

#### Fixes

*   2D: Added methods to add/remove sorting layers for Light2D. (UUM-109322)
    
*   2D: Implicit truncation of vector warning that is thrown after building in Universal2D Core template in Hidden/Light2D shader. This issue was introduced in LightingUtility.hlsl from 6000.1.x onward. (UUM-107821)
    
*   AI: NavMesh.CalculateTriangulation() now returns triangles in the same order every time the navigation system uses the same set of NavMesh polygons. ([UUM-99801](https://issuetracker.unity3d.com/issues/navmesh-data-triangulation-result-is-always-different-when-using-navmesh-dot-calculatetriangulation))
    
*   Animation: Improved contrast of the AnimationWindow's hierarchy view text. ([UUM-109379](https://issuetracker.unity3d.com/issues/poor-contrast-on-animation-clip-names-properties-when-using-the-dark-mode))
    
*   Audio: Fixed a sudden dropout of high priority sounds in the game under rare circumstances, when playing multiple new Audio Sources on the same frame as having stopped Audio Sources whilst exceeding the number of real voices available in the system. (UUM-101807)
    
*   Editor: Fixed a slight performance regression in build pipeline. (UUM-108628)
    
*   Editor: Fixed an bug that was causing error spam to the console if an HDRP scene had a terrain without GPU instancing enabled and wireframe mode was turned on in the Scene View. ([UUM-104823](https://issuetracker.unity3d.com/issues/unable-to-add-renderer-to-the-scene-after-culling-dot-error-when-adding-a-terrain-in-a-hdrp-project))
    
*   Editor: Fixed changes to fields that used delayed fields not being saved in prefab scenes. ([UUM-107890](https://issuetracker.unity3d.com/issues/values-in-rect-transform-component-are-only-partially-updated-when-changing-values-in-prefab-mode))
    
*   Editor: Fixed issue where user could resize or move hidden elements or their children. ([UUM-76962](https://issuetracker.unity3d.com/issues/the-size-of-the-visual-element-can-be-changed-when-parent-visual-element-is-hidden))
    
*   Editor: Fixed NullPointerException when editing Supported URL Schemes or Preloaded Assets size setting. (UUM-103946)
    
*   Editor: Removed the "Check for Updates" window. ([UUM-102388](https://issuetracker.unity3d.com/issues/check-for-updates-fails-to-connect-to-update-server))
    
*   Editor: Removed the "Check for Updates" window. (UUM-97698)
    
*   Graphics: Fixed issues when OpenXR resize it's swapchain a lot. (UUM-109456)
    
*   Graphics: Fixed Vulkan Validation Error for Semaphore that Has Not Been Waited On For XR. (UUM-107963)
    
*   Graphics: Fixed Vulkan Validation Errors caused by Fragment Density Map. (UUM-107839)
    
*   Graphics: The texture FilterMode would default to Point filtering on some iOS and OSX devices when mipmap streaming was enabled, this has been fixed. ([UUM-107360](https://issuetracker.unity3d.com/issues/texture-looks-point-sampled-when-mipmap-streaming-is-enabled))
    
*   HDRP: Fixed Decal Projector Layer Mask Override UI. ([UUM-104831](https://issuetracker.unity3d.com/issues/hdrp-decal-projector-rendering-layer-mask-overwrite-hidden-when-the-value-is-changed))
    
*   Installer: Fixed a potential exploit in the Windows Editor Installer.
    
*   Installer: Removed Visual C++ 2013 Redistributables from Windows Editor Installer. (UUM-104797)
    
*   Linux: Fixed Linux runtime not respecting popupwindow argument. ([UUM-105221](https://issuetracker.unity3d.com/issues/desktop-linux-runtime-does-not-respect-popupwindow-command-line-argument))
    
*   Playables: Fixed an issue where PlayableOutput.SetSourcePlayable would take a long time on PlayableGraphs with many outputs. (UUM-108822)
    
*   Scripting: Prevent recursion when unloading Scriptable Object. ([UUM-77941](https://issuetracker.unity3d.com/issues/crash-on-tlsf-free-when-calling-unloadresources-with-the-ondisable-function))
    
*   UI Toolkit: Fixed binding of Objects to INotifyValueChanged<Object> fields. ([UUM-109467](https://issuetracker.unity3d.com/issues/a-custom-bindable-uitoolkit-element-cannot-be-bound-in-the-editor-when-it-is-inherited-from-type-object))
    
*   URP: Fixed an issue where nothing was rendered when using Graphics.DrawProceduralIndirectNow in OnRenderObject method. ([UUM-96000](https://issuetracker.unity3d.com/issues/apple-m-chip-android-ios-nothing-is-rendered-in-the-game-view-slash-application-when-using-graphics-dot-drawproceduralindirectnow-with-urp-specified-shader))
    
*   URP: Lit's emission animates properly even with an initial \_EmissionColor equal to (0,0,0). ([UUM-83698](https://issuetracker.unity3d.com/issues/emission-animation-does-not-appear-when-the-emission-map-parameter-is-set-to-black-in-a-lit-material))
    
*   XR: Fixed XR stats from gfx thread, like refreshRate being dropped issue. ([UUM-104824](https://issuetracker.unity3d.com/issues/xrdevice-dot-refreshrate-returns-0-dot-0-hz-when-running-standalone-build-in-vr-mode))

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

