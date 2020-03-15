<template>
    <div>
        <header_myntra :header-slot="headerSlot" class="header">
            <template #left_items="props">
                <div class="header_left_item_wrapper">
                    <div class="header_left_items" v-for="item in props.items">
                        {{item}}
                    </div>
                </div>

            </template>
            <template #logo="props">
                <img class="header_logo" :src="props.item.url"/>
            </template>

            <template #right_items="props">
                <div class="header_right_item_wrapper">
                    <div class="header_right_items" v-for="item in props.items">
                        {{item}}
                    </div>
                </div>

            </template>

            <template #search_bar="props">
                <i class="material-icons" style="font-size:20px; position: absolute; z-index: 999;
                    left:35.5%; top:28%;">search</i>
                <input type="text" class="header_search_bar" :placeholder="props.item.placeholder">
            </template>

            <template #right_items="props">
                <div class="header_right_items" >
                    <div  v-for="item, key in props.items" class="header_right_item">
                        <i class="material-icons" style="font-size:24px; color: grey">{{item.icon}}</i>

                        <div style="font-size:12px">{{key}}</div>
                    </div>
                </div>
            </template>

        </header_myntra>
        <banner :banner-slot="bannerSlot" class="banner">
            <template #banner="props">
                <div class="banner" >
                    <span style="padding-left: 45%;">{{props.text}}</span>
                </div>
            </template>
        </banner>
<!--        <promo :promo-slot="promoSlot">-->

