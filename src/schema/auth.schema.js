import z from 'zod';

export const registerSchema=z.object({
    name:z.string({
        required_error:'name is required'
    }).trim().min(2,{
        message:'The name must be at least 2 characters'
    }).max(100,{
        message:'The name must have a maximum of 120 characters'
    }),
    password:z.string({
        required_error:'Password is required'
    }).min(5,{
        message:'password must be at least 5 characters'
    }).max(20,{
        message:'The password must have a maximum of 100 characters'
    }),
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    })
});

export const loginSchema=z.object({
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    }),
    password:z.string({
        required_error:'password is required'
    }).min(5,{
        message:'password must be at least 5 characters'
    })
});