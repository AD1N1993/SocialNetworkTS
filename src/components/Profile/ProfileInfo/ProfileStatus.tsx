import React, {ChangeEvent} from "react";

type ProfileInfo = {
    status: string
    updateUserStatusThunk: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileInfo> {
    componentDidUpdate(prevProps: Readonly<ProfileInfo>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusThunk(this.state.status)
    }
    onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        console.log("render")
        return (
            <>
                {!this.state.editMode &&
				<div>
				  <span onDoubleClick={this.activateMode}>{this.state.status || "No status"}</span>
				</div>}
                {this.state.editMode &&
				<div>
				  <input onChange={this.onChange} onBlur={this.deActivateMode.bind(this)} type="text" value={this.state.status}
						 autoFocus={true}/>
				</div>}

            </>
        );
    };

}


export default ProfileStatus;
