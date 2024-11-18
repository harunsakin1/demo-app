/**
 * Burada global olarak tutacağımız dataları tanımlıyor olacağız ve bunları state içerisinde burada barındırıyor olacağız.
 * Ayrıca fetch işlemlerini daha düzenli ve organize olarak burada kontrol edeceğiz.
 * Slice tasarlamak için 3 işlem adımı gereklidir.
 * 1- İhtiyaç duyulan state listesini hazırlarız gerekli oldukça ekleme yapılır.
 * 2- Opsiyonel olmakla birlikte, slice bir sayfayı sadece state olarak yönetmek için kullanılacak ise bu adım atlanır.
 * Ancak daha sonra ekleme yapılabilir.
 * Fetch işlemleri için kullanılacak fonksiyonları burada tanımlarız.
 * 3- State'lerin durumlarını kontrol etmek için kullanılan yapıyı burada kodluyoruz.
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// 1- State'ler tanımlanır.
const initialStateProduct = {
    productList: [],
    isLoading: false,
    product: {},
    isProductLoading: false,
    findProduct: {},
    isFindProductLoading: false   
}

// 2- Fetch işlemleri
/**
 * AsyncThunk kullanımı
 * 1. Name : her fetch işlemi için oluşturulacak asyncThunk özel bir isme sahip olmalıdır. Aynı isme sahip methodlar sorun çıkartır. Sorun şöyle cereyan eder;
 * Eğer ismi aynı olan 2 method varsa, hangisi son olarak biterse onun döndüğü değerler ikisine de iletilir.
 * 2. Action : Fetch işlemini gerçekleştirip data döneceğiniz bir method yazıyorsunuz.
 * BURAYA DİKKAT !!!!
 * Action işlemi asenkron bir işlem olarak tanımlanır. Çünkü arka planda başka bir thread'de çalışır ve işlem bitişinde bilgilerini döner.
 */

export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
    async ()=>{ // Bu fonksiyon asenkron bir fonksiyondur dedik.
        console.log(' 2. ADIM :FetchAllProducts ÇALIŞTI.');
        
       return await fetch('https://dummyjson.com/products') // fetch işlemi boyunca bekletir
        .then(data=>data.json())
    }
)

// 3- State'lerin yönetilmesi.
/**
 * createSlice' ın oluşturulması
 * 1. Name : Burada slice'a bir ad veriyorsunuz. Bu ad uygulama içinde çağırımı yapılacak olan addır.
 * 2. initialState : Bu da yukarıda oluşturulan (1. Maddde) default değerleri bu slice içersine eklemek için kullanılır. Çünkü, durumların değiştiğinden haberdar olmak için 
 * ilk değerlerine ihtiyaç vardır.
 * 3. reducers: state içerisine aktarılan değerlerin değiştirilmesi için kullanılır.
 * 4. extraReducers : Fetch işlemlerinin durumlarını kontrol ederek, initialState üzerinde değişiklik yapmak için kullanılır. 
 */

const productSlice = createSlice({
    name:'product',
    initialState:initialStateProduct,
    reducers:{},
    extraReducers: (build)=>{
        build.addCase(fetchGetAllProducts.pending,(state)=>{
            // Eğer fetch işlemi devam ediyor, bitmemiş ise Yükleniyor true olsun.
            console.log(' 1. ADIM : fetchGetAllProducts devam ediyor.');
            
            state.isLoading = true;
        });
        build.addCase(fetchGetAllProducts.fulfilled,(state,action)=>{
            // Fetch işlemi tamamlandı.
            console.log(' 3 ADIM :fetchGetAllProducts BİTTİ.');
            state.isLoading = false;
            state.productList = action.payload.products
        });
        build.addCase(fetchGetAllProducts.rejected,(state)=>{
            // Fetch işlemi hatalı bir şekilde sonlanırsa
            state.isLoading=false;
        });
    }
});

export default productSlice.reducer;