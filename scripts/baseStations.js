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

var photos = [
    {
        id: 1, photos: [
            { id: 1, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 2, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 3, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 4, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 5, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 6, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 7, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 8, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 9, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 2, photos: [
            { id: 10, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 11, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 12, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 13, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 14, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 15, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 16, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 17, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 18, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 19, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 3, photos: [
            { id: 20, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 21, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 22, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 23, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 24, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 25, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 26, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 27, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 28, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 29, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 4, photos: [
            { id: 30, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 31, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 32, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 33, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 34, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 35, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 36, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 37, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 38, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 39, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 5, photos: [
            { id: 40, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 41, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 42, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 43, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 44, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 45, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 46, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 47, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 48, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 49, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 6, photos: [
            { id: 50, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 51, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 52, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 53, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 54, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 55, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 56, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 57, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 58, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 59, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 7, photos: [
            { id: 60, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 61, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 62, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 63, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 64, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 65, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 66, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 67, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 68, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 69, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 8, photos: [
            { id: 70, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 71, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 72, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 73, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 74, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 75, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 76, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 77, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 78, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 79, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 9, photos: [
            { id: 80, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 81, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 82, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 83, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 84, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 85, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 86, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 87, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 88, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 89, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 10, photos: [
            { id: 90, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 91, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 92, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 93, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 94, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 95, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 96, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 97, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 98, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 99, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 11, photos: [
            { id: 100, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 101, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 102, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 103, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 104, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 105, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 106, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 107, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 108, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 109, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 12, photos: [
            { id: 110, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 111, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 112, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 113, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 114, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 115, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 116, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 117, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 118, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 119, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
        ]
    },
    {
        id: 13, photos: [
            { id: 120, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 121, name: '基站正东', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 122, name: '基站正北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 123, name: '基站东南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 124, name: '基站正南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 125, name: '基站正西', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 126, name: '基站西南', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 127, name: '基站西北', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 128, name: '基站机房外', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' },
            { id: 129, name: '基站机房内', upload_time: '2014-07-01 12:00:00', uploader: 'xiaoMing', path: '/upload/fan.jpg' }
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