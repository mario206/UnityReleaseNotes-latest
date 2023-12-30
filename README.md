# UnityReleaseNotes
**Last update time : `2023-12-31 00:13:31`	Powered By ChatGPT**

## More Unity Versions 
|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
| [2023.1](./merge_htmls/2023.1.md) | [2022.2](./merge_htmls/2022.2.md) | [2022.1](./merge_htmls/2022.1.md) | [2021.3](./merge_htmls/2021.3.md) | [2021.2](./merge_htmls/2021.2.md) | [2021.1](./merge_htmls/2021.1.md) | [2020.3](./merge_htmls/2020.3.md) | [2020.2](./merge_htmls/2020.2.md) | [2020.1](./merge_htmls/2020.1.md) |
| [2019.4](./merge_htmls/2019.4.md) | [2019.3](./merge_htmls/2019.3.md) | [2019.2](./merge_htmls/2019.2.md) | [2019.1](./merge_htmls/2019.1.md) | [2018.4](./merge_htmls/2018.4.md) | [2018.3](./merge_htmls/2018.3.md) | [2018.2](./merge_htmls/2018.2.md) | [2018.1](./merge_htmls/2018.1.md) | [2017.4](./merge_htmls/2017.4.md) |
| [2017.3](./merge_htmls/2017.3.md) | [2017.2](./merge_htmls/2017.2.md) | [2017.1](./merge_htmls/2017.1.md) | [5.6](./merge_htmls/5.6.md) | [5.5](./merge_htmls/5.5.md) | [5.4](./merge_htmls/5.4.md) | [5.3](./merge_htmls/5.3.md) | [5.2](./merge_htmls/5.2.md) | [5.1](./merge_htmls/5.1.md) |
| [5.0](./merge_htmls/5.0.md) | | | | | | | | |

## 2020.3

### End-of-Support Notice

*   Please note that the 2020.3 LTS stream has reached End-of-Support and 2020.3.48 is the final patch version. Please consider upgrading to a more recent LTS. (See [Long Term Support](https://unity.com/releases/editor/qa/lts-releases)) The 2020.3 LTS stream will remain available for installation on the Unity Hub until August 2023.

### Known Issues in 2020.3.48f1

*   DirectX12: \[macOS\] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled ([UUM-30173](https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled))
    
*   GI: If a user is experience lighting coruption they may be required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Metal: \[iOS\] Rendering freezes when the orientation is changed ([UUM-9480](https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed))
    
*   XR SRP: \[URP\]\[XR\] Performance degradation when comparing Android Quest 2 builds across 2020.3 and 2023.x ([UUM-33025](https://issuetracker.unity3d.com/issues/urp-xr-performance-degradation-when-comparing-android-quest-2-builds-across-2020-dot-3-and-2023-dot-x))
    
*   First Person Template: A loading error is displayed in console when the Editor loads the project for the first time. Workarounds are to ignore the error or reload the project.
    

### 2020.3.48f1 Release Notes

#### Improvements

*   Animation: Reduced the number of GC allocations when calling Animator.GetParameter(int index) and generally made it faster.
    
*   Editor: Animation Events are now organized into sub-menus in the inspector.
    
*   Graphics: Reduced the time the render thread spends on Profiler.FlushRenderCounters.
    
*   Multiplayer: Added Netcode for GameObjects 1.4.0.
    
*   Serialization: Improved performance of restoring managed objects during a domain reload (again!).
    
*   Serialization: Improved performance of restoring managed objects during a domain reload.
    
*   XR: Improved GLES3 multiview rendering performance. (UUM-7008)
    

#### Changes

*   Package: Added new QoS APIs for specific Relay and Multiplay QoS servers searching and result.
    
*   Version Control: Changed the icons for Unity Version Control rebranding  
    Changed onboarding workflow.
    

#### Fixes

*   2D: Show apply/revert dialog to user if there are data changes in Sprite Editor Window before domain reload. ([UUM-26175](https://issuetracker.unity3d.com/issues/sprite-editor-unsaved-changes-get-reverted-when-script-recompilation-finishes))
    
*   Android: Display Gradle tasks in progress dialog while building to Android. (UUM-31890)
    
*   Android: Now sets the image shown on unlock on every lock. ([UUM-21954](https://issuetracker.unity3d.com/issues/android-the-previous-screen-shown-when-unlocking-a-device))
    
*   Android: Warn user if both template file and disabled template file exists in project. ([UUM-19338](https://issuetracker.unity3d.com/issues/android-gradle-template-isnt-selectable-when-the-folder-contains-both-the-enabled-and-disabled-extensions-of-the-template))
    
*   Asset Pipeline: Fixed Editor crash when changing Asset Serialization Mode to Force Binary with the com.unity.multiplayer.samples.coop package installed. ([UUM-26417](https://issuetracker.unity3d.com/issues/editor-crashes-on-collectallscenemanagerandobjectids-when-changing-asset-serialization-mode-to-force-binary))
    
*   Build Pipeline: Fixed android build failure issue where were are getting an error message ' build destination path collides with an existing path' when triggered using Ctrl+B (Windows) or Cmd+B (macOS) keyboard shortcut. ([UUM-30911](https://issuetracker.unity3d.com/issues/mac-android-file-build-and-run-fails-with-a-prompt))
    
*   Documentation: Updated TextureImporter documentation regarding settings that are found under TextureImporterSettings. (UUM-23201)
    
*   DX12: Fixed for samplers resetting to point on streaming texture mips. (UUM-27504)
    
*   Editor: Enabled Sketchup Importer on Mac ARM platforms.
    
*   Editor: Ensure GraphicsFence.passed reports consistent results at initialization. ([UUM-27598](https://issuetracker.unity3d.com/issues/graphicsfence-dot-passed-is-passed-in-a-random-order))
    
*   Editor: Fixed a crash when importing specific FBX files with blendshapes. ([UUM-32291](https://issuetracker.unity3d.com/issues/crash-on-fbxsdk-fbxmemoryfile-open-when-importing-the-fbx-file))
    
*   Editor: Fixed an issue that thread marker in Profiler window is lasting whole frame while audio is playing. ([UUM-401](https://issuetracker.unity3d.com/issues/windows-audio-dot-thread-marker-in-profiler-window-is-lasting-whole-frame-while-audio-is-playing))
    
*   Editor: Fixed Editor freezes when clicking Prefab > Select Asset for a scene exported manually with missing information. ([UUM-30060](https://issuetracker.unity3d.com/issues/editor-freezes-when-clicking-prefab-select-asset))
    
*   Editor: Fixed inconsistent input field styling in Shortcut Manager's create and rename prompts. ([UUM-28290](https://issuetracker.unity3d.com/issues/shortcuts-create-profile-window-has-inconsistent-style-for-profile-name-field-validation))
    
*   Editor: Fixed performance issue for looping small clip with root motion extraction. ([UUM-6515](https://issuetracker.unity3d.com/issues/backport-performance-cost-of-looping-animations-increases-over-time))
    
*   Editor: Fixed several problems with speech recognition in apps using Holographic Remoting.
    
*   Editor: Fixed Timeline performance problem when previewing animated prefab instances. ([UUM-28636](https://issuetracker.unity3d.com/issues/timeline-performance-problem-when-previewing-animated-prefab-instances))
    
*   Editor: Make reserved key labels in Shortcut Manager more visible on dark skin. ([UUM-28295](https://issuetracker.unity3d.com/issues/esc-return-and-caps-lock-keys-are-barely-visible-in-the-shortcut-manager-window))
    
*   Editor: Optimized asset import logic to handle large amounts of files located in the same directory. ([UUM-17547](https://issuetracker.unity3d.com/issues/freeze-when-importing-a-large-amount-of-fbx-files))
    
*   Editor: Prevent creation of .meta files in loadable plugin directories (.androidlib, .bundle, .framework, .plugin). ([UUM-9421](https://issuetracker.unity3d.com/issues/macos-meta-files-are-created-inside-a-bundle-when-its-imported-into-the-project))
    
*   Editor: Source asset db rebuild and plugin asset reimported to fix inconsistency. (UUM-32565)
    
*   Editor: Updated Sketchup SDK to 2023.2.
    
*   GI: Fixed an issue where scene debug visualization modes would look broken when baking multiple scenes together. (UUM-17494)
    
*   GI: Fixed incorrect fallback to CPU of GPU bake. ([UUM-24685](https://issuetracker.unity3d.com/issues/leak-in-lightmap-bake-api-when-using-progressive-gpu-lightmapper))
    
*   GI: Fixed issue where lightmaps are lost when entering playmode, switching scenes, and exiting playmode. ([UUM-29735](https://issuetracker.unity3d.com/issues/lightmap-is-unassigned-when-entering-play-mode-switching-scene-and-exiting-play-mode))
    
*   GI: Fixed issue with Light Explorer filtering when many lights are present. ([UUM-30672](https://issuetracker.unity3d.com/issues/light-explorer-search-loses-focus-when-typed-into))
    
*   Graphics: Fixed an inspector issue where 2DArray and 3D textures would not report their size on disk correctly. ([UUM-28111](https://issuetracker.unity3d.com/issues/texture-size-inconsistencies-between-different-shapes))
    
*   Graphics: Fixed an issue where CubemapArrays would hit an assert in certain scenarios. (player build only). (UUM-5464)
    
*   Graphics: Fixed an issue where EditorUtility.CompressTexture would silently fail for zero-sized textures. ([UUM-16270](https://issuetracker.unity3d.com/issues/crash-when-editorutility-dot-compresstexture-is-called-with-a-texture2d-which-has-a-width-and-height-equal-to-zero), UUM-31569)
    
*   Graphics: Fixed bug with Streaming Virtual Texturing throwing a "The transcoded bitstream was invalid" error that was caused by build pipeline bug corrupting virtual texture regions located in virtual texture files larger than 2GB. When using SVT, it is recommended to rebuild your Player's build in order to get the corrected streaming files (GTS and GTP files) in the Streaming Assets folder. (UUM-30987)
    
*   Graphics: Invalid pass index error messages now include shader name. (UUM-33598)
    
*   IL2CPP: Fixed a bug where IL2CPP returns an invalid pointer on P/Invoke methods that returns a non-blittable struct by reference. ([UUM-20790](https://issuetracker.unity3d.com/issues/il2cpp-returns-a-pointer-to-the-stack-value-which-points-to-invalid-memory-when-generating-code))
    
*   IL2CPP: Fixed the bug that referenced assets are unloaded by Resources.UnloadUnusedAssets(). ([UUM-26883](https://issuetracker.unity3d.com/issues/referenced-assets-are-unloaded-by-resources-dot-unloadunusedassets-when-used-in-il2cpp-build))
    
*   iOS: Fixed memory leak when using GL.Clear in MonoBehaviour Update/LateUpdate. ([UUM-8457](https://issuetracker.unity3d.com/issues/ios-memory-leaks-when-calling-gl-dot-clear-from-update-slash-late-update))
    
*   Linux: Disabled SDL Dynamic API for SDL dependent Platforms except for Embedded and QNX. (UUM-33932)
    
*   Linux: Fixed Linux IL2CPP builds not producing stack trace. ([UUM-26705](https://issuetracker.unity3d.com/issues/linux-il2cpp-player-crash-call-stack-is-not-displayed-when-the-build-is-run-with-batchmode-nographics-arguments))
    
*   Linux: Fixed player crash in FMOD when loading ALSA drivers. (PIA-588)
    
*   Package Manager: Fixed "See other versions" button not working for preview packages when "Enable Preview Packages" is not toggled. ([UUM-28512](https://issuetracker.unity3d.com/issues/entities-package-disapears-from-the-package-manager-when-expanding-it-and-pressing-on-see-other-versions))
    
*   Package Manager: Fixed all delayed fields when editing a package in the inspector. ([UUM-19658](https://issuetracker.unity3d.com/issues/the-error-invalid-expected-a-semver-compatible-value-is-thrown-when-adding-a-dependency-in-the-inspector-with-letters-in-the-version-name))
    
*   Particles: Using floats for timers means there is huge precision loss once Unity has been running for a few hours/days. ([UUM-30775](https://issuetracker.unity3d.com/issues/particle-system-animation-changes-when-it-has-been-running-for-a-prolonged-period))
    
*   Prefabs: Fixed for Prefab instance is not enabled if RevertPropertyOverride is called during OnEnable. ([UUM-21119](https://issuetracker.unity3d.com/issues/gameobject-needs-to-be-activated-two-times-to-enable-it-when-using-prefabutility-dot-revertpropertyoverride))
    
*   Shaders: Added macros for passing textures (Cube, 2DArray, CubeArray) around without samplers. ([UUM-31858](https://issuetracker.unity3d.com/issues/unity-args-tex2darray-nosampler-doesnt-exist))
    
*   Shaders: Fixed artefacts caused by conversion of float to half point precision in certain edge cases. ([UUM-13334](https://issuetracker.unity3d.com/issues/metal-color-value-is-wrong-in-unitypermaterial-cbuffer-when-changing-color-value-with-specific-speeds))
    
*   Shaders: Fixed custom scale and offset vectors not affecting serialised texture scale and offset. ([UUM-21301](https://issuetracker.unity3d.com/issues/changes-made-to-texture-with-a-specific-a-st-property-marked-as-noscaleoffset-in-the-inspector-are-shown-but-not-saved))
    
*   Shaders: Now using real pass names when compiling shaders for mesh data optimisation. (UUM-15298)
    
*   Shaders: Shader compilation with debug symbols will no longer use a non-existent file name. (UUM-31851)
    
*   uGUI: Fixed memory leak when textures get reparented from one scene to another. ([UUM-33852](https://issuetracker.unity3d.com/issues/memory-leaks-stop-textures-from-getting-unloaded-from-memory-when-the-textures-gets-reparented-from-one-scene-to-another))
    
*   Version Control: Fixed 'Texture2D' does not contain a definition for 'ignoreMipmapLimit' error when installing Unity Version Control on previous Unity Editor Versions  
    Fixed sign in dialog style when waiting for user to complete sign in  
    Fixed NullReferenceException when opening a new project and the user doesn't have a Unity Version Control organization linked to a Unity ID.
    
*   Version Control: Fixed blurry icons in the Unity Version Control window and toolbar button  
    Fixed Pending Changes tab not always opening its selected item's location in Project window  
    Fixed "Checked-out (changed)" status icon not showing up on Pending Changes tab  
    Fixed issue that prevented new packages from being installed unless user enters play mode.
    
*   VFX Graph: Fixed a crash when logging an error messages for unexpected buffers.
    
*   Video: Internal texture queue populated by asynchronous decoding was sometimes being drained from 2 threads. Now serializing access. ([UUM-21948](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getfirstreadytexturetime-when-focusing-gameobject-in-tutorial))
    
*   Video: Multi-display rendering is displaying the first camera's view on both displays instead of displaying both camera's views when used with a mobile device. ([UUM-13587](https://issuetracker.unity3d.com/issues/multi-display-rendering-is-displaying-the-first-cameras-view-on-both-displays-instead-of-displaying-both-cameras-views-when-used-with-a-mobile-device))
    
*   Windows: Fixed quoting of the command line arguments. ([UUM-21600](https://issuetracker.unity3d.com/issues/commandline-receives-different-commands-when-passing-through-system-dot-environment-dot-commandline-method))
    
*   XR: Fixed crash or validation error caused by out-of-bounds clear on XR platforms when using Vulkan. (UUM-32721)

### End-of-Support Notice

*   Please note that the end of support for the 2020.3 LTS stream is approaching. 2020.3 will reach the end of support in May 2023 when the last patch release of the stream will be published. We expect the final version to be 2020.3.48. The 2020.3 LTS stream will remain available for installation on the Unity Hub until August 2023.

### Known Issues in 2020.3.47f1

*   DirectX12: \[macOS\] Editor freezes when saving prefab changes in Play Mode if “VSync” is enabled ([UUM-30173](https://issuetracker.unity3d.com/issues/macos-editor-freezes-when-saving-prefab-changes-in-play-mode-if-vsync-is-enabled))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   iOS: Rendering freezes when the orientation is changed ([UUM-9480](https://issuetracker.unity3d.com/issues/ios-rendering-freezes-when-the-orientation-is-changed))
    
*   Universal RP: \[URP\] Reflection Probe is black after baking when using the Blit Renderer Feature ([UUM-2631](https://issuetracker.unity3d.com/issues/urp-reflection-probe-is-black-after-baking-when-using-the-blit-renderer-feature))
    
*   Video: Crash on WindowsVideoMedia::GetFirstReadyTextureTime when focusing GameObject in Tutorial ([UUM-21948](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-getfirstreadytexturetime-when-focusing-gameobject-in-tutorial))
    
*   Windows: BuildPipeline.BuildPlayer ignores BuildPlayerOptions.locationPathName and attempts to build to the cached folder ([UUM-30952](https://issuetracker.unity3d.com/issues/buildpipeline-dot-buildplayer-ignores-buildplayeroptions-dot-locationpathname-and-attempts-to-build-to-the-cached-folder))
    

### 2020.3.47f1 Release Notes

#### Improvements

*   Package Manager: Extended support for specifying optional path and revision to Git URLs in SCP format.
    
*   Shaders: Reduced the time spent in the asset post processing code for shader assets, which speeds-up the import of shaders.
    

#### Changes

*   Package Manager: Renamed Web3 category filter in Package Manager Window for My Assets to Decentralization.

#### Fixes

*   2D: Fixed sorting of Tiles in a TilemapRenderer when the Sprites of the Tiles in the TilemapRenderer come from different Texture sources and Sprites with large vertex/index counts are rendered first due to batching. ([UUM-30749](https://issuetracker.unity3d.com/issues/tilemaps-are-rendered-incorrectly-when-rendering-tilemaps-with-the-same-orders-in-layers))
    
*   2D: Fixed Sprites generated from TextureImporter generates different hashes. ([UUM-26790](https://issuetracker.unity3d.com/issues/sprites-get-re-imported-with-different-hash-when-making-an-asset-bundle-build))
    
*   AI: Fixed inaccurate shape of NavMeshObstacles that prevent agents from avoiding them properly (only in Windows player non developpement builds). ([UUM-9814](https://issuetracker.unity3d.com/issues/windows-agent-moves-into-obstacles-when-moving-towards-the-destination-in-builds))
    
*   AI: Prevent game from freezing due to a faulty Raycast operation in the navigation system. (UUM-28701)
    
*   Android: Fixed an issue where the Accelerometer values are not updated when the ASENSOR\_TYPE\_LINEAR\_ACCELERATION sensor is disabled on certain Samsung devices. ([UUM-20754](https://issuetracker.unity3d.com/issues/android-input-dot-acceleration-doesnt-get-the-acceleration-of-some-devices-when-disabling-input-dot-gyro))
    
*   Audio: Fixed the corrupt audio playing for the first time in the first launch, when audio mixer is assigned at runtime. ([UUM-19696](https://issuetracker.unity3d.com/issues/an-audioclip-played-through-an-audiomixer-provides-different-sounds-of-the-same-audio-when-playing-for-the-first-time))
    
*   Core: Fixed Transform.GetLossyScale() returning inaccurate results (only in Windows player non developpement builds). (UUM-25239)
    
*   DX12: Fixed for crash copying sampler descriptors. (UUM-29343)
    
*   Editor: Bug fix for Shortcuts Manager to catch Shift and Options keypress. ([UUM-4083](https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-modifier-1))
    
*   Editor: Detect asset corruption before uploading to accelerator. ([UUM-26502](https://issuetracker.unity3d.com/issues/asset-corruption-when-using-the-accelerator-cache-server))
    
*   Editor: Ensuring that shader global values are taken into account when deciding what to rebake. (UUM-27392)
    
*   Editor: Fixed bug causing warning when reloading script objects.  
    Objects now keep their non-serializable state when reloaded. ([UUM-7785](https://issuetracker.unity3d.com/issues/instancedcomponent-has-been-destroyed-dot-dot-dot-error-is-thrown-when-re-entering-play-mode-after-saving-a-prefab-in-play-mode-while-domain-reload-and-scene-reload-are-disabled))
    
*   Editor: Fixed handling msaa resolve in Frame Debugger when connected to Meta Quest over display link. ([UUM-1552](https://issuetracker.unity3d.com/issues/xr-quest-2-using-the-frame-debugger-camera-dot-render-commands-are-displayed-in-red-and-black-when-msaa-is-activated))
    
*   Editor: Fixed issue when importing FBX files where memory usage grows exponentially with the amount of clips present in the file. ([UUM-22047](https://issuetracker.unity3d.com/issues/unity-editor-not-responding-and-uses-up-all-the-memory-while-opening-project))
    
*   Editor: Fixed OS key binding exception in ShortcutManager. ([UUM-4125](https://issuetracker.unity3d.com/issues/windows-keys-show-up-with-incorrect-keycodes-and-throw-errors-when-attempting-to-reassign-shortcuts-to-them))
    
*   Editor: Fixed shortcut profile delete dialog message overflow in Shortcut Manager. ([UUM-28294](https://issuetracker.unity3d.com/issues/delete-shortcut-profile-window-does-not-fit-the-size-of-the-profile-title))
    
*   Editor: Make Light Probes be affected by back-facing triangles when baking with the GPU Lightmapper. (UUM-7699)
    
*   Editor: Only change file status flags with chflags on OSX if the requested flags differ from actual. (UUM-26616)
    
*   Editor: Prevent depth resolve if camera doesn't have depth buffer. (UUM-22019)
    
*   Editor: Video: Fixed a crash when changing the source URL of a video player in Android. ([UUM-20661](https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android))
    
*   Editor: \[WebRequest\] Fix curl refcount leak in TransportCurl.
    
*   GI: Fixed an issue where lightmaps would be swapped when entering playmode when the "Reload Scene" option is disabled. ([UUM-21437](https://issuetracker.unity3d.com/issues/multiscene-lightmaps-are-swapped-when-entering-the-play-mode-for-the-first-time-after-loading-a-scene-when-reload-scene-is-disabled))
    
*   Graphics: Fixed an issue that VSync doesn't turn off when changing the quality in the Player from "High Fidelity" to "Performant". ([UUM-17522](https://issuetracker.unity3d.com/issues/vsync-doesnt-turn-off-when-changing-the-quality-in-the-player-from-high-fidelity-to-performant))
    
*   Graphics: Fixed glitches on macOS with deferred and materials not supporting deferred. ([UUM-21567](https://issuetracker.unity3d.com/issues/m1-glitches-and-graphical-artifacts-are-appearing-when-rendering-path-is-set-to-deferred-using-the-built-in-render-pipeline))
    
*   Graphics: Fixed ScreenCapture.CaptureScreenshotAsTexture result image being empty when using Vulkan graphics API. (UUM-26409)
    
*   Graphics: Product name will now be used as application name when creating Vulkan instance. ([UUM-25486](https://issuetracker.unity3d.com/issues/there-is-no-option-to-change-the-string-being-passed-when-unity-passes-the-string-to-the-vkcreateinstance-function))
    
*   IL2CPP: Fixed a potential cpp file name collision when 2 assembly names differ only by a number at the end of their name. ([UUM-27951](https://issuetracker.unity3d.com/issues/il2cpp-build-can-fail-when-2-assembly-definitions-have-similar-names))
    
*   IL2CPP: Fixed compilation error on a Reverse P/Invoke method that has a parameter that is pointer to a generic instance type. ([UUM-27026](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-after-upgrading-the-project-from-2020-dot-3-25f1))
    
*   IL2CPP: Fixed InvalidCastException is thrown when serializing jagged arrays using BinaryFormatter. ([UUM-23156](https://issuetracker.unity3d.com/issues/il2cpp-invalidcastexception-is-thrown-when-serializing-jagged-arrays-using-binaryformatter))
    
*   IL2CPP: Fixed race condition when creating generic class metadata. (UUM-26516)
    
*   Kernel: Fixed unstable test ThreadSafeLinearAllocator AllocDealloc\_On10Threads\_DoesNotCrash. (UUM-20607)
    
*   License: Fixed an issue that the Editor quits when activating ULF license and license is already there. ([UUM-31031](https://issuetracker.unity3d.com/issues/editor-quits-during-license-activation-serial-mismatch))
    
*   Linux: Fixed editor and runtime crash when certain controllers connected. ([UUM-29806](https://issuetracker.unity3d.com/issues/linux-input-system-crash-on-getgamecontrollermapping-void-star-when-gamepad-is-connected))
    
*   Linux: Fixed Mouse position is incorrect when playing build on a multiple monitor setup in full screen mode. ([UUM-26497](https://issuetracker.unity3d.com/issues/linux-mouse-position-is-incorrect-when-playing-build-on-a-multiple-monitor-setup-in-full-screen-mode))
    
*   Mono: Removed unused hardcoded credentials from web config file. ([UUM-21711](https://issuetracker.unity3d.com/issues/web-dot-config-hard-coded-login-data-still-visible-after-the-build))
    
*   Networking: UnityWebRequest: Fixed a crash when texture download receives bogus data that does not decode. ([UUM-28816](https://issuetracker.unity3d.com/issues/downloadhandlertexture-crashes-if-it-downloads-invalid-texture-data))
    
*   Package: - Android SDK Level 33 (Tiramisu) support now available.  
    
    *   Added necessary post notification permission to manifest.  
        
    *   Package will now ask for permission during initialization if required.  
        
    *   External Dependency Manager for Unity (EDM4U) and Mobile Dependency Resolver (MDR) support now available. When either is installed:  
        
    *   A new `PushSDKDependencies.xml` file is generated for them to use.  
        
    *   `InsertPushNotificationDependenciesIntoGradleScript` will not run to prevent duplication from gradle.  
        
    *   Fixed errors appearing in the Editor Play Mode due to platform specific classes instantiating.
*   Package Manager: Fixed an issue where a project with a large number of git dependencies would have resolution errors with error code 429 (Too Many Requests). The number of concurrent requests is 6 by default, but can be changed by setting the `UPM_GIT_MAX_CONCURRENT_COMMANDS` environment variable. ([UUM-6049](https://issuetracker.unity3d.com/issues/rpc-failed-http-429-curl-22-the-requested-url-returned-error-429-error-message-appears-when-executing-git-commands))
    
*   Package Manager: Fixed an issue which prevented starting UPM when a `package.json` file containing `"type": "module"` was present on any of the ancestor directories. (UUM-18512)
    
*   uGUI: Added the Min and Max conversion causing whole number sliders to conflict with the value being displayed against the value being set when dragging. ([UUM-15922](https://issuetracker.unity3d.com/issues/rangeattribute-integer-value-is-changing-slow-and-choppy-when-changing-the-value-by-dragging-the-name-of-the-field))
    
*   uGUI: Fixed an issue that "NullReferenceException" error is thrown when entering the Play Mode with >=2 open Inspectors and Canvas GameObject is selected. ([UUM-1510](https://issuetracker.unity3d.com/issues/nullreferenceexception-error-is-thrown-when-entering-the-play-mode-with-equals-2-open-inspectors-and-canvas-gameobject-is-selected))
    
*   uGUI: Instantiating a Selectable under a CanvasGroup now sets the correct interactable state. ([UUM-27611](https://issuetracker.unity3d.com/issues/the-button-is-interactable-when-instantiated-into-a-non-interactable-canvas-group))
    
*   Video: Fixed crashes when changing the source URL on some specific devices. ([UUM-29011](https://issuetracker.unity3d.com/issues/android-application-crashes-when-changing-the-source-url-of-a-video-player-in-android-v2))
    
*   Windows: Fixed for incorrect display names of certain subset of keys. ([UUM-22694](https://issuetracker.unity3d.com/issues/input-system-arrow-keys-are-displayed-as-num-when-using-arrowkey-dot-displaynames))
    
*   Windows: Fixed IME text input not being reported appropriately when users clicks away while using an IME, with the input system. The characters would be reported multiple times. (UUM-24734)

### Known Issues in 2020.3.46f1

*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Universal RP: \[URP\] Reflection Probe is black after baking when using the Blit Renderer Feature ([UUM-2631](https://issuetracker.unity3d.com/issues/urp-reflection-probe-is-black-after-baking-when-using-the-blit-renderer-feature))
    

### 2020.3.46f1 Release Notes

#### Features

*   Package Manager: Added Web3 as a Filter Category in My Assets.

#### Improvements

*   Editor: Improved performance of Transform.Find() API especially when working with large numbers of children.

#### Changes

*   Version Control: Updated branding from "Plastic SCM" to "Unity Version Control"  
    Improved offline experience by disabling the plugin when there is no internet connection.

#### Fixes

*   Android: Fixed Screen.SetResolution when using split-screen and Screen.orientation changes. ([UUM-19019](https://issuetracker.unity3d.com/issues/android-screen-dot-setresolution-doesnt-work-in-split-view-when-setting-screen-orientation-different-from-the-orientation-of-the-device))
    
*   Asset Pipeline: Fixed indeterministic output for any asset containing script types. ([UUM-22077](https://issuetracker.unity3d.com/issues/inconsistent-assetdatabase-dot-getdependencyhash-value-returned-for-unchanged-source-files-when-using-a-custom-scriptedimporter))
    
*   Build System: Fixed BuildPipeline issue for Android platform which asks for a name and directory even when it has the last saved location details, when triggered using Ctrl+B (Windows) or Cmd+B (macOS) keyboard shortcut. ([UUM-19897](https://issuetracker.unity3d.com/issues/build-and-run-asks-for-a-name-and-directory-when-it-was-previously-provided))
    
*   Core: Fixed an issue that the asset import workers will not inherit open handles from the main editor causing trouble rebinding network sockets. (UUM-939)
    
*   Editor: Added restriction to SetParent() to prevent crash. ([UUM-12399](https://issuetracker.unity3d.com/issues/crash-on-rebuildtransformhierarchy-when-setting-a-transform-parent-to-assetbundle))
    
*   Editor: Avoid GC deadlock in AndroidJavaProxy. (UUM-15968)
    
*   Editor: Fixed a crash on UpdateSharedDataSubMeshVertexRange when importing a SpeedTree file. ([UUM-25371](https://issuetracker.unity3d.com/issues/crash-on-updateshareddatasubmeshvertexrange-when-importing-a-speedtree-file))
    
*   Editor: Fixed a regression that changed the default behaviour of animators on disabled. (UUM-27229)
    
*   Editor: Fixed an issue so that the macOS Player no longer contains an empty area gap on each vertical side of the screen when rendering fullscreen on Macs with a notch. (UUM-12632)
    
*   Editor: Fixed an issue to block the ability to apply components marked with HideFlags.DontSaveInEditor to Prefab. ([UUM-21110](https://issuetracker.unity3d.com/issues/hideflags-dot-dontsave-hideflags-dot-noteditable-component-on-a-gameobject-still-allows-applying-that-component-to-a-prefab-when-there-is-a-check-if-it-is-already-on-the-gameobject))
    
*   Editor: Fixed an issue to copy hideflags to the cloned object when instantiating a GameObject. (UUM-22863)
    
*   Editor: Fixed Camera.stereoEnabled when SRP is used and fixed the Camera.stereoSeparation value.
    
*   Editor: Fixed compute shaders in editor to work independent from re-imports. ([UUM-20091](https://issuetracker.unity3d.com/issues/andorid-computer-shader-wont-be-reimported-when-graphics-api-is-changed))
    
*   Editor: Fixed editor crash when trying to build a project with corrupt compute shaders. ([UUM-25488](https://issuetracker.unity3d.com/issues/crash-on-the-unknown-line-when-building-a-specific-project))
    
*   Editor: Fixed issue where pinvoking into a native mono API on Linux would not work. (UUM-27773)
    
*   GI: Fixed a display issue and now only one GPU is available to select as the "GPU Baking Device" when multiple identical GPUs are installed. ([UUM-15155](https://issuetracker.unity3d.com/issues/only-one-gpu-is-available-to-select-as-the-gpu-baking-device-when-two-identical-gpus-are-installed-on-a-computer))
    
*   GI: Fixed an issue where emission color was erroneously reused for different renderers using the same material when they have similar lightmap UVs. ([UUM-2771](https://issuetracker.unity3d.com/issues/color-of-baked-lightmaps-is-incorrect-when-a-material-with-emission-is-present-and-generate-lightmap-uvs-is-enabled))
    
*   GI: Fixed the help link at the top of the Lighting Window. ([UUM-25787](https://issuetracker.unity3d.com/issues/the-wrong-documentation-page-is-opened-when-clicking-the-help-icon-in-the-lighting-window))
    
*   GI: Make GPU lightmapper detect Intel IRIS Xe MAX GPU with 4GB memory. ([UUM-2216](https://issuetracker.unity3d.com/issues/backport-gpu-lightmapper-isnt-detecting-the-discrete-intel-iris-xe-max-gpu-with-4gb-memory))
    
*   Graphics: Fixed a bug with Cubemap.GetPixel(CubemapFace face, int x, int y) not passing its parameters correctly. (UUM-26230)
    
*   Graphics: Fixed GraphicsFenceType not being set correctly from CommandBuffer.CreateGraphicsFence. ([UUM-11450](https://issuetracker.unity3d.com/issues/editor-can-not-determine-if-graphicsfence-has-passed-when-using-commandbuffer))
    
*   Graphics: Fixed particle system rendering corruption. ([UUM-21106](https://issuetracker.unity3d.com/issues/android-vulkan-visualisation-corruption-occurs-when-rendering-particles-to-render-texture))
    
*   Graphics: Throw an ArgumentNullException if null is passed in as a parameter to Unwrapping.GeneratePerTriangleUV. ([UUM-4614](https://issuetracker.unity3d.com/issues/crash-on-unwrapping-custom-generatepertriangleuvimpl-injected-when-passing-null-to-unwrapping-dot-generatesecondaryuvset))
    
*   Linux: Fixed Linux Editor ignoring SIGTERM signal. ([UUM-24705](https://issuetracker.unity3d.com/issues/linux-editor-ignores-sigterm-signal-when-using-command-kill))
    
*   macOS: Fixed Display systemWidth and systemHeight being wrong until window is moved to another display. ([UUM-501](https://issuetracker.unity3d.com/issues/macos-returned-systemwidth-and-systemheight-are-half-of-the-correct-values-when-using-display-dot-main))
    
*   Mobile: Fixed the touch reset in device simulator when unity remote is disconnected. ([UUM-6667](https://issuetracker.unity3d.com/issues/touch-input-is-reset-in-device-simulator-when-unity-remote-is-killed))
    
*   Scripting: Fixed an issue where the API updater was not able to apply changes to internal packages when the project controlled by Perforce. (UUM-16373)
    
*   Scripting: Fixed possible Editor hang while it waits for AssemblyUpdater when importing assemblies. ([UUM-7944](https://issuetracker.unity3d.com/issues/apiupdater-reaches-a-timeout-while-updating-assemblies))
    
*   Serialization: Fixed Binary2Text to handle complex serialized reference scenario. (UUM-1930)
    
*   uGUI: Added the slider's direction property not marking the scene dirty once this is changed when in prefab's isolation/context mode. ([UUM-20875](https://issuetracker.unity3d.com/issues/changes-made-to-direction-in-slider-controller-prefab-are-not-saved))
    
*   uGUI: Fixed an issue that the Physics2DRaycast will now use SortingGroups when determining the sorted order of its results. ([UUM-19833](https://issuetracker.unity3d.com/issues/when-raycasting-with-the-physics2draycaster-function-on-overlapped-ui-elements-the-selection-order-is-not-determined-by-the-order-in-which-they-are-rendered))
    
*   uGUI: Fixed CanvasRenderer color reset on Clear. ([UUM-3527](https://issuetracker.unity3d.com/issues/color-set-through-canvasrenderer-dot-setcolor-is-reset-when-canvasrenderer-becomes-inactive))
    
*   UI Toolkit: Fixed some memory Leak in UI Toolkit. ([UUM-16365](https://issuetracker.unity3d.com/issues/ui-toolkit-ui-documents-are-not-unloaded-correctly-when-switching-scenes))
    
*   Video: Fixed an issue to better support URLs without extension by the VideoPlayer. ([UUM-15705](https://issuetracker.unity3d.com/issues/linux-crash-on-nss-database-lookup-when-connecting-to-video-source-url))
    
*   Video: Fixed error when adding file:// to point at a local file in the VideoPlayer on Android. ([UUM-16166](https://issuetracker.unity3d.com/issues/videoplayer-dot-url-on-android-does-not-work-with-file-uri-scheme-when-using-vp8-slash-webm-file))
    
*   Windows: Fixed a potential crash during Windows Player cleanup. ([UUM-25383](https://issuetracker.unity3d.com/issues/crash-on-screenmanagerwin-recommitcursorlock-when-screenmanager-pointer-is-used))
    
*   Windows: Fixed Alt + Enter does not scale resolution/aspect ratio when going from windowed to fullscreen mode. ([UUM-16362](https://issuetracker.unity3d.com/issues/player-window-does-not-scale-resolution-slash-aspect-ratio-when-going-from-windowed-to-fullscreen-mode-by-alt-plus-enter))

### Known Issues in 2020.3.45f1

*   Asset Importers: The Editor hangs while opening a project when importing fbx assets ([UUM-26676](https://issuetracker.unity3d.com/issues/the-editor-hangs-while-opening-a-project-when-importing-fbx-assets))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    

### 2020.3.45f1 Release Notes

#### Improvements

*   Multiplayer: Added Netcode for GameObjects 1.2.0.

#### API Changes

*   Apple TV: Added: identifier for 3rd generation Apple TV 4K.
    
*   Editor: Added: Component.GetComponentInParent(Type t, bool includeInactive) method to match GameObject. ([UUM-2199](https://issuetracker.unity3d.com/issues/backport-component-dot-getcomponentinparent-doesnt-have-an-overload-for-getting-components-of-inactive-objects))
    
*   iOS: Added: identifiers for iPad models released in 2022.
    
*   Scripting: Added: New Object.FindFirstObjectByType() and Object.FindAnyObjectByType() functions added as potentially faster alternatives to Object.FindObjectOfType(). These new functions let you decide whether you must have the first (lowest InstanceID) object found or if any instance is adequate. In the latter case the function can be many times faster as no internal sorting is required. See the scripting documentation for both functions for more details.
    
*   Scripting: Added: New Object.FindObjectsByType() function added as a potentially faster alternative to Object.FindObjectsOfType(). This new function gives users the choice whether or not to perform the expensive sorting by InstanceID on the returned collection of objects rather than having it always performed wasting time when unnecessary. See the scripting documentation for Object.FindObjectsByType() and Object.FindObjectsOfType() for more details.
    
*   Version Control: Removed: Collab and its dependency from the package.
    

#### Fixes

*   2D: Added proper manual URL for GridSelection. ([UUM-20223](https://issuetracker.unity3d.com/issues/open-reference-for-grid-selection-help-button-opens-non-existing-page))
    
*   2D: Fixed a crash when there is an invalid Sprite on a Tilemap and a TilemapRenderer tries to bind the invalid Sprite to a Sprite Atlas. (UUM-19275)
    
*   2D: Fixed rendering of GameObjects in a Tile Palette window when a Scriptable Render Pipeline is used. ([UUM-22035](https://issuetracker.unity3d.com/issues/tile-palette-preview-window-shows-pink-material))
    
*   AI: Fixed an issue that passage was blocked through seemingly valid polygons after an obstacle carved the NavMesh nearby. ([UUM-8240](https://issuetracker.unity3d.com/issues/navmesh-navmeshobstacle-placed-near-the-edge-of-a-navmesh-causes-isolated-polygons-where-navmeshagents-can-get-stuck))
    
*   Android: Fixed build failing when app bundle option is enabled and output file has no extension. ([UUM-10941](https://issuetracker.unity3d.com/issues/android-build-fails-when-building-using-a-script-and-build-app-bundle-google-play-is-enabled))
    
*   Android: PermissionCallbacks.DeniedAndDontAskAgain is no longer invoked on Android 11 and later. Use Denied instead on all versions. ([UUM-20936](https://issuetracker.unity3d.com/issues/wrong-callback-after-swipe-away-the-permission-dialog))
    
*   Asset Bundles: Fixed issue where "Failed to decompress data" error occurs when loading bundle. ([UUM-6639](https://issuetracker.unity3d.com/issues/assetbundle-is-invalid-and-failed-to-decompress-data-errors-appear-after-exporting-and-importing-specific-asset-bundles))
    
*   Asset Pipeline: Elided asset import paths using ellipsis on the import dialogue if the path length exceeds maximum text width. (UUM-3657)
    
*   Audio: Updated FMOD's FLAC from version 1.2.1 to 1.3.4. This fixes an issue identified by our application security team. (UUM-400)
    
*   Build Pipeline: Fixed crash when building ScriptableObject asset in Resources folder, where source filename did not match the class name. ([UUM-21886](https://issuetracker.unity3d.com/issues/unity-editor-crashes-on-collectallserializereferencetypesandpersistentcalltargets-when-building-a-project-for-standalone-player))
    
*   Build Pipeline: Fixed static batching sorting to ensure deterministic build results. (UUM-11427)
    
*   DX12: Fixed a crash observed in e.g. HDRP sample project. ([UUM-20176](https://issuetracker.unity3d.com/issues/hdrp-template-standalone-player-crashes-after-a-few-seconds))
    
*   Editor: Camera relative culling options have been added to the Graphics section in Project Settings. This will potentially alleviate light popping issues due to lack of precision when the objects or lights are far from the origin. Enabling the camera relative culling setting for lights will potentially introduces issues for objects or lights that are far from the camera origin. ([UUM-7551](https://issuetracker.unity3d.com/issues/spot-light-flickers-when-when-its-far-from-the-origin-point))
    
*   Editor: Fixed a memory leak which would manifest when loading then unloading scenes additively. ([UUM-18684](https://issuetracker.unity3d.com/issues/memory-usage-slowly-rises-overtime-when-lightprobes-dot-tetrahedralize-is-enabled))
    
*   Editor: Fixed an Editor crash when calling API's to show modal dialogs while -drawRect is in progress. ([UUM-2293](https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-editorutility-dot-openfolderpanel-is-executed))
    
*   Editor: Fixed an issue that UI Elements property animations, as well as scheduled items, asynchronous tasks and Update() callbacks are now updated as expected when a modal editor window is opened. ([UUM-1695](https://issuetracker.unity3d.com/issues/backport-scheduled-items-asynchronous-tasks-and-update-are-not-run-when-editorwindow-is-opened-using-showmodalutility))
    
*   Editor: Fixed an issue that undo skips a value when used on values with \[CustomEditor\]. ([UUM-16740](https://issuetracker.unity3d.com/issues/2020-dot-3-undo-skips-a-value-when-used-on-values-with-customeditor))
    
*   Editor: Fixed an issue that VideoPlayer.width and height return 0 instead of expected values. ([UUM-1899](https://issuetracker.unity3d.com/issues/backport-macos-videoplayer-dot-width-and-height-returns-0-when-videoplayer-dot-texture-dot-width-and-height-returns-expected-values))
    
*   Editor: Fixed an issue to ensure scene view outline render uses the attributed main texture property name rather than the default name. ([UUM-20416](https://issuetracker.unity3d.com/issues/dot-dot-dot-doesnt-have-a-texture-property-maintex-error-when-using-gizmos-with-maintexture-attribute))
    
*   Editor: Fixed case where SetParent allowed setting transforms as parents when they are persistent. ([UUM-12399](https://issuetracker.unity3d.com/issues/crash-on-rebuildtransformhierarchy-when-setting-a-transform-parent-to-assetbundle))
    
*   Editor: Fixed determinism issue with ModelImporter where the current scene root count affects import results. (UUM-1846)
    
*   Editor: Fixed layout serialization logic: we now discard views that are not properly initialized. (UUM-21599)
    
*   Editor: Fixed use-after-free in macos menu handling. ([UUM-22680](https://issuetracker.unity3d.com/issues/macos-crash-on-cocoamainmenu-validatemenuitem-when-clicking-on-menu-bar-after-switching-languages-1))
    
*   Editor: Improved error message when an incompatible mesh is used with skinning code. ([UUM-13268](https://issuetracker.unity3d.com/issues/mesh-error-message-about-mesh-is-missing-useful-info))
    
*   Editor: OpenSSL updated to 1.1.1s. (UUM-18983)
    
*   GI: Cached the result of GetLightmapDecodeValues() to make it faster. (UUM-1943)
    
*   GI: Fixed an issue where Enlighten RTGI schedules material updates indefinitely when animating the emission color of an emissive mesh renderer. ([UUM-10037](https://issuetracker.unity3d.com/issues/enlighten-rtgi-ticks-indefinitely-after-the-emissive-color-of-a-renderer-has-been-updated-via-animation))
    
*   GI: Fixed baked lighting on terrain holes and better performance. ([UUM-1797](https://issuetracker.unity3d.com/issues/backport-cpu-baked-lightmap-shows-artifacts-when-game-object-intersects-with-terrain))
    
*   GI: Fixed issue where baking a single reflection probe could result in the wrong cubemap being associated with the wrong probe. ([UUM-20194](https://issuetracker.unity3d.com/issues/new-cubemap-is-inserted-at-the-end-of-the-array-when-baking-an-individual-probe))
    
*   Graphics: Fixed a crash by preventing race condition when opening app from floating icon state on Android. ([UUM-576](https://issuetracker.unity3d.com/issues/android-crash-with-signal-11-when-opening-app-from-floating-icon-state))
    
*   Graphics: Fixed Texture2D.UpdateExternalTexture not working on Vulkan. ([UUM-20405](https://issuetracker.unity3d.com/issues/windows-vulkan-scrambled-texture-objects-are-rendered-when-setting-one-with-texture2d-dot-updateexternaltexture))
    
*   Graphics: Improved dynamic batching of unlit shaders.
    
*   IL2CPP: Fixed Monitor.IsEntered returning true when the monitor was entered on a different thread than the current thread. ([UUM-22329](https://issuetracker.unity3d.com/issues/monitor-dot-isentered-checks-if-any-thread-holds-the-lock-when-using-il2cpp))
    
*   iOS: Fixed iOS wrong orientation output when in split view mode. ([UUM-17545](https://issuetracker.unity3d.com/issues/ios-screen-dot-orientation-reports-wrong-device-orientation-when-rotating-a-split-view-supported-ios-device-multiple-times))
    
*   Linux: Fixed SystemInfo.batteryStatus and SystemInfo.batteryLevel does not work on Linux Laptops. ([UUM-16083](https://issuetracker.unity3d.com/issues/linux-systeminfo-dot-batterystatus-slash-systeminfo-dot-batterylevel-doesnt-work-on-a-linux-laptop))
    
*   Mono: Fixed an issue to use a relative path to the gdiplus dynamic library in the dllmap entry in the config file. ([UUM-20719](https://issuetracker.unity3d.com/issues/mono-the-gdiplus-dll-mapping-has-the-bokken-machine-path-in-monobleedingedge-slash-etc-slash-mono-slash-config))
    
*   Package Manager: Added security anchor to the Scoped Registry's "Read more" link in project Settings. (UUM-25262)
    
*   Particles: Fixed a crash caused by Particle EmissionModule::Transfer handling of bursts array. (UUM-8886)
    
*   Particles: Fixed particle rendering from command buffers. ([UUM-16501](https://issuetracker.unity3d.com/issues/backport-particle-system-doesnt-get-rendered-into-a-texture-when-using-a-commandbuffer))
    
*   Physics: Fixed a crash that happened when resetting the mass properties of a disabled articulation body. ([UUM-22526](https://issuetracker.unity3d.com/issues/editor-crashes-on-updatemassdistribution-when-calling-articulationbody-dot-resetinertiatensor-in-monobehaviour-dot-ondisable))
    
*   Profiler: Fixed sorting order in Show Related Objects panel to be numerical instead of alphabetical. ([UUM-1950](https://issuetracker.unity3d.com/issues/backport-wrong-sorting-for-gc-alloc-column-in-show-related-objects-panel-of-profiler-window))
    
*   Scene/Game View: Fixed Gizmos Icons not showing. ([UUM-20432](https://issuetracker.unity3d.com/issues/gameobject-icon-disappears-when-selecting-the-gameobject))
    
*   Scene/Game View: Fixed overlapped UI elements not being picked based on the order they are rendered. ([UUM-18939](https://issuetracker.unity3d.com/issues/parent-canvas-is-selected-when-clicking-on-the-child-ugui-element))
    
*   Search: Shared the same search debouncing threshold with the project browser and the quick search window. ([UUM-1937](https://issuetracker.unity3d.com/issues/backport-project-browser-search-has-slower-response-when-compared-to-quick-search-and-hierarchy-search))
    
*   uGUI: Fixed UI Components where the test is not getting displayed after scrolling in Playmode. ([UUM-1823](https://issuetracker.unity3d.com/issues/backport-text-is-not-displayed-after-scrolling-when-a-rect-mask-2d-is-attached-to-the-scroll-view))
    
*   UI Toolkit: Added animated drag and drop support to ListView. Use reorderMode property. (UUM-2201)
    
*   Video: Fixed an issue that the first video's frame is drawn after some time when the H.264 B-Frames video is used. ([UUM-819](https://issuetracker.unity3d.com/issues/backport-android-the-first-videos-frame-is-drawn-after-some-time-when-the-h-dot-264-b-frames-video-is-used))
    
*   Video: Fixed Video Player crash/malfunction on Android versions less than 9. ([UUM-1843](https://issuetracker.unity3d.com/issues/backport-android-videoplayer-videos-are-not-played-from-url-on-specific-devices))
    
*   Video: Fixed virtual camera not playing due to DevicePath missing. ([UUM-3367](https://issuetracker.unity3d.com/issues/could-not-find-specified-video-device-error-when-using-webcamtexture-with-obs-virtual-camera))
    
*   XR: Fixed XRSettings.gameViewRenderMode does not work in SRPs. ([UUM-1963](https://issuetracker.unity3d.com/issues/backport-xr-sdk-hdrp-xrsettings-dot-gameviewrendermode-does-not-change-game-view-render-mode))

### Known Issues in 2020.3.44f1

*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).

### 2020.3.44f1 Release Notes

#### Improvements

*   Core: Improved internal handling of 8bit types, which among many other things improves the performance of AssetDatabase.FindAssets.
    
*   Editor: Improved performance of Handles.DrawAAPolyLine.
    
*   Profiler: Reduced the performance cost of drawing charts in the profiler.
    

#### Fixes

*   Fixed Autodesk FBX and SketchUp SDK vulnerabilities. ([UNITY-SEC-JAN-2023-1](https://unity.com/security/jan-2023-01))
    
*   DX12: Fixed stalls in asynchronous scene loading with a large number of reflection probes. (UUM-20766)
    
*   Editor: Fixed a crash when a window is closed during EditorWindow.OnLostFocus. ([UUM-12434](https://issuetracker.unity3d.com/issues/error-slash-crash-when-editorwindow-dot-close-is-called-in-editorwindow-dot-onlostfocus))
    
*   Editor: Fixed crash issue with very large project import when the amount of descriptors grows unusually high. ([UUM-20186](https://issuetracker.unity3d.com/issues/crash-on-gfxtaskexecutord3d12-addrequiredresourcebarriers-when-opening-the-project))
    
*   Editor: Fixed EditorWindow maximum size calculations when using a display not at integer scaling. ([UUM-12808](https://issuetracker.unity3d.com/issues/windows-custom-editorwindow-height-is-6-pixels-longer-than-the-maxsize-slash-minsize-when-its-set-to-the-biggest-slash-smallest-size))
    
*   Editor: Fixed serious Editor performance issue when running on macOS Ventura. (UUM-19011)
    
*   Editor: Fixed \[OpenGL\] Editor goes into infinite loading when the options menu in a Game View window is clicked. (UUM-6030)
    
*   Editor: Removed mapping of gamepad inputs to keyboard keys on 2020.3 for Android which were causing the input scheme to be keyboard when it should be gamepad. ([UUM-20119](https://issuetracker.unity3d.com/issues/android-playerinput-dot-currentcontrolscheme-displays-keyboard-inputcontrolscheme-when-pressing-gamepads-rb-lb-or-view-buttons))
    
*   Graphics: Added error message when capturing a screenshot into a RenderTexture but passing null for argument. (UUM-7004)
    
*   Graphics: Ensure LineRenderers and TrailRenderers with only 2 points don't vanish, if the points are close together. ([UUM-887](https://issuetracker.unity3d.com/issues/backport-linerenderer-is-not-drawn-if-the-length-is-0-dot-003162-or-less))
    
*   Graphics: Fixed a deadlock that can occur when MasterTextureLimit is changed while a texture has an in-progress upload request. (UUM-16491)
    
*   Graphics: Fixed for incorrect values in ReadPixel for some graphics formats on DirectX. ([UUM-15344](https://issuetracker.unity3d.com/issues/incorrect-values-in-readpixel-for-some-16bit-graphicsformat-when-on-windows))
    
*   Graphics: Fixed issue where editor would get stuck when importing corrupted FBX models. ([UUM-11356](https://issuetracker.unity3d.com/issues/buffermetal-allocnewversionedbuffer-exhibits-low-performance-and-high-memory-usage))
    
*   IL2CPP: Added cast support from arrays to interfaces of their reduced type (e.g. int\[\] -> IEnumerable). (UUM-16304)
    
*   IL2CPP: Fixed stackalloc to return null for zero length requests. ([UUM-15533](https://issuetracker.unity3d.com/issues/stackalloc-int-0-returns-incorrect-result-when-the-project-is-built-with-il2cpp))
    
*   IMGUI: Removed "Resolve of invalid GC handle" error occurring when exiting Play mode. ([UUM-14969](https://issuetracker.unity3d.com/issues/2020-dot-3-resolve-of-invalid-gc-handle-error-occurs-when-exiting-play-mode-after-creating-a-tilemap))
    
*   iOS: Fixed an issue that caused crashes to be reported with a date of 1st January 1970. ([UUM-18717](https://issuetracker.unity3d.com/issues/ios-crashreport-dot-text-returns-empty-strings-and-crashreport-dot-time-returns-date-1-slash-1-slash-1970-when-using-crashreport))
    
*   iOS: Fixed metal shader compilation error when using bit-shift operations to create the destination vector from the scalar source. ([UUM-16113](https://issuetracker.unity3d.com/issues/ios-macos-assertion-failed-errors-appear-when-using-bit-shift-operations))
    
*   iOS: Restored the possibility for ViewController to control status bar appearance. ([UUM-6389](https://issuetracker.unity3d.com/issues/ios-disabling-status-bar-hidden-on-devices-without-a-notch-is-not-working))
    
*   Kernel: Moved "Sending message header failed (0)" into internal logs to not spams developers. ([UUM-2612](https://issuetracker.unity3d.com/issues/android-profiler-sending-message-header-failed-0-warning-message-outputted-when-switching-profiler-connections))
    
*   macOS: Fixed new InputSystem mouse position that was not being updated after resolution change. ([UUM-10519](https://issuetracker.unity3d.com/issues/mouse-position-is-not-updated-when-screen-resolution-is-changed))
    
*   Scripting: Removed warning for obsolete platforms when added plugins to plugin folders that contains both obsolete and non-obsolete platforms. ([UUM-12246](https://issuetracker.unity3d.com/issues/cannot-set-deprecated-build-target-osxintel-warning-appears-when-setting-pluginimporters-compatible-platform-to-osx))
    
*   Shaders: Fixed an incorrect error message when using instanced rendering and replacement shaders. (UUM-20961)
    
*   Video: Fixed getting buffer overflow warning when increasing playback speed on the VideoPlayer. ([UUM-1891](https://issuetracker.unity3d.com/issues/backport-videoplayer-buffer-overflow-warnings-when-we-start-playing-vp8-video-with-increased-playback-speed))
    
*   Web: Fixed a bug on Chrome on iOS where the WebGL canvas cannot regain focus after losing it. ([UUM-1166](https://issuetracker.unity3d.com/issues/ios-chrome-ui-button-stops-working-after-opening-new-tab-and-going-back-to-unity-project-tab))
    
*   XR: Fixed crash on Quest when using MSAA and moving out of the guardian during startup. (UUM-20525)

### Known Issues in 2020.3.43f1

*   Asset - Database: Crash on GameObject::ActivateAwakeRecursivelyInternal when opening project ([UUM-17633](https://issuetracker.unity3d.com/issues/crash-on-gameobject-activateawakerecursivelyinternal-when-opening-project))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   MacOS: Crash on \_\_pthread\_kill when EditorUtility.OpenFolderPanel is executed ([UUM-2293](https://issuetracker.unity3d.com/issues/crash-on-pthread-kill-when-editorutility-dot-openfolderpanel-is-executed))
    
*   Vulkan: \[Quest2\]\[Vulkan\] ReadPixel has Black artifacts when the image is generated ([UUM-13241](https://issuetracker.unity3d.com/issues/quest2-vulkan-readpixel-has-black-artifacts-when-the-image-is-generated))
    

### 2020.3.43f1 Release Notes

#### Features

*   Editor: Added Enable PlayMode Tooltips toggle to preferences.

#### Improvements

*   Animation: Optimized AnimationClip size calculation reducing asset load time in the Editor.
    
*   Animation: Reduced the time required to load AnimationClip instances.
    
*   Editor: Improved performance of rendering the Project Settings. It would previously repeatedly query all objects loaded into the editor, which meant that operations that load assets into memory (entering playmode) would make the Project Settings unusable slow.
    
*   Graphics: Increased the maximum Async Upload Buffer Size to 2047 MB and updated docs.
    
*   Version Control: Added offline mode toggle for smoother offline experience.
    
*   Video: Report error only when the user uses MediaFoundation directly.
    

#### API Changes

*   Graphics: Added: SystemInfo.computeSubGroupSize API, allows users to query the size of the compute thread group that supports efficient memory sharing on the GPU.
    
*   Graphics: Added: SystemInfo.maxTexture3DSize API, allows users to query the largest 3D Texture size that the graphics hardware supports.
    
*   Graphics: Added: SystemInfo.maxTextureArraySlices API, allows users to query the maximum number of slices in a Texture array that the graphics hardware supports.
    

#### Fixes

*   2D: Fixed error when a Tile asset with an instanced GameObject is removed from the Tilemap during a Collider2D.OnCollision\*\*\*2D event. (UUM-15455)
    
*   2D: Fixed Sprite Mode field is empty upon changing Texture Type to Sprite in TextureImporter. ([UUM-16278](https://issuetracker.unity3d.com/issues/default-texture-settings-are-not-set-when-importing-image))
    
*   2D: Fixed Stencil broken when rendering sprites with GPU instancing on. ([UUM-15295](https://issuetracker.unity3d.com/issues/sprite-is-not-clipped-using-the-stencil-when-the-material-has-enable-gpu-instancing-enabled))
    
*   Android: Fixed error messages when hideInput is enabled in TouchScreenKeyboard. ([UUM-15609](https://issuetracker.unity3d.com/issues/touchscreenkeyboard-dot-hideinput-triggers-numerous-errors-and-breaks-function-when-built-for-android))
    
*   Android: When running Android SDK tool with elevated privileges use JDK bundled with Unity, previous behavior was the SDK tool would use java from PATH env variable, and would fail if there's no java installed and there's no java path set in PATH env variable. ([UUM-1942](https://issuetracker.unity3d.com/issues/backport-android-windows-getting-unable-to-install-additional-sdk-when-java-is-not-installed-onto-windows-machine))
    
*   Animation: Fixed issue where, for some playable graphs, the animated displacement of the animated game object would keep accumulating when the game object was disabled and enabled. The original behaviour can be restored with the keepAnimatorStateOnDisable variable. ([UUM-3486](https://issuetracker.unity3d.com/issues/playables-lose-the-animator-state-when-disabling-a-gameobject-with-playables-attached-to-an-animator))
    
*   Asset Bundles: Fixed issue where empty folders remained in the cache. ([UUM-15702](https://issuetracker.unity3d.com/issues/empty-folders-are-left-when-the-cache-is-cleaned))
    
*   Core: Dynamic Heap Allocator now holds on to one empty block to increase performance. ([UUM-1849](https://issuetracker.unity3d.com/issues/backport-slower-performance-of-instantiate-when-using-it-in-a-build-compared-to-the-editor))
    
*   Editor: Fixed an issue to causing too many open files errors when uploading to Accelerator. ([UUM-19028](https://issuetracker.unity3d.com/issues/case-1389792-too-many-files-open))
    
*   Editor: Fixed an issue to ensure context view context can't be duplicated, copied or cut. ([UUM-2655](https://issuetracker.unity3d.com/issues/prefab-opened-in-context-can-have-its-root-duplicated-creating-uninteractable-gameobjects-that-dont-get-saved-with-the-prefab-1))
    
*   Editor: Fixed an issue where AssetDatabase.FindAssets would return invalid results when specifying multiple search folders. ([UUM-19314](https://issuetracker.unity3d.com/issues/probuilder-srp-wrong-material-assigned-to-probuilder-shape-upon-creation))
    
*   Editor: Fixed Assertion failed on expression: 'offsetIndex != -1' when loading scenes with async light probe tetrahedralization. ([UUM-17831](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-offsetindex-equals-1-when-loading-scenes-with-async-light-probe-tetrahedralization))
    
*   Editor: Fixed Highlighter.Highlight does not disappear when the highlighted element disappears from view. ([UUM-3535](https://issuetracker.unity3d.com/issues/highlighter-dot-highlight-does-not-disappear-when-the-highlighted-element-disappears-from-view))
    
*   Editor: Removed Exported define from SearchService to avoid domain reload. (UUM-18922)
    
*   GI: Fixed lightprobes getting direct lighting in subtractive mode. ([UUM-1344](https://issuetracker.unity3d.com/issues/mixed-point-slash-spot-lights-with-shadows-disabled-are-baking-direct-light-into-light-probes-on-subtractive-lighting))
    
*   Graphics: Added safe-guards to prevent GetPixels / GetPixels32 crashes in cases where C# array creation would fail.
    
*   Graphics: Fixed a bug where ReadPixels would fail for textures larger than 2 GB.
    
*   Graphics: Fixed crash when creating a RenderTexture with dimensions exceeding the capabilities of the current graphics device. ([UUM-5459](https://issuetracker.unity3d.com/issues/backport-macos-crash-on-pthread-kill-when-render-texture-has-no-depth-buffer-and-dimension-is-3d))
    
*   Graphics: Fixed cubemap uploads failing on Vulkan, D3D11 and D3D12 for cubemaps larger than 2 GB.
    
*   Graphics: Fixed GetPixelData / SetPixelData failing for textures larger than 2 GB. Added safe-guards to prevent NativeArray length overflows for the former API.
    
*   Graphics: Fixed LoadRawTextureData failing when the input NativeArray contained more than 2 GB of data. Added safe-guards to GetRawTextureData. (prevent NativeArray length overflow and C# array creation failure).
    
*   Graphics: Fixed mapped index debug error when rendering null geometry. (UUM-11997)
    
*   Graphics: Fixed RenderTexture assets not accepting texture dimensions greater than 20000 in UI, even though they currently can already go up to 32768 in script if the graphics capabilities allow for it.
    
*   Graphics: Fixed the mip bias setting on DX11. ([UUM-879](https://issuetracker.unity3d.com/issues/backport-repeat-texture-wrap-mode-set-through-textureimporter-in-assetpostprocessor-behaves-like-clamp-when-mipmapbias-is-set))
    
*   Graphics: Fixed the Read/Write texture import setting becoming grayed out when "Max Size" was greater than 8192, regardless of actual texture dimensions or size. Replaced with an info box when enabling "Read/Write" that triggers if Unity detects a >512MB texture.
    
*   Graphics: Prevent a crash on some platforms when the mesh buffers do not exist on a MeshRenderer. ([UUM-4150](https://issuetracker.unity3d.com/issues/android-instantiating-a-mesh-with-r-slash-w-disabled-causes-crash))
    
*   Graphics: Removed code to get vertex decl for null geometry in DX12. (UUM-1802)
    
*   Graphics: Texture 3D Preview (Volume / SDF mode) now becomes disabled if Unity detects a potential driver hang risk. Fixed an assert incorrectly being triggered when inspecting external Texture 3Ds.
    
*   IL2CPP: Allow constrained calls on stackalloc'd buffers. (UUM-14341)
    
*   IL2CPP: Avoid a possible race condition when the garbage collector is enabled or disabled that could cause it to become permanently disabled. (UUM-16300)
    
*   IL2CPP: Corrected the behavior of the System.IO.Compression.ZipArchive API. ([UUM-14582](https://issuetracker.unity3d.com/issues/il2cpp-test-fails-when-writing-a-ziparchive-into-a-ziparchiveentry-within-a-parent-ziparchive))
    
*   IL2CPP: Fixed occasional missing stack traces in Debug.Log's on Windows 10. ([UUM-12672](https://issuetracker.unity3d.com/issues/multithreaded-builds-sometimes-dont-print-the-stack-trace-when-using-il2cpp-scripting-backend))
    
*   IL2CPP: Monitor.Wait with zero timeout should return false. ([UUM-18188](https://issuetracker.unity3d.com/issues/monitor-dot-wait-returns-false-when-running-tests-with-il2cpp))
    
*   iOS: Fixed SystemInfo returning incorrect values for max compute buffer inputs on Metal. ([UUM-1939](https://issuetracker.unity3d.com/issues/backport-metal-unity-returns-that-it-only-supports-8-compute-buffers-with-metal-graphics-api-when-it-actually-supports-32))
    
*   iOS: Fixed unity view behavior when in "split view". ([UUM-9081](https://issuetracker.unity3d.com/issues/ios-players-resolution-changes-when-opening-a-scene-with-a-different-orientation-if-using-split-view))
    
*   License: Make Unity build deterministic when using floating licenses. ([UUM-18489](https://issuetracker.unity3d.com/issues/unity-builds-not-deterministic-when-using-a-different-machine-or-a-floating-license))
    
*   Linux: Fixed Multi Display mouse/touch input registers incorrectly on Linux Standalone player. (UUM-1569)
    
*   macOS: Removed developer placeholder text from progress dialog. (UUM-18221)
    
*   Networking: Fixed race condition between DownloadHandlerTexture and Resources.UnloadUnusedAssets, sometimes cause premature destruction of the texture. (UUM-18044)
    
*   Package Manager: Package documentation links pointing to private Github URLs can now be opened in browser for non-Unity packages. Additionally, for all packages in general, opening local documentation will fall back on the README file if a documentation.md file cannot be found. ([UUM-8337](https://issuetracker.unity3d.com/issues/documentationurl-and-changelogurl-is-ignored-when-package-is-located-in-private-repositorie))
    
*   Package Manager: Package manager window becomes unusable when installing the test framework package 1.3.0. (UUM-20659)
    
*   Particles: Fixed an emit from script bug when emitting particles from LateUpdate during Edit Mode. ([UUM-1920](https://issuetracker.unity3d.com/issues/backport-shuriken-emitparams-getting-overwritten-with-empty-values-when-using-emit-in-editmode))
    
*   Particles: Fixed an issue whereby baking a particle mesh after calling mesh->Clear(false) could throw errors. ([UUM-8489](https://issuetracker.unity3d.com/issues/particlesystemrenderer-bakemesh-method-throws-out-of-bounds-arguments-error-when-invoked))
    
*   Particles: Fixed SetParticles API sometimes failing to emit the correct number of particles. ([UUM-17027](https://issuetracker.unity3d.com/issues/particlesystem-does-not-add-all-particles-when-a-large-number-of-particle-systems-exist-in-a-scene))
    
*   Prefabs: Fixed Rect tool is enabled for root Prefab in Context mode. Now it behaves similar to the other Transform tools. ([UUM-16728](https://issuetracker.unity3d.com/issues/position-rotation-and-scale-of-prefabs-can-be-manipulated-in-context-using-the-rect-transform-tool))
    
*   Profiler: Fixed a freeze caused when opening profiler data recorded on Editor versions 2019.4.28f1 and prior. ([UUM-2234](https://issuetracker.unity3d.com/issues/profiler-freezes-when-loading-profiler-data-that-was-saved-in-unity-2019-dot-4-28f1-or-earlier))
    
*   Profiler: Fixed ProfilerMarker initialization and usage in Release players. (UUM-9541)
    
*   Profiler: Fixed rendering of certain character sets in CPU Profiler Timeline view. ([UUM-16513](https://issuetracker.unity3d.com/issues/profiler-does-not-support-characters-when-utf8-encoding-is-used))
    
*   Serialization: Fixed performance regression reading yaml objects containing large number of SerializeReference instances which were created prior to 2021.2. ([UUM-15130](https://issuetracker.unity3d.com/issues/serializereference-content-in-yaml-from-prior-to-2021-dot-2-takes-much-longer-to-load))
    
*   Shaders: Fixed an incorrect error when drawing an instanced mesh and async shader compilation was enabled. ([UUM-13174](https://issuetracker.unity3d.com/issues/drawmeshinstanced-does-not-support-dot-dot-dot-error-in-the-console-pops-up-when-the-shader-does-support-instanced-rendering))
    
*   Shaders: Fixed reflection probe rendering silently being skipped when the required shader is not found in the player. ([UUM-12628](https://issuetracker.unity3d.com/issues/realtime-reflections-silently-fail-when-hidden-slash-cube-star-shaders-arent-included))
    
*   Shaders: Fixed Texture and Vector material properties not supporting displaying tooltips. ([UUM-5691](https://issuetracker.unity3d.com/issues/tooltip-doesnt-appear-when-hovering-over-a-materials-property-in-the-inspector))
    
*   uGUI: Updated the Raycast Target property at runtime even if started as disabled. ([UUM-2221](https://issuetracker.unity3d.com/issues/backport-animated-image-property-raycast-target-does-not-function-when-disabled-before-entering-play-mode))
    
*   UI Toolkit: Fixed an error when searching in the UI Debugger and UI element has a null name. ([UUM-18683](https://issuetracker.unity3d.com/issues/uitoolkit-nullreferenceexception-is-thrown-when-searching-in-the-debugger-and-ui-element-has-a-null-name))
    
*   UI Toolkit: Fixed shader bug observable on macOS Ventura with AMD gpus that was causing Graphview (e.g. Shader Graph, VFX Editor) edges to be missing. ([UUM-19016](https://issuetracker.unity3d.com/issues/ventura-intel-shader-graph-nodes-connections-are-not-visible-when-using-macos-13-dot-0-ventura))
    
*   UI Toolkit: Fixed shader bug observable on macOS Ventura with AMD gpus that was causing UIToolkit elements to be missing, clipped or to display incorrectly. ([UUM-18978](https://issuetracker.unity3d.com/issues/labels-and-icons-are-missing-when-using-macos-13-dot-0-ventura))
    
*   UI Toolkit: Fixed UIToolkit rendering white squares instead of text or pictures. ([UUM-18891](https://issuetracker.unity3d.com/issues/text-is-replaced-with-white-squares-when-opening-package-manager))
    
*   Version Control: Fixed performance issue with FindWorkspaceForPath method called multiple times every frame  
    Fixed performance issue with UI.CooldownWindowDelayer.OnUpdate running on project without Plastic SCM workspace.
    
*   Video: Removed spike on the main thread when changing the video clip. ([UUM-878](https://issuetracker.unity3d.com/issues/backport-android-cpu-spike-occurs-on-videoplayer-dot-destroyplayback-when-stop-is-called-on-the-videoplayer-or-a-clip-is-changed))
    
*   Video: Video is displayed with one frame delay when videoPlayer.Play() is called. ([UUM-15543](https://issuetracker.unity3d.com/issues/video-is-displayed-with-one-frame-delay-when-videoplayer-dot-play-is-called-1))
    
*   Web: Updated UglifyJS from 2.7.5 to 3.17.0. (UUM-6914)
    
*   WebGL: Fixed error handling of AudioContext.resume(). (UUM-17803)
    
*   Windows: When full stack traces are enabled on Windows, we will no longer try to resolve symbols from the symbol server, preventing a potential stall the first time a stack trace is printed. ([UUM-11802](https://issuetracker.unity3d.com/issues/stackwalker-is-misconfigured-to-downloads-symbols-from-symbol-servers))
    
*   XR: Fixed VR rendering stops issue when losing focus.

### Known Issues in 2020.3.42f1

*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   MacOS: \[M1\]\[Rosseta\] Editor crashes on mono\_arch\_patch\_callsite when entering the Play Mode ([UUM-10411](https://issuetracker.unity3d.com/issues/m1-rosseta-editor-crashes-on-mono-arch-patch-callsite-when-entering-the-play-mode))
    
*   Vulkan: \[Quest2\]\[Vulkan\] ReadPixel has Black artifacts when the image is generated ([UUM-13241](https://issuetracker.unity3d.com/issues/quest2-vulkan-readpixel-has-black-artifacts-when-the-image-is-generated))
    

### 2020.3.42f1 Release Notes

#### Features

*   Input System: Backport for Windows Gaming Input implementation allowing 5+ xbox controllers at the time.

#### Improvements

*   2D: \[com.unity.2d.animation\] The visibility tab now scrolls to the selected bone in the Skinning editor.
    
*   Animation: Further improvements to animation job performance (esp. some forms of IK).
    
*   Editor: Reduced the time taken by AssetDatabase.FindAssets when used with a custom filter, speeding up domain reloads and other editor operations that made the poor choice of calling this function in the first place.
    
*   Graphics: Improved AlphaIsTransparency API docs and tooltip. ([UUM-2364](https://issuetracker.unity3d.com/issues/color-artifacts-in-imported-textures-when-alpha-source-is-set-to-input-texture-alpha))
    
*   Multiplayer: Added Netcode for GameObjects 1.0.2.
    
*   Package: Updated version of com.unity.learn.iet-framework to 3.1.1.
    
*   Package: Updated version of com.unity.learn.iet-framework.authoring to 1.2.1.
    
*   Profiler: Improved performance of rendering the CPU timeline view when viewing large captures.
    

#### Changes

*   2D: \[com.unity.2d.animation\] Updated Toolbar and Visibility tab buttons' selection color.
    
*   Editor: Updated manifest.json to use com.unity.inputsystem package version 1.4.3.
    
*   Version Control: Changed the "Go back to changeset" option in Changesets tab to "Revert to changeset"  
    Improved notification banner appearance.
    
*   XR: The Oculus XR Plugin package has been updated to 1.13.0.
    
*   XR: Updated com.xr.sdk.openxr package version to 1.5.3.
    

#### Fixes

*   2D: Fixed regression where GameObjects are not instantiated by Tiles when the Tilemap is not active. ([UUM-14293](https://issuetracker.unity3d.com/issues/tilemap-dot-settiles-doesnt-work-when-the-gameobject-is-deactivated))
    
*   2D: Fixed result of the Tilemap.GetCellCenterLocal/World API for a Hexagonal Grid and a large Tile Anchor offset.
    
*   2D: Fixed Sprite Editor causes error when editing sprites in playmode. (UUM-12181)
    
*   2D: Updated API docs to reflect the behaviour of setting SpriteRenderer.size property. ([UUM-13795](https://issuetracker.unity3d.com/issues/targetrenderer-dot-size-returns-wrong-value-when-setting-targetrenderer-dot-sprite-to-null))
    
*   2D: \[com.unity.2d.animation\] Fixed an issue where the Sprite Skin editor would throw an exception if Sprite Renderer doesn't have a Sprite assigned to it.
    
*   2D: \[com.unity.2d.animation\] Fixed IK Manager 2D's inspector slow downs.
    
*   Android: Fixed crash if Java proxy is invoked at the same time as Unity is quit. (UUM-15968)
    
*   Android: Fixed for permissions request hang in pre-marshmellow (Android 6). ([UUM-15567](https://issuetracker.unity3d.com/issues/android-5-dot-1-player-is-stuck-on-splash-screen-when-opening-a-specific-project))
    
*   Android: Fixed infinite loop when requesting for runtime permission that is automatically rejected by the OS. (UUM-15923)
    
*   Android: InputView is not clickable when isInputFieldHidden AND !mConsumeOutsideTouches. ([UUM-16292](https://issuetracker.unity3d.com/issues/android-keyboard-gets-hidden-when-the-input-field-area-is-clicked-and-touchscreenkeyboard-dot-hideinput-is-set-to-true))
    
*   Android: Used fixed instancing batch size on PowerVR GPUs on Android with OpenGL ES to avoid long compile times in shader warmup. ([UUM-739](https://issuetracker.unity3d.com/issues/shader-variants-causes-freeze-on-android-devices-with-powervr-gpu-when-gpu-instancing-is-enabled))
    
*   Android: Workaround for crash on many PowerVR based devices. ([UUM-7782](https://issuetracker.unity3d.com/issues/android-urp-project-crashes-when-built-on-a-device-with-powervr-rogue-ge8320-gpu))
    
*   DX12: Fixed single frame flicker which can occur when streaming textures. (UUM-15646)
    
*   Editor: Fixed an issue where TextureImporter.GetPlatformTextureSettings would not perform fix-up on the platform string argument correctly. ([UUM-15361](https://issuetracker.unity3d.com/issues/unable-to-get-textureoverridesettings-from-buildpipeline-dot-getbuildtargetname-when-trying-to-pass-in-the-platform-string))
    
*   Editor: Fixed gizmo rendering of a selected area in a Hexagonal Grid with a non-zero Z position. (UUM-11308)
    
*   Editor: Fixed Mac Editor crash that happened in multi-scene builds that were using BuildOptions.DetailedBuildReport. ([UUM-1964](https://issuetracker.unity3d.com/issues/android-segmentation-fault-11-error-is-thrown-when-project-is-built-using-batch-mode))
    
*   Editor: Fixed the 'texture scheduled for reimport during Refresh Loop' error when importing SpeedTree assets with color textures. (UUM-9835)
    
*   Editor: Frame Debugger: Fixed an issue where the window would constantly refresh when debugging a remote device. ([UUM-4096](https://issuetracker.unity3d.com/issues/mobile-frame-debugger-constantly-refreshes-when-making-a-ui-update-for-frame-debug-window))
    
*   Editor: Installing Linux mono and IL2CPP support on mac will no longer keep only the most recently installed of the two. ([UUM-1696](https://issuetracker.unity3d.com/issues/backport-macos-targetsupport-installers-for-linux-overwrite-their-content))
    
*   Editor: \[SpeedTree\] ExtraTexture texture is no longer marked sRGB (Color Data) when imported with a SpeedTree asset. (UUM-10912)
    
*   GI: Added proper clamping of Lightmap Streaming Priority in Player Settings window. ([UUM-10016](https://issuetracker.unity3d.com/issues/lightmap-streaming-priority-fields-value-doesnt-change-when-an-unacceptable-value-is-entered))
    
*   GI: Fixed an issue where environment lighting is missing from player builds when the scene hasn't been baked. ([UUM-2743](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time-1))
    
*   GI: Fixed failing assert by relaxing precision requirement in Ray's IsNormalized check. ([UUM-2787](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-isnormalized-on-guiutility-processevent-when-the-directional-light-is-positioned-particularly))
    
*   Graphics: Fixed an issue where creating SparseTextures with certain TextureFormats could crash Unity, even though the equivalent GraphicsFormat is marked as unsupported for SparseTextures. (UUM-7671)
    
*   Graphics: Fixed an issue where SystemInfo.IsFormatSupported((My GraphicsFormat), FormatUsage.Sparse) would always return false on Metal, even if the requested GraphicsFormat actually is supported. (UUM-7671)
    
*   Graphics: Fixed an issue where the D3D11 WARP driver would crash when creating a SparseTexture with the BC1/BC4 GraphicsFormats. (UUM-7664)
    
*   Graphics: Fixed an issue where using TextureFormat.YUY2 / GraphicsFormat.YUV2 with a SparseTexture would crash on Metal. (if sparse textures are supported). (UUM-7671)
    
*   Graphics: Fixed BatchRendererGroup TempJob memory leak in special rendering situations like HDRP AOV rendering. ([UUM-16733](https://issuetracker.unity3d.com/issues/jobtempalloc-has-allocations-that-are-more-than-4-frames-old-warnings-are-thrown-when-using-aovrequest-and-batchrenderergroup))
    
*   Graphics: Fixed bug where in some situations the AsyncUploadBuffer was not persisting even when QualitySettings.asyncUploadPersistentBuffer was set to true. ([UUM-15961](https://issuetracker.unity3d.com/issues/backport-ios-npot-textures-without-compression-uses-more-memory-than-a-regular-texture))
    
*   IL2CPP: Do not inflate RGCTX for types and methods with non-inflated generic parameters. ([UUM-6057](https://issuetracker.unity3d.com/issues/macos-il2cpp-build-crashes-when-running))
    
*   iOS: Added support for the Swift Remote Packages in XCode project API. Added PBXProject API to add to references to them, namely AddRemotePackageReferenceAtBranch, AddRemotePackageReferenceAtRevision, AddRemotePackageReferenceAtVersion, AddRemotePackageReferenceAtVersionUpToNextMajor, AddRemotePackageReferenceAtVersionUpToNextMinor, AddRemotePackageReferenceWithVersionRange. Also added way to add framework from the remote package with AddRemotePackageFrameworkToProject. (UUM-15082)
    
*   Kernel: Fixed AssertOnRecursiveCall with tests. ([UUM-13234](https://issuetracker.unity3d.com/issues/assertonrecursivecall-dot-does-not-works))
    
*   Linux: Fixed "Not Responding" dialog window opens up in the Player when the splash screen duration is long. ([UUM-1907](https://issuetracker.unity3d.com/issues/backport-linux-a-not-responding-dialog-window-opens-up-in-the-player-when-the-splash-screens-logo-duration-is-set-to-4-dot-65))
    
*   Linux: Fixed New Input middle mouse button clicks registers scrolling. (UUM-14359)
    
*   Linux: Fixed scrolling with the scroll wheel is slower on builds when using the New Input System package on Linux Standalone. ([UUM-12564](https://issuetracker.unity3d.com/issues/linux-scrolling-with-the-scroll-wheel-is-slower-on-builds-when-using-the-new-input-system-package))
    
*   Linux: Fixed second cursor appearing when toggling between hardware and software cursor modes on Standalone player. ([UUM-1594](https://issuetracker.unity3d.com/issues/linux-second-cursor-appears-in-build-after-setting-cursor-visibility-to-false-and-true-while-using-cursormode-dot-forcesoftware))
    
*   macOS: Fixed duplicated keys in Input.inputString. ([UUM-16427](https://issuetracker.unity3d.com/issues/2020-dot-3-macos-pressed-key-gets-duplicated-when-printing-it-with-input-dot-inputstring))
    
*   Package Manager: Fixed an issue where .unitypackage dependencies exported from an older editor were not updated when importing in a newer editor. ([UUM-15081](https://issuetracker.unity3d.com/issues/importing-a-unitypackage-does-not-upgrade-its-dependencies-using-the-editor-manifest-based-upgrade-logic))
    
*   Package Manager: Removed confusing package type in the inspector. ([UUM-1837](https://issuetracker.unity3d.com/issues/backport-remove-confusing-message-from-package-inspector-window-this-package-and-all-its-assets-will-be-dot-dot-dot))
    
*   Particles: Fixed invert culling api when used with Particle Systems. ([UUM-890](https://issuetracker.unity3d.com/issues/particle-system-effects-are-not-flipped-inside-out-when-using-the-gl-dot-invertculling-function))
    
*   Physics: Fixed ArticulationBody indices not matching when using methods like GetJointPositions and GetDriveTargets. ([UUM-1805](https://issuetracker.unity3d.com/issues/backport-data-indices-dont-match-when-using-articulationbody-getdrivetargets-and-getjointpositions))
    
*   Physics: Fixed ArticulationBody SetDriveTargets and SetDriveTargetVelocities methods checking List capacity instead of count and improved the error message. ([UUM-12713](https://issuetracker.unity3d.com/issues/supplied-list-capacity-is-being-checked-instead-of-count-when-calling-articulationbody-dot-setdrivertargets-slash-setdrivetargetvelocities))
    
*   Physics: Fixed Physics Debugger not showing up in Prefab Mode. ([UUM-2215](https://issuetracker.unity3d.com/issues/backport-physics-debug-visualisation-is-not-displayed-when-prefab-is-opened-in-isolation))
    
*   PS4: Fixed the Param File Package Category Setting not being correctly overridden when a custom param file override was set in the Player Settings. (UUM-17357)
    
*   Scripting: When using ObjectFactory.CreateInstance with a custom type deriving directly from UnityEngine.Object, a clearer exception message is thrown. ([UUM-7896](https://issuetracker.unity3d.com/issues/argumentexception-thrown-when-calling-objectfactory-dot-createinstance-with-a-custom-class-inheriting-from-unityengine-dot-object-1))
    
*   Serialization: Fixed regression where if a mesh was used in VFX and included in an AssetBundle there could be indeterminism in its streaming info offset field. ([UUM-12721](https://issuetracker.unity3d.com/issues/assetbundle-indeterminism-caused-by-mesh-streaming-info))
    
*   Shaders: Fixed a rare crash when opening a project with compute shaders. ([UUM-10259](https://issuetracker.unity3d.com/issues/crash-on-setcurrentmemoryowner-when-opening-the-project))
    
*   Shaders: Material.SetOverrideTag will now warn when trying to override LightMode. ([UUM-11988](https://issuetracker.unity3d.com/issues/material-dot-setoverridetag-setting-lightmode-tag-has-no-effect))
    
*   Version Control: Fixed editor refresh triggering when a workspace update is in progress  
    Fixed pending changes show global ignored as private  
    Removed encryption checkbox from create organization dialog.
    
*   Video: Editor crashes when playing a video file with 14 audio tracks in Play mode. ([UUM-861](https://issuetracker.unity3d.com/issues/backport-editor-crashes-when-playing-a-video-file-with-14-audio-tracks-in-play-mode))
    
*   Video: VideoPlayer throws errors when VideoClip loaded from AssetBundle nears the end. ([UUM-1888](https://issuetracker.unity3d.com/issues/backport-videoplayer-throws-errors-when-videoclip-loaded-from-assetbundle-nears-the-end))
    
*   Video: \[WebGL\] Video Player updates to a previously sought frame when seeking a paused video. ([UUM-11808](https://issuetracker.unity3d.com/issues/webgl-video-player-updates-to-a-previously-sought-frame-when-seeking-a-paused-video))
    
*   Web: Allow "Name Files As Hashes" option for WebGL Development builds. ([UUM-1133](https://issuetracker.unity3d.com/issues/name-files-as-hashes-doesnt-work-when-building-a-development-build-player-on-the-webgl-platform))
    
*   WebGL: Added fallback configuration for company name, product name and product version to ensure the web cache is always enabled. (UUM-3944)
    
*   WebGL: Fixed bug where the old input system wasn't recognizing stationary touch input. ([UUM-1137](https://issuetracker.unity3d.com/issues/webgl-touchphase-dot-stationary-not-working-on-webgl-build))
    
*   WebGL: Fixed connection between the WebGL player and the profiler. ([UUM-798](https://issuetracker.unity3d.com/issues/backport-webgl-profiler-does-not-autoconnect-on-webgl-builds))
    
*   WebGL: Fixed player connection used when running PlayMode tests on WebGL. ([UUM-1170](https://issuetracker.unity3d.com/issues/webgl-chrome-the-message-header-is-corrupted-and-for-security-reasons-connection-will-be-terminated-dot-errors))
    
*   Windows: Fixed cursor position not updated when using pen tablet with Windows Ink enabled. ([UUM-10258](https://issuetracker.unity3d.com/issues/cursor-position-does-not-update-when-using-pen-tablet-with-windows-ink-enabled))
    
*   Windows: Fixed IL2CPP runtime compilation failing when building C++ code using Visual Studio 2022 17.4 or newer. ([UUM-17921](https://issuetracker.unity3d.com/issues/il2cpp-windows-builds-fails-when-using-vs-2022-17-dot-4-0-preview))
    
*   Windows: Fixed Input.mousePosition not updated when using a tablet. ([UUM-11989](https://issuetracker.unity3d.com/issues/input-dot-mouseposition-does-not-update-when-using-a-tablet-1))
    
*   Windows: Windows player executable no longer contains "Unity playback engine" text in its property sheets. ([UUM-15330](https://issuetracker.unity3d.com/issues/windows-player-exe-contains-unwanted-properties-causing-text-unity-playback-engine-to-appear-in-task-bar-when-mousing-over-it))

### Known Issues in 2020.3.41f1

*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Vulkan: \[Quest2\]\[Vulkan\] ReadPixel has Black artifacts when the image is generated ([UUM-13241](https://issuetracker.unity3d.com/issues/quest2-vulkan-readpixel-has-black-artifacts-when-the-image-is-generated))
    
*   XR SRP: Meta Quest performance loss between URP versions when built ([UUM-15608](https://issuetracker.unity3d.com/issues/meta-quest-performance-loss-between-urp-versions-when-built))
    

### 2020.3.41f1 Release Notes

#### Features

*   Editor: Add the possibility of running tests in a specified order from a test list (DSTR-494).

#### Improvements

*   Animation: Improved animation performance across the board

#### Fixes

*   2D: Fixed a case where multi selecting Sprite Skins would cause a null reference exception to be thrown. (DANB-126)
    
*   2D: Fixed a case where setting IKManager2D's or Solver2D's weight to '0' doesn't update solver's effector position.
    
*   2D: Fixed an issue where selecting bones in the Skinning Editor after removing any bone in the skeleton will throw an exception.
    
*   2D: Fixed TexturePlatformSettings exception. ([DANB-194](https://issuetracker.unity3d.com/issues/2020-dot-3-nullreferenceexception-is-thrown-when-selecting-a-psb-file-in-the-project-browser))
    
*   2D: Update TexturePlatformSettings implementation.
    
*   Android: Fixed exporting Android Studio project to non-existing folder using Editor API. ([UUM-1886](https://issuetracker.unity3d.com/issues/backport-buildpipeline-dot-buildplayer-throws-the-build-cannot-be-appended-exception-when-using-acceptexternalmodificationstopla))
    
*   Android: Incremental GC setting will be correctly applied for Export Project. build.gradle BuildIl2Cpp task was missing --incremental-g-c-time-slice flag. ([UUM-2222](https://issuetracker.unity3d.com/issues/backport-android-incremental-gc-isnt-enabled-when-exporting-a-gradle-project))
    
*   Android: New Input System's Keyboard class will treat DPad Center button clicks as Key.Enter. Since that's hold the old input was treating them. ([UUM-882](https://issuetracker.unity3d.com/issues/backport-input-system-unity-does-not-register-amazon-fire-tv-remotes-d-pad-center-button-press))
    
*   Asset Pipeline: Fixed intermittent Accelerator disconnection caused by interrupt signals raised by Mono. (UUM-3655)
    
*   Asset Pipeline: Prefab preview is getting updated when change in material color. ([UUM-2226](https://issuetracker.unity3d.com/issues/backport-previews-prefab-preview-is-not-updating-when-change-material-color))
    
*   Build Pipeline: Fixed edge case where isDebugBuild would not revert to true after the build. ([UUM-12064](https://issuetracker.unity3d.com/issues/isdebugbuild-returns-false-in-the-editor-when-its-value-is-checked-after-a-build-1))
    
*   Editor: Add warning log when the size of a Sprite in a Secondary Texture used in a Sprite Atlas does not match its size in the Main Texture. ([UUM-11164](https://issuetracker.unity3d.com/issues/the-normal-map-on-the-tilemap-stops-working-after-pressing-the-play-button))
    
*   Editor: Fixed EditorUtility.DisplayDialog layout after showing dialog with a long text. ([UUM-9447](https://issuetracker.unity3d.com/issues/macos-editorutility-dot-displaydialog-dialog-layout-gets-corrupted-after-displaying-a-17-plus-lines-477-plus-non-broken-characters-long-message))
    
*   Editor: Fixed Linux Editor ignores mouse scroll wheel input when the cursor is locked on the new input system. ([1354498](https://issuetracker.unity3d.com/issues/linux-editor-ignores-mouse-scroll-wheel-input-when-the-cursor-is-locked-on-the-new-input-system))
    
*   Editor: Fixed lost references to AnimationClips when the ModelImporter clips settings are modified for the first time. ([UUM-2203](https://issuetracker.unity3d.com/issues/backport-assetimporter-updating-existing-animationclip-import-setting-results-in-a-new-internalid-and-lost-references-to-the-clip))
    
*   Editor: Prevented exceptions if ShortcutManager cannot read profile id from file. (UUM-9220)
    
*   Graphics: Add error message for indirect compute buffers incorrectly flagged on DX11. ([UUM-899](https://issuetracker.unity3d.com/issues/backport-unable-to-modify-rwstructuredbuffer-elements-via-indirect-dispatch-of-a-compute-shader-when-using-the-direct3d11-api))
    
*   Graphics: Fixed potential for LineRenderer.BakeMesh and TrailRenderer.BakeMesh to fail with invalid AABB error messages. ([UUM-1913](https://issuetracker.unity3d.com/issues/backport-linerenderer-dot-bakemesh-fails-when-called-on-instantiated-copy))
    
*   Graphics: Fixed sporadic freeze in mesh upload. (UUM-4293)
    
*   IL2CPP: Avoid an exception from Buffer.BlockCopy when the destination array is of type sbyte. ([UUM-12875](https://issuetracker.unity3d.com/issues/android-sbyte-type-is-considered-to-be-not-primitive-when-compiling-il2cpp-code))
    
*   IL2CPP: Fixed a hash collision when a static and instance method have the same name, return type, and parameters. ([UUM-9877](https://issuetracker.unity3d.com/issues/il2cpp-wont-build-because-of-errors-when-the-carx-library-is-used))
    
*   IL2CPP: Fixed a NullReferenceException during managed code stripping when using DebuggerDisplay. ([UUM-12430](https://issuetracker.unity3d.com/issues/il2cpp-throws-a-nullreferenceexception-when-attempting-to-export-a-development-android-build))
    
*   IL2CPP: Fixed compilation error that occurred when a enum was passed by reference in a marshalling definition. ([UUM-11353](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-enum-marshaling))
    
*   IL2CPP: Fixed possible crash/corruption when invoking a virtual generic method on a generic type by reflection. ([UUM-12498](https://issuetracker.unity3d.com/issues/il2cpp-build-crashes-when-symbols-cannot-be-found))
    
*   Linux: Fixed Linux Editor's new input system's mouse scroll delta values clamped between -1 and 1. ([1365433](https://issuetracker.unity3d.com/issues/linux-editors-new-input-systems-mouse-scroll-delta-values-are-clamped-between-1-and-1-and-are-inverted))
    
*   Linux: Fixed Server runtime not responding to SIGTERM and other signals. ([UUM-1582](https://issuetracker.unity3d.com/issues/unity-server-run-time-does-not-respond-to-sigterm-and-other-linux-signals-correctly))
    
*   Mono: Avoid exception when registering a window class in different domain instances. ([UUM-13189](https://issuetracker.unity3d.com/issues/crash-on-callwindowprocw-when-opening-windows-form-in-play-mode))
    
*   Networking: UnityWebRequest will not change HEAD to GET on 302 or 303 response. (UUM-7274)
    
*   Package Manager: Fixed a regression where packages would fail to resolve with a ENOENT mkdir error when the project path or global cache path contained quotes. ([UUM-13252](https://issuetracker.unity3d.com/issues/package-manager-enoent-no-such-file-or-directory-mkdir))
    
*   Package Manager: Fixed an issue where having packages with a lot of versions increases domain reload time drastically. ([UUM-12670](https://issuetracker.unity3d.com/issues/memory-usage-increases-when-entering-play-mode-with-the-package-manager-window-open))
    
*   Player: Improved performance when loading scenes with a high number of light probes. ([UUM-7568](https://issuetracker.unity3d.com/issues/loading-a-scene-with-a-large-amount-of-light-probes-causes-a-performance-spike))
    
*   Profiler: Fixed failures in opening local documentation files from Editor on macOS. ([UUM-6164](https://issuetracker.unity3d.com/issues/application-cannot-be-opened-error-on-pressng-help-icon-in-profiler-window))
    
*   Scripting: Fixed a crash happening when trying to enter an unsupported character (such as an emoji) in a field in a game built with IL2Cpp backend. ([UUM-1801](https://issuetracker.unity3d.com/issues/backport-il2cpp-doesnt-properly-handle-invalid-surrogate-pairs-causing-crash))
    
*   Scripting: Fixed an issue where adding a component declared in a nested class could end up adding the wrong component type. ([UUM-9221](https://issuetracker.unity3d.com/issues/the-wrong-component-slash-class-gets-added-when-adding-a-nested-class-via-script-that-has-a-duplicate-class-elsewhere))
    
*   Scripting: Fixed an issue where Application.logMessageReceived can be called from a job, when the job is scheduled on the main thread. ([UUM-3085](https://issuetracker.unity3d.com/issues/application-dot-logmessagereceived-is-called-from-worker-thread-when-logging-errors-from-bursted-ijob))
    
*   Scripting: Marking UserInfo apis as obsolete. (UUM-14006)
    
*   Services:
    
*   uGUI: Fixed the NullReferenceException when using Tile image types with a sprite atlas being omitted from build. ([UUM-4340](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-on-ui-dot-image-dot-generatetiledsprite-when-image-type-is-set-to-tiled))
    
*   Universal Windows Platform: Fixed float values stored in player prefs getting corrupted on startup. ([UUM-14671](https://issuetracker.unity3d.com/issues/playerprefs-dot-getfloat-returns-wrong-values-when-used-in-uwp-build))
    
*   WebGL: Fixed a bug where losing focus on the player would cause buttons to become stuck. ([UUM-3230](https://issuetracker.unity3d.com/issues/input-value-is-constantly-repeated-on-webgl-player-when-changing-focus-of-the-player))
    
*   WebGL: Fixed a bug where pressing the `CMD` key on Safari would cause buttons to become stuck. (UUM-12013)
    
*   WebGL: Fixed bug where the cursor would transition back to the system cursor rather than the Unity default cursor. ([UUM-1158](https://issuetracker.unity3d.com/issues/in-webgl-player-default-cursor-resets-to-system-default-cursor-when-leaving-ui-document-which-sets-a-custom-cursor))
    
*   WebGL: Fixed immediate playback of scheduled audio source if AudioSource.time is changed. ([UUM-1147](https://issuetracker.unity3d.com/issues/in-webgl-player-audiosource-dot-time-of-an-audio-clip-starts-immediately-when-audiosource-dot-playscheduled-is-used))
    
*   Windows: Fixed incorrect scan codes that are exposed through KeyControl.scanCode of New Input System. (UUM-9029)
    
*   XR: Fixed Graphics.Blit when using VRTextureUsage.TwoEyes. ([UUM-1858](https://issuetracker.unity3d.com/issues/backport-graphics-dot-blit-0-index-texture-will-not-be-drawn-when-vrtextureusage-is-set-to-twoeyes))

### Known Issues in 2020.3.40f1

*   AI Navigation Core: NavMesh::Raycast freezes the whole editor in an infinite loop on Application.UpdateScene ([UUM-2496](https://issuetracker.unity3d.com/issues/navmesh-raycast-freezes-the-whole-editor-in-an-infinite-loop-on-application-dot-updatescene))
    
*   Asset Bundles: AssetBundle indeterminism caused by mesh streaming info ([UUM-12721](https://issuetracker.unity3d.com/issues/assetbundle-indeterminism-caused-by-mesh-streaming-info))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   MacOS: Crash with demangling\_unexpected\_handler() when rapidly modifying serialized fields ([UUM-3310](https://issuetracker.unity3d.com/issues/crash-with-demangling-unexpected-handler-when-rapidly-modifying-serialized-fields))
    
*   XR SRP: Meta Quest performance loss between URP versions when built ([UUM-15608](https://issuetracker.unity3d.com/issues/meta-quest-performance-loss-between-urp-versions-when-built))
    

### 2020.3.40f1 Release Notes

#### Features

*   Editor: Add com.unity.services.mediation@1.0.4

#### Improvements

*   2D: Added bone weight index validation in SpriteSkin's validate method, to ensure valid data before continuing with deformation.
    
*   Asset Import: Reduced the time taken by refreshing the asset database, which among other things improves the performance of editing prefabs
    
*   Editor: Reduced the time taken to open inspectors by avoiding a pointless copy of a big thing behind the scenes
    
*   Multiplayer: Add Unity Netcode for Gamebjects Package 1.0.1
    
*   Multiplayer: Add Unity Transport Package 1.2.0
    
*   Scripting: Improved pop-up error messages when attaching scripts to GameObjects. (UUM-2557)
    

#### API Changes

*   iOS: Added: Added identifiers for iPhone 14 models.

#### Changes

*   Editor: Updated manifest.json to use com.unity.inputsystem package version 1.4.2
    
*   XR: Updated the verified version of AR Foundation related packages to 4.1.12.
    

#### Fixes

*   Android: Fixed crash when using UAV with Vulkan on older Mali devices ([UUM-1957](https://issuetracker.unity3d.com/issues/backport-android-vulkan-crash-on-samsung-note8-while-running-gfx-tests))
    
*   Android: \[Backport\] Fix for 2020.3: Static Image for Splash Screen Moving When Loading on Android Build ([UUM-1803](https://issuetracker.unity3d.com/issues/backport-custom-static-image-for-splash-screen-moves-on-android-build-when-loading))
    
*   Audio: Fixed doc for GamepadSpeakerOutputType to be used exclusively for playstation 4, playstation 5 platforms and editor platforms only. ([UUM-407](https://issuetracker.unity3d.com/issues/error-gamepadspeakeroutputtype-does-not-exist-in-the-namespace-unityengine-occurs-in-the-console-when-building-a-project))
    
*   Documentation: The "linear" parameter was stated to be true by default for Texture2DArray, this has been fixed. (UUM-8157)
    
*   DX12: Fixed crash that can occur when calling ComputeBuffer.GetData() with non zero computeBufferStartIndex parameter ([UUM-11444](https://issuetracker.unity3d.com/issues/crash-on-play-when-getdata-attempts-a-partial-read-on-directx12-dx12))
    
*   GI: Fixed denoising issues with OIDN and OptiX denoisers on GPULM when using different values for direct lighting sample count and indirect lighting sample count. ([UUM-2158](https://issuetracker.unity3d.com/issues/backport-gpu-plm-denoising-artifacts-after-baking-gi-with-certain-lighting-settings-and-denoising-enabled))
    
*   Graphics: Fixed Texture2D.GetPixel(int x, int y, int miplevel) internally passing the miplevel parameter incorrectly.\] (UUM-8157)
    
*   Graphics: Updated libjpeg-turbo to version 2.1.2 to solve security issues with version 1.3.1, used by Texture2D and ImageConversion LoadImage API and ImageConversion EncodeToJPG API. (UUM-4950)
    
*   IL2CPP: Avoid an intermittent crash in the .NET thread pool implementation when a thread is incorrectly removed from the pool twice. ([UUM-11191](https://issuetracker.unity3d.com/issues/android-il2cpp-system-dot-threading-dot-threadpool-sometimes-causes-player-to-crash-when-queueing-tasks))
    
*   IL2CPP: Avoid an intermittent crash on shutdown when many threads are waiting on a Monitor object inside for a C# lock statement. ([UUM-10374](https://issuetracker.unity3d.com/issues/crash-in-getmonitorandthrowifnotlockedbycurrentthread-when-running-the-project-repeatedly-and-using-il2cpp))
    
*   IL2CPP: Correctly layout structures in memory with an explicit layout and a size parameter. (UUM-9100)
    
*   IL2CPP: Fixed crash when ill formed utf16 content is converted to utf8 ([UUM-1801](https://issuetracker.unity3d.com/issues/backport-il2cpp-doesnt-properly-handle-invalid-surrogate-pairs-causing-crash))
    
*   iOS: Fixed orientation handling on startup (when the phone is rotated between starting up and showing unity itself) ([UUM-7461](https://issuetracker.unity3d.com/issues/input-dot-gyro-dot-gravity-inverted-sign-on-x-and-y-axis-depending-on-ios-device-orientation-when-app-starts))
    
*   iOS: Stop Touch.rawPosition changing position when touch is dragged ([UUM-7581](https://issuetracker.unity3d.com/issues/ios-touch-dot-rawposition-changes-position-when-touch-is-dragged))
    
*   Linux: Fixed print stack trace frequently crashing (UUM-1595)
    
*   Networking: Upgrade curl to 7.84.0 (UUM-11134)
    
*   Package Manager: HTML text cleaned up in details view. ([UUM-7701](https://issuetracker.unity3d.com/issues/package-manager-release-details-of-assets-include-html-tags))
    
*   Scene Manager: Opening a broken scene with light mapping enabled could crash the editor. ([UUM-9319](https://issuetracker.unity3d.com/issues/scene-causes-editor-crash-when-specific-lighting-data-asset-is-used))
    
*   Scripting: Fix an issue where define constraints on unity's pre-defined symbols like "UNITY\_INCLUDE\_TESTS" were misbehaving for Precompiled assemblies ([UUM-9378](https://issuetracker.unity3d.com/issues/a-dll-file-is-included-in-the-build-when-the-only-reference-to-it-is-enclosed-in-number-if-unity-editor))
    
*   Scripting: Fix case when trying to serialize generics with generic fields of types from different assemblies. ([UUM-8844](https://issuetracker.unity3d.com/issues/exception-for-unresolved-inflated-type-arguments))
    
*   Scripting: Fixed an issue where messages from the compiler containing special character were not correctly printed in the console ([UUM-1935](https://issuetracker.unity3d.com/issues/backport-script-names-containing-non-ascii-characters-are-not-printed-correctly-to-the-console))
    
*   Serialization: Properly track managed-only classes so they are not stripped by the il2cpp linker. ([UUM-4103](https://issuetracker.unity3d.com/issues/backport-ui-toolkit-il2cpp-ui-is-not-visible-when-in-built-player-and-serialization-errors-are-thrown))
    
*   VFX Graph: Stop rendering VFX shadows when VFX are disabled in Scene View visibility menu (UUM-4752)
    
*   Virtual Texturing: Added a notice regarding the experimental state of Virtual Texturing to the Player Settings editor.
    
*   Virtual Texturing: Added a warning for Procedural Virtual Texturing clarifying that the feature is not currently supported.
    
*   Virtual Texturing: The experimental state of Streaming Virtual Texturing and Procedural Virtual Texturing was not clearly indicated in the API docs and Manual, this has been corrected. For clarity, these features should not be used in production.
    
*   WebGL: Improve shader compilation performance problems on MacOS when GPU instancing is used. ([UUM-6390](https://issuetracker.unity3d.com/issues/backport-instanced-urp-shaders-using-spherical-harmonics-variables-causes-long-initial-mesh-render-time-when-used-in-webgl))
    
*   Windows: Fixed mouse buttons do not get switched when the primary mouse button is changed. ([UUM-3959](https://issuetracker.unity3d.com/issues/input-system-windows-mouse-buttons-do-not-get-switched-when-the-primary-mouse-button-is-changed))
    
*   XR: Fixed multiview is enabled when renderer is configured to SPI mode on PC (UUM-6003)

### Known Issues in 2020.3.39f1

*   AI Navigation Core: NavMesh::Raycast freezes the whole editor in an infinite loop on Application.UpdateScene ([UUM-2496](https://issuetracker.unity3d.com/issues/navmesh-raycast-freezes-the-whole-editor-in-an-infinite-loop-on-application-dot-updatescene))
    
*   Asset Bundles: AssetBundle indeterminism caused by mesh streaming info ([UUM-12721](https://issuetracker.unity3d.com/issues/assetbundle-indeterminism-caused-by-mesh-streaming-info))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   MacOS: Crash with demangling\_unexpected\_handler() when rapidly modifying serialized fields ([UUM-3310](https://issuetracker.unity3d.com/issues/crash-with-demangling-unexpected-handler-when-rapidly-modifying-serialized-fields))
    
*   XR SRP: Meta Quest performance loss between URP versions when built ([UUM-15608](https://issuetracker.unity3d.com/issues/meta-quest-performance-loss-between-urp-versions-when-built))
    

### 2020.3.39f1 Release Notes

#### Improvements

*   Documentation: Added a summary and code example for IJobParallelForTransform.
    
*   XR: Update Windows Mixed Reality default version to 4.6.4
    

#### API Changes

*   Android: Changed: Fix issue on Adreno where SystemInfo.maxComputeBufferInputsFragment is incorrectly report as greater than 4 on some devices ([UUM-1870](https://issuetracker.unity3d.com/issues/backport-android-vulkan-unity-returns-lower-or-higher-values-of-computing-buffers-count-than-is-actually-available-on-the-d))
    
*   Android: Changed: Updated SupportsAccelerometer() API to return whether a device has an accelerometer sensor or not.
    

#### Changes

*   IAP: # Changelog  
    \## \[4.4.0\] - 2022-07-11  
    \### Added
    
    *   GooglePlay - Google Play Billing Library version 4.0.0.
        
    *   The Multi-quantity feature is not yet supported by the IAP package and will come in a future update. **Do not enable `Multi-quantity` in the Google Play Console.**
        
    *   Add support for  
        the \[IMMEDIATE\_AND\_CHARGE\_FULL\_PRICE\](https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.ProrationMode#IMMEDIATE\_AND\_CHARGE\_FULL\_PRICE)  
        proration mode. Use `GooglePlayProrationMode.ImmediateAndChargeFullPrice` for easy access.  
        \### Fixed
        
    *   GooglePlay - Fix `IGooglePlayConfiguration.SetDeferredPurchaseListener`  
        and `IGooglePlayConfiguration.SetDeferredProrationUpgradeDowngradeSubscriptionListener` callbacks sometimes not being  
        called from the main thread.
        
    *   GooglePlay - When configuring `IGooglePlayConfiguration.SetQueryProductDetailsFailedListener(Action retryCount)`, the action will be invoked with retryCount starting at 1 instead of 0.
        
    *   GooglePlay - Added a validation when upgrading/downgrading a subscription that calls `IStoreListener.OnPurchaseFailed` with `PurchaseFailureReason.ProductUnavailable` when the old transaction id is empty or null. This can occur when attempting to upgrade/downgrade a subscription that the user doesn't own.
        
*   IAP: # Changelog  
    \## \[4.4.1\] - 2022-08-11  
    \### Fixed
    
    *   GooglePlay - Fixed NullReferenceException and ArgumentException that would rarely occur due to a concurrency issue introduced in Unity IAP 4.2.0
        
    *   Amazon - Set android:export to true to support Android API level 31+
        
*   Package: Bumped versions of Relay & QoS packages.
    
*   Text: Upgraded freetype to 2.12.1. (UUM-6502)
    
*   XR: Update OpenXR package version to 1.5.1
    

#### Fixes

*   2D: Fixed editor crash when calling SpriteAtlasUtility.PackAtlases ([UUM-6965](https://issuetracker.unity3d.com/issues/backport-sprite-atlas-v1-editor-crashes-when-calling-spriteatlasutility-dot-packatlases))
    
*   Android: Added mono audio output support. ([UUM-9205](https://issuetracker.unity3d.com/issues/setting-audiospeakermode-dot-mono-has-no-effect-on-android-devices))
    
*   Android: Bring back the ability to initialize UnityPlayer with Context class, this allows Unity to initialize itself from WallpaperService. ([1413649](https://issuetracker.unity3d.com/issues/android-crash-when-using-unityplayer-getapplicationcontext-this-on-exported-andoid-projects))
    
*   Android: Fixed bug when building with IL2CPP and scaler types getting stripped out.
    
*   Android: Fixed bug with manual lifetime tests failing occasionally.
    
*   Android: Fixed bug with scaler not being initialized with settings from the Editor UI properly when using profiles.
    
*   Android: Fixed bug with test provider and settings showing up in Project Settings.
    
*   Android: Fixed crash during low memory kill. (UUM-4811)
    
*   Android: Fixed orientation issues in laptop mode and tablet mode on Chromebooks ([UUM-782](https://issuetracker.unity3d.com/issues/chromeos-pixelbook-can-switch-to-portrait-orientations-which-result-in-vertical-resolution-that-cannot-be-undone))
    
*   Android: Fixed screen distortion when minimizing and maximizing the app on ChromeOS ([UUM-523](https://issuetracker.unity3d.com/issues/screen-distorts-when-minimizing-and-maximizing-the-app-on-chromeos))
    
*   Android: Toggling Build App Bundle in the Build Player Window will now prompt for a save location rather than attempting to use the last build location which would have been the incorrect type of package. ([UUM-1692](https://issuetracker.unity3d.com/issues/backport-android-building-app-using-ctrl-plus-b-shortcut-uses-the-last-used-configuration-instead-of-the-current-one))
    
*   Asset Bundles: Fixed memarchive0 error when entering play mode (UUM-11182)
    
*   Audio: Fixed unexpected output from OnAudioFilterRead when the audio source is stopped and the 'spatialize' property is enabled. ([UUM-6318](https://issuetracker.unity3d.com/issues/stopped-audio-souce-outputs-audio-when-the-spatialize-property-is-enabled))
    
*   Editor: Fix crash when creating a default 3D texture with an unsupported format on Metal ([UUM-2996](https://issuetracker.unity3d.com/issues/m1-mobile-rosetta-crash-with-mtlgetenvcase-when-building-for-ios-slash-android))
    
*   Editor: Fixed loading Scene Templates from Packages directories. ([1360512](https://issuetracker.unity3d.com/issues/scene-management-cannot-instantiate-new-scene-when-the-basic-urp-template-is-used))
    
*   GI: Fix for prefab assets showing in Light Explorer when Show Inactive Objects is checked. ([UUM-835](https://issuetracker.unity3d.com/issues/backport-prefabs-with-light-component-are-listed-in-the-light-explorer-when-the-show-inactive-objects-property-is-checked))
    
*   GI: Fixed a case where scene objects would lose their lighting data when they are packed into or unpacked from a prefab, and playmode is entered without first saving the scene. (UUM-11182)
    
*   Graphics: Fix crash when using bad args in CommandBuffer.DrawRenderer ([HRB-20](https://issuetracker.unity3d.com/issues/backport-crash-when-trying-to-render-a-specific-submesh-with-commandbuffer-dot-drawrenderer))
    
*   Graphics: Fixed ImageConversion.LoadImage and Texture2D.LoadImage always returning true even in case of a failure. ([UUM-2528](https://issuetracker.unity3d.com/issues/backport-texture2d-dot-loadimage-returns-true-and-sets-the-texture-to-a-question-mark-when-loading-fails))
    
*   iOS: Disable capitalization, autocorrection and others when soft keyboard is secure and input is hidden ([UUM-5974](https://issuetracker.unity3d.com/issues/shift-is-pressed-in-the-keyboard-when-textmeshpro-input-field-content-type-is-password-and-hide-mobile-input-is-checked))
    
*   iOS: Fixed crash on warming up shader variants with procedural instancing (UUM-10114)
    
*   Kernel: Improved termination of player connection.
    
*   macOS: Fixed code sign of ppc fat dylibs. (UUM-2196)
    
*   Networking: Fixed texture leak when UnityWebRequest is used with DownloadHandlerTexture and a texture is never queried. ([UUM-953](https://issuetracker.unity3d.com/issues/backport-unitywebrequest-interrupted-before-completion-causes-memory-leak))
    
*   Particles: Ensured Trigger Module does not ignore 2D Trigger Colliders. ([1364520](https://issuetracker.unity3d.com/issues/particles-are-not-detecting-2d-colliders-when-is-trigger-is-on))
    
*   Particles: Skip draw call for gpu instanced mesh particle trails if using same material as particles. (UUM-7071)
    
*   Project Browser: Fixed context menu does not appear when holding Ctrl and pressing left mouse button in the Project window on Mac. (UUM-5191)
    
*   Scripting: Don't cast Mathf.Abs to float when passing a float value (increases performance). ([UUM-1821](https://issuetracker.unity3d.com/issues/backport-unnecessary-cast-to-float-when-calling-mathf-dot-abs))
    
*   Scripting: Fixed condition on accessing a game object from a callback while it was being constructed that was leaving the original GameObject managed wrapper in a detached state. ([UUM-10043](https://issuetracker.unity3d.com/issues/backport-gameobject-reference-is-null-when-creating-it-inside-reset-function-and-assigning-script-as-component))
    
*   Shaders: DrawMeshInstanced now provides error feedback when using a shader that does not support instancing. ([UUM-6026](https://issuetracker.unity3d.com/issues/backport-shader-dot-worldposition-interferes-with-drawing-of-the-shader-when-using-drawmeshinstanced))
    
*   Shaders: Fixed HDRP Runtime test failure in Vulkan caused by incorrect shader code generation. (UUM-1834)
    
*   Terrain: Backports a bugfix that reduces the time taken by trees on awake. ([UUM-4946](https://issuetracker.unity3d.com/issues/performance-regression-gameobject-dot-activateawakerecursively-noticeably-slower-when-rendering-trees-on-terrain))
    
*   Terrain: URP fails to render grass Terrain details. ([UUM-9122](https://issuetracker.unity3d.com/issues/urp-fails-to-render-grass-terrain-details))
    
*   uGUI: Fixed calculation of pointer position when running in multiple display mode and the main display was fullscreen with a non-native aspect ratio. ([UUM-7893](https://issuetracker.unity3d.com/issues/broken-mouse-pointer-input-coordinates-in-graphicraycaster-for-certain-window-sizes-in-build-when-run-in-windowed-mode))
    
*   Universal Windows Platform: Fixed IL2CPP failing to initialize when invoked in background task. ([UUM-9644](https://issuetracker.unity3d.com/issues/wns-push-notifications-via-background-task-is-not-working-when-push-notifications-are-sent-from-the-portal-or-using-the-wns-rest-apis))
    
*   Video: "Can't play movie" error is thrown when setting VideoPlayer.url to an invalid url through a script ([UUM-11380](https://issuetracker.unity3d.com/issues/backport-cant-play-movie-error-is-thrown-when-setting-videoplayer-dot-url-to-an-invalid-url-through-a-script))
    
*   Video: Fixed crash when importing a file in play mode. ([UUM-9351](https://issuetracker.unity3d.com/issues/backport-popup-about-missing-resource-file-appears-when-refreshing-asset-database-after-saving-new-mp4-slash-webm-file))
    
*   Video: Videos fail to play on Standalone Windows players with some AMD GPUs. ([UUM-900](https://issuetracker.unity3d.com/issues/backport-videos-fail-to-play-on-standalone-windows-players-with-some-amd-gpus))
    
*   Video: \[WIN 8 KN/N\] VideoPlayer inadequate error reporting on errorReceived callback when Media Player is not present. ([UUM-839](https://issuetracker.unity3d.com/issues/backport-win-8-kn-slash-n-videoplayer-inadequate-error-reporting-on-errorreceived-callback-when-media-player-is-not-present))
    
*   WebGL: Added workaround for audio distortion bug in Safari. ([1350204](https://issuetracker.unity3d.com/issues/webgl-macos-looping-audio-gets-distorted-and-echoes-when-played-over-time-on-safari))
    
*   WebGL: Fix WebGL build on macOS 12.3 by bundling Python 2.7 ([UUM-1136](https://issuetracker.unity3d.com/issues/webgl-builderror-constant-il2cpp-build-error-after-osx-12-dot-3-upgrade))
    
*   WebGL: Fixed bug where some control keys were being incorrectly interpreted as text. ([1417650](https://issuetracker.unity3d.com/issues/webgl-return-key-is-captured-as-the-string-enter-when-using-keyboard-dot-ontextinput))
    
*   WebGL: Fixed changing AudioSource.time while audio source is paused. ([UUM-1157](https://issuetracker.unity3d.com/issues/paused-audiosource-starts-playing-when-adjusting-audiosource-dot-time))
    
*   WebGL: Fixed FMOD related error messages showing up in console when audio is played on Timeline. ([1270635](https://issuetracker.unity3d.com/issues/webgl-fmod-error-spam-in-the-console-when-playing-an-audio-clip-in-a-timeline))
    
*   WebGL: Fixed non-finite double value error during audio playback. (UUM-11085)
    
*   Windows: Fixed crash on startup when Vjoy HID device is connected to a computer. ([UUM-8786](https://issuetracker.unity3d.com/issues/unity-crashing-upon-start-with-a-vjoy-controller-connected))
    
*   Windows: UnityPlayer.dll properties sheet is now more complete. ([UUM-10370](https://issuetracker.unity3d.com/issues/unityplayer-dot-dll-properties-for-windows-standalone-player-are-incomplete-compared-to-uwp))
    
*   XR: Updated XR Legacy Input Helpers to 2.1.10.

### Known Issues in 2020.3.38f1

*   AI Navigation Core: NavMesh::Raycast freezes the whole editor in an infinite loop on Application.UpdateScene ([UUM-2496](https://issuetracker.unity3d.com/issues/navmesh-raycast-freezes-the-whole-editor-in-an-infinite-loop-on-application-dot-updatescene))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   MacOS: Crash with demangling\_unexpected\_handler() when rapidly modifying serialized fields ([UUM-3310](https://issuetracker.unity3d.com/issues/crash-with-demangling-unexpected-handler-when-rapidly-modifying-serialized-fields))
    
*   Scene Management: Scene causes Editor crash when specific Lighting Data Asset is used ([UUM-9319](https://issuetracker.unity3d.com/issues/scene-causes-editor-crash-when-specific-lighting-data-asset-is-used))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([UUM-2743](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time-1))
    
*   Texture: \[Backport\] \[MacOS\] Crash on \_\_pthread\_kill when Render Texture has no Depth buffer and Dimension is 3D ([UUM-5459](https://issuetracker.unity3d.com/issues/backport-macos-crash-on-pthread-kill-when-render-texture-has-no-depth-buffer-and-dimension-is-3d))
    

### 2020.3.38f1 Release Notes

#### Features

*   Editor: add editor analytics event tracking for "Refresh access" and "New link..." button click
    
*   Version Control: Added notification banner on the status bar for live updates
    

#### Improvements

*   Mono: Add support for direct ETW profiler integration on Windows Desktop for managed code, with no plugin required.
    
*   UI: The TextureImporterInspector will now disable the "sRGB (Color Texture)" toggle for HDR targets instead of silently overriding. (reflected in API docs) (UUM-7553)
    

#### Changes

*   IAP: # Changelog  
    \## \[4.3.0\] - 2022-06-16  
    \### Added
    
    *   GooglePlay - API `IGooglePlayConfiguration.SetQueryProductDetailsFailedListener(Action)` called when Unity IAP fails to query product details. The `Action` will be called on each query product details failure with the retry count. See documentation "Store Guides" > "Google Play" for a sample usage.
*   Version Control: Renamed "Invite members to workspace" option to "Invite members to organization"

#### Fixes

*   2D: Fixed case in VirtualRedirectTransfer when loading AssetBundle while entering Play Mode. ([UUM-2207](https://issuetracker.unity3d.com/issues/backport-crash-on-virtualredirecttransfer-when-loading-assetbundle-while-entering-play-mode))
    
*   2D: Mouseclick with Alt/Option on a sprite layer in the Visibility pane does not toggle out of hide state (DANB-67)
    
*   Android: Blind fix for an issue where executing Android SDK tool command would fail with missing java error. For ex., "Unable to locate a Java Runtime". Even though everything is set correctly in Preferences->External Tools->JDK. Also during the failure, Unity will now print environment variables thus helping identifying such issues in the future. (UUM-2106)
    
*   Android: Fix overflow of MotionEvent global references ([UUM-8438](https://issuetracker.unity3d.com/issues/android-crash-in-player-due-to-an-overflow-of-global-references-to-android-dot-view-dot-motionevent))
    
*   Android: Fixed an Android audio crash when targeting API Level 31 and running on an Android 12 device. Also fixed an AudioManager.GetStreamVolume exception when targeting API Level 29 or later, which caused the AudioSettings.Mobile.stopAudioOutputOnMute feature to not work correctly, if enabled. ([UUM-5652](https://issuetracker.unity3d.com/issues/android-resume-causes-getaudiostreamvolume-jni-exception))
    
*   Android: Fixed building exported Unity project in Android Studio ([UUM-520](https://issuetracker.unity3d.com/issues/android-exported-project-is-unable-to-be-built-on-android-studio-chipmunk-2021-dot-2-1))
    
*   Android: Fixed Screen.safeArea returning wrong height when building Native app with Unity as a Library. ([UUM-515](https://issuetracker.unity3d.com/issues/android-screen-dot-safearea-returns-wrong-height-when-building-native-app-with-unity-as-a-library))
    
*   Editor: FIX: Build process should be quicker to detect scripting backend changes when building to a pre-used folder (1421700) ([UUM-1949](https://issuetracker.unity3d.com/issues/build-doesnt-fail-instantly-when-building-with-a-different-backend-over-an-existing-build))
    
*   Editor: Fixed an issue where certain properties could not be excluded in the TextureImporterInspector. ([UUM-3787](https://issuetracker.unity3d.com/issues/preset-some-properties-cannot-be-excluded-from-texture-importer-preset-through-the-inspector-window))
    
*   Editor: Fixed crash when calling GUIClip.SetMatrix early in the domain reload. ([UUM-2217](https://issuetracker.unity3d.com/issues/backport-unity-crashes-entering-play-mode-when-the-graphview-window-is-open-and-frameall-is-used))
    
*   Editor: Fixes crash during accelerator corruption detection. (UUM-6539)
    
*   Editor: Replace Premium Expert Help link in Editor Help Menu with a link to Unity Learn (UUM-8297)
    
*   Editor: SpeedTree: Fix SpeedTreeImporterModelEditor throwing exception on DoMaterialsHaveDifferentShader() call when invalid SpeedTree asset is imported (UUM-6486)
    
*   Editor: \[SpeedTree\] Fixed an exception when the user backs off form the 'Search and Remap' dialog in the SpeedTree Material Editor
    
*   GI: Fix a crash: GetManagerFromContext: pointer to object of manager 'LightmapSettings' is NULL (table index 22)" error when creating a new scene ([UUM-9213](https://issuetracker.unity3d.com/issues/getmanagerfromcontext-pointer-to-object-of-manager-lightmapsettings-is-null-table-index-22-error-when-creating-a-new-scene))
    
*   GI: Fixed issues with overlapping lights using shadowmask and wide spot angles. (UUM-2761)
    
*   GI: \[GPU PLM\] OpenCL shader loading time in new projects has become significantly slower. Fixed regression by speeding up OpenCL shader loading stage by caching binaries in the GICache. ([UUM-1350](https://issuetracker.unity3d.com/issues/gpu-plm-opencl-shader-loading-time-in-the-new-projects-has-become-significantly-slower-1))
    
*   Graphics: 2D Textures with multiple faces or images now correctly update their hash values when any face/image is changed and not just the first one ([UUM-2506](https://issuetracker.unity3d.com/issues/cubemap-hash-value-changes-only-when-modifying-the-first-face))
    
*   Graphics: Fixed a regression where calling the the Texture2D.Resize method with a Texture format parameter caused the underlying GraphicsFormat to flip color spaces on each call. ([UUM-1804](https://issuetracker.unity3d.com/issues/backport-texture2d-dot-resize-toggles-graphicsformat-each-time-its-called-between-linear-and-srgb))
    
*   Graphics: Fixed AssetPreviews + texture preview window for ASTCnm/Plain normal maps. (UUM-7833)
    
*   Graphics: Fixed numerous cases where mini-thumbnails would not match the expected visual look when using linear project color space. (UUM-7833)
    
*   Graphics: Fixed Single Channel Red mini-thumbnails not actually being red-only. (UUM-7833)
    
*   Graphics: Fixed undefined behaviour occurring with AssetPreview for Single Channel Alpha texture types. (UUM-7833)
    
*   Graphics: Shadow casters with different UnityPerMaterial aren't properly SRP Batched. ([1421660](https://issuetracker.unity3d.com/issues/shadow-casters-cant-be-srp-batched-when-they-have-different-unitypermaterial-values))
    
*   Graphics: Switching vsync mode while in a Metal player could sometimes cause a freeze due to the vsync status not syncing correctly before waiting on the frame present - this has been fixed. ([UUM-5547](https://issuetracker.unity3d.com/issues/mac-metal-player-freezes-when-vsync-is-turned-on-with-button-onclick-event))
    
*   Graphics: The generated mini-thumbnail of TextureGenerationOutput will now properly set its expected stored color space. (UUM-7833)
    
*   IL2CPP: Avoid a possible crash when a Unity player is unloaded and reloaded. ([UUM-2660](https://issuetracker.unity3d.com/issues/use-after-free-crash-bug-in-il2cpp))
    
*   IL2CPP: Avoid an stack overflow during code conversion when an attribute constructor uses the attribute itself. ([UUM-3907](https://issuetracker.unity3d.com/issues/il2cpp-project-with-nhibernate-library-fails-to-build-when-using-il2cpp-scripting-backend))
    
*   IL2CPP: Fixed issue where Assembly.GetType() on a type without a namespace could match a nested type with the same name and issue where Assembly.GetType() did not respect the ignoreCase flag for nested types. ([1422119](https://issuetracker.unity3d.com/issues/il2cpp-assembly-dot-gettype-returns-a-nested-class-when-the-nested-class-is-defined-before-the-non-nested-one))
    
*   IL2CPP: Fixed leak of internal thread objects that could manifest in a pause on player exit. ([UUM-607](https://issuetracker.unity3d.com/issues/il2cpp-player-hangs-for-20-seconds-after-closing-it-when-running-threads))
    
*   IL2CPP: Fixed performance issues in metadata access with thread contention. (UUM-609)
    
*   IL2CPP: Throw an exception from Buffer.BlockCopy when the destination array has a non-primitive element type. ([UUM-3302](https://issuetracker.unity3d.com/issues/crash-when-running-il2cpp-build-that-uses-system-dot-buffercopy))
    
*   IL2CPP: Update zlib to version 1.2.12 for CVE-2018-25032. (UUM-599)
    
*   IL2CPP: ([1411168](https://issuetracker.unity3d.com/issues/build-fails-with-error-unity-dot-il2cpp-dot-hashcodecollisionexception-when-opc-dot-uafx-dot-client-dot-dll-is-included-in-the-project))
    
*   iOS: Fixed a bug with the "Force iOS Speakers when Recording" player setting. In addition, a few other iOS Bluetooth audio bugs were fixed. When starting up with Bluetooth headphones connected, audio output used to play through the built-in speakers (which was an error). The list of available microphones was not always correct when connecting / dis-connecting Bluetooth headphones at runtime. Bluetooth microphone input was really choppy. ([1387403](https://issuetracker.unity3d.com/issues/sound-is-playing-through-the-ear-speaker-if-using-force-ios-speakers-when-recording-when-prepare-ios-for-recording-is-on))
    
*   Linux: Fixed missing game controller mappings for certain controllers (1384896)
    
*   macOS: Fix Input.inputString doesn't convert input to the suggestions from IME ([1305843](https://issuetracker.unity3d.com/issues/macos-linux-input-dot-inputstring-doesnt-convert-input-to-the-suggestions-from-ime))
    
*   macOS: We now prompt for to save changes even when the window is minimized. ([UUM-1914](https://issuetracker.unity3d.com/issues/backport-macos-editor-doesnt-show-unsaved-changes-pop-up-if-editor-is-being-closed-when-window-with-unsaved-changes-is-mini))
    
*   Mono: Fixed System.Windows.Forms.SendKeys.Send on Windows.
    
*   Package Manager: 'View documentation' doesn't open an offline documentation when the package is added from a local disk. ([UUM-4809](https://issuetracker.unity3d.com/issues/backport-view-documentation-doesnt-open-an-offline-documentation-when-the-package-is-embedded))
    
*   Physics: Fixed Articulation Bodies teleporting to NaN coordinates when changing joint type at runtime (UUM-7418)
    
*   Physics: Fixed overlap queries missing small convex Mesh Colliders ([UUM-6271](https://issuetracker.unity3d.com/issues/physics-overlap-queries-are-not-consistent-when-used-against-convex-mesh-colliders-with-a-very-small-scale))
    
*   Physics: Fixed raycasts missing after moving a lot of objects (UUM-7416)
    
*   Profiler: Fixed issue where Mesh memory usage was not being updated when applying new MeshData with Mesh.ApplyAndDisposeWritableMeshData. ([1377773](https://issuetracker.unity3d.com/issues/memory-profiler-results-reports-wrong-mesh-size-when-generating-it-with-jobs))
    
*   Profiler: Fixed profiler not opening the correct version of the documentation. ([UUM-4963](https://issuetracker.unity3d.com/issues/profiler-help-button-redirects-to-wrong-stream-documentation-page-1))
    
*   Scene/Game View: Adding check before recursion that the gizmo is not already active. (UUM-9157)
    
*   Scripting: Fix case when double-clicking message wouldn't open the correct file and line. ([UUM-897](https://issuetracker.unity3d.com/issues/backport-script-not-opening-when-double-clicking-error))
    
*   Scripting: Fixed issues with operation on invalid gc handles. As part of this 2 new asserts are introduced that are triggered when invalid gc handle operations are detected. The operations are skipped when detected to avoid scripting domain / memory corruption. (UUM-906)
    
*   Shaders: Fixed ddx\_fine and ddx\_coarse on Vulkan and capable GLCore targets. ([UUM-2198](https://issuetracker.unity3d.com/issues/backport-fwidth-behavior-is-inconsistent-between-dx11-slash-dx12-and-opengl-slash-vulkan))
    
*   uGUI: Expose RaycastManager.GetRaycasters public for use by users making their own EventSystem (UUM-4409)
    
*   Universal Windows Platform: Fixed a crash when entering a composition string longer than 64 characters into the IME. ([UUM-928](https://issuetracker.unity3d.com/issues/uwp-player-crashes-when-typing-in-japanese-full-width-katakana))
    
*   Universal Windows Platform: Fixed Build & Run picking the wrong instance of Visual Studio which potentially doesn't have required components installed to deploy the application. ([UUM-931](https://issuetracker.unity3d.com/issues/uwp-build-and-run-picks-the-wrong-instance-of-visual-studio-to-build-when-there-are-multiple-installed))
    
*   Universal Windows Platform: Fixed errors when trying to use the System.Web.HttpUtility class on UWP. (UUM-4008)
    
*   Version Control: Fixed missing references in synced prefabs.
    
*   Version Control: Fixed not being able to view changesets in a Gluon workspace  
    Fixed not being able to insert carriage return in checkin dialog
    
*   Video: Video player no longer suffers performance issues in windowed mode with external monitor. ([1350851](https://issuetracker.unity3d.com/issues/macos-video-loading-performance-degrades-when-app-is-in-windowed-mode-and-an-external-monitor-is-connected))
    
*   WebGL: Fix video playback to be muted when Audio Output Mode is set to Audio Source and the selected Audio Source is Muted. Also fixed another issue where video clips that browser blocked from autoplaying would not start playing after user interacts with the web page. ([1241582](https://issuetracker.unity3d.com/issues/webgl-video-audio-is-being-played-when-videoplayers-audio-output-mode-is-set-to-none))
    
*   WebGL: Removed 255 character limit for audio file urls. ([1327368](https://issuetracker.unity3d.com/issues/webgl-build-crashes-when-requesting-255-character-url-with-unitywebrequestmultimedia-dot-getaudioclip))
    
*   Windows: Fixed Screen.currentResolution containing incorrectly rounded refresh rate. ([UUM-1512](https://issuetracker.unity3d.com/issues/windows-the-returned-screen-refresh-rate-is-rounded-down-when-calling-screen-dot-currentresolution-1))
    
*   Windows: Fixed the game window teleporting to another display on certain display setups when switching to exclusive fullscreen mode at resolution that's significantly lower than the display's native resolution. ([UUM-1513](https://issuetracker.unity3d.com/issues/screen-dot-setresolution-with-exclusivefullscreen-and-lower-than-half-the-native-resolution-moves-the-window-to-another-display))
    
*   Windows: Fixed topmost region of Popup windows not receiving mouse messages. ([UUM-5783](https://issuetracker.unity3d.com/issues/backport-windows-popup-window-does-not-receive-mouse-events-when-hovering-cursor-over-the-topmost-pixels))

### Known Issues in 2020.3.37f1

*   AI Core: NavMesh::Raycast freezes the whole editor in an infinite loop on Application.UpdateScene ([UUM-2496](https://issuetracker.unity3d.com/issues/navmesh-raycast-freezes-the-whole-editor-in-an-infinite-loop-on-application-dot-updatescene))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Inspector Framework: List element overlaps everything when using Serializable struct/class ([UUM-7683](https://issuetracker.unity3d.com/issues/list-element-overlaps-everything-when-using-serializable-struct-slash-class))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Scene Management: Scene causes Editor crash when specific Lighting Data Asset is used ([UUM-9319](https://issuetracker.unity3d.com/issues/scene-causes-editor-crash-when-specific-lighting-data-asset-is-used))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([UUM-2743](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time-1))
    
*   Text: \[Mac\] ShortcutManager ignores Shift modifier ([UUM-4083](https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-modifier-1))
    
*   Texture: \[Backport\] \[MacOS\] Crash on \_\_pthread\_kill when Render Texture has no Depth buffer and Dimension is 3D ([UUM-5459](https://issuetracker.unity3d.com/issues/backport-macos-crash-on-pthread-kill-when-render-texture-has-no-depth-buffer-and-dimension-is-3d))
    

### 2020.3.37f1 Release Notes

#### Features

*   Editor: Added timestamps argument to include timestamps and thread ID prefix to logs.
    
*   Editor: Adds the ability to block shortcuts from triggering during playmode while the game view window is focused.
    
*   Package Manager: Related to \[PAX-1772\](https://jira.unity3d.com/browse/PAX-1772) As a user I should be able to specify the location of the AssetStore cache
    
*   Player: Added timestamps argument to include timestamps and thread ID prefix to logs.
    
*   Version Control: Added option to enable changelists and display them in pending changes tab  
    Added changelist related options to pending changes context menu
    

#### Improvements

*   Editor: Added a confirmation dialog when switching serialization modes
    
*   Windows: Added "-force-d3d11-flip-model" command line parameter to force Unity to use DXGI flip model swap chain.
    

#### API Changes

*   Graphics: Added: Exposes Texture2D.ignoreMipmapLimit property to ignore QualitySettings.masterTextureLimit.

#### Changes

*   Android: Accept build-tools version 30.0.x instead of strictly 30.0.2
    
*   IAP: # Changelog  
    \## \[4.2.1\] - 2022-06-14  
    \### Fixed
    
    *   Downgrade `com.unity.services.core` from 1.4.1 to 1.3.1 due to a new bug found in 1.4.1
*   Package: Update auth package to 2.1.1
    
*   Package: Update core package to 1.4.1
    
*   XR: The Oculus XR Plugin package has been updated to 1.12.1.
    

#### Fixes

*   2D: Fixed duplicate instantiated GameObjects from Tiles on Tilemap Prefabs when instantiating the Tilemap Prefabs. ([UUM-1671](https://issuetracker.unity3d.com/issues/instantiating-tilemap-that-has-rule-tile-with-default-gameobject-set-creates-extra-copy-of-gameobject-at-00-0-in-builds-1))
    
*   Android: Allow any file to be selected as keystore (previously only .keystore was supported). ([UUM-917](https://issuetracker.unity3d.com/issues/backport-keystore-file-is-not-recognized-by-editor-when-keystore-has-any-other-extension-than-keystore))
    
*   Android: Fixed a potential app store validation issue related to a QueryIntentActivities() call when initializing the engine.
    
*   Android: Fixed Java local reference leak when AndroidJavaProxy is passed as argument to AndroidJavaObject.Call/CallStatic. ([1389252](https://issuetracker.unity3d.com/issues/android-app-crashes-with-androidruntime-and-local-reference-table-overflow-errors-when-creating-512-androidjavaclass-objects))
    
*   Android: Fixed potential crash during shutdown when using Vulkan. (1423459)
    
*   Android: Fixed problem with custom Aspect ratio value in manifest file. ([1284210](https://issuetracker.unity3d.com/issues/android-build-fails-when-setting-a-custom-aspect-ratio-up-to-2-dot-1-in-player-settings))
    
*   Asset Import: Fixed issue where the Model Importer remaps materials even when MaterialImportMode is None. ([1401070](https://issuetracker.unity3d.com/issues/fbx-doesnt-change-its-prefabs-material-to-default-material-after-setting-material-creation-mode-to-none))
    
*   Asset Pipeline: Fixed a very rare bug causing directory monitor not pick up all the changes that happened before a Refresh.
    
*   Asset Pipeline: Increasing the default import worker connect timeout, to avoid import worker client processes shutting down unnecessarily, when working with larger projects. (UUM-2502)
    
*   DX12: Fixed for crash when an upload subupdates buffer was assigned to a compute shader as a UAV. (UUM-5770)
    
*   GI: Fixed crash in case of overlapping light probes when additively loading scenes. This fix eliminates an attempt to deduplicate light probes with respect to positions. A warning is introduced as the lack of deduplication could cause flickering objects. ([UUM-2746](https://issuetracker.unity3d.com/issues/memory-access-violation-in-lightprobesmanager-when-appending-lightprobes-objects-with-overlaps-twice))
    
*   GI: Fixed SetLightingDataAsset with multiscenes (caused the lightmaps to disappear for other scenes). ([UUM-916](https://issuetracker.unity3d.com/issues/backport-assigning-a-lighting-data-asset-causes-the-lightmaps-to-be-unloaded-for-all-scenes-except-the-active-one))
    
*   GI: Fixed the denoising of shadowmask with the GPULM. (UUM-2783)
    
*   Graphics: Allowed a native Texture3D to be bigger than 2GB. (UUM-4006)
    
*   Graphics: Fixed consistent Gfx.WaitForPresentOnGfxThread editor spikes when using Metal. Also fixed issue which caused the Game View FPS to drop when the editor was moved to a different display. In addition, fixed bad performance when Game View was displayed in a different window at the same time as the Scene View. ([UUM-4697](https://issuetracker.unity3d.com/issues/backport-apple-silicon-m1-game-view-fps-is-very-low-when-the-view-is-moved-to-an-external-display))
    
*   Graphics: Fixed incompatible render pass validation error in built-in pipeline project when graphics API is set to Vulkan. (1355666)
    
*   Input: Fixed Alt-Tabbing out of build leaves the Alt key pressed on return. ([1399038](https://issuetracker.unity3d.com/issues/alt-tabbing-out-of-build-leaves-the-alt-key-pressed-on-return))
    
*   Input: Fixed InputSystem.QueueStateEvent throwing exceptions when called from non-main thread. ([1348778](https://issuetracker.unity3d.com/issues/inputsystem-new-inputsystem-queuestateevent-cannot-be-called-from-another-thread))
    
*   Input: Fixed keys being stuck pressed when application regains focus on Windows Standalone, macOS with input system package. ([1361145](https://issuetracker.unity3d.com/issues/ispressed-keeps-returning-true-when-it-was-true-before-minimizing-the-build-window))
    
*   Input: Fixed mouse coordinates being incorrect until first move on Windows Standalone, Linux, macOS with input system package. ([1231907](https://issuetracker.unity3d.com/issues/mouse-coordinates-reported-as-00-until-the-first-move))
    
*   Input: Fixed PrintScreen key reported as pressed when pressing Insert/Home/Del/etc with NumLock being off with Input System package on Windows (also modified UWP and GDK). ([1359217](https://issuetracker.unity3d.com/issues/certain-input-system-keys-trigger-prtscn-with-either-numlock-on-or-off))
    
*   iOS: Fixed Input Field caret jumping when Hide Mobile Input is used. ([UUM-2610](https://issuetracker.unity3d.com/issues/backport-ios-caret-is-getting-placed-in-the-middle-of-a-text-when-typing-quickly-when-input-fields-hide-mobile-input-is-o))
    
*   Kernel: Fixed issue when attempting to load corrupted rest-certificate.pem cert would crash Unity. ([1423569](https://issuetracker.unity3d.com/issues/unity-crashes-on-stackwalker-getcurrentcallstack-when-rest-certificate-dot-pem-is-corrupted))
    
*   Package Manager: Fixed an issue where some `PackageInfo` properties would not be populated correctly if the package came from a GitHub registry. ([1354652](https://issuetracker.unity3d.com/issues/displayname-in-package-dot-json-is-ignored-if-the-package-is-from-github))
    
*   Package Manager: Package full name has been added to the detail view of a package. (UUM-2724)
    
*   Particles: Fixed errors when viewing a Force Field Preset inspector whilst entering Playmode. ([UUM-1818](https://issuetracker.unity3d.com/issues/backport-particlesystemforce-errors-are-thrown-on-accessing-preset-when-particlesystemforce-is-deleted))
    
*   Profiler: Fixed potential crash when loading AudioClips. (UUM-6099)
    
*   Shaders: Fixed a surface shader error when multiple uv sets were being used on the same texture. ([UUM-929](https://issuetracker.unity3d.com/issues/backport-surface-shader-fails-to-compile-with-redefinition-errors-when-declaring-two-uv-sets-for-the-same-texture))
    
*   Text: Fixed Text component not rendering elements with floating point coordinates correctly on machines with locale set to one that uses commas as decimal separators. (UUM-868)
    
*   uGUI: Fixed oversized UI Sprites with Mip Stripping enabled. ([1393270](https://issuetracker.unity3d.com/issues/sprite-doubles-in-size-in-build-when-the-generate-mip-maps-enabled-in-texture-import-settings))
    
*   UI Toolkit: Fixed PopupField binding does not update the SerializedProperty when the value change.
    
*   UI Toolkit: Fixed PropertyField with out of order enum values. ([1345171](https://issuetracker.unity3d.com/issues/enum-humanbodybones-does-not-point-to-correct-value-when-using-propertyfield-in-uitoolkit))
    
*   Universal Windows Platform: Fixed Application.OpenURL asserting due to not freeing temporary memory. ([UUM-2205](https://issuetracker.unity3d.com/issues/backport-uwp-universal-windows-platform-build-crashes-when-using-application-dot-openurl))
    
*   Universal Windows Platform: Fixed memory leak when creating new PlayerPrefs with key that is longer than 25 characters. (UUM-4166)
    
*   Version Control: Fixed editor hangs when there is no network available.  
    Fixed existing checkout has locked the workspace error.  
    Fixed checkin fails over unstable connection.
    
*   XR: Fixed XR devices not following RunInBackground setting in Player Setting on PC standalone and playmode in Editor.

### Known Issues in 2020.3.36f1

*   AI Navigation: NavMesh::Raycast freezes the whole editor in an infinite loop on Application.UpdateScene ([UUM-2496](https://issuetracker.unity3d.com/issues/navmesh-raycast-freezes-the-whole-editor-in-an-infinite-loop-on-application-dot-updatescene))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Inspector Framework: First array element expansion is broken for arrays that use Custom Property Drawers ([1409773](https://issuetracker.unity3d.com/issues/first-array-element-expansion-is-broken-for-arrays-that-use-custom-property-drawers))
    
*   Kernel: Unity crashes on StackWalker::GetCurrentCallstack when rest-certificate.pem is corrupted ([1423569](https://issuetracker.unity3d.com/issues/unity-crashes-on-stackwalker-getcurrentcallstack-when-rest-certificate-dot-pem-is-corrupted))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Physics: Crash on internalABP::ABP\_PairManager::addPair when switching to ArticulationJointType.SphericalJoint during runtime ([1418715](https://issuetracker.unity3d.com/issues/crash-on-internalabp-abp-pairmanager-addpair-when-switching-to-articulationjointtype-dot-sphericaljoint-during-runtime))
    
*   Physics: Physics overlap queries are not consistent when used against convex Mesh Colliders with a very small scale ([1377578](https://issuetracker.unity3d.com/issues/physics-dot-computepenetration-does-not-detect-overlap-consistently-when-using-convex-mesh-colliders))
    
*   Quality of Life: \[Mac\] Shortcut manager ignores Control modifier ([1425117](https://issuetracker.unity3d.com/issues/mac-shortcut-manager-ignores-control-modifier))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([UUM-2743](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time-1))
    
*   Text: \[Mac\] ShortcutManager ignores Shift modifier ([UUM-4083](https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-modifier-1))
    
*   Texture: \[Backport\] \[MacOS\] Crash on \_\_pthread\_kill when Render Texture has no Depth buffer and Dimension is 3D ([UUM-5459](https://issuetracker.unity3d.com/issues/backport-macos-crash-on-pthread-kill-when-render-texture-has-no-depth-buffer-and-dimension-is-3d))
    

### 2020.3.36f1 Release Notes

#### Changes

*   Serialization: Changed alignment in Resource Image transfer function from 4 to 16 bytes to improve patching results on some platforms.

#### Fixes

*   Android: Fixed an issue to allow 2 segment package names. ([1425979](https://issuetracker.unity3d.com/issues/android-the-build-fails-when-identification-package-name-has-two-segments-one-dot))
    
*   Android: Fixed Screen.resolutions to return all supported refresh rates, not only 60Hz. (1426366)
    
*   Asset Import: Fixed an issue that scripted importers that use Allocator.Temp allocated memory no longer leak memory on the asset import worker.
    
*   Editor: Fixed an issue of uv offsets and eliminates atlas bleed.
    
*   Editor: Fixed default vertex colors for the billboard LOD vertex data for SpeedTree v8 imports. ([1417551](https://issuetracker.unity3d.com/issues/speedtree-speedtreeimporter-misses-assigning-a-proper-colour-to-billboard-vertices-resulting-in-them-being-multi-coloured))
    
*   Editor: Fixed IMGUI state being reset when a EditorUtility.DisplayDialog was opened. ([1380288](https://issuetracker.unity3d.com/issues/windows-exception-after-calling-editorutility-dot-displaydialog-from-reorderablelist-item-propertydrawer))
    
*   Editor: Fixed ReorderableList Inspector undo repaint issue. ([1411755](https://issuetracker.unity3d.com/issues/inspector-gets-garbled-after-assigning-0-to-materials-list-in-mesh-renderer-and-undoing-it))
    
*   Editor: Fixed spurious assembly file locking which could prevent rebuild after using the right clic "Open source code" on a test in the Test Runner window.
    
*   Graphics: Fixed an issue that Texture Memory in Memory Profiler Module is not updated when profiling a Vulkan build. ([1320962](https://issuetracker.unity3d.com/issues/vulkan-texture-memory-in-memory-profiler-module-is-not-updated-when-profiling-a-vulkan-build))
    
*   IL2CPP: Fixed a possible crash during liveness processing when asynchronous delegate invocation is used. ([1417730](https://issuetracker.unity3d.com/issues/crash-when-running-garbagecollectsharedassets))
    
*   IL2CPP: Fixed issue where a try block inside of a loop nested in a try/finally block could cause the finally handler to run multiple times. ([1402180](https://issuetracker.unity3d.com/issues/objectdisposedexception-is-caught-when-an-unused-variable-is-declared-in-the-using-statement))
    
*   IL2CPP: Fixed the module initializer function call signature to avoid calling the wrong method on WebGL. ([1399638](https://issuetracker.unity3d.com/issues/webgl-player-freezes-on-startup-when-calling-getmonomanagerptr))
    
*   Input: Fixed keyboard not working on iOS 15. ([1376970](https://issuetracker.unity3d.com/issues/keyboard-input-is-not-working-when-using-an-external-keyboard-in-ios-15))
    
*   macOS: Fixed corruption when resizing player window during splash screen. (1396489)
    
*   macOS: Fixed corruption when resizing player window. ([1327755](https://issuetracker.unity3d.com/issues/macos-resizing-build-window-causes-red-background-colour-to-appear))
    
*   macOS: Fixed OSX sending a Return keycode event when return was pressed to confirm an IME string. ([1381684](https://issuetracker.unity3d.com/issues/tmp-input-field-submits-empty-string-when-a-correction-from-correction-window-is-selected))
    
*   Mono: Fixed a bug where the SmtpClient would ignore the ServicePointManager's SecurityProtocol level. ([1389326](https://issuetracker.unity3d.com/issues/system-dot-net-dot-mail-dot-smtpexception-421-4-dot-7-66-tls-1-dot-0-and-1-dot-1-are-not-supported-error-is-throw-when-sending-an-email-with-smtpclient))
    
*   Particles: Fixed Collider information for GetTriggerParticles, in the case where there were null colliders in the Trigger Module list. ([1356510](https://issuetracker.unity3d.com/issues/particlesystem-dot-colliderdata-dot-getcollider-returns-null-when-a-collider-is-hit-by-particle-system-particles))
    
*   Particles: Fixed ringbuffer mode to work properly with pause-and-catchup culling mode. ([1385616](https://issuetracker.unity3d.com/issues/culling-resets-particle-system-when-using-ring-buffer-pause-until-replaced-and-culling-pause-and-catch-up))
    
*   Profiler: Fixed untracked memory allocated via AsyncUploadManager when browsing Addressables. ([1410384](https://issuetracker.unity3d.com/issues/allocated-memory-block-with-no-root-area-cannot-be-tracked-when-loading-asset-bundles))
    
*   Scripting: Fixed an issue where the type of generic fields inside generic classes would fail to get resolved when building the project. (1415422)
    
*   uGUI: Fixed InputField not correctly handling IME input when return was pressed. ([1349037](https://issuetracker.unity3d.com/issues/macos-input-field-clears-chinese-slash-japanese-slash-korean-input-when-pressing-enter))
    
*   uGUI: Fixed RectMask2D using the wrong Canvas for calculations after it was reparented. ([1395695](https://issuetracker.unity3d.com/issues/rectmask2d-hides-all-content-when-parented-from-other-display-to-first-dislpay-in-the-game-view-window))
    
*   Version Control: Fixed an Editor hang when entering Play Mode.
    
*   WebGL: Fixed an issue with AudioClip.GetData(). ([1369656](https://issuetracker.unity3d.com/issues/webgl-console-errors-are-thrown-when-calling-audiosource-dot-clip-dot-getdata-in-webgl-build))
    
*   Windows: Fixed dragging files from Unity to other applications when the file path contains non-ASCII characters. ([1402070](https://issuetracker.unity3d.com/issues/win11-file-not-found-is-thrown-in-a-code-editor-when-dragging-a-file-from-editor-that-has-a-non-unicode-symbol-in-the-path))

### Known Issues in 2020.3.35f1

*   Asset Bundles: Textures are not compressed when building bundles ([1412557](https://issuetracker.unity3d.com/issues/textures-not-compressed-when-building-bundles))
    
*   DOTS: \[Plaforms\] Build Configuration General Settings only lets to change Major and Minor versions in 0.50 Platforms version ([1415919](https://issuetracker.unity3d.com/issues/plaforms-build-configuration-general-settings-only-lets-to-change-major-and-minor-versions-in-0-dot-50-platforms-version))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Graphics Device Features: Random-write to UAV texture from shadowcaster shader causes GPU hang when filtering Scene Hierarchy objects ([1417589](https://issuetracker.unity3d.com/issues/random-write-to-uav-texture-from-shadowcaster-shader-causes-gpu-hang-when-filtering-scene-hierarchy-objects))
    
*   Inspector Framework: First array element expansion is broken for arrays that use Custom Property Drawers ([1409773](https://issuetracker.unity3d.com/issues/first-array-element-expansion-is-broken-for-arrays-that-use-custom-property-drawers))
    
*   Kernel: Unity crashes on StackWalker::GetCurrentCallstack when rest-certificate.pem is corrupted ([1423569](https://issuetracker.unity3d.com/issues/unity-crashes-on-stackwalker-getcurrentcallstack-when-rest-certificate-dot-pem-is-corrupted))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Physics: Crash on internalABP::ABP\_PairManager::addPair when switching to ArticulationJointType.SphericalJoint during runtime ([1418715](https://issuetracker.unity3d.com/issues/crash-on-internalabp-abp-pairmanager-addpair-when-switching-to-articulationjointtype-dot-sphericaljoint-during-runtime))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Quality of Life: \[Mac\] Shortcut manager ignores Control modifier ([1425117](https://issuetracker.unity3d.com/issues/mac-shortcut-manager-ignores-control-modifier))
    
*   Quality of Life: \[Mac\] ShortcutManager ignores Shift modifier ([1424655](https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-control-and-option-modifiers))
    
*   Serialization: Editor crash when deserializing an array of a type with a nested fixed-size buffer field ([1400774](https://issuetracker.unity3d.com/issues/editor-crash-when-deserializing-an-array-of-a-type-with-a-nested-fixed-size-buffer-field))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    

### 2020.3.35f1 Release Notes

#### Features

*   Asset Pipeline: Added accelerator Corruption Detection.

#### Improvements

*   Android: Added Initial launch size metadata into AndroidManifest.xml for Chrome OS devices with Android R or higher installed. (1360064)
    
*   Asset Import: Upgraded boost::asio version to v1.20.0. (1408567)
    
*   Editor: Improved the drag & drop speed in the Project view on large projects. ([1314065](https://issuetracker.unity3d.com/issues/dragging-and-dropping-asset-in-the-inspector-is-taking-upwards-of-3-seconds-everytime))
    
*   Input System: Touch input can now be handled from USB secondary capacitive touch screens on Android.
    
*   Mobile: Added a new Player setting "Reset resolution on window resize" to reset resolution when native window is resized. (1393410)
    
*   Scripting: Added automatical retry for file copy exception when running ILPPs is thrown.
    
*   Shaders: Added buildTarget property to ShaderCompilerData struct. ([1403750](https://issuetracker.unity3d.com/issues/no-way-to-get-the-requested-build-target-from-ipreprocessshaders-callback))
    

#### Fixes

*   2D: Fixed a case of Null Referrence Exceptions when Packing a Sprite Atlas with size smaller than the smallest Sprite. ([1416307](https://issuetracker.unity3d.com/issues/texture-null-referrence-exceptions-when-packing-a-sprite-atlas-with-size-smaller-than-the-smallest-sprite))
    
*   2D: Fixed an issue when Skinning Editor will lose reference after exiting Play mode. (1405289)
    
*   2D: Fixed an issue where Lighting is incorrect when Sprite Atlas uses secondary Texture Normal Maps in Linear Color Space. ([1378322](https://issuetracker.unity3d.com/issues/lighting-is-incorrect-when-sprite-atlas-uses-secondary-texture-normal-maps-in-linear-color-space))
    
*   Android: Fixed a bug with Unity UGUI and UI Elements input fields, where switching languages dynamically and IME functionality was not working. ([1395812](https://issuetracker.unity3d.com/issues/android-bluetooth-keyboard-can-only-type-in-english-when-keyboard-language-is-changed-to-any-other-language))
    
*   Android: Fixed a Unity Audio bug related to Bluetooth audio. This was causing issues with Vivox, and possibly other 3rd part audio libraries, with Bluetooth functionality. On Android, Bluetooth audio state is basically global, so Unity Audio now only makes the bare minimum changes to this state. We may still call startBluetoothSco and stopBluetoothSco when starting or re-initializing the audio output engine and when starting/stopping the Unity microphone. We may also call AudioManager.setMode when starting/stopping a Bluetooth mic through the Unity microphone APIs, but that's it. (1418634)
    
*   Android: Fixed app-freezing when an application changes into multi-window(split-screen) on Chrome OS tablet mode. (1361131)
    
*   Asset Pipeline: Fixed an issue where artifact id for an assets didn't get correctly registered, when an asset become up-to-date before it is imported. (1427445)
    
*   Build Pipeline: Fixed an issue where cached Sprite state could be stale.
    
*   Build System: Removed legacy project file causing issues when opened through VSCode's Omnisharp. (1389396)
    
*   Editor: Fixed a crash that could occur when docking a window, if its size is momentarily zero. ([1397003](https://issuetracker.unity3d.com/issues/unity-editor-crashes-when-docking-one-editorwindow-to-the-side-of-a-docked-window))
    
*   Editor: Fixed an issue that the high poly SpeedTrees do not import correctly. (1364523)
    
*   Editor: Fixed an issue that the linux window width is not loaded correctly when loading layout from file. ([1414204](https://issuetracker.unity3d.com/issues/linux-window-width-is-not-loaded-correctly-when-loading-layout-from-file))
    
*   Editor: Fixed occasional missed mouse messages in the Windows Editor when the cursor is locked. ([1365651](https://issuetracker.unity3d.com/issues/input-system-right-mouse-button-waspressedthisframe-is-false-when-left-mouse-button-is-held-down))
    
*   Editor: Fixed ReorderableList custom element height callback exception when there are no elements in the list. ([1399803](https://issuetracker.unity3d.com/issues/reorderablelist-out-of-bounds-exeception))
    
*   Editor: Fixed Scene.isSubScene flag not persistent in some cases when reloading an open scene. ([1396151](https://issuetracker.unity3d.com/issues/scene-dot-issubscene-flag-does-not-persist-for-currently-opened-scenes-when-the-editor-is-restarted))
    
*   Editor: Fixed tooltips not being resolved when using a custom label that does not contain a tooltip. ([1415921](https://issuetracker.unity3d.com/issues/tooltips-are-not-shown-when-hovering-over-name-of-the-value-in-the-inspector))
    
*   GI: Fixed a bug where lighting information on renderers would occasionally be scrambled or lost when saving a scene. ([1359018](https://issuetracker.unity3d.com/issues/baked-lightmap-breaks-on-unityjapanoffice-asset-when-the-scene-in-saved-and-opened-again))
    
*   GI: Fixed prefab instances losing their lighting when they are unpacked, and the scene is reloaded. ([1285269](https://issuetracker.unity3d.com/issues/lightmap-is-shown-in-the-inspector-window-from-an-unpacked-prefab-when-restarting-a-scene))
    
*   GI: Fixed reflection probes not being zeroed out when lighting is cleared.
    
*   GI: Fixed scene lighting data not getting updated when the selected Lighting Data Asset for the scene is changed. ([1263683](https://issuetracker.unity3d.com/issues/lighting-backed-lightmaps-preview-does-not-update-with-respect-to-lighting-data-asset-when-it-is-set-none))
    
*   GI: Removed an assert from when switching to a lighting data asset from a scene that is unloaded but still in the hierarchy. ([1318347](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-manager-equals-null-error-is-shown-after-changing-lighting-data-asset-file-for-the-active-scene))
    
*   Graphics: Fixed a flickering of particle system when using Vulkan. (1417289)
    
*   Graphics: Fixed mipmap streaming issue that could happen in projects where Quality Setting "Texture Quality" specifies a texture mipmap level of lower resolution that the one set in Quality Setting "Texture Streaming / Max Level Reduction" (case 1417482/1410879). (1410879)
    
*   Graphics: Fixed wrong RT discarding on metal when using CommandBuffers in OnRenderImage. ([1395106](https://issuetracker.unity3d.com/issues/ios-next-camera-is-prevented-from-rendering-in-stack-when-precommand-buffer-is-used-for-post-processing-in-main-camera))
    
*   IL2CPP: Fixed a Clang 12+ bug that can happen with IL2CPP by changing the Hash128 constructor code. (1422065)
    
*   IL2CPP: Fixed a rare incremental GC crash on Windows. ([1411601](https://issuetracker.unity3d.com/issues/incremental-gc-pushes-invalid-stack-range-on-windows))
    
*   IL2CPP: Fixed an issue where calls to GetHashCode on value types with no instance fields would not return a stable value. ([1411455](https://issuetracker.unity3d.com/issues/il2cpp-calling-gethashcode-on-instances-of-empty-structs-does-not-return-the-same-value-in-il2cpp-builds))
    
*   IL2CPP: Improved error messaging by throwing an ArgumentException when an delegate is created on an instance method with a null this parameter. ([1412320](https://issuetracker.unity3d.com/issues/memory-corruption-on-macos-slash-ios-slash-tvos))
    
*   iOS: Fixed an occasional xcode 13.3 build fail due to "a cyclic reference". ([1418416](https://issuetracker.unity3d.com/issues/ios-cyclic-references-are-detected-when-building-with-xcode-13-dot-3))
    
*   Linux: Fixed an issue that the license check failure shows error dialog and opens Hub. (1337329)
    
*   Mono: Removed handling SIGINT when Mono is embedded in Unity and the Player. ([1376434](https://issuetracker.unity3d.com/issues/server-build-doesnt-respond-to-ctrl-plus-c-after-setting-console-dot-foregroundcolor))
    
*   Networking: Fixed UnityWebRequest support for System.Uri with file path containing spaces and plus characters (both at the same time). ([1367599](https://issuetracker.unity3d.com/issues/unitywebrequest-returns-http-slash-1-dot-1-404-not-found-if-uri-contains-plus-plus-character-followed-by-space-character))
    
*   Particles: Fixed a culling issue if a Particle System mesh changes. ([1329097](https://issuetracker.unity3d.com/issues/particle-system-with-custom-mesh-culls-objects-incorrectly-when-the-meshes-should-be-partly-visible))
    
*   Profiler: Fixed a crash when -profiler-enable arg is used. ([1295637](https://issuetracker.unity3d.com/issues/deployment-management-project-fails-to-open-with-the-command-line-argument-profiler-enable-and-crash-logo-appears))
    
*   Profiler: Fixed reported "system used memory" in Profiler and Profiler Counter to be closer to system tools reported values. (1383173)
    
*   Profiler: Fixed Texture2DArrays not reporting data usage correctly in memory samples. ([1354202](https://issuetracker.unity3d.com/issues/profiler-texture-memory-displays-0-dot-00-kb-when-the-texture-is-not-readable-and-when-profiling-some-devices))
    
*   Scripting: Fixed an issue so that hidden sequence points are ignored when calling Coverage.GetSequencePointsFor. ([1415957](https://issuetracker.unity3d.com/issues/0xfeefee-sequence-point-line-causes-editor-to-stuck))
    
*   Shaders: Fixed a rare shader compiler crash when expanding unterminated macros. ([1402454](https://issuetracker.unity3d.com/issues/shader-compiler-errors-are-thrown-due-to-unexpected-reasons-related-to-the-shader-script))
    
*   Shaders: Fixed an issue that changing line endings in shaders or include files will no longer cause recompilation of variants. ([1415557](https://issuetracker.unity3d.com/issues/line-ending-changes-in-shaders-or-includes-cause-full-shader-recompiles))
    
*   Shaders: Fixed an issue that the compute shader compilation progress bar no longer gets stuck. (1415495)
    
*   Shaders: Fixed an issue that the Material, Shader and MaterialPropertyBlock will now show an error in Editor and development player builds when adding a value using one of the Set\* methods with the same name but different underlying type as an existing value set previously. ([1404185](https://issuetracker.unity3d.com/issues/no-error-if-setting-a-property-with-the-same-name-but-different-types))
    
*   Shaders: Fixed incorrect batching for shadow casters when shaders have properties affecting fixed-function state. ([1328077](https://issuetracker.unity3d.com/issues/shaders-controlling-cull-mode-via-a-property-get-incorrectly-rendered-in-the-shadow-caster-pass))
    
*   Source Code Build: Fixed ProjectFile dependency breakage for source code customers.
    
*   uGUI: Fixed incorrect input coordinates when using multiple displays and the main display had a non native resolution. ([1141732](https://issuetracker.unity3d.com/issues/buttons-hitbox-is-offset-when-building-standalone-project-for-two-screens))
    
*   UI Toolkit: Fixed the preview texture of linear gradients in gamma projects. ([1369425](https://issuetracker.unity3d.com/issues/shadergraph-getting-a-smaller-gradient-than-generated-code-example-when-using-default-gradient-node))
    
*   Version Control: Fixed an issue that the Editor gets stuck in a VCS operation when entering play mode if the VCS server doesn't respond.
    
*   Video: Fixed a crash on UnityMain when building for server with active VideoPlayer in Scene. ([1350949](https://issuetracker.unity3d.com/issues/crash-on-unitymain-when-building-for-server-with-active-videoplayer-in-scene))
    
*   Windows: Fixed mouse button occasional becoming stuck in "down" state when running in Play Mode. ([1405273](https://issuetracker.unity3d.com/issues/input-system-sometimes-does-not-fire-canceled-event-on-left-click-action))
    
*   Windows: Fixed suspending HID input in Editor when runInBackground set. (1427801)
    
*   XR: Fixed Unity VR Splash screen not showing up on UWP.

### Known Issues in 2020.3.34f1

*   Animation: 'Make transition' option is not displayed when right-clicking on the Animation State ([1413918](https://issuetracker.unity3d.com/issues/make-transition-option-is-not-displayed-when-right-clicking-on-the-animation-state))
    
*   DirectX11: Random-write to UAV texture from shadowcaster shader causes GPU hang when filtering Scene Hierarchy objects ([1417589](https://issuetracker.unity3d.com/issues/random-write-to-uav-texture-from-shadowcaster-shader-causes-gpu-hang-when-filtering-scene-hierarchy-objects))
    
*   DOTS: \[Plaforms\] Build Configuration General Settings only lets to change Major and Minor versions in 0.50 Platforms version ([1415919](https://issuetracker.unity3d.com/issues/plaforms-build-configuration-general-settings-only-lets-to-change-major-and-minor-versions-in-0-dot-50-platforms-version))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Inspector Framework: Tooltips are not shown when hovering over name of the value in the Inspector ([1415921](https://issuetracker.unity3d.com/issues/tooltips-are-not-shown-when-hovering-over-name-of-the-value-in-the-inspector))
    
*   MacOS: \[M1\]\[Rosetta\] Editor crashes on mono\_arch\_patch\_callsite when opening the project ([1390659](https://issuetracker.unity3d.com/issues/m1-rosetta-editor-crashes-on-mono-arch-patch-callsite-when-opening-the-project))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Physics: Crash on internalABP::ABP\_PairManager::addPair when switching to ArticulationJointType.SphericalJoint during runtime ([1418715](https://issuetracker.unity3d.com/issues/crash-on-internalabp-abp-pairmanager-addpair-when-switching-to-articulationjointtype-dot-sphericaljoint-during-runtime))
    
*   Quality of Life: ReorderableList out of bounds exeception ([1399803](https://issuetracker.unity3d.com/issues/reorderablelist-out-of-bounds-exeception))
    
*   Quality of Life: \[Mac\] ShortcutManager ignores Shift modifier ([1424655](https://issuetracker.unity3d.com/issues/mac-shortcutmanager-ignores-shift-control-and-option-modifiers))
    
*   Scene/Game View: Game Object Material starts flickering when dragging new material over other Game Object that touches first Object ([1423053](https://issuetracker.unity3d.com/issues/game-object-material-starts-flickering-when-dragging-new-material-over-other-game-object-that-touches-first-object))
    
*   Serialization: Editor crash when deserializing an array of a type with a nested fixed-size buffer field ([1400774](https://issuetracker.unity3d.com/issues/editor-crash-when-deserializing-an-array-of-a-type-with-a-nested-fixed-size-buffer-field))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Texture: File could not be read error is thrown when a 16 bit .tif file is present in the project ([1404047](https://issuetracker.unity3d.com/issues/file-could-not-be-read-error-is-thrown-when-a-16-bit-tif-file-is-present-in-the-project))
    

### 2020.3.34f1 Release Notes

#### API Changes

*   Editor: Removed: Made Il2CppEagerStaticClassConstructionAttribute internal to avoid conflicts with other definitions outside of the package.
    
*   iOS: Added: iPad Air 5 and iPhone SE 3 to devices.
    

#### Fixes

*   AI: Fixed unidirectional NavMesh links creating erroneous connection between polygons. ([1328727](https://issuetracker.unity3d.com/issues/unidirectional-navmeshlink-results-in-navmeshagents-pathing-incorrectly))
    
*   Core: Removed disposed NativeArray and NativeSlice check when iterating or accessing properties like Length due to a performance regression when collections checks are enabled. (1393315)
    
*   Editor: Fixed an issue where if the Gameview was a fixed size, upon opening the editor the the Gameview was in the background it wouldn't update its size value properly. ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Editor: Fixed NullReference when showing UnityEvent popup and the GameObject contained a component with a missing script. ([1388739](https://issuetracker.unity3d.com/issues/unityevent-nullreference-error-is-thrown-when-selecting-a-unityevent-function-for-a-gameobject-that-has-a-missing-script))
    
*   GI: Fixed NaN artifacts that were sometimes appearing in lightmap when sampling a rectangle light. ([1360935](https://issuetracker.unity3d.com/issues/hdrp-light-artifacts-are-generated-in-the-scene-when-the-number-of-samples-is-more-than-400))
    
*   Graphics: Fixed a setScissorRect crashing on metal when adjusting panels in editor. ([1256241](https://issuetracker.unity3d.com/issues/setscissorrect-crashes-on-metal-when-adjusting-panels-in-editor))
    
*   Graphics: Fixed build prints out (Can't delete buffers from graphics jobs) logs in the console. (1384840)
    
*   Graphics: Fixed overlay camera stacking is not working on MacOS when using OpenGLCore with MSAA. ([1250331](https://issuetracker.unity3d.com/issues/macos-overlay-camera-stacking-is-not-working-when-using-openglcore))
    
*   Graphics: Fixed shadow maps in frame debugger. ([1278463](https://issuetracker.unity3d.com/issues/game-view-is-black-when-using-frame-debugger-in-render-main-shadowmap))
    
*   IL2CPP: Corrected the behavior of byte to integer conversions when they happen across basic blocks (e.g. inside the ternary operator). ([1382752](https://issuetracker.unity3d.com/issues/ternary-operation-with-implicit-type-conversion-from-byte-returns-incorrect-value-when-the-operation-is-done-in-webgl-build))
    
*   IL2CPP: Corrected the Socket SendTimeout and GetTimeout property getter implementations on Posix platforms. ([1403251](https://issuetracker.unity3d.com/issues/android-il2cpp-sendtimeout-returns-incorrect-values-when-project-is-built-with-il2cpp))
    
*   IL2CPP: Fixed an issiue to allow blittable, generic value types to be marshaled as delegate parameters. ([1348863](https://issuetracker.unity3d.com/issues/il2cpp-does-not-support-marshaling-of-blittable-generic-structs))
    
*   IL2CPP: Fixed an issue to ensure that exception handlers are properly sorted internally to avoid code conversion errors with System.Text.Json (and maybe other assemblies). ([1400410](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-on-try-block-ends-without-any-catch-finally-nor-fault-handler))
    
*   License: Increased timeouts of license client and disable signature validation.
    
*   Networking: Fixed an issue that UnityTLS client API doesn't correctly validate certificates. (1413222)
    
*   Networking: Fixed UnityWebRequest: filter error display in players Developer console the same way as in Editor. (1413106)
    
*   Package Manager: Fixed an issue that in "My Assets" tab, some package thumbnails lead to wrong target URLs.
    
*   Package Manager: Fixed an issue where UPM would hang for five seconds when exiting. (1409591)
    
*   Package Manager: Fixed bug where Package Manager window In Project list would be empty for a newly created project. ([1350368](https://issuetracker.unity3d.com/issues/package-manager-in-project-packages-take-a-while-to-load-initially-every-time-a-project-is-opened))
    
*   Particles: Fixed a particle flickering. (1415307)
    
*   Physics: Fixed an issue with cloth interpolation where tabbing in/out of an application on Windows Players would cause the component to behave erratically. ([1380001](https://issuetracker.unity3d.com/issues/cloth-material-glitches-out-when-running-at-inconsistent-framerate-or-during-a-short-game-freeze))
    
*   Scripting: Fixed filtering of assemblies by platform constraints not working and by defines. ([1373388](https://issuetracker.unity3d.com/issues/found-plugins-with-same-names-error-is-thrown-for-the-microsoft-extensions-logging-package-when-building-on-android-platform))
    
*   Shaders: Added missing eye index setup macro in surface shader. ([1406798](https://issuetracker.unity3d.com/issues/xr-built-in-rp-surface-shader-unity-setup-stereo-eye-index-post-vertex-is-missing-from-custom-surface-shader))
    
*   Shaders: Fixed a bug where HLSLcc was not using half precision temps when multiple half precision sample instructions targeted the same temp register. ([1383901](https://issuetracker.unity3d.com/issues/fp32-is-used-for-a-temporary-when-compiling-a-shader-for-gles-or-vulkan))
    
*   uGUI: Fixed issue in TimeManager that led to unscaledDeltaTime to be 0, cascading to other areas such as the ScrollRect code that produced a NaN in resulting calculations. ([1375087](https://issuetracker.unity3d.com/issues/quest-xr-dragging-a-scrollrect-makes-it-disappear-and-set-nan-values))
    
*   Universal Windows Platform: Fixed development builds not starting up on Windows 10 versions prior to build 15063.
    
*   Universal Windows Platform: Fixed games sometimes running on integrated GPU on certain laptops. UWP player will now behave like Windows Standalone and will always try to run on the dedicated GPU. ([1394866](https://issuetracker.unity3d.com/issues/unity-player-is-using-integrated-gpu-instead-of-dedicated-when-using-universal-windows-platform))
    
*   Universal Windows Platform: Fixed SystemInfo.operatingSystem returning wrong Windows version on some versions of Windows (notably builds 18363, 19042, 19043 and 19044). ([1400786](https://issuetracker.unity3d.com/issues/uwp-os-version-detection-is-wrong-on-some-windows-versions))
    
*   WebGL: Fixed video playback in Firefox to loop seamlessly. For more information, see https://bugzilla.mozilla.org/show\_bug.cgi?id=1668591. ([1267333](https://issuetracker.unity3d.com/issues/theres-a-black-frame-in-a-video-on-firefox-browser-when-the-video-loops))
    
*   WebGL: Reduced memory usage on dual Intel integrated + NVidia GPU Windows laptops when using URP in a large scene with many individual objects. ([1225254](https://issuetracker.unity3d.com/issues/webgl-urp-large-memory-allocations-on-builds-when-many-objects-are-visible-in-the-viewport-while-using-integrated-gpu))
    
*   Windows: Fixed "-monitor" argument incorrectly affecting the target display when desired window bounds exceed the resolution of the target display. ([1401606](https://issuetracker.unity3d.com/issues/unity-window-not-launching-from-specified-hardware-display-when-using-command-line-arguments))
    
*   XR: Fixed issue where duplicate UnitySubsystemsManifest.json files were added while building XR app for Android with Build App Bundle option. This removes duplicates for OpenXR, Oculus, and MockHMD. ([1411616](https://issuetracker.unity3d.com/issues/android-openxr-including-openxr-in-an-android-aab-split-build-causes-the-build-to-fail))
    
*   XR: Fixed occlusion mesh showing up when stereo is disabled. ([1307273](https://issuetracker.unity3d.com/issues/xr-sdk-mockhmd-secondary-camera-does-not-render-into-full-render-texture))
    
*   XR: Fixed Oculus Quest software keyboard not showing up on InputField interaction. (1417991)

### Known Issues in 2020.3.33f1

*   Tooltips are not shown when hovering over name of the value in the Inspector ([1415921](https://issuetracker.unity3d.com/issues/tooltips-are-not-shown-when-hovering-over-name-of-the-value-in-the-inspector))
    
*   DOTS: "IndexOutOfRangeException" errors appear when entering Play Mode if using "AsDeferredJobArray" ([1395710](https://issuetracker.unity3d.com/issues/errors-appear-when-entering-play-mode-if-using-asdeferredjobarray))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails on Try block ends without any catch, finally, nor fault handler ([1400410](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-on-try-block-ends-without-any-catch-finally-nor-fault-handler))
    
*   MacOS: \[M1\]\[Rosetta\] Editor crashes on mono\_arch\_patch\_callsite when opening the project ([1390659](https://issuetracker.unity3d.com/issues/m1-rosetta-editor-crashes-on-mono-arch-patch-callsite-when-opening-the-project))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Mono: \[Android\] "Found plugins with same names" error is thrown when building on Android with duplicate .dll files ([1373388](https://issuetracker.unity3d.com/issues/found-plugins-with-same-names-error-is-thrown-for-the-microsoft-extensions-logging-package-when-building-on-android-platform))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Serialization: Editor crash when deserializing an array of a type with a nested fixed-size buffer field ([1400774](https://issuetracker.unity3d.com/issues/editor-crash-when-deserializing-an-array-of-a-type-with-a-nested-fixed-size-buffer-field))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    

### 2020.3.33f1 Release Notes

#### Improvements

*   2D: Optimized texture space needed for rect packing.
    
*   Editor: Support Hungarian (and other) unicode characters in editor. ([1300004](https://issuetracker.unity3d.com/issues/vietnamese-language-character-replaced-with-in-inputfield))
    
*   Graphics: Improved to CullScene performance; in large scenes (10000+ Renderers) this can halve the time spent in CullScene. ([1399880](https://issuetracker.unity3d.com/issues/culling-dynamic-objects-takes-significantly-longer-in-2019-dot-4-and-above-compared-to-2018-dot-4))
    

#### API Changes

*   Android: Changed: Renamed TouchScreenKeyboard.Android.closeKeyboardOnOutsideTap to TouchScreenKeyboard.Android.consumesOutsideTouches. (1400608)

#### Changes

*   2D: 2D Animation, PSD Importer, 2D Common and 2D Sprite Shape have updated their Unity minimum version to Unity 2020.3.26f1.
    
*   2D: Removed Triangle.Net from 2D Animation runtime.
    
*   Package Manager: The Git LFS cache enabled by setting the `UPM_ENABLE_GIT_LFS_CACHE` environment variable is now always located under the global cache root, even when the cache root location is customized.
    

#### Fixes

*   2D: Fixed 'require texture compression' setting being reset during player build. ([1397965](https://issuetracker.unity3d.com/issues/texture-size-increased-on-first-build-when-compress-textures-slash-assets-on-import-is-enabled))
    
*   2D: Fixed a null exception when importing files with masks. ([1388820](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-attempting-to-make-changes-to-a-psd-file))
    
*   2D: Fixed an issue where the SpriteSkin components would not get initialized on editor launch. (1401139)
    
*   Android: Fixed an issue to not add PlayCore dependency to build.gradle file if it is already added to the project as an .aar file. ([1374774](https://issuetracker.unity3d.com/issues/android-core-libraries-are-not-detected-when-theyre-just-in-the-asset-folder-when-building-app-bundle))
    
*   Android: Fixed high memory usage for textures when uploading textures at runtime using Vulkan. ([1300900](https://issuetracker.unity3d.com/issues/vulkan-mono-the-amount-of-memory-allocated-for-textures-on-vulkan-is-significantly-higher-compared-to-gles3))
    
*   Asset Pipeline: Fixed an issue that folder case-renaming are not properly detected by Perforce on a case-sensitive server (Linux). ([1337143](https://issuetracker.unity3d.com/issues/perforce-folder-renaming-with-letter-case-changes-are-not-properly-detected))
    
*   Asset Pipeline: Fixed an issue where assets with dependencies on a script might not get updated correctly if a \[FormerlySerializedAs\] attribute was added. ([1405215](https://issuetracker.unity3d.com/issues/prefab-is-not-reimported-when-formerlyserializedas-is-added-to-script))
    
*   Build Pipeline: Fixed an issue to allow BuildPlayerOptions.assetBundleManifestPath to be used when building player. ([1399616](https://issuetracker.unity3d.com/issues/buildplayeroptions-dot-assetbundlemanifestpath-can-not-be-set-by-using-buildplayerwindow-dot-registerbuildplayerhandler))
    
*   Build Pipeline: Fixed edge case passing in missing or deleted objects could crash the Editor during the build. ([1357414](https://issuetracker.unity3d.com/issues/crash-on-buildpipeline-writesceneserializedfile-when-building-addressable-content))
    
*   Editor: Fixed an Editor crash when adding scripts to objects where the class name did not match the filename. ([1411915](https://issuetracker.unity3d.com/issues/editor-crashes-when-adding-a-script-component-using-drag-and-drop-and-the-class-name-is-different-than-the-file-name))
    
*   Editor: Fixed an issue and now the Application Identifier errors and warnings are shown in the correct cases. (1382818)
    
*   Editor: Fixed an issue causing C# serializable generic types to incorrectly contain data for editor only fields in serialized data when in a player context.
    
*   Editor: Fixed Animator state not showing controls due to presence of ReorderableList. ([1412466](https://issuetracker.unity3d.com/issues/animation-state-properties-not-visible-when-the-state-has-an-outgoing-transition))
    
*   Editor: Fixed the validation of the Application Identifier.
    
*   Graphics: Fixed an issue that Crunch compression now properly handles uncompressed formats (even if not 32-bit RGBA) without flipping color channels or getting data corruption. (1340715)
    
*   Graphics: Fixed an issue that EditorUtility.Compress to crunch fails without crashing when providing invalid texture sizes. (1331258)
    
*   Graphics: Fixed issue with resolution change when using renderFrameInterval. ([1355972](https://issuetracker.unity3d.com/issues/couldnt-switch-to-requested-monitor-resolution-error-when-changing-resolution-and-using-ondemandrendering-dot-renderframeinterval))
    
*   IL2CPP: Corrected the logging of UnityLinker and IL2CPP messages in the editor log when UNITY\_EXT\_LOGGING is enabled. (1386302)
    
*   IMGUI: Fixed a memory leak when continuously calling Repaint inside OnGUI after GUI.Window. ([1371866](https://issuetracker.unity3d.com/issues/guilayout-dot-window-lead-to-memory-leak-on-unity-2020))
    
*   Package Manager: Fixed an issue on Windows where resolving a package could fail if any files were temporarily being used by another process. (1384471)
    
*   Package Manager: Fixed an issue where a package download would fail if the download URL had a default port set (i.e. `80` for HTTP or `443` for HTTPS). (1388256)
    
*   Package Manager: Fixed an issue where having package folders without a package manifest in the project's Library folder would fail resolving `local-tarball` or `git` packages.
    
*   Package Manager: Fixed an issue where JSON files encoded using UTF-8 with BOM could not be parsed.
    
*   Package Manager: Fixed an issue where packages using Git LFS on Apple Silicon hardware would fail if Git LFS was installed through Homebrew and the Git LFS executable location was not added to the PATH environment variable. (1353769)
    
*   Package Manager: Fixed an issue where the `PackageManager.Client.SearchAll()` method would fail if the user did not have access permission for one of the packages hosted on the registry. ([1381544](https://issuetracker.unity3d.com/issues/package-manager-search-request-fails-when-user-does-not-have-permission-to-access-one-or-more-packages))
    
*   Package Manager: Fixed an issue where `local-tarball` dependencies would become unresolved if the source tarball was removed.
    
*   Particles: Fixed FPS mode when using a Single Row in the Texture Sheet Animation module. ([1373996](https://issuetracker.unity3d.com/issues/particles-are-played-at-the-wrong-fps-when-the-particles-texture-sheet-animation-is-set-to-single-row))
    
*   UI Toolkit: Fixed an issue that an invisible VisualElement with UsageHints.GroupTransform set would not apply its transform to its visible descendants. ([1402057](https://issuetracker.unity3d.com/issues/uir-invisible-group-does-not-apply-its-transform-to-its-visible-descendants))
    
*   Universal Windows Platform: Fixed builds hanging on startup on HoloLens. ([1414288](https://issuetracker.unity3d.com/issues/app-doesnt-launch-on-hl2-uwp-after-update-to-2020-dot-3-32f1))
    
*   Web: Updated UnityLoader.js macOS string to match the string SystemInfo.cpp checks against. ([1375632](https://issuetracker.unity3d.com/issues/shortcuts-with-command-key-on-macos-do-not-work-with-text-input-fields-when-player-is-webgl))
    
*   WebGL: Fixed a crash when using AudiClip.priority and AudioSettings.Reset. ([1385590](https://issuetracker.unity3d.com/issues/webgl-audio-app-freezes-in-scene-that-uses-audiosource-dot-priority))
    
*   XR: Fixed 2x memory usage on Quest for textures that are created procedurally. ([1378571](https://issuetracker.unity3d.com/issues/texture-vulkan-xr-loading-texture-at-runtime-needs-2x-memory-compared-to-a-built-in-texture))
    
*   XR: Fixed a texture memory leak on texture uploads. ([1287057](https://issuetracker.unity3d.com/issues/xr-vulkan-quest1-apps-have-significantly-higher-memory-consumption-on-vulkan-compared-to-gles3))

### Known Issues in 2020.3.32f1

*   Animation: Animation state properties not visible when the state has an outgoing transition ([1412466](https://issuetracker.unity3d.com/issues/animation-state-properties-not-visible-when-the-state-has-an-outgoing-transition))
    
*   Asset - Database: Texture size increased on first build when 'Compress Textures/Assets on Import' is enabled ([1397965](https://issuetracker.unity3d.com/issues/texture-size-increased-on-first-build-when-compress-textures-slash-assets-on-import-is-enabled))
    
*   DOTS: "IndexOutOfRangeException" errors appear when entering Play Mode if using "AsDeferredJobArray" ([1395710](https://issuetracker.unity3d.com/issues/errors-appear-when-entering-play-mode-if-using-asdeferredjobarray))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails on Try block ends without any catch, finally, nor fault handler ([1400410](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-on-try-block-ends-without-any-catch-finally-nor-fault-handler))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   MacOS: \[M1\]\[Rosetta\] Editor crashes on mono\_arch\_patch\_callsite when opening the project ([1390659](https://issuetracker.unity3d.com/issues/m1-rosetta-editor-crashes-on-mono-arch-patch-callsite-when-opening-the-project))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    

### 2020.3.32f1 Release Notes

#### Improvements

*   Scripting: Editor will display a warning if trying to open a project with an External Code Editor which was removed. (1401221)

#### Changes

*   Graphics: Encoding R8, R16, RFloat and RHalf to EXR now encodes to a grayscale image. (1343287)

#### Fixes

*   AI: Fixed game freezing when using NavMesh.Raycast() with a NavMesh that contains an unexpected invalid polygon. (1346645)
    
*   Android: Fixed a crash with Vulkan when putting app into background during startup. ([1399459](https://issuetracker.unity3d.com/issues/android-vulkan-application-crashes-upon-opening-after-putting-it-to-sleep-while-in-the-loading-screen))
    
*   Asset Bundles: Fixed regression where skinned mesh were no longer being compressed. ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   Asset Pipeline: Fixed an issue that assets are not checked out in Version Control when the NavMesh changes after baking. ([1321912](https://issuetracker.unity3d.com/issues/navmesh-assets-arent-checked-out-in-version-control-when-the-navmesh-changes-after-baking))
    
*   Core: Fixed an issue that the message "Connection is no longer valid.Calling auto disconnect" appears when closing Player. ([1336988](https://issuetracker.unity3d.com/issues/profiler-throws-auto-disconnect-error-when-closing-player-abruptly))
    
*   Editor: Fixed an issue where keyUp events are never received in the macOS editor under playmode. ([1380143](https://issuetracker.unity3d.com/issues/macos-keyboard-input-keys-sticky-and-get-stuck-axis-when-low-frame-rate-on-macos))
    
*   GI: Fixed a bug where environment lighting from an additively loaded scene would be ignored, when unloading the base scene, and that scene contains a light probe group. ([1324966](https://issuetracker.unity3d.com/issues/previously-loaded-scenes-ambient-light-is-applied-to-a-gameobject-when-loading-a-scene-with-loadscene-additive))
    
*   GI: Fixed a crash when adding another scene to the Hierarchy window. ([1394168](https://issuetracker.unity3d.com/issues/editor-crashes-when-adding-another-scene-to-the-hierarchy-window))
    
*   Graphics: Fixed a hang on repeated calls to GraphicsBuffer.CopyCount. ([1353308](https://issuetracker.unity3d.com/issues/crash-with-graphicsbuffer-dot-copycount-on-dx11-with-intel-integrated-graphics))
    
*   Graphics: Fixed an "async texture load" error that MicroSplat terrain texture cannot be loaded. ([1351248](https://issuetracker.unity3d.com/issues/ios-microsplat-terrain-texture-cannot-be-loaded-due-to-async-texture-load-error))
    
*   Graphics: Fixed splash screen getting rendered at slightly darker color when drawing it from script and the project uses linear color space. ([1369235](https://issuetracker.unity3d.com/issues/after-building-the-project-splash-screen-is-darker-when-called-using-code))
    
*   Graphics: Fixed sRGB graphicsFormat selection for rendertextures, now allowing selection of sRGB format. ([1295276](https://issuetracker.unity3d.com/issues/cant-select-srgb-color-format-for-render-texture-on-hdrp-project))
    
*   IL2CPP: Fixed a il2cpp.exe crashing on machines that used more than 64 threads. (1389102)
    
*   IL2CPP: Fixed an error that marshaling of delegates with by reference types is now supported when the return type is blittable. ([1399978](https://issuetracker.unity3d.com/issues/il2cpp-android-marshaldirectiveexception-error-when-using-microsoft-onnxruntime-and-building-on-android-with-il2cpp))
    
*   IL2CPP: Fixed an error with builds where C# comments contained multiple slashes/backslashes separated by whitespace. ([1391435](https://issuetracker.unity3d.com/issues/il2cpp-buildfailedexception-and-bee-errors-are-thrown-in-the-console-window-when-building-project-for-android))
    
*   iOS: Fixed an issue that .meta files are no longer included in build for plugins of .plugin type. ([1184957](https://issuetracker.unity3d.com/issues/possibly-ios-unity-meta-files-are-generated-in-the-plugin-directory-and-then-copied-to-plugins-directory-in-the-xcode-build))
    
*   iOS: Fixed CoreText warning spam on iOS15. ([1397966](https://issuetracker.unity3d.com/issues/ios-15-coretext-warnings-are-spammed-constantly-when-using-text-ui-on-ios-15-devices))
    
*   iOS: Fixed value of Screen.safeArea retrieved during initialization of packages. ([1288515](https://issuetracker.unity3d.com/issues/ios-wrong-screen-dot-safearea-values-are-retrieved-when-the-xrloader-is-initialized-and-device-with-a-notch-is-used), [1378593](https://issuetracker.unity3d.com/issues/ios-15-screen-dot-safearea-dot-width-returns-incorrect-value-when-devices-orientation-is-switched-to-landscape-mode))
    
*   macOS: Fixed a rare crash in GameView pointing to BufferMetal::IsBusy. ([1405248](https://issuetracker.unity3d.com/issues/editor-crashes-on-buffermetal-isbusy-after-opening-a-scene))
    
*   macOS: Fixed an issue that will now correctly appear in the title bar next to the graphics mode if running under Rosetta 2. ([1329708](https://issuetracker.unity3d.com/issues/macos-there-is-no-way-to-tell-if-you-are-running-under-rosetta))
    
*   Package Manager: Fixed an error message that license error with a descriptive error message will be displayed. (1396272)
    
*   Particles: Fixed a flickering when using Mesh GPU Instancing. ([1390346](https://issuetracker.unity3d.com/issues/particles-are-flickering-when-in-play-mode))
    
*   Prefabs: Fixed an issue that memory gets allocated for GC each frame when using PrefabStageUtility.GetPrefabStage(). ([1343935](https://issuetracker.unity3d.com/issues/memory-gets-allocated-for-gc-each-frame-when-using-prefabstageutility-dot-getprefabstage))
    
*   Serialization: Fixed crash when entering into playmode and user would change domain during OnBeforeSerialize. ([1316002](https://issuetracker.unity3d.com/issues/crash-with-various-stack-traces-when-entering-play-mode-after-restarting-the-editor))
    
*   UI: Fixed an issue which causes duplicated UI draw calls to show up in the Framedebugger. ([1342417](https://issuetracker.unity3d.com/issues/frame-debugger-android-there-are-two-draw-mesh-calls-instead-of-one-when-profiling-on-an-android-device))
    
*   UI: Fixed build error when \_MainTex is not present in ui shader. ([1394042](https://issuetracker.unity3d.com/issues/error-is-thrown-in-build-when-using-shader-with-no-maintex-property))
    
*   VFX Graph: Fixed an unexpected behavior while using Simulate on a paused effect. ([1355385](https://issuetracker.unity3d.com/issues/vfx-particle-simulation-doesnt-match-the-reference-vfx-when-using-visualeffect-dot-simulate))
    
*   Windows: Fixed player window position being offset from the left side of the screen when running in windowed mode at a resolution that doesn't fully fit inside the display. ([1378303](https://issuetracker.unity3d.com/issues/windowed-standalone-player-is-offset-from-the-edge-of-the-screen-when-built-for-native-resolution-on-windows))

### Known Issues in 2020.3.31f1

*   Asset - Database: Texture size increased on first build when 'Compress Textures/Assets on Import' is enabled ([1397965](https://issuetracker.unity3d.com/issues/texture-size-increased-on-first-build-when-compress-textures-slash-assets-on-import-is-enabled))
    
*   Asset Bundles: Asset Bundle size incrementally increases when updating the Unity Editor and rebuilding the Asset Bundle ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   DOTS: "IndexOutOfRangeException" errors appear when entering Play Mode if using "AsDeferredJobArray" ([1395710](https://issuetracker.unity3d.com/issues/errors-appear-when-entering-play-mode-if-using-asdeferredjobarray))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails on Try block ends without any catch, finally, nor fault handler ([1400410](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-on-try-block-ends-without-any-catch-finally-nor-fault-handler))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Metal: Editor crashes on BufferMetal::IsBusy after opening a Scene ([1405248](https://issuetracker.unity3d.com/issues/editor-crashes-on-buffermetal-isbusy-after-opening-a-scene))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Visual Effects - Legacy: \[URP\] Particles are flickering when in Play Mode ([1390346](https://issuetracker.unity3d.com/issues/particles-are-flickering-when-in-play-mode))
    

### 2020.3.31f1 Release Notes

#### Improvements

*   Android: Updated some APIs to support the behavior changes of LocationManager in Android 12. ([1379467](https://issuetracker.unity3d.com/issues/android-input-dot-location-dot-start-doesnt-update-on-android-12))
    
*   Asset Bundles: Improved performance of Asset Bundle building when many bundles exist. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   IL2CPP: Improved error messages when we cannot compile C++ code due to Visual C++ toolchain or Windows SDK being not installed on the machine. ([1287868](https://issuetracker.unity3d.com/issues/poor-error-message-from-il2cpp-on-windows-desktop-with-specific-visual-studio-installation-sequence))
    
*   Physics: Enabled setting inertia tensor to be equal to zero (infinite). ([1394069](https://issuetracker.unity3d.com/issues/error-thrown-when-disabling-rigidbody-with-a-custom-inertia-tensor-and-constraint))
    
*   Scripting: Improved AddComponent so it scales better with the projects amount of components. ([1278548](https://issuetracker.unity3d.com/issues/performance-decreases-with-a-large-number-of-components-when-addcomponent-is-used))
    
*   Scripting: Optimized searching for scripts when the assembly name is not supplied, can significantly improve performance entering PlayMode amongst other areas.
    

#### API Changes

*   Shaders: Added: An option in Pass.CompileVariant API to generate shader data for use by external tools. ([1371640](https://issuetracker.unity3d.com/issues/vulkan-shaderdata-dot-pass-dot-compilevariant-function-compile-data-in-the-smol-v-format-when-using-vulkan))

#### Changes

*   Android: Text input is no longer trimmed. ([1376463](https://issuetracker.unity3d.com/issues/spaces-before-text-in-the-input-field-are-being-deleted-when-closing-the-keyboard-by-pressing-the-ok-button-on-android-devices))

#### Fixes

*   2D: Fixed an issue where the animation window's preview of IK targets would not be the same as in Play Mode. ([1391590](https://issuetracker.unity3d.com/issues/animations-look-different-in-preview))
    
*   AI: Fixed NavMeshAgent teleports to a wrong location when reaching a border carved by a NavMeshObstacle. ([1363687](https://issuetracker.unity3d.com/issues/nav-mesh-agent-teleports-when-colliding-with-nav-mesh-obstacle))
    
*   Android: Fixed a crash when using a custom cursor. ([1379249](https://issuetracker.unity3d.com/issues/android-crash-with-signal-6-when-read-slash-write-is-enabled-in-texture-import-settings-and-texture-type-set-to-default-or-cursor))
    
*   Android: Fixed a crash where app would crash if it was put to background before Unity initialisation and then opened via URL. (1391522)
    
*   Android: Fixed black screen when resuming application with native dialog present. ([1361532](https://issuetracker.unity3d.com/issues/android-unity-app-background-gets-black-when-dialog-window-remains-open-after-re-entering-the-app))
    
*   Android: Fixed Oculus on-screen keyboard status when not enabled in manifest. ([1361663](https://issuetracker.unity3d.com/issues/xr-oculus-touchscreenkeyboard-reports-state-visible-even-if-the-is-not-defined-in-the-androidmanifest))
    
*   Asset Bundles: Fixed an issue that when copying file and meta on disk, renamed asset bundle name is preserved. ([1385129](https://issuetracker.unity3d.com/issues/assetbundle-assets-will-not-appear-in-the-assetbundles-when-the-guids-are-the-same))
    
*   Asset Import: Fixed an issue that AssetImportContext.AddObjectToAssets does not work in AssetPostprocessor methods. ([1393009](https://issuetracker.unity3d.com/issues/addobjecttoasset-doesnt-work-when-reimporting-asset))
    
*   Asset Import: Fixed an issue that Textures passed to AssetPostprocessor methods have no name.
    
*   Asset Import: Fixed an issue where the VisualEffectImporter logs an error on every import. (1405641)
    
*   Asset Pipeline: Fixed an issue that generating previews for scenes could sometimes block saving asset until finished. (1330504)
    
*   Audio: Fixed a bug where an app could freeze when calling Application.Quit after using the OnAudioFilterRead callback. ([1356566](https://issuetracker.unity3d.com/issues/ios-app-freezes-when-calling-application-dot-quit-if-a-script-with-onaudiofilterread-and-an-audio-listener-is-in-the-scene))
    
*   Audio: Fixed not being able to undo parameter changes from dragging in the GUI widget of the ParamEQ and Duck Volume effects. ([1262453](https://issuetracker.unity3d.com/issues/editing-parameq-through-dragging-on-the-graph-is-not-undoable))
    
*   Editor: Fixed an issue to prevent missing segments in the Bundle Identifier for Apple platforms by replacing invalid characters with hyphens (similar to Xcode's behaviour). ([1352216](https://issuetracker.unity3d.com/issues/xcode-bundle-identifier-parts-in-xcode-project-missing-if-they-contain-chinese-symbols))
    
*   Editor: Fixed arrow key functionality in dialogs in the Mac Editor. ([1279832](https://issuetracker.unity3d.com/issues/macos-text-caret-position-cannot-be-moved-via-arrow-keys-in-the-build-project-pop-up-window))
    
*   Editor: Fixed exceptions when assigning array size via array size field in ReorderableList inspector control.
    
*   Editor: Fixed model preview window not rendering UVs due to back face culling being turned on. ([1379783](https://issuetracker.unity3d.com/issues/preview-window-uv-layout-fails-to-display-the-uvs-of-curve-meshes))
    
*   Editor: Fixed ReorderableList element height not updating when dynamic changes to list content happen. ([1341015](https://issuetracker.unity3d.com/issues/inspectors-for-serialized-arrays-of-inputactions-no-longer-display-correctly-with-2020-dot-3-plus), [1342485](https://issuetracker.unity3d.com/issues/serializereference-array-field-background-box-is-not-correctly-resized-when-changing-elements-height), [1342814](https://issuetracker.unity3d.com/issues/the-elementheightcallback-is-not-called-when-selecting-a-different-element))
    
*   GI: Fixed an Editor crash in Optix when Generating Lighting multiple times. ([1358477](https://issuetracker.unity3d.com/issues/vulkan-editor-crashes-when-generating-lighting-multiple-times))
    
*   Graphics: Fixed a potential stall on buffer uploads in OpenGL GfxDevice. ([1369478](https://issuetracker.unity3d.com/issues/android-consecutive-calls-to-graphics-dot-drawprocedural-take-a-huge-amount-of-time-on-mali-gpus))
    
*   Graphics: Fixed Brief garbage frame after changing resolution on Metal by ensuring that the recreated surface on size change doesn't dispose of its previously rendered contents. ([1383853](https://issuetracker.unity3d.com/issues/macos-player-window-is-scrambled-with-square-artifacts-for-a-few-seconds-when-changing-the-resolution))
    
*   Graphics: Fixed corruption of mip levels of non-readable ASTC cubemap texture. ([1383196](https://issuetracker.unity3d.com/issues/material-gets-corrupted-when-using-astc))
    
*   Graphics: Fixed disappearing mesh when "Keep Quads" is enabled in import settings. ([1327826](https://issuetracker.unity3d.com/issues/mesh-disappears-when-keep-quads-is-enabled-in-the-fbx-import-settings))
    
*   IL2CPP: Fixed issue with IL2CPP builds where user had configured their own Newtonsoft Json DefaultSettings. ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   IL2CPP: Fixed undefined invocation behavior for unsigned arguments. ([1388270](https://issuetracker.unity3d.com/issues/il2cpp-faster-smaller-builds-prevents-connections-when-using-the-mirror-plugin))
    
*   iOS: Fixed an issue to allow picking up a background scene if no foreground scenes were found. (1400794)
    
*   iOS: Fixed Screen.cutouts returns a null value on some iPhones. ([1371461](https://issuetracker.unity3d.com/issues/ios-screen-dot-cutouts-returns-a-null-value))
    
*   iOS: Fixed Screen.orientation setting to ensures Autorotation is disabled when manually specifying Portrait. ([1399856](https://issuetracker.unity3d.com/issues/setting-screen-dot-orientation-to-portrait-mode-does-not-disable-autorotation-when-starting-application-in-portrait-mode))
    
*   iOS: Fixed Screen.safeArea returns incorrect height value when constraining rotation to landscape. ([1356217](https://issuetracker.unity3d.com/issues/ios-screen-dot-safearea-returns-incorrect-height-value-when-constraining-rotation-to-landscape))
    
*   iOS: Fixed splash screen sometimes showing in the wrong orientation. ([1400716](https://issuetracker.unity3d.com/issues/ios-apps-ignore-uisupportedinterfaceorientations-when-it-is-set-in-info-dot-plist))
    
*   iOS: Fixed TouchScreenKeyboard.selection being reverted when keyboard animates. ([1381968](https://issuetracker.unity3d.com/issues/ios-touchscreenkeyboard-dot-selection-is-ignored))
    
*   Kernel: Fixed invalid "System is running out of memory" error on macOS M1 laptops. ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   macOS: Fixed "Already have uncommitted encoder" error present under some circumstances. (1400691)
    
*   macOS: Fixed a crash when passing '-force-glcore' to Unity Editor on macOS. ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   macOS: Fixed an issue that UnityEngine.SystemInfo.processorFrequency returns 0 on Apple Silicon. ([1396529](https://issuetracker.unity3d.com/issues/unityengine-dot-systeminfo-dot-processorfrequency-logs-a-value-of-0-on-m1-macs))
    
*   macOS: Fixed incorrect resolution of some editor windows when moving the Editor from a built-in monitor to an external one while in full-screen. ([1390919](https://issuetracker.unity3d.com/issues/macos-secondary-monitor-doesnt-refresh-when-adding-a-gameobject-on-newly-created-project))
    
*   Mono: Fixed a few SocketAsyncEventArgs methods previously unimplemented. (1388925)
    
*   Package Manager: Fixed an issue where changes in the project manifest wouldn't be applied when `autorefresh` is disabled. (1292471)
    
*   Package Manager: Fixed the issue where loading spinners does not disappear when stopped.
    
*   Package Manager: Fixed the issue where the Package Manager UI doesn't warn the user when the .unitypackage is not compatible with the current version of Unity by adding a downgrade option with warning. (1403447)
    
*   Particles: Fixed an issue that the Trail material is restored now if module is toggled off then on again. ([1363211](https://issuetracker.unity3d.com/issues/material-isnt-assigned-back-on-particle-trails-when-disabling-and-enabling-trails))
    
*   Particles: Fixed memory overwrite when using trails and ringbuffer mode together. ([1378274](https://issuetracker.unity3d.com/issues/android-shuriken-application-crash-when-loop-until-replaced-is-selected-in-ring-buffer-mode-property))
    
*   Particles: Fixed offset param in NativeArray overload of SetPaticles API. ([1376804](https://issuetracker.unity3d.com/issues/particlesystem-dot-setparticles-new-particles-to-replace-exisiting-particles-argument-offset-equals-ps-dot-particlecount-without-function))
    
*   Physics: Fixed ArticulationBody.SetJointPositions and similar setter using List.Capacity instead of List.Count to determine the element count and throwing errors because of that. ([1347970](https://issuetracker.unity3d.com/issues/articulation-cache-size-doesnt-match-supplied-list-size-after-removing-child-gameobject))
    
*   Profiler: Fixed Profiler Rendering module not showing stats when profiling Editor. ([1382934](https://issuetracker.unity3d.com/issues/the-profiler-rendering-module-shows-the-scene-rendering-statistics-as-zero-when-profiling-the-editor))
    
*   Scene/Game View: Fixed picking in sceneview for materials with non-2D \_MainTex textures. ([1288999](https://issuetracker.unity3d.com/issues/error-assigning-3d-texture-to-2d-texture-property-maintex-when-using-a-texture3d-and-a-shader-from-the-unity-manual))
    
*   Scripting: Fixed an issue where TypeCache.GetDerivedTypesFrom could return duplicate entries. ([1369411](https://issuetracker.unity3d.com/issues/typecache-dot-gettypesderivedfrom-function-returns-duplicate-types-when-derived-classes-are-located-in-a-separate-folder))
    
*   Scripting: Fixed double-clicking on a message after a domain reload not generating the correct .sln file version with Visual Studio.
    
*   Serialization: Fixed SerializedProperty.DataEquals for strings and array case which was not comparing the content. ([1394833](https://issuetracker.unity3d.com/issues/serializedproperty-dot-dataequals-returns-true-for-two-strings-that-are-different))
    
*   Shaders: Fixed an issue that the Pragma directives with "\_local" suffix that specify shader stage will now generate an error if the stage is specified before the "\_local" suffix instead of silently ignoring the directive altogether. ([1388229](https://issuetracker.unity3d.com/issues/pragma-directive-is-incorrect-when-using-multi-compile-vertex-local-suffix))
    
*   uGUI: Fixed an issue when the RectMask2D component would not work properly when used on large images. ([1369118](https://issuetracker.unity3d.com/issues/part-of-the-large-image-is-prematurely-marked-if-using-the-rectmask2d))
    
*   UI Toolkit: Fixed an issue that the Editor Window does not preserve the minimum height and width of UI Elements when resizing it. ([1313077](https://issuetracker.unity3d.com/issues/editor-window-does-not-preserve-the-minimum-height-and-width-of-ui-elements-when-resizing-it))
    
*   Universal Windows Platform: Fixed an issue that Unity generated UWP project uses hardcoded value of en-US. ([1342532](https://issuetracker.unity3d.com/issues/unity-generated-uwp-project-defaults-to-en-us-language))
    
*   Universal Windows Platform: Fixed black square appearing with custom cursors in Executable Only build. ([1299579](https://issuetracker.unity3d.com/issues/uwp-ui-cursor-is-replaced-with-a-black-square-when-cursor-dot-setcursor-is-called-with-anything-but-the-default-cursor))
    
*   Universal Windows Platform: Fixed playing videos back from outside the application/application data folders if the app has permissions to do so (for instance, the Videos library). ([1376489](https://issuetracker.unity3d.com/issues/uwp-cant-play-files-in-video-library-in-uwp-build))
    
*   Windows: Fixed a crash with 'Copying file failed' error on Windows when importing a file from WinRAR Archiver. ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    
*   Windows: Fixed absolute mouse position when mouse acceleration is enabled. ([1221634](https://issuetracker.unity3d.com/issues/input-system-mouse-dot-current-dot-position-value-is-offset-by-1-pixel-compared-to-old-systems-input-dot-mouseposition))
    
*   Windows: Fixed Unity detecting incorrect mouse position when using a touch screen display. ([1322364](https://issuetracker.unity3d.com/issues/embedded-unity-window-receives-mouse-down-when-using-touch-input-outside-of-window))

### Known Issues in 2020.3.30f1

*   Animation: Animation playback is incorrect when using Asset Bundle exported from Unity 5.6.7f1 ([1390123](https://issuetracker.unity3d.com/issues/animation-playback-is-incorrect-when-using-asset-bundle-exported-from-unity-5-dot-6-7f1))
    
*   Asset - Database: Texture size increased on first build when 'Compress Textures/Assets on Import' is enabled ([1397965](https://issuetracker.unity3d.com/issues/texture-size-increased-on-first-build-when-compress-textures-slash-assets-on-import-is-enabled))
    
*   Asset Bundles: Asset Bundle size incrementally increases when updating the Unity Editor and rebuilding the Asset Bundle ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: On Mac Unity Editor crashes when docking one EditorWindow to the side of a docked window ([1397003](https://issuetracker.unity3d.com/issues/unity-editor-crashes-when-docking-one-editorwindow-to-the-side-of-a-docked-window))
    
*   MacOS: \[M1\] "System is running out of memory" error is thrown when using Profiler as a Standalone Process with Deep Profile turned on ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   Mesh: Creating a mesh in Play Mode causes an "abnormal mesh bounds" error when using UploadMeshData() ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Metal: Editor crashes on BufferMetal::IsBusy after opening a Scene ([1405248](https://issuetracker.unity3d.com/issues/editor-crashes-on-buffermetal-isbusy-after-opening-a-scene))
    
*   Mono: Editor crashes when coming back from Sleep mode ([1395629](https://issuetracker.unity3d.com/issues/editor-crashes-when-coming-back-from-sleep-mode))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Profiling: Unity 2020.3.27f1 randomly hangs in GPU recorder code with "Hold On" dialog ([1400169](https://issuetracker.unity3d.com/issues/unity-2020-dot-3-27f1-randomly-hangs-in-gpu-recorder-code-with-hold-on-dialog))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Templates: Specific Actions dropdown tab does not appear when setting the Target of the Touch Trigger in the LEGO Template ([1390097](https://issuetracker.unity3d.com/issues/specific-actions-dropdown-tab-does-not-appear-when-setting-the-target-of-the-touch-trigger-in-the-lego-template))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.30f1 Release Notes

#### Improvements

*   Asset Pipeline: Logging done in imports run in an import worker is now forwarded to the main editor log.
    
*   Asset Pipeline: Logging in import worker will now always log to local import worker log file.
    
*   Build Pipeline: Added an API to gather the lighting and fog modes used by the active scene.
    
*   Editor: Added a new API InternalEditorUtility.LoadSerializedFileAndForgetAsync which loads a serialized file on the preload thread.
    
*   Profiler: Added Profiler.EmitSessionMetaData api to pass generic metadata to the Profiler associated with profiling session.
    
*   Scene Manager: Added Developer-only toggle to view Preview Scenes on the hierarchy for debugging purposes.
    
*   Scene Manager: Added flags to support certain GameObject features in Preview Scenes (Events, GI Lights and Cameras).
    
*   Scripting: Added a new AsyncReadManager FileInfo() API to check for a file's existence and (if present) the file size.
    
*   Scripting: Added atomic safety handle boolean validation functions to AtomicSafetyHandle.bindings.cs
    

#### Fixes

*   Editor: Fixed incorrect JobsDebugger handling of C# "readonly" keyword.
    
*   Scripting: Fixed: Unity.IO.LowLevel.Unsafe.ReadStatus.Truncated result for completion of a truncated read. A truncated read occurs when an asynchronous file request attempts to read beyond the end of a file.
    
*   Scripting: Fixed: Unity.IO.LowLevel.Unsafe.ReadStatusExtension methods - Unity.IO.LowLevel.Unsafe.ReadStatusExtension.Complete() returns true on successful completion regardless of truncated file reads.
    
*   Scripting: Updated NativeArray and NativeSlice Enumerator MoveNext functions with a define conditional atomic safety handle boolean check to ensure that existing enumerators return false when MoveNext() is called instead of throwing an exception.

### Known Issues in 2020.3.29f1

*   AI Navigation: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Animation: Animation playback is incorrect when using Asset Bundle exported from Unity 5.6.7f1 ([1390123](https://issuetracker.unity3d.com/issues/animation-playback-is-incorrect-when-using-asset-bundle-exported-from-unity-5-dot-6-7f1))
    
*   Asset - Database: Texture size increased on first build when 'Compress Textures/Assets on Import' is enabled (1397965)
    
*   Asset Bundles: Asset Bundle size incrementally increases when updating the Unity Editor and rebuilding the Asset Bundle ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Editor: Unity Editor crashes when docking one EditorWindow to the side of a docked window ([1397003](https://issuetracker.unity3d.com/issues/unity-editor-crashes-when-docking-one-editorwindow-to-the-side-of-a-docked-window))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[M1\] "System is running out of memory" error is thrown when using Profiler as a Standalone Process with Deep Profile turned on ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   Mesh: Creating a mesh in Play Mode causes an "abnormal mesh bounds" error when using UploadMeshData() ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Profiling: Unity 2020.3.27f1 randomly hangs in GPU recorder code with "Hold On" dialog ([1400169](https://issuetracker.unity3d.com/issues/unity-2020-dot-3-27f1-randomly-hangs-in-gpu-recorder-code-with-hold-on-dialog))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Templates: Specific Actions dropdown tab does not appear when setting the Target of the Touch Trigger in the LEGO Template ([1390097](https://issuetracker.unity3d.com/issues/specific-actions-dropdown-tab-does-not-appear-when-setting-the-target-of-the-touch-trigger-in-the-lego-template))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.29f1 Release Notes

#### Fixes

*   Android: Fixed app crashing when calling Cursor.visible or Cursor.SetCursor many time during a frame. ([1380363](https://issuetracker.unity3d.com/issues/android-addressables-player-crashes-with-a-jni-error-error-when-built-on-android))
    
*   Asset Pipeline: Fixed an issue that deleting invalid asset paths don't throw ArgumentNullException when using Perforce as VCProvider. ([1333656](https://issuetracker.unity3d.com/issues/vcs-assetdatabase-assetdatabase-dot-deleteasset-throws-an-error-if-the-path-is-invalid-when-using-perforce-as-vcs))
    
*   Core: Updated libcurl to 7.80. (1383040)
    
*   Editor: Fixed an issue that the Asset Labels UI will now be available when editing package assets providing the asset metafile can be modified. ([1335148](https://issuetracker.unity3d.com/issues/asset-labels-ui-is-not-displayed-when-asset-is-in-a-package))
    
*   Graphics: Fixed a race condition when rendering shadows for multiple lights, and using Particle Systems, Line Renderers or Trail Renderers. (1376967)
    
*   Graphics: Fixed sporadic freeze during texture upload, mainly on ARMv8 platforms. ([1345518](https://issuetracker.unity3d.com/issues/mobile-unity-freezes-after-assetbundle-dot-loadasset-does-not-return))
    
*   Kernel: Fixed unintentional deletion of project assets directory by adding additional checks. ([1382446](https://issuetracker.unity3d.com/issues/fileutil-dot-deletefileordirectory-deletes-the-entire-project-folder-when-it-is-passed-a-null-value))
    
*   macOS: Fixed a bug related to creating a new Unity project inside a directory with Unicode characters. ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Particles: Fixed Forcefield Vortex determinism. ([1365909](https://issuetracker.unity3d.com/issues/particle-system-moves-slower-in-play-mode-when-particle-system-force-field-component-is-attached))
    
*   Scripting: Fixed an exception being thrown when resolving a missing assembly because OS does not provide a Global Assembly Cache. ([1383700](https://issuetracker.unity3d.com/issues/an-unhandled-exception-is-thrown-in-the-editor-dot-log-and-console-window-when-trying-to-build-assetbundles))
    
*   Shaders: Fixed an issue where the number of skipped shader variants are now added to the shader compilation log output. (1389276)
    
*   Shaders: Fixed an OOM crash when preparing shaders with a large amount of variants (100M+) for compilation. IPreprocessShaders now processes not more than 1M variants at a time. ([1388530](https://issuetracker.unity3d.com/issues/shader-stripping-crashes-when-it-gets-too-many-variants))
    
*   Shaders: Fixed incorrect errors by adding shader name to the error description when failing to compile or link GLSL shaders. (1378687)
    
*   Shaders: Fixed the output of "Compile and show code" button being capped to 2GB on Windows. ([1378000](https://issuetracker.unity3d.com/issues/on-windows-preprocessed-lit-dot-shader-file-stops-mid-line-when-file-size-is-near-or-more-than-2gb))
    
*   WebGL: Fixed a template breaking if quotation marks are used in company name or product name. ([1370946](https://issuetracker.unity3d.com/issues/webgl-player-is-stuck-on-the-gray-screen-when-company-name-includes-quotation-mark))
    
*   Windows: Fixed a signing issue and now 32-bit Windows standalone player binaries are signed with Unity certificate. ([1382876](https://issuetracker.unity3d.com/issues/32-bit-windows-standalone-player-binaries-are-not-signed))

### Known Issues in 2020.3.28f1

*   AI Navigation: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Animation: Animation playback is incorrect when using Asset Bundle exported from Unity 5.6.7f1 ([1390123](https://issuetracker.unity3d.com/issues/animation-playback-is-incorrect-when-using-asset-bundle-exported-from-unity-5-dot-6-7f1))
    
*   Asset Bundles: Asset Bundle size incrementally increases when updating the Unity Editor and rebuilding the Asset Bundle ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[M1\] "System is running out of memory" error is thrown when using Profiler as a Standalone Process with Deep Profile turned on ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Mesh: Creating a mesh in Play Mode causes an "abnormal mesh bounds" error when using UploadMeshData() ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Networking: UnityWebRequest.SendWebRequest delay occurring in 2019.4.30f1 and above ([1382113](https://issuetracker.unity3d.com/issues/networking-unitywebrequest-dot-sendwebrequest-delay-occurring-in-2019-dot-4-30f1-and-above))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Profiling: Unity 2020.3.27f1 randomly hangs in GPU recorder code with "Hold On" dialog ([1400169](https://issuetracker.unity3d.com/issues/unity-2020-dot-3-27f1-randomly-hangs-in-gpu-recorder-code-with-hold-on-dialog))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Scripting: \[MacOS\] An Unhandled exception is thrown in the Editor.log and Console window when trying to build AssetBundles ([1383700](https://issuetracker.unity3d.com/issues/an-unhandled-exception-is-thrown-in-the-editor-dot-log-and-console-window-when-trying-to-build-assetbundles))
    
*   Shader System: Shader stripping crashes when it gets too many variants ([1388530](https://issuetracker.unity3d.com/issues/shader-stripping-crashes-when-it-gets-too-many-variants))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Templates: Specific Actions dropdown tab does not appear when setting the Target of the Touch Trigger in the LEGO Template ([1390097](https://issuetracker.unity3d.com/issues/specific-actions-dropdown-tab-does-not-appear-when-setting-the-target-of-the-touch-trigger-in-the-lego-template))
    
*   uGUI: Prefab is glitchy while editing in Prefab Mode when parent Canvas Render Mode is set to Screen Space - Camera ([1394756](https://issuetracker.unity3d.com/issues/prefab-is-glitchy-when-editing-in-prefab-mode-in-a-custom-ui-environment))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.28f1 Release Notes

#### Improvements

*   Graphics: Improved QualitySettings.maxQueuedFrames, it now works in Vulkan API.
    
*   IL2CPP: Added support for Il2CppSetOption attribute on structs and assemblies.
    
*   XR: Added support for late latch debug mode to help verify late latch functionality.
    

#### API Changes

*   Particles: Added: Added a version of GetTrails that doesn't allocate any garbage. ([1394062](https://issuetracker.unity3d.com/issues/particles-particlesystem-dot-gettrails-api-forces-gc-dot-alloc-calls))

#### Fixes

*   2D: Fixed an issue that it is now able to change mipmap settings in inspector. ([1379426](https://issuetracker.unity3d.com/issues/mip-map-filtering-cant-be-changed-in-psd-importer-settings))
    
*   2D: Fixed an issue that Sprite Skin's help button now leads to the correct documentation page. (1383765)
    
*   2D: Fixed an issue where a Sprite Skin outside of the camera frustum enters the frustum, which could cause an editor and player crash. ([1377867](https://issuetracker.unity3d.com/issues/2d-animation-occasional-crash-when-using-spriteskin-and-alwaysupdate-toggled-off))
    
*   AI: Fixed an issue where the NavMesh obstacle carving caused narrow gaps in the NavMesh. ([1363972](https://issuetracker.unity3d.com/issues/nav-mesh-agent-gets-stuck-when-colliding-with-an-invisible-wall-created-by-nav-mesh-obstacles))
    
*   Android: Fixed Android minimum bundle version to greater than 0. ([1307476](https://issuetracker.unity3d.com/issues/android-gradle-build-fails-when-the-bundle-version-code-value-is-lower-than-1))
    
*   Android: Fixed Java local reference leak when array is returned when using AndroidJavaObject/AndroidJavaClass. ([1374806](https://issuetracker.unity3d.com/issues/android-crashes-with-signal-6-sigabrt-error-and-jni-error-abort-message-on-some-devices-running-android-8-or-lower))
    
*   Animation: Fixed a potential crash when modifying an animation override controller which is in use during a state machine enter / exit behavior callback. ([1346587](https://issuetracker.unity3d.com/issues/crash-on-libunity-dot-animationclip-getruntimeasset-when-an-animation-is-played))
    
*   Animation: Fixed null reference in AvatarMaskInspector on ToggleAll. ([1369846](https://issuetracker.unity3d.com/issues/nullreferenceexception-when-clicking-toggle-all-on-the-transform-mask-of-an-animation-clip-for-certain-humanoid-characters))
    
*   Asset Pipeline: Fixed an issue that empty meta file is handled as malformed meta file. ([1361260](https://issuetracker.unity3d.com/issues/imported-folders-and-files-are-missing-in-the-project-window-when-the-initially-created-meta-file-is-empty))
    
*   Asset Pipeline: Fixed an issue where creating an asset during OnPostprocessAllAssets() with custom dependencies registered could cause an infinite import loop. (1383416)
    
*   Asset Pipeline: Fixed an issue where Mono scripts containing namespaces with invalid characters were not reimported. ([1354597](https://issuetracker.unity3d.com/issues/null-value-is-returned-when-calling-monoscript-dot-fromscriptableobject))
    
*   Editor: Fixed an issue that UnityBugReporter was missing some Qt library dependencies, and would fail to start. ([1283622](https://issuetracker.unity3d.com/issues/imgui-unable-to-open-bug-reporting-tool))
    
*   Editor: Fixed Unity does not load the last scene after a crash. (1308699)
    
*   GI: Fixed an issue that black light probes after duplicating baked geometry during the bake with CPU Lightmapper. ([1332156](https://issuetracker.unity3d.com/issues/osx-black-light-probes-after-duplicating-baked-geometry-during-the-bake-with-cpu-lightmapper))
    
*   Graphics: Fixed a Vulkan crash when using a material that generates empty cbuffer bind mask. ([1368933](https://issuetracker.unity3d.com/issues/crash-when-selecting-a-material))
    
*   Graphics: Fixed particles flickering on metal. ([1375960](https://issuetracker.unity3d.com/issues/particle-system-uses-incorrect-transform-matrices-for-motion-vectors-when-shadow-casting-is-enabled))
    
*   Graphics: Fixed Vulkan instable frame time and input lag due to queuing too many frames. ([1331307](https://issuetracker.unity3d.com/issues/hdrp-vulkan-lag-when-using-vulkan-api-in-build-even-with-good-framerate))
    
*   IL2CPP: Fixed parsing of --custom-step command line argument to UnityLinker. ([1351726](https://issuetracker.unity3d.com/issues/it-is-not-possible-to-add-custom-linker-steps-due-to-a-problem-with-the-options-parser))
    
*   iOS: Fixed an issue that On Demand Resources setting in XCode project is always set to the value set in Unity Player Settings. ([1379736](https://issuetracker.unity3d.com/issues/ios-player-setting-use-on-demand-resources-does-not-set-the-xcode-build-setting-enable-on-demand-resources))
    
*   iOS: Fixed an issue that the QuickType bar is now hidden on iOS15 when Keyboard autocorrection is set to false. ([1381272](https://issuetracker.unity3d.com/issues/ios-keyboard-quicktype-bar-is-not-disabled-in-15-ios-when-it-is-set-to-false-when-using-xcode-13-dot-1))
    
*   iOS: Updated the iOS resolution presets of the _Aspect Ratio_ dropdown list in the _Game View_ window. ([1321829](https://issuetracker.unity3d.com/issues/game-view-aspect-ratio-dropdown-includes-no-longer-supported-devices))
    
*   macOS: Fixed an issue that MacOS player is now built with released xcode, also fixed a TestFlight warning about using beta Xcode.
    
*   Package Manager: Fixed an issue that Unity terminates with error code 0 when an exception occurs while importing a package in bach mode. ([1375776](https://issuetracker.unity3d.com/issues/unity-terminates-with-error-code-0-when-an-exception-occurs-while-importing-a-package-in-bach-mode))
    
*   Particles: Fixed right-click context menu for Renderer module Inspector. ([1372195](https://issuetracker.unity3d.com/issues/context-menu-does-not-pop-up-when-right-clicking-particle-system-renderer-module))
    
*   Prefabs: Fixed an error that is thrown when merging changes made to a Prefab into a Nested Prefab with co-dependant components. ([1362574](https://issuetracker.unity3d.com/issues/changes-fail-when-merging-from-prefab-to-nested-prefab-with-co-related-components))
    
*   Prefabs: Fixed missing required component causing import loop and log spamming. ([1319932](https://issuetracker.unity3d.com/issues/creating-missing-component-warnings-are-thrown-continuously-when-selecting-a-prefab))
    
*   Profiler: Fixed "Call Stacks" toggle in Profiler Window enabling callstacks capturing in connected Players. ([1377934](https://issuetracker.unity3d.com/issues/profiler-profilers-call-stacks-button-gets-out-of-sync-with-playerconnection-when-its-toggled-after-connecting-to-player))
    
*   Profiler: Fixed a crash when taking memory profiler snapshot with Players built with newer Unity versions. ([1386532](https://issuetracker.unity3d.com/issues/memory-profiler-capturing-player-built-with-higher-unity-version-crashes-the-editor))
    
*   Profiler: Fixed an issue to remove Gfx Used and Reserved Memory from counters available in release players. ([1339707](https://issuetracker.unity3d.com/issues/profilerrecorder-gfx-used-memory-is-not-compiled-out-of-builds))
    
*   Profiler: Fixed Memory Profiler capture reloading unloaded assets referenced by scripts. ([1385805](https://issuetracker.unity3d.com/issues/memory-profiler-throws-object-lock-exceptions-when-capturing-editor-memory))
    
*   Scripting: Fixed an issue when opening a project using rulesets coming from a package on disk, this does not trigger a compilation error anymore. ([1349517](https://issuetracker.unity3d.com/issues/error-cs8035))
    
*   Services: Fixed a crash which occured with Il2cpp, engine stripping enabled and Analytics enabled, but without the analytics package installed. ([1377563](https://issuetracker.unity3d.com/issues/ios-android-mobile-analytics-api-crash-at-runtime))
    
*   TextCore: Fixed potential editor crash due to invalid system font file being present on a user system where such font file is missing a font family and / or style name. ([1382082](https://issuetracker.unity3d.com/issues/editor-crashes-on-textcore-fontengine-getsystemfontreferencesinternal-when-opening-the-project))
    
*   Universal Windows Platform: Fixed "TlsException: Handshake failed - error code: UNITYTLS\_INTERNAL\_ERROR, verify result: 4294950016" error when using System.Net.Http on ARM64 machines/devices. ([1387294](https://issuetracker.unity3d.com/issues/tlsexception-handshake-failed-error-when-uwp-build-configuration-is-set-to-release))
    
*   WebGL: Added mapping of the input coordinates from the css resolution to the canvas resolution, fixed handling of HDPI scaling. (1302367)
    
*   WebGL: Added Support for mobile WebGL touch events to Immediate Mode GUI when the New Input System package is used. (1300223)
    
*   WebGL: Fixed mouse position in the old input system when the cursor is locked. ([1338936](https://issuetracker.unity3d.com/issues/webgl-bolt-colliders-are-shifted-when-launching-webgl-build-made-with-bolt))
    
*   XR: Fixed XRBeginFrame event added to frame debugger even if VR isn't enabled. (1374542)

### Known Issues in 2020.3.27f1

*   AI Navigation: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Animation: Animation playback is incorrect when using Asset Bundle exported from Unity 5.6.7f1 ([1390123](https://issuetracker.unity3d.com/issues/animation-playback-is-incorrect-when-using-asset-bundle-exported-from-unity-5-dot-6-7f1))
    
*   Asset Bundles: Asset Bundle size incrementally increases when updating the Unity Editor and rebuilding the Asset Bundle ([1391542](https://issuetracker.unity3d.com/issues/asset-bundle-size-incrementally-increases-when-updating-the-unity-editor-and-rebuilding-the-asset-bundle))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Build Pipeline: Windows build fails when using Deltatre Magma Engine ([1382217](https://issuetracker.unity3d.com/issues/windows-build-fails-when-using-deltatre-magma-engine))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: "BuildFailedException" and Bee errors are thrown in the Console window when building project for Android ([1391435](https://issuetracker.unity3d.com/issues/il2cpp-buildfailedexception-and-bee-errors-are-thrown-in-the-console-window-when-building-project-for-android))
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Inspector Framework: LEGO microgame, missing dropdown from inspector Specific Action field ([1387037](https://issuetracker.unity3d.com/issues/lego-microgame-missing-dropdown-from-inspector-specific-action-field))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[M1\] "System is running out of memory" error is thrown when using Profiler as a Standalone Process with Deep Profile turned on ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Mesh: Creating a mesh in Play Mode causes an "abnormal mesh bounds" error when using UploadMeshData() ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Metal: Stuttering in Play mode when VSync is disabled ([1373811](https://issuetracker.unity3d.com/issues/metal-stuttering-in-play-mode-when-vsync-is-disabled))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Networking: UnityWebRequest.SendWebRequest delay occurring in 2019.4.30f1 and above ([1382113](https://issuetracker.unity3d.com/issues/networking-unitywebrequest-dot-sendwebrequest-delay-occurring-in-2019-dot-4-30f1-and-above))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Physics: Cloth performance drops when increasing the number of GameObjects with Cloth and then decreasing it ([1173457](https://issuetracker.unity3d.com/issues/cloth-performance-drops-when-displaying-more-gameobjects-with-cloth-and-then-hiding-them-off-screen))
    
*   Profiling: Profiler's 'Call Stacks' button gets out of sync with PlayerConnection when the button is toggled after connecting to Player ([1377934](https://issuetracker.unity3d.com/issues/profiler-profilers-call-stacks-button-gets-out-of-sync-with-playerconnection-when-its-toggled-after-connecting-to-player))
    
*   Profiling: \[Memory Profiler\] Capturing Player built with higher Unity version crashes the Editor ([1386532](https://issuetracker.unity3d.com/issues/memory-profiler-capturing-player-built-with-higher-unity-version-crashes-the-editor))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Scripting: Editor sometimes crashes when entering Play Mode ([1380226](https://issuetracker.unity3d.com/issues/editor-crashes-sometimes-when-entering-play-mode))
    
*   Scripting: Error CS8035 is thrown on opening a project when using rulesets ([1349517](https://issuetracker.unity3d.com/issues/error-cs8035))
    
*   Scripting: \[MacOS\] An Unhandled exception is thrown in the Editor.log and Console window when trying to build AssetBundles ([1383700](https://issuetracker.unity3d.com/issues/an-unhandled-exception-is-thrown-in-the-editor-dot-log-and-console-window-when-trying-to-build-assetbundles))
    
*   Shader System: Shader stripping crashes when it gets too many variants ([1388530](https://issuetracker.unity3d.com/issues/shader-stripping-crashes-when-it-gets-too-many-variants))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Templates: Specific Actions dropdown tab does not appear when setting the Target of the Touch Trigger in the LEGO Template ([1390097](https://issuetracker.unity3d.com/issues/specific-actions-dropdown-tab-does-not-appear-when-setting-the-target-of-the-touch-trigger-in-the-lego-template))
    
*   Text: Editor crashes on TextCore::FontEngine::GetSystemFontReferencesInternal when opening the project ([1382082](https://issuetracker.unity3d.com/issues/editor-crashes-on-textcore-fontengine-getsystemfontreferencesinternal-when-opening-the-project))
    
*   uGUI: Prefab is glitchy while editing in Prefab Mode when parent Canvas Render Mode is set to Screen Space - Camera ([1394756](https://issuetracker.unity3d.com/issues/prefab-is-glitchy-when-editing-in-prefab-mode-in-a-custom-ui-environment))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.27f1 Release Notes

#### Improvements

*   Physics: Improved the performance of recreating 2D colliders under some circumstances. ([1384863](https://issuetracker.unity3d.com/issues/physics2d-dot-destroyshapes-has-an-enormous-impact-on-performances-even-when-very-few-physics-shapes-exist))
    
*   XR: Fixed TryGetBoundaryPoints to return proper boolean values.
    

#### Fixes

*   AI: Fixed an issue that the NavMesh.CalculatePath is missing link exit corner. ([1373302](https://issuetracker.unity3d.com/issues/the-navigation-system-returns-an-incorrect-path-when-links-are-involved))
    
*   Android: Fixed a bug where the RunInBackground player setting could get modified in the Editor just by switching to the Android platform in the build settings. ([1368858](https://issuetracker.unity3d.com/issues/android-run-in-background-is-turned-off-when-selecting-the-android-platform-and-switching-back-to-the-standalone-platform))
    
*   Android: Fixed baking reflectionprobes with Vulkan Editor and build target Android. ([1344866](https://issuetracker.unity3d.com/issues/image-invalid-format-error-is-thrown-when-generating-lights-on-vulkan-graphics-api-and-android-build-target))
    
*   Asset Import: Fixed an additional "Downloading from cache server" progress bar update just prior to beginning the cache server download during asset import. ([1352678](https://issuetracker.unity3d.com/issues/import-progress-bar-doesnt-refreshing-when-downloading-from-cache))
    
*   Asset Pipeline: Fixed an issue where importing multiple fonts could cause errors to be thrown by the Asset Database. ([1370398](https://issuetracker.unity3d.com/issues/errors-are-thrown-when-re-importing-asset-folders-containing-ttf-files))
    
*   Asset Pipeline: Fixed an issue where user fields in assets containing 'guid' could cause incorrect asset dependencies to be shown. ([1384729](https://issuetracker.unity3d.com/issues/incorrect-dependencies-in-assetdatabase-dot-getdependencies))
    
*   Build Pipeline: Fixed an issue to prevent selection of ~/Desktop folder as build target. ([1357782](https://issuetracker.unity3d.com/issues/all-files-are-deleted-when-building-an-ios-player-to-the-desktop))
    
*   Build Pipeline: Fixed an issue where throwing a BuildFailedException in PostProcessSceneAttribute callbacks would not fail the build. ([1327550](https://issuetracker.unity3d.com/issues/build-doesnt-fail-when-buildfailedexception-is-thrown-in-the-postprocessscene-callback-and-the-build-button-is-used))
    
*   Editor: Fixed a crash on startup in the Custom Render Texture Manager for an old AVPro that's using Custom Render Texture for video interpolation. ([1362634](https://issuetracker.unity3d.com/issues/editor-crashes-after-assertion-failed-on-expression-input-end-equals-end-error-when-opening-game-view))
    
*   Editor: Fixed a ReorderableList flicker when moving between multiple inspectors. ([1353819](https://issuetracker.unity3d.com/issues/moving-the-mouse-around-2-inspector-windows-which-show-arrays-of-different-levels-makes-the-elements-in-the-inspectors-flicker))
    
*   Editor: Fixed an issue that last opened project will not be loaded during license activation in batchmode if no project path is specified explicitly (-createproject, -projectpath, -openfile flags). ([1337076](https://issuetracker.unity3d.com/issues/activating-unity-license-in-batch-mode-tries-to-open-last-opened-project))
    
*   Editor: Fixed Shift-selection issues in the Project Window when it's set to use the Two Column Layout. ([1361464](https://issuetracker.unity3d.com/issues/multiselect-with-the-keyboard-does-not-work-as-intended-when-using-arrows-shift-and-ctrl))
    
*   GI: Fixed a crash when baking 4K lightmap with maximum AA setting. ([1318800](https://issuetracker.unity3d.com/issues/openrl-error-is-thrown-slash-editor-crashes-when-generating-lighting-with-4096-max-lightmap-size))
    
*   GI: Fixed an issue that light probe now produces valid output when punctual light overlaps it. ([1242829](https://issuetracker.unity3d.com/issues/point-lights-have-no-guard-when-light-probes-are-near-or-overlapping-them-in-progressive-lightmapper))
    
*   GI: Fixed an issue where switching a texture importer to Lightmap type would change the appearance of the texture preview when in Linear color space. ([1352673](https://issuetracker.unity3d.com/issues/webgl-lightmap-gets-darker-when-changing-to-compressed-or-higher-than-16-bit-texture-format-and-switched-to-webgl-platform))
    
*   Graphics: Fixed a crash when using the Movie Recorder to capture 360 movies. ([1249348](https://issuetracker.unity3d.com/issues/unity-recorder-crash-in-shader-getsubshaderwithtagvalue-after-loading-a-scene-asynchronously-while-recording-a-360-view-movie))
    
*   Graphics: Fixed alpha dilation filtering when a 16 bit-per-component texture with transparent pixels is imported. ([1355265](https://issuetracker.unity3d.com/issues/edge-artifacts-are-not-fixed-when-alpha-is-transparency-parameter-is-enabled-on-the-texture))
    
*   IL2CPP: Fixed an IL2CPP crash caused by High managed code stripping producing invalid IL. ([1358995](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-managed-stripping-level-is-set-to-high))
    
*   IMGUI: Fixed an issue when deleting a material from the Particle System's Inspector, it no longer breaks the inspector. ([1379541](https://issuetracker.unity3d.com/issues/particles-inspector-breaks-and-errors-are-thrown-when-the-material-field-is-deleted-from-the-particle-system))
    
*   iOS: Fixed a rare crash when quiting app during orientation change. (1389840)
    
*   Kernel: Fixed Application.targetFrameRate to not cause jitter in Time.deltaTime measurements. ([1373355](https://issuetracker.unity3d.com/issues/uwp-application-dot-targetframerate-doesnt-work-when-building-in-uwp))
    
*   macOS: Fixed a bug where Unity apps could crash if shut down quickly after startup. ([1272819](https://issuetracker.unity3d.com/issues/macos-built-player-crashes-sometimes-when-exiting-it))
    
*   Mobile: Added UaaL Analytics and made sure it wont get stripped if code stripping is enabled. (1380042)
    
*   Physics: Fixed an issue that Physics2D.SetLayerCollisionMask now correctly updates all layers that have changed. ([1345964](https://issuetracker.unity3d.com/issues/physics2d-dot-getlayercollisionmask-and-setlayercollisionmask-are-returning-values-that-do-not-match-the-editor))
    
*   Prefabs: Fixed a crash when setting hide flags on PrefabInstance objects with missing source prefab. ([1381563](https://issuetracker.unity3d.com/issues/crash-when-calling-hideflags-after-removing-missing-nested-prefab))
    
*   Scene Manager: Fixed an issue to align scene and instantiation behavior when loading a new scene between Editor and Build. ([1046181](https://issuetracker.unity3d.com/issues/activescene-differs-between-editor-and-build-when-loading-a-new-scene))
    
*   Scene/Game View: Fixed Scene View camera zooming too far when using middle mouse wheel scroll with a very small object framed. ([1300336](https://issuetracker.unity3d.com/issues/scene-camera-zoom-sensitivity-is-not-high-enough))
    
*   Scripting: Fixed an issue that C# scripts containing invalid characters in disabled conditional sections are now correctly imported. ([1279339](https://issuetracker.unity3d.com/issues/unity-doesnt-recognise-the-script-as-monobehaviour-script-when-theres-a-grave-accent-in-an-number-if-false-block-inside-a-namespace))
    
*   Scripting: Fixed an issue when adding "com.unity.ui" and "com.unity.rendering.hybrid" packages to a project, could lead to "Fail to copy dll/pdb" errors when compiling scripts.
    
*   Scripting: Fixed XmlSerializer not working with managed code stripping when using the mono backend. ([1331829](https://issuetracker.unity3d.com/issues/class-get-stripped-when-using-preserve-attribute-with-mono-backend))
    
*   Serialization: Fixed TypeTreeCache cache key computation. ([1377929](https://issuetracker.unity3d.com/issues/editor-and-player-crashes-on-build-when-the-built-scene-contains-a-dictionary-with-serializefield-and-added-values))
    
*   Shaders: Fixed a compiler error with missing splat constructors with some platform compilers. ([1352016](https://issuetracker.unity3d.com/issues/glsl-compilation-fails-with-implicit-cast-from-float-to-vec2-error-when-using-opengl-slash-vulkan))
    
*   Shaders: Fixed a crash when using SV\_COVERAGE in a fragment input. ([1379259](https://issuetracker.unity3d.com/issues/android-sv-coverage-gets-mistranslated-from-hlsl-to-glsl-when-compiling-and-causing-a-compile-error))
    
*   Shaders: Fixed a warning in surface shaders when setting dithercrossfade about upgrading to target 3.0 when the target was already sufficient. ([1358042](https://issuetracker.unity3d.com/issues/number-pragma-target-3-dot-0-compile-error-non-hlsl))
    
*   UI Toolkit: Fixed Hierarchy Duplicate command sometimes not working on Windows for UI Builder.
    
*   UI Toolkit: Fixed null checks against UXML Traits returning null references. ([1372713](https://issuetracker.unity3d.com/issues/nullreferenceexception-error-appears-when-creating-uidocument-in-ui-toolkit))
    
*   Universal Windows Platform: Fixed Application.targetFrameRate rendering at significantly lower frame rate than specified. ([1373355](https://issuetracker.unity3d.com/issues/uwp-application-dot-targetframerate-doesnt-work-when-building-in-uwp))
    
*   Video: Fixed a crash on MediaEncoder\_CUSTOM\_Internal\_AddFrame\_Injected when pushing a frame into MediaEncoder that has been disposed. ([1368301](https://issuetracker.unity3d.com/issues/crash-on-mediaencoder-custom-internal-addframe-injected-when-pushing-a-frame-into-mediaencoder-that-has-been-disposed))
    
*   Video: Fixed a crash when aspect ratio is too big. ([1347100](https://issuetracker.unity3d.com/issues/editor-crash-crash-on-videoclipimporter-dot-getpreviewtexture-when-clicking-on-an-mp4-video-in-the-editor))
    
*   Windows: Fixed setting a cursor being very slow when doing it for the first time for a particular texture. ([1373881](https://issuetracker.unity3d.com/issues/high-performance-when-an-icon-is-set-as-a-cursor-for-the-first-time-with-setcursor-on-windows))
    
*   XR: Fixed an issue that Mock HMD no longer spews errors in play mode: "Attempting to determine the size of an unknown feature type Id \[-1\].". ([1289987](https://issuetracker.unity3d.com/issues/xr-sdk-mockhmd-xri-console-is-spammed-with-errors-when-using-mock-hmd-in-editor-in-play-mode))

### Known Issues in 2020.3.26f1

*   AI: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Build Pipeline: Windows build fails when using Deltatre Magma Engine ([1382217](https://issuetracker.unity3d.com/issues/windows-build-fails-when-using-deltatre-magma-engine))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[M1\] "System is running out of memory" error is thrown when using Profiler as a Standalone Process with Deep Profile turned on ([1386242](https://issuetracker.unity3d.com/issues/system-is-running-out-of-memory-is-being-thrown-when-using-profiler-as-a-standalone-process-with-deep-profile-turned-on))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Mesh: Creating a mesh in Play Mode causes an "abnormal mesh bounds" error when using UploadMeshData() ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Metal: Stuttering in Play mode when VSync is disabled ([1373811](https://issuetracker.unity3d.com/issues/metal-stuttering-in-play-mode-when-vsync-is-disabled))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Networking: UnityWebRequest.SendWebRequest delay occurring in 2019.4.30f1 and above ([1382113](https://issuetracker.unity3d.com/issues/networking-unitywebrequest-dot-sendwebrequest-delay-occurring-in-2019-dot-4-30f1-and-above))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Profiling: Profiler's 'Call Stacks' button gets out of sync with PlayerConnection when the button is toggled after connecting to Player ([1377934](https://issuetracker.unity3d.com/issues/profiler-profilers-call-stacks-button-gets-out-of-sync-with-playerconnection-when-its-toggled-after-connecting-to-player))
    
*   Profiling: \[Memory Profiler\] Capturing Player built with higher Unity version crashes the Editor ([1386532](https://issuetracker.unity3d.com/issues/memory-profiler-capturing-player-built-with-higher-unity-version-crashes-the-editor))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene Management: Crash when calling hideFlags after removing missing nested prefab ([1381563](https://issuetracker.unity3d.com/issues/crash-when-calling-hideflags-after-removing-missing-nested-prefab))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Scripting: Editor sometimes crashes when entering Play Mode ([1380226](https://issuetracker.unity3d.com/issues/editor-crashes-sometimes-when-entering-play-mode))
    
*   Scripting: \[MacOS\] An Unhandled exception is thrown in the Editor.log and Console window when trying to build AssetBundles ([1383700](https://issuetracker.unity3d.com/issues/an-unhandled-exception-is-thrown-in-the-editor-dot-log-and-console-window-when-trying-to-build-assetbundles))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Shuriken: \[Particles\] Inspector breaks and errors are thrown when the Material field is deleted from the Particle System ([1379541](https://issuetracker.unity3d.com/issues/particles-inspector-breaks-and-errors-are-thrown-when-the-material-field-is-deleted-from-the-particle-system))
    
*   Shuriken: \[URP\] Particles are flickering when in Play Mode ([1390346](https://issuetracker.unity3d.com/issues/particles-are-flickering-when-in-play-mode))
    
*   Templates: Specific Actions dropdown tab does not appear when setting the Target of the Touch Trigger in the LEGO Template ([1390097](https://issuetracker.unity3d.com/issues/specific-actions-dropdown-tab-does-not-appear-when-setting-the-target-of-the-touch-trigger-in-the-lego-template))
    
*   Text: Editor crashes on TextCore::FontEngine::GetSystemFontReferencesInternal when opening the project ([1382082](https://issuetracker.unity3d.com/issues/editor-crashes-on-textcore-fontengine-getsystemfontreferencesinternal-when-opening-the-project))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.26f1 Release Notes

#### Features

*   Version Control: Added option to "Save Revision as" to the context menu in the changesets view.
    *   Added incoming changes overview bar for Gluon workspace.

#### Improvements

*   Documentation: Improved Elaborate on how ForceMode affects the velocity and angular velocity in AddForce/AddTorque.
    
*   Documentation: Updated TextAsset text getter documentation. ([1341180](https://issuetracker.unity3d.com/issues/textasset-dot-bytes-includes-utf-8-header-when-loading-a-file-from-assetbundle))
    
*   IL2CPP: Enabled sparse\_hash\_map and sparse\_hash\_set for Android and iOS for lower runtime memory usage.
    
*   IL2CPP: Improved the run time performance of managed code when script debugging is enabled by lowering the cost of each sequence point check.
    
*   Shaders: Fixed build failing when a shader from always included list has 1M variants before stripping. ([1379096](https://issuetracker.unity3d.com/issues/one-million-variant-limit-for-always-included-shaders-is-checked-before-stripping))
    
*   Shaders: Improved Shader binary compression, it is now utilizing more than one core. ([1375627](https://issuetracker.unity3d.com/issues/go-wide-on-shader-compression))
    
*   Version Control: Fixed capitalization of Pending Changes and File History tab names.
    
    *   Fixed the amount of spacing after the Item column title in the Pending Changes tab.
        
    *   Removed pin striping from line items in File History tab.
        
    *   Fixed project view context menu and icons missing after Collaborate project migration.
        
    *   Fixed migrated projects not downloading correctly from Unity Hub.
        

#### Changes

*   Graphics: Updated SRP to 10.8.1. Release notes available here:
    
    *   https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@10.8/changelog/CHANGELOG.html
*   Version Control: Updated Verson Control to 1.15.7. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.collab-proxy@1.15/changelog/CHANGELOG.html
    
    *   Moved Plastic Package settings to the Unity Project Settings window.
        
    *   Refined styling for Updating Workplace success state.
        
    *   Updated texts for empty state and overview bar.
        
    *   Removed Incoming Changes notification from empty state.
        
    *   Updated the text for Forced Checkout option.
        
    *   Refined the status overlay icons.
        
    *   Updated the refresh icon on the toolbar.
        
    *   Updated the texts for empty checkin message dialog.
        
*   XR: Updated OpenXR package to 1.3.1. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.3/changelog/CHANGELOG.html

#### Fixes

*   2D: Fixed an issue that per-platform settings does not get applied in Windows platform. ([1376608](https://issuetracker.unity3d.com/issues/psd-importer-uses-default-format-settings-when-overrides-are-selected-on-windows))
    
*   2D: Fixed an issue where Sprite reference missing after loading scene from AssetBundles. ([1274645](https://issuetracker.unity3d.com/issues/sprite-reference-missing-after-loading-scene-from-assetbundles))
    
*   2D: Fixed an issue where Sprite.texture is null when it's loaded from SpriteAtlas in an AssetBundle and the Play mode is entered. ([1345723](https://issuetracker.unity3d.com/issues/sprite-dot-texture-is-null-when-its-loaded-from-spriteatlas-in-an-assetbundle-and-the-play-mode-is-entered-from-the-prefab-mode))
    
*   2D: Fixed an issue where SpriteShape Corner is not set when setting multiple corners. ([1378775](https://issuetracker.unity3d.com/issues/height-is-editable-for-a-single-control-point-when-multiple-points-are-selected-in-sprite-shape-controller))
    
*   Android: Fixed an "Unable to initialize the Unity Engine" error when building AAB with Split App Binary. ([1380909](https://issuetracker.unity3d.com/issues/application-freezes-or-throws-errors-when-built-as-an-aab-file-with-split-application-binary-enabled))
    
*   Android: Fixed the issue that Compass.headingAccuracy will now report one of predefined values instead of 0. ([1304067](https://issuetracker.unity3d.com/issues/android-input-dot-compass-dot-headingaccuracy-is-always-set-to-0))
    
*   Asset Pipeline: Fixed an issue that asset reference no longer getting lost, if asset is modified and domain reload is done in the same refresh. (1357812)
    
*   Audio: Fixed a crash that occurs when removing a custom filter from a game object and then stopping the associated audio source. ([1363271](https://issuetracker.unity3d.com/issues/crash-when-stopping-an-audio-source-using-onaudiofilterread-from-a-destroyed-component))
    
*   Burst: Fixed an issue with invalid gc handle release that could corrupt current domain and cause crashes. ([1346442](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-and-serializing-data-after-modifying-script))
    
*   Editor: Fixed a PackageManager memory leak when continuously opening the window. ([1362559](https://issuetracker.unity3d.com/issues/packagemanager-memory-leak-when-continuously-opening-the-window))
    
*   GI: Fixed a warning in editor "The referenced script (Unknown) on this Behaviour is missing!" which can occur aften opening the Environments Tab of the Lighting Window. ([1367809](https://issuetracker.unity3d.com/issues/warnings-in-the-console-when-live-recompiling-scripts-after-editing-the-scenes-lighting-properties))
    
*   GI: Fixed an issue that caused baked lighting to still be visible even after scene unload. This could happen when using addressables for example. (1373923)
    
*   GI: Fixed an issue to ensure that mixed spot/point lights with no shadows bake their direct lighting in subtractive lighting mode. ([1350852](https://issuetracker.unity3d.com/issues/mixed-point-slash-spot-lights-with-shadows-disabled-dont-contribute-direct-light-to-static-objects-on-subtractive-lighting-mode))
    
*   Graphics: Fixed a bug that mip map streaming now works after setting a material with streamable textures on a renderer. ([1302707](https://issuetracker.unity3d.com/issues/materials-applied-to-gameobjects-at-runtime-from-resources-slash-addressables-are-low-resolution-when-texture-streaming-is-enabled))
    
*   Graphics: Fixed a case where resource fence was decreased instead of increased. (1359177)
    
*   Graphics: Fixed a missing conversion from compressed blendIndices on D3D platform. ([1365939](https://issuetracker.unity3d.com/issues/compute-buffer-errors-in-the-player-dot-log-when-building-project-with-vertex-compression-set-to-everything))
    
*   IL2CPP: Fixed an issue that blittable types nested in generic types are indeed blittable. ([1368711](https://issuetracker.unity3d.com/issues/computebuffer-dot-setdata-throws-an-error-when-scripting-backend-is-set-to-il2cpp))
    
*   IL2CPP: Fixed incorrect exception filter handler on try blocks with multiple catch blocks. ([1335434](https://issuetracker.unity3d.com/issues/ios-il2cpp-try-catch-when-filter-fails))
    
*   Input: Fixed Windows editor and Windows player being frozen during startup when new input system is enabled and a USB device with 65535 / 0xffff usages is connected to the computer. ([1373945](https://issuetracker.unity3d.com/issues/new-input-system-windows-native-backend-gets-stuck-in-infinite-loop-when-usb-hid-device-with-0xffff-usage-max-is-plugged-in))
    
*   iOS: Fixed a crash when switching to autorotation with the only available option being a reverse portrait. ([1374229](https://issuetracker.unity3d.com/issues/application-crashes-when-switching-to-autorotation-with-the-only-available-option-being-a-reverse-portrait))
    
*   iOS: Fixed game objects' colors in light mode. ([1379817](https://issuetracker.unity3d.com/issues/gameobjects-are-rendered-with-different-colors-in-the-ios-build))
    
*   Kernel: Fixed an issue where low bit set in `NativeArray` buffer pointer assumes `NativeArray` is created by `NativeList.AsDeferredJobArray` which is not always the case. In some cases `NativeArray` can be created by `NativeArray.GetSubArray`, where pointer would have lowest bit set for odd byte aligned offset. ([1294627](https://issuetracker.unity3d.com/issues/nativearray-dot-getsubarray-with-an-odd-index-number-is-empty-when-passed-to-ijob-as-argument))
    
*   License: Fixed an license error that prevents upgrading any existing project to 2022.1.0a14. ([1377916](https://issuetracker.unity3d.com/issues/unable-to-open-slash-upgrade-any-existing-project-to-2022-dot-1-0a14-due-to-license-errors))
    
*   Linux: Fixed an issue that mouse scroll wheel inputs are ignored when providing inputs through RDP. ([1372701](https://issuetracker.unity3d.com/issues/linux-editor-ignores-mouse-scroll-wheel-input-when-providing-inputs-through-rdp))
    
*   Mono: Fixed an issue where the timeout of a HttpClient handler was not being used for requests. ([1365107](https://issuetracker.unity3d.com/issues/timeout-value-does-not-propagate-when-using-a-delegatinghandler-as-the-main-httpclient-handler))
    
*   Physics: Fixed an issue that HingeJoint2D now correctly returns its reaction torque and that the joint break-limits use the absolute magnitude of the reaction torque. ([1384707](https://issuetracker.unity3d.com/issues/hingejoint2d-reactiontorque-is-zero))
    
*   Physics: Fixed an issue where multi-selecting Articulation Bodies would set some properties to the same value. ([1379145](https://issuetracker.unity3d.com/issues/anchors-rotation-value-becomes-the-same-when-selecting-multiple-game-objects-with-the-articulation-body-component))
    
*   Scripting: Fixed Analyzer from package failures, when the project name have whitespaces. ([1383680](https://issuetracker.unity3d.com/issues/roslyn-analyzers-cause-a-compiler-error-when-project-name-contains-white-spaces))
    
*   Shaders: Fixed an issue that counting variants based on usage will no longer make UI unusable for shaders with many variants. ([1378555](https://issuetracker.unity3d.com/issues/shader-graph-editor-performance-is-slow-when-skip-unused-shader-features-is-selected-in-the-shader-variant-dropdown))
    
*   uGUI: Fixed an issue that when a canvas is created manually by the user for a Template element (inside Dropdown), its Sorting Layer is no longer overriden. ([1343542](https://issuetracker.unity3d.com/issues/child-canvas-sorting-layer-is-changed-to-the-same-value-as-the-parent-canvas-after-interacting-with-dropdown-ui-object))
    
*   uGUI: Fixed an issue where uGUI was not be able to tell which gameview (screen) was clicked on as the mechanics for playmode dont work the same. ([1315870](https://issuetracker.unity3d.com/issues/onmousedown-is-not-called-when-clicking-on-a-gameobject-when-targeting-displays-other-than-display-1))
    
*   UI Toolkit: Fixed focus on ListView when scrolling. ([1271674](https://issuetracker.unity3d.com/issues/uielements-multiple-listviews-textfield-items-inherit-the-selected-textfields-text-when-scrolling-down-slash-up-in-the-window))
    
*   VFX Graph: Fixed an issue that Visual Effects in prefabs no longer always show as modified. ([1285787](https://issuetracker.unity3d.com/issues/prefab-visual-effects-in-prefabs-always-show-as-modified))
    
*   WebGL: Fixed a tapping sound when pausing audio. ([1238052](https://issuetracker.unity3d.com/issues/webgl-pausing-audio-source-causes-continuous-tapping-sounds-in-firefox-browser))
    
*   WebGL: Fixed an issue with AudioSource.loop property when using AudioSource.PlayScheduled() and AudioSource.PlayDelayed(). ([1337312](https://issuetracker.unity3d.com/issues/audio-is-not-looping-when-using-playscheduled-in-webgl-build))

### Known Issues in 2020.3.25f1

*   AI: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Build Pipeline: Windows build fails when using Deltatre Magma Engine ([1382217](https://issuetracker.unity3d.com/issues/windows-build-fails-when-using-deltatre-magma-engine))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   IL2CPP: Build fails with 'artifacts/tundra.dag.json does not exist yet' when using UnityEditor.InitializeOnLoadMethod in script ([1385676](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-with-artifacts-slash-tundra-dot-dag-dot-json-does-not-exist-yet-when-using-unityeditor-dot-initializeonloadmethod-in-script))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Metal: Consistent EditorLoop 5-10ms spikes when using Metal API ([1378985](https://issuetracker.unity3d.com/issues/consistent-gfx-dot-waitforpresentongfxthread-5-10ms-spikes-when-using-metal-api))
    
*   Metal: GameObject's colors are rendered differently in the iOS build compared to the colors in the Editor ([1379817](https://issuetracker.unity3d.com/issues/gameobjects-are-rendered-with-different-colors-in-the-ios-build))
    
*   OpenGL: Unity crashes when entering "-force-opengl" or "-force-glcore" in the Advanced Project Settings ([1374768](https://issuetracker.unity3d.com/issues/unity-crashes-when-entering-force-opengl-or-force-glcore-in-the-advanced-project-settings))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Progressive Lightmapper: \[macOS\] BugReporter doesn't get invoked when the project crashes ([1219458](https://issuetracker.unity3d.com/issues/macos-bugreporter-doesnt-get-invoked-when-the-project-crashes))
    
*   Scene Management: Crash when calling hideFlags after removing missing nested prefab ([1381563](https://issuetracker.unity3d.com/issues/crash-when-calling-hideflags-after-removing-missing-nested-prefab))
    
*   Scene/Game View: Camera resolution is set to default when opening the Editor ([1378321](https://issuetracker.unity3d.com/issues/camera-resolution-is-set-to-default-when-opening-the-editor))
    
*   Scripting: Roslyn Analyzers cause a Compiler error when project name contains white spaces ([1383680](https://issuetracker.unity3d.com/issues/roslyn-analyzers-cause-a-compiler-error-when-project-name-contains-white-spaces))
    
*   Scripting: \[MacOS\] An Unhandled exception is thrown in the Editor.log and Console window when trying to build AssetBundles ([1383700](https://issuetracker.unity3d.com/issues/an-unhandled-exception-is-thrown-in-the-editor-dot-log-and-console-window-when-trying-to-build-assetbundles))
    
*   Serialization: \[CacheServer\] Editor crashes when "IP Address" in Project Settings is empty ([1373314](https://issuetracker.unity3d.com/issues/cacheserver-editor-crashes-when-ip-address-in-project-settings-is-empty))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Shuriken: \[Particles\] Inspector breaks and errors are thrown when the Material field is deleted from the Particle System ([1379541](https://issuetracker.unity3d.com/issues/particles-inspector-breaks-and-errors-are-thrown-when-the-material-field-is-deleted-from-the-particle-system))
    
*   WebGL: Creating a mesh in Play Mode causes a "abnormal mesh bounds" error when build target is WebGL ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Windows: Editor crashes or freezes with 'Copying file failed' error when importing a file from WinRAR Archiver ([1325310](https://issuetracker.unity3d.com/issues/editor-crashes-or-freezes-with-copying-file-failed-error-when-importing-a-file-from-winrar-archiver))
    

### 2020.3.25f1 Release Notes

#### Improvements

*   Animation: Improved performance with generating animation bindings. ([1353998](https://issuetracker.unity3d.com/issues/significant-impact-on-performance-when-using-animator-override-controller))
    
*   Profiler: Improved performance when platform profiler is attached by removing subscription to counters in native profiler plugins. (1378190)
    

#### API Changes

*   UI Toolkit: Added: The following public UI Toolkit APIs:
    
    *   BasePopupField.choices
        
    *   MaskField.choices
        
    *   MaskField.choicesMasks
        

#### Changes

*   Graphics: Updated Postprocessing v2 package to 3.2.0. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.postprocessing@3.2/changelog/CHANGELOG.html
    
*   Package Manager: Updated com.unity.purchasing to 4.1.2. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.purchasing@4.1/changelog/CHANGELOG.html
    
*   Services: Renamed Unity Analytics to Legacy Analytics in order to aid deprecation of the Analytics package.
    
*   XR: Updated OpenXR Package to 1.3.0. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.3/changelog/CHANGELOG.html
    

#### Fixes

*   Android: Fixed an issue that IBeginDragHandler.OnBeginDrag and IDragHandler.OnDrag are now triggered when using Samsung S-Pen. ([1364109](https://issuetracker.unity3d.com/issues/android-samsung-s-pen-ibegindraghandler-dot-onbegindrag-and-idraghandler-dot-ondrag-is-not-triggered-when-using-samsung-s-pen))
    
*   Android: Fixed an issue that leaked Java local reference when creating new Java object. ([1366122](https://issuetracker.unity3d.com/issues/android-app-crashes-with-local-reference-table-overflow-when-creating-over-512-androidjavaclass-objects))
    
*   Android: Fixed an issue that Pen.current is always null when using Samsung S Pen. ([1378794](https://issuetracker.unity3d.com/issues/input-samsung-s-pen-pen-dot-current-is-always-null-when-using-samsung-s-pen))
    
*   Android: Fixed an issue with input and Stylus input is now treated as a touch rather than mouse in the older input system. ([1246579](https://issuetracker.unity3d.com/issues/samsung-s-pen-touches-are-not-registered-when-samsung-s-pen-is-used-to-touch-screen))
    
*   Android: Fixed an issue with input and touches are now registered when Samsung S Pen is used to touch screen. ([1370814](https://issuetracker.unity3d.com/issues/android-samsung-s-pen-input-dot-mouseposition-stops-updating-when-the-s-pen-is-used-on-a-samsung-device))
    
*   Android: Fixed ClassNotFoundException errors mentioning classes in com.google.android.play.core.assetpacks package when play.core dependency is not added to the project. ([1379427](https://issuetracker.unity3d.com/issues/assetpackstateupdatelistener-classnotfoundexception-in-an-empty-project))
    
*   Android: Fixed Input.mouseScrollDelta Y-axis changing issue when using Samsung S Pen. ([1378504](https://issuetracker.unity3d.com/issues/input-samsung-s-pen-input-dot-mousescrolldelta-y-axis-is-changed-when-using-samsung-s-pen))
    
*   Asset Pipeline: Fixed an assert issue when fetching previews for assets in AssetBundles. ([1311115](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-request-dot-key-dot-guid-dot-isvalid-when-selecting-a-mesh))
    
*   Editor: Fixed an issue that the frame debugger does not update issue after clicking frame navigation arrows. ([1329150](https://issuetracker.unity3d.com/issues/frame-debugger-frame-event-data-doesnt-update-after-clicking-on-frame-navigation-arrows-and-not-moving-the-mouse))
    
*   Editor: Fixed an issue that the gameview is not responding to some input when the mouse is over another window in the macOS editor. ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Editor: Fixed DontSaveInEditor and now it works as intended on Prefab instances. ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Editor: Fixed editor crashes when exiting and keeping a tutorial project. ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   Game Core: Fixed an issue that Suspend/Resume will no longer cause a crash during scene load. (1379825)
    
*   GI: Fixed a crash with CPU OpenCL devices. ([1338498](https://issuetracker.unity3d.com/issues/crash-when-baking-lights-for-a-scene-with-a-terrain-using-progressive-gpu-lightmapper-with-a-weaker-gpu))
    
*   GI: Fixed a rare infinite loop when baking reflection probes while shaders are asynchronously compiling. (1376248)
    
*   GI: Fixed an issue that cookies on baked point lights ignoring light rotation. ([1289490](https://issuetracker.unity3d.com/issues/rotation-of-baked-point-light-with-a-cookie-ignored-when-baking-lightmap))
    
*   GI: Fixed an issue where setting baked light probe coefficients to an empty array causes a crash. (1342068)
    
*   Graphics: Fixed an issue that now it is possible to create textures using deprecated ASTC enums. ([1277203](https://issuetracker.unity3d.com/issues/ios-unable-to-create-texture2ds-with-astc-rgba-4x4-texture-format-at-runtime))
    
*   Graphics: Fixed an issue where editor warnings concerning the decompression of compressed formats were still not properly muted. (1329157)
    
*   IL2CPP: Fixed an issue and now the debugger is able to grow the frame capacity on-demand. ([1360149](https://issuetracker.unity3d.com/issues/player-crashes-when-running-a-recursive-function-with-script-debugging-enabled))
    
*   IL2CPP: Fixed the order of operations for Thread Volatile Read and Write. ([1373882](https://issuetracker.unity3d.com/issues/il2cpp-thread-volatileread-is-added-to-build-instead-of-volatileread-when-calling-thread-dot-volatileread))
    
*   iOS: Fixed a crash when performing two Microphone/WebCam permission requests at the same time. ([1330126](https://issuetracker.unity3d.com/issues/ios-crash-on-scriptinggchandle-acquire-when-calling-requestuserauthorization-without-using-yield-for-pending-authorization))
    
*   iOS: Fixed an iOS hanging and crashing when a call comes in. ([1368258](https://issuetracker.unity3d.com/issues/ios-an-incoming-call-notification-sometimes-freezes-unity-app-on-ios-15))
    
*   iOS: Fixed an issue that extra frame not being rendered on iOS when "Render Extra Frame on Pause" is enabled in iOS player settings. ([1362184](https://issuetracker.unity3d.com/issues/ios-extra-frame-not-rendered-in-app-switcher-when-multithreaded-rendering-or-render-extra-frame-on-pause-is-on))
    
*   Networking: Fixed an issue and the UnityWebRequest will no longer warn when setting the Accept-Encoding header. ([1355007](https://issuetracker.unity3d.com/issues/warning-is-logged-when-using-unitywebrequest-to-set-the-header-to-accept-encoding))
    
*   Package Manager: Fixed an issue that the builtIn documentation link now opens the right editor version url. (1376379)
    
*   Package Manager: Fixed errors on the UI Toolkit when the Package Manager Project Settings stylesheet is loaded. (1292279)
    
*   Particles: Fixed an exception on WebGL builds when pre-allocating Particle System memory for systems using infinite lifetimes. (1320919)
    
*   Prefabs: Fixed a crash when Exiting Play mode with Multiple scenes loaded. ([1298007](https://issuetracker.unity3d.com/issues/crash-when-exiting-play-mode-with-multiple-scenes-loaded))
    
*   Project Browser: Fixed an issue that the Project Browser slider is now correctly restored when clearing the search field after selecting a favorite filter. ([1348825](https://issuetracker.unity3d.com/issues/project-browser-slider-doesnt-get-reset-after-selecting-any-item-in-favorites-hierarchy-and-clearing-the-search-bar))
    
*   Scene/Game View: Fixed MonoBehaviour icons not rendering in Scene View when selected. ([1379500](https://issuetracker.unity3d.com/issues/attaching-an-icon-to-a-monobehaviour-script-disappears-when-selecting-the-game-object))
    
*   uGUI: Fixed validation with the localPosition, now it is validated each time an object is reset. ([1367658](https://issuetracker.unity3d.com/issues/reverting-prefab-overrides-in-prefab-instance-causes-unnecessary-changes-to-child-transform-values))
    
*   UI Toolkit: Fixed a PropertyField problem when SerializedProperty has invalid enum index set. ([1360996](https://issuetracker.unity3d.com/issues/indexoutofrange-exception-is-thrown-when-selecting-player-build-settings-asset))
    
*   UI Toolkit: Fixed an ArgumentException when the PropertyField is bind to the BuildTarget enum Popup/Dropdown (Enum-compatible) fields. Now unselected/invalid values are gracefully handled. ([1304581](https://issuetracker.unity3d.com/issues/uielements-argumentexception-is-thrown-when-the-propertyfield-is-bind-to-the-buildtarget-enum))
    
*   UI Toolkit: Fixed an issue when loading a project that contains a dialog that is embedded in the editor, the dialog's CreateGUI callback is invoked after the Awake and OnEnable callbacks. ([1326173](https://issuetracker.unity3d.com/issues/creategui-gets-executed-before-awake-and-onenable-when-opening-a-project-with-a-custom-window-already-open))
    
*   UI Toolkit: Fixed an issue with performance test for UI Toolkit renderer repaints. (1337832)
    
*   Universal Windows Platform: Fixed an issue that Screen.currentResolution.refreshRate now returns the actual screen refresh rate. ([1373342](https://issuetracker.unity3d.com/issues/uwp-screen-dot-currentresolution-dot-refreshrate-returns-0-when-used-in-uwp-build))
    
*   Universal Windows Platform: Fixed an issue that the Application.internetReachability now correctly detects internet being unreachable when there is a LAN connection but no way to the actual Internet. ([1351079](https://issuetracker.unity3d.com/issues/uwp-application-dot-internetreachability-gets-the-wrong-values-when-built-on-universal-windows-platform))
    
*   Universal Windows Platform: Fixed packaging app fails with error "Merge failure for shared merged PRI file : error 0x80070490" when building a fat app package for both x64 and ARM64. ([1375766](https://issuetracker.unity3d.com/issues/merge-failure-for-shared-merged-pri-file-error-0x80070490-thrown-when-installing-app-package-targeted-for-arm-x86-and-x64))
    
*   Video: Fixed an issue that the Source Info text of the Video asset is barely visible. ([1328269](https://issuetracker.unity3d.com/issues/source-info-text-of-the-video-asset-is-barely-visible))
    
*   WebGL: Fixed an issue that the CustomRenderTexture will now work with doubleBuffer on WebGL. ([1339213](https://issuetracker.unity3d.com/issues/webgl-customrendertexture-is-not-updated-when-double-buffered-is-enabled))
    
*   WebGL: Fixed fullscreen mode on Safari where the Player window is not expanded fully. ([1347304](https://issuetracker.unity3d.com/issues/webgl-fullscreen-mode-does-not-expand-the-players-window-fully-and-has-black-edges-when-using-safari))
    
*   Windows: Fixed Input.touch APIs not working when both old and new input systems are enabled at the same time. ([1382924](https://issuetracker.unity3d.com/issues/input-dot-touch-apis-dont-work-when-both-new-and-old-input-systems-are-active))
    
*   Windows: Fixed missing window resize events when using on demand rendering. ([1324843](https://issuetracker.unity3d.com/issues/srp-artifacts-appear-in-the-player-when-changing-the-size-of-the-window-and-ondemandrendering-dot-renderframeinterval-is-called))
    
*   Windows: Fixed touch up events getting missed in rare circumstances on some touchscreen devices. ([1322180](https://issuetracker.unity3d.com/issues/touch-inputs-ignored-or-miscalculated-after-spamming-input-repeatedly))
    
*   XR: Fixed foveated rendering on Oculus devices. ([1382093](https://issuetracker.unity3d.com/issues/xr-vulkan-oculus-crash-launching-app-on-quest))
    
*   XR: Fixed slow performance on Quest when terrain includes trees. ([1308585](https://issuetracker.unity3d.com/issues/quest-unusable-performance-when-terrain-includes-trees))

### Known Issues in 2020.3.24f1

*   AI: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Android: 'Not enough storage space to install required resources' error when building App Bundle with Split Application Binary ([1372558](https://issuetracker.unity3d.com/issues/android-not-enough-storage-space-to-install-required-resources-error-when-building-app-bundle-with-split-application-binary))
    
*   Android: Sometimes text is not rendered when using OpengLES3 on a Xiaomi Redmi9A device. ([1347186](https://issuetracker.unity3d.com/issues/android-the-text-is-missing-on-a-xiaomi-redmi9a-device))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Build Pipeline: Windows build fails when using Deltatre Magma Engine ([1382217](https://issuetracker.unity3d.com/issues/windows-build-fails-when-using-deltatre-magma-engine))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project (Linux) ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Scene Management: Instantiated FBX through code throws error after leaving Play Mode ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Scene/Game View: Icon attached to MonoBehaviour script disappears when Selecting the GameObject ([1379500](https://issuetracker.unity3d.com/issues/attaching-an-icon-to-a-monobehaviour-script-disappears-when-selecting-the-game-object))
    
*   Serialization: \[CacheServer\] Editor crashes when "IP Address" in Project Settings is empty ([1373314](https://issuetracker.unity3d.com/issues/cacheserver-editor-crashes-when-ip-address-in-project-settings-is-empty))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Shuriken: \[Particles\] Inspector breaks and errors are thrown when the Material field is deleted from the Particle System ([1379541](https://issuetracker.unity3d.com/issues/particles-inspector-breaks-and-errors-are-thrown-when-the-material-field-is-deleted-from-the-particle-system))
    
*   Templates: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   WebGL: Creating a mesh in Play Mode causes a "abnormal mesh bounds" error when build target is WebGL ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    

### 2020.3.24f1 Release Notes

#### Features

*   Input System: Added support for PS5 DualSense controllers on Mac and Windows.
    
*   Version Control: Added option to "Add to ignore file" in context menu in the project view
    
    *   Added empty state message for Pending Changes tab.
        
    *   Added success state message for Pending Changes tab.
        
    *   Added metrics for Branches tab functionalities.
        

#### Improvements

*   iOS: Added ProMotion support on ios15 and new devices (iphone13 family). ([1374612](https://issuetracker.unity3d.com/issues/enable-promotion-support-does-not-allow-iphone-13-pro-slash-pro-max-to-run-at-higher-refresh-rates))
    
*   iOS: Added support for iPhones, iPads and Apple TV released in 2021. ([1367775](https://issuetracker.unity3d.com/issues/iphone-13-information-is-not-included-in-the-devicesettings-dot-mm-file))
    
*   Package: Fixed property drawing when manually drawing a property that was hidden with \[HideInInspector\]. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.mathematics@1.2/changelog/CHANGELOG.html ([1298368](https://issuetracker.unity3d.com/issues/int3-float3-and-quaternions-fields-from-the-mathematics-package-dont-work-properly-when-using-debuggerhidden-attribute))
    
*   Package: Updated com.unity.ide.visualstudio package to 2.0.12. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.ide.visualstudio@2.0/changelog/CHANGELOG.html
    
*   Particles: Improved type lookup speed for SetParticles and GetParticles. (1373296)
    
*   Version Control: Fixed console error when selecting object in Scene view hierarchy or creating a new asset.
    
*   Version Control: Fixed NullReferenceException after closing the Plastic SCM window.
    
*   Version Control: Fixed UI overlays in Project view missing on changed assets when force checkout is disabled.
    
*   Windows: Added Windows 11 support in SystemInfo.operatingSystem. ([1372750](https://issuetracker.unity3d.com/issues/reported-cases-are-marked-as-windows-10-when-reported-with-windows-11))
    
*   XR: Updated WMR XR SDK Plug-on to 4.6.1. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.xr.windowsmr@4.6/changelog/CHANGELOG.html
    

#### API Changes

*   Apple TV: Added: Identifier for 2nd generation Apple TV 4K.
    
*   Apple TV: Changed: Identifiers for Apple TV HD and first generation Apple TV 4K.
    
*   iOS: Added: Identifiers for all iPhone 13 models, 6th generation iPad Minis, 9th generation iPads.
    

#### Changes

*   Input System: Updated Input System to 1.2.0. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.inputsystem@1.2/changelog/CHANGELOG.html
    
*   Version Control: Changed the default metadata columns shown in the Incoming Changes screen.
    
*   Version Control: Removed pinstriping in the Gluon Incoming Changes window.
    
*   Version Control: Removed the "Nothing to download" bar from the Incoming Changes window when there are no items to download.
    
*   Version Control: Updated the alignment of sorting arrows to the right of the column.
    
*   XR: Updated XR Management to 4.2.0. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.xr.management@4.2/changelog/CHANGELOG.html
    

#### Fixes

*   2D: Fixed a crash when disabling the Optimize Geometry option on a Sprite Shape Controller. ([1364012](https://issuetracker.unity3d.com/issues/crash-when-optimizing-the-geometry-of-the-spriteshape))
    
*   Android: Fixed a performance regression when using MSAA backbuffer with Vulkan. ([1351579](https://issuetracker.unity3d.com/issues/android-vulkan-when-using-antialiasing-with-vulkan-the-fps-fluctuates-from-40-60))
    
*   Android: Fixed an issue with BuildIl2CppTask now it is correctly formed with --enable-debugger when using Export Project with Script Debugging. ([1369680](https://issuetracker.unity3d.com/issues/il2cpp-android-visual-studio-does-not-attach-to-process-through-wi-fi-when-the-project-is-exported))
    
*   Animation: Fixed an issue of the use of PropertyStreamHandle with Addressable AnimatorController. ([1341031](https://issuetracker.unity3d.com/issues/cannot-rebind-multipositionconstraint-source-objects-when-animator-controller-is-changed-at-runtime))
    
*   Asset Pipeline: Fixed an issue that the progress bar shows full during the import of assets. ([1337397](https://issuetracker.unity3d.com/issues/progress-bar-is-always-at-100-percent-when-importing-multiple-assets))
    
*   Build Pipeline: Fixed GlobalObjectIdGlobalObjectIdentifiersToObjectsSlow and it no longer returns random objects when then GlobalObjectId references a non-existing object. ([1291291](https://issuetracker.unity3d.com/issues/globalobjectidglobalobjectidentifierstoobjectsslow-sometimes-returns-a-random-existing-gameobject))
    
*   Build System: Fixed an error "Cannot find mono image in MonoManager for assembly x" during assembly reload when calling `ContentBuildInterface:GetPlayerObjectIdentifiersInAsset`.
    
*   DX12: Fixed linear colorspace screenshots being broken when swapchain resolution mismatched with window resolution. (1379073)
    
*   Editor: Fixed an Editor crash when using -quit command line argument on MacOS. (1362461)
    
*   Editor: Fixed an issue that the PropertyField methods do not include ReorderableList children by default. ([1336112](https://issuetracker.unity3d.com/issues/some-list-fields-do-not-display-when-using-editorgui-dot-propertyfield-in-a-custom-property-drawer))
    
*   Editor: Fixed an issue that the reflection probe baking sometimes containing the cyan loading shader. ([1368213](https://issuetracker.unity3d.com/issues/loading-shader-is-picked-when-allowasynccompilation-equals-false-and-async-compilation-is-ongoing))
    
*   Editor: Fixed an issue that the Unity Package Manager diagnostic tool fails to run when started via the launch script.
    
*   GI: Fixed an infinite loop for light baking when unloading a light baked scene while another scene is open. ([1337508](https://issuetracker.unity3d.com/issues/light-baking-gets-stuck-in-a-infinite-loop-when-unloading-a-light-baked-scene-if-you-have-another-scene-open))
    
*   Graphics: Fixed a D3D12 validation error on render target and a pipeline state sample count mismatch. (1371812)
    
*   Graphics: Fixed a NativeArray de-allocation error when using the results of Texture2D.GetPixelData in multiple jobs per frame. (1359263)
    
*   Graphics: Fixed an issue that Texture Memory in Memory Profiler Module was not updated when profiling a Vulkan build. ([1351803](https://issuetracker.unity3d.com/issues/memory-profiler-profiler-shows-that-the-texture-memory-usage-is-lower-when-vulkan-is-used-on-some-devices))
    
*   Graphics: Fixed an issue where memory would leak from mesh due to mismatching memory labels. ([1362505](https://issuetracker.unity3d.com/issues/memory-leak-occurs-in-player-as-sharedgeometrybuffers-mismatches-memory-labels-for-new-and-delete))
    
*   Graphics: Fixed incorrect compression of 8k ETC textures using the Crunch compressor. ([1346908](https://issuetracker.unity3d.com/issues/textures-compressed-with-rgb-crunched-etc-on-android-get-corrupted))
    
*   Input System: Fixed a performance issue on entering/exiting play-mode where HID device capabilities JSON could be parsed multiple times for a single device. ([1362733](https://issuetracker.unity3d.com/issues/input-package-deserializing-json-multiple-times-when-entering-slash-exiting-playmode))
    
*   Input System: Fixed a problem where explicitly switching to the already active control scheme and device set for `PlayerInput` would cancel event callbacks for no reason when the control scheme switch would have no practical effect. This fix detects and skips device unpairing and re-pairing if the switch is detected to not be a change to scheme or devices. ([1342297](https://issuetracker.unity3d.com/issues/input-system-button-clicks-are-missed-when-using-switchcurrentcontrolscheme-inside-of-onmousedown))
    
*   Input System: Fixed a problem where only using runtimes that are not XR supported causes a compile error. This fix adds back in ENABLE\_VR checks to prevent this issue.
    
*   Input System: Fixed an error "Default constructor not found for type UnityEngine.InputSystem.iOS.LowLevel.iOSStepCounter" and any other potential exceptions due to classes, methods, fields and properties being stripped when managed stripping setting is set to medium or high. ([1368761](https://issuetracker.unity3d.com/issues/ios-new-input-system-iosstepcounter-crash-on-launch-with-managed-stripping))
    
*   Input System: Fixed an incorrect generic gamepad short display button names mapping.
    
*   Input System: Fixed an issue where InvalidOperationException is thrown if an input for an action with multiple interactions is held while disconnecting the device. ([1354098](https://issuetracker.unity3d.com/issues/input-system-errors-are-thrown-when-disconnecting-controller-while-holding-a-button-with-press-and-release-set-up-separately))
    
*   Input System: Fixed an issue where resetting an action via `InputAction.Reset()` while being in disabled state would prevent the action from being enabled again. ([1370732](https://issuetracker.unity3d.com/issues/new-input-system-disable-reset-enable-makes-controls-being-disabled-forever))
    
*   Input System: Fixed current being `null` for sensors (`Accelerometer.current`, others). ([1371204](https://issuetracker.unity3d.com/issues/accelerometer-not-working-when-using-input-system-1-dot-1-1))
    
*   Input System: Fixed handling of exception in `InputManager.OnUpdate` and now the system will try to handle the exception and recover into a working state.
    
*   Input System: Fixed input action for Android gamepad's right stick will be correctly invoked when only the Y-axis is changing. ([1308637](https://issuetracker.unity3d.com/issues/android-input-system-right-analog-stick-tracking-is-erratic-when-using-a-gamepad-connected-to-an-android-device))
    
*   Input System: Fixed `action.ReadValue` and others returning invalid data when used from `FixedUpdate` or early update when running in play mode in the editor. ([1368559](https://issuetracker.unity3d.com/issues/enter-key-is-not-registered-when-using-waspressedthisframe-with-input-system-1-dot-1-1))
    
*   Input System: Improved the user experience when creating single vs multi-touch touchscreen bindings in the Input Action Asset editor by making both options visible in the input action dropdown menu. Now it's not neccessary to be aware of the touch\\\*/press path binding syntax. ([1357664](https://issuetracker.unity3d.com/issues/inputsystem-touchscreens-multi-touch-doesnt-work-when-using-a-custom-inputactionasset))
    
*   iOS: Fixed a crash/hang when going to background from portrait upside down. ([1285042](https://issuetracker.unity3d.com/issues/ios-app-is-crashing-when-it-is-switched-out-of-focus-and-focused-again-while-it-is-in-reverse-portrait))
    
*   Particles: Fixed an issue that texel size and mask interaction shader properties are missing in the particle system renderer. ([1296392](https://issuetracker.unity3d.com/issues/texelsize-is-always-1-for-particle-systems-renderer-when-using-shader-graph-material-which-draws-texelsize-value-in-rg-channels))
    
*   Profiler: Fixed a rare crash on Editor shutdown. ([1372546](https://issuetracker.unity3d.com/issues/crash-on-repaintcontroller-renderplaymodeviewcameras-after-changing-active-input-handling))
    
*   Profiler: Fixed an ArgumentOutOfRangeException in the Module Editor when enabling deep profiling after deleting a module. ([1335309](https://issuetracker.unity3d.com/issues/linux-profiler-argumentoutofrangeexception-is-thrown-on-clicking-deep-profile-when-deleted-module))
    
*   Serialization: Fixed an issue that classes referred by value will also be considered and added to the list of classes not to be stripped when performing a Player Build / Asset Bundle Build / Addressable Build, in addition to SerializeReference. ([1296195](https://issuetracker.unity3d.com/issues/onafterdeserialize-is-not-called-for-a-class-with-no-empty-constructor-in-a-package-when-project-is-built-using-il2cpp))
    
*   Serialization: Fixed missed invocations of ISerializationCallbackReceiver.OnAfterDeserialization and asserts arising when that interface is implemented on structs inside a MonoBehaviour or ScriptableObject class, along with the presence of SerializeReference fields. ([1372710](https://issuetracker.unity3d.com/issues/assertion-failed-error-is-thrown-when-calling-resources-dot-loadall-together-with-linq-expressions))
    
*   Shaders: Fixed an issue with Editor using some default data until a shader is imported or compiled. ([1369645](https://issuetracker.unity3d.com/issues/shaders-are-ignored-when-executing-build-asset-bundles-method-from-console-with-nographics-argument))
    
*   uGUI: Fixed an issue where the text inside a Canvas would sometimes blink.
    
*   Universal Windows Platform: Fixed a building issue and now generated Visual Studio project builds correctly on Universal Windows Platform with Visual Studio 2022. ([1378086](https://issuetracker.unity3d.com/issues/unity-produces-visual-studio-project-that-by-default-doesnt-build-when-using-visual-studio-2022))
    
*   Video: Fixed spamming errors in the Console when opening imported video in the Inspector tab and Target Platform is set to UWP. ([1357597](https://issuetracker.unity3d.com/issues/errors-are-spammed-in-the-console-upon-opening-imported-video-in-the-inspector-tab-when-target-platform-is-set-to-uwp))
    
*   Windows: Fixed an issue where files get locked unnecessarily by UnityCrashHandler.exe no longer inherits all Windows handles from the editor/player when launched.
    
*   XR: Fixed an issue where duplicated UnitySubsystemsManifest.json files were added while building XR app for Android with Build App Bundle option.
    
*   XR: Fixed an issue with the XR plugin interface depth. ([1376203](https://issuetracker.unity3d.com/issues/severe-flickering-in-unity-2020-dot-3-21f1-with-openxr-on-hl2))

### Known Issues in 2020.3.23f1

*   AI: NavMesh Agent can not pass through passable area between carving NavMesh Obstacles ([1346325](https://issuetracker.unity3d.com/issues/navmesh-agent-can-not-pass-through-passable-area-between-carving-navmesh-obstacles))
    
*   Android: 'Not enough storage space to install required resources' error when building App Bundle with Split Application Binary ([1372558](https://issuetracker.unity3d.com/issues/android-not-enough-storage-space-to-install-required-resources-error-when-building-app-bundle-with-split-application-binary))
    
*   Android: Sometimes text is not rendered when using OpengLES3 on a Xiaomi Redmi9A device. ([1347186](https://issuetracker.unity3d.com/issues/android-the-text-is-missing-on-a-xiaomi-redmi9a-device))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   CodeEditors: Attaching an icon to a MonoBehaviour script disappears when Selecting the Game Object ([1379500](https://issuetracker.unity3d.com/issues/attaching-an-icon-to-a-monobehaviour-script-disappears-when-selecting-the-game-object))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Linux Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   MacOS: \[OSX\]\[Editor\] DirectoryNotFoundException errors appear when a project is created inside a directory with unicode characters ([1377915](https://issuetracker.unity3d.com/issues/multiple-directorynotfoundexception-errors-appear-when-a-project-is-created-inside-a-directory-with-unicode-characters))
    
*   Progressive Lightmapper: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Scene Management: An error is thrown when merging changes made to a Prefab into a Nested Prefab with co-dependant components ([1362574](https://issuetracker.unity3d.com/issues/changes-fail-when-merging-from-prefab-to-nested-prefab-with-co-related-components))
    
*   Scene Management: Instantiated FBX through code throws error after leaving Play Mode ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Shader System: Shaders are ignored when executing Build Asset Bundles method from console with -nographics argument ([1369645](https://issuetracker.unity3d.com/issues/shaders-are-ignored-when-executing-build-asset-bundles-method-from-console-with-nographics-argument))
    
*   Shadows/Lights: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Shuriken: \[Particles\] Inspector breaks and errors are thrown when the Material field is deleted from the Particle System ([1379541](https://issuetracker.unity3d.com/issues/particles-inspector-breaks-and-errors-are-thrown-when-the-material-field-is-deleted-from-the-particle-system))
    
*   Templates: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   WebGL: Creating a mesh in Play Mode causes a "abnormal mesh bounds" error when build target is WebGL ([1364263](https://issuetracker.unity3d.com/issues/error-to-create-a-new-mesh-in-real-time-with-the-advanced-method-on-webgl))
    
*   Window Management: Broken layout stops panels located in the top left corner of the Editor from rendering in the Karting Microgame project ([1367783](https://issuetracker.unity3d.com/issues/broken-layout-stops-panels-located-in-the-top-left-corner-of-the-editor-from-rendering-in-the-karting-microgame-project))
    
*   XR SDK: Severe flickering in Unity 2020.3.21f1 with OpenXR on HL2 ([1376203](https://issuetracker.unity3d.com/issues/severe-flickering-in-unity-2020-dot-3-21f1-with-openxr-on-hl2))
    

### 2020.3.23f1 Release Notes

#### Features

*   Version Control: Added visual overview bar to the incoming changes tab.  
    Added progress dialog for the migration process.  
    Added Branches tab that shows a list of all branches in the repository.  
    Added option and dialog to create a child branch from selected branch.  
    Added option to switch to another branch.  
    Added option and dialog to rename a branch.  
    Added option to delete a branch.  
    Added a preference to save if the window should open the Branches tab by default.  
    Added metrics for Plastic SCM installation window usage.

#### Improvements

*   AI: Improved NavMeshAgent creation failure log to help select the source object. ([1274983](https://issuetracker.unity3d.com/issues/navmesh-source-object-is-not-pinged-when-clicking-navmesh-error))
    
*   Asset Import: Improved Configure button enabling and now it is enabled immediately when switching Animation type to Humanoid. ([1197249](https://issuetracker.unity3d.com/issues/asset-importers-configure-button-is-not-enabled-in-real-time-after-changing-animation-type-to-humanoid))
    
*   Package: Updated com.unity.cinemachine to 2.6.11. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.cinemachine@2.6/changelog/CHANGELOG.html
    
*   Package: Updated com.unity.recorder to 2.5.7. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.recorder@2.5/changelog/CHANGELOG.html
    
*   Package: Updated Oculus XR Plugin package to 1.11.0. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.xr.oculus@1.11/changelog/CHANGELOG.html.
    
*   Profiler: Updated Profile Analyzer package version to 1.1.1, which includes two bug fixes. Release notes available here:  
    https://docs.unity3d.com/Packages/com.unity.performance.profile-analyzer@latest/index.html?subfolder=/changelog/CHANGELOG.html.
    
*   XR: Added SRP batcher support for late latching.
    

#### API Changes

*   Shaders: Added: A way to query preprocessed shader data for a given variant. ([1364378](https://issuetracker.unity3d.com/issues/no-way-to-get-preprocessed-data-using-pass-dot-compilevariant))

#### Changes

*   Version Control: Updated status bar notification icons.
    
*   Version Control: Updated texts for workspace modes selection and checkin comment box.
    
*   XR: Updated com.unity.xr.management to 4.1.0. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.xr.management@4.1/changelog/CHANGELOG.html
    

#### Fixes

*   Android: Disabled cut/copy/paste popup that was appearing on the hidden Android inputfield. ([1317688](https://issuetracker.unity3d.com/issues/android-tmp-inputfield-selection-appears-above-keyboard-and-is-interactable-when-hide-mobile-input-enabled))
    
*   Android: Fixed a crash when using Application.Quit with Optimized Frame Pacing. ([1341467](https://issuetracker.unity3d.com/issues/application-dot-quit-exits-with-signal-11-sigsegv))
    
*   Android: Fixed ComputeGrabScreenPos and ComputeScreenPos so that they take Vulkan swapchain pre-rotation into account now. ([1340975](https://issuetracker.unity3d.com/issues/android-computegrabscreenpos-doesnt-take-vulkan-swapchain-pre-rotation-into-account))
    
*   Android: Fixed GLSL compile errors when using a particle system with instancing. ([1255008](https://issuetracker.unity3d.com/issues/android-a-glsl-error-occurs-when-using-the-unity-particle-system))
    
*   Android: Fixed screen safe area values at startup. ([1327752](https://issuetracker.unity3d.com/issues/safearea-when-device-is-held-in-portrait-app-is-running-in-portrait-upside-down-windowed-mode-safearea-values-are-incorrect))
    
*   Animation: Fixed a potential crash when generating asset previews if destructive methods are called in user callbacks. ([1343886](https://issuetracker.unity3d.com/issues/crash-on-mustremovefromobject-when-reimporting-a-prefab))
    
*   Animation: Fixed incorrect behaviours when having negative parameterized time in a motion state. ([1332880](https://issuetracker.unity3d.com/issues/animationevent-is-triggered-multiple-times))
    
*   Asset Bundles: Fixed AssetBundle.Unload now it waits for all asset bundle async operations to complete to avoid a potential crash. ([1150164](https://issuetracker.unity3d.com/issues/gameobject-getcomponentindex-crash-when-entering-play-mode-after-unloading-assetbundle-during-loadresourceasync))
    
*   Asset Pipeline: Fixed an issue when renaming an asset in the Project Browser can cause the selection highlight to disappear. ([1351301](https://issuetracker.unity3d.com/issues/renaming-the-material-removes-the-selection-cursor-and-makes-the-selection-invalid))
    
*   Asset Pipeline: Fixed an issue with artifact dependency now that it is correctly applied. ([1318602](https://issuetracker.unity3d.com/issues/artifact-dependency-not-setup-when-used-with-lazyloadreference))
    
*   Asset Pipeline: Fixed the reset of default values of asset objects and they are now correctly reset before being reloaded if the fields are removed. (1337405)
    
*   Code Editor: Fixed duplicated Roslyn Analyzer entries when regenerating project files with Visual Studio. ([1368809](https://issuetracker.unity3d.com/issues/repeated-roslyn-analyzer-entries-in-csproj-files-when-regenerating-project-files-with-visual-studio))
    
*   DX12: Fixed crashes and flickering when using mesh particles. (1357667)
    
*   Editor: Fixed access token refresh so that the user no longer needs to close and reopen the editor after the token expires. ([1376042](https://issuetracker.unity3d.com/issues/accesstoken-expiring-and-not-being-refreshed))
    
*   Editor: Fixed an issue that breaks the console when selecting a console message. (1369098)
    
*   GI: Fixed crash when closing editor while generating lighting. ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   GI: Fixed the sky ambient probe and skybox reflection probe when reloading a scene in playmode. ([1331427](https://issuetracker.unity3d.com/issues/the-scenes-lighting-settings-are-not-updated-and-saved-when-auto-generate-option-is-disabled))
    
*   Graphics: Fixed a player error and a memory leak when player window is hidden. ([1361670](https://issuetracker.unity3d.com/issues/player-launched-with-hidewindow-flag-throws-errors-in-the-player-dot-log))
    
*   Graphics: Fixed a rare crash in shadow rendering. ([1350950](https://issuetracker.unity3d.com/issues/crash-on-keywords-keywordremap-remap-related-to-keyword-remapping))
    
*   Graphics: Fixed a rendering issue so that Game and Scene View no longer renders artifacts on Apple M1. ([1368374](https://issuetracker.unity3d.com/issues/game-view-glitches-with-apple-silicon-editor))
    
*   Graphics: Fixed an issue on Metal that depth clearing is enforced now when "Don't care" load action is used. ([1330613](https://issuetracker.unity3d.com/issues/ios-ui-elements-are-invisible-on-ios-devices-when-using-additionaluirenderer))
    
*   Graphics: Fixed Game View in playmode and it uses VSync now when enabled. (1371550)
    
*   Graphics: Fixed high memory usage when running Unity in batch mode and importing a high number of assets. (1337474)
    
*   Graphics: Fixed read/write access on NativeArray and now it is correct after an AsyncGPUReadback request is fulfilled. ([1295472](https://issuetracker.unity3d.com/issues/asyncgpureadback-dot-requestintonativearray-causes-invalidoperationexception-on-nativearray))
    
*   Graphics: Removed redundant ApplyShader calls while the VFX system is sleeping. ([1346028](https://issuetracker.unity3d.com/issues/vfx-applyshader-is-called-in-play-mode-when-initial-event-name-is-empty-in-visual-effect-asset))
    
*   Mono: Fixed a rare hang that occurs when opening the editor during asset import. (1341730)
    
*   Package Manager: Fixed the package manager toolbar display and now it is active during refresh operations. (1377475)
    
*   Package Manager: Implement asset's Re-Download button to fix issue when using multiple Unity versions and have one asset version cached. ([1371056](https://issuetracker.unity3d.com/issues/cant-download-specific-unitypackage-when-theres-already-one-cached))
    
*   Particles: Fixed an issue that causes particle face-culling when rendering into Cubemaps. ([1340494](https://issuetracker.unity3d.com/issues/particles-are-not-visible-in-the-cube-render-texture-when-using-camera-dot-rendertocubemap))
    
*   Particles: Fixed an issue that metal calling computes buffer function from an incorrect thread.
    
*   Particles: Fixed the Shower puddle particle effects in Shinai project so that it works properly now. (1354906)
    
*   Physics: Improved stability of Rigidbody2D XY constraints when X or Y constraint are used independent of each other. ([1373134](https://issuetracker.unity3d.com/issues/unexpected-behaviour-from-2d-physics-when-y-constraint-is-locked))
    
*   Prefabs: Fixed an issue where Recovery GameObject is created when opening scene with missing Prefab as a child of other GameObject. ([1299744](https://issuetracker.unity3d.com/issues/recovery-gameobject-is-created-when-opening-scene-with-missing-prefab))
    
*   Shaders: Fixed building so it is cancelled properly now when Exceptions in IPreprocessShaders are present. (1357383)
    
*   Shaders: Fixed the "Compile and show code" button so now writing files with size of over 2GB no longer fails. ([1357761](https://issuetracker.unity3d.com/issues/preprocessed-lit-dot-shader-file-stops-mid-line-when-file-size-is-near-or-more-than-2gb))
    
*   Shaders: Fixed uintBitsToFloat not doing a conversion from bool argument to uint. ([1334240](https://issuetracker.unity3d.com/issues/shaders-fail-compilation-on-vulkan-slash-gl-when-material-override-is-set-to-albedo))
    
*   Terrain: Fixed a clearing issue and now Neighbors set with Terrain.SetNeighbors are properly kept. ([1241302](https://issuetracker.unity3d.com/issues/terrain-normals-produce-artifacts-when-connecting-neighboring-terrain-using-terrain-dot-setneighbors))
    
*   UI: Fixed an issue with runtime only Unity Events and now they are initialize properly upon entering playmode with the FastEnterPlay mode enabled. ([1206410](https://issuetracker.unity3d.com/issues/onvaluechanged-callback-is-not-executed-in-play-mode-when-domain-reload-is-disabled))
    
*   Universal Windows Platform: Fixed build time scaling non-linearly based on the number of build output files. ([1374725](https://issuetracker.unity3d.com/issues/project-takes-forever-to-build-to-uwp))
    
*   Version Control: Added the missing Plastic SCM menu from the Project view context menu.
    
*   Version Control: Added the missing Plastic SCM window option when the user is not signed in on Unity Hub.
    
*   Version Control: Fixed inverted text for the force checkout option.
    
*   Version Control: Fixed the checking comment so that typing capital letter O no longer opens the selected item.
    
*   Version Control: Fixed the loading indicator so now it is centered on the Plastic SCM installation window.
    
*   Version Control: Fixed the Plastic SCM installation so now it no longer signs out the user.
    
*   Version Control: Removed the extra refresh button on Gluon's Incoming Changes tab.
    
*   Version Control: Removed the meta file warning message for the deleted Beta folder.
    
*   XR: Fixed an issue where all cameras stop rendering when VR headset is off.

### Known Issues in 2020.3.22f1

*   Android: 'Not enough storage space to install required resources' error when building App Bundle with Split Application Binary ([1372558](https://issuetracker.unity3d.com/issues/android-not-enough-storage-space-to-install-required-resources-error-when-building-app-bundle-with-split-application-binary))
    
*   Android: Errors are thrown and the app is not launched when Building And Running App Bundle on Android 4.x ([1355198](https://issuetracker.unity3d.com/issues/android-errors-are-thrown-and-the-app-is-not-launched-when-building-and-running-app-bundle-on-android-4-dot-x))
    
*   Android: Sometimes text is not rendered when using OpengLES3 on a Xiaomi Redmi9A device. ([1347186](https://issuetracker.unity3d.com/issues/android-the-text-is-missing-on-a-xiaomi-redmi9a-device))
    
*   Asset Bundles: Building process of the AssetBundles is slow when there is a huge filecount. ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Asset Bundles: GameObject::GetComponentIndex crash when entering Play mode after unloading AssetBundle during LoadResourceAsync ([1150164](https://issuetracker.unity3d.com/issues/gameobject-getcomponentindex-crash-when-entering-play-mode-after-unloading-assetbundle-during-loadresourceasync))
    
*   GI: If a user is experience lighting coruption they be may required to reimport due to a fix to which correctly fixes a Uv unwrapping issue (1330830).
    
*   Global Illumination: Scene is brighter in Standalone player if it was open in the Editor at build time ([1375015](https://issuetracker.unity3d.com/issues/scene-is-brighter-in-standalone-player-if-it-was-open-in-the-editor-at-build-time))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Editor crashes when right clicking in Scene view while using Ubuntu 16.04 ([1373428](https://issuetracker.unity3d.com/issues/linux-linux-editor-crashes-when-right-clicking-in-scene-view))
    
*   Linux: Linux Editor crashes at "\_\_assert\_fail\_base.cold" when opening a project ([1375312](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-assert-fail-base-dot-cold-when-opening-a-project))
    
*   Metal: Game and Scene View renders artifacts when using the Editor on M1 ([1368374](https://issuetracker.unity3d.com/issues/game-view-glitches-with-apple-silicon-editor))
    
*   Mono: NullReferenceException causes freeze when thrown in the Player ([1364311](https://issuetracker.unity3d.com/issues/nullreferenceexception-causes-freeze-when-thrown-in-the-built-project))
    
*   Scene Management: Instantiated FBX through code throws error after leaving Play Mode ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Shader System: Shaders are ignored when executing Build Asset Bundles method from console with -nographics argument ([1369645](https://issuetracker.unity3d.com/issues/shaders-are-ignored-when-executing-build-asset-bundles-method-from-console-with-nographics-argument))
    
*   Templates: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   uGUI: Poor performance when loading or unloading a large Scene ([1375646](https://issuetracker.unity3d.com/issues/poor-performance-when-loading-or-unloading-a-large-scene-1))
    
*   Window Management: Broken layout stops panels located in the top left corner of the Editor from rendering in the Karting Microgame project ([1367783](https://issuetracker.unity3d.com/issues/broken-layout-stops-panels-located-in-the-top-left-corner-of-the-editor-from-rendering-in-the-karting-microgame-project))
    
*   XR SDK: Severe flickering in Unity 2020.3.21f1 with OpenXR on HL2 ([1376203](https://issuetracker.unity3d.com/issues/severe-flickering-in-unity-2020-dot-3-21f1-with-openxr-on-hl2))
    

### 2020.3.22f1 Release Notes

#### Improvements

*   Graphics: Update SRP Packages and templates to 10.7.0
    
*   Package: Update the Addressables package to version 1.18.19. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.addressables@1.18/changelog/CHANGELOG.html
    
*   Package Manager: Improved performance of accessing HiddenPackagesCount in PackageManagerUtilityInternal. ([1358820](https://issuetracker.unity3d.com/issues/performance-spikes-caused-by-projectbrowser-dot-ongui-when-searching-in-the-project-window))
    
*   Scripting: Add GameObject link to Warning message: "SendMessage cannot be called during Awake, CheckConsistency, or OnValidate.".
    

#### API Changes

*   XR: Added: Support for late latched previous view matrix for URP motion vectors

#### Fixes

*   2D: Fixed artifacts on images issue when flatten.
    
*   2D: Fixed errors in the Sprite Skin section of documentation. (1366617)
    
*   2D: Fixed exception "PsdInvalidException: Unrecognized layer section type" when importing certain files.
    
*   Android: Fixed an issue related to using a touchpad with Unity UI scroll rects. Touchpad scrolling is much more sensitive now on Android and Chrome OS. ([1364582](https://issuetracker.unity3d.com/issues/chrome-os-touchpad-scrolling-does-not-work-well-with-unity-ui-scroll-rects))
    
*   Android: Fixed an issue where android:exported atribute was not set to true for Uniy library activity when target API level is 31 or higher. ([1356676](https://issuetracker.unity3d.com/issues/install-parse-failed-manifest-malformed-errors-are-thrown-when-trying-to-run-an-android-application-with-target-api-level-31))
    
*   Android: Fixed an issue where Display.systemWidth, Display.systemHeight and Screen.resolutions\[\] is not updated when folding/unfolding a Galaxy Fold device. ([1345508](https://issuetracker.unity3d.com/issues/android-display-dot-systemwidth-slash-height-value-isnt-updated-when-the-phone-is-folded-slash-unfolded))
    
*   Android: Workaround a problem where using logcat would leak pipes on OSX. The underlying problem seems to be with C# Process class, where if you redirect streams and dispose process, the pipes would remain opened. This will be investigated separately ([1303618](https://issuetracker.unity3d.com/issues/android-adb-functionality-leaks-a-pipe-causes-too-many-open-files-error))
    
*   Animation: Fixed an issue where an animation curve editor swapped unintentionally when editing curves in two different inspectors. ([1308938](https://issuetracker.unity3d.com/issues/animationcurves-start-to-change-in-the-edit-window-without-selecting-any-options-when-editing-curves-in-two-different-inspectors))
    
*   Asset Bundles: Fixed a crash when reloading an AssetBundle after recompiling scripts in playmode. ([1333402](https://issuetracker.unity3d.com/issues/crash-on-unloadassetbundle-when-exiting-play-mode-after-recompiling-scripts))
    
*   Editor: Custom editors that live in a Unity package will now be used only is a user defined custom editor is not found. ([1300193](https://issuetracker.unity3d.com/issues/unityengine-dot-ui-dot-image-component-editor-cannot-be-overriden-by-custom-editor))
    
*   Editor: Fixed a search engine initialization issue if preferences were pointing to an invalid search engine. ([1360676](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-typing-in-the-hierarchy-window-search-bar))
    
*   Editor: Fixed an issue launching a Linux standalone player whose folder was in $PATH. ([1339398](https://issuetracker.unity3d.com/issues/linux-build-executable-fails-to-start-when-being-run-through-an-environment-variable))
    
*   Editor: Fixed an issue where Inspector AnimationCurve field tried to show both the context menu and the curve editor at the same time when right-clicked . ([1312594](https://issuetracker.unity3d.com/issues/the-copy-slash-paste-menu-gets-opened-on-top-of-the-curve-window-when-right-clicking-on-the-animationcurve-field-in-the-inspector))
    
*   Editor: Fixed an issue where the SerializedProperty.tooltip would not contain the Tooltip attribute values when available. ([1359356](https://issuetracker.unity3d.com/issues/tooltip-is-not-shown-in-the-inspector-when-a-field-is-generated-with-guicontent))
    
*   Editor: Fixed an issue where the windows editor got into a "script assemblies are locked" state after a modal dialog from a C# script was invoked. ([1367358](https://issuetracker.unity3d.com/issues/windows-asemblies-get-locked-when-trying-to-recompile-after-opening-and-closing-openfolderpanel-window))
    
*   Editor: Fixed an issue with Multiple "Failed to insert item" warnings being logged when the amount of inserted items exceeds 1000. ([1343433](https://issuetracker.unity3d.com/issues/multiple-failed-to-insert-item-warnings-logged-when-amount-of-inserted-items-exceeds-1000))
    
*   GI: Fixed a crash when generating lighting which calls print function with incorrect parameters. ([1368383](https://issuetracker.unity3d.com/issues/crash-when-generating-lightning))
    
*   GI: Prevent tetrahedralization errors by removing duplicate data from additive probesets. If anything is left, append the rest. ([1263524](https://issuetracker.unity3d.com/issues/additive-loading-of-overlapping-sets-of-light-probes-cause-artifacting-on-objects-in-a-scene))
    
*   Graphics: Fixed a missing object issue when highly static batched scene + SRP Batcher. ([1294742](https://issuetracker.unity3d.com/issues/shadows-start-flickering-when-using-srp-batcher))
    
*   Graphics: Fixed an issue in SRPs where models appeared white in the preview window. ([1297670](https://issuetracker.unity3d.com/issues/hdrp-model-preview-in-inspector-loses-coloring))
    
*   Graphics: Fixed an issue were TextureIDs could leak upon recreating RenderTextures with explicit stencil views. (1365351)
    
*   Graphics: Fixed an issue where changing from fullscreen to windowed mode caused a black screen on Linux when using OpenGL. ([1314460](https://issuetracker.unity3d.com/issues/black-screen-after-switching-from-fullscreen-to-windowed-on-a-linux-build))
    
*   Graphics: Fixed inconsistent behavior of Async Readbacks in the scene view. (1369329)
    
*   Graphics: Fixed incorrect texture settings for externally created textures. ([1358700](https://issuetracker.unity3d.com/issues/texture-filter-mode-set-on-external-native-texture-is-ignored))
    
*   IL2CPP: Fixed an issue where the profile.json file output was being copied out by IL2CPP into the final application package for iOS. ([1357923](https://issuetracker.unity3d.com/issues/ios-xcode-builds-contain-a-reference-to-profile-dot-json))
    
*   IL2CPP: Fixed incorrect metadata section size checks. (1370667)
    
*   Input System: Fixed incorrect Windows input event timestamps
    
*   iOS: Fixed an issue that Stopped the dark mode native mobile input's background from going transparent when it was empty. ([1367091](https://issuetracker.unity3d.com/issues/ios-multi-line-mobile-input-fields-show-transparent-background-when-dark-mode-is-enabled-and-no-text-is-in-the-field))
    
*   Particles: Fixed a crash when trying to access fields in an uninitialized external forces module. ([1354044](https://issuetracker.unity3d.com/issues/editor-crashes-when-inspecting-serialized-field-particlesystem-variable-in-visual-studio-code-debugger-that-is-not-assigned))
    
*   Physics: Fixed an issue where the Articulation Drive did not affect the joint in Articulation Body when the collider volume was very small. ([1330968](https://issuetracker.unity3d.com/issues/articulation-body-doesnt-work-when-it-is-the-last-one-in-the-chain-and-when-collider-volume-is-small))
    
*   Profiler: Fixed Profiler thread drop-down getting locked when it is left on a transient thread ([1369890](https://issuetracker.unity3d.com/issues/profiler-thread-drop-down-gets-locked-when-it-is-left-on-a-transient-thread))
    
*   Profiler: Fixed timeline view's display of surrounding context frames when the recorded frame count exceeds the amount specified in Preferences/Analysis/Profiler/Frame Count. ([1367470](https://issuetracker.unity3d.com/issues/timeline-view-looses-context-frames-when-frames-go-out-of-frame-count-bounds))
    
*   Scripting: Fixed errors appearing in console when using UI Toolkit package and opening Profiler (Standalone Process). ([1346850](https://issuetracker.unity3d.com/issues/opening-the-profiler-standalone-process-causes-multiple-errors-when-the-project-has-the-ui-toolkit-package-installed))
    
*   Scripting: Fixed the exceptions thrown from custom attributes' .ctor. ([1321144](https://issuetracker.unity3d.com/issues/attribute-throwing-exception-used-together-with-requirecomponent-attribute-will-crash-unity))
    
*   Timeline: Fixed an issue where audio tracks did not respect audio listener pause state. ([1313186](https://issuetracker.unity3d.com/issues/audio-in-timeline-is-not-paused-when-the-audiolistener-dot-pause-is-set-to-true))
    
*   UI: Fixed an invalid memory access issue. ([1346442](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-and-serializing-data-after-modifying-script))
    
*   Video: Fixed an importing unsupported video frame size crash in the Editor. ([1340340](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-stepallstreams-when-reimporting-a-m4v-file))
    
*   WebGL: Fixed an issue where keyboard up events would be missed if WebGLInput.captureAllKeyboardInput was set to false while a key was being held down. ([1195047](https://issuetracker.unity3d.com/issues/input-system-key-input-get-stuck-on-pressed-state-when-captureallkeyboardinput-is-set-on-true-in-webgl))
    
*   XR: Fixed an issue where depth/stencil discards were not working on Quest GLES. (1350657)
    
*   XR: Fixed single-pass stereo state after shadow map rendering issue. ([1335518](https://issuetracker.unity3d.com/issues/xr-sdk-single-pass-stereo-instanced-rendering-breaks-when-rendering-into-the-shadow-map-of-a-spotlight-source))

### Known Issues in 2020.3.21f1

*   Asset Bundles: Building process of the AssetBundles is slow when the file count is huge ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Profiling: Profiler's timeline view loses context frames when frames go out of Frame Count bounds ([1367470](https://issuetracker.unity3d.com/issues/timeline-view-looses-context-frames-when-frames-go-out-of-frame-count-bounds))
    
*   Scene Management: Instantiated FBX through code throws error after leaving Play Mode ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Shader System: Shaders are ignored when executing Build Asset Bundles method from console with -nographics argument ([1369645](https://issuetracker.unity3d.com/issues/shaders-are-ignored-when-executing-build-asset-bundles-method-from-console-with-nographics-argument))
    
*   Templates: Crash when quickly duplicating prefab with Behaviour Brick attached and undoing duplicate in LEGO Microgame ([1362660](https://issuetracker.unity3d.com/issues/i-was-ctrl-plus-z-lego-microgame-blocks))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   uGUI: Poor performance when loading or unloading a large Scene ([1360901](https://issuetracker.unity3d.com/issues/poor-performance-when-loading-or-unloading-a-large-scene))
    
*   Video: Crash on WindowsVideoMedia::StepAllStreams when reimporting a .m4v file ([1340340](https://issuetracker.unity3d.com/issues/crash-on-windowsvideomedia-stepallstreams-when-reimporting-a-m4v-file))
    
*   Window Management: Broken layout stops panels located in the top left corner of the Editor from rendering in the Karting Microgame project ([1367783](https://issuetracker.unity3d.com/issues/broken-layout-stops-panels-located-in-the-top-left-corner-of-the-editor-from-rendering-in-the-karting-microgame-project))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    

### 2020.3.21f1 Release Notes

#### Features

*   Version Control: Added light and dark mode versions of avatar icon.
    
*   Version Control: Added notification status icons.
    
*   Version Control: Workspace migration from Collab to Plastic which can be done with or without Plastic installed.
    

#### Improvements

*   Graphics: Warnings for non-native compressed formats with decompressor support are now muted in the editor. (1329157)
    
*   Mono: Avoid padding classes/structs with an explicit size.
    
*   Package: com.unity.purchasing updated to 4.0.3. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.purchasing@4.0/changelog/CHANGELOG.html
    
*   Package: Update Addressables to 1.18.16. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.addressables@1.18/changelog/CHANGELOG.html.
    
*   Package: Update ScriptableBuildPipeline to 1.19.2. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.scriptablebuildpipeline@1.19/changelog/CHANGELOG.html.
    
*   Scripting: Add GameObject link to Warning message: "SendMessage cannot be called during Awake, CheckConsistency, or OnValidate.".
    

#### Changes

*   Version Control: Improved usage analytics around Editor and Plugin version.
    
*   Version Control: Workspace Migration Adjustments.
    

#### Fixes

*   2D: Fixed an issue where an error would show up when destroying a Sprite Skin component while deep profiling. (1364910)
    
*   2D: Fixed an issue where colliders do not extend to the end of the sprite texture when Sprite Borders are enabled. ([1348701](https://issuetracker.unity3d.com/issues/platforms-colliders-do-not-extend-to-the-end-of-the-sprite-texture))
    
*   2D: Fixed an issue where copying mesh and bone data from a .psb containing a single sprite would throw an exception. ([1351543](https://issuetracker.unity3d.com/issues/2d-animation-indexoutofrangeexception-error-is-thrown-when-pasting-bone-data))
    
*   2D: Fixed an issue where Edge and Polygon colliders had missing edges on certain open-ended shapes. (1362440)
    
*   2D: Fixed an issue where enabling Fill Tessellation and setting profile's fill offset to positive caused errors. (1363215)
    
*   2D: Fixed an issue where IK Solvers would not be updated when previewing an animation clip. ([1354389](https://issuetracker.unity3d.com/issues/skeleton-animation-with-iks-applied-does-not-return-to-its-original-state-after-disabling-preview-in-animation-view))
    
*   2D: Fixed an issue where Sprite outline in the Skinning Editor was not rendered based on Sprite's geometry. (1335586)
    
*   2D: Fixed render texture size error in the Skinning Editor. (1357552)
    
*   2D: Improved the steps on how to install the optional performance boost, in the documentation.
    
*   Android: Fixed an issue where AMD drivers on Chrome OS have a faulty EGL\_KHR\_gl\_colorspace implementation, sRGB will be disabled in that case. (1359181)
    
*   Android: Fixed an issue where Resource.Load woult not works when running universal.apk created from AAB which were built with Split Application Binary option enabled. Note: In universal.apk, Bundletool includes only install-time delivered asset packs, so resource loading can still fail if Unity creates fast-follow delivered core data asset pack. (1363907)
    
*   Android: When Input.compensateSensors is set to true, give 45 degree slack for overtilt before changing compass heading. ([1186040](https://issuetracker.unity3d.com/issues/android-input-dot-compensatesensors-equals-true-does-not-work-in-android-portrait-view-when-tilting-phone-up))
    
*   Animation: Fixed an issue where an assert was triggered upon rebuilding an animation legacy component ([1330001](https://issuetracker.unity3d.com/issues/assertion-failed-on-expression-m-curves-when-playing-animation-after-reenabling-object))
    
*   Asset Import: Fixed Reset not working for the 'Bake Axis conversion' setting in ModelImporter. ([1228920](https://issuetracker.unity3d.com/issues/modelimport-reset-functionality-is-not-working-for-bake-axis-conversion-in-import-settings))
    
*   Asset Pipeline: Fixed an issue where the Editor could crash while entering play mode with an AssetImporter displayed in the Inspector window. ([1353925](https://issuetracker.unity3d.com/issues/editor-crashes-on-unityeditor-dot-unsupported-isdestroyscriptableobject-when-applying-changes-to-a-custom-asset))
    
*   Asset Pipeline: Fixed out-of-sync collection bug when multiple inspectors were opened (1353678)
    
*   Audio: Fixed an issue where exposing multiple send levels in the audio mixer were not working correctly. Previously created mixers with exposed send levels will cause a warning to be logged on editor startup and the send levels will have to be re-exposed. ([1285638](https://issuetracker.unity3d.com/issues/audio-mixer-unable-to-expose-other-send-level-parameters-when-one-is-already-exposed))
    
*   Audio: Fixed audio source filters resetting on unrelated parameter changes such as audio source volume or pitch and not responding to component reordering. (1361636)
    
*   Audio: Increased stack size of audio streaming and async threads to avoid overflows when using managed read callbacks. ([1352803](https://issuetracker.unity3d.com/issues/stack-overflow-exceptions-is-thrown-when-using-system-dot-io-dot-monoio-dot-seek-and-assetbundle-dot-loadfromstreamasync))
    
*   Documentation: Fixed incorrect measurement units for ArticulationDrive.forceLimit. (1369825)
    
*   Editor: Fixed a crash while picking a color. ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Editor: Fixed a disappearing ReorderableList elements isseu when reordering. ([1353883](https://issuetracker.unity3d.com/issues/elements-of-large-2d-slash-3d-arrays-disappear-when-reordering))
    
*   Editor: Fixed a null reference exception when opening a popup window in some cases (when a previous popup window got somehow saved into a window layout). ([1295445](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-in-the-console-when-trying-to-change-the-aspect-ratio-in-the-game-window))
    
*   Editor: Fixed an issue where Avatar Stage editing closed on clicking anywhere in the Scene view or Hierarchy when using two Inspector windows. ([1330120](https://issuetracker.unity3d.com/issues/avatar-mapping-tab-closes-when-trying-to-select-anything))
    
*   Editor: Fixed an issue where Reorderable list null item were not displayed correctly. ([1339759](https://issuetracker.unity3d.com/issues/controls-in-the-ui-debugger-overlap-when-inspecting-an-element-that-has-a-label-with-null-value))
    
*   Editor: Fixed an issue where Time.unscaledTime and Time.fixedUnscaledTime do not update when stepping through frames ([1294730](https://issuetracker.unity3d.com/issues/time-dot-unscaledtime-and-time-dot-fixedunscaledtime-do-not-update-when-stepping-through-frames), [1360931](https://issuetracker.unity3d.com/issues/frame-stepping-not-working-on-addressables-operations))
    
*   Editor: If Adb is not able to make the file editable, we make it writable using OS function ([1353760](https://issuetracker.unity3d.com/issues/theres-no-warning-slash-error-for-projectversion-dot-txt-not-being-updated-due-to-lack-of-write-permissions-when-upgrading-the-project))
    
*   Editor: There is now a prompt to save changes if the layout is changed. ([1318376](https://issuetracker.unity3d.com/issues/changing-layout-or-maximizing-closes-windows-with-changes-but-does-not-prompt-save-dialog))
    
*   GI: Fixed a crash occurring while sculpting terrain and baking. ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   GI: Fixed an issue where Enlighten Post Update would take up CPU time in the Editor when it was not the active lightmapping backend ([1248311](https://issuetracker.unity3d.com/issues/enlightenruntimemanager-dot-postupdate-takes-time-when-realtime-gi-is-disabled))
    
*   GI: Fixed crash on baking GI, moving reflection probe, baking only reflection probe. ([1310112](https://issuetracker.unity3d.com/issues/crash-on-baking-gi-moving-reflection-probe-baking-only-reflection-probe))
    
*   Graphics: Descriptor sets were not validated properly under certain circumstances for Vulkan. (1300203)
    
*   Graphics: Fix sporadic crash when closing BuildSettings (and maybe other) windows when using Editor with Vulkan ([1362844](https://issuetracker.unity3d.com/issues/vulkan-editor-crashes-vk-optimusgetinstanceprocaddr-after-closing-build-settings-window))
    
*   Graphics: Fixed a crash when loading really large (think more than 2GB size) meshes. ([1319594](https://issuetracker.unity3d.com/issues/untitled-7))
    
*   Graphics: Fixed a RenderToCubemap offsets shadows isseu when the material on the mesh has GPU Instancing was enabled by adding support for STEREO\_CUBEMAP\_RENDER\_ON for instanced .rendering. ([1086548](https://issuetracker.unity3d.com/issues/rendertocubemap-offsets-shadows-when-the-material-on-the-mesh-has-gpu-instancing-enabled))
    
*   Graphics: Fixed an issue where frames were being unnecessarily dropped before presenting on Metal OSX when using CVDisplayLink; this is now fixed. ([1363963](https://issuetracker.unity3d.com/issues/stuttering-movement-when-changing-gameobject-transforms-position))
    
*   Graphics: Fixed an unwrap crash when automatic margin calculation results in very small margin. ([1330830](https://issuetracker.unity3d.com/issues/unity-lightmap-uv-generation-fails-with-uv-unwrap-failed-with-no-error-messages-error-when-reimporting-asset))
    
*   Graphics: Fixed Meshes having incorrect skin weights in builds due to faulty normalization after limiting the number of weights per vertex. (1319068)
    
*   Graphics: Fixed the Mac Standalone Player memory leak that came with the change to presenting with CVDisplayLink. ([1365570](https://issuetracker.unity3d.com/issues/port-count-never-stops-increasing-in-standalone-build-on-mac-standalone))
    
*   IL2CPP: Fix conversion issues on methods with ref readonly return values. (1367462)
    
*   IL2CPP: Fixed build issue with Linux player on Windows where builds would fail when the logged in user has a space in their username. ([1336012](https://issuetracker.unity3d.com/issues/linux-il2cpp-building-for-linux-with-il2cpp-from-windows-fails-if-your-system-username-contains-a-space))
    
*   IL2CPP: Fixed conversion error that can occur with generic types that have a static constructor. (1362583)
    
*   IL2CPP: Hash parameter info and generic arguments to avoid long method names that lead to compiler errors. ([1362768](https://issuetracker.unity3d.com/issues/compiler-limit-token-overflowed-internal-buffer-error-when-a-il2cpp-build-includes-a-method-with-many-parameters))
    
*   IL2CPP: Prevent a possible crash in the GC code when the mark stack overflows while script debugging is enabled if many threads are created. ([1361799](https://issuetracker.unity3d.com/issues/build-crashes-with-unexpected-mark-stack-overflow-error-when-building-with-il2cpp))
    
*   iOS: Fixed incorrect "Plugins colliding with each other" errors when using certain framework combinations. ([1287862](https://issuetracker.unity3d.com/issues/ios-plugin-is-used-from-several-locations-error-when-building-a-project-with-included-xcframeworks))
    
*   macOS: Fixed an inverted Y position of mouse cursor issue wgeb using New Input's Warp mouse. ([1311064](https://issuetracker.unity3d.com/issues/system-cursor-input-is-inverted-on-vertical-axis-when-using-a-gamepad))
    
*   macOS: Fixed Xbox wireless gamepad triggers and DPAD not working in Old Input. (1342338)
    
*   Particles: Ensure smooth size updates when doing slow-mo scrubbing of the particle playback time. ([1224857](https://issuetracker.unity3d.com/issues/mesh-particle-system-update-frequency-is-too-low-and-causes-visible-stutters-when-adjusting-with-playback-time-slider))
    
*   Particles: Fixed an issue where there was stuttering slow-motion preview when Custom Data was used. ([1365360](https://issuetracker.unity3d.com/issues/particle-system-is-stuttering-in-the-editor-when-using-custom-data-with-low-playback-speed))
    
*   Particles: Fixed Texture Alpha clipping in the Shape module. ([1349714](https://issuetracker.unity3d.com/issues/particle-shape-clip-threshold-does-not-affect-emitted-particle-count))
    
*   Prefabs: Fixed Prefab sorting issue that re-arranged order of prefabs due to AddedComponents not being handled properly ([1252436](https://issuetracker.unity3d.com/issues/assetdatabase-dot-forcereserializeassets-modifies-data-when-used-on-a-prefab-with-a-nested-fbx-model))
    
*   Profiler: Fixed Profiler.GetTotalAllocatedMemoryLong reporting increasing values while loading and unloading the same scene. ([1364643](https://issuetracker.unity3d.com/issues/profiler-dot-gettotalallocatedmemorylong-increases-when-scene-is-loaded-and-unloaded))
    
*   Scripting: Fixed an issue related to player builds failing sometimes or not including the correct precompiled DLLs when those have define constraints.
    
*   Scripting: Fixed Debug.LogFormat(LogType, LogOption, Object, string, params object\[\]) overload to respect logEnabled and filterLogType logger settings. ([1354586](https://issuetracker.unity3d.com/issues/message-gets-logged-in-the-console-when-using-debug-dot-logformat-and-the-logger-dot-logenabled-is-set-to-false))
    
*   Scripting: Fixed GetScriptingDefineSymbols functions to not contain empty string entries in the returned defines array. ([1350561](https://issuetracker.unity3d.com/issues/getscriptingdefinesymbolsforgroup-always-returns-an-array-with-one-empty-string-element))
    
*   Scripting: Fixed player build errors due to ApiUpdater eagerly trying to connect to VCS.
    
*   Serialization: Arrays that contain SerializeReferences are now resized properly with null references.
    
*   Serialization: Fixed a case where reading a corrupted binary file when corruption is within the header could lead to editor freezing. (1357823)
    
*   Services: For some time the validation endpoint has been disabled, and the editor still incorrectly shows that the user must wait for this validation to succeed. leading to a lot of confusion from our users. this change simply removes this panel to avoid further confusion ([1210052](https://issuetracker.unity3d.com/issues/analytics-analytics-window-doesnt-refresh-on-entering-play-mode-in-the-editor))
    
*   uGUI: Missing shader property warnings will no longer be produced when running in batchmode. ([1350059](https://issuetracker.unity3d.com/issues/an-error-is-thrown-when-the-scene-has-ui-mask-and-the-player-is-run-headless))
    
*   Universal Windows Platform: Fixed DevicePortal deployment to handle both .appx and .msix packages ([1269676](https://issuetracker.unity3d.com/issues/deployment-to-hololens-fails-when-deploying-app-through-windows-device-portal))
    
*   Universal Windows Platform: Fixed symbol file packaging failing when using the 'MasterWithLTCG' build configuration. ([1345403](https://issuetracker.unity3d.com/issues/uwp-failed-to-copy-pdb-error-appear-when-building-solution-with-masterwithltcg))
    
*   Version Control: Renamed the CoreServices namespace so it doesn't conflict.  
    Fixed some situations where the history window would be blank.  
    Fixed missing Enterprise login link.  
    Fixed low resolution icons in light theme
    
*   WebGL: Added more detailed information when a page load fails due to misconfiguration in server hosting settings. Note that Firefox does not currently support Brotli compression for local development (https://bugzilla.mozilla.org/show\_bug.cgi?id=1670675) ([1283658](https://issuetracker.unity3d.com/issues/brotli-compressed-build-fails-to-run-in-firefox))
    
*   WebGL: Fixed a crash on Oculus Browser when the EXT\_multisampled\_render\_to\_texture extension is enabled. ([1370782](https://issuetracker.unity3d.com/issues/webgl-webgl-broken-with-oculus-browser-because-of-glgetprocaddress))
    
*   WebGL: Fixed a mouse wheel scrolling issue with the new input system on WebGL. ([1264545](https://issuetracker.unity3d.com/issues/webgl-input-system-scrolling-with-mouse-wheel-is-much-slower-on-webgl-builds-when-using-new-input-system-package))
    
*   Windows: Fixed an issue where Physics simulations and FixedUpdate ran while the splashscreen was being displayed on Windows Standlaone and Universal Windows Platform. ([1362362](https://issuetracker.unity3d.com/issues/gameobject-transform-position-changes-on-the-y-axis-when-running-a-build-of-the-project))
    
*   Windows: Fixed player icon being missing from the title after, if the game was first launched in fullscreen mode and then later changed to windowed mode. ([1361016](https://issuetracker.unity3d.com/issues/player-icon-is-missing-from-the-title-bar-when-the-player-is-started-in-fullscreen-mode))
    
*   Windows: Removed error.log generation for crash uploads in favor of editor.log and dmp files. (1278602)
    
*   XR: Fixed soft particles shaders for XR single-pass. ([1332105](https://issuetracker.unity3d.com/issues/xr-sdk-line-renderer-collides-the-controller-when-single-pass-rendering-mode-is-used))

Install this version with [Unity Hub](//2020.3.20f1/41c4e627c95f).

### Additional downloads

Select the runtime platforms of your choice from the list below (the desktop runtime is included as standard) or, to install the full complement of runtime platforms, use the download assistant installer above.

Component Installers Windows

[Unity Editor (64-bit)](https://download.unity3d.com/download_unity/41c4e627c95f/Windows64EditorInstaller/UnitySetup64.exe)

[Android Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Android-Support-for-Editor-2020.3.20f1.exe)

[AppleTV Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-AppleTV-Support-for-Editor-2020.3.20f1.exe)

[iOS Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-iOS-Support-for-Editor-2020.3.20f1.exe)

[Linux (IL2CPP) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Linux-IL2CPP-Support-for-Editor-2020.3.20f1.exe)

[Linux Mono Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Linux-Mono-Support-for-Editor-2020.3.20f1.exe)

[Lumin Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Lumin-Support-for-Editor-2020.3.20f1.exe)

[macOS Mono Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Mac-Mono-Support-for-Editor-2020.3.20f1.exe)

[Windows Store (.Net) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Universal-Windows-Platform-Support-for-Editor-2020.3.20f1.exe)

[WebGL Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-WebGL-Support-for-Editor-2020.3.20f1.exe)

[Windows (IL2CPP) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/TargetSupportInstaller/UnitySetup-Windows-IL2CPP-Support-for-Editor-2020.3.20f1.exe)

[Documentation](https://download.unity3d.com/download_unity/41c4e627c95f/WindowsDocumentationInstaller/UnityDocumentationSetup.exe)

Component Installers macOS

[Unity Editor (Intel)](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorInstaller/Unity.pkg)

[Android Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Android-Support-for-Editor-2020.3.20f1.pkg)

[AppleTV Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-AppleTV-Support-for-Editor-2020.3.20f1.pkg)

[iOS Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-iOS-Support-for-Editor-2020.3.20f1.pkg)

[Linux (IL2CPP) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Linux-IL2CPP-Support-for-Editor-2020.3.20f1.pkg)

[Linux Mono Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Linux-Mono-Support-for-Editor-2020.3.20f1.pkg)

[Lumin Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Lumin-Support-for-Editor-2020.3.20f1.pkg)

[macOS (IL2CPP) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Mac-IL2CPP-Support-for-Editor-2020.3.20f1.pkg)

[WebGL Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2020.3.20f1.pkg)

[Windows (Mono) Target Support](https://download.unity3d.com/download_unity/41c4e627c95f/MacEditorTargetInstaller/UnitySetup-Windows-Mono-Support-for-Editor-2020.3.20f1.pkg)

[Documentation](https://download.unity3d.com/download_unity/41c4e627c95f/MacDocumentationInstaller/Documentation.pkg)

Additional Resources

[Unity Android Remote](https://download.unity3d.com/download_unity/41c4e627c95f/UnityRemote-Android.apk)

[Unity Remote Source](https://download.unity3d.com/download_unity/41c4e627c95f/UnityRemoteProject.zip)

[Unity Cache Server](https://download.unity3d.com/download_unity/41c4e627c95f/CacheServer.zip)

[Builtin Shaders](https://download.unity3d.com/download_unity/41c4e627c95f/builtin_shaders.zip)

[Unity iOS Remote](https://download.unity3d.com/download_unity/41c4e627c95f/UnityRemote-iOS.zip)

Translated PDFs

[日本語\_\_2020.3.20\_Release Notes](https://images.response.unity3d.com/Web/Unity/%7Ba3c8fd3b-7e3f-4fae-98ec-f42d16216ba7%7D_%E6%97%A5%E6%9C%AC%E8%AA%9E__2020.3.20_Release_Notes.pdf) (.PDF)

### Known Issues in 2020.3.20f1

*   Asset Bundles: Building process of the AssetBundles is slow when the file count is huge ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Asset Importers: Instantiated FBX through code throws error after leaving Play Mode ([1363573](https://issuetracker.unity3d.com/issues/instantiated-fbx-through-code-throws-error-after-leaving-play-mode))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   IL2CPP: \[Android\] \[IL2CPP\] Old build artifacts are used when ARMv7 and ARM64 build follows a ARM64 only build from different git branch ([1347245](https://issuetracker.unity3d.com/issues/android-il2cpp-old-build-artifacts-are-used-when-armv7-and-arm64-build-follows-a-arm64-only-build-from-different-git-branch))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   MacOS: Port count never stops increasing in Standalone build on Mac Standalone ([1365570](https://issuetracker.unity3d.com/issues/port-count-never-stops-increasing-in-standalone-build-on-mac-standalone))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Mono: Crash on mono\_thread\_get\_undeniable\_exception ([1308625](https://issuetracker.unity3d.com/issues/crash-on-mono-thread-get-undeniable-exception))
    
*   Profiling: Profiler.GetTotalAllocatedMemoryLong increases when Scene is loaded and unloaded ([1364643](https://issuetracker.unity3d.com/issues/profiler-dot-gettotalallocatedmemorylong-increases-when-scene-is-loaded-and-unloaded))
    
*   Quality of Life: Crash on GUIView::DoPaint when selecting color with a color picker ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Templates: Crash when quickly duplicating prefab with Behaviour Brick attached and undoing duplicate in LEGO Microgame ([1362660](https://issuetracker.unity3d.com/issues/i-was-ctrl-plus-z-lego-microgame-blocks))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   uGUI: Poor performance when loading or unloading a large Scene ([1360901](https://issuetracker.unity3d.com/issues/poor-performance-when-loading-or-unloading-a-large-scene))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   XR: \[Linux\] Scene View doesn't render when opening new AR or VR Template project or pressing "Show Tutorials" ([1362435](https://issuetracker.unity3d.com/issues/xr-linux-scene-view-doesnt-render-when-opening-new-ar-or-vr-template-project-or-pressing-show-tutorials))
    

### 2020.3.20f1 Release Notes

#### Features

*   Version Control: Added horizontal scroll bar to Changesets list for easier viewing.  
    Added auto-login for SSO credentials handler.  
    Added metrics for changeset tab usage.  
    Added metrics for checkin actions.  
    Added new Undo icon.  
    Added missing API documentation.  
    Added ability to modify assets without checkout.  
    Added ability to allow empty checkin messages.  
    Added empty checking message localization.  
    Added Plastic toolbar button to Unity editor.  
    Added notification icon for incoming changes to Plastic toolbar button.

#### Improvements

*   2D: Cache internal reflection to speed up Sprite editing data access.
    
*   Editor: Now shaders will have SHADER\_API\_(DESKTOP|MOBILE) define set according to the target build platform
    
*   Graphics: Improved error logging for the CopyTexture function.
    

#### Changes

*   Package: Updated Version Control package to 1.11.2. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.collab-proxy@1.11/changelog/CHANGELOG.html
    
*   Package: Updated Windows MR XR SDK package to 4.6.0. Please refer to the package changelog online here:  
    https://docs.unity3d.com/Packages/com.unity.xr.windowsmr@4.6/changelog/CHANGELOG.html
    

#### Fixes

*   2D: Fixed an issue where the Sprite Editor Window was not disabled when readonly assets were selected. ([1364044](https://issuetracker.unity3d.com/issues/2d-sprite-editor-instantiated-default-assets-can-be-edited-in-sprite-editor))
    
*   Android: Allow Android on-screen keyboard dismiss behavior match iOS (1274669)
    
*   Asset Pipeline: Fixed a crash inside Physics Manager when a Default Material was present and we shut down. ([1338910](https://issuetracker.unity3d.com/issues/editor-importing-a-physicsmaterial-crashes-the-editor-inside-physicmaterial-reset))
    
*   Asset Pipeline: Fixed an asset matching inconsistency issue with 'Compress Assets on Import' preference setting. This fix can cause textures to get reimported. (1353343)
    
*   Asset Pipeline: Fixed an issue where ScriptableObjects could be loaded when querying their type using AssetDatabase.GetMainAssetTypeAtPath(). ([1351973](https://issuetracker.unity3d.com/issues/assetdatabase-dot-getmainassettypeatpath-sometimes-loads-objects-when-deriving-their-type-and-leaves-them-loaded))
    
*   Asset Pipeline: Fixed an issue where the main object name did not update correctly when duplicating or copying assets. ([1227555](https://issuetracker.unity3d.com/issues/renamed-or-duplicated-scriptableobject-contains-old-assets-name-till-saveporject-is-pressed))
    
*   Asset Pipeline: Fixed for a crash that would occur if ImportAsset was called with "Assets\\" path. Also fixed an issue where any folder path ending with path separator did not get imported. ([1354411](https://issuetracker.unity3d.com/issues/double-slash-at-the-end-of-the-assets-folder-path-crashes-editor-when-invoked))
    
*   Audio: Fixed a crash on AudioCustomFilter::GetOrCreateDSP when recompiling scripts while in Play Mode. ([1354002](https://issuetracker.unity3d.com/issues/crash-on-audiocustomfilter-getorcreatedsp-when-recompiling-scripts-while-in-play-mode))
    
*   Audio: Fixed an issue where the inspector window did not immediately show the "Wet" slider after selecting "Allow wet mixing" on an effect in the AudioGroup Strip View. (1276039)
    
*   Editor: Ensure RootEditor API behaves as expected and allows to totally highjack the inspector. (1346788)
    
*   Editor: Fixed an issue where Command+Backspace did not delete elements from reorderable arrays. (1329602)
    
*   Editor: Fixed an issue where tooltips were not displayed for the reorderable lists. ([1345236](https://issuetracker.unity3d.com/issues/tooltips-are-not-displayed-in-inspector-when-hovering-over-the-reorderable-array-slash-list-property))
    
*   Editor: Fixed an issue where UI options which were missing in Hierarchy window after exiting safemode. ([1358716](https://issuetracker.unity3d.com/issues/ui-option-is-missing-from-the-hierarchy-context-menu-after-exiting-safe-mode))
    
*   Editor: On Windows, LTS builds of the editor will now each have their own entry in Add/Remove programs ([1267038](https://issuetracker.unity3d.com/issues/final-release-versions-are-not-listed-separately-in-programs-and-features-list-of-applications-in-the-system))
    
*   GI: Fixed a albedo renderer detects shaders are still loading issue. ([1277657](https://issuetracker.unity3d.com/issues/lighting-urp-cyan-tint-baked-into-reflection-probes-in-scene-view))
    
*   Graphics: Fixed a crash when uploading large number of texture assets in DX12. ([1324699](https://issuetracker.unity3d.com/issues/crash-on-tiledtexturemanager-createtexture-when-creating-a-large-amount-of-assets-in-one-batch))
    
*   Graphics: Fixed a race condition deadlock when loading textures synchronously. (1353805)
    
*   Graphics: Updated the embedded (external) TinyExr library to v1.0. (1345230)
    
*   IL2CPP: Correct the behavior of Marshal.Offset so that it properly accounts for the alignment requirements of fields that occur after a struct field. ([1346805](https://issuetracker.unity3d.com/issues/marshal-dot-offsetof-returns-incorrect-offset-when-building-the-project-with-il2cpp-scripting-backend))
    
*   IL2CPP: Fixed an issue that could lead to builds not re-building when input files are passed using --compiler-flags= or --linker-flags= command line switches. This also affected certain use cases such as changing resolution settings in PS4/PS5 builds, which are now fixed and will properly rebuild when these settings are changed. (1343625)
    
*   IL2CPP: Fixed detectable boxing during constrained call on structs. ([1254522](https://issuetracker.unity3d.com/issues/il2cpp-incorrect-results-when-calling-a-method-from-outside-class-in-a-struct))
    
*   IL2CPP: Prevent an IndexOutOfRangeException from occurring for file access to relative paths on PlayStation platforms. (1317819)
    
*   IL2CPP: Prevent an intermittent crash from happening during thread detach when many threads are calling reverse p/invoke wrappers at the same time. ([1358863](https://issuetracker.unity3d.com/issues/ios-crash-in-gc-mark-from-when-using-monopinvokecallbackattribute))
    
*   IMGUI: Fixed an issue when using a Non-ReorderableList, pressing the Delete key on one of the element deletes it from the array. ([1335322](https://issuetracker.unity3d.com/issues/you-cannot-delete-items-from-a-nonreorderable-list-using-the-delete-keyboard-button))
    
*   Input System: Fixed an issue where input events were being lost on Android and optimized input processing performance. ([1337296](https://issuetracker.unity3d.com/issues/doubletap-not-working-some-specific-android-and-ios-devices))
    
*   iOS: Fixed an issue where UaaL did not displays properly if embedded in app with SceneDelegate support. ([1266702](https://issuetracker.unity3d.com/issues/ios13-scene-does-not-load-when-using-unity-as-a-library))
    
*   Linux: Fixed an issue where linux toolchain package was installed while editor was playing. (1344023)
    
*   macOS: Fixed build failing when a .bundle plugin is encountered that does not have an Info.plist file. ([1360646](https://issuetracker.unity3d.com/issues/mac-build-throws-an-error-when-a-native-plugin-bundle-file-does-not-contain-info-dot-plist-file))
    
*   macOS: Fixed build failing when a .bundle plugin is encountered that does not have the executable name specified in its Info.plist file. ([1330017](https://issuetracker.unity3d.com/issues/macos-failed-to-parse-errors-are-thrown-when-building-with-a-macos-plugin-bundle-that-includes-embedded-app-files))
    
*   macOS: Fixed Cursor.lockState registers input movement as if the mouse is moved to the center first before following the actual mouse movement. ([1283506](https://issuetracker.unity3d.com/issues/mac-cursor-dot-lockstate-registers-input-movement-to-center-when-mouse-is-moved))
    
*   macOS: Fixed key display names for non-letter keys and letter keys when using non-English keyboard layouts in the new input system. ([1356230](https://issuetracker.unity3d.com/issues/mac-inputsystem-inputaction-dot-getbindingdisplaystring-does-not-correctly-map-keys-after-changing-system-language))
    
*   Particles: Automatically mark textures as readable, if used by the Particle System Shape module. ([1344356](https://issuetracker.unity3d.com/issues/error-appears-in-the-console-when-using-the-default-particle-systems-textures-as-the-shape-texture))
    
*   Serialization: Keep references to unknown ScriptableObject as "Missing" instead becoming "None" when loading Scene or Prefab. ([1328065](https://issuetracker.unity3d.com/issues/null-references-on-prefab-after-changes-are-made-to-scriptableobject-guid-and-public-script-references))
    
*   Serialization: Reference from Prefab to missing asset becomes valid once asset is added back to project, without reimport. ([1270634](https://issuetracker.unity3d.com/issues/references-on-prefabs-arent-automatically-added-when-the-target-of-the-missing-reference-is-imported))
    
*   Shaders: UsePass with local keywords will now always use correct keywords. ([1329514](https://issuetracker.unity3d.com/issues/shader-with-usepass-is-missing-certain-passes-in-a-player-build))
    
*   UI Toolkit: Fixed a highlighter positioning and draw order issue. ([1174816](https://issuetracker.unity3d.com/issues/linux-editor-highlighter-does-not-work-well))
    
*   UI Toolkit: Fixed a scissor clipping on hidden elements issue. (1340827)
    
*   UI Toolkit: Fixed an issue whene elements hover and focused states were not properly reset when attaching to a new hierarchy. ([1287198](https://issuetracker.unity3d.com/issues/the-hover-state-stays-on-the-button-when-the-button-element-is-cleared-while-in-hover-state-and-loaded-in-later-again))
    
*   UI Toolkit: Fixed the Styles section of the UI Toolkit Samples window. ([1340119](https://issuetracker.unity3d.com/issues/ui-toolkit-samples-window-styles-examples-are-not-showing-focused-or-hover-styles))
    
*   Version Control: Fixed a small textbox on checkin dialog when launched from context menu.
    
*   Version Control: Fixed a workspace NullReferenceException issue.
    
*   Version Control: Fixed an issue when context menu would sometimes disappear.
    
*   Version Control: Fixed an issue where auto login errors were not showing up for users.
    
*   Version Control: Fixed an issue where the notification icon did not show on Plastic window.
    
*   Version Control: Fixed an issue where the Texture2D error would pop up after downloading a project.
    
*   Version Control: Fixed unexpected error message after user switched workspace to a label.
    
*   Video: Increased VideoClipImporter version following a fix that adds missing platform dependencies in this importer.
    
*   WebGL: Fixed an issue where TAB keys were being ignored by UI input fields. (1281765)

### Known Issues in 2020.3.19f1

*   Asset Bundles: Building process of the AssetBundles is slow when the file count is huge ([1358059](https://issuetracker.unity3d.com/issues/building-process-of-the-assetbundles-is-slow-when-the-file-count-is-huge))
    
*   Asset Importers: Editor crashes on UnityEditor.Unsupported:IsDestroyScriptableObject when applying changes to a custom asset ([1353925](https://issuetracker.unity3d.com/issues/editor-crashes-on-unityeditor-dot-unsupported-isdestroyscriptableobject-when-applying-changes-to-a-custom-asset))
    
*   Audio: Crash on AudioCustomFilter::GetOrCreateDSP when recompiling scripts while in Play Mode ([1354002](https://issuetracker.unity3d.com/issues/crash-on-audiocustomfilter-getorcreatedsp-when-recompiling-scripts-while-in-play-mode))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   IL2CPP: \[Android\] \[IL2CPP\] Old build artifacts are used when ARMv7 and ARM64 build follows a ARM64 only build from different git branch ([1347245](https://issuetracker.unity3d.com/issues/android-il2cpp-old-build-artifacts-are-used-when-armv7-and-arm64-build-follows-a-arm64-only-build-from-different-git-branch))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   MacOS: Port count never stops increasing in Standalone build on Mac Standalone ([1365570](https://issuetracker.unity3d.com/issues/port-count-never-stops-increasing-in-standalone-build-on-mac-standalone))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Mono: Crash on mono\_thread\_get\_undeniable\_exception ([1308625](https://issuetracker.unity3d.com/issues/crash-on-mono-thread-get-undeniable-exception))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Profiler.GetTotalAllocatedMemoryLong increases when Scene is loaded and unloaded ([1364643](https://issuetracker.unity3d.com/issues/profiler-dot-gettotalallocatedmemorylong-increases-when-scene-is-loaded-and-unloaded))
    
*   Quality of Life: Crash on GUIView::DoPaint when selecting color with a color picker ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Scene Management: Poor performance when loading or unloading a large Scene ([1360901](https://issuetracker.unity3d.com/issues/poor-performance-when-loading-or-unloading-a-large-scene))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Templates: Crash when quickly duplicating prefab with Behaviour Brick attached and undoing duplicate in LEGO Microgame ([1362660](https://issuetracker.unity3d.com/issues/i-was-ctrl-plus-z-lego-microgame-blocks))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   XR: \[Linux\] Scene View doesn't render when opening new AR or VR Template project or pressing "Show Tutorials" ([1362435](https://issuetracker.unity3d.com/issues/xr-linux-scene-view-doesnt-render-when-opening-new-ar-or-vr-template-project-or-pressing-show-tutorials))
    

### 2020.3.19f1 Release Notes

#### Improvements

*   GI: Reduced ringing when using Open Image denoiser.
    
*   Graphics: Reduced main thread hitching caused by Shader loading
    
*   Profiler: Released com.unity.performance.profile-analyzer@1.1.0 with a series of fixed and improvements. More details at https://docs.unity3d.com/Packages/com.unity.performance.profile-analyzer@1.1/manual/whats-new.html
    

#### Changes

*   Package Manager: Change error and warning box to look like the info box.

#### Fixes

*   2D: Fixed a potential crash caused by race condition when loading SpriteRenderer from multiple threads. (1351843)
    
*   2D: \[Android\]\[SpriteAtlas\] Fixed an issue where TotalSpriteSurfaceArea did not get reserialized when switching build platforms. ([1273235](https://issuetracker.unity3d.com/issues/android-spriteatlas-totalspritesurfacearea-get-reserialized-when-switching-build-platforms))
    
*   Asset Bundles: Fixed Asset Bundle determinism. (1346263)
    
*   Asset Import: Fixed an issue where textures could not be extracted when the FBX file was located in a writeable package. ([1329339](https://issuetracker.unity3d.com/issues/textures-are-not-extracted-with-extract-textures-button-when-trying-to-extract-in-the-packages-folder))
    
*   Asset Pipeline: Fixed an issue where Calling ProduceArtifact rapidly produced multiple artifacts anymore ([1286878](https://issuetracker.unity3d.com/issues/calling-produceartifactsasync-continuously-can-end-up-producing-the-artifact-multiple-times-instead-of-just-once))
    
*   Audio: Fixed a crash when passing a null argument to AudioMixer.FindSnapshot. ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Editor: Added support for duplicate component names to UnityEvent selection popup. ([1309997](https://issuetracker.unity3d.com/issues/unityevents-cant-differentiate-between-components-that-have-equal-names))
    
*   Editor: Fixed an ArgumentOutOfRange exception that was being thrown when attempting to multi-select AudioMixer groups. ([1339103](https://issuetracker.unity3d.com/issues/argumentoutofrange-exception-is-thrown-when-attempting-to-multi-select-audiomixer-groups))
    
*   Editor: Fixed an issue of not being able to delete array elements via keyboard 'Delete' key. ([1260899](https://issuetracker.unity3d.com/issues/an-array-elements-content-is-not-deleted-when-selecting-the-element-in-the-inspector-window-and-pressing-del-key))
    
*   Editor: Fixed an issue where keyboard shortcuts were not selecting expanded children of selected root objects when using arrow keys. ([1341265](https://issuetracker.unity3d.com/issues/multi-selected-objects-child-objects-dont-get-selected-in-the-hierarchy-when-using-keyboard-shortcuts))
    
*   Editor: Fixed issues when deselecting with the shift key held down. ([1340690](https://issuetracker.unity3d.com/issues/wrong-elements-are-selected-when-holding-shift-and-selecting-game-objects-in-the-scene-hierarchy))
    
*   Game Core: Fixed an issue where player settings VSyncCount was not being read on startup.
    
*   GI: Fixed an issue with reflection probes weight on flat objects. ([1233991](https://issuetracker.unity3d.com/issues/weights-sum-of-reflection-probes-affecting-the-gameobject-gets-over-one-when-one-of-a-reflection-probes-is-inside-another-one))
    
*   GI: Restore min bounces values to the value entered by the user once max bounces is increased. ([1320615](https://issuetracker.unity3d.com/issues/min-bounces-is-getting-clamped-to-the-first-digit-of-the-max-bounces-field-making-it-hard-to-set-proper-multi-bounce-lighting))
    
*   Graphics: Fixed bilinear rescale on 32k wide or high images such that the image no longer flips around. ([1340329](https://issuetracker.unity3d.com/issues/image-will-appear-flipped-when-using-the-bilinear-resize-algorithm))
    
*   Graphics: Fixed performance spikes in OSX while using an external monitor. Metal editor on OSX now uses CVDisplayLink to time frame presents. ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Graphics: Fixed shader code generation when using Texture2D/Texture2DArray Load with offset. ([1357095](https://issuetracker.unity3d.com/issues/android-shader-compiler-generates-ivec3-instead-of-ivec2-when-compiling-texture2d-dot-load))
    
*   iOS: Fixed an issue where Bluetooth keyboards did not handle input outside of text entry. ([1355543](https://issuetracker.unity3d.com/issues/ios-input-from-an-external-keyboard-is-not-handled-when-running-a-build))
    
*   iOS: Fixed an issue where Mute Other Audio Sources was not muting background audio on a device when toggled on when Unity audio was enabled. ([1335093](https://issuetracker.unity3d.com/issues/ios-mute-other-audio-sources-is-not-muting-background-audio-on-a-device-when-toggled-on))
    
*   iOS: Fixed an issue where presentation controller dismissal was resulting in black screen when allowed orientations were changed while showing it. ([1304313](https://issuetracker.unity3d.com/issues/ios-app-shows-a-black-screen-when-orientation-is-changed-during-uiviewcontroller-dismissal))
    
*   iOS: Fixed video freezing or app crashing when resuming the app from suspension or unlocking the device. ([1297877](https://issuetracker.unity3d.com/issues/ios-14-video-freezes-when-resuming-the-app-from-suspension-or-unlocking-the-device))
    
*   Linux: Fixed an issue where the Assets menu might be disabled after using the right-click context menu, or items in the context menu are unexpectedly disabled. ([1346205](https://issuetracker.unity3d.com/issues/menu-bar-assets-submenu-items-are-disabled-after-visualizing-ans-assets-context-menu-in-project-view))
    
*   Prefabs: Fixed a crash when apply GameObjects or Components to Prefab while the Asset Pipeline was paused. ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Prefabs: Fixed an issue where unpacked prefabs added under a prefab instance were removed when undoing any change made to outermost root. ([1339775](https://issuetracker.unity3d.com/issues/unpacked-prefabs-added-to-a-prefab-variant-in-prefab-mode-are-removed-when-undoing-any-change-made-to-main-prefab))
    
*   Profiler: Add error message when trying to load old profiler data format and direct users to load the data in unity 2018.4 ([1341972](https://issuetracker.unity3d.com/issues/profiler-loading-data-from-file-2018-dot-3-or-2018-dot-4-does-not-produce-correct-results))
    
*   Profiler: Fixed an issue with System.Thread threads tracked and visualization in the Timeline view of Profiler Window. ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Profiler: Fixed CPU Usage Profiler Chart not showing Vsync as the category when we are waiting in WaitForTargetFPS->TimeUpdate.WaitForLastPresentationAndUpdateTime for PS4, PS5, D3D11 and D3D12. (1335370)
    
*   Scene/Game View: Fixed an issue where Hierarchy did not allow dragging and dropping references to be placed between root objects marked as not editable. ([1337512](https://issuetracker.unity3d.com/issues/gameobjects-cannot-be-placed-between-objects-with-the-noteditable-flag-when-reordering-objects-in-the-hierarchy))
    
*   Scripting: Fixed a performance regression when activating/deactivating panels in a canvas. ([1348763](https://issuetracker.unity3d.com/issues/performance-degradation-when-activating-or-deactivating-ugui-gameobject))
    
*   Scripting: Fixed a player crash because data was not generated for in the build.  
    The generation failed because of path having single quote, and we did not handle that well. ([1327870](https://issuetracker.unity3d.com/issues/player-crashes-when-build-succeeds-despite-logging-an-error))
    
*   Scripting: Fixed file parameter with spaces not showing up properly in some cases where there is a compilation error ([1318667](https://issuetracker.unity3d.com/issues/file-parameter-has-incorrect-value-in-compilermessage-when-the-path-has-spaces))
    
*   Serialization: Fixed an issue where creating a new Project threw an Error "Broken text PPtr in file(Library/Unused/939d4274b8584ac49a1519c8e43d0673)". (1354358)
    
*   Shaders: Fixed an issue where Enabling "Optimize mesh data" in player settings will no longer makes the build process significantly slower. ([1349093](https://issuetracker.unity3d.com/issues/building-time-increases-when-optimize-mesh-data-is-enabled))
    
*   Shaders: Fixed an issue where the Editor was nearly unusable when compiling heavy compute shaders in the background. ([1348455](https://issuetracker.unity3d.com/issues/unity-shader-compiler-task-process-have-high-cpu-usage-when-installing-hdrp-package))
    
*   Shaders: Fixed an issue where the UI sliders only allowed end values for ranges with the left value being greater than the right value. ([1351151](https://issuetracker.unity3d.com/issues/range-shader-property-slider-malfunctioning-when-value-goes-from-high-to-low))
    
*   Universal Windows Platform: Fixed an issue where Alt + Enter did not entering/leaving fullscreen mode. ([1304865](https://issuetracker.unity3d.com/issues/player-window-can-not-be-maximised-after-being-taken-out-of-fullscreen-with-alt-plus-enter))
    
*   Universal Windows Platform: Fixed race-condition when using TouchScreenKeyboard's "text" or "selection" properties immediately after calling Open. ([1345877](https://issuetracker.unity3d.com/issues/hololens-2-set-selection-throws-argumentoutofrangeexception))
    
*   Universal Windows Platform: Fixed TouchScreenKeyboard on HoloLens2 closing a few seconds after focusing a TextMeshPro input field ([1360514](https://issuetracker.unity3d.com/issues/uwp-hololens-touchscreenkeyboard-closes-4-seconds-after-focusing-a-input-field))

### Known Issues in 2020.3.18f1

*   \--: NullReferenceException is thrown when typing in the Hierarchy window search bar ([1360676](https://issuetracker.unity3d.com/issues/nullreferenceexception-is-thrown-when-typing-in-the-hierarchy-window-search-bar))
    
*   Asset Importers: Editor crashes on UnityEditor.Unsupported:IsDestroyScriptableObject when applying changes to a custom asset ([1353925](https://issuetracker.unity3d.com/issues/editor-crashes-on-unityeditor-dot-unsupported-isdestroyscriptableobject-when-applying-changes-to-a-custom-asset))
    
*   Audio: Crash on AudioCustomFilter::GetOrCreateDSP when recompiling scripts while in Play Mode ([1354002](https://issuetracker.unity3d.com/issues/crash-on-audiocustomfilter-getorcreatedsp-when-recompiling-scripts-while-in-play-mode))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Menu bar "Assets" submenu items are disabled after visualizing an asset's context menu in Project view ([1346205](https://issuetracker.unity3d.com/issues/menu-bar-assets-submenu-items-are-disabled-after-visualizing-ans-assets-context-menu-in-project-view))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Mono: Crash on mono\_thread\_get\_undeniable\_exception ([1308625](https://issuetracker.unity3d.com/issues/crash-on-mono-thread-get-undeniable-exception))
    
*   Mono: \[Mono Upgrade\] CommandBuffer native plugin events hang in the Editor ([1308216](https://issuetracker.unity3d.com/issues/commandbuffer-native-plugin-events-hang-in-the-editor))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Quality of Life: Crash on GUIView::DoPaint when selecting color with a color picker ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scene Management: Poor performance when loading or unloading a large Scene ([1360901](https://issuetracker.unity3d.com/issues/poor-performance-when-loading-or-unloading-a-large-scene))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Performance degradation when activating or deactivating uGUI GameObject ([1348763](https://issuetracker.unity3d.com/issues/performance-degradation-when-activating-or-deactivating-ugui-gameobject))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Vulkan: \[Editor\] The Scene's GameObjects textures are seemingly random and change colours depending on the Scene's Camera pos. ([1337772](https://issuetracker.unity3d.com/issues/vulkan-editor-the-scenes-gameobjects-textures-are-seemingly-random-and-change-colours-depending-on-the-scenes-camera-pos))
    
*   XR: \[Linux\] Scene View doesn't render when opening new AR or VR Template project or pressing "Show Tutorials" ([1362435](https://issuetracker.unity3d.com/issues/xr-linux-scene-view-doesnt-render-when-opening-new-ar-or-vr-template-project-or-pressing-show-tutorials))
    

### 2020.3.18f1 Release Notes

#### Features

*   Version Control: Added auto sign in when logged into Unity account

#### Improvements

*   Android: Add property PlayerSettings.Android.optimizedFramePacing API ([1329232](https://issuetracker.unity3d.com/issues/optimized-frame-pacing-option-is-not-available-when-referencing-it-via-android-player-settings-in-a-script))
    
*   Burst: Platform updates
    
*   Scripting: Ammend CompilationPipeline.compilationFinished to include that it's currently not possible to build a player from a callback. ([1338334](https://issuetracker.unity3d.com/issues/error-appears-in-the-console-when-triggering-a-build-from-the-compilationfinished-callback))
    
*   Version Control: Added Checkin and Update confirmation notification
    
*   Version Control: Improved load time performance
    
*   XR: XR: Reducing rendering latency in URP with Late Latching
    

#### API Changes

*   Asset Bundles: Added: Added public API to specify the amount of memory reserved for the shared AssetBundle loading cache.

#### Changes

*   Editor: Updated com.unity.cinemachine to 2.6.10
    
*   Version Control: Simplified UI: decluttered UI
    
*   XR: Updated OpenXR Package to 1.2.8
    

#### Fixes

*   Android: Fix cameras with depth only clear flickering or not rendering on Adreno devices. ([1314872](https://issuetracker.unity3d.com/issues/opengles3-mobile-objects-with-shaders-flickering-when-using-urp-plus-camera-stacking))
    
*   Android: Fixed a bug where a looping, streaming video could cause a Unity app to drop frames or freeze, if network latency was really high. ([1341573](https://issuetracker.unity3d.com/issues/android-streaming-a-video-can-cause-an-app-to-hang-slash-freeze-when-network-latency-is-high))
    
*   Android: Fixed issue, where you would have stale touches present after touching the screen with multiple fingers. Previously Unity was incorrectly handling MotionEvent ACTION\_CANCEL event, and was only canceling one touch, where in reality all touches must be canceled. ([1335140](https://issuetracker.unity3d.com/issues/android-inputsystem-callback-is-not-called-for-multiple-touches-after-tapping-the-screen-rapidly-for-about-2-seconds))
    
*   Android: Fixed selection highlight appearing above keyboard when "Hide Mobile Input" enabled ([1313620](https://issuetracker.unity3d.com/issues/android-tmp-inputfield-selection-highlight-appears-above-keyboard-when-hide-mobile-input-enabled))
    
*   Animation: Fixed Animator.GetNextAnimatorClipInfo() methods not returning the expected result at the end of a transition. ([1317097](https://issuetracker.unity3d.com/issues/animation-clip-is-present-in-both-current-and-next-animationclipinfos-at-the-same-frame))
    
*   Asset Import: Improved loading performances of import settings for models with a lot of animation clips. ([1338096](https://issuetracker.unity3d.com/issues/inspector-import-settings-are-slow-to-load-when-selecting-a-model-with-a-lot-of-animations))
    
*   Asset Pipeline: Improved UI performance when generating many asset previews. (1340118)
    
*   Editor: Excluded Keyword Enums from caching in the material inspector to ensure changes from shader files propagate correctly. ([1176077](https://issuetracker.unity3d.com/issues/shadergraph-enum-keywords-number-of-displayed-enum-options-on-material-doesnt-update))
    
*   Editor: Fixed an issue where the tooltips for the labels are placed at a fix position. they now appear at the mouse cursor. ([1332686](https://issuetracker.unity3d.com/issues/project-browser-selection-tooltip-is-always-in-fixed-position-when-hovering-over-footer-text))
    
*   Editor: Fixed spamming of Unity hub with infinite organisation info requests from Editor. ([1358817](https://issuetracker.unity3d.com/issues/editor-2019-and-2020-spams-hub-with-getorginfo-request-every-split-second))
    
*   Editor: Fixed UI not running any tests if run select on nested namespaces (DSTR-256).
    
*   Editor: Nested enumerator execution order fix (DSTR-227).
    
*   GI: Fixed Editor crashing on EnlightenSceneMapping::GetTerrainChunkUVST when loading scene with corrupt Lighting Data Asset. ([1325758](https://issuetracker.unity3d.com/issues/editor-crashes-on-enlightenscenemapping-getterrainchunkuvst-when-loading-scene-with-corrupt-lighting-data-asset))
    
*   GI: Fixed LightProbes.needsRetetrahedralization not getting invoked in IL2CPP builds. ([1338514](https://issuetracker.unity3d.com/issues/lightprobes-dot-needsretetrahedralization-doesnt-get-invoked-in-il2cpp-builds))
    
*   Graphics: Fixed a crash with accessing individual pixels on crunch compressed texture. This should now throw an error instead. ([1314831](https://issuetracker.unity3d.com/issues/crash-on-texture2d-getpixelbilinear-when-attempting-to-re-enter-another-scene-after-entering-the-menu))
    
*   Graphics: Fixed corruption that can occur in font characters texture on some iOS 14 devices when using RequestCharactersInTexture. (1290509)
    
*   Graphics: Fixed FrameTimingManager produced incorrect frame time on Vulkan and DirectX12 ([1274505](https://issuetracker.unity3d.com/issues/frametimingmanager-dot-getlatesttimings-returns-a-smaller-gpuframetime-than-it-actually-is))
    
*   Graphics: Fixed renderingLayerMask issue with terrain tree rendering. ([1324480](https://issuetracker.unity3d.com/issues/hdrp-terrain-trees-are-stuck-on-light-layerdefault-even-when-rendering-layer-mask-is-set-to-a-different-layer))
    
*   Graphics: Fixed sprite atlas generation for some ASTC block sizes ([1327146](https://issuetracker.unity3d.com/issues/ios-2d-sprite-corrupted-or-invisible-in-atlas-when-using-certain-dimension-rgb-a-compressed-5x5-or-10x10-block-sprites))
    
*   Graphics: Fixed SRPBatcher not increasing CBuffer size when material shader is changed. ([1353368](https://issuetracker.unity3d.com/issues/srpbatcher-not-increasing-cbuffer-size-when-material-shader-is-changed))
    
*   GraphView: Fixed GraphView group to allow drag and drop of nodes when edges are selected. ([1348542](https://issuetracker.unity3d.com/issues/drag-and-drop-nodes-to-a-group-doesnt-work-if-edges-are-selected))
    
*   Input: Fixed so that pen and touch work in gameview. ([1285873](https://issuetracker.unity3d.com/issues/game-panel-buttons-not-working-when-using-touch-screen))
    
*   Input System: Fixed Y coordinate being flipped in Windows Player when WarpCursorPosition in Input System. ([1355722](https://issuetracker.unity3d.com/issues/mouse-cursor-y-position-inverted-when-using-mouse-dot-current-dot-warpcursorposition))
    
*   iOS: Analytics temporary data no longer stored in a user accessible folder ([1211659](https://issuetracker.unity3d.com/issues/ios-service-related-files-and-folders-created-under-documents-folder-on-ios))
    
*   iOS: Fixed 'end Encoding' crash when force closing iOS application. ([1329593](https://issuetracker.unity3d.com/issues/ios-crash-on-mtlreportfailure-dot-cold-dot-1-due-to-a-missing-endencoding-call-on-exiting-the-application))
    
*   iOS: Fixed query of Display native resolution. ([1342424](https://issuetracker.unity3d.com/issues/ios-display-dot-main-dot-systemwidth-slash-height-displays-the-rendering-resolution-instead-of-system-resolution))
    
*   iOS: Reduced memory usage for small uploads in UnityWebRequest. (1355235)
    
*   Linux: Fixed an Editor crash when a HDRP Project was open with "(Unknown)" entries in the stacktrace when Playmode was entered. ([1267460](https://issuetracker.unity3d.com/issues/hdrp-project-crashes-editor-with-unknown-entries-in-the-stacktrace-when-entering-playmode))
    
*   Linux: Fixed crash when showing tooltips for ProBuilder buttons. ([1335846](https://issuetracker.unity3d.com/issues/linux-editor-using-vulkan-crashes-at-gfxdevicevk-ensurevalidbackbuffer-when-showing-tooltips-for-probuilder-buttons))
    
*   N/A (internal): Fixed scene-with-scrollbar-horizontal-delete-doesnt-dirty-on-save test instability by calling Focus(). (1356609)
    
*   Particles: Fixed occasional corrupt particle colors when using a Skinned Mesh Renderer in the Shape Module ([1332410](https://issuetracker.unity3d.com/issues/particles-invisible-when-using-smrenderer-on-build-if-usemeshcolors-is-selected-and-source-mesh-does-not-provide-vertex-color))
    
*   Particles: Fixed pivot setting for Horizontal and Vertical billboard render modes. ([1291175](https://issuetracker.unity3d.com/issues/incorrect-offset-is-set-when-setting-the-pivot-for-vertical-slash-horizontal-billboard-render-modes))
    
*   Physics: Fixed Articulation Bodies not being visualised in the Physics Debugger. ([1343929](https://issuetracker.unity3d.com/issues/articulation-is-not-visible-when-using-the-physics-debugger))
    
*   Physics: Fixed Physics Debugger not reacting to filtering settings as expected. ([1319356](https://issuetracker.unity3d.com/issues/physics-debugger-colliders-are-visualized-even-if-their-layer-is-not-selected-in-the-show-layers-property))
    
*   Prefabs: Ensure Prefab can't be instantiated with a Prefab asset as parent. ([1276785](https://issuetracker.unity3d.com/issues/crash-on-transform-countnodesdeep-when-calling-instantiateprefab-and-passing-a-transform-received-from-the-prefabs-component))
    
*   Scripting: Fixed double-clicking in some cases not opening the correct line. ([1300479](https://issuetracker.unity3d.com/issues/certain-errors-do-not-open-in-code-editors-when-double-clicking-error))
    
*   Scripting: No longer print newlines for Debug.Log\* variants when StackTrace set to 'None'. ([1332622](https://issuetracker.unity3d.com/issues/android-empty-lines-between-logs-are-being-logged-when-logging-errors-warnings-or-messages))
    
*   Services: Analytics no longer auto-activates on new project link.
    
*   Services: Updated analytics package. Constantly repopulating a list of strings was causing the inspector panel for the analytics tracker to spam autosave in some cases. ([1150985](https://issuetracker.unity3d.com/issues/a-loop-of-prefab-autosave-begins-when-adding-a-parameter-to-analytics-event-tracker-in-prefab-editing-mode))
    
*   uGUI: Fixed a bug with selectable (i.e. Button) where it's not shown as selected when it's re-enabled until selection is cleared manually.. ([1342519](https://issuetracker.unity3d.com/issues/selectable-ie-button-is-not-shown-as-selected-when-its-re-enabled-until-selection-is-cleared-manually))
    
*   UI Toolkit: Fixed corruption of the stencil buffer caused by misplaced geometry used to pop masks. ([1332741](https://issuetracker.unity3d.com/issues/uir-moving-a-mask-breaks-masking-performed-by-a-sibling-mask))
    
*   UI Toolkit: Fixed precision errors in gamma-linear conversions. ([1317742](https://issuetracker.unity3d.com/issues/uir-uitoolkit-gamma-to-linear-conversion-lacks-precision))
    
*   UI Toolkit: Involve clipping with VisualElements that use the GroupTransform hint. ([1328740](https://issuetracker.unity3d.com/issues/uir-grouptransform-has-invalid-self-clipping))
    
*   Universal Windows Platform: Fixed C++ source code plugins failing to get copied to output build folder with executable only build type when the plugin is in a package that's referenced in the project. ([1353677](https://issuetracker.unity3d.com/issues/cannot-build-uwpplayer-with-unity-ads-package-installed))
    
*   Version Control: Fixed contextual menu not showing up in project view.
    
*   Version Control: Fixed some namespace collisions with Antlr3.
    
*   Version Control: Fixed SSO renew token after password change.
    
*   Version Control: Fixed view not switching to workspace after creating an Enterprise Gluon workspace.
    
*   Video: VideoPlayback leaked if destroyed while seeking. ([1308317](https://issuetracker.unity3d.com/issues/a-videoplayback-is-leaked-if-you-destroy-a-videoplayer-during-its-in-seeking))
    
*   WebGL: Added workaround for Safari IndexedDB bug. ([1342163](https://issuetracker.unity3d.com/issues/webgl-macos-page-fails-to-load-on-safari-14-dot-1-1))
    
*   WebGL: Fixed error with prevViewport upon full screen resize
    
*   WebGL: Fixed Keyboard.current and Mouse.current to be immediately available in MonoBehaviour.Start() functions, instead of returning null. ([1239007](https://issuetracker.unity3d.com/issues/new-input-system-cannot-retrieve-devices-in-start-method-when-used-in-webgl-build))
    
*   WebGL: Fixed occasional large values with Input.GetAxis ([1208971](https://issuetracker.unity3d.com/issues/webgl-input-dot-getaxis-slash-input-dot-getaxisraw-sometimes-returns-significantly-larger-value-in-webgl-when-cursor-is-locked))
    
*   Windows: Fixed the new input system reporting incorrect keyboard key display names when using certain non-english keyboard layouts. ([1337684](https://issuetracker.unity3d.com/issues/inputsystem-inputaction-dot-getbindingdisplaystring-does-not-correctly-map-keys-after-changing-system-language))
    
*   XR: Fixed camera depth normals pass in XR. ([1284715](https://issuetracker.unity3d.com/issues/xr-sdk-ssao-effect-is-broken-slash-inverted-when-single-pass-instanced-rendering-mode-is-used))

### Known Issues in 2020.3.17f1

*   Asset Importers: Editor crashes on UnityEditor.Unsupported:IsDestroyScriptableObject when applying changes to a custom asset ([1353925](https://issuetracker.unity3d.com/issues/editor-crashes-on-unityeditor-dot-unsupported-isdestroyscriptableobject-when-applying-changes-to-a-custom-asset))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Input: Input.GetKey does not trigger when the mouse cursor is outside the Game window ([1358134](https://issuetracker.unity3d.com/issues/input-dot-getkey-does-not-trigger-when-the-mouse-cursor-is-outside-the-game-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile: \[Android\] Video player unable to play video from Asset bundles ([1287770](https://issuetracker.unity3d.com/issues/android-video-player-unable-to-play-video-from-asset-bundles))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Mono: Crash on mono\_thread\_get\_undeniable\_exception ([1308625](https://issuetracker.unity3d.com/issues/crash-on-mono-thread-get-undeniable-exception))
    
*   Mono: \[Mono Upgrade\] CommandBuffer native plugin events hang in the Editor ([1308216](https://issuetracker.unity3d.com/issues/commandbuffer-native-plugin-events-hang-in-the-editor))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Quality of Life: Crash on GUIView::DoPaint when selecting color with a color picker ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Error CS8035 is thrown on opening a project when using rulesets ([1349517](https://issuetracker.unity3d.com/issues/error-cs8035))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Performance degradation when activating or deactivating uGUI GameObject ([1348763](https://issuetracker.unity3d.com/issues/performance-degradation-when-activating-or-deactivating-ugui-gameobject))
    
*   Scripting: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Vulkan: Linux Editor using Vulkan crashes at " GfxDeviceVK::EnsureValidBackbuffer" when showing tooltips for ProBuilder buttons ([1335846](https://issuetracker.unity3d.com/issues/linux-editor-using-vulkan-crashes-at-gfxdevicevk-ensurevalidbackbuffer-when-showing-tooltips-for-probuilder-buttons))
    
*   Vulkan: \[Editor\] The Scene's GameObjects textures are seemingly random and change colours depending on the Scene's Camera pos. ([1337772](https://issuetracker.unity3d.com/issues/vulkan-editor-the-scenes-gameobjects-textures-are-seemingly-random-and-change-colours-depending-on-the-scenes-camera-pos))
    

### 2020.3.17f1 Release Notes

#### Features

*   Android: Added more complete support for running Android apps on the Chrome OS platform. These changes enable building and running Android on x86 and x86-64 CPUs, now officially supported on Chrome OS devices. These changes also include input-related and windowing improvements for Chrome OS.

#### Improvements

*   Android: Added boot-config/command-line switch "platform-android-cpucapacity-threshold" that can be used to specify which CPU cores are treated as big cores. The cpu capacity is a value in the range between 0 and 1024. A capacity value of 870 yields the same behavior as before the fix for case 1349057.
    
*   Graphics: Improve Line/TrailRenderer quality when points are close together. ([1322317](https://issuetracker.unity3d.com/issues/linerenderer-does-not-render-lines-straight-when-positions-are-under-1-or-over-1))
    
*   Graphics: Reduced the Input delay in Vulkan standalone when VSync is enabled. ([1282463](https://issuetracker.unity3d.com/issues/noticable-mouse-and-keyboard-input-delay-on-a-vulkan-standalone-build-when-vsync-is-enabled))
    
*   Package: Update Addressables to 1.18.9 and SBP to 1.19.0
    
*   Particles: Optimize Mesh data stripping vertex channels that are used by particle systems when the mesh is included in assetbundles. ([1313420](https://issuetracker.unity3d.com/issues/addressables-vertex-data-is-lost-when-mesh-is-marked-as-addressable-and-play-mode-script-is-set-to-use-existing-build-1))
    

#### API Changes

*   Asset Bundles: Added: Adding new API DownloadHandlerAssetBundle.autoLoadAssetBundle for loading AssetBundles asynchronously from DownloadHandlerAssetBundle.
    
*   Services: Added: Added new com.unity.services.core package that is used for common behaviour of Game Service packages
    
*   XR: Added: Added IUnityGraphicsVulkanV2 plugin interface to add support for chaining vulkan initialization intercepts. (1349908)
    

#### Changes

*   Graphics: Update SRP Packages to 10.6.0
    
*   XR: The Oculus XR Plugin package has been updated to 1.10.0.
    
*   XR: Updated XR Legacy Input Helpers to 2.1.8.
    

#### Fixes

*   2D: Fixed an issue where all open Scenes would get dirty when editing a SpriteShape Spline. ([1346430](https://issuetracker.unity3d.com/issues/all-open-scenes-get-dirty-when-editing-a-spriteshape-spline))
    
*   2D: Fixed an issue where errors would be encountered when opening a .psb in the skinningEditor with mosaic disabled.
    
*   2D: Fixed an issue where IKManager2D was not detecting classes inheriting from Solver2D. (1343260)
    
*   2D: Fixed an issue where triangular spriteshapes with 0 offset collider did not generate a collision shape. (1343836)
    
*   Android: Fixed a crash when using TouchScreenKeyboard with placeholder text. ([1347370](https://issuetracker.unity3d.com/issues/android-using-touchscreenkeyboard-dot-open-with-a-non-empty-placeholder-multiple-times-causes-the-app-to-crash))
    
*   Android: Fixed an issue with a long startup on Mali GPUs when frame timing stats was enabled. ([1316285](https://issuetracker.unity3d.com/issues/opengles3-android-urp-scenes-are-rendered-after-a-period-of-time-of-black-screen-or-not-rendered-at-all-on-the-build))
    
*   Android: Fixed an issue with the detection of big cores on Snapdragon 865 and Snapdragon 888 SoCs. ([1349057](https://issuetracker.unity3d.com/issues/android-unity-detects-only-1-big-core-on-snapdragon-888-devices))
    
*   Asset Pipeline: Fixed an issue where duplicating folders and assets did not invoke `OnWillCreateAsset` callbacks on the duplicated items. ([949423](https://issuetracker.unity3d.com/issues/assetmodificationprocessor-is-not-notified-when-an-asset-is-duplicated))
    
*   Asset Pipeline: Fixed an issue where a secondary instance of Unity used for asset importing could appear to have hung when inspecting it in the Activity Monitor. ([1331736](https://issuetracker.unity3d.com/issues/macos-second-unity-instance-in-activity-monitor-is-not-responding-after-importing))
    
*   Asset Pipeline: Fixed an issue where some meshes imported from FBX were missing the first UV channel. ([1342131](https://issuetracker.unity3d.com/issues/fbx-model-has-broken-uv-mapping-when-the-imported-model-is-duplicated-or-using-a-newer-unity-version))
    
*   Asset Pipeline: Fixed an issue with OnPostProcessAllAsset listing unchanged assets as imported, when leaving safe mode. (1335729)
    
*   Editor: Fixed an issue to avoid asserts when opening gradient editor. ([1344785](https://issuetracker.unity3d.com/issues/vfx-graph-assertion-failed-on-expression-didinsert-when-opening-gradient-editor))
    
*   Editor: Fixed an issue where saving a project from the "Learn" section of the Hub would crash the Windows Editor. ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    
*   Editor: Fixed an issue where the input package did not correctly calculates mouse deltas when the cursor was locked under Linux. ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Editor: Fixed an issue where the inspector preview of Gradient and AnimationCurve values of a serialized object were not getting refreshed when its values were changed from script. ([1311461](https://issuetracker.unity3d.com/issues/gradient-and-animationcurve-previews-dont-get-updated-when-modifying-values-from-script))
    
*   Editor: Fixed an issue where the Prefab override was reset when prefab was pasted as a child. ([1339266](https://issuetracker.unity3d.com/issues/prefabs-overridden-properties-arent-transferred-when-copying-it-to-another-prefab))
    
*   Editor: \[macOS | Linux\] Fixed an issue where basic system information was not log when launching the Editor to the log file. (1325370)
    
*   GI: Fixed a crash when baking with Enlighten on a system with more than 64 threads. ([1229259](https://issuetracker.unity3d.com/issues/100-percent-crash-when-baking-with-enlighten-on-a-system-with-more-than-64-threads))
    
*   GI: Fixed a sampling issue on GPULM which caused hard indirect shadows with non ponctual light sources. ([1310621](https://issuetracker.unity3d.com/issues/gameobjects-unlit-side-has-a-hard-shadow-split-when-progressive-gpu-lightmapper-is-used))
    
*   Graphics: Fixed a crash that was caused by a memory error when using Vulkan. (1352796)
    
*   Graphics: Fixed MeshRenderer still rendering a mesh when the MeshFilter has been removed whilst editing the prefab in context. ([1251154](https://issuetracker.unity3d.com/issues/prefab-instance-is-rendered-with-removed-mesh-filter-in-the-prefab-asset))
    
*   iOS: Fixed a crash when using external display connected with USB-C. ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   macOS: Fixed a crash when attempting to use bluetooth from native plugin instead of crashing. Unity Editor now asks for bluetooth permission. Added "Bluetooth usage description" field to macOS player settings which is displayed in the player when asking for bluetoot ([1321219](https://issuetracker.unity3d.com/issues/big-sur-crash-on-abort-with-payload-in-build-when-asking-for-bluetooth-permissions))
    
*   macOS: Unity Editor now asks for photos/movies/music folder access permission when attempting to use open them via folder picker instead of crashing. ([1280375](https://issuetracker.unity3d.com/issues/macos-crash-on-abort-with-payload-when-trying-to-import-an-asset-from-photos-movies-or-music))
    
*   macOS: Usage description fields for macOS in player settings are now visible on Windows and Linux editors. ([1323741](https://issuetracker.unity3d.com/issues/missing-microphone-and-camera-ui-fields-in-player-settings-when-opening-the-editor-on-windows-with-macos-target-platform))
    
*   Particles: Fixed fog in all blend modes of the Standard Unlit shader. ([1297332](https://issuetracker.unity3d.com/issues/fog-color-doesnt-get-applied-on-a-gameobject-when-the-gameobject-uses-particles-slash-standart-unlit-shader))
    
*   Particles: Optimize Mesh data stripping vertex channels that are used by particle systems when the mesh is included in assetbundles. ([1313420](https://issuetracker.unity3d.com/issues/addressables-vertex-data-is-lost-when-mesh-is-marked-as-addressable-and-play-mode-script-is-set-to-use-existing-build-1))
    
*   Scripting: Fixed globalgamemanagers.assets to only contain scripts that will be part of the player builds ([1335997](https://issuetracker.unity3d.com/issues/globalgamemanagers-dot-assets-contains-references-to-platform-specific-scripts-when-those-scripts-are-present-in-the-project))
    
*   Serialization: Fixed an issue where UnityEvent was not populating in the function drop down list properly when used with polymorphic serialization. ([1314770](https://issuetracker.unity3d.com/issues/dynamic-functions-binding-to-unityevent-is-not-allowed-in-derived-class-when-using-serializereference))
    
*   Shaders: Fixed a shader compiler crash when asked to compile a variant for a platform that was not installed. ([1348875](https://issuetracker.unity3d.com/issues/pass-dot-compilevariant-crashes-the-shader-compiler-when-using-a-target-platform-that-is-not-installed))
    
*   Shaders: Fixed an issue where caching preprocessor was not reporting include dependencies in raw GLSL shaders. ([1335707](https://issuetracker.unity3d.com/issues/shader-is-not-updated-when-updating-the-glslinc-file-when-the-shader-is-glsl))
    
*   Shaders: Fixed an issue where Shader keywords were not sorted in the error and warning messages coming from the shader compiler. ([1348741](https://issuetracker.unity3d.com/issues/shader-keywords-are-not-sorted-in-error-or-warning-messages-coming-from-the-shader-compiler))
    
*   Shaders: Fixed an issue where the properties section could not be folded in the Shader Inspector. ([1350236](https://issuetracker.unity3d.com/issues/shader-properties-section-is-not-foldable))
    
*   Shaders: Fixed instancing count constant generating an error when compiling shaders for Vulkan using Pass.CompileVariant API ([1348871](https://issuetracker.unity3d.com/issues/pass-dot-compilevariant-complains-about-top-level-params-being-outside-of-cbuffer-when-compiling-for-vk-slash-android))
    
*   Shaders: Fixed Pass.CompileVariant not filtering keywords not relevant to the given pass ([1349218](https://issuetracker.unity3d.com/issues/pass-dot-compilevariant-api-doesnt-filter-keywords-for-a-given-pass))
    
*   Shaders: Fixed Pass.CompileVariant silently accepting impossible combinations of ShaderCompilerPlatform and BuildTarget ([1348874](https://issuetracker.unity3d.com/issues/pass-dot-compilevariant-allows-impossible-combinations-of-parameters-like-metal-on-android))
    
*   Shaders: Fixed Pass.CompileVariant throwing errors when compiling subshaders coming from the fallback or passes coming from UsePass ([1348862](https://issuetracker.unity3d.com/issues/pass-dot-compilevariant-throws-errors-when-iterating-over-all-subshaders-and-passes-of-a-new-surface-shader))
    
*   Shaders: Fixed ShaderData.Pass providing no way to check whether a particular shader stage is included ([1348880](https://issuetracker.unity3d.com/issues/no-api-to-check-whether-a-pass-has-a-given-shader-stage))
    
*   UI Toolkit: Fixed an issue where the toolbar turned white when certain native plugins where loaded. ([1335430](https://issuetracker.unity3d.com/issues/toolbar-appears-over-play-slash-pause-slash-stop-buttons-when-using-csoundunity-package))
    
*   Universal Windows Platform: Fixed a crash in master builds when a scene that uses lightmaps is unloaded. ([1332318](https://issuetracker.unity3d.com/issues/uwp-build-crashes-when-trying-to-switch-scene))
    
*   Video: Fixed an issue where the VideoPlayer was not working on some AMD switchable GPUs. ([1237818](https://issuetracker.unity3d.com/issues/video-player-fails-to-start-playing-and-null-handle-errors-are-thrown-when-running-unity-editor-slash-build-with-specific-hardware))
    
*   Windows: Fixed an issue for mouse deltas always being 0 when running Windows in a VM. ([1303445](https://issuetracker.unity3d.com/issues/function-input-dot-getaxis-mouse-x-and-y-axis-in-a-virtual-machine-always-returns-0))
    
*   Windows: Fixed an issue where the stack tracing code was not working even when excessively long mono method signatures were in the callstack. (1342150)
    
*   Windows: Fixed IME composition text duplicating between InputFields due to bugs in 3rd party Chinese IMEs. ([977600](https://issuetracker.unity3d.com/issues/locale-input-from-microsoft-pinyin-chinese-keyboard-is-duplicated-in-unity))
    
*   Windows: Fixed Input System failing to detect gamepad if it was connected during the splash screen logos. ([1328742](https://issuetracker.unity3d.com/issues/input-system-gamepad-is-not-recognized-when-it-is-connected-during-splash-screen))
    
*   Windows: Fixed Input System failing to detect touchscreen device connected after startup ([1305703](https://issuetracker.unity3d.com/issues/new-input-system-does-not-detect-virtual-touchscreen-device-that-is-enabled-post-app-startup))
    
*   Windows: Fixed SystemInfo.deviceUniqueIdentifier not actually being unique on some Windows 7 machines. ([1339021](https://issuetracker.unity3d.com/issues/systeminfo-dot-deviceuniqueidentifier-is-not-unique-and-can-be-modified-on-linux))
    
*   XR: Fixed an issue where MTLCommandEncoder was not available at frame submission time for display providers when in XR mode. (1329853)
    
*   XR: Fixed a crash when using XR + URP + MSAA + Optimize buffer discards on Vulkan on Oculus Quest (1313268)
    
*   XR: Fixed an issue for late latching pre drawcall performance regression and world space UI and terrain was always drawn at origin. (1337356, 1337972, 1337973)

### Known Issues in 2020.3.16f1

*   Asset Importers: Editor crashes on UnityEditor.Unsupported:IsDestroyScriptableObject when applying changes to a custom asset ([1353925](https://issuetracker.unity3d.com/issues/editor-crashes-on-unityeditor-dot-unsupported-isdestroyscriptableobject-when-applying-changes-to-a-custom-asset))
    
*   Asset Importers: \[MacOS\] Second Unity instance in Activity Monitor is "not responding” after importing. ([1331736](https://issuetracker.unity3d.com/issues/macos-second-unity-instance-in-activity-monitor-is-not-responding-after-importing))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Customer QA Onboarding: Unity does not execute code weavers when the project is opened for the first time ([1350116](https://issuetracker.unity3d.com/issues/unity-does-not-execute-code-weavers-when-its-opened-for-the-first-time))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[Enlighten\] Fatal Error when closing the Editor while Generating Lighting ([1354238](https://issuetracker.unity3d.com/issues/fatal-error-when-closing-the-editor-while-generating-lighting))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   IMGUI: Editor's Toolbar is sometimes replaced by a white bar when opening any Scene ([1341951](https://issuetracker.unity3d.com/issues/white-screen-replaces-the-play-scale-position-bars-editor-cannot-play))
    
*   Linux: Crash on DisableSubMenu when double clicking to close a context menu ([1347655](https://issuetracker.unity3d.com/issues/linux-crash-on-disablesubmenu-when-double-clicking-to-close-a-context-menu))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile: \[Android\] Using TouchScreenKeyboard.Open with a non-empty placeholder multiple times causes the app to crash ([1347370](https://issuetracker.unity3d.com/issues/android-using-touchscreenkeyboard-dot-open-with-a-non-empty-placeholder-multiple-times-causes-the-app-to-crash))
    
*   Mobile Graphics: \[iOS\] Player crashing when connecting external Display via USB-C port ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Mono: Crash on mono\_thread\_get\_undeniable\_exception ([1308625](https://issuetracker.unity3d.com/issues/crash-on-mono-thread-get-undeniable-exception))
    
*   Mono: \[Mono Upgrade\] CommandBuffer native plugin events hang in the Editor ([1308216](https://issuetracker.unity3d.com/issues/commandbuffer-native-plugin-events-hang-in-the-editor))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Quality of Life: Crash on GUIView::DoPaint when selecting color with a color picker ([1355078](https://issuetracker.unity3d.com/issues/crash-on-guiview-dopaint-when-selecting-color-with-a-color-picker))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Error CS8035 is thrown on opening a project when using rulesets ([1349517](https://issuetracker.unity3d.com/issues/error-cs8035))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   uGUI: Performance degradation when activating or deactivating uGUI GameObject ([1348763](https://issuetracker.unity3d.com/issues/performance-degradation-when-activating-or-deactivating-ugui-gameobject))
    
*   Video: Video player fails to start playing and null handle errors are thrown when running Unity Editor/Build with specific hardware ([1237818](https://issuetracker.unity3d.com/issues/video-player-fails-to-start-playing-and-null-handle-errors-are-thrown-when-running-unity-editor-slash-build-with-specific-hardware))
    
*   Vulkan: Linux Editor using Vulkan crashes at " GfxDeviceVK::EnsureValidBackbuffer" when showing tooltips for ProBuilder buttons ([1335846](https://issuetracker.unity3d.com/issues/linux-editor-using-vulkan-crashes-at-gfxdevicevk-ensurevalidbackbuffer-when-showing-tooltips-for-probuilder-buttons))
    
*   Vulkan: \[Editor\] The Scene's GameObjects textures are seemingly random and change colours depending on the Scene's Camera pos. ([1337772](https://issuetracker.unity3d.com/issues/vulkan-editor-the-scenes-gameobjects-textures-are-seemingly-random-and-change-colours-depending-on-the-scenes-camera-pos))
    

### 2020.3.16f1 Release Notes

#### Features

*   Package: ProBuilder 4.5.2
    
*   Shaders: Added support for specifying package requirements for SubShaders and Passes to ShaderLab.
    

#### Improvements

*   Android: Bump Android Logcat package to 1.2.3
    
*   Graphics: Improvements to scene culling CPU performance - Shadow casters are rejected earlier if their shadow casting is disabled which should improve performance in scenes with scenes with lots of renderable objects that are set to not cast shadows. (1322874)
    
*   Graphics: VFX : Optimization while sending event to a VisualEffect by script
    
*   iOS: Improve logging in iOS automation: clarify existing log messages and add new ones.
    
*   Networking: UnityWebRequest on iOS no longer uses operation queue for uploads, upload data will request by a callback from system.
    
*   Prefabs: optimized Prefab->UnpackCompletely by up to 10x (1253178)
    
*   Package Manager: The Package Manager's global cache root folder, which is used to store downloaded packages, can now be configured using the `UPM_CACHE_ROOT` environment variable or the `cacheRoot` key in the user configuration file.
    

#### API Changes

*   Asset Pipeline: Added: Added AssetDatabase.SaveAssetIfDirty() to save individual assets if required.
    
*   Graphics: Added: A new API for compiling shaders from editor code and obtaining reflection info was added to ShaderData.Pass.
    
*   Physics: Added: Added a property for retrieving ArticulationBody components during a collision event. Articulation bodies can be retrieved by Collision.articulationBody
    
*   Physics: Added: Added a property for retrieving either ArticulationBody or Rigidbody components to collision events under Collision.body.
    

#### Changes

*   2D: Tile.StartUp is called after Tilemap is loaded instead of on the first Update after Tilemap is loaded. (1327583)
    
*   Android: Allow Android Player to use Vulkan on GPUs that are currently unknown to Unity on Android 11 or newer.
    
*   Burst: Platform updates.
    
*   Core: Added disposal checks when enumerating NativeArray and NativeSlice instances, provided that collection checks are enabled
    
*   Graphics: Update SRP packages to 10.5.1
    
*   iOS: Use Shell.ExecuteProgramAndGetStdout for process handling in iOS automation code
    

#### Fixes

*   2D: Fixed dynamic batching for Sprite Renderers and Tilemap Renderers in Individual mode whose batching parameters should match in runtime platforms. ([1348082](https://issuetracker.unity3d.com/issues/urp-2d-tilemap-individual-mode-and-sprite-renderers-are-not-batched-in-the-build))
    
*   2D: Prevent instantiation of GameObjects from Tiles directly onto a prefab ([1334466](https://issuetracker.unity3d.com/issues/adding-rule-tile-with-default-gameobject-to-tile-palette-causes-errors-in-console))
    
*   AI: Fixed crash caused by the NavMesh builder code in very rare and specific configurations of the world geometry. ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   AI: Fixed issue where the NavMesh was generated over a mesh marked as "Not Walkable". ([1109195](https://issuetracker.unity3d.com/issues/navmesh-is-created-on-top-of-the-object-when-it-is-set-as-not-walkable-and-the-object-is-close-to-any-walkable-object))
    
*   Android: Fix all microphones reporting same recording state when bluetooth microphone is connected. ([1298249](https://issuetracker.unity3d.com/issues/android-microphones-status-is-incorret-for-microphone-dot-isrecording-api-when-connect-with-bluetooth-microphone))
    
*   Android: Fix severe disk I/O regression on Android 5.0.x. ([1287681](https://issuetracker.unity3d.com/issues/android-5-dot-0-i-slash-o-performance-resources-dot-loadasync-10-30x-slower-on-some-android-5-dot-0-x-devices))
    
*   Android: Fixed an unresponsive area just above keyboard when "Hide mobile input" was checked. ([1305663](https://issuetracker.unity3d.com/issues/android-the-area-just-above-the-pop-up-keyboard-is-nonresponsive-when-hide-mobile-input-setting-is-used))
    
*   Android: In case of fast swipes, Begin touch event will report starting touch position and End touch event will report deltaPosition and deltaTime since previous event. ([1325554](https://issuetracker.unity3d.com/issues/android-input-touch-dot-phase-is-being-reported-inaccurately-when-the-user-performs-a-fast-swipe))
    
*   Animation: Removed invalid error message when passing < 0.02f values as normalizedTime parameter to the Animator.Play function ([1311378](https://issuetracker.unity3d.com/issues/invalid-time-range-error-appears-in-the-console-when-passing-0-dot-02f-values-as-normalizedtime-parameter-to-the-animator-dot-play))
    
*   Asset Bundles: Texture Importer Inspector no longer throws errors when built-in texture inspector is overwritten. ([1317450](https://issuetracker.unity3d.com/issues/texture-importer-inspector-throws-errors-when-a-built-in-texture-inspector-is-overwritten-in-c-number))
    
*   Asset Import: Prevent data in the Assets\\StreamingAssets folder from being cached by the Unity Accelerator. ([1295717](https://issuetracker.unity3d.com/issues/long-player-build-times-when-using-the-accelerator-and-addressables-local-bundles))
    
*   Asset Importers: Fixed a crash (due to running out of VRAM) when importing many textures using DX11. ([1324536](https://issuetracker.unity3d.com/issues/editor-crashes-with-system-out-of-memory-error-when-importing-size-heavy-textures))
    
*   Asset Pipeline: Fixed a problem with old script type dependencies. In some cases they could result in (incorrect) artifact match. ([1340159](https://issuetracker.unity3d.com/issues/nested-prefabs-script-values-get-reset-to-default-when-upgrading-to-2019-dot-4-23f1-or-above))
    
*   Asset Pipeline: Fixed an issue where searching in the object selector would for some searches only show icons even if previews could be shown. ([1309396](https://issuetracker.unity3d.com/issues/object-selector-windows-size-slider-disappears-when-only-items-with-default-icon-are-in-the-list))
    
*   Audio: Fix incorrect behavior of audio filter components on game object with multiple attached audio sources. Previously the effects were only applied to the first source, now the effects are instantiated per source ([1241932](https://issuetracker.unity3d.com/issues/audiosource-playscheduled-plays-sound-at-random-intervals-with-random-variation-when-any-filter-component-is-present))
    
*   Audio: OnAudioFilterRead does not work as expected with respect to the component enable checkbox (1338710)
    
*   Audio: One of two looping sounds sometimes disappears when removing High Pass Filter Component ([1323353](https://issuetracker.unity3d.com/issues/one-of-two-looping-sounds-sometimes-disappears-when-removing-high-pass-filter-component))
    
*   Consoles: Fix ArgumentOutOfRange Exception when selecting a Console log with long strings. ([1340915](https://issuetracker.unity3d.com/issues/multiple-errors-get-thrown-when-double-clicking-on-the-debug-dot-log-messages-that-are-longer-than-16-319-characters))
    
*   Editor: Fixed a crash in ReorderableList while ensuring a valid array SerializedProperty. ([1320319](https://issuetracker.unity3d.com/issues/crash-in-serializedproperty-isvalid-when-reordering-a-serializedproperty-list))
    
*   Editor: Fixed an issue where NonReorderable attribute were being ignored on derived class variables. ([1331091](https://issuetracker.unity3d.com/issues/nonreorderable-attribute-is-ignored-when-the-list-is-in-inherited-class))
    
*   Editor: Fixed an issue where the Mac editor could crash while running tests under sudo ([1331434](https://issuetracker.unity3d.com/issues/macos-editor-crashes-on-platform-strlen-when-running-tests-that-use-application-dot-temporarycachepath-with-sudo))
    
*   Editor: Fixed Editor texture streaming breaking after doing a build. ([1327396](https://issuetracker.unity3d.com/issues/the-textures-in-the-editor-appear-blurry-when-disabling-and-re-enabling-the-texture-streaming-after-a-build-was-made))
    
*   Editor: Fixed lists inside lists not rendering elements after interaction. ([1332688](https://issuetracker.unity3d.com/issues/elements-in-the-deepest-level-disappear-when-editing-list-size-while-using-reorderable-lists-and-the-deepest-list-is-expanded))
    
*   Editor: Fixed not being able to expand ReorderableLists while in inspector debug mode. ([1316226](https://issuetracker.unity3d.com/issues/cannot-expand-a-private-list-of-variables-when-using-the-debug-inspector-mode))
    
*   Editor: Fixed slow Editor startup times when ShaderCache/EditorEncounteredVariants has grown too large. Also preventing it from growing too much. ([1330453](https://issuetracker.unity3d.com/issues/startup-time-of-the-editor-is-increased-by-2-45-s-according-to-the-size-of-library-slash-shadercache-slash-editorencounteredvariants))
    
*   Editor: Fixes context-click for reorderable lists in the mac editor. ([1313317](https://issuetracker.unity3d.com/issues/macos-context-menu-is-not-opened-when-right-clicking-on-an-array-element-in-the-inspector-window))
    
*   Editor: InspectorWindow repaint has regressed between 2017.4 and 2019.4 ([1320675](https://issuetracker.unity3d.com/issues/inspectorwindow-repaint-causes-performance-issues))
    
*   Editor: Only one click is necessary to interact with game objects in play mode when clicking between multiple game views. (1327556)
    
*   Editor: Since the picking zones were increased for touch (tablet + finger) it seems that tablet users have trouble using scrollbars because the splitter gets in the way.  
    The behavior is reverted. ([1240329](https://issuetracker.unity3d.com/issues/part-of-a-scrollbar-can-not-be-clicked-and-scrolled-because-window-starts-resizing))
    
*   GI: 'PPtr cast failed when dereferencing! Casting from ScriptMapper to Texture!' when baking a second Reflection Probe in the Scene ([1317164](https://issuetracker.unity3d.com/issues/pptr-cast-failed-when-dereferencing-casting-from-scriptmapper-to-texture-when-baking-a-second-reflection-probe-in-the-scene))
    
*   GI: Add a Gizmo for the Disc Light. ([1273193](https://issuetracker.unity3d.com/issues/hdrp-disk-light-does-not-have-a-3d-icon))
    
*   GI: Fixed Light Probe Proxy Volumes on Automatic mode not being updated, when baked probe coefficients are changed in the editor while in play mode. ([1265289](https://issuetracker.unity3d.com/issues/proxy-volume-with-refreshmode-equals-automatic-does-not-automatically-update-when-disabling-slash-enabling-baked-lighting-in-build))
    
*   Graphics: AttachmentDescriptor.ConfigureResolveTarget() screen flip fix when resolving to backbuffer ([1327936](https://issuetracker.unity3d.com/issues/frame-is-flipped-upside-down-when-using-attachmentdescriptor-dot-configureresolvetarget))
    
*   Graphics: D3D12 player will not crash/freeze when switching between full screen modes ([1318640](https://issuetracker.unity3d.com/issues/dx12-player-freezes-and-slash-or-crashes-when-switching-between-full-screen-modes))
    
*   Graphics: Encoding RFloat and RHalf to PNG, JPG or TGA now encodes to a grayscale image. ([1325643](https://issuetracker.unity3d.com/issues/encodetopng-stores-grayscale-image-as-rgb-with-the-grayscale-info-in-the-blue-channel-when-rfloat-format-is-used))
    
*   Graphics: Fix issue with GrayScaleRGBToAlpha for 16bpc textures ([1327917](https://issuetracker.unity3d.com/issues/alpha-from-grayscale-doesnt-work-when-the-source-texture-is-a-16-bit-per-channel-png-file))
    
*   Graphics: Fix occasional error message if getting trail positions from script. ([1335899](https://issuetracker.unity3d.com/issues/trailrenderer-dot-setposition-will-log-a-index-out-of-bounds-error-when-index-is-in-bounds-of-the-positioncount-property))
    
*   Graphics: Fixed FrameDebugger to pause the frame fully when debugging session is active. ([1315256](https://issuetracker.unity3d.com/issues/android-frame-debugger-player-is-not-pausing-when-frame-debugger-is-enabled-and-mesh-renderers-are-toggled-through-animation))
    
*   Graphics: Fixed inconsistency in anisotropic level setting across temporary RenderTextures (1319319)
    
*   Graphics: When dynamic scaling is enabled and a Render Target is attached to a Camera the ScreenTo and ToScreen functions no longer use the scaled viewport size, instead match the behaviour when a Render Target isn't attached as per the documentation. ([1329240](https://issuetracker.unity3d.com/issues/camera-dot-worldtoscreenpoint-is-producing-different-behavior-with-dynamic-resolution))
    
*   IL2CPP: Avoid possible memory corruption when a generic field is of a type which has an explicit layout, and the generic type has another type with explicit layout as a field. (1337921)
    
*   IL2CPP: Correct crash when calling DynamicInvoke on a delegate returned from Marshal.GetDelegateForFunctionPointer() ([1335306](https://issuetracker.unity3d.com/issues/android-il2cpp-app-crashes-when-using-monopinvokecallback-attribute-in-a-project-with-an-il2cpp-scripting-backend))
    
*   IL2CPP: Correct managed stack traces on PS5. (1333937)
    
*   IL2CPP: Fixed issue that would cause IL2CPP builds to fail when the project or build path contains unicode characters. (1341647)
    
*   IL2CPP: Prevent a required System.Uri constructor from being stripped in Medium or High stripping modes. ([1338763](https://issuetracker.unity3d.com/issues/uwp-fails-build-linq-error))
    
*   IL2CPP: Prevent an crash in the runtime when a managed thread object that has been destroyed is used from a finalizer. ([1341024](https://issuetracker.unity3d.com/issues/il2cpp-crash-when-clearing-up-tcp-threads-in-an-object-finalizer))
    
*   IL2CPP: Properly handle unaligned reads and writes which occur in the System.Runtime.CompilerServices.Unsafe.dll assembly (among others) on ARMv7. ([1343375](https://issuetracker.unity3d.com/issues/android-il2cpp-data-misalignment-crash-in-deserializing-google-protobuf-message-field))
    
*   iOS: Fix password input cleared on first character when touch keyboard input is hidden ([1251498](https://issuetracker.unity3d.com/issues/tmp-ios-password-input-field-with-hidden-mobile-input-deletes-characters-after-re-focus))
    
*   iOS: Fixed crash when using several Application.RequestUserAuthorization in coroutine ([1323715](https://issuetracker.unity3d.com/issues/ios-crash-on-scriptinggchandle-acquire-when-calling-requestuserauthorization-with-an-already-pending-request))
    
*   iOS: Fixed video becoming unplayable after resuming an app when video's audio output mode is set to API Only. ([1330901](https://issuetracker.unity3d.com/issues/ios-video-freezes-after-locking-and-unlocking-a-phone))
    
*   iOS: Stop swallowing input on native UITextField when using UaaL and Bluetooth keyboards. ([1332925](https://issuetracker.unity3d.com/issues/uaal-ios-native-ios-uitextfields-do-not-respond-to-an-external-bluetooth-keyboard))
    
*   License: Fix Licensing Client signature check in the Editor
    
*   Linux: Backported fix for case 1318271. Fixed mouse reported mouse position being off the by size of the main menu bar in the y-axis ([1318271](https://issuetracker.unity3d.com/issues/linux-input-system-editor-does-not-return-correct-mouse-position-values-when-using-position-dot-readvalue))
    
*   Linux: Fixed issue where adding a new shortcut profile crashes the Editor. ([1334874](https://issuetracker.unity3d.com/issues/editor-crashes-at-gfxframebuffergles-setbackbuffercolordepthsurface-or-freezes-when-creating-a-new-shortcut-profile))
    
*   Networking: UnityWebRequest now supports gzip compression on Windows. ([1343274](https://issuetracker.unity3d.com/issues/unitywebrequest-fails-on-windows-if-gzip-compression-is-used))
    
*   Networking: UnityWebRequest: fix error in console when certificate handler is used. ([1337750](https://issuetracker.unity3d.com/issues/forcedscopedthreadattach-error-is-thrown-when-sending-a-unitywebrequest-with-a-custom-certificatehandler))
    
*   Package Manager: Fixed an issue where removing a project dependency using `PackageManager.Client.Remove` would throw an error when the project manifest has no dependencies property. ([1324067](https://issuetracker.unity3d.com/issues/unityeditor-dot-packagemanager-dot-client-dot-remove-returns-confusing-error-when-project-manifest-does-not-have-a-dependencies-property))
    
*   Package Manager: Fixed issue where user can't view assets in Package Manager (error 400) (1330334)
    
*   Package Manager: Installing samples no longer throws a warning in the console. (1336144)
    
*   Package Manager: Removed function call traces from `upm.log` file. ([1331947](https://issuetracker.unity3d.com/issues/upm-dot-log-shows-minified-function-names-at-debug-logging-level))
    
*   Particles: Fixed an occasional error message and invalid bounding box, when using the Collision Module in Planes mode. ([1282268](https://issuetracker.unity3d.com/issues/invalid-worldaabb-errors-are-thrown-when-using-particle-system-with-collision-enabled-and-multiple-planes))
    
*   Physics: Clamp ArticulationBody mass when loading data from disk, so that it is within the valid range for the physics engine ([1316719](https://issuetracker.unity3d.com/issues/invalid-aabb-error-when-entering-play-mode-with-a-robot-imported-using-urdf-importer))
    
*   Physics: Corrected contact event behavior for the ArticulationBody component so that it matches Rigidbody component behavior. ([1339908](https://issuetracker.unity3d.com/issues/physics-articulation-body-collision-doesnt-call-oncollisionenter-when-listening-from-parent-and-colliding-with-child))
    
*   Physics: Fix a crash in "PhysicsScene2D::UpdateJoints()". ([1342152](https://issuetracker.unity3d.com/issues/crash-in-fixedjoint2d-when-playing-in-player))
    
*   Prefabs: Fixed cannot move/rotate/scale static objects in Prefab Mode when playing. ([1343040](https://issuetracker.unity3d.com/issues/cannot-move-slash-rotate-slash-scale-static-objects-in-prefab-mode-when-playing))
    
*   Profiler: Fixed long running IJobs not showing up in the Profiler ([1288665](https://issuetracker.unity3d.com/issues/long-running-ijobs-are-not-showing-up-in-the-profiler))
    
*   PS5: Fix a crash that can occur in ReadbackImage with a R8 texture format (1348451)
    
*   Scripting: Fix a rare crash in il2cpp.exe that could randomly happen under the right circumstances ([1336887](https://issuetracker.unity3d.com/issues/build-fails-with-il2cpp-error-system-dot-void-system-dot-collections-dot-concurrent-dot-concurrentqueue-1-enqueueslow-t-in-mscorlib-dot-dll))
    
*   Scripting: Fix hang in UnityLinker that could happen processing a NullableAttribute ([1339078](https://issuetracker.unity3d.com/issues/il2cpp-build-is-stuck-at-stripping-assemblies-when-number-nullable-enable-and-iserializationcallbackreceiver-is-used))
    
*   Scripting: Fixed "GetResponseStream() errors when using CopyTo() method". ([1337986](https://issuetracker.unity3d.com/issues/getresponsestream-errors-when-using-copyto-method))
    
*   Scripting: Fixed an AssemblyResolutionException from il2cpp about netstandard that could occur when an assembly contained SecurityPermission attributes. (1311865)
    
*   Scripting: Fixed an issue where \[RuntimeInitializeOnLoad\] was ignored when placed on nested and namespaced class. ([962800](https://issuetracker.unity3d.com/issues/runtimeinitializeonloadmethod-is-not-called-if-it-is-part-of-nested-class))
    
*   Scripting: Fixed crash when closing the editor after a failed AssetBundle.LoadFromStreamAsync operation. ([1331280](https://issuetracker.unity3d.com/issues/crash-after-closing-the-editor-when-broken-asset-bundle-is-loaded-asynchronously))
    
*   Serialization: Fix UnityYAML parsing issue with a TextAsset containing JSON payload. ([1334277](https://issuetracker.unity3d.com/issues/yaml-text-asset-throws-parsing-error-when-selecting-it))
    
*   Shaders: Fixed DIRECTIONAL being defined to nothing when no other light type is defined ([1342654](https://issuetracker.unity3d.com/issues/shader-error-in-wolf-slash-diffuse-cutout-invalid-conditional-expression-at-line-202-is-thrown-when-reimporting-the-shader))
    
*   Shaders: Fixed line directives sometimes erroneously skipped in output by the caching preprocessor ([1340531](https://issuetracker.unity3d.com/issues/caching-shader-preprocessor-does-not-handle-number-line-directives-properly))
    
*   Shaders: Shaders are now reimported correctly when include directives are affected by shader keywords. ([1333654](https://issuetracker.unity3d.com/issues/included-shader-dependencies-are-not-recompiled-when-performing-hot-reload-and-the-include-statement-is-excluded-using-keywords))
    
*   Terrain: Fixed crash caused by setting TreeInstances on Terrain in between the time Terrains are culled and the time Trees are rendered ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   UI: Backout a optimization of caching the change count where the layout is changed during a layout call. ([1324089](https://issuetracker.unity3d.com/issues/ui-layout-is-distorted-when-scaling-using-sizedelta))
    
*   UI Toolkit: A panel remains responsive to user interactions even if it contains elements with huge dimensions. ([1324728](https://issuetracker.unity3d.com/issues/ui-toolkit-ui-becomes-unresponsive-after-setting-its-width-to-1-dot-0e-plus-11-and-higher-percentage-value))
    
*   UI Toolkit: Fixed read only fields mouse dragger ([1337002](https://issuetracker.unity3d.com/issues/read-only-fields-can-be-modified-with-the-mouse-dragger))
    
*   URP: Fixed a performance issue in Hololens when using renderer with custom render passes.
    
*   URP: Fixed ordering of subshaders in the Unlit Shader Graph, such that shader target 4.5 takes priority over 2.0.
    
*   WebGL: Fix playback of videos on iOS ([1288692](https://issuetracker.unity3d.com/issues/webgl-ios-video-is-not-playing-on-ios))
    
*   WebGL: Fixed a WebAssembly trap when a touch point got canceled on mobile devices. ([1262657](https://issuetracker.unity3d.com/issues/webgl-2-dot-0-ios-13-application-on-browser-crashes-when-trying-to-minimize-the-browser-out-of-bounds-trunc-operation))
    
*   WebGL: Improved error messages that are printed when a build to WebGL fails. ([1245847](https://issuetracker.unity3d.com/issues/webgl-il2cpp-development-builds-fail-on-unity-dot-webgl-dot-extensions-slash-programutils-dot-cs-48-when-building-for-webgl-slash-il2cpp))
    
*   XR: Splash screen now sends correct zNear and zFar values to XRDisplaySystem (1349851)
    
*   XR: Updated OpenXR package to 1.2.3
    
*   XR: \[OpenXR\]Fix for Editor memory leak when HMD is in idle state ([1344762](https://issuetracker.unity3d.com/issues/xr-openxr-editor-leaks-memory-when-hmd-is-in-idle-state-and-then-crashes-on-logtoconsoleimplementation-when-exiting-play-mode))

### Known Issues in 2020.3.15f2

*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Asset Import Pipeline: Editor crashes while exiting play mode ([1328667](https://issuetracker.unity3d.com/issues/editor-crashes-while-exiting-play-mode))
    
*   Asset Importers: \[MacOS\] Second Unity instance in Activity Monitor is "not responding” after importing ([1331736](https://issuetracker.unity3d.com/issues/macos-second-unity-instance-in-activity-monitor-is-not-responding-after-importing))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Graphics Device Backends: CommandBuffer native plugin events hang in the Editor ([1308216](https://issuetracker.unity3d.com/issues/commandbuffer-native-plugin-events-hang-in-the-editor))
    
*   IMGUI: Editor's Toolbar is sometimes replaced by a white bar when opening any Scene ([1341951](https://issuetracker.unity3d.com/issues/white-screen-replaces-the-play-scale-position-bars-editor-cannot-play))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Linux: Editor crashes at 'GfxFramebufferGLES::SetBackBufferColorDepthSurface' or freezes when creating a new shortcut profile ([1334874](https://issuetracker.unity3d.com/issues/editor-crashes-at-gfxframebuffergles-setbackbuffercolordepthsurface-or-freezes-when-creating-a-new-shortcut-profile))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile: \[Android\] Using TouchScreenKeyboard.Open with a non-empty placeholder multiple times causes the app to crash ([1347370](https://issuetracker.unity3d.com/issues/android-using-touchscreenkeyboard-dot-open-with-a-non-empty-placeholder-multiple-times-causes-the-app-to-crash))
    
*   Mobile Graphics: \[iOS\] Player crashing when connecting external Display via USB-C port ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   Mono: Crash on "(KERNELBASE) RaiseException" when reloading Mono assemblies for play mode ([1289744](https://issuetracker.unity3d.com/issues/crash-when-entering-play-mode-1))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Themes: Object Selector windows size slider disappears when only items with default icon are in the list ([1309396](https://issuetracker.unity3d.com/issues/object-selector-windows-size-slider-disappears-when-only-items-with-default-icon-are-in-the-list))
    
*   Video: Video player fails to start playing and null handle errors are thrown when running Unity Editor/Build with specific hardware ([1237818](https://issuetracker.unity3d.com/issues/video-player-fails-to-start-playing-and-null-handle-errors-are-thrown-when-running-unity-editor-slash-build-with-specific-hardware))
    
*   Vulkan: \[Editor\] The Scene's GameObjects textures are seemingly random and change colours depending on the Scene's Camera pos. ([1337772](https://issuetracker.unity3d.com/issues/vulkan-editor-the-scenes-gameobjects-textures-are-seemingly-random-and-change-colours-depending-on-the-scenes-camera-pos))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    

### 2020.3.15f2 Release Notes

#### Features

*   Android: Users can include custom asset packs into the build, by adding assets to the directory ending with '.androidpack'.
    
*   Android: When building Android App Bundle with Split App Binary enabled, Unity will create asset packs.
    
*   Version Control: - Plastic: Added support for inviting other members. This option is available from the gear / settings icon.
    
    *   Plastic: Added support for signing in with Cloud Edition. This is available during the onboarding screen if you have never signed in.
        
    *   Plastic: Added support for turning off Plastic in their project. This option removes the Plastic metadata from your directory. This option is available under Assets > Plastic SCM > Turn off Plastic SCM
        
    *   Plastic: Added notification on the Plastic SCM tab title to indicate incoming changes. Users will no longer need to have the Plastic SCM window visible to know there are incoming changes.
        
    *   Plastic: Auto configuration of SSO
        
    *   Plastic: Added date column in incoming changes
        

#### Improvements

*   Version Control: - Stability and performance improvements

#### API Changes

*   Android: Added: New APIs to manage fast-follow and on-demand delivered asset packs. The APIs wrap Google's PlayCore functionality.

#### Changes

*   Android: Android Gradle Plugin version upgraded from 3.6.0 to 4.0.1.
    
*   Android: Gradle version upgraded from 5.6.4 to 6.1.1.
    
*   Version Control: ### Changed
    
    *   Updating license to better conform with expected customer usage.
        
    *   Updated documentation file to meet standards.
        
    *   Updated third-party usage.
        
    *   No longer requires downloading of the full Plastic client. Basic features will work without additional installation. Features that require the full Plastic client will allow download and install as needed.
        
    *   Usability improvements around checking in code
        
    *   Improved update workspace tab UX
        
    *   Plastic SCM context menu is now available even if the Plastic SCM window is closed
        

#### Fixes

*   Android: Fixed a crash caused by uncaught "java.lang.IllegalStateException: The specified child already has a parent" that mainly affects Android 7.x ([1347211](https://issuetracker.unity3d.com/issues/android-crash-with-java-dot-lang-dot-illegalstateexception-the-specified-child-already-has-a-parent))
    
*   License: Fix Licensing Client signature check in the Editor that led to some licenses not being accepted.

### Known Issues in 2020.3.14f1

*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Asset Import Pipeline: Editor crashes while exiting play mode ([1328667](https://issuetracker.unity3d.com/issues/editor-crashes-while-exiting-play-mode))
    
*   Asset Importers: \[MacOS\] Second Unity instance in Activity Monitor is "not responding” after importing ([1331736](https://issuetracker.unity3d.com/issues/macos-second-unity-instance-in-activity-monitor-is-not-responding-after-importing))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: \[LightProbes\] Probes lose their lighting data after entering Play mode when Baked and Realtime GI are enabled ([1052045](https://issuetracker.unity3d.com/issues/light-probes-lose-their-lighting-data-after-entering-play-mode-when-baked-and-realtime-gi-are-enabled))
    
*   Graphics Device Backends: CommandBuffer native plugin events hang in the Editor ([1308216](https://issuetracker.unity3d.com/issues/commandbuffer-native-plugin-events-hang-in-the-editor))
    
*   IMGUI: Editor's Toolbar is sometimes replaced by a white bar when opening any Scene ([1341951](https://issuetracker.unity3d.com/issues/white-screen-replaces-the-play-scale-position-bars-editor-cannot-play))
    
*   Linux: Editor crashes at 'GfxFramebufferGLES::SetBackBufferColorDepthSurface' or freezes when creating a new shortcut profile ([1334874](https://issuetracker.unity3d.com/issues/editor-crashes-at-gfxframebuffergles-setbackbuffercolordepthsurface-or-freezes-when-creating-a-new-shortcut-profile))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile Graphics: \[iOS\] Player crashing when connecting external Display via USB-C port ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Video: Video player fails to start playing and null handle errors are thrown when running Unity Editor/Build with specific hardware ([1237818](https://issuetracker.unity3d.com/issues/video-player-fails-to-start-playing-and-null-handle-errors-are-thrown-when-running-unity-editor-slash-build-with-specific-hardware))
    
*   WebGL: \[iOS\] Video is not playing ([1288692](https://issuetracker.unity3d.com/issues/webgl-ios-video-is-not-playing-on-ios))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    

### 2020.3.14f1 Release Notes

#### Features

*   Mobile: Adaptive view distance scaler - A new scaler to change the Camera.main view distance automatically.
    
*   Mobile: Boost mode - Boost CPU and GPU for short periods of time.
    
*   Mobile: Cluster info - Request cluster info to have details which and how many cores are available on the device.
    
*   Mobile: Feature API - Check which Adaptive Performance feature is available on the current platform.
    
*   Mobile: Scaler profiles - Easily define and change Adaptive Performance Scalers with predefined profiles.
    
*   Stadia: Added support for Orbit Profiler
    

#### Improvements

*   2D: Potentially improves performance when importing large number of textures.
    
*   Physics: Added units of measurement to the Articulation Body properties in the scripting documentation
    
*   XR: Update OpenXR Package to 1.2.2
    

#### Changes

*   2D: Fixed an issue where Edge collider 2D and polygon collider 2D create different collision shapes during playmode for SpriteShape. (1321978)
    
*   2D: Fixed case where SpriteShape generates Edge Colliders with deformed corners. ([1293760](https://issuetracker.unity3d.com/issues/sprite-shape-generates-edge-colliders-with-deformed-corners))
    
*   2D: Fixed case where vertex data allocation may not be enough and overflows for SpriteShape ([1319096](https://issuetracker.unity3d.com/issues/2d-spriteshape-at-certain-cases-vertex-data-allocation-may-not-be-enough-and-overflows))
    
*   2D: PSDImporter packge now requires minimum version of Unity 2020.3.9f1
    

#### Fixes

*   2D: Fixed existing Tile data in Tilemap not clearing when refreshing Tilemap due to editor validation. ([1272540](https://issuetracker.unity3d.com/issues/crash-without-a-stacktrace-when-moving-tilemap-brush-in-the-scene-window))
    
*   2D: Fixed PSDImporter reimports when switching platform. ([1327701](https://issuetracker.unity3d.com/issues/2d-psd-importer-always-reimports-psb-files-when-switching-build-platforms))
    
*   2D: Fixed SpriteResolver generates garbage every few frames when playing an animation ([1337463](https://issuetracker.unity3d.com/issues/2d-spriteresolver-generates-garbage-every-few-frames-when-playing-an-animation))
    
*   2D: Fixed Unable to remove Empty Category in Sprite Editor after changing Sprite Layer name with external image editor. ([1328475](https://issuetracker.unity3d.com/issues/unable-to-remove-empty-category-in-sprite-editor-after-changing-sprite-layer-name-with-external-image-editor))
    
*   2D: Fixed vertices winding order for square polygonal Sprite generation. ([1289069](https://issuetracker.unity3d.com/issues/the-square-sprite-is-facing-the-opposite-direction-when-a-standard-material-is-applied-to-it))
    
*   AI: Fixed OffMeshLink and NavMeshLink sometimes not automatically reconnecting after navigation mesh carving. (1287238)
    
*   Android: Fixed compositor error log when using linear rendering on some MediaTek/PowerVR SoCs. ([1330183](https://issuetracker.unity3d.com/issues/android-device-logs-color-format-for-dp-is-invalid-when-deploying-with-linear-color-space))
    
*   Android: Fixed issue where Unity editor does not update gradle.properties file if export destination folder already contains this file. (1308437)
    
*   Android: Fixed label for Proguard template. ([1316757](https://issuetracker.unity3d.com/issues/custom-progruard-file-name-in-the-project-settings-does-not-match-with-the-created-file-in-project-windows))
    
*   Animation: Fixed a regression caused when overriding and animator controller. ([1271499](https://issuetracker.unity3d.com/issues/animator-state-is-lost-when-animatoroverridecontroller-is-set))
    
*   Animation: Fixed an issue where Animations played in Timeline with offsets would play incorrectly in some Avatar/Humanoid setups. ([1295759](https://issuetracker.unity3d.com/issues/gameobject-position-changes-during-transitions-in-timeline-preview))
    
*   Animation: Fixed performance regression when updating curves in Animation Window. ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   Asset Pipeline: Fixed issue where "GetRequiredComponents result must be in cache, if requested from non-main thread." assert got raised, when downloading asset from cache server. (1338565)
    
*   Audio: Fixed adding mixer groups or snapshots would trigger a "generated inconsistent result" asset import warning in the console. ([1319518](https://issuetracker.unity3d.com/issues/audio-inconsistent-result-for-asset-warning-appears-on-adding-creating-new-groups-or-snapshots))
    
*   Audio: Implemented missing reset functionality for AudioGroups. ([1256250](https://issuetracker.unity3d.com/issues/audio-reset-does-not-work-for-any-effect-added-in-audio-mixer))
    
*   Core: Fixed a bug that caused incremental garbage collection to sometimes fail to use all of the available spare time before vsync. (1329186)
    
*   Editor: Fixed ArgumentOutOfRangeException in TreeView when collapsing rows in quick succession. ([1315468](https://issuetracker.unity3d.com/issues/profiler-argumentoutofrangeexception-gets-thrown-in-the-console-when-folding-a-large-amount-of-entries))
    
*   Editor: Fixed empty reason on passed tests results xml (DSTR-63).
    
*   Editor: Fixed issue when `.` suffix was applied to BuildTargets without extension.
    
*   Editor: Fixed Repeat and Retry attribute for UnityTest in PlayMode (DSTR-237).
    
*   Editor: Improved Inspector Preview performance for complex prefabs. ([1295887](https://issuetracker.unity3d.com/issues/gameobject-slash-prefab-inspector-preview-is-slow-for-complex-hierarchies))
    
*   Editor: Will no longer show the static batching with instancing shaders warning when static batching is disabled for the current build platform. ([1332277](https://issuetracker.unity3d.com/issues/this-renderer-uses-static-batching-and-instanced-shaders-warning-is-thrown-even-when-static-batching-is-disabled))
    
*   GI: Fixed a playmode editor freeze when viewing the inspector for an instantiated GI-contributing object marked as DontDestroyOnLoad. ([1094243](https://issuetracker.unity3d.com/issues/unity-freezes-on-lightmapeditorsettings-haszeroareamesh-renderer-when-selecting-certain-game-objects-in-the-scene-view))
    
*   GI: Fixed an issue where reflection probes must be rebaked twice to update when using the "Generate Lighting" button in the lighting tab. ([1334283](https://issuetracker.unity3d.com/issues/reflection-probes-must-be-rebaked-twice-to-update-when-using-generate-lighting-button))
    
*   GI: Fixed black baked reflection probes when using non-progressive baking. ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   GI: Fixed lighting data being lost when enter play mode with scene reloading disabled. ([1184204](https://issuetracker.unity3d.com/issues/hdrp-lighting-is-not-applied-correctly-after-using-progressive-lightmapper-when-scene-reload-is-disabled-in-project-settings))
    
*   Graphics: Fixed a crash when importing large projects on DX12. ([1265099](https://issuetracker.unity3d.com/issues/crash-on-tiledtexturemanager-createtexture-when-importing-or-reimporting-a-large-amount-of-assets-in-one-batch))
    
*   Graphics: Fixed camera velocity property for SRPs. ([1302527](https://issuetracker.unity3d.com/issues/urp-particles-are-not-stretched-according-relative-to-camera-when-particle-system-render-mode-is-set-to-stretched-billboard))
    
*   Graphics: Fixed loading Renderdoc causing textures to disappear in the texture inspector. (1296238)
    
*   Graphics: Fixed terrain crashing when SRP package is deleted from project. ([1321411](https://issuetracker.unity3d.com/issues/crash-on-terrain-updatesplatmaterials-when-removing-universal-rp-package-with-terrain-lit-material))
    
*   Graphics: Get default terrain material for the active pipeline when opening a scene with terrain in it. ([1332937](https://issuetracker.unity3d.com/issues/terrain-shader-is-not-saved-when-restarting-the-editor-after-upgrading-materials-to-srp))
    
*   IL2CPP: Fixed rare compilation error on usage of IsInst on a value type. ([1328551](https://issuetracker.unity3d.com/issues/il2cpp-project-with-specific-dlls-build-fails-due-to-errors-in-il2cpp-generated-code))
    
*   iOS: Fixed crash when closing app while still loading ODR. ([1289143](https://issuetracker.unity3d.com/issues/ios-crash-when-closing-the-app-while-loading-data-from-odr))
    
*   Networking: Fixed il2cpp stripping potentially making ReceiveContentLength not called on custom download handler. (1282106)
    
*   Package Manager: Fixed 401 Response code when user tries to download a paid asset store package in My Assets.  
    Check ToS agreement before download and redirect user to Asset Store web page in order to read and accept terms. ([1335976](https://issuetracker.unity3d.com/issues/package-manager-slash-my-assets-401-response-code-trying-to-download-a-paid-asset-store-package))
    
*   Particles: Fixed nto correctly support 16-bit vertex attributes in CPU mesh particle rendering. ([1340944](https://issuetracker.unity3d.com/issues/particle-system-renderer-mesh-artefacts-when-position-slash-normal-attributes-are-set-to-float16))
    
*   Physics: Fixed a single issue where it's impossible to edit either an EdgeCollider2D or PolygonCollider2D when the Transform Scale Z is zero. ([1339608](https://issuetracker.unity3d.com/issues/2d-collider-cant-be-edited-when-it-is-inside-the-nested-gameobject))
    
*   Physics: Improve the stability of the HingeJoint2D angular lower/upper limits when using higher motor/external forces. ([1339471](https://issuetracker.unity3d.com/issues/hingjoint2d-overextends-angle-limits-when-motor-speed-values-are-high))
    
*   Scripting: Fix .Net Ping.Send() throwing NotSupportedException. ([1329962](https://issuetracker.unity3d.com/issues/dot-net-ping-dot-send-throws-notsupportedexception))
    
*   Scripting: Fixed 'ArgumentException: method arguments are incompatible' exception when trying to invoke UnityEvent on non existent object. ([1324289](https://issuetracker.unity3d.com/issues/argumentexception-method-arguments-are-incompatible-error-is-not-pointing-to-the-object-which-is-generating-the-error))
    
*   Scripting: Fixed change of Asmdef from Editor Only to also Runtime Compatible would not update Scripts associated, so you can't drag and drop without a reimport. (1323079)
    
*   Scripting: Fixed crash when generic type derives from abstract MonoBehaviour. ([1333819](https://issuetracker.unity3d.com/issues/editor-crashes-on-mono-log-write-logfile-when-opening-a-project))
    
*   Scripting: Fixed editor crash when a script has a never ending recursion. ([1339503](https://issuetracker.unity3d.com/issues/editor-crashes-on-mono-log-write-logfile-when-a-script-has-a-never-ending-recursion))
    
*   Scripting: Fixed managed code stripping issue due to reflection in com.unity.vectorgraphics. ([1327800](https://issuetracker.unity3d.com/issues/il2cpp-vector-graphics-buildsprite-fails-when-using-il2cpp-backend))
    
*   Scripting: Fixes Time.unscaledDeltaTime from returning negative values when OnDemandRendering is used. (1329148)
    
*   Scripting: When environment variable UNITY\_DIAG\_ENABLE\_DOMAIN\_RELOAD\_TIMINGS is set, write detailed timings on everything happening within domain reloads to the editor logs. (1328820)
    
*   Shaders: Fixed SRP batcher not working on OpenGL and OpenGL ES backends. ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   UI Elements: Fixed drawing behavior when multiple inspectors are opened and multiple objects are selected.
    
*   UI Toolkit: A visual element can use the experimental animation feature with an empty StyleValues instance without triggering a NullReferenceException. ([1337074](https://issuetracker.unity3d.com/issues/stylevalues-throws-nullreferenceexception-when-created-using-default-constructor))
    
*   UI Toolkit: Fixed disabled state not showing properly after hierarchical changes were applied. ([1321042](https://issuetracker.unity3d.com/issues/visual-element-enabling-and-disabling-causes-disabled-element-to-not-be-greyed-out))
    
*   UI Toolkit: Fixed issue with inspector fields failing to get focused when clicked depending on neighboring fields. ([1335344](https://issuetracker.unity3d.com/issues/serialized-attribute-cannot-be-focused-and-written-in-when-it-goes-after-textarea-field))
    
*   VFX Graph: Fixed possible crash with sorting on particle system without kill. ([1333851](https://issuetracker.unity3d.com/issues/unity-editor-crashes-when-opening-a-scene-with-specific-visual-effects-componenets))
    
*   VFX Graph: Fixed unexpected missing binding of deadElementCount dispatching sort. ([1311837](https://issuetracker.unity3d.com/issues/dx12-compute-shader-sort-property-deadelementcount-at-kernel-index-0-when-building-player-with-vfx-multi-mesh))
    
*   Video: Calling VideoPlayer.Prepare and VideoPlayer.StepForward produces a frame on a Render Texture. ([1318270](https://issuetracker.unity3d.com/issues/calling-videoplayer-dot-prepare-and-videoplayer-dot-stepforward-produces-a-frame-on-a-render-texture))
    
*   Video: Fixed audio delay when pausing VideoPlayer. ([1316817](https://issuetracker.unity3d.com/issues/android-audio-is-only-stopped-after-a-delay-when-videoplayer-dot-pause-is-called))
    
*   Video: Fixed audio is desynchronized when playing via AudioSource. ([1304061](https://issuetracker.unity3d.com/issues/android-video-players-audio-is-delayed-when-audio-output-mode-is-set-to-audio-source))
    
*   Video: Fixed audio plays during VideoPlayer.Prepare. ([1316819](https://issuetracker.unity3d.com/issues/android-a-few-frames-of-audio-is-played-when-videoplayer-dot-prepare-is-called-with-audio-output-mode-set-to-audio-source))
    
*   WebGL: Add frame timing stats setting to WebGL player settings and add a warning for WebGL 1 in 2020.3. (1297871)
    
*   WebGL: Added warning to High Quality Lightmap Encoding setting in WebGL Player Settings. (1290512)
    
*   WebGL: Fixed use after free of m\_Context in GfxDeviceGLES destructor. ([1204734](https://issuetracker.unity3d.com/issues/urp-webgl-memory-access-out-of-bounds-exceptions-are-thrown-when-calling-quit-function-on-webgl-build-through-webpage))
    
*   XR: Fixed an issue where custom XR packages would not get registered when running the Unity Editor using the -batchmode argument. ([1334517](https://issuetracker.unity3d.com/issues/xr-sdk-openvr-xr-plug-in-provider-is-not-enabled-when-project-is-ran-in-batch-mode))

### Known Issues in 2020.3.13f1

*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Asset Import Pipeline: Editor crashes while exiting play mode ([1328667](https://issuetracker.unity3d.com/issues/editor-crashes-while-exiting-play-mode))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   Asset Importers: \[MacOS\] Second Unity instance in Activity Monitor is "not responding” after importing ([1331736](https://issuetracker.unity3d.com/issues/macos-second-unity-instance-in-activity-monitor-is-not-responding-after-importing))
    
*   Audio: Crash on AudioMixer\_CUSTOM\_FindSnapshot when passing null as an argument to FindSnapshot() ([1341752](https://issuetracker.unity3d.com/issues/crash-on-audiomixer-custom-findsnapshot-when-passing-null-as-an-argument-to-findsnapshot))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Global Illumination: Reflection probes must be rebaked twice to update when using "Generate Lighting" button ([1334283](https://issuetracker.unity3d.com/issues/reflection-probes-must-be-rebaked-twice-to-update-when-using-generate-lighting-button))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Linux: Editor crashes at 'GfxFramebufferGLES::SetBackBufferColorDepthSurface' or freezes when creating a new shortcut profile ([1334874](https://issuetracker.unity3d.com/issues/editor-crashes-at-gfxframebuffergles-setbackbuffercolordepthsurface-or-freezes-when-creating-a-new-shortcut-profile))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile Graphics: \[iOS\] Player crashing when connecting external Display via USB-C port ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Video: Video player fails to start playing and null handle errors are thrown when running Unity Editor/Build with specific hardware ([1237818](https://issuetracker.unity3d.com/issues/video-player-fails-to-start-playing-and-null-handle-errors-are-thrown-when-running-unity-editor-slash-build-with-specific-hardware))
    
*   WebGL: \[iOS\] Video is not playing ([1288692](https://issuetracker.unity3d.com/issues/webgl-ios-video-is-not-playing-on-ios))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    

### 2020.3.13f1 Release Notes

#### Improvements

*   Asset Import: Improved mobile ASTC texture compression performance (about 3.5 times faster now).
    
*   Editor: Opening scenes with ASTC compressed textures (e.g. while in mobile platform) is faster now; the ASTC decompression is about 7 times faster than before.
    
*   iOS: Ignore plugins with wrong CPU type when creating xcode project, e.g. when building for run on device, libraries having CPU type "x64" (i.e. simulator libraries) will be ignored
    
*   Scripting: Update com.unity.ide.visualstudio to version '2.0.9'.
    
*   Shaders: Improved logging when compiling shader variants. ([1338590](https://issuetracker.unity3d.com/issues/misleading-shader-compilation-logging-message))
    

#### Changes

*   Package: Update Purchasing package to 3.2.2 version. Please refer to the package changelog online here: https://docs.unity3d.com/Packages/com.unity.purchasing@3.2/changelog/CHANGELOG.html

#### Fixes

*   AI: Fixed crash when selecting the Navigation Window in the Editor. (1330235)
    
*   AI: Fixed NavMeshObstacle inspector when viewed in non-wide mode. ([1330842](https://issuetracker.unity3d.com/issues/labels-overlap-in-navmeshobstacle-inspector-when-shape-is-set-to-box-and-inspectors-width-is-small))
    
*   Android: Fixed issue where a too large no compress settings list would break apk build procedure. ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   Asset Pipeline: Fixed an issue that could cause assets with dependencies to be imported out-of-order. (1331373)
    
*   Documentation: Fixed html issue in TestRunnerApi API code snippet.  
    Fixed a typo issue in PreBuildSetup code example.  
    Fixed incorrect syntax in command line reference.
    
*   Editor: ASTC texture compression should be platform and hardware invariant now (i.e. produce exactly the same results between AMD and Intel CPUs for example, which was not always the case before). ([1307140](https://issuetracker.unity3d.com/issues/asset-bundles-assets-have-different-crcs-when-built-on-diferent-editor-versions-or-operating-systems))
    
*   Editor: Fixed a regression in error message when MonoBehaviour class name don't match the file name. (1328619)
    
*   Editor: Fixed an issue where the Editor Script extending GameView function like Device Package in Non-English(e.g. Japanese) raised exceptions every frame. ([1275960](https://issuetracker.unity3d.com/issues/gameview-stop-working-with-devicesimulator-installed-when-editor-is-in-different-language-japanese))
    
*   Editor: Fixed repaint issues for modal editor windows upon opening them from the project window context menu. ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Editor: Fixed repaint issues for non-modal windows while a modal window was up. ([1323381](https://issuetracker.unity3d.com/issues/parts-of-a-parent-editor-window-become-black-when-launching-a-child-editor-window-from-it))
    
*   GI: Fixed the available memory tracker when using multiple nvidia GPUs and the GPU Lightmapper. ([1313094](https://issuetracker.unity3d.com/issues/bakecontextmanager-refreshgpumemorystatus-return-wrong-values-when-baking-lightmaps-on-any-nvidia-gpu-other-than-primary-gpu))
    
*   Graphics: Fixed a batching for instancing issue when all objects were lit by the same (<8) lights. ([1313977](https://issuetracker.unity3d.com/issues/xr-quest-urp-increasing-the-amount-of-real-time-lights-breaks-gpu-instancing))
    
*   Graphics: Fixed an issue that caused MSAA to not work correctly in URP on Oculus Quest. ([1327973](https://issuetracker.unity3d.com/issues/xr-urp-quest-msaa-doesnt-get-applied-when-using-opaque-textures))
    
*   Graphics: Fixed an issue where Mesh.SetSubMeshes with NativeArray would ignore MeshUpdateFlags argument. ([1330299](https://issuetracker.unity3d.com/issues/cant-recalculate-bounds-dot-dot-dot-warnings-on-mesh-dot-setsubmeshes-using-nativearray-with-dontrecalculatebounds-flag))
    
*   Graphics: Fixed an issue where setting a camera's target texture to null would sometimes increased camera stack size and reduce performance. ([1299403](https://issuetracker.unity3d.com/issues/setting-camera-dot-targettexture-equals-null-increases-camerastack-stackcount))
    
*   Graphics: Fixed an issue where there LOD Group preview rendering with a pink material if an SRP was active. ([1283011](https://issuetracker.unity3d.com/issues/urp-lodgroup-preview-on-inspector-is-pink))
    
*   Package Manager: Fixed an issue where an absolute path was used in the manifest instead of relative path for local packages. ([1327815](https://issuetracker.unity3d.com/issues/absolute-paths-are-being-set-for-external-packages-added-via-tarball))
    
*   Scripting: "Stop Playing and Recompile" mode (Editor Preferences -> Script Changes while Playing) now waits for playmode to be fully disabled before compiling scripts. ([1326820](https://issuetracker.unity3d.com/issues/stop-playing-and-recompile-option-causing-errors-and-recompiling-at-the-wrong-time))
    
*   Scripting: Fixed an issue when using GetComponents with list caused a memory leak. ([1318407](https://issuetracker.unity3d.com/issues/memory-leak-when-calling-getcomponents-list-with-a-static-list))
    
*   Scripting: Fixed an issue where the script was not opened when double clicking an error thrown from it inside the Console window. ([1200408](https://issuetracker.unity3d.com/issues/the-script-is-not-opened-when-double-clicking-an-error-thrown-from-it-inside-the-console-window))
    
*   Shaders: Fixed an incorrect struct reflection on GL and GLES backends when multiple nested structs were used. (1322153)
    
*   UI: Canvas size will adjust based on selected display and rendermode instead of selected game view. ([991291](https://issuetracker.unity3d.com/issues/canvas-size-depends-on-the-latest-active-game-view-aspect-ratio-for-all-game-views))
    
*   UI: Fixed an issue where calculation of size was incorrect for cameras that have a view rect set. ([1325324](https://issuetracker.unity3d.com/issues/viewport-rect-affects-ui-canvas-gameobjects-positions-when-canvas-render-mode-is-set-to-screen-space-camera))
    
*   XR: Check the value of maxMultiviewViewCount in VkPhysicalDeviceMultiviewProperties for better detection of Vulkan multiview support. (1308540)
    
*   XR: Fixed an issue for single-pass instancing with MSAA and postprocessing rendered a grey image with built-in renderer. (1280458)

### Known Issues in 2020.3.12f1

*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   Asset Import Pipeline: Infinity loop on importing Assets, when building appx package via MRTK build window ([1339823](https://issuetracker.unity3d.com/issues/infinity-loop-on-importing-assets-when-building-appx-package-via-mrtk-build-window))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Global Illumination: Reflection probes must be rebaked twice to update when using "Generate Lighting" button ([1334283](https://issuetracker.unity3d.com/issues/reflection-probes-must-be-rebaked-twice-to-update-when-using-generate-lighting-button))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Linux: Editor crashes at 'GfxFramebufferGLES::SetBackBufferColorDepthSurface' or freezes when creating a new shortcut profile ([1334874](https://issuetracker.unity3d.com/issues/editor-crashes-at-gfxframebuffergles-setbackbuffercolordepthsurface-or-freezes-when-creating-a-new-shortcut-profile))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile Graphics: \[iOS\] Player crashing when connecting external Display via USB-C port ([1321153](https://issuetracker.unity3d.com/issues/ios-player-crashing-when-connecting-external-display-via-usb-c-port))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Packman: Package Manager/My Assets: 401 Response code trying to download a paid asset store package ([1335976](https://issuetracker.unity3d.com/issues/package-manager-slash-my-assets-401-response-code-trying-to-download-a-paid-asset-store-package))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Profiling: Poor profiler performance when navigating the timeline view and reviewing data with many threads ([1339407](https://issuetracker.unity3d.com/issues/poor-profiler-performance-when-navigating-the-timeline-view-and-reviewing-data-with-many-threads))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: \[Android\]\[Mono\]\[IL2CPP\] "Unable to find libc" error thrown when executing certain SslStream constructor ([1022228](https://issuetracker.unity3d.com/issues/android-mono-il2cpp-unable-to-find-libc-error-thrown-when-executing-certain-sslstream-constructor))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   uGUI: RectMask2D Softness property has no effect when used on TextMeshPro Text ([1331297](https://issuetracker.unity3d.com/issues/rectmask2d-softness-property-has-no-effect-when-used-on-textmeshpro-text))
    
*   Windows: Editor crashes when exiting and keeping a tutorial project ([1338299](https://issuetracker.unity3d.com/issues/editor-crashes-when-exiting-and-keeping-a-new-micrograme-project))
    

### 2020.3.12f1 Release Notes

#### Improvements

*   IL2CPP: Correctly provide the source file hash so that a managed debugger can determine when a source file has changed and provide a proper warning.
    
*   Particles: Add support for copy/paste of entire modules via the module header context menu. ([1314490](https://issuetracker.unity3d.com/issues/particle-system-module-values-are-not-copied-when-right-clicking-and-selecting-copy-option))
    
*   Profiler: Added missing memory labels sizes to the memory snapshot format, in order to give real value to the prexisting label list. Api for access this data will be found inside the memory profiler package
    
*   Profiler: Added profiler memory stats data, data is similar to the Profiler Module data found in the Profiler Window
    
*   Profiler: Added profiler target data to memory snapshot format, data consists of elements such as unity version, product name, total gfx memory, total physical memory etc.
    
*   Profiler: Encoded managed heap section type inside the snapshot format, for retrieval via the memory profiler package
    
*   Profiler: Reworked native connection reporting for the memory profiler in order to properly report connections between assets
    

#### API Changes

*   Services: Changed: On some platforms the Analytics modules are completely stripped out. Any user code that references anything from Analytics will not compile on these platforms. The documentation was updated to inform users of the need to #ifdef this code out for this situation. (1333730)

#### Changes

*   Android: Update Android Logcat package version to 1.2.2. See the package change log for full details. https://docs.unity3d.com/Packages/com.unity.mobile.android-logcat@1.2/changelog/CHANGELOG.html
    
*   Graphics: Update Postprocessing v2 package to 3.1.1 version. See the package change log for full details. https://docs.unity3d.com/Packages/com.unity.postprocessing@3.1/changelog/CHANGELOG.html
    
*   Package: com.unity.purchasing updated to 3.2.1. Please refer to the package changelog online here: https://docs.unity3d.com/Packages/com.unity.purchasing@3.2/changelog/CHANGELOG.html
    
*   Package: Updated com.unity.cinemachine to 2.6.5 version. See the pacakge change log for full details. https://docs.unity3d.com/Packages/com.unity.cinemachine@2.6/changelog/CHANGELOG.html
    

#### Fixes

*   2D: Fixed an issue where changing the texture spritemode when there were unsaved changes in Sprite Editor causes error. (1290045)
    
*   2D: Fixed an issue where Sprite Editor Window was not resetting correctly after applying in certain occasions. ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   2D: Fixed an issue where Sprite Editor Window would not update when selection change was done when it was not in focus. ([1327065](https://issuetracker.unity3d.com/issues/2d-spriteeditor-while-sprite-editor-tab-is-not-in-focus-sprite-rects-will-not-be-updated-and-causes-visual-errors))
    
*   2D: Fixed an issue where the Sprite Editor Window showed Editor Window's 'Save Changes' dialog before if it was closed if there were pending changes that needed to be apply. ([1274232](https://issuetracker.unity3d.com/issues/uielement-uielement-is-not-compatible-error-is-thrown-while-closing-spriteeditor-window-without-applying))
    
*   2D: Fixed an issue where the Sprite Editor Window showed up blank when Unity was relaunched in certain occasions. (1330622)
    
*   AI: Fixed an issue with "sweeps" memory allocation during the process of calculating regions of NavMesh. ([1332341](https://issuetracker.unity3d.com/issues/webgl-index-out-of-bounds-exception-is-thrown-when-loading-a-navmesh))
    
*   AI: Fixed rare crash that happened when an OffMeshLink on the path of the NavMeshAgent gets disconnected due to modifications to the underlying NavMesh. ([1298211](https://issuetracker.unity3d.com/issues/crash-on-unityplayer-unitymain-worldtotile-when-using-navmesh-agents))
    
*   Android: Fixed a crash during Application.Quit(). ([1315010](https://issuetracker.unity3d.com/issues/android-signal-11-gets-called-instead-of-signal-9-when-using-application-dot-quit))
    
*   Asset Pipeline: Fixed an issue where deleting an asset in use in import worker caused an infinite refresh loop. (1263755)
    
*   Asset Pipeline: Fixed an issue where search paths were not sanitized before passed to FindAssets. ([1334620](https://issuetracker.unity3d.com/issues/assetdatabase-dot-findassets-fails-to-open-folders-if-search-string-has-a-trailing-forward-slash))
    
*   Core: Fixed a Loading.PreloadManager crash. ([1320358](https://issuetracker.unity3d.com/issues/mobile-high-crash-rates-in-loading-dot-preloadmanager))
    
*   DX12: Fixed an issue where there was screen flickering when changing from a lower resolution to screen resolution. (1334646)
    
*   Editor: Fixed an issue when removing differences in fonts of Outer buttons and middle buttons in GUILayout.Toolbar. ([1326270](https://issuetracker.unity3d.com/issues/guilayout-dot-toolbar-middle-buttons-use-a-different-font-than-outer-buttons))
    
*   Editor: Fixed an issue where large thumbnail object fields would not scale their texture correctly. (1330963)
    
*   GI: Prevent CPU version of A-Trous lightmap denoiser from introducing triangle-aligned artefacts into the filtered output. ([1255973](https://issuetracker.unity3d.com/issues/cpu-plm-artifacts-on-the-baked-shadow-when-baking-with-using-a-trous-filter))
    
*   Graphics: Fixed an issue where line and trails deformed when points were too close together. ([1275386](https://issuetracker.unity3d.com/issues/particle-system-particle-trail-from-the-trails-module-deforms-and-twists-when-the-gameobject-holding-it-stutters-in-place))
    
*   Graphics: Fixed an issue which could caused the GPU to crash when a Skinned Mesh Renderer was assigned a mesh, which did not match the expected size/stride setup, and that Skinned Mesh Renderer was then used immediately before skinninghad a chance to happen.
    
*   IL2CPP: Fixed a crash due to race condition allocating memory in MetadataCache::GetGenericInst. (1323462)
    
*   IL2CPP: Fixed an improper C++ comments for type names ending in a forward slash and a space. ([1328322](https://issuetracker.unity3d.com/issues/android-il2cpp-il2cpp-dot-exe-did-not-run-properly-exception-appears-when-building-an-android-project))
    
*   IL2CPP: Fixed an incorrect behavior of MakeTypedReference for derived types. This allows some BinaryFormatter cases to work properly. ([1269771](https://issuetracker.unity3d.com/issues/assetbundles-are-not-released-in-il2cpp-builds))
    
*   IL2CPP: Fixed an incorrect behavior of Mathf.RoundToInt with Mathf.Infinity on ARM architectures. (1323419)
    
*   IL2CPP: Fixed an issue where embedded resources were not loaded on an assembly processed with ILRepack. ([1323772](https://issuetracker.unity3d.com/issues/il2cpp-build-does-not-load-embedded-resource-when-merged-using-ilrepack))
    
*   IL2CPP: Fixed an issue where the return information about the local host when Dns.GetHostEntry was called with an empty string. ([1326854](https://issuetracker.unity3d.com/issues/dns-dot-gethostentry-malfunction-in-il2cpp-builds))
    
*   IL2CPP: Fixed intermittent crash during script debugging while the debugger was handling exceptions. (1330441)
    
*   IL2CPP: Fixed issue with IL2CPP that could cause builds to fail when a high number of C++ files are generated. ([1327846](https://issuetracker.unity3d.com/issues/2020-dot-3-il2cpp-build-fails-due-to-a-crash-in-tundra-introduced-by-0-change-player-build))
    
*   iOS: Fixed an issue when creating app extension target through PBXProject, not add the header section automatically. ([1332249](https://issuetracker.unity3d.com/issues/ios-pbxproject-dot-addfiletobuild-throws-an-exception-when-called-with-a-header-file))
    
*   iOS: Fixed an occasional crash on shutdown in UnityMetalMemorylessDepth. (1333487)
    
*   Particles: Fixed a velocity vertex stream for mesh particle issue. ([1328115](https://issuetracker.unity3d.com/issues/urp-particle-velocity-vertex-stream-broken-when-render-alignment-is-set-to-view-slash-facing-and-render-mode-is-set-to-mesh))
    
*   Particles: Fixed an issue where the entire particle volume was not considered when using the Trigger module. ([1325421](https://issuetracker.unity3d.com/issues/shuriken-particle-with-outside-trigger-only-dies-when-it-hits-the-collider-with-the-center-of-the-particle))
    
*   Physics: Fixed an issue where a Linecast or Raycast against an EdgeCollider2D did not always returns a correct collision normal when an attached Rigidbody2D was rotated. ([1334367](https://issuetracker.unity3d.com/issues/raycasthit2d-normal-is-incorrect-when-physics2d-dot-raycast-hits-an-edgecollider2d-with-a-rigidbody))
    
*   Prefabs: Fixed an issue where InstantiatePrefab in the editor would not call OnTransformChildrenChanged. ([1319453](https://issuetracker.unity3d.com/issues/ontransformchildrenchanged-doesnt-get-called-in-the-edit-mode-when-dragging-a-prefab-from-the-project-window-to-the-hierarchy))
    
*   Prefabs: Fixed an issue where the access to Prefab Mode was not available for non-model immutable Prefabs via arrow buttons in the Hierarchy and for models, the Inspector's Open button was enabled. ([1324356](https://issuetracker.unity3d.com/issues/immutable-prefabs-cant-be-fully-opened-from-the-hierarchy-nor-the-open-button-in-the-inspector))
    
*   Scripting: Fixed a player crash when assembly name includes apostrophe. ([1316133](https://issuetracker.unity3d.com/issues/player-crashes-when-precompiled-assembly-name-includes-apostrophe))
    
*   Scripting: Fixed a RuntimeInitializeOnLoadMethod attribute on methods within nested classes issue. ([962800](https://issuetracker.unity3d.com/issues/runtimeinitializeonloadmethod-is-not-called-if-it-is-part-of-nested-class))
    
*   Scripting: Fixed an issue when setting a Timeout property on a HttpClient object would not correctly propagate the timeout value to any HttpWebRequest objects created by it for async messaging. ([1313205](https://issuetracker.unity3d.com/issues/setting-httpclient-dot-timeout-to-a-value-greater-than-the-default-value-of-100-seconds-has-no-effect))
    
*   Terrain: Fixed an issue where Instanced Terrain shadows were flickering when no Shadow Cascades and Close Fit Shadow Projection were used and camera was moving. ([1257896](https://issuetracker.unity3d.com/issues/instanced-terrain-shadows-are-flickering-when-no-shadow-cascades-and-close-fit-shadow-projection-are-used-and-camera-is-moving))
    
*   uGUI: Fixed an issue where focus wouldnt be given back to main window on mouse click causing incorrect input event position. ([1290074](https://issuetracker.unity3d.com/issues/graphic-raycaster-stops-hitting-gameobjects-when-opening-a-selection-window-while-in-the-play-mode))
    
*   UI: Fixed clipping with VisualElements that use the GroupTransform hint, the nested masking, which was not supported in this version, forced the leaf GroupTransform element to fallback to rect clipping, but the assert presumed that it could not happen. ([1328734](https://issuetracker.unity3d.com/issues/uir-nested-masking-fallback-of-grouptransform-visualelement-triggers-assert))
    
*   UI Toolkit: Fixed an issue where there was a wrong stylesheet loading order for the Light theme which forced the Editor to use generic styles for some controls. (1317035)
    
*   UI Toolkit: Fixed clipping of the content of a mask element whose size is zero. ([1320182](https://issuetracker.unity3d.com/issues/uir-overflow-hidden-does-not-work-when-visualelements-width-or-height-is-less-than-1-percent))
    
*   Video: Fixed an issue where a failed video import was uploaded to and pulled from the Unity Accelerator. ([1292668](https://issuetracker.unity3d.com/issues/failed-video-import-is-uploaded-to-and-pulled-from-the-unity-accelerator))
    
*   Video: Fixed VideoPlayer where frames would be skipped when looping for videos encoded with h.264 and non baseline profile on Windows. ([1109411](https://issuetracker.unity3d.com/issues/video-stutters-on-playback-when-loop-option-is-enabled-in-video-component))
    
*   Video: Fixed VideoPlayer where incorrect frame numbers would be returned for videos encoded with h.264 and non baseline profile on Windows. ([1044776](https://issuetracker.unity3d.com/issues/videoplayer-returns-2-for-frame-number-despite-being-on-frame-0))
    
*   WebGL: Fixed a keyboard input for GUI controls issue with the new input system. ([1258876](https://issuetracker.unity3d.com/issues/unable-to-write-text-in-the-input-field-with-the-new-input-system-in-webgl-build))
    
*   WebGL: Fixed an issue that WebGL page would not load if Data Caching (IndexedDB access) was enabled, and private browsing mode was active so that IndexedDB was not available. ([1318980](https://issuetracker.unity3d.com/issues/opening-webgl-build-in-private-browsing-mode-does-not-work-if-data-caching-is-enabled))
    
*   Windows: Fixed a DPI awareness mode issue which enables proper scaling of window chrome for Standalone Player. ([1309804](https://issuetracker.unity3d.com/issues/unity-player-doesnt-scale-to-match-screen-resolution-correctly-when-moving-between-screens))
    
*   Windows: Fixed an issue where Display.SetParam were failing to change window position. ([1322446](https://issuetracker.unity3d.com/issues/unity-player-doesnt-respect-window-position-when-set-in-script-using-display-dot-setparam))
    
*   Windows: Fixed an issue where GetMouseButton(int) was not properly reported when clicking in the Game View after clicking on another window or tab when the Player was running. ([1326568](https://issuetracker.unity3d.com/issues/mouse-input-is-not-detected-correctly-when-pressing-in-the-game-view-after-pressing-the-mouse-button-in-other-editor-windows))

### Known Issues in 2020.3.11f1

*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Global Illumination: Reflection probes must be rebaked twice to update when using "Generate Lighting" button ([1334283](https://issuetracker.unity3d.com/issues/reflection-probes-must-be-rebaked-twice-to-update-when-using-generate-lighting-button))
    
*   HD RP: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile: \[Android\] Build fails when there are 680 or more files in the Streaming Assets folder ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: \[Android\]\[Mono\]\[IL2CPP\] "Unable to find libc" error thrown when executing certain SslStream constructor ([1022228](https://issuetracker.unity3d.com/issues/android-mono-il2cpp-unable-to-find-libc-error-thrown-when-executing-certain-sslstream-constructor))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   uGUI: RectMask2D Softness property has no effect when used on TextMeshPro Text ([1331297](https://issuetracker.unity3d.com/issues/rectmask2d-softness-property-has-no-effect-when-used-on-textmeshpro-text))
    

### 2020.3.11f1 Release Notes

#### Improvements

*   Audio: Allow a user to specify whether DSPGraph sample providers should loop from the beginning of a clip or from a chosen start point. ([1329351](https://issuetracker.unity3d.com/issues/dspgraph-audio-clip-does-not-loop-from-to-the-begining-when-starting-it-from-the-middle))
    
*   Package Manager: Added support for opt-in caching of Git LFS files when downloading Git packages. Caching is enabled by setting either of the following environment variables: `UPM_ENABLE_GIT_LFS_CACHE` or `UPM_GIT_LFS_CACHE_PATH`. The latter allows overriding the default cache location.
    
*   XR: Updated OpenXR Package to version 1.2.0. Please see package changelog for full details.
    

#### Fixes

*   2D: Fixed a crash when disabling Sprite Skin when multithreaded rendering was enabled. ([1296355](https://issuetracker.unity3d.com/issues/ios-player-crashes-during-animation-unitygfxdeviceworker-unityframeworkvoid-transformverticesinnerloop))
    
*   2D: Fixed an issue when SpriteShapeController had "Update Collider" set to true, would dirty the scene every time. (1315086)
    
*   2D: Fixed an issue with disabling 'Edit Spline' on Sprite Shape Controller while Cache Geometry was enabled threw an ArgumentException error. ([1320015](https://issuetracker.unity3d.com/issues/disabling-edit-spline-on-sprite-shape-controller-while-cache-geometry-is-enabled-throws-an-argumentexception-error))
    
*   Android: Fixed a crash on startup on Android 4.4 devices. ([1331290](https://issuetracker.unity3d.com/issues/app-stops-due-to-onpixelcopyfinishedlistener-not-being-supported-on-devices-with-lower-than-24-sdk))
    
*   Animation: Fixed an issue where values were defaulting to zero when disabling writeDefaultValue on a State and mixing. ([1303570](https://issuetracker.unity3d.com/issues/weight-of-all-rigs-reset-to-0-when-there-are-more-than-one-animation-layers))
    
*   Asset Pipeline: Fixed an issue where triggering an AssetDatabase.Refresh() during an Undo might cause deletions not to persist to disk. ([1321443](https://issuetracker.unity3d.com/issues/subassets-destroyed-by-the-undo-system-are-kept-if-the-editor-looses-focus-before-saving))
    
*   Audio: Fixed an issue where the default audio output when connecting a DSPGraph output job was not activated. ([1329062](https://issuetracker.unity3d.com/issues/dspgraph-audio-is-not-played-60-seconds-after-compilation-in-editor-mode))
    
*   Build System: Fixed an edge case where executing the build tools was generating an access denied error when attempting to run git/hr inside a Visual Studio command prompt.
    
*   Burst: Fixed a crash due to a member function debug information on tvOS.
    
*   Burst: Fixed an UnauthorizedAccessException that could occur when using Burst in players built for the macOS App Sandbox.
    
*   Editor: Fixed an issue with the alignment of certain buttons in some of the 2D colliders ([1281292](https://issuetracker.unity3d.com/issues/imgui-edit-collider-button-is-overlapping-with-the-material-property-for-all-2d-collider))
    
*   Graphics: Fixed an issue where mip streaming for static batched meshes and used of CombineMesh API. (1329555)
    
*   macOS: Fixed a crash when product name contains Unicode characters. ([1296208](https://issuetracker.unity3d.com/issues/macos-il2cpp-build-closes-on-launch-when-its-product-name-contains-certain-characters))
    
*   Package Manager: Fixed an issue in the Package Manager port selection logic which could sometimes prevent Unity from connecting to it on startup. (1328669)
    
*   Package Manager: Fixed an issue where adding packages from a registry which returned invalid publish dates would fail. ([1318975](https://issuetracker.unity3d.com/issues/packages-cannot-be-added-from-a-registry-that-returns-invalid-publish-dates-windows-only))
    
*   Package Manager: Fixed an issue where Git dependencies using annotated tags for revisions could not be resolved. ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   Package Manager: Fixed an issue where the `UnityEditor.PackageManager.Client.SearchAll` method would result in a connection error despite using `offlineMode = true`. ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Package Manager: Fixed an issue which could sometimes cause package resolution errors due to `EMFILE` errors in projects with a large number of packaged assets.
    
*   Package Manager: Fixed an issue which could sometimes lead to missing files in successfully resolved packages in projects with a large number of packaged assets.
    
*   Package Manager: Fixed an issue which prevented starting `UnityPackageManager.exe` on Windows when its path contained non-ANSI Unicode characters. ([1317244](https://issuetracker.unity3d.com/issues/editor-wont-start-with-unicode-install-path))
    
*   Particles: Fixed an issue where Inspector was giving incorrect information about configured SpriteAtlas assets. ([1318608](https://issuetracker.unity3d.com/issues/sprites-the-particle-system-does-not-support-v2-sprite-atlases))
    
*   Physics: Fixed a crash when attempting to access the Rigidbody from the result of a OnCollision callback, when the object it collided with was a ArticulationBody. The Collision.rigidbody member is now null in this case. ([1320314](https://issuetracker.unity3d.com/issues/oncollisionenter-with-articulation-body-crashes-when-calling-rigidbody-getvelocityatpoint))
    
*   Physics: Fixed an issue where setting an array of null bone transforms to a SkinnedMeshRenderer via the 'bones' property, would cause a crash if a Cloth component was present on the same GameObject. ([1328023](https://issuetracker.unity3d.com/issues/editor-crashes-when-cloth-with-skinnedmeshrenderer-has-null-bone-references))
    
*   Scripting: Fixed an issue where double-clicking on console messages originating from paths outside the asset folder were not working correctly. ([1304954](https://issuetracker.unity3d.com/issues/script-file-that-references-package-script-is-opened-when-double-clicking-a-console-message-in-editor-that-comes-from-a-package))
    
*   Windows: Fixed an issue where docked tabs would keep focus when dragging from another window. ([1296690](https://issuetracker.unity3d.com/issues/editor-game-view-mouse-input-stop-working-after-game-window-has-been-moved-in-play-mode))
    
*   XR: Fixed an issue with screenspace shadows with XR multiview. ([1168315](https://issuetracker.unity3d.com/issues/oculus-gearvr-cascade-shadows-are-not-rendered-on-mobile-devices-when-built-on-oculus-vr-sdk))
    
*   XR: Fixed Vulkan validation errors on Oculus Quest and added support for "Fragment Density Map 2" Vulkan extension. (1332783)

### Known Issues in 2020.3.10f1

*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   Asset Import Pipeline: Editor crashes when executing Undo action after Audio Source component is added to Prefab ([1335691](https://issuetracker.unity3d.com/issues/editor-crashes-when-executing-undo-action-after-audio-source-component-is-added-to-prefab))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   Global Illumination: Crash while sculpting Terrain and Baking Lightmaps ([1266511](https://issuetracker.unity3d.com/issues/crash-while-sculpting-terrain))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   HD RP: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Mobile: \[Android\] App stops due to OnPixelCopyFinishedListener not being supported on devices with lower than 24 SDK ([1331290](https://issuetracker.unity3d.com/issues/app-stops-due-to-onpixelcopyfinishedlistener-not-being-supported-on-devices-with-lower-than-24-sdk))
    
*   Mobile: \[Android\] Build fails when there are 680 or more files in the Streaming Assets folder ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   uGUI: RectMask2D Softness property has no effect when used on TextMeshPro Text ([1331297](https://issuetracker.unity3d.com/issues/rectmask2d-softness-property-has-no-effect-when-used-on-textmeshpro-text))
    

### 2020.3.10f1 Release Notes

#### Improvements

*   Asset Import: Improved overall performance of FBX files import.
    
*   Asset Import: Improved performance of ASCII FBX files import.
    
*   Graphics: Optimized static batching process, e.g. entering play mode with 30k static batched objects in the editor is faster by two seconds.
    
*   Graphics: Static batching and Mesh.CombineMeshes can handle more vertex formats now, for example Float16 normals or UVs. It also no longer clamps vertex colors to UNorm8 format - if input meshes have higher precision vertex colors, then combined mesh will have high precision colors too. ([1274815](https://issuetracker.unity3d.com/issues/assertion-triggered-by-mesh-dot-combinemeshes-when-underlying-meshs-vertex-format-has-changed))
    
*   macOS: Updated xcode project template to use "modern" build system. ([1326316](https://issuetracker.unity3d.com/issues/macos-xcode-legacy-build-system-will-be-removed-when-future-xcode-version-is-released))
    

#### Changes

*   Editor: Updated Collaborate package to allow users to migrate to Plastic.
    
*   Package: Updated the com.unity.purchasing package to version 3.1.0.
    
*   Package Manager: Changed "Import again" button text to "Reimport".
    
*   XR: Updated the Oculus XR Plugin package to version 1.9.1.
    

#### Fixes

*   2D: Fixed an initial rendering animated tiles issue when a CompleteObjectUndo was registered for a Tilemap while in Play mode.
    
*   2D: Fixed an issue where wrong Sprites were being shown for Animated Tiles when TilemapRenderer was in Individual mode and user set new Tiles on the Tilemap. ([1329054](https://issuetracker.unity3d.com/issues/2d-animated-tile-rendering-glitch-in-animated-tile-chunk-in-individual-mode))
    
*   Animation: Fixed an issue when setting the time of a playable manually would not fire events. ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Asset Import: Fixed a performance regression the occured with animation import. ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Asset Import: Fixed an infinite asset import loop during InitializeOnLoad when the Editor script used CreateAsset and importParameters which changed during import. ([1323499](https://issuetracker.unity3d.com/issues/editor-gets-stuck-in-import-loop-when-creating-an-asset-during-initializeonload-with-entities-package-installed))
    
*   Asset Import: Fixed an issue where a reference to an animation was lost when ModelImporter.clipAnimations was set from Script for the first time after importing a model. ([1246450](https://issuetracker.unity3d.com/issues/reference-to-animation-is-lost-when-modelimporter-dot-clipanimations-is-set-from-script-for-the-first-time-after-importing-a-model))
    
*   Asset Import: Fixed an issue where Import did not correctly update Avatar settings when switching from "Copy From Avatar". ([1213138](https://issuetracker.unity3d.com/issues/importer-fails-to-update-avatar-settings-correctly-when-switching-from-a-copied-avatar))
    
*   Build Pipeline: Fixed an issue where generating a build that includes a script which used serializable nested type deriving from type nesting it, could lead to a build at runtime. ([1310970](https://issuetracker.unity3d.com/issues/player-crashes-on-unitymain-when-a-class-with-the-serializable-attribute-inherits-from-a-class-which-is-not-serializable))
    
*   DX12: Fixed an issue where there was a change in color brightness when going from windowed to fullscreen when using linear color space. ([1297218](https://issuetracker.unity3d.com/issues/colors-of-scene-change-when-going-from-windowed-to-fullscreen-mode-using-direct3d12-and-linear-color-space))
    
*   Editor: Added System.IO.Compression to reference assemblies when targeting .NET 4.7.1 (editor only contexts). ([1275859](https://issuetracker.unity3d.com/issues/console-errors-are-thrown-when-using-system-dot-io-dot-compression-in-the-editor-folder))
    
*   Editor: Fixed an issue in Material Editor where large thumbnails were not showing up correctly for material texture properties when the texture type was Texture2DArray or Texture3D. ([1288995](https://issuetracker.unity3d.com/issues/shader-texture-is-not-displayed-in-texture-selector-preview-icon-when-texture-type-is-2d-array-and-3d))
    
*   Editor: Fixed an issue where both KeyDown and KeyUp events were invoked upon first click in the Game View when it was maximized through context menu. ([1325742](https://issuetracker.unity3d.com/issues/both-keydown-and-keyup-events-get-invoked-upon-first-mouse-click-in-game-view-when-its-maximized-by-context-menu-setting))
    
*   Graphics: Fixed an issue where encoding an R8-image to JPG or TGA would result in a cyan-tinted image; The result is now gray, as is the case for R16-images and for encoding to PNG. ([1259972](https://issuetracker.unity3d.com/issues/images-with-encodetojpg-and-encodetotga-encoding-have-blue-tint-when-textureformat-dot-r8-format-is-used))
    
*   Graphics: Fixed an issue where scratch buffer were reused on Metal which caused a glitch during particle simulation. ([1259523](https://issuetracker.unity3d.com/issues/macos-rendering-of-particlesystems-can-be-corrupted-when-also-rendering-a-particlesystem-to-a-rendertexture))
    
*   Package Manager: Fixed an issue where closing the sample reimport dialog would execute the reimport action anyway. (1335115)
    
*   Package Manager: Fixed an issue where reimporting a sample would delete parent folders. ([1334082](https://issuetracker.unity3d.com/issues/reimporting-a-sample-deletes-all-non-empty-parent-folders-recursively-until-the-project-folder))
    
*   Particles: Fixed an issue where there was a 2 decimal point restriction in the Duration property. ([1319730](https://issuetracker.unity3d.com/issues/particle-system-duration-propertys-value-has-double-precision))
    
*   Physics: Fixed an issue where inertia tensor was not updating when a collider was removed. ([937998](https://issuetracker.unity3d.com/issues/inertia-tensor-is-not-reset-when-a-collider-is-removed))
    
*   Profiler: Fixed a race condition in the Shadow Casters stat observed which causef inconsistent collection of the stat. (1265648)
    
*   Scene/Game View: Fixed an issue where SceneView.rotation value was incorrectly affecting camera rotation in 2D mode. ([1314928](https://issuetracker.unity3d.com/issues/cameras-z-position-is-clamped-to-zero-when-in-scene-view))
    
*   Scripting: Fixed a crash that was caused by passing a generic type into FindObjectsOfType. ([1312890](https://issuetracker.unity3d.com/issues/mono-unity-crashes-when-calling-findobjectsoftype-with-a-generic-abstract-class-type-that-derives-from-monobehaviour))
    
*   Serialization: Fixed a crash on JSONUtility read when a class had both a field named "references" and \[SerializedReference\] fields. ([1198073](https://issuetracker.unity3d.com/issues/editor-crashes-on-serializetraits-transfer-when-calling-jsonutility-dot-fromjson))
    
*   Terrain: Fixed an issue where terrain textures were turning black in Editor with MicroSplat asset store plugin. ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   UI Toolkit: Fixed an issue where ListView item selection through PointerMoveEvent was not getting the PointerDown in certain cases. (1275295)
    
*   UI Toolkit: Fixed an issue where the PropertyField would not use a custom label(if provided) when drawing a property with an IMGUI PropertyDrawer. ([1329405](https://issuetracker.unity3d.com/issues/label-set-with-editorguilayout-dot-propertyfield-is-overwritten-when-adding-range-component-to-the-field))
    
*   Universal Windows Platform: Fixed an issue where word suggestion was not appearing in the Windows On Screen Keyboard when editing an InputField or TextMeshPro control. ([1332468](https://issuetracker.unity3d.com/issues/uwp-word-suggestions-arent-displayed-when-entering-text-into-an-inputfield-slash-tmp-via-softkeyboard))
    
*   XR: Added a warning indicatimh when a camera projection sets to Orthographic when XR is running and fixed error spamming. ([1305592](https://issuetracker.unity3d.com/issues/xr-sdk-console-window-is-spammed-with-errors-when-orthographic-cameras-clipping-plane-near-is-set-to-0-and-target-eye-to-both))

### Known Issues in 2020.3.9f1

*   Profiling: GarbageCollectAssets is triggered frequently when higher frame counts are set ([1332708](https://issuetracker.unity3d.com/issues/garbagecollectassets-is-triggered-frequently-when-higher-frame-counts-are-set))
    
*   uGUI: RectMask2D Softness property has no effect when used on TextMeshPro Text ([1331297](https://issuetracker.unity3d.com/issues/rectmask2d-softness-property-has-no-effect-when-used-on-textmeshpro-text))
    
*   Mobile: \[Android\] App stops due to OnPixelCopyFinishedListener not being supported on devices with lower than 24 SDK ([1331290](https://issuetracker.unity3d.com/issues/app-stops-due-to-onpixelcopyfinishedlistener-not-being-supported-on-devices-with-lower-than-24-sdk))
    
*   Serialization: Editor becomes slow when inspecting a Scriptable Object with hundreds of serialized fields ([1311325](https://issuetracker.unity3d.com/issues/editor-becomes-slow-when-inspecting-a-scriptable-object-with-20-plus-serialized-fields))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Mobile: \[Android\] Build fails when there are 680 or more files in the Streaming Assets folder ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   Mono: \[macOS\] Unity crashes when exception thrown after a DLL has been loaded ([1318755](https://issuetracker.unity3d.com/issues/macos-unity-crashes-when-exception-thrown-after-a-dll-has-been-loaded))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   DirectX12: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Packman: Package resolution error when using a Git dependency referencing an annotated tag in its Git URL ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Asset Import Pipeline: Prefab script field reference is lost when project is upgraded ([1328724](https://issuetracker.unity3d.com/issues/prefab-script-field-reference-is-lost-when-project-is-upgraded))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.9f1 Release Notes

#### Improvements

*   Timeline: Updated Timeline package to version 1.4.8.
    
*   XR: Updated Windows MR XR SDK Plug-in package to version 4.5.0.
    
*   XR: Updated XR Plug-in Management package to vesion 4.0.5.
    

#### Changes

*   Windows: x86\_64 is now the default Windows architecture. ([1283651](https://issuetracker.unity3d.com/issues/default-architecture-in-build-settings-is-x86-instead-of-x64))

#### Fixes

*   2D: Fixed an issue where TextureImporter logged inconsistent asset import when SpriteDataAccessor APIs were used. (1331206)
    
*   Android: Fixed a performance issue when using GPU skinning on Mali with OpenGL ES. ([1300914](https://issuetracker.unity3d.com/issues/bad-performance-when-using-gpu-skinning-on-mali-with-opengl-es))
    
*   Android: Fixed an issue when using RenderDoc on Android with Vulkan on some Adreno devices that was caused by Unity's ASTC HDR support detection. ([1287309](https://issuetracker.unity3d.com/issues/android-astc-hdr-check-may-cause-issues-with-renderdoc))
    
*   Audio: Fixed an issue where the audio output device was shut down in edit mode when DSPGraph was running. ([1310050](https://issuetracker.unity3d.com/issues/dspgraph-audio-stops-after-60-seconds-when-playing-in-the-editor-mode))
    
*   Editor: Fixed an editor freeze when the FixedTimestep setting in the Preferences was set to 0/0. ([1326481](https://issuetracker.unity3d.com/issues/editor-freezes-when-fixedtimestep-value-in-the-preferences-is-set-to-0-slash-0))
    
*   Editor: Fixed an issue where a blue line appeared in Editor debug build Inspector windows while hovering between components and without a drag action. (1323348)
    
*   Editor: Fixed an issue where a blue line appeared when a component could not be placed while reordering or adding new components in the Inspector. ([1300581](https://issuetracker.unity3d.com/issues/a-blue-line-appears-when-component-can-not-be-placed-while-reordering-or-adding-new-components-in-the-inspector))
    
*   Editor: Fixed an issue where Animation window keyframe Copy/Paste keyboard shortcuts were not working before the main curve area had been clicked on. ([1265480](https://issuetracker.unity3d.com/issues/keyframes-are-not-pasted-from-one-animation-clip-to-another))
    
*   Editor: Fixed an issue where exceptions were thrown while selecting specific console messages. ([1317216](https://issuetracker.unity3d.com/issues/argumentoutofrangeexception-error-is-thrown-when-selecting-a-message-printed-in-the-console-with-specific-string))
    
*   Editor: Fixed an issue where items in the right click menu did nothing on non reorderable arrays in scriptable object with custom editors. ([1307389](https://issuetracker.unity3d.com/issues/right-click-options-do-nothing-on-arrays-in-scriptable-object-with-custom-editors))
    
*   Editor: Fixed an issue where the icon selector window did not close on selection undo. ([1305625](https://issuetracker.unity3d.com/issues/undo-imgui-select-icon-and-texture2d-windows-remain-open-after-performing-the-undo-operation))
    
*   Graphics: Fixed a crash that was caused by using a compute pipeline object after it had been destroyed in Vulkan. (1327421)
    
*   Graphics: Fixed an issue where an error message when encountering incompatible pipeline stages on DX12 was not removed. (1279311)
    
*   IL2CPP: Fixed an issue in Unity forma where code stripping returned wrong type in WebGL build. (1311802)
    
*   iOS: Fixed an issue where the last input character in Text Input Field was unable to be combine when a character limit exists in some languages. ([1321661](https://issuetracker.unity3d.com/issues/ios-unable-to-combine-the-last-input-character-in-text-input-field-when-character-limit-exists))
    
*   Physics: Fixed an issue where OnTriggerEnter was not being called after reparenting a Rigidbody. ([1323883](https://issuetracker.unity3d.com/issues/onentertrigger-gets-called-after-reparenting-a-rigidbody))
    
*   Prefabs: Fixed an Editor crash when changes to Prefab Mesh via Script were applied. ([1307624](https://issuetracker.unity3d.com/issues/editor-crashes-when-applying-changes-to-prefab-mesh-via-script))
    
*   Scripting: Ensure virtual call is made when delegate target is another delegate targeting a virtual method. ([1188422](https://issuetracker.unity3d.com/issues/delegate-points-to-the-base-method-instead-of-override-when-passing-it-to-a-method-before-adding-it-to-an-event))
    
*   Serialization: Fixed an issue with Property Diff after clearing array w/refs. ([1266303](https://issuetracker.unity3d.com/issues/serializereference-field-from-scriptableobject-loses-value-when-deleting-last-array-item-and-then-pressing-undo))
    
*   Shaders: Fixed a caching preprocessor not recognising 1.#INF HLSL constant issue. ([1331147](https://issuetracker.unity3d.com/issues/caching-preprocessor-does-not-support-1-dot-number-inf))
    
*   Shaders: Fixed an issue where Shader compilation progress bar did not shows total variants correctly. ([1201705](https://issuetracker.unity3d.com/issues/urp-android-estimated-shader-variants-number-is-inaccurate-when-compiling))
    
*   WebGL: Fixed an issue where the Garbage Collector could corrupt memory on WebGL. ([1303232](https://issuetracker.unity3d.com/issues/unobservedtaskexception-system-dot-nullreferenceexception-is-thrown-when-the-project-is-built-for-webgl))
    
*   WebGL: Fixed the Chrome deprecation warning about the use of SharedArrayBuffer. ([1323832](https://issuetracker.unity3d.com/issues/webgl-sharedarraybuffer-will-require-cross-origin-isolation-as-of-m91-warning-is-thrown-when-launching-player-on-chrome))
    
*   XR: Fixed an issue where Vulkan lazy allocation was not enabled for memory savings on Oculus Quest. (1314165)

### Known Issues in 2020.3.8f1

*   Mobile: \[Android\] App stops due to OnPixelCopyFinishedListener not being supported on devices with lower than 24 SDK ([1331290](https://issuetracker.unity3d.com/issues/app-stops-due-to-onpixelcopyfinishedlistener-not-being-supported-on-devices-with-lower-than-24-sdk))
    
*   OpenGL: SRP Batcher not working with OpenGL APIs when the project is built ([1331098](https://issuetracker.unity3d.com/issues/srp-batcher-not-working-with-opengl-apis-when-the-project-is-built))
    
*   Mobile: \[Android\] Build fails when there are 680 or more files in the Streaming Assets folder ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   MacOS: \[macOS\] Unity crashes when exception thrown after a DLL has been loaded ([1318755](https://issuetracker.unity3d.com/issues/macos-unity-crashes-when-exception-thrown-after-a-dll-has-been-loaded))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Asset Import Pipeline: Prefabs are reimporting every time a code change is made ([1294785](https://issuetracker.unity3d.com/issues/prefabs-are-reimporting-every-time-a-code-change-is-made))
    
*   DirectX12: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   Mono: Crash starting Unity when using NordVPN ([1308797](https://issuetracker.unity3d.com/issues/crash-on-system-dot-net-dot-sockets-dot-socket-queueioselectorjob-when-using-a-vpn-and-opening-a-project-that-uses-visual-studio))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Physics: OnTriggerEnter gets called after reparenting a RigidBody ([1323883](https://issuetracker.unity3d.com/issues/onentertrigger-gets-called-after-reparenting-a-rigidbody))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   Packman: Package resolution error when using a Git dependency referencing an annotated tag in its Git URL ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Asset Import Pipeline: Prefab script field reference is lost when project is upgraded ([1328724](https://issuetracker.unity3d.com/issues/prefab-script-field-reference-is-lost-when-project-is-upgraded))
    
*   HD RP: The camera doesn't rotate in HDRP Template with the SimpleCameraController.cs script ([1326816](https://issuetracker.unity3d.com/issues/the-camera-doesnt-rotate-in-hdrp-template-with-the-simplecameracontroller-dot-cs-script))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.8f1 Release Notes

#### Improvements

*   Asset Pipeline: Improved performance of flushing the preload operation queue from the main thread. This can occur when accessing an operation's result on the main thread before it is completed. ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))

#### API Changes

*   Editor: Added: EditorUtility SetDefaultParentObject and ClearDefaultParentObject methods were added.

#### Changes

*   Graphics: Update SRP packages to 10.5.0. See the package change log for additional information.

#### Fixes

*   2D: Fixed crash when viewing Sprite Atlas. Disabled code that could potentially cause high memory use and unnecessary object loads at certain conditions. ([1330345](https://issuetracker.unity3d.com/product/unity/issues/guid/1330345/))
    
*   Asset Import: Fixed an issue where materials were not allowed to be extracted into packages. ([1282867](https://issuetracker.unity3d.com/issues/couldnt-create-asset-file-error-is-thrown-when-extracting-materials-inside-packages-folder))
    
*   Asset Import: Fixed an issue where the Texture Importer secretly defaulted values to a negative. ([1204566](https://issuetracker.unity3d.com/issues/textureimporter-dot-wrapmode-returns-1-when-textures-wrap-mode-is-not-changed))
    
*   Asset Import: Fixed an issue where the Texture Preview was not updated correctly when switching from Alpha 8 format. ([1181655](https://issuetracker.unity3d.com/issues/texture-preview-doesnt-update-correctly-when-changing-formats-from-the-alpha-8-format))
    
*   Asset Pipeline: Fixed an issue where objects loaded during import in initial script refresh were not unloaded. ([1296506](https://issuetracker.unity3d.com/issues/urp-scriptableobject-serializefield-value-set-to-default-during-the-first-import))
    
*   Asset Pipeline: Fixed an issue where the texture importer produced inconsistent import results with sprites. (1244086)
    
*   Asset Pipeline: Fixed an issue where the Unity version was no longer written to a serialized artifact files that was generated during asset importing. This caused inconsistent import results across Unity versions. For existing projects, users must either do a "Reimport All" or delete the library folder for this fix to take effect. ([1310981](https://issuetracker.unity3d.com/issues/generated-inconsistent-result-warning-when-reimporting-single-asset))
    
*   Asset Pipeline: Fixed an issue where unsaved changes could be lost when an asset is renamed or moved. (1329404)
    
*   Editor: Fixed a Gizmo rendering crash in some invalid WheelCollider configurations. ([1326188](https://issuetracker.unity3d.com/issues/macos-crash-on-platform-memmove$variant$nehalem-when-setting-old-prefabs-scale-to-0))
    
*   Editor: Fixed an issue when a maximized instance of Unity on a second, lower resolution display would not remain maximized on that display when the Editor was restarted. ([1314966](https://issuetracker.unity3d.com/issues/windows-editor-main-window-doesnt-re-open-on-the-secondary-monitor-it-was-on-when-it-was-closed))
    
*   Editor: Fixed an issue when Unity editor was in lower display scaling wout not remain maximized. ([1283299](https://issuetracker.unity3d.com/issues/windows-recommended-display-scale-does-not-open-editor-in-complete-fullscreen))
    
*   Graphics: Fixed a "File could not be read" error that was thrown when importing a PNG that has XATTR. ([1273050](https://issuetracker.unity3d.com/issues/file-could-not-be-read-error-is-thrown-when-importing-a-png-that-has-xattr))
    
*   Graphics: Fixed a crash when loading old asset bundles that contained Vulkan shader binaries. ([1308947](https://issuetracker.unity3d.com/issues/crash-on-vk-decompressshader-when-loading-an-assetbundle-with-assetbundle-dot-loadfromfile-and-using-vulkan-graphics-api))
    
*   Graphics: Fixed an issue when instanced rendering light layers that were initialized to the default (first light layer) instead of zero to fix the lack of lighting on the instanced objects. ([1268590](https://issuetracker.unity3d.com/issues/hdrp-instances-drawn-with-drawmeshinstanced-are-not-lit-up-when-light-layers-are-enabled-in-hdrp-settings))
    
*   iOS: Fixed a `verticalOrientation` deprecation warning that had missing information about `ScreenOrientation.PortraitUpsideDown`. ([1307839](https://issuetracker.unity3d.com/issues/ios-verticalorientation-deprecation-warning-is-missing-information-about-screenorientation-dot-portraitupsidedown))
    
*   iOS: Fixed an issue where background audio sources were stopped when launching an app with "Disable Unity Audio" checked. ([1259748](https://issuetracker.unity3d.com/issues/ios-background-audio-is-cut-off-regardless-if-mute-other-audio-sources-is-untoggled))
    
*   iOS: Fixed an issue where background audio would not stopped when Unity audio is disabled. ([1286259](https://issuetracker.unity3d.com/issues/ios-background-audio-sources-are-stopped-when-launching-an-app-with-disable-unity-audio-checked))
    
*   macOS: Fixed an issue where extraneous dylibs from Contents of built mac player were not removed. ([1312216](https://issuetracker.unity3d.com/issues/macos-il2cpp-redundant-slash-unnecessary-gameassembly-dot-dylib-files-are-included-in-the-standalone-player-when-making-a-build))
    
*   Package Manager: Fixed an issue where Package Manager window did not pick up the right version when there were multiple versions of the same asset in the cache. (1330231)
    
*   Physics: Fixed an issue when tweaking ArticulationBody drive parameters would re-initialise anchors. ([1315525](https://issuetracker.unity3d.com/issues/articulationbody-anchors-are-repositioned-even-when-any-unrelated-property-is-changed-in-the-inspector))
    
*   Physics: Fixed an issue where Articulation Body Components were not responding to changes in the Inspector window at runtime. ([1325234](https://issuetracker.unity3d.com/issues/articulation-body-immovable-and-usegravity-toggles-do-not-work-at-runtime))
    
*   Prefabs: Fixed an issue where instantiating, duplicating or updating prefabs would not disable and re-enable the whole hierarchy, only the prefab instance. ([1269686](https://issuetracker.unity3d.com/issues/duplicating-a-prefab-instance-in-the-scene-will-cause-instances-of-the-same-prefab-to-be-disabled-and-re-enabled))
    
*   Profiler: Fixed an issue that was causing excessive profiling overhead when loading AssetBundles.
    
*   Scene Manager: Fixed an issue that prevented loading a scene where multiple objects have the same identifier. ([1249893](https://issuetracker.unity3d.com/issues/crash-on-unpackprefabinstancerecursive-when-entering-play-mode-in-a-scene-with-broken-prefabs))
    
*   Scripting: Fixed an issue where Assembly Version Validation could not be enabled or disabled from the editor when the project was setup to run on the IL2CPP backend. ([1307810](https://issuetracker.unity3d.com/issues/assembly-version-validation-disabled-when-using-il2cpp-scripting-backend))
    
*   Scripting: Fixed an issue where there were no Flags attribute added to SelectionMode enum. ([1298921](https://issuetracker.unity3d.com/issues/unityeditor-dot-selectionmode-is-missing-flags-attribute))
    
*   Serialization: Fixed an issue where SerializedProperty.propertyPath would not return the same path when invoked multiple times with an array entry path which was no longer there. (1310571)
    
*   UI Toolkit: Fixed multiple errors that appeared after modifying ScriptableObject's array indirectly. ([1303188](https://issuetracker.unity3d.com/issues/errors-appear-after-undoing-the-increase-of-the-serializable-arrays-size))
    
*   Virtual Texturing: Fixed incorrect GI bounce issue from certain materials. (1314358)
    
*   Windows: Fixed an issue where the object selector opened in between two windows in side-by-side multi-monitor setups. ([1289440](https://issuetracker.unity3d.com/issues/mesh-slash-material-selection-window-opens-between-2-screens-when-using-dual-monitor))
    
*   XR: Fixed an issue where world space UI would not render in secondary cameras. (1326167)

### Known Issues in 2020.3.7f1

*   Mobile: \[Android\] Build fails when there are 680 or more files in the Streaming Assets folder ([1272592](https://issuetracker.unity3d.com/issues/android-build-fails-when-there-are-680-or-more-files-in-the-streaming-assets-folder))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   DirectX12: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   Mono: Crash starting Unity when using NordVPN ([1308797](https://issuetracker.unity3d.com/issues/crash-on-system-dot-net-dot-sockets-dot-socket-queueioselectorjob-when-using-a-vpn-and-opening-a-project-that-uses-visual-studio))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Asset Import Pipeline: Prefab script field reference is lost when project is upgraded ([1328724](https://issuetracker.unity3d.com/issues/prefab-script-field-reference-is-lost-when-project-is-upgraded))
    
*   Physics: OnTriggerEnter gets called after reparenting a RigidBody ([1323883](https://issuetracker.unity3d.com/issues/onentertrigger-gets-called-after-reparenting-a-rigidbody))
    
*   HD RP: The camera doesn't rotate in HDRP Template with the SimpleCameraController.cs script ([1326816](https://issuetracker.unity3d.com/issues/the-camera-doesnt-rotate-in-hdrp-template-with-the-simplecameracontroller-dot-cs-script))
    
*   WebGL: "SharedArrayBuffer will require cross-origin isolation as of M91" warning is thrown when launching Player on Chrome ([1323832](https://issuetracker.unity3d.com/issues/webgl-sharedarraybuffer-will-require-cross-origin-isolation-as-of-m91-warning-is-thrown-when-launching-player-on-chrome))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Packman: Package resolution error when using a Git dependency referencing an annotated tag in its Git URL ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Settings Window: Editor freezes when FixedTimestep value in the Preferences is set to 0/0 ([1326481](https://issuetracker.unity3d.com/issues/editor-freezes-when-fixedtimestep-value-in-the-preferences-is-set-to-0-slash-0))
    
*   Scene/Game View: \[Wild Crash\] Editor crashes on mono\_aot\_get\_cached\_class\_info when GizmoSetup has cached an outdated data ([1259765](https://issuetracker.unity3d.com/issues/wild-crash-editor-crashes-on-mono-aot-get-cached-class-info-when-gizmosetup-has-cached-an-outdated-data))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.7f1 Release Notes

#### Changes

*   Services: Removed the "Migrate" button section from In-App Purchasing Settings when com.unity.purchasing version of 2 or less is installed. The migration warning messages are now in the section with the "Latest Version" section.

#### Fixes

*   Android: Fixed a freeze when using blend shapes with compute skinning on some devices with Mali G78 GPU. ([1298373](https://issuetracker.unity3d.com/issues/app-freezes-on-huawei-mate-40-pro-while-playing-multiple-blend-tree-animations))
    
*   Android: Fixed an issue where AutoRotation would not work on dual screen devices. ([1259295](https://issuetracker.unity3d.com/issues/android-screen-orientation-is-not-working-on-second-display-of-lg-v50-after-the-initial-screen-rotation))
    
*   Animation: Fixed an issue where the animator parameter values would truncate float values to 1 decimal. ([1308930](https://issuetracker.unity3d.com/issues/float-type-parameter-in-the-animator-controller-displays-0-dot-0-after-being-changed-to-0-dot-01))
    
*   Animation: Fixed an issue where the StateMachineBehaviour callback had been called when playable is paused. ([1321298](https://issuetracker.unity3d.com/issues/onstateenter-slash-onstateexit-is-called-repeatedly-when-an-animatorcontrollerplayable-is-paused-on-the-first-or-last-frame-of-a-state))
    
*   Asset Bundles: Fixed issue where loading assets from AssetBundles synchronously did not load native object types recursively in some situations. ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Asset Pipeline: Fixed an issue where an asset could get reported when projectsetting.asset file was modified directly. ([1270162](https://issuetracker.unity3d.com/issues/2d-game-kit-import-parameters-got-modified-during-import-error-is-thrown-when-opening-up-the-project-for-the-first-time))
    
*   Asset Pipeline: Fixed an issue where the main object name was not updated as appropriate when moving/renaming a file. ([1210886](https://issuetracker.unity3d.com/issues/prefab-file-contents-do-not-update-when-it-is-renamed))
    
*   Asset Pipeline: Fixed for a crash that could occur when downloading assets from cache server. (1319521)
    
*   Asset Pipeline: Fixed issue where hash of a .asset file on disk was being updated locally without going through the AssetDatabase, resulting in native source assets to not be reloaded. (1183116)
    
*   Build Pipeline: Fixed an edge case where windows relative paths were not handled correctly. ([1318673](https://issuetracker.unity3d.com/issues/test-framework-playerbuildinterface-dot-compileplayerscripts-causes-dll-not-found-errors-1))
    
*   DX12: Fixed a D3D12 memory leak with RenderTexture.enableRandomWrite (mostly happens when using SRPs with multiple cameras). (1329472)
    
*   Editor: Fixed a ReorderableList multi-target performance issue. ([1279141](https://issuetracker.unity3d.com/issues/inspector-multiselect-decreases-editor-performance))
    
*   Editor: Fixed an issue where ReorderableList was not getting expanded height for lists inside properties. ([1324456](https://issuetracker.unity3d.com/issues/scriptableobject-with-an-array-of-serializable-classes-with-arrays-in-them-is-overlapping-in-the-inspector-when-expanded))
    
*   Editor: Fixed ConsoleWindow copy for SafeMode. (1276089)
    
*   Editor: Removed EditorGUIUtility.GetSkinnedIcon and EditorGUIUtility.GetSkinnedIconForDpi to fix unloading of unused textures. Moved part of the implementation in C++ while keeping the features provided by the removed functions. (1308097)
    
*   GI: Fixed an editor crash when baking lightmaps with custom data. (1293007)
    
*   GI: Fixed an issue where progressive updates were not working for the first bake of an editor session. ([1300926](https://issuetracker.unity3d.com/issues/gpu-plm-progressive-updates-doesnt-work-on-first-bake-after-opening-the-editor))
    
*   Graphics: Fixed a performance issue when loading textures direct to GPU memory from LZ4 compressed packages. (1307820)
    
*   Graphics: Fixed a wrong remapper VFXCPUBuffer::BuildRemapper issue. (1317796)
    
*   Graphics: Fixed allocations errors with EncodeNativeArrayToEXR/PNG/JPG. (1315246)
    
*   Graphics: Fixed an issue where there was a missing buffer binding through Shader.SetGlobalBuffer after dispatching compute. ([1313736](https://issuetracker.unity3d.com/issues/urp-metal-mac-project-crashes-on-launch-when-binding-compute-buffer-to-shader))
    
*   IL2CPP: Fixed "Attempting to call method for which no ahead of time (AOT) code was generated" error when using Parallel Linq. ([1320295](https://issuetracker.unity3d.com/issues/il2cpp-executionengineexception-error-is-being-spammed-in-build-when-calling-linq-dot-parallelenumerable-dot-forall))
    
*   IL2CPP: Fixed a possible crash when attaching a debugger or setting breakpoints. ([1327376](https://issuetracker.unity3d.com/issues/crash-when-attaching-script-debugging-process-to-device))
    
*   IL2CPP: Fixed an issue where CultureInfo.DateTimeFormat was being loaded incorrectly in some locales. ([1252269](https://issuetracker.unity3d.com/issues/il2cpp-indexoutofrangeexception-is-thrown-when-using-system-dot-cultureinfo-with-thai-culture-in-il2cpp-build))
    
*   iOS: Fixed an issue where Time.unscaledDeltaTime was incorrect after the screen was locked. ([1319890](https://issuetracker.unity3d.com/issues/ios-time-dot-unscaleddeltatime-becomes-high-when-locking-the-screen-when-using-ondemandrendering))
    
*   Linux: Reduced log spam when loading lots of assets. ([1320406](https://issuetracker.unity3d.com/issues/linux-platformimageforiconforextension-editor-log-spam-when-closing-the-editor-after-importing-a-project))
    
*   Particles: Fixed a ParticleSystemRenderer.SetMeshes script API issue. ([1322561](https://issuetracker.unity3d.com/issues/particles-mesh-isnt-updated-when-using-particlesystemrenderer-dot-setmeshes))
    
*   Particles: Fixed an invalid AABB error when using Rate over Distance and Limit Velocity. ([1317418](https://issuetracker.unity3d.com/issues/invalid-aabb-error-is-thrown-when-moving-a-particle-with-velocity-over-lifetime-and-limit-velocity-over-lifetime-modules))
    
*   Physics: Fixed an issue where Character Controller sometimes ignored other Colliders. (1279841)
    
*   Physics: Fixed an issue with setting Surface Penetration to 0 on objects that were authored on one scale but used with another. This would manifest itself as incorrect particle separation behavior. ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   Prefabs: Fixed a Lego Microgame crash in the tutorial that occurred when the undo objects array contained null object. (1297802)
    
*   Profiler: Fixed an issue on Mac when restoring the defaults in the Profiler modules dropdown list would not closes the dropdown list. ([1323673](https://issuetracker.unity3d.com/issues/profiler-order-of-modules-fails-to-reset-on-using-the-restore-defaults-option-from-the-profiler))
    
*   Scene/Game View: Fixed an issue when Clicking the orientation Gizmo in the Scene View would stopped working. ([1311606](https://issuetracker.unity3d.com/issues/clicking-the-orientation-gizmo-in-the-scene-view-stopped-working))
    
*   Scripting: Fixed an issue where instanciation of Unity objects defined in types under more than one level of nesting would not work. ([1299861](https://issuetracker.unity3d.com/issues/failing-to-initialize-an-instance-of-editorwindow-when-its-in-3rd-level-of-class-nesting))
    
*   Services: Fixed the "Latest Version" section of the In-App Purchasing Settings when com.unity.purchasing version of 2 or less is installed. It now always offers the verified version, but adds migration warning messages about moving to newer versions which do not use the IAP Asset Store plugin. (1242076)
    
*   Text: Fixed GetPathsToOSFonts() not returning all system font files.
    
*   Text: Fixed potential crash when using FontEngine.LoadFontFace(Font font) when the font object was previously unloaded.
    
*   UI: Fixed an issue where a camera with a render target setup that was targeting a disabled display would not render UI. ([1316603](https://issuetracker.unity3d.com/issues/world-space-canvas-is-not-rendered-to-the-render-texture-when-cameras-target-display-is-other-than-display-1))
    
*   UI Toolkit: Fixed an issue where text changes were allowed on text input field when they are disabled. ([1286143](https://issuetracker.unity3d.com/issues/packages-search-results-are-not-updated-when-changing-search-box-value-during-the-packages-refresh))
    
*   Universal Windows Platform: Fixed TouchScreenKeyboard to use Private keyboard layouts when "secure" flag is set. ([1320676](https://issuetracker.unity3d.com/issues/uwp-touchscreenkeyboard-shows-word-suggestions-for-password-and-other-secure-input-fields))
    
*   Video: Fixed a Windows 7 "WindowsVideoMedia error 0xc00d36b4" error that was thrown when loading a video with the VideoPlayer. ([1306350](https://issuetracker.unity3d.com/issues/windows-7-windowsvideomedia-error-0xc00d36b4-error-is-thrown-when-loading-a-video-with-the-videoplayer))
    
*   Video: Fixed an issue where Stereoscopic layout controls are missing in VideoPlayer and Skybox Panoramic shader. (1307239)
    
*   XR: Fixed EditorXR errors when activating the XR.SDK. (1318732)

### Known Issues in 2020.3.6f1

*   WebGL: "SharedArrayBuffer will require cross-origin isolation as of M91" warning is thrown when launching Player on Chrome ([1323832](https://issuetracker.unity3d.com/issues/webgl-sharedarraybuffer-will-require-cross-origin-isolation-as-of-m91-warning-is-thrown-when-launching-player-on-chrome))
    
*   Mono: Crash on System.Net.Sockets.Socket:QueueIOSelectorJob when using a VPN and opening a project that uses Visual Studio ([1308797](https://issuetracker.unity3d.com/issues/crash-on-system-dot-net-dot-sockets-dot-socket-queueioselectorjob-when-using-a-vpn-and-opening-a-project-that-uses-visual-studio))
    
*   DirectX12: Editor crashes on GfxDeviceD3D12Base::DrawBuffersCommon when switching between Scenes ([1329083](https://issuetracker.unity3d.com/issues/editor-crashes-on-gfxdeviced3d12base-drawbufferscommon-when-switching-between-scenes))
    
*   Asset Import Pipeline: Prefab script field reference is lost when project is upgraded ([1328724](https://issuetracker.unity3d.com/issues/prefab-script-field-reference-is-lost-when-project-is-upgraded))
    
*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Physics: OnTriggerEnter gets called after reparenting a RigidBody ([1323883](https://issuetracker.unity3d.com/issues/onentertrigger-gets-called-after-reparenting-a-rigidbody))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Packman: Package resolution error when using a Git dependency referencing an annotated tag in its Git URL ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Asset Bundles: \[macOS\] Editor crashes when trying to build Asset bundles in InitializeOnLoad or InitializeOnLoadMethod time ([1328463](https://issuetracker.unity3d.com/issues/macos-editor-crashes-when-trying-to-build-asset-bundles-in-initializeonload-or-initializeonloadmethod-time))
    
*   Settings Window: Editor freezes when FixedTimestep value in the Preferences is set to 0/0 ([1326481](https://issuetracker.unity3d.com/issues/editor-freezes-when-fixedtimestep-value-in-the-preferences-is-set-to-0-slash-0))
    
*   HD RP: The camera doesn't rotate in HDRP Template with the SimpleCameraController.cs script ([1326816](https://issuetracker.unity3d.com/issues/the-camera-doesnt-rotate-in-hdrp-template-with-the-simplecameracontroller-dot-cs-script))
    
*   Scene/Game View: \[Wild Crash\] Editor crashes on mono\_aot\_get\_cached\_class\_info when GizmoSetup has cached an outdated data ([1259765](https://issuetracker.unity3d.com/issues/wild-crash-editor-crashes-on-mono-aot-get-cached-class-info-when-gizmosetup-has-cached-an-outdated-data))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Asset Bundles: Crash on vk::DecompressShader when loading an AssetBundle with AssetBundle.LoadFromFile() and using Vulkan Graphics API ([1308947](https://issuetracker.unity3d.com/issues/crash-on-vk-decompressshader-when-loading-an-assetbundle-with-assetbundle-dot-loadfromfile-and-using-vulkan-graphics-api))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Addressable Assets: Performance bug in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.6f1 Release Notes

#### Improvements

*   Editor: Updated HelpBox information in Enable Code Coverage preference and added button to install the code coverage package.
    
*   Package Manager: Com.unity.purchasing updated with missing documentation.
    
*   Scripting: CompiliationPipeline.GetAssemblies will now correctly include Roslyn analyzers in ScriptCompilerOptions.
    
*   XR: Updated OpenXR Package to 1.1.1.
    

#### API Changes

*   iOS: Added: Added `iOS.Device.iosAppOnMac` flag to check if app built for iOS is running on Mac equipped with Apple Silicon chip.

#### Fixes

*   2D: Fixed an issue where GameView did not refresh when dragging Sprite into SceneView on Windows. ([1284452](https://issuetracker.unity3d.com/issues/2d-urp-game-view-not-refreshed-on-removing-sprite-from-scene-view))
    
*   Ads: Fixed an issue where there could be a 400 error when enabling ads. (1308010)
    
*   Asset Pipeline: Fixed an issue where duplicated assets with children could select the wrong main object. ([1302399](https://issuetracker.unity3d.com/issues/duplicating-asset-replaces-it-with-one-of-its-sub-assets-if-the-asset-is-created-in-a-version-before-fix))
    
*   Audio: Fixed a potential volume fluctuation issue in timeline audio on scene change. ([1198128](https://issuetracker.unity3d.com/issues/audio-clips-on-scene-end-while-switching-scenes-when-one-scene-has-timeline-audio-playing))
    
*   Build Pipeline: Fixed an excessive garbage collection issue that occurred during the build process. ([1318468](https://issuetracker.unity3d.com/issues/editorassetgarbagecollectmanager-memory-threshold-overflows-due-to-int-wrapping-when-threshold-is-set-to-more-than-2gb))
    
*   Burst: Fixed a macOS hang that could occur when a native hardware exception was thrown from Burst code while a dylib was being loaded from disk. ([1307691](https://issuetracker.unity3d.com/issues/macos-crash-on-gc-mark-from-when-trashed-gc-objects-are-used-by-burst))
    
*   Burst: Fixed an issue when generating Line Table only debug information, an unreachable could occur due to a missing check.
    
*   Burst: Fixed an issue where the multi-CPU dispatcher (used for player builds targetting multiple CPU architectures) could end up generating invalid instructions.
    
*   Burst: Fixed an issue where the PDB debug information for instance methods that also used struct return were incorrect.
    
*   DX12: Fixed black screen issue that would show when using a non-native resolution in fullscreen. ([1318666](https://issuetracker.unity3d.com/issues/dx12-nothing-is-being-rendered-when-using-alt-plus-enter-to-maximize-a-resized-windowed-player))
    
*   Editor: Fixed "TLS Allocator" error when using Asset Store Tools. ([1303631](https://issuetracker.unity3d.com/issues/tls-allocator-error-when-using-asset-store-tools))
    
*   Editor: Fixed an issue where 'Create Empty Parent' relied on Scene View position. (1292746)
    
*   Editor: Fixed an issue where IsArrayReorderable method produced errors in Reflect package. ([1321782](https://issuetracker.unity3d.com/issues/invalidoperationexception-queue-empty-error-is-thrown-when-selecting-an-asset-and-viewing-it-in-the-inspector))
    
*   Editor: Fixed an issue where multi-target ReorderableLists that had more than the maximum allowed multi-edit number of elements appearing as empty. ([1317103](https://issuetracker.unity3d.com/issues/reorderable-arrays-with-high-element-counts-show-up-as-empty-when-multi-selecting))
    
*   Editor: Fixed crash when duplicating a GameObject with HideInHierarchy flag. ([1288394](https://issuetracker.unity3d.com/issues/crash-on-transform-setsiblingindexinternal-when-duplicating-or-copy-pasting-a-specific-gameobject))
    
*   Editor: Fixed issue with object selector closing inappropriately on click. (1286812)
    
*   Editor: Fixed reordering lists issue with Gradient elements being visually outdated after reorder. ([1315679](https://issuetracker.unity3d.com/issues/the-preview-of-the-gradient-is-not-changed-when-reordering-gradient-list-or-array-in-the-inspector))
    
*   GI: Fixed an issue when writing to stored LightProbes when setting baked coefficients in play mode. ([1265063](https://issuetracker.unity3d.com/issues/changes-to-the-coefficients-of-the-light-probes-persist-after-exiting-the-play-mode-when-they-were-changed-during-the-play-mode))
    
*   GI: Fixed an issue where Wintermute::Geometry::Verify errors were spammed when baking a Mesh with Mesh Compression set to Medium/High. ([1319133](https://issuetracker.unity3d.com/issues/speedtree-asset-breaks-when-trying-to-lightmap))
    
*   Graphics: Fixed a possible crash on Adreno when using RenderPass API and Vulkan. ([1282143](https://issuetracker.unity3d.com/issues/android-vulkan-crash-on-adreno-devices-with-vulkan-when-using-subpass-data-from-previous-subpass))
    
*   Graphics: Fixed an issue where the proper graphics multithreaded mode was not chosen. ([1223767](https://issuetracker.unity3d.com/issues/enabling-graphics-jobs-in-2019-dot-3-x-results-in-a-crash-or-nothing-rendering-on-hololens-2))
    
*   Graphics: Fixed blit operation issue when the source was null and a custom shader was being used. ([1278604](https://issuetracker.unity3d.com/issues/cannot-use-custom-materials-when-commandbuffer-blitting-from-cameratarget-into-rendertexture))
    
*   IL2CPP: Fixed an issue to workaround a crash caused by a MSVC optimizer incorrectly reuses stack space when a stack pointer is returned via a function pointer. ([1317949](https://issuetracker.unity3d.com/issues/il2cpp-build-crash-on-ordinal0-when-accessing-a-nativearray-at-current-index-in-a-ijobfor-slash-ijobparallelfor))
    
*   IL2CPP: Fixed an issue whwere convert assemblies that did not have the correct type. ([1319131](https://issuetracker.unity3d.com/issues/uwp-builds-fail-with-rewired))
    
*   iOS: Fixed a performance issue where Microphone.Start would cause CPU spikes on iOS. If the user selects the player setting "Prepare iOS for Recording", these spikes have been eliminated. They will now only occur when switching back-and-forth between a built-in microphone and a Bluetooth microphone. When using "Prepare iOS for Recording", most projects will also want to set "Force iOS Speakers when Recording". ([1281833](https://issuetracker.unity3d.com/issues/mobile-microphone-dot-start-method-invocation-causes-200-800ms-spikes))
    
*   iOS: Fixed an issue where Leaderboards did not return the non deprecated player ID on appropriate OS versions. ([1312882](https://issuetracker.unity3d.com/issues/ios-social-api-score-dot-userid-returns-a-legacy-id-from-gamecenter))
    
*   Particles: Fixed incorrect error check in SetParticles that would cause an exception to be thrown when the offset value was equal or greater than the particles array length. ([1313413](https://issuetracker.unity3d.com/issues/offset-is-outside-the-valid-range-error-is-thrown-when-setting-the-particles-with-the-same-variables-as-getting-them))
    
*   Profiler: Fixed an issue when Profiler might lose metadata for markers spanned across multiple frames. (1288339)
    
*   Scripting: Fixed an issue where Code editors were not listing roslyn analyzers and source generators.
    
*   Scripting: Fixed issue where mono boehm shutdown would wait a full 2 seconds for threads to detach/join/end before ending the process. ([1295072](https://issuetracker.unity3d.com/issues/built-player-takes-multiple-seconds-to-shut-down))
    
*   Serialization: Fixed a regression where Event code could be stripped from build when using il2cpp. ([1301147](https://issuetracker.unity3d.com/issues/enabling-a-meshrenderer-from-a-unityevent-is-not-possible-in-a-il2cpp-build))
    
*   Shaders: Fixed a regression issue that was dropping some shader errors from the inspector after restarting the editor. ([1325521](https://issuetracker.unity3d.com/issues/shader-compilation-errors-are-not-shown-when-editor-is-restarted))
    
*   UI Elements: Fixed errors that were caused by the use of the current culture to parse UXML attributes as float/double. (1308180)
    
*   UI Elements: Fixed the inability to launch the editor in clamped GLES 3.0 and 3.1 mode. Also, it is now possible to use UIToolkit on GLES 3.0 and 3.1 devices that do not support float render textures. ([1311845](https://issuetracker.unity3d.com/issues/uir-r32g32b32a32-sfloat-not-supported-on-opengl-es-3-dot-0-and-3-dot-1))
    
*   Video: Fixed an issue where changing VideoPlayer.frame before playing the video did not change Video clock time. ([1297646](https://issuetracker.unity3d.com/issues/changing-videoplayer-dot-frame-before-playing-the-video-does-not-change-video-clock-time))
    
*   XR: Fixed an issue where XRDisplaySubsystem and XRInputSubsystem were not available on WebGL build target. (1283105)
    
*   XR: Fixed deadlock when using XR + URP + D3D11 with skipPresentToMainScreen. ([1323833](https://issuetracker.unity3d.com/issues/openxr-plus-urp-plus-uwp-rendering-stuck))
    
*   XR: Fixed issue where shadows would jitter while rotating a camera at an extreme distance from the origin of the scene in mono rendering. ([1281930](https://issuetracker.unity3d.com/issues/shadows-flickering-when-scene-is-offset-from-origin-and-camera-has-a-low-near-clip-plane))
    
*   XR: Updated the verified AR Foundation related packages to 4.1.7. Please see the AR Foundation package changelog for details.

### Known Issues in 2020.3.5f1

*   Mono: Crash on System.Net.Sockets.Socket:QueueIOSelectorJob when using a VPN and opening a project that uses Visual Studio ([1308797](https://issuetracker.unity3d.com/issues/crash-on-system-dot-net-dot-sockets-dot-socket-queueioselectorjob-when-using-a-vpn-and-opening-a-project-that-uses-visual-studio))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Asset Import Pipeline: Prefab script field reference is lost when project is upgraded ([1328724](https://issuetracker.unity3d.com/issues/prefab-script-field-reference-is-lost-when-project-is-upgraded))
    
*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Asset Bundles: \[macOS\] Editor crashes when trying to build Asset bundles in InitializeOnLoad or InitializeOnLoadMethod time ([1328463](https://issuetracker.unity3d.com/issues/macos-editor-crashes-when-trying-to-build-asset-bundles-in-initializeonload-or-initializeonloadmethod-time))
    
*   Scene/Game View: \[Game view\] Game stops accepting input when the Game view undocked and re-docked during Play Mode using the Input System ([1320678](https://issuetracker.unity3d.com/issues/game-stops-accepting-input-when-the-game-view-undocked-and-re-docked-during-play-mode-using-the-input-system))
    
*   Settings Window: Editor freezes when FixedTimestep value in the Preferences is set to 0/0 ([1326481](https://issuetracker.unity3d.com/issues/editor-freezes-when-fixedtimestep-value-in-the-preferences-is-set-to-0-slash-0))
    
*   AI: Crash with ComputeTileMeshJob when generating Navmesh ([1329346](https://issuetracker.unity3d.com/issues/crash-with-computetilemeshjob-when-generating-navmesh))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   IL2CPP: Build fails when using a combination of messages, SyncVars and SyncList in a project ([1328966](https://issuetracker.unity3d.com/issues/il2cpp-build-fails-when-using-a-combination-of-messages-syncvars-and-synclist-in-a-project))
    
*   Packman: Package resolution error when using a Git dependency referencing an annotated tag in its Git URL ([1325920](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   HD RP: The camera doesn't rotate in HDRP Template with the SimpleCameraController.cs script ([1326816](https://issuetracker.unity3d.com/issues/the-camera-doesnt-rotate-in-hdrp-template-with-the-simplecameracontroller-dot-cs-script))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   WebGL: "SharedArrayBuffer will require cross-origin isolation as of M91" warning is thrown when launching Player on Chrome ([1323832](https://issuetracker.unity3d.com/issues/webgl-sharedarraybuffer-will-require-cross-origin-isolation-as-of-m91-warning-is-thrown-when-launching-player-on-chrome))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Global Illumination: Reflection probes don't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Global Illumination: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1319133](https://issuetracker.unity3d.com/issues/speedtree-asset-breaks-when-trying-to-lightmap))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Windows: \[Windows 7\] "WindowsVideoMedia error 0xc00d36b4" error is thrown when loading a video with the VideoPlayer ([1306350](https://issuetracker.unity3d.com/issues/windows-7-windowsvideomedia-error-0xc00d36b4-error-is-thrown-when-loading-a-video-with-the-videoplayer))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Asset Bundles: Synchronous Asset Loading Does Not Correctly Load Preload Dependencies ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Addressable Assets: Performance bug in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

#### API Changes

*   Physics: Added: Exposed ArticulationBody.collisionDetectionMode property to set various collision detection modes, like Discrete, Continuous and etc.
    
*   Services: Changed: Updated analytics dashboard to point to new location.
    

#### Changes

*   Package: Updated Windows MR package to 4.4.2.
    
*   WebGL: Changed behavior of `Application.OpenURL()` for the WebGL platform to open an URL in a new browser tab instead of opening the URL in the current browser tab and thus navigating away. ([1320393](https://issuetracker.unity3d.com/issues/application-dot-openurl-not-working-for-webgl-builds))
    

#### Fixes

*   DX12: Fixed for incorrect parameter type on native plugin API IUnityGraphicsD3D12v5::TextureFromRenderBuffer and IUnityGraphicsD3D12v6::TextureFromRenderBuffer. (1278695)
    
*   Editor: Fixed an issue when using an unsupported keyCode in a shortcut attribute would throw exceptions. ([1303144](https://issuetracker.unity3d.com/issues/shortcut-window-is-blank-and-errors-are-thrown-when-unsupported-button-is-used-in-shortcut-attribute))
    
*   Editor: Fixed an issue where items in the right click menu were not doing anything on reorderable lists on Windows. ([1307389](https://issuetracker.unity3d.com/issues/right-click-options-do-nothing-on-arrays-in-scriptable-object-with-custom-editors))
    
*   Editor: Fixed an issue where paste as child should paste relative to parent instead of keeping world transform. (1320439)
    
*   Editor: Fixed issue where WinMerge would not be detected as a diff tool on some systems. ([1303298](https://issuetracker.unity3d.com/issues/winmerge-is-not-defectected-in-preferences-diff-tool-dropdown))
    
*   GI: Fixed a null pointer issue in graphics bindings. ([1310875](https://issuetracker.unity3d.com/issues/crash-on-rendererscripting-updategimaterialsforrenderer-when-calling-updategimaterials-on-a-null-renderer))
    
*   Graphics: Fixed a crash when changing the mesh data during the frame. ([1227781](https://issuetracker.unity3d.com/issues/crash-on-createdirect3d11surfacefromdxgisurface-when-a-material-in-mesh-renderer-is-selected))
    
*   Graphics: Fixed an incorrect cubemap texture issue on some platforms when using crunched textures. (1282758)
    
*   Graphics: Fixed an issue where DrawProcedural reported incorrect triangle counts to FrameStats. ([1313194](https://issuetracker.unity3d.com/issues/incorrect-triangle-counts-reported-to-framestats-when-using-drawprocedural))
    
*   Graphics: Fixed an issue where first Material data was not used for Shadowmap rendering when using multiple Materials with the same Shader and different properties. ([1304644](https://issuetracker.unity3d.com/issues/first-material-data-is-used-for-shadowmap-rendering-when-using-multiple-materials-with-the-same-shader-and-different-properties))
    
*   Graphics: Fixed an issue where GraphicsFormat.R8G8B8A8\_SNorm was not a blendable render-target format on Metal. (1318364)
    
*   Graphics: Fixed for async texture deletion issue to make sure graphics commands were completed first. ([1280073](https://issuetracker.unity3d.com/issues/unloading-source-asset-immediately-after-blit-source-dest-can-result-in-blank-dest))
    
*   IMGUI: Fixed an issue where clearing the search field using 'x' button does not register changed event. ([1306036](https://issuetracker.unity3d.com/issues/endchangecheck-is-not-triggered-when-clearing-the-imgui-search-field-by-pressing-the-x-button))
    
*   macOS: Fixed an issue for failing to resign binaries after Unity had signed them with error: "file not in an order that can be processed (code signature data out of place):". ([1324168](https://issuetracker.unity3d.com/issues/resigning-unity-built-macos-app-results-in-code-signature-data-out-of-place-out-of-place-error))
    
*   macOS: Fixed Windows and Linux native plugins issue where they were getting included into the generated Xcode project. ([1321049](https://issuetracker.unity3d.com/issues/xcode-macos-copyplugins-phase-in-xcode-build-phases-includes-dll-files))
    
*   Package Manager: Fixed an issue when Package Manager asked for writable access when opening a project even though it only needed readable access. ([1263378](https://issuetracker.unity3d.com/issues/packman-package-manager-resolver-asks-for-writable-access-when-opening-a-project-even-though-it-only-needs-readable-access))
    
*   Package Manager: Fixed an issue when the project manifest and the lock file were unchanged after an UPM operation, they should not be checked out. (1263363)
    
*   Package Manager: Fixed an issue where project manifest and lock file were not checked out when they were made writable by Package Manager upon opening a project while upgrading project. ([1263362](https://issuetracker.unity3d.com/issues/packman-files-arent-checked-out-when-they-are-made-writable-by-package-manager-upon-opening-a-project))
    
*   Particles: Fixed an issue where there was a missing particle attributes to the C# Job System integration. ([1312288](https://issuetracker.unity3d.com/issues/particlesystemjobdata-does-not-expose-methods-for-modifying-mesh-index-when-using-unityengine-dot-particlesystemjobs))
    
*   Particles: Fixed `Simulate` behaviour that was incorrectly labelled as Prewarm in the profiler. ([1296365](https://issuetracker.unity3d.com/issues/particlesystem-dot-prewarm-is-caused-when-calling-particlesystem-dot-simulate-even-if-prewarm-option-is-disabled-on-the-particlesystem))
    
*   Physics: Fixed an issue where Collision.relativeVelocity was being calculated incorrectly when an ArticulationBody was part of the contact pair. ([1310485](https://issuetracker.unity3d.com/issues/collision-dot-relativevelocity-always-return-zero-when-using-articulationbody-on-collision))
    
*   Physics: Fixed an issue where Kinematic Rigidbody2D did not accept MovePosition and/or MoveRotation commands when nested as a child of another Rigidbody2D. ([1320783](https://issuetracker.unity3d.com/issues/physics-inconsitency-with-nested-rigidbody-and-rigidbody2d))
    
*   Profiler: Fixed memory tracking of UnsafeUtility allocations issue. ([1320540](https://issuetracker.unity3d.com/issues/unsafeutility-dot-malloc-allocations-are-not-tracked-correctly-in-memory-profiler-and-leak-memory))
    
*   Services: Fixed an issue where the crash reporting symbol uploader process would crash on Apple M1 hardware.
    
*   Services: Fixed an issue where the crash reporting symbol uploader process would crash on parsing certain dSYM files. ([1312498](https://issuetracker.unity3d.com/issues/macos-m1-segmentation-fault-error-is-thrown-when-running-the-usymtool-on-a-m1-machine))
    
*   Shaders: Fixed a crash when PrimitiveID was the only input to a stage. ([1289378](https://issuetracker.unity3d.com/issues/internal-error-communicating-with-the-shader-compiler-process-when-sv-primitiveid-is-the-only-input-signature))
    
*   Shaders: Fixed a rare crash when upgrading shaders. ([1299790](https://issuetracker.unity3d.com/issues/editor-crashes-on-upgradeoldshadersyntax-when-shaders-are-being-upgraded-during-importing-process))
    
*   Shaders: Fixed an issue where #pragma once directive was not working correctly with the caching preprocessor. ([1322879](https://issuetracker.unity3d.com/issues/dot-hlsl-file-doesnt-get-included-when-using-number-pragma-once))
    
*   Shaders: Fixed an issue where sprites were using default sprite material a not rendering in the Editor when build target was set to console. (1318066)
    
*   Shaders: Fixed an issue where the incorrect code was generated by HLSLcc for textureQueryLod GLSL function. ([1314040](https://issuetracker.unity3d.com/issues/shader-compiler-fails-to-generate-vulkan-output-when-hlsl-texture-method-calculatelevelofdetail-is-used))
    
*   Shaders: Fixed incorrect line numbers reported for errors in shader files when using Caching preprocessor. ([1318689](https://issuetracker.unity3d.com/issues/errors-shown-in-the-console-window-point-to-the-incorrect-line-number-in-shader-code))
    
*   Timeline: Fixed timeline audio playing on timelines with GameTime update mode issue when Time.timeScale was 0. ([1269783](https://issuetracker.unity3d.com/issues/timeline-audio-is-not-paused-when-setting-audiolistener-dot-pause-to-true))
    
*   Video: Fixed an issue when VideoPlayer.frameReady did not get invoked after seeking a video to a frame. ([1302462](https://issuetracker.unity3d.com/issues/videoplayer-dot-frameready-does-not-get-invoked-after-seeking-a-video-to-a-frame))
    
*   Windows: Fixed an issue where setting a custom cursor would not respects Windows DPI and Ease of Access settings related to the cursor size. ([1305480](https://issuetracker.unity3d.com/issues/windows-max-mouse-cursor-size-is-limited-when-using-cursor-dot-setcursor-and-cannot-be-increased-past-a-certain-threshold))
    
*   Windows: Fixed an issue where the Win10 SDK was not installed properly. ([1308226](https://issuetracker.unity3d.com/issues/hub-doesnt-install-windows-10-sdk-properly))
    
*   XR: Fixed a CommandBuffer.SetRenderTarget() with XR single-pass rendering issue. ([1261545](https://issuetracker.unity3d.com/issues/xr-xr-sdk-commandbuffer-dot-setrendertarget-is-causing-to-render-different-in-each-eye-when-using-single-pass-instanced-mode))
    
*   XR: Fixed a depth buffer sharing support issue. ([1242142](https://issuetracker.unity3d.com/issues/shared-depth-buffer-not-populated-properly-breaking-wmr-reprojection))
    
*   XR: Fixed an issue for frame debugger editor which broke XR rendering. ([1275361](https://issuetracker.unity3d.com/issues/xr-quest-frame-debugger-frame-debugger-first-freezes-unity-then-breaks-xr-rendering-and-head-tracking))
    
*   XR: Fixed some improper temp string usage issue that were causing the allocator to spam the system logs. (1284830)

### Known Issues in 2020.3.4f1

*   Animation: AnimationEvent is fired late or isn't fired at all when Animation's 'Motion Time' value is set manually ([1324763](https://issuetracker.unity3d.com/issues/animationevent-is-fired-late-or-isnt-fired-at-all-when-animations-motion-time-value-is-set-manually))
    
*   Windows: \[Windows 7\] "WindowsVideoMedia error 0xc00d36b4" error is thrown when loading a video with the VideoPlayer ([1306350](https://issuetracker.unity3d.com/issues/windows-7-windowsvideomedia-error-0xc00d36b4-error-is-thrown-when-loading-a-video-with-the-videoplayer))
    
*   Metal: Performance in Game View is significantly impacted by Gfx.WaitForPresentOnGfxThread when a second monitor is connected ([1327408](https://issuetracker.unity3d.com/issues/performance-in-game-view-is-significantly-impacted-by-gfx-dot-waitforpresentongfxthread-when-a-second-monitor-is-connected))
    
*   Terrain: All the textures are cleared when creating Texture array ([1323870](https://issuetracker.unity3d.com/issues/all-the-textures-are-cleared-when-creating-texture-array))
    
*   Animation: \[Performance Regression\] AnimationWindowState:get\_allCurves takes approximately 5000ms to load animation in the Animation window ([1320250](https://issuetracker.unity3d.com/issues/perfomance-regression-animationwindowstate-get-allcurves-takes-approximately-5000ms-to-load-animation-in-the-animation-window))
    
*   HDRP: The camera doesn't rotate in HDRP Template with the SimpleCameraController.cs script ([1326816](https://issuetracker.unity3d.com/issues/the-camera-doesnt-rotate-in-hdrp-template-with-the-simplecameracontroller-dot-cs-script))
    
*   Scene Management: Crash on BuildPrefabInstanceCorrespondingObjectMap when overriding nested prefab inside AssetDatabase.StartAssetEditing() block ([1324978](https://issuetracker.unity3d.com/issues/crash-on-buildprefabinstancecorrespondingobjectmap-when-overriding-nested-prefab-inside-assetdatabase-dot-startassetediting-block))
    
*   WebGL: "SharedArrayBuffer will require cross-origin isolation as of M91" warning is thrown when launching Player on Chrome ([1323832](https://issuetracker.unity3d.com/issues/webgl-sharedarraybuffer-will-require-cross-origin-isolation-as-of-m91-warning-is-thrown-when-launching-player-on-chrome))
    
*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Global Illumination: Reflection probes doesn't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Asset Bundles: Synchronous Asset Loading Does Not Correctly Load Preload Dependencies ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Packman: PackageManager.Client.SearchAll(offlineMode: true) returns an error if user offline ([1319585](https://issuetracker.unity3d.com/issues/packagemanager-dot-client-dot-searchall-offlinemode-true-returns-an-error-if-user-offline))
    
*   Addressable Assets: Performance bug in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Shader System: Editor crashes on UpgradeOldShaderSyntax when shaders are being upgraded during importing process ([1299790](https://issuetracker.unity3d.com/issues/editor-crashes-on-upgradeoldshadersyntax-when-shaders-are-being-upgraded-during-importing-process))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   XR: OpenXR + URP + UWP rendering stuck ([1323833](https://issuetracker.unity3d.com/issues/openxr-plus-urp-plus-uwp-rendering-stuck))
    
*   Mono: Built player takes multiple seconds to shut down ([1295072](https://issuetracker.unity3d.com/issues/built-player-takes-multiple-seconds-to-shut-down))
    
*   Global Illumination: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1319133](https://issuetracker.unity3d.com/issues/speedtree-asset-breaks-when-trying-to-lightmap))
    
*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.4f1 Release Notes

### Known Issues in 2020.3.3f1

*   2D: \[Skinning Editor\] Vertex can't be created after modifying Vertexes weight and when Sprite is from the .psb file ([1322204](https://issuetracker.unity3d.com/issues/skinning-editor-vertex-cant-be-created-after-modifying-vertexes-weight-and-when-sprite-is-from-the-psb-file))
    
*   Addressable Assets: Performance bug in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Windows: \[Windows 7\] "WindowsVideoMedia error 0xc00d36b4" error is thrown when loading a video with the VideoPlayer ([1306350](https://issuetracker.unity3d.com/issues/windows-7-windowsvideomedia-error-0xc00d36b4-error-is-thrown-when-loading-a-video-with-the-videoplayer))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   Asset Bundles: Synchronous Asset Loading Does Not Correctly Load Preload Dependencies ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Global Illumination: Reflection probes doesn't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Mono: Built player takes multiple seconds to shut down ([1295072](https://issuetracker.unity3d.com/issues/built-player-takes-multiple-seconds-to-shut-down))
    
*   Global Illumination: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1319133](https://issuetracker.unity3d.com/issues/speedtree-asset-breaks-when-trying-to-lightmap))
    
*   MacOS: Resigning Unity built macOS app results in "code signature data out of place" out of place error ([1324168](https://issuetracker.unity3d.com/issues/resigning-unity-built-macos-app-results-in-code-signature-data-out-of-place-out-of-place-error))
    
*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Mobile: FixedUpdate gets called multiple times before the first Update when Build is run on a Device ([1318647](https://issuetracker.unity3d.com/issues/mobile-fixedupdate-gets-called-multiple-times-before-the-first-update-when-build-is-run-on-a-device))
    
*   Scripting: Increased script compilation time ([1317926](https://issuetracker.unity3d.com/issues/increased-script-compilation-time))
    
*   XR: OpenXR + URP + UWP rendering stuck ([1323833](https://issuetracker.unity3d.com/issues/openxr-plus-urp-plus-uwp-rendering-stuck))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Shader System: Editor crashes on UpgradeOldShaderSyntax when shaders are being upgraded during importing process ([1299790](https://issuetracker.unity3d.com/issues/editor-crashes-on-upgradeoldshadersyntax-when-shaders-are-being-upgraded-during-importing-process))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.3f1 Release Notes

### Known Issues in 2020.3.2f1

*   Linux: Linux Editor crashes at "\_XFreeX11XCBStructure" when loading tutorials ([1323204](https://issuetracker.unity3d.com/issues/linux-editor-crashes-at-xfreex11xcbstructure-when-loading-tutorials))
    
*   Scripting: Increased Script Assembly reload time ([1323490](https://issuetracker.unity3d.com/issues/increased-reload-time))
    
*   MacOS: Resigning Unity built macOS app results in "code signature data out of place" out of place error ([1324168](https://issuetracker.unity3d.com/issues/resigning-unity-built-macos-app-results-in-code-signature-data-out-of-place-out-of-place-error))
    
*   Terrain: Crash on TreeRenderer::WillRenderTrees when being in Play Mode for several seconds ([1317966](https://issuetracker.unity3d.com/issues/crash-on-treerenderer-willrendertrees-when-being-in-play-mode-for-several-seconds))
    
*   IMGUI: Contents of a ModalUtility window are invisible when it is launched from a Unity Context Menu ([1313636](https://issuetracker.unity3d.com/issues/error-displaying-showmodalutility-window))
    
*   Global Illumination: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1319133](https://issuetracker.unity3d.com/issues/speedtree-asset-breaks-when-trying-to-lightmap))
    
*   Global Illumination: Reflection probes doesn't contain indirect scene lighting after the on-demand GI bake from the Lighting window ([1324246](https://issuetracker.unity3d.com/issues/reflection-probes-doesnt-contain-indirect-scene-lighting-after-the-on-demand-gi-bake-from-the-lighting-window))
    
*   Addressable Assets: Performance bug reported by the DOTS team in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Asset Bundles: Synchronous Asset Loading Does Not Correctly Load Preload Dependencies ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   Windows: \[Windows 7\] "WindowsVideoMedia error 0xc00d36b4" error is thrown when loading a video with the VideoPlayer ([1306350](https://issuetracker.unity3d.com/issues/windows-7-windowsvideomedia-error-0xc00d36b4-error-is-thrown-when-loading-a-video-with-the-videoplayer))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Mobile: FixedUpdate gets called multiple times before the first Update when Build is run on a Device ([1318647](https://issuetracker.unity3d.com/issues/mobile-fixedupdate-gets-called-multiple-times-before-the-first-update-when-build-is-run-on-a-device))
    
*   XR: OpenXR + URP + UWP rendering stuck ([1323833](https://issuetracker.unity3d.com/issues/openxr-plus-urp-plus-uwp-rendering-stuck))
    
*   MacOS: \[macOS\] "build is damaged and cannot be opened" error when downloading Unity build from internet ([1323501](https://issuetracker.unity3d.com/issues/macos-build-is-damaged-and-cannot-be-opened-error-when-downloading-unity-build-from-internet))
    
*   Shuriken: Crash on ParticleSystem\_ShapeModule\_CUSTOM\_set\_sprite\_Injected when changing the shape.sprite of a null ParticleSystem ([1319658](https://issuetracker.unity3d.com/issues/crash-on-particlesystem-shapemodule-custom-set-sprite-injected-when-changing-the-shape-dot-sprite-of-a-null-particlesystem))
    
*   Linux: Linux Editor throws "X Server took longer than x miliseconds to respond to SetGtkWindowSizeAndPosition" error after opening ([1309607](https://issuetracker.unity3d.com/issues/linux-editor-throws-x-server-took-longer-than-x-miliseconds-to-respond-to-setgtkwindowsizeandposition-error-after-opening))
    
*   Android: App installed using APK from app bundle option in Android Studio fails to run ([1314472](https://issuetracker.unity3d.com/issues/android-app-installed-using-apk-from-app-bundle-option-in-android-studio-fails-to-run))
    
*   Shader System: Editor crashes on UpgradeOldShaderSyntax when shaders are being upgraded during importing process ([1299790](https://issuetracker.unity3d.com/issues/editor-crashes-on-upgradeoldshadersyntax-when-shaders-are-being-upgraded-during-importing-process))
    
*   Mono: Built player takes multiple seconds to shut down ([1295072](https://issuetracker.unity3d.com/issues/built-player-takes-multiple-seconds-to-shut-down))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.2f1 Release Notes

### Known Issues in 2020.3.1f1

*   Addressable Assets: Performance bug reported by the DOTS team in PreloadManager::WaitForAllOperationToComplete ([1322086](https://issuetracker.unity3d.com/issues/performance-bug-reported-by-the-dots-team-in-preloadmanager-waitforalloperationtocomplete))
    
*   Asset Bundles: Synchronous Asset Loading Does Not Correctly Load Preload Dependencies ([1321141](https://issuetracker.unity3d.com/issues/synchronous-asset-loading-does-not-correctly-load-preload-dependencies))
    
*   Packman: User can't easily configure location of both UPM and Asset Store package local cache ([1317232](https://issuetracker.unity3d.com/issues/user-cant-easily-configure-location-of-both-upm-and-asset-store-package-local-cache))
    
*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Shader System: Editor crashes on UpgradeOldShaderSyntax when shaders are being upgraded during importing process ([1299790](https://issuetracker.unity3d.com/issues/editor-crashes-on-upgradeoldshadersyntax-when-shaders-are-being-upgraded-during-importing-process))
    
*   Mono: Built player takes multiple seconds to shut down ([1295072](https://issuetracker.unity3d.com/issues/built-player-takes-multiple-seconds-to-shut-down))
    
*   Scripting: Crashes on mono\_class\_init when entering Play Mode after recompiling scripts ([1262671](https://issuetracker.unity3d.com/issues/crashes-on-mono-class-init-when-entering-play-mode-after-recompiling-scripts))
    
*   Android: App installed using APK from app bundle option in Android Studio fails to run ([1314472](https://issuetracker.unity3d.com/issues/android-app-installed-using-apk-from-app-bundle-option-in-android-studio-fails-to-run))
    
*   Mobile: FixedUpdate gets called multiple times before the first Update when Build is run on a Device ([1318647](https://issuetracker.unity3d.com/issues/mobile-fixedupdate-gets-called-multiple-times-before-the-first-update-when-build-is-run-on-a-device))
    
*   Asset Importers: Wintermute::Geometry::Verify errors are spammed when baking a Mesh with Mesh Compression set to Medium/High ([1313968](https://issuetracker.unity3d.com/issues/wintermute-geometry-verify-errors-are-spammed-when-baking-a-mesh-with-mesh-compression-set-to-medium-slash-high))
    
*   Linux: Linux Editor throws "X Server took longer than x miliseconds to respond to SetGtkWindowSizeAndPosition" error after opening ([1309607](https://issuetracker.unity3d.com/issues/linux-editor-throws-x-server-took-longer-than-x-miliseconds-to-respond-to-setgtkwindowsizeandposition-error-after-opening))
    
*   Shuriken: Crash on ParticleSystem::EndUpdateAll ([1311212](https://issuetracker.unity3d.com/issues/shuriken-crash-on-particlesystem-endupdateall))
    
*   Shuriken: Crash on ParticleSystem\_ShapeModule\_CUSTOM\_set\_sprite\_Injected when changing the shape.sprite of a null ParticleSystem ([1319658](https://issuetracker.unity3d.com/issues/crash-on-particlesystem-shapemodule-custom-set-sprite-injected-when-changing-the-shape-dot-sprite-of-a-null-particlesystem))
    
*   Mobile: Calling Resources.Load() while asynchronously loading assetbundle by UnityWebRequest makes main thread stuck ([1277297](https://issuetracker.unity3d.com/issues/ios-android-calling-resources-dot-load-while-asynchronously-loading-assetbundle-by-unitywebrequest-makes-main-thread-stuck))
    
*   Shader System: Crash on PAL\_LocalIPC\_IsConnected when IPC fails on launch ([1319336](https://issuetracker.unity3d.com/issues/crash-on-pal-localipc-isconnected-when-ipc-fails-on-launch))
    
*   Shader System: \[URP Template\] Major performance drop in the Editor during Play Mode ([1277222](https://issuetracker.unity3d.com/issues/urp-template-major-performance-drop-in-the-editor-during-play-mode))
    
*   Packman: Package Manager's prompt keeps reappearing to resolve packages ([1315014](https://issuetracker.unity3d.com/issues/package-managers-prompt-keeps-reappearing-to-resolve-packages))
    
*   Mobile: Screen.dpi returns 0 on iPad Pro for projects built from 2019.4.16f1 ([1300359](https://issuetracker.unity3d.com/issues/screen-dot-dpi-returns-0-on-ipad-pro-for-projects-built-from-2019-dot-4-16f1))
    
*   Cloth: Skinned Mesh Renderer's Bounds Extent is set to half of the Transform's Scale when using a Cloth Component ([1209765](https://issuetracker.unity3d.com/issues/skinned-mesh-renderers-bounds-extent-is-set-to-half-of-the-transforms-scale-when-using-a-cloth-component))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.1f1 Release Notes

### Known Issues in 2020.3.0f1

*   Cloth: Cloth is broken when parent GameObject scale is lower than 1 and Surface Penetration constraints are set 0 ([1319488](https://issuetracker.unity3d.com/issues/cloth-is-broken-when-parent-gameobject-scale-is-lower-than-1-and-surface-penetration-constraints-are-set-0))
    
*   Mobile: FixedUpdate gets called multiple times before the first Update when Build is run on a Device ([1318647](https://issuetracker.unity3d.com/issues/mobile-fixedupdate-gets-called-multiple-times-before-the-first-update-when-build-is-run-on-a-device))
    
*   2D: "NullReferenceException: SerializedObject of SerializedProperty" is thrown when building Sprite Atlas ([1318332](https://issuetracker.unity3d.com/issues/nullreferenceexception-serializedobject-of-serializedproperty-is-thrown-when-building-sprite-atlas))
    
*   Shuriken: Crash on ParticleSystem\_ShapeModule\_CUSTOM\_set\_sprite\_Injected when changing the shape.sprite of a null ParticleSystem ([1319658](https://issuetracker.unity3d.com/issues/crash-on-particlesystem-shapemodule-custom-set-sprite-injected-when-changing-the-shape-dot-sprite-of-a-null-particlesystem))
    
*   Profiling: \[Profiler\] Timeline sample names from surrounding frames disappear when zooming or panning ([1317697](https://issuetracker.unity3d.com/issues/profiler-timeline-sample-names-from-surrounding-frames-disappear-when-zooming-or-panning))
    
*   Linux: Linux Editor throws "X Server took longer than x miliseconds to respond to SetGtkWindowSizeAndPosition" error after opening ([1309607](https://issuetracker.unity3d.com/issues/linux-editor-throws-x-server-took-longer-than-x-miliseconds-to-respond-to-setgtkwindowsizeandposition-error-after-opening))
    
*   Shuriken: Crash on ParticleSystem::EndUpdateAll ([1311212](https://issuetracker.unity3d.com/issues/shuriken-crash-on-particlesystem-endupdateall))
    
*   Shader System: Crash on PAL\_LocalIPC\_IsConnected when IPC fails on launch ([1319336](https://issuetracker.unity3d.com/issues/crash-on-pal-localipc-isconnected-when-ipc-fails-on-launch))
    
*   Universal RP: \[URP\] Unable to add "Overrides" in "Volume Profile" ([1318535](https://issuetracker.unity3d.com/issues/urp-unable-to-add-overrides-in-volume-profile))
    
*   Templates: Editor Crashes when performing Undo and Redo after duplicating Game Object with LEGO Model Asset component ([1298503](https://issuetracker.unity3d.com/issues/crash-when-redoing-and-undoing-pasting-prefabs-in-scene-in-lego-microgame))
    
*   Linux: InputSystem's Mouse delta values do not change when the Cursor lockState is set to Locked ([1248389](https://issuetracker.unity3d.com/issues/linux-inputsystems-mouse-delta-values-do-not-change-when-the-cursor-lockstate-is-set-to-locked))
    
*   Asset Importers: \[Performance Regression\] Importing an fbx model is noticeably slower when the model contains Animations ([1265275](https://issuetracker.unity3d.com/issues/performance-regression-importing-an-fbx-model-is-noticeably-slower-when-the-model-contains-animations))
    
*   Physics: Crash in physx::NpArticulationReducedCoordinate::createCache() when calling JointState.SaveJointState for unparented bodies ([1264800](https://issuetracker.unity3d.com/issues/crash-in-physx-nparticulationreducedcoordinate-createcache-when-calling-jointstate-dot-savejointstate-for-unparented-bodies))
    
*   Shader System: \[URP Template\] Major performance drop in the Editor during Play Mode ([1277222](https://issuetracker.unity3d.com/issues/urp-template-major-performance-drop-in-the-editor-during-play-mode))
    
*   Mobile: Screen.dpi returns 0 on iPad Pro for projects built from 2019.4.16f1 ([1300359](https://issuetracker.unity3d.com/issues/screen-dot-dpi-returns-0-on-ipad-pro-for-projects-built-from-2019-dot-4-16f1))
    
*   Cloth: Skinned Mesh Renderer's Bounds Extent is set to half of the Transform's Scale when using a Cloth Component ([1209765](https://issuetracker.unity3d.com/issues/skinned-mesh-renderers-bounds-extent-is-set-to-half-of-the-transforms-scale-when-using-a-cloth-component))
    
*   Shader System: Shader error db grows on each build ([1317744](https://issuetracker.unity3d.com/issues/shader-error-db-grows-on-each-build))
    
*   Serialization: Editor crashes on RaiseException when allocating huge amount of memory ([1313492](https://issuetracker.unity3d.com/issues/editor-crashes-on-raiseexception-when-allocating-huge-amount-of-memory))
    
*   Polybrush: \[PolyBrush\] Something went wrong saving brush settings Warning is thrown when Saving a Brush after opening the PolyBrush Window ([1315475](https://issuetracker.unity3d.com/issues/polybrush-something-went-wrong-saving-brush-settings-warning-is-thrown-when-saving-a-brush-after-opening-the-polybrush-window))
    
*   Templates: \[Linux\] Missing libdl.so library causes crash when entering Playmode for the second time or closing the Editor ([1237642](https://issuetracker.unity3d.com/issues/missing-libdl-dot-so-library-causes-crash-when-entering-playmode-for-the-second-time-or-closing-the-editor))
    

### 2020.3.0f1 Release Notes

#### Fixes

*   Asset Import: Fixed a rare unstable asset hash for assets with large metadata. ([1285620](https://issuetracker.unity3d.com/issues/consistency-checker-logs-say-that-import-results-are-inconsistent-for-textures))
    
*   Audio: Fixed a DSPGraph/Burst player crash. ([1297730](https://issuetracker.unity3d.com/issues/dspgraph-playclip-sample-crashes-in-windows-slash-x64-build))
    
*   Editor: Fixed a ReorderableList GC issue due to registry usage. (1315466)
    
*   Editor: Fixed issue on Windows where mouse pointer did not hide while in Play mode. ([1273522](https://issuetracker.unity3d.com/issues/the-cursor-dot-visible-equals-false-does-not-work-when-inputsystem-package-is-installed))
    
*   Graphics: A CopyDepth pass was previously included which allowed users script access to \_CameraDepthTarget but this has been removed on the metal GPU families that use Tile-based renderers (iOS, Silicon-GPU), fixed the performance decrease that caused this ([1298799](https://issuetracker.unity3d.com/issues/ios-copydepth-pass-is-present-in-the-legacy-deferred-render-pipeline-and-results-in-extra-render-target-memory-and-gpu-time))
    
*   macOS: Fixed a code signing issue of native plugins in Xcode projects. ([1276317](https://issuetracker.unity3d.com/issues/xcode-macos-bundle-plugins-are-not-signed-in-xcode-projects))
    
*   macOS: Fixed an issue when exported macOS Standalone player builds were refusing to launch and showing " was damaged and could not be opened" error when downloaded from the internet. ([1304455](https://issuetracker.unity3d.com/issues/macos-builds-now-contain-a-quarantine-attribute))
    
*   Scene Manager: Fixed a crash when the asset of a current opened scene had been deleted, a new scene asset was imported, with same GUID, and the user choose "reload". ([1309393](https://issuetracker.unity3d.com/issues/freeze-or-crash-on-editorscenemanager-reloadscene-when-importing-an-asset-and-reloading-the-opened-scene))
    
*   Scripting: Fixed an issue when Application.quitting event was not raised when application was terminated from the OS side. ([1309540](https://issuetracker.unity3d.com/issues/application-dot-quitting-event-is-not-raised-when-closing-build))
    
*   Scripting: Validate cyclic dependencies on assembly definition update ([1293762](https://issuetracker.unity3d.com/issues/exception-thrown-instead-of-error-when-creating-assembly-with-cyclic-reference))
    
*   Serialization: Fixed a crash when using JSONUtility to deserialize objects that had Serialized References. ([1296236](https://issuetracker.unity3d.com/issues/jsonutility-deserialization-corrupted-values))
    
*   UI Toolkit: Fixed an issue where use cases for SerializedObject bindings would cause the Editor to crash. ([1305198](https://issuetracker.unity3d.com/issues/serializereference-editor-crashes-when-creating-a-graphview-node-after-deleting-a-graphview-node-with-serializedproperty))
    

#### Changes

*   Graphics: Update SRP packages to 10.3.2 ([1298466](https://issuetracker.unity3d.com/issues/visual-effect-graph-infinite-compilation-when-opening), [1309219](https://issuetracker.unity3d.com/issues/shadergraph-undeclared-identifier-unitybuildtexture2dstructnoscale-errors-when-using-a-sample-texture-2d-node-in-a-vfx-sg))