<!--            <template #promo="props">-->
<!--                <div class="promo" >-->
<!--                    {{props.text}}-->
<!--                </div>-->
<!--            </template>-->
<!--        </promo>-->
        <navigation :navigation-slot="navigationSlot">

            <template #navigationInfo="props">
                <div class="navigationInfo left-padding-align" >
                    {{props.text}}
                </div>
            </template>

            <template #headerInfo="props">
                <div class="pageInfo left-padding-align" >
                    {{props.text}}
                </div>

                <div class="numberInfo left-padding-align" >
                    {{props.items}}
                </div>
            </template>

        </navigation>


        <div class="display_area">

            <h3 class="left-padding-align ">FILTERS</h3>
            <side_filter :side-filter-slot="sideFilterSlot" class="sideFilter">

                <template #brand="props">
                    <div class="_filter_item_wrapper">
                        <div class="color_search_wrapper">

                            <h4 class="left-padding-align left_align">BRAND</h4>
                            <i class="material-icons right_align">search</i>

                        </div>

                        <div v-for="sections, key in props.items">
                            <div class="brand_filter">

                                <input  :type="sections.type"/>
                                <span  class="_filter_text "  > {{key}} </span>
                                <span class="_filter_count" > ({{sections.count}}) </span>

                            </div>
                        </div>
                    </div>




                </template>
                <template #color="props">
                    <div class="_filter_item_wrapper">

                        <div class="color_search_wrapper">

                            <h4 class="left-padding-align left_align">COLOR</h4>
                            <i class="material-icons right_align">search</i>

                        </div>

                        <div v-for="sections, key in props.items">
                            <div class="brand_filter">
                                <input class="color_filter_type" :type="sections.type"/>
                                <span class="color_filter_icon" :style="{'background-color': sections.color}">

                            </span>
                                <span class="_filter_text"> {{sections.color}} </span>
                                <span class="_filter_count" > ({{sections.count}}) </span>

                            </div>
                        </div>
                    </div>
                </template>
                <template #price="props">
                    <div class="_filter_item_wrapper">
                        <h4 class="left-padding-align   ">PRICE</h4>
                        <div v-for="sections, key in props.items">
                            <div class="brand_filter">
                                <input class="color_filter_type" :type="sections.type"/>
                                <span class="_filter_text"> Rs {{sections.from}} to Rs {{sections.to}} </span>

                                <span class="_filter_count" > ({{sections.count}}) </span>

                            </div>
                        </div>
                    </div>
                </template>
                <template #discountRange="props">
                    <div class="_filter_item_wrapper">
                        <h4 class="left-padding-align">DISCOUNT RANGE</h4>
                        <div v-for="sections in props.items">
                            <div class="brand_filter">
                                <input class="color_filter_type" :type="sections.type"/>
                                <span class="_filter_text">{{sections.percent}} % and above</span>

                            </div>
                        </div>
                    </div>
                </template>


            </side_filter>
            <product_grid :product-slot-prop="productListslot" class="_product_grid_wrapper">

                <template  #productListing="props">
                        <card class="_product_item_wrapper"
                              v-for="(product,index) in props.products" :cardSlot="product">
                            <template #image="props">
                                    <img :src="props.imageUrl" class="_product_item_image">
                            </template>
                                <template #product_name="props">
                                    <div class="_product_item_name">{{props.product_name}}</div>
                                </template>
                                <template #description="props">
                                    <div class="_product_item_desc">{{props.description}}</div>
                                </template>
                                <template #mrp="props">
                                    <div class="_product_item_price">{{props.mrp}}</div>
                                </template>
                                <template #size="props">
                                    <button class="_product_item_wish_listBtn">Buy Now</button>
                                    <button class="_product_item_buyNow">Add to Wishlist</button>
                                    <span class="_product_item_size"> Sizes: </span>
                                    <span class="_product_item_size" v-for="size in props.size">{{size}}</span>
                                </template>



                        </card>
                </template>

            </product_grid>


            <div class="_product_pagination_wrapper">
                <button class="paginationBtn" :class="index===0?'paginationBtnActive':''" v-for="page, index in productListInfo.pages">{{page}}</button>
                <button class="nextbtn">Next ></button>
            </div>

        </div>
        <footer_myntra :footer-slot="footerSlot" class="footer">

            <template #_footer_mid="props">
                <span >
                    <span style="width: 20%;" class="footer_header"> POPULAR SEARCHES
                    </span>
                    <hr style="margin-left:15%; margin-top: -10px; border-top:1px solid #EAEAEC;">
                </span>


                <span v-for="item in props.item">
                    {{`${item}   |    `}}
                </span>
            </template>


            <template #_footer_end="props">
                <div class="footer_end_wrapper">
                    <span class="left_align">{{props.item.left.text}} </span>
                    <strong class="left_align" style="color: #526CD0; text-transform: capitalize; font-size: medium">Contact us</strong>
                    <span class="right_align">{{props.item.right.text}}</span>
                </div>
            </template>


            <template #appOnMobile="props">
                <div class="footerAppOnMobile">
                    <div class="footer_header">EXPERIENCE MYNTRA APP ON MOBILE</div>
                    <span>
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt=""/>
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt=""/>
                    </span>
                    <div class="footer_header">KEEP IN TOUCH</div>
                    <span>
                        <img class="social_icon" src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt=""/>
                        <img class="social_icon"  src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt=""/>
                    </span>

                </div>
            </template>

            <template #onlineShopping="props">
                <div class="footerOnlineShopping">
                    <div class="footer_header">ONLINE SHOPPING</div>
                    <div v-for="item in props.item">{{item}}</div>

                </div>
            </template>
            <template #links="props">
                <div class="footerLinks">
                    <div class="footer_header">USEFUL LINKS</div>
                    <div v-for="item in props.item">{{item}}</div>

                </div>
            </template>

            <template #someAdvertisement="props">
                <div >
                    <div v-for="_item in props.item">
                        <span>
                            <img :src="_item.url" style="height: 50px;"/>

                            <strong style="color: black; margin: 10px; vertical-align: top;">{{ _item.bold }}</strong>
                            <span style="vertical-align: top;">{{_item.text}}</span>
                        </span>

                    </div>

                </div>
            </template>

        </footer_myntra>

    </div>
</template>

