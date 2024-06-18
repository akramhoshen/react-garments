import React, { Component } from 'react';
import axios from 'axios';
// import Http from '../../../model/Http';

export default class ImageUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            Image : '',
            Images : []
        }
    }
    componentDidMount(){
        this.getImages();
    }

    getImages = () => {
        axios.get('http://localhost/Laravel-Practice-ERP/public/api/upimages').then( res => {
            if (res.data){
                this.setState({
                    Images: res.data
                })
                // console.log(res);
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            Image: e.target.files[0]
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const url = 'http://localhost/Laravel-Practice-ERP/public/api/upimages';
        const data = new FormData();
        data.append('image',this.state.Image);

        //Http request
        // Http.post('/upimages',data).then(res => {
        //     console.log(res);
        // })

        //axios
        axios.post(url,data).then(res => {
            // console.log(res);
            this.getImages();
        })

    }

  render() {
    return (
      <div className='container'>

        <div className="row">
            <div className="col">
                <form onSubmit={this.submitForm}>
                    <div className="card">
                    <div className="card-header">
                        Photo Upload
                    </div>
                    <div className="card-body">
                        <label htmlFor="image" className='me-3'>Upload Photo</label>
                        <input type="file" name="image" id="image" onChange={this.handleChange} />

                    </div>
                    <div className="card-footer text-muted">
                        <button onChange={this.handleChange} className='btn btn-info'>Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>

        <div className="row">
            {
                this.state.Images.map((image) => (
                    <div key={image.id} className="col-sm-3 mb-4">
                        <img className='img-thumbnail' src={"http://localhost/Laravel-Practice-ERP/public/img/"+image.name} alt="" />
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
}
