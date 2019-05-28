import Layout from '../../comps/_Layout.js'
import FormActions from '../../comps/FormActions.js'
import AddMon from "../../comps/AddMon.js";
import MonList from "../../comps/MonList.js"
import axios from "axios";

export default class extends FormActions {

    constructor() {
        super()
        this.state = { formData: { name: '', webname: '', type: '', hp: '' } }
    }

     componentWillMount() {
         axios.get("http://localhost:3000/api")
            .then(res => this.setState({ data: res.data.data }));
     }

    // static async getInitialProps ({ req }) {
    //   if (req) {
    //     const { db } = req
    //     const list = await db.collection('Monsters').find().sort({ createdAt: -1 })
    //       .toArray()
    //     return { list }
    //   }
  
    //   const { list } = await superagent.get('http://localhost:3000/api')
    //     .then(res => res.body)
  
    //   return { list }
    // }

    render(){
        const list = this.state.data || this.props.list
        const formData = this.state.formData
        console.log("index",list)
        return (
            <Layout title="Monsters">
                <h1>
                New Monster
                </h1>
                <AddMon formData={formData} inst={this} />

                <h1>
                Monster List
                </h1>
                <MonList list={list} inst={this} />
                <style jsx>{`
                    div {
                        font-family: 'Bookman', 'Helvetica', 'sans-serif';
                    }
                    h1 {
                        color: #6530b5;
                    }
                    .description {
                        position: relative;
                        top: -0.2em;
                    }
                    #container {
                        width: 800px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    #monster-list {
                        width: 800px;
                        border: 1px solid #DDD;
                        border-radius: 5px;
                    }
                    .remove {
                        cursor: pointer;
                        color: #ff257b;
                        font-size: 1.5em;
                    }
                    .edit {
                        font-size: 1em;
                    }
                `}</style>
            </Layout>
        )
    }
}