
# Express Application with Multer File Uploads

This is a simple Express application that handles file uploads using Multer, a middleware for handling multipart/form-data. The application allows users to upload image files with specific formats (jpg, jpeg, png, gif).

## Getting Started

1. Clone the repository:

```console
git clone https://github.com/nnodim/TobamsGroup.git
```

2. Navigate to the project directory:

```console
cd TobamsGroup
```

3. Install dependencies

```console
npm Install
```

## API Reference

#### Get item

```http
  GET /api/get_image/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get item

```http
  POST /api/upload/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `file` | **Required**. |

## Documentation

[Documentation](https://documenter.getpostman.com/view/24258162/2s9YsT5nor)