<script>
    import header_myntra from "../slots/_header";
    import footer_myntra from "../slots/_footer";
    import product_grid from "../slots/_product_grid";
    import promo from "../slots/_promo";
    import banner from "../slots/_banner";
    import side_filter from "../slots/_side_filter";
    import navigation from "../slots/_navigation";
    import * as filter_data from '../dump/index.json';
    import * as footer_data from '../dump/footer/index.json';
    import card from "../components/card"

    export default {
        name: "MenTshirt",
        components:{
            header_myntra, footer_myntra,
            product_grid, side_filter, banner,
            promo, navigation, card
        },
        data(){
            return {

                headerInfo:{
                    logo: {
                        height: 20,
                        width: 20,
                        url: "data:image/jpeg;base64,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"

                    },
                    left_items:[
                        "MEN",
                        "WOMEN",
                        "KIDS",
                        "HOME&LIVING",
                        "DISCOVER",
                    ],
                    search_bar:{

                        width:150,
                        height:20,
                        placeholder:"Search for more products, brands and more",
                        backgroundColor:'grey'
                    },
                    right_items:{

                            profile:{
                                icon:"perm_identity"
                            },
                            wishList:{
                                icon:"bookmark"
                            },
                            bag:{
                                icon:"shop"
                            }

                    }


                },
                bannerInfo:{

                    horizontal_align: "center",
                    value: "-Prices are inclusive of all taxes-",
                    backgroundColor:'green'
                },
                promoInfo:{
                    value: "ICICI Bank Offer Ends In",

                    // dont know
                },
                navigationInfo:{
                    category:"Home / Clothing / Men Clothing / Tshirts / Men Tshirts",
                    url: "Men Tshirts",
                    items: " 39217 items"
                },
                productListInfo:{
                    products:[
                        {
                            id:'1',
                            name:'NIKE',
                            description:'Cotton T-shirt Regular Fit',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/aba3b899-787f-4c88-ba66-5f833abf46f81580947538981-3.jpg',
                            mrp:'Rs. 399',
                            size:['S','M','L','XL']
                        },
                        {
                            id:'2',
                            name:'DILLINGER',
                            description:'Colourblocked Round Neck Navy Blue T-shirt',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg',
                            mrp:'Rs. 359',
                            size:['S','M','L','XL','XXL']
                        },
                        {
                            id:'2',
                            name:'ADIDAS',
                            description:'Colourblocked Round Neck Navy Blue T-shirt',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg',
                            mrp:'Rs. 359',
                            size:['S','M','L','XL','XXL']
                        },
                        {
                            id:'3',
                            name:'PUMA',
                            description:'Colourblocked Round Neck Navy Blue T-shirt',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg',
                            mrp:'Rs. 359',
                            size:['S','M','L','XL','XXL']
                        },
                        {
                            id:'4',
                            name:'BEING HUMAN',
                            description:'Colourblocked Round Neck Navy Blue T-shirt',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg',
                            mrp:'Rs. 359',
                            size:['S','M','L','XL','XXL']
                        }, {
                            id:'5',
                            name:'GUCCI',
                            description:'Colourblocked Round Neck Navy Blue T-shirt',
                            url:'www.google.com',
                            imageUrl:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg',
                            mrp:'Rs. 359',
                            size:['S','M','L','XL','XXL']
                        }

                    ],
                    pages:10

                }
            }
        },
        computed:{

            headerSlot(){
                return {
                    headerInfo: this.headerInfo,
                }
            },
            bannerSlot(){
                return {
                    bannerInfo: this.bannerInfo,
                }
            },
            promoSlot(){
                return {
                    promoInfo: this.promoInfo,
                }
            },
            navigationSlot(){
                return {
                    navigationInfo: this.navigationInfo,
                }
            },
            sideFilterSlot(){
                return {
                    brand: filter_data["vertical filter"].brand,
                    price: filter_data["vertical filter"].price,
                    color: filter_data["vertical filter"].color,
                    discountRange: filter_data["vertical filter"]["discount range"],
                }
            },
            productListslot(){
                return{
                    products:this.productListInfo.products,
                    filters:this.productListInfo.filters,
                    pages: this.productListInfo.pages
                }
            },
            footerSlot(){
                return {
                    onlineShopping:footer_data._footer_start.onlineShopping,
                    links:footer_data._footer_start.links,
                    someAdvertisement:footer_data._footer_start.someAdvertisement,
                    _footer_mid:footer_data._footer_mid.popularSearches,
                    _footer_end:footer_data._footer_end
                }
            }
        }
    }
</script>

<style scoped>

.display_area{
    display: block;
    margin-top: 100px;


}
.header{
    float: top;
    position: fixed;
    display: inline-block;
    padding: 20px;
    z-index: 999;
    margin-bottom: 100px;
    background-color:white;
    width: 100%;
    /*background: red;*/
}

.header_search_bar{

    margin-left: 40px;
    border: none;
    border-radius: 5px;
    background: rgba(128, 128, 128, 0.43);

    padding-left: 30px;
    width: 600px;
    height:30px;
}
.header_left_item_wrapper{

    margin-left:50px;
    margin-right:50px;
}
.header_left_items {

    float: left;
    font-size: 15px;
    padding: 10px;

}

.header_right_items {
    float: right;
    margin-right:20px;
    /*padding: 10px;*/
    vertical-align: middle;
    line-height: 0px;
}

