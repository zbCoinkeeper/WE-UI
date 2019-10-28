const path=require("path")
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:{
        fun:'./lib/index.tsx'
    },
    output:{
        path:path.resolve(__dirname,"dist/lib"),
        libraryTarget:"umd",
        
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title:'WE-UI'
        })
    ]

}