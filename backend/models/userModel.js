import mongoos from 'mongoose';
const userSchema = new mongoos.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
    isAdmin: { type: Boolean, required: true, default: false},
    isSeller: { type: Boolean, required: true, default: false},
    seller: { 
        name: String,
        logo: String,
        description: String,
        rating: { type: Number, default: 0, required: true},
        numReviews: { type: Number, default: 0, required: true}
    },
},
{
    timestamps: true,
})

const User = mongoos.model('User', userSchema);

export default User;