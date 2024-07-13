const filtersStatus = [
    { text: "未知", value: 0 },
    { text: "兼容", value: 1 },
    { text: "有限兼容", value: 2 },
    { text: "新世界可用", value: 3 },
    { text: "不兼容", value: -1 },
];

const filtersHardwareBrand = [
    { text: "八位堂(8BitDo)", value: "8BitDo" },
    { text: "威刚(ADATA)", value: "ADATA" },
    { text: "超威半导体(AMD)", value: "AMD" },
    { text: "华硕(ASUS)", value: "ASUS" },
    { text: "艾酷(Akko)", value: "Akko" },
    { text: "兄弟(Brother)", value: "Brother" },
    { text: "七彩虹(Colorful)", value: "Colorful" },
    { text: "英睿达/美光(Crucial/Micron)", value: "Crucial/Micron" },
    { text: "江波龙(longsys/FORESEE)", value: "longsys/FORESEE" },
    { text: "光威(Gloway)", value: "Gloway" },
    { text: "芯动科技(InnoSilicon)", value: "InnoSilicon" },
    { text: "英特尔(Intel)", value: "Intel" },
    { text: "景嘉微(JINGJIA Micro)", value: "JINGJIA Micro" },
    { text: "金百达(KingBank)", value: "KingBank" },
    { text: "金士顿(Kingston)", value: "Kingston" },
    { text: "凌久微电子(Lingjiu Micro)", value: "Lingjiu Micro" },
    { text: "微软(Microsoft)", value: "Microsoft" },
    { text: "摩尔线程(Moore Threads)", value: "Moore Threads" },
    { text: "裕太微电子(Motorcomm)", value: "Motorcomm" },
    { text: "英伟达(NVIDIA)", value: "NVIDIA" },
    { text: "铨兴(Quanxing)", value: "Quanxing" },
    { text: "瑞昱(Realtek)", value: "Realtek" },
    { text: "三星(Samsung)", value: "Samsung" },
    { text: "思得/SK海力士(Solidigm/SK Hynix)", value: "Solidigm/SK Hynix" },
    { text: "西安紫光国芯(UniIC)", value: "UniIC" },
    { text: "西部数据(Western Digital)", value: "Western Digital" },
    { text: "小米(Xiaomi)", value: "Xiaomi" },
    { text: "致态/长江存储(ZHITAI/YMTC)", value: "ZHITAI/YMTC" }
];

const filtersHardwareType = [
    { text: "内存(UDIMM)", value: "Memory_UDIMM" },
    { text: "内存(UDIMM/ECC)", value: "Memory_UDIMMECC" },
    { text: "内存(RDIMM)", value: "Memory_RDIMM" },
    { text: "内存(SO-DIMM)", value: "Memory_SODIMM" },
    { text: "显卡", value: "GPU" },
    { text: "有线网卡", value: "Ethernet" },
    { text: "无线网卡", value: "Wireless" },
    { text: "固态硬盘(SATA)", value: "SSD_SATA" },
    { text: "固态硬盘(NVMe)", value: "SSD_NVMe" },
    { text: "机械硬盘(SATA)", value: "HDD_SATA" },
    { text: "其他存储类设备(SATA)", value: "Storage_SATA" },
    { text: "键盘", value: "Keyboard" },
    { text: "鼠标", value: "Mouse" },
    { text: "手柄控制器", value: "Gamepad" },
    { text: "打印机", value: "Printer" },
    { text: "扫描仪", value: "Scanner" },
    { text: "打印复印一体机", value: "Printer_AIO" },
    { text: "PCIe 扩展卡", value: "PCIe_Card" },
    { text: "USB 设备", value: "USB_Device" },
    { text: "固件", value: "Firmware" }
];

const filtersLatStatus = [
    { text: "未知", value: 0 },
    { text: "兼容", value: 1 },
    { text: "有限兼容", value: 2 },
    { text: "原生可用", value: 3 },
    { text: "不兼容", value: -1 },
];

export { filtersStatus, filtersHardwareBrand, filtersHardwareType, filtersLatStatus }