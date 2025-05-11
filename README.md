# UnityReleaseNotes
**Last update time : `2025-05-12 02:18:38`	Powered By ChatGPT**

## More Unity Versions 
|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|&emsp;|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
| [6000.3](./merge_htmls/6000.3.md) | [6000.2](./merge_htmls/6000.2.md) | [6000.1](./merge_htmls/6000.1.md) | [6000.0](./merge_htmls/6000.0.md) | [2023.2](./merge_htmls/2023.2.md) | [2023.1](./merge_htmls/2023.1.md) | [2022.3](./merge_htmls/2022.3.md) | [2022.2](./merge_htmls/2022.2.md) | [2022.1](./merge_htmls/2022.1.md) |
| [2021.3](./merge_htmls/2021.3.md) | [2021.2](./merge_htmls/2021.2.md) | [2021.1](./merge_htmls/2021.1.md) | [2020.3](./merge_htmls/2020.3.md) | [2020.2](./merge_htmls/2020.2.md) | [2020.1](./merge_htmls/2020.1.md) | [2019.4](./merge_htmls/2019.4.md) | [2019.3](./merge_htmls/2019.3.md) | [2019.2](./merge_htmls/2019.2.md) |
| [2019.1](./merge_htmls/2019.1.md) | [2018.4](./merge_htmls/2018.4.md) | [2018.3](./merge_htmls/2018.3.md) | [2018.2](./merge_htmls/2018.2.md) | [2018.1](./merge_htmls/2018.1.md) | [2017.4](./merge_htmls/2017.4.md) | [2017.3](./merge_htmls/2017.3.md) | [2017.2](./merge_htmls/2017.2.md) | [2017.1](./merge_htmls/2017.1.md) |
| [5.6](./merge_htmls/5.6.md) | [5.5](./merge_htmls/5.5.md) | [5.4](./merge_htmls/5.4.md) | [5.3](./merge_htmls/5.3.md) | [5.2](./merge_htmls/5.2.md) | [5.1](./merge_htmls/5.1.md) | [5.0](./merge_htmls/5.0.md) | | |

## 6000.1

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

