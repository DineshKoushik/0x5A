import { Component } from "react";
import Userfront from "@userfront/react";
import ClipLoader from "react-spinners/ClipLoader";

const PasswordResetForm = Userfront.build({
  toolId: "mnnlrn",
});

// var x = document.getElementsByClassName("el-card__body");
function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5000));
}
export default class Reset extends Component {
   state = {
    loading: true
  };

  componentDidMount() {
    AsyncCall().then(() => this.setState({ loading: false }));
  }
    render() {
        const { loading } = this.state;
        if(loading) { 
            return (
                <ClipLoader color={'#4ED6C8'} loading={this.state.loading} size={50} />
            ); 
        }
        else
        {
            return (
                <div>
                    <PasswordResetForm />
                </div>
            );
        }
    }
}
