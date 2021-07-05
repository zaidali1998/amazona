import mongoos from 'mongoose';
const userSchema = new mongoos.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
    isAdmin: { type: Boolean, required: true, default: false},
    isSeller: { type: Boolean, required: true, default: false}
},
{
    timestamps: true,
})

const User = mongoos.model('User', userSchema);

export default User;