/**
* 批量添加卡券。 
*/ 
function addCard(obj: object): void;

/**
* 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。 
*/ 
function addPhoneContact(obj: object): void;

/**
* 将 ArrayBuffer 数据转成 Base64 字符串 
*/ 
function arrayBufferToBase64(arraybuffer: string[]): void;

/**
* 部分接口需要获得同意后才能调用。此类接口调用时，如果用户未授权过，会弹窗询问用户，用户点击同意后方可调用接口。如果用户点了拒绝，则短期内调用不会出现弹窗，而是直接进入 fail 回调。用户可以在小程序设置界面中修改对该小程序的授权信息。本接口用于提前向用户发起授权，调用后会立刻弹窗询问用户是否同意小程序使用某项功能或获取用户的某些数据，但不会实际调用接口。如果用户之前已经同意，则不会出现弹窗，直接返回成功。 
*/ 
function authorize(obj: object): void;

/**
* 将 Base64 字符串转成 ArrayBuffer 数据 
*/ 
function base64ToArrayBuffer(base64: string): void;

/**
* 判断小程序的API，回调，参数，组件等是否在当前版本可用。 
*/ 
function canIUse(str: string): void;

/**
* 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。 
*/ 
function canvasToTempFilePath(obj: object): void;

/**
* 截取当前屏幕内容 
*/ 
function captureScreen(obj: object): void;

/**
* 通过上述接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用wx.checkSession接口**检测当前用户登录态是否有效**。登录态过期后开发者可以再调用wx.login获取新的用户登录态。 
*/ 
function checkSession(obj: object): void;

/**
* 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。 
*/ 
function chooseAddress(obj: object): void;

/**
* 调起选择手机通讯录联系人界面，返回用户选择的联系人信息。 
*/ 
function chooseContact(obj: object): void;

/**
* 从本地相册选择图片或使用相机拍照。 
*/ 
function chooseImage(obj: object): void;

/**
* 打开地图选择位置 
*/ 
function chooseLocation(obj: object): void;

/**
* 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。 
*/ 
function chooseVideo(obj: object): void;

/**
* 清理本地数据缓存。 
*/ 
function clearStorage(): void;

/**
* 同步清理本地数据缓存 
*/ 
function clearStorageSync(): void;

/**
* 断开与低功耗蓝牙设备的连接 
*/ 
function closeBLEConnection(obj: object): void;

/**
* 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源 
*/ 
function closeBluetoothAdapter(obj: object): void;

/**
* 关闭WebSocket连接。 
*/ 
function closeSocket(obj: object): void;

/**
* 创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 连接；**一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。** 
*/ 
function connectSocket(obj: object): void;

/**
* 创建一个动画实例[animation](#animation)。调用实例的方法来描述动画。最后通过动画实例的`export`方法导出动画数据传递给组件的`animation`属性。 
*/ 
function createAnimation(obj: object): void;

/**
* 创建并返回 audio 上下文 `audioContext` 对象 
*/ 
function createAudioContext(audioid: string): void;

/**
* 连接低功耗蓝牙设备 
*/ 
function createBLEConnection(obj: object): void;

/**
* 创建 canvas 绘图上下文（指定 canvasId） 
*/ 
function createCanvasContext(canvasid: string): void;

/**
* 创建并返回绘图上下文。 
*/ 
function createContext(): void;

/**
* 创建并返回 map 上下文 `mapContext` 对象 
*/ 
function createMapContext(mapid: string): void;

/**
*  
*/ 
function createSelectorQuery(): void;

/**
* 创建并返回 video 上下文 `videoContext` 对象 
*/ 
function createVideoContext(videoid: string): void;

/**
* 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。 
*/ 
function downloadFile(obj: object): void;

/**
* 蓝牙设备characteristic(特征值)信息 
*/ 
function getBLEDeviceCharacteristics(obj: object): void;

/**
* 获取蓝牙设备所有 service（服务） 
*/ 
function getBLEDeviceServices(obj: object): void;

/**
* 获取**全局唯一**的背景音频管理器 `backgroundAudioManager` 
*/ 
function getBackgroundAudioManager(): object;

/**
* 获取后台音乐播放状态。 
*/ 
function getBackgroundAudioPlayerState(obj: object): void;

/**
* 获取所有已搜索到的`iBeacon`设备 
*/ 
function getBeacons(obj: object): void;

/**
* 获取本机蓝牙适配器状态 
*/ 
function getBluetoothAdapterState(obj: object): void;

/**
* 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备 
*/ 
function getBluetoothDevices(obj: object): void;

/**
* 获取系统剪贴板内容 
*/ 
function getClipboardData(obj: object): void;

/**
* 根据 uuid 获取处于已连接状态的设备 
*/ 
function getConnectedBluetoothDevices(obj: object): void;

/**
* 获取第三方平台自定义的数据字段。 
*/ 
function getExtConfig(obj: object): void;

/**
* 获取第三方平台自定义的数据字段的同步接口。 
*/ 
function getExtConfigSync(): object;

/**
* 获取文件信息 
*/ 
function getFileInfo(obj: object): void;

/**
* 获取图片信息 
*/ 
function getImageInfo(obj: object): void;

/**
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。 
*/ 
function getLocation(obj: object): void;

/**
* 获取网络类型。 
*/ 
function getNetworkType(obj: object): void;

/**
* 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 [wx.getFileInfo](./getFileInfo.md) 接口。 
*/ 
function getSavedFileInfo(obj: object): void;

/**
* 获取本地已保存的文件列表 
*/ 
function getSavedFileList(obj: object): void;

/**
* 获取屏幕亮度。 
*/ 
function getScreenBrightness(obj: object): void;

/**
* 获取用户的当前设置 
*/ 
function getSetting(obj: object): void;

/**
* 获取转发详细信息 
*/ 
function getShareInfo(obj: object): void;

/**
* 从本地缓存中异步获取指定 key 对应的内容。 
*/ 
function getStorage(obj: object): void;

/**
* 异步获取当前storage的相关信息 
*/ 
function getStorageInfo(obj: object): void;

/**
* 同步获取当前storage的相关信息 
*/ 
function getStorageInfoSync(): void;

/**
* 从本地缓存中同步获取指定 key 对应的内容。 
*/ 
function getStorageSync(key: string): void;

/**
* 获取系统信息。 
*/ 
function getSystemInfo(obj: object): void;

/**
* 获取系统信息同步接口 
*/ 
function getSystemInfoSync(): object;

/**
* 获取用户信息，需要先调用 [wx.login](./api-login.md#wxloginobject) 接口。 
*/ 
function getUserInfo(obj: object): void;

/**
* 获取用户过去三十天微信运动步数，需要先调用 [wx.login](./api-login.md#wxloginobject) 接口。 
*/ 
function getWeRunData(obj: object): void;

/**
* 隐藏 loading 提示框 
*/ 
function hideLoading(): void;

/**
* 隐藏导航条加载动画。 
*/ 
function hideNavigationBarLoading(): void;

/**
* 隐藏转发按钮 
*/ 
function hideShareMenu(obj: object): void;

/**
* 隐藏消息提示框 
*/ 
function hideToast(): void;

/**
* 调用接口获取**登录凭证（code）**进而换取用户登录态信息，包括用户的**唯一标识（openid）** 及本次登录的 **会话密钥（session_key）**。**用户数据的加解密通讯**需要依赖会话密钥完成。 
*/ 
function login(obj: object): void;

/**
* wx.makePhoneCall({ 
*/ 
function makePhoneCall(obj: object): void;

/**
* 关闭当前页面，返回上一页面或多级页面。可通过 [`getCurrentPages()`](../framework/app-service/page.md#getCurrentPages()) 获取当前的页面栈，决定需要返回几层。 
*/ 
function navigateBack(obj: object): void;

/**
* 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功 
*/ 
function navigateBackMiniProgram(obj: object): void;

/**
* 保留当前页面，跳转到应用内的某个页面，使用`wx.navigateBack`可以返回到原页面。 
*/ 
function navigateTo(obj: object): void;

/**
* 打开同一公众号下关联的另一个小程序。 
*/ 
function navigateToMiniProgram(obj: object): void;

/**
* 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持`notify`才可以成功调用，具体参照 characteristic 的 properties 属性 
*/ 
function notifyBLECharacteristicValueChange(obj: object): void;

/**
* 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 `wx.stopAccelerometer` 停止监听。 
*/ 
function onAccelerometerChange(callback: function): void;

/**
* 监听低功耗蓝牙设备的特征值变化。必须先启用`notify`接口才能接收到设备推送的notification。 
*/ 
function onBLECharacteristicValueChange(callback: function): void;

/**
* 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。 
*/ 
function onBLEConnectionStateChange(callback: function): void;

/**
* 监听音乐暂停。 
*/ 
function onBackgroundAudioPause(callback: string): void;

/**
* 监听音乐播放。 
*/ 
function onBackgroundAudioPlay(callback: string): void;

/**
* 监听音乐停止。 
*/ 
function onBackgroundAudioStop(callback: string): void;

/**
* 监听 `iBeacon` 服务的状态变化 
*/ 
function onBeaconServiceChange(callback: function): void;

/**
* 监听 `iBeacon` 设备的更新事件 
*/ 
function onBeaconUpdate(callback: function): void;

/**
* 监听蓝牙适配器状态变化事件 
*/ 
function onBluetoothAdapterStateChange(callback: function): void;

/**
* 监听寻找到新设备的事件 
*/ 
function onBluetoothDeviceFound(callback: function): void;

/**
* 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用`wx.stopCompass`停止监听。 
*/ 
function onCompassChange(callback: function): void;

/**
* 监听网络状态变化。 
*/ 
function onNetworkStatusChange(callback: function): void;

/**
* 监听WebSocket关闭。 
*/ 
function onSocketClose(callback: string): void;

/**
* 监听WebSocket错误。 
*/ 
function onSocketError(callback: string): void;

/**
* 监听WebSocket接受到服务器的消息事件。 
*/ 
function onSocketMessage(callback: function): void;

/**
* 监听WebSocket连接打开事件。 
*/ 
function onSocketOpen(callback: string): void;

/**
* 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件 
*/ 
function onUserCaptureScreen(callback: function): void;

/**
* 初始化蓝牙适配器 
*/ 
function openBluetoothAdapter(obj: object): void;

/**
* 查看微信卡包中的卡券。 
*/ 
function openCard(obj: object): void;

/**
* 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx 
*/ 
function openDocument(obj: object): void;

/**
* ​	使用微信内置地图查看位置 
*/ 
function openLocation(obj: object): void;

/**
* 调起客户端小程序设置界面，返回用户设置的操作结果 
*/ 
function openSetting(obj: object): void;

/**
* 将页面滚动到目标位置。 
*/ 
function pageScrollTo(obj: object): void;

/**
* 暂停播放音乐。 
*/ 
function pauseBackgroundAudio(): void;

/**
* 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。 
*/ 
function pauseVoice(): void;

/**
* 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。 
*/ 
function playBackgroundAudio(obj: object): void;

/**
* 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。 
*/ 
function playVoice(obj: object): void;

/**
* 预览图片。 
*/ 
function previewImage(obj: object): void;

/**
* 关闭所有页面，打开到应用内的某个页面。 
*/ 
function reLaunch(obj: object): void;

/**
* 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持`read`才可以成功调用，具体参照 characteristic 的 properties 属性 
*/ 
function readBLECharacteristicValue(obj: object): void;

/**
* 关闭当前页面，跳转到应用内的某个页面。 
*/ 
function redirectTo(obj: object): void;

/**
* 删除本地存储的文件 
*/ 
function removeSavedFile(obj: object): void;

/**
* 从本地缓存中异步移除指定 key 。 
*/ 
function removeStorage(obj: object): void;

/**
* 从本地缓存中同步移除指定 key 。 
*/ 
function removeStorageSync(key: string): void;

/**
* 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。 
*/ 
function reportAnalytics(eventname: string, data: string): void;

/**
* 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下： 
*/ 
function request(obj: object): void;

/**
* 发起微信支付。 
*/ 
function requestPayment(obj: object): void;

/**
* 保存文件到本地。 
*/ 
function saveFile(obj: object): void;

/**
* 保存图片到系统相册，需要用户授权（scope.writePhotosAlbum），详见 [用户授权](./authorize.md#wxauthorizeobject) 
*/ 
function saveImageToPhotosAlbum(obj: object): void;

/**
* 保存视频到系统相册，需要用户授权（scope.writePhotosAlbum），详见 [用户授权](./authorize.md#wxauthorizeobject) 
*/ 
function saveVideoToPhotosAlbum(obj: object): void;

/**
* 调起客户端扫码界面，扫码成功后返回对应的结果 
*/ 
function scanCode(obj: object): void;

/**
* 控制音乐播放进度。 
*/ 
function seekBackgroundAudio(obj: object): void;

/**
* 通过 WebSocket 连接发送数据，需要先 [wx.connectSocket](#wxconnectsocketobject)，并在 [wx.onSocketOpen](#wxonsocketopencallback) 回调之后才能发送。 
*/ 
function sendSocketMessage(obj: object): void;

/**
* 设置系统剪贴板的内容 
*/ 
function setClipboardData(obj: object): void;

/**
* 设置是否打开调试开关，此开关对正式版也能生效。 
*/ 
function setEnableDebug(obj: object): void;

/**
* 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。 
*/ 
function setKeepScreenOn(obj: object): void;

/**
* wx.setNavigationBarColor({ 
*/ 
function setNavigationBarColor(obj: object): void;

/**
* 动态设置当前页面的标题。 
*/ 
function setNavigationBarTitle(obj: object): void;

/**
* 设置屏幕亮度。 
*/ 
function setScreenBrightness(obj: object): void;

/**
* 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。 
*/ 
function setStorage(obj: object): void;

/**
* 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。 
*/ 
function setStorageSync(key: string, data: object|string): void;

/**
* ​显示操作菜单 
*/ 
function showActionSheet(obj: object): void;

/**
* 显示 loading 提示框, 需主动调用 [wx.hideLoading](#wxhideloading) 才能关闭提示框 
*/ 
function showLoading(obj: object): void;

/**
* ​显示模态弹窗 
*/ 
function showModal(obj: object): void;

/**
* 在当前页面显示导航条加载动画。 
*/ 
function showNavigationBarLoading(): void;

/**
* 显示当前页面的转发按钮 
*/ 
function showShareMenu(obj: object): void;

/**
* 显示消息提示框 
*/ 
function showToast(obj: object): void;

/**
* 开始监听加速度数据。 
*/ 
function startAccelerometer(obj: object): void;

/**
* 开始搜索附近的`iBeacon`设备 
*/ 
function startBeaconDiscovery(obj: object): void;

/**
* 开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。 
*/ 
function startBluetoothDevicesDiscovery(obj: object): void;

/**
* 开始监听罗盘数据。 
*/ 
function startCompass(obj: object): void;

/**
* 开始录音。当主动调用`wx.stopRecord`，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。 
*/ 
function startRecord(obj: object): void;

/**
* 停止监听加速度数据。 
*/ 
function stopAccelerometer(obj: object): void;

/**
* 停止播放音乐。 
*/ 
function stopBackgroundAudio(): void;

/**
* 停止搜索附近的`iBeacon`设备 
*/ 
function stopBeaconDiscovery(obj: object): void;

/**
* 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。 
*/ 
function stopBluetoothDevicesDiscovery(obj: object): void;

/**
* 停止监听罗盘数据。 
*/ 
function stopCompass(obj: object): void;

/**
* 停止当前页面下拉刷新。 
*/ 
function stopPullDownRefresh(): void;

/**
* ​	主动调用停止录音。 
*/ 
function stopRecord(): void;

/**
* 结束播放语音。 
*/ 
function stopVoice(): void;

/**
* 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 
*/ 
function switchTab(obj: object): void;

/**
* 更新转发属性 
*/ 
function updateShareMenu(obj: object): void;

/**
* 将本地资源上传到开发者服务器。如页面通过 [wx.chooseImage](./media-picture.md#wxchooseimageobject) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data` 。 
*/ 
function uploadFile(obj: object): void;

/**
* 使手机发生较长时间的振动（400ms） 
*/ 
function vibrateLong(obj: object): void;

/**
* 使手机发生较短时间的振动（15ms） 
*/ 
function vibrateShort(obj: object): void;

/**
* 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持`write`才可以成功调用，具体参照 characteristic 的 properties 属性 
*/ 
function writeBLECharacteristicValue(obj: object): void;

