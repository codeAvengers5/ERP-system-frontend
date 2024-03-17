export const validate = (data: any) => {
    const errors: any = {};
    if (!data.full_name) {
      errors.full_name = "full name is required";
    }else if (!/^([a-z]+(-| )?)+$/i.test(data.full_name)){
      errors.full_name="This name is invalid ,use only character"
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.salary) {
      errors.salary = "salary is required";
    } else if (isNaN(data.salary)) {
      errors.salary = "Only numbers are eligible here";
    }

    if (!data.position) {
      errors.position = "Position is required";
    }

    if(!data.title){
      errors.title="Title is required"
    }

    if(!data.description){
      errors.description="Description is needed"
    }

    if(!data.requirement){
      errors.requirement="requirment is needed"
    }
    if(!data.responsibility){
      errors.responsibility="responsiblity is needed"
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if(data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!data.oldPassword) {
      errors.oldPassword= "Password is required";
    } else if(data.oldPassword.length < 6) {
      errors.oldPassword = "Password must be at least 6 characters long";
    }
   
   
    return errors;
  };