.header_right_item {
    display: inline-block;
    text-transform: capitalize;
    font-size: 15px;
    padding: 10px;
    line-height: 12px;
}
.header_logo{
    float: left;
    height :40px;
    width :40px;
}
.banner{
    /*margin:0px;*/
    display: inline-flex;
    background: #4aa785;
    color:white;
    padding:5px;
    font-size: 14px;
    margin-top: 46px;
    position: fixed;
    width: 100%;
}
.promo{

    margin:0px;
    background: #E3EBFE;
    text-align: center;
    color:white;
    padding:5px;
    font-size: 14px;
    height:30px;

}
.navigationInfo{
    font-weight: bold;
    padding: 5px;
}
.pageInfo{
    padding: 5px;

}
.numberInfo{
    padding: 5px;

}
.sideFilter{
    position: sticky;
    float: left;
    width: 15%;
    z-index: -1 ;
}
._filter_item_wrapper{
    border: 1px solid rgba(128, 128, 128, 0.32);
    border-bottom: none;
    /*width: 17%;*/
    height: 25%;
}
._filter_item_wrapper:last-child{
    border-bottom: 1px solid rgba(128, 128, 128, 0.32);

}

.brand_filter{
    display: inline-block;
}

._filter_text{
    font-size:14px;
    color: #434343;

}
._filter_count{
    color: grey;
    font-size:11px;
}
.color_filter_icon{
    border-radius: 50%;
    border: 1px solid rgba(128, 128, 128, 0.31);
    padding-left: 9.2px;
    padding-right: 9.2px;
    margin: 10px;
}


._filter_item_wrapper>*>*{
    padding: 10px;
    margin: 4px;
}

    ._product_grid_wrapper{
        padding: 10px;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        border-top: 1px solid rgba(128, 128, 128, 0.31);
        border-bottom: 1px solid rgba(128, 128, 128, 0.31);

    }
    ._product_item_wrapper{
        border-radius: 5px;
        margin:10px;
    }

    ._product_item_image{
        margin:0px;
        padding:0px;
        width:100%;
    }
._product_item_name{
    font-weight: 900;
    font-size: medium;
    padding:5px;
    width:100%;
}

._product_item_desc{
    font-weight: 100;
    color: #606060;
    padding:5px;
    width:100%;
    text-overflow: ellipsis;
}

._product_item_price{
    font-weight: 800;
    padding:5px;
    width:100%;
    font-size: 15px;

}

._product_item_size{
    margin:1px;
    font-weight: 500;
    padding:5px;
    width:100%;
    color: rgba(87, 87, 87, 0.79)
}

._product_item_content{
        margin:5px;
        padding:10px;
        width:100%;
        height:30%;
    }
    ._product_item_wrapper:hover{
        -webkit-box-shadow: 10px 10px 42px 3px rgba(117,115,117,0.45);
        -moz-box-shadow: 10px 10px 42px 3px rgba(117,115,117,0.45);
        box-shadow: 10px 10px 42px 3px rgba(117,115,117,0.45);
    }
    ._product_pagination_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
._item_size{
    margin-right:7px;
    color: grey;
}

.paginationBtn{

    margin:10px;
    padding:4px;
    border: none;
    font-weight: 500;
    font-size: small;
    color:black;

}
.paginationBtnActive{

    color:white;
    background-color: black;
    padding-left: 8px;
    padding-right: 8px;
}




.nextbtn{
    font-weight: 500;
    font-size:16px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 15px;
    margin:10px
}

._product_item_wish_listBtn{
    margin:5px;
    padding: 10px;
    text-transform: uppercase;
    color:white;
    background-color: #DB4866;
}
._product_item_buyNow{
    margin:5px;
    padding: 10px;
    text-transform: uppercase;
    border: 1px solid rgba(128, 128, 128, 0.38);
}

._product_item_buyNow:hover{

    border: 1px solid black;

}
.left-padding-align{
    color: #282C3F;
    padding-left: 20px;
}

.left_align{
    float: left;
}
    .right_align{
        float: right;
        background-color: #F5F5F6;
        color: grey;
        border-radius: 50%;
        font-size:large;
        padding: 5px;
    }
    .footer{
        display: block;
        width: 80%;
        height:500px;
        padding: 10%;
        background-color: #FAFBFC;
        color: #90929C;
    }
    .footer_end_wrapper{
        margin-top: 50px ;
    }
    .footer_header{
        color: black;
        font-size: 13px;
        font-weight: 600;
    }
.footerAppOnMobile{
    /*width: 30%;*/
}

.footerAppOnMobile>span>img{
    width: 150px;
    height: 50px;
    margin:10px;
}
.social_icon{
    width: 20px !important;
    height: 20px !important;
    margin:10px;

}
    .footerOnlineShopping{
        width: 20%;
    }
    .footerLinks{
        width: 20%;

    }
</style>