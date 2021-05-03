module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: 'yondosoft',
            api_key: '538488111317522',
            api_secret: 'L7pOvemB1Rtzjxd3Lc3gRjhEjWs',
        },
        actionOptions: {
            upload: {},
            delete: {},
        },
    },
    // ...
});