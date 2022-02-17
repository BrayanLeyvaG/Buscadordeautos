const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://img-us-2.trovit.com/img2mx/1j1r9guq1h1r/1j1r9guq1h1r.1_11.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico',
		url: 'https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/305dcdc2/featured_image.png'
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://static.cargurus.com/images/forsale/2022/01/04/02/40/2015_ford_mustang-pic-923503253816590725-1024x768.jpeg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico',
		url: 'https://todosobrecoches.com/wp-content/uploads/2020/02/Audi-A6-2020.jpg'
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico',
		url: 'https://w0.peakpx.com/wallpaper/79/748/HD-wallpaper-2016-bmw-1-series-sport-line-5-door-front-car.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://images.kavak.services/images/20401/mercedes-benz-clase-c-c200-cgi-sport2015-frontal-lateral-piloto-lejana-1588029842951.jpg'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		url: 'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2018-camaro/04-images/rojo-ardiente-camaro-six-ss-2018.jpg?imwidth=960'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual',
		url: 'https://static.motor.es/fotos-noticias/2018/09/min652x435/ford-mustang-chevrolet-camaro-dodge-challenger-gama-2019-precios-201849843_2.jpg' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://s.aolcdn.com/commerce/autodata/images/USC90DOC191C021001.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 
        'manual',
		url: 'https://images.kavak.services/images/40624/audi-a3-dynamic2017-frontal-lateral-piloto-lejana-1616704428500.jpg?d=540x310' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dodge-challenger-srt-super-stock-2020-1600-03-1593769621.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico',
		url: 'https://s1.eestatic.com/2021/06/21/motor/590704308_192719632_1706x960.jpg'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://www.diariomotor.com/imagenes/picscache/1920x1600c/bmw-serie-5-2021-0520-059_1920x1600c.jpg'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual',
		url: 'https://cdn.buttercms.com/PqhH3j3qRoyHV4gtfxpc' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico',
		url: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2014/04/334255-dodge-challenger-2015.jpg'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://images.kavak.services/images/35391/bmw-serie-3-330e-sport-line-hibrido2018-frontal-lateral-piloto-lejana-1612990231335.jpg?d=540x310'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico',
		url: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/5-series/sedan/2020/models-and-equipment/bmw-5-series-sedan-models-and-equipment-lines-01-01.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		url: 'https://soloautos.li.csnstatic.com/soloautos/car/private/lk19sd20y0nsm3cvabl8alwf8.jpg?pxc_method=gravityfill&pxc_bgtype=self&height=725&width=1087'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico',
		url: 'https://www.km77.com/media/fotos/audi_a4_2016_berlina_5768_1.jpg'
    }
];
