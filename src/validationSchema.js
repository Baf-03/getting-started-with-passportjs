export const registrationSchema = {
    name: {
        notEmpty: {
            errorMessage: "Name cannot be empty",
            bail: true
        },
        trim: true,
        isString: {
            errorMessage: "Name must be a string",
            bail: true
        },
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: "Name must be at least 3 and a maximum of 20 characters"
        },
    },
    email: {
        notEmpty: {
            errorMessage: "Email cannot be empty",
            bail: true
        },
        trim: true,
        isEmail: {
            errorMessage: "Email must be a valid email address",
            bail: true
        },
    },
    password: {
        notEmpty: {
            errorMessage: "Password cannot be empty",
            bail: true
        },
        trim: true,
        isString: {
            errorMessage: "Password must be a string",
            bail: true
        },
        isLength: {
            options: { min: 6 ,max:25},
            errorMessage: "Password must be at least 6 characters long and max 25"
        }
    },
};



export const loginSchema = {
   email: {
        notEmpty: {
            errorMessage: "Email cannot be empty",
            bail: true
        },
        trim: true,
        isEmail: {
            errorMessage: "Email must be a valid email address",
            bail: true
        },
    },
    password: {
        notEmpty: {
            errorMessage: "Password cannot be empty",
            bail: true
        },
        trim: true,
        isString: {
            errorMessage: "Password must be a string",
            bail: true
        },
        isLength: {
            options: { min: 6 ,max:25},
            errorMessage: "Password must be at least 6 characters long and max 25"
        }
    },
};

