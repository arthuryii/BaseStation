var base_stations = [
    { id: 1, name: 'NODE001', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.425337, lat: 36.147311 },
    { id: 2, name: 'NODE002', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.435337, lat: 36.152311 },
    { id: 3, name: 'NODE003', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.445337, lat: 36.127311 },
    { id: 4, name: 'NODE004', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.445337, lat: 36.137311 },
    { id: 5, name: 'NODE005', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.445337, lat: 36.167311 },
    { id: 6, name: 'NODE006', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.455337, lat: 36.157311 },
    { id: 7, name: 'NODE007', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.455337, lat: 36.127311 },
    { id: 8, name: 'NODE008', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.465337, lat: 36.147311 },
    { id: 9, name: 'NODE009', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.455337, lat: 36.137311 },
    { id: 10, name: 'NODE010', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.415337, lat: 36.167311 },
    { id: 11, name: 'NODE011', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.415337, lat: 36.157311 },
    { id: 12, name: 'NODE012', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.405337, lat: 36.137311 },
    { id: 13, name: 'NODE013', update_time: '2014-07-01 12:00:00', lac: 18252, ci: 7011, direction_angle: 120, inclination_angle: 10, address: 'XX市XX区XX路XXX', lng: 120.395337, lat: 36.127311 }
]

var base_station_grid_data = {
    Rows: base_stations
}

var positions = [
    '',
    '基站东南',
    '基站正东',
    '基站正北',
    '基站东北',
    '基站正南',
    '基站正西',
    '基站西南',
    '基站西北',
    '基站机房外',
    '基站机房内'
]

var photos = [
    {
        id: 1, photos: [
            { id: 1, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 2, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 3, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 4, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 5, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 6, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 7, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 8, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 9, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 130, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 2, photos: [
            { id: 10, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 11, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 12, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 13, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 14, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 15, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 16, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 17, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 18, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 19, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 3, photos: [
            { id: 20, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 21, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 22, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 23, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 24, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 25, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 26, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 27, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 28, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 29, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 4, photos: [
            { id: 30, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 31, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 32, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 33, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 34, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 35, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 36, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 37, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 38, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 39, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 5, photos: [
            { id: 40, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 41, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 42, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 43, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 44, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 45, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 46, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 47, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 48, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 49, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 6, photos: [
            { id: 50, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 51, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 52, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 53, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 54, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 55, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 56, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 57, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 58, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 59, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 7, photos: [
            { id: 60, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 61, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 62, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 63, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 64, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 65, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 66, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 67, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 68, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 69, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 8, photos: [
            { id: 70, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 71, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 72, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 73, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 74, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 75, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 76, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 77, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 78, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 79, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 9, photos: [
            { id: 80, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 81, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 82, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 83, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 84, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 85, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 86, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 87, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 88, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 89, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 10, photos: [
            { id: 90, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 91, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 92, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 93, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 94, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 95, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 96, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 97, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 98, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 99, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 11, photos: [
            { id: 100, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 101, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 102, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 103, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 104, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 105, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 106, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 107, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 108, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 109, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 12, photos: [
            { id: 110, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 111, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 112, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 113, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 114, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 115, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 116, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 117, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 118, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 119, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    },
    {
        id: 13, photos: [
            { id: 120, position: 1, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 121, position: 2, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 122, position: 3, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 123, position: 4, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 124, position: 5, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 125, position: 6, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 126, position: 7, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 127, position: 8, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 128, position: 9, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' },
            { id: 129, position: 10, upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/BaseStation/upload/fan.jpg' }
        ]
    }
]

var users = [
    { id: 1, login: 'laoZhao', name: '老赵', gender: '男', phone: '13511112222', role: '管理员' },
    { id: 2, login: 'laoWang', name: '老王', gender: '男', phone: '13511112222', role: '管理员' },
    { id: 3, login: 'laoLi', name: '老李', gender: '男', phone: '13511112222', role: '管理员' },
    { id: 4, login: 'laoQian', name: '老前', gender: '男', phone: '13511112222', role: '管理员' },
    { id: 5, login: 'laoLiu', name: '老刘', gender: '男', phone: '13511112222', role: '管理员' }
]

var user_grid_data = {
    Rows: users
}