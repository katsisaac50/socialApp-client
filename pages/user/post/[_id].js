import {useRouter} from 'next/router';

const EditPost = ()=> {
    const router = useRouter();
    const _id = router.query._id;
    console.log(_id)
    return (
        <>
        </>
    )
}

export default EditPost;