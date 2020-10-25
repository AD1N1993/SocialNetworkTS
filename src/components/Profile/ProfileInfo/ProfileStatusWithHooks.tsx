import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileInfo = {
    status: string
    updateUserStatusThunk: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileInfo) => {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState<string>(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateUserStatusThunk(status);
    }
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <>

            {!editMode &&
			<div>
			  <span onDoubleClick={activateMode}>{status || "No status"}</span>
			</div>}
            {editMode &&
			<div>
			  <input onBlur={deactivateMode} type="text"
					 value={status}
					 autoFocus={true}
					 onChange={onChange}
			  />

			</div>}


        </>
    );
}


export default ProfileStatusWithHooks;
