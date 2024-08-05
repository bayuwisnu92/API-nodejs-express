const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/controllerApi');

// Mendapatkan semua post
router.get('/posts', getAllPosts);

// Mendapatkan post berdasarkan ID
router.get('/posts/:id', getPostById);

// Menambahkan post baru
router.post('/posts', createPost);

// Memperbarui post berdasarkan ID
router.put('/posts/:id', updatePost);

// Menghapus post berdasarkan ID
router.delete('/posts/:id', deletePost);

module.exports = router;
