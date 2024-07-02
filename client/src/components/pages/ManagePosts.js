import { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeletePost from  '../common/DeletePost.js';
import AddPost from '../common/AddPost.js';
import ListPosts from '../common/ListPosts.js';

import { fetchData } from "../../main.js";

const ManagePosts = ({ user }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [deletePost, setDeletePost] = useState("");
    const [error, setError] = useState('');
    const [posts, setPosts] = useState();

    const fetchPosts  = async () => {
        try {
            const result = await fetchData(`/post/user/${user.id}`, {}, "GET");
            setPosts(result)
        } catch (e) {
            console.log('e',e )
            setPosts([])
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const toggleCreate = () => {
        setOpenCreate((prev) => !prev);
    }

    const handleCreate = async (data) => {
        try {
            const result = await fetchData("/post", { ...data, id: user.id }, "POST");
            if (result) {
                setError("");
                toggleCreate();
                fetchPosts();
            }
        } catch (e) {
            setError(e.message);
            toggleCreate();
        }
    }

    const handleDelete = (id) => {
        setDeletePost(id)
    }

    const confirmDelete = async () => {
        try {
            const result = await fetchData(`/post/${deletePost}`, {}, "DELETE");
            if (result) {
                setError("");
                setDeletePost("");
                fetchPosts();
            }
        } catch (e) {
            setDeletePost("");
            setError(e.message);
        }
    }

    return (
        <>
            <Box>
                <Typography variant="body1" align="right" mt={1}>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={toggleCreate}>Create Post</Button>
                </Typography>
                <ListPosts posts={posts} handleDelete={handleDelete}/> 
            </Box>
            {
                openCreate && (
                    <AddPost user={user} handleClose={toggleCreate} handleCreate={handleCreate} />
                )
            }
            {
                deletePost !== '' && (
                    <DeletePost handleClose={() => setDeletePost("")} confirmDelete={confirmDelete} />
                )
            }
        </>
    )
}

export default ManagePosts;