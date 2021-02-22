module.exports = ({ env }) => ({
    upload: {
        provider: "google-cloud-storage",
        providerOptions: {
            serviceAccount: {
                "type": "service_account",
                "project_id": "digital-health-302412",
                "private_key_id": "5fbe4c2957a45c0a68852ecbc7852a4f77791fba",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1zg1SNJZ1fCbb\nTwsHFcHzGgs9uGA5SF6bxlhwE1yKVcvIr1WIviozL7j386S1aHJ29qMM7tijtMK3\nhK+ciGyEBSpXZmv+kqTBEn8Z+/BYIoydHj6kEkpl+prX6dofR3Pjl4zXMhdbOuvf\n8XhVVJsJf1gVSlGDtiYuKMR9upB919r2frviYVS/h0Vh5qY0O1jBGSbs1lQkYkY6\n0BhP5aq97aaAHWR/wT6Hdpz9Ni1/I6JhkeBp7iMxo7fiDzueg19fkOwRr2tFzsLS\nzDug+z6/0hJD3Ygv7HAqNohUgI20SrAPeJ9DBZ4s4WIpFm3jNEqBASP0wMoTngvm\n3DETh0IxAgMBAAECggEABgM48A94AWMtfXfH/4A8oD+r1ar3wwqNwcebFvvLm0dF\nRyS7UVt+qvTeAGnw+CSVPTIgyCr3BF+pnTxOECvNMPGNygMDuSaG5zFnfYfA611F\n0BAXFhcvxDR381eTJJEuTT2EGtLX2xHKtBGOP1OIvBVCJ77D4t/+3mxv5nuUJJaV\nDOKdCM/4YKrXNJ/9YyZN/965jWy31cicgqkkQ3fK3YbIgNBx7mbhm7z3dI8hosnI\nI7J9BH7rwwKiiyvDxjqEjiRW+W/OLQqNFbgN9DecNqxzaOTKkBfBSu6anD3kVdxC\n4LosAxVY6p7GnYd5itWPen80B7auv+h6+h3c32SGcQKBgQDoyoYOebfIAQVkzod7\nPaQ724QTZXu6helZEgE/ELzz7leIkuGX/PGKOnHaww4YWvDVaMxu1tUmPYGTEcVa\nSAxqLjNx6i+yOvahrkjFq0zTvuCngLphIzCiFjb9DbeRKFsujMysKozxxE3dMQLx\nb8sOIaV+NqBDKvS89dUVH0DKSQKBgQDH7jfloSi8KP1rMfRm8DWNu6zJajUE8bL5\nRfG6/KytAlt/9XLUh/23ym+UMIoxFakb89MwM3F2smViEXrkyxij/bF7KjtP8KA6\nOrtY3y7dOYoCVtfmaAvtut/f+1IMKC2BunRZZABlJp3x0EBmZWcNnNgG64u/lR5V\nHwMnV3P4qQKBgQCE1StxjxrDUXHWd9LvC9lvHm9a8gmMAWWJobB8X/yx5Eqmb8my\nhG7/RSI6hhrA4wORgt9ET+oIjAgn93f5cCtFW1+XnN3igarBz0VPJdQM71oZumaf\njwjtNGfkNbONbM263jTb+Nu8CRu1H4ZiZjwjsCdSwbDpItXMDSqthsvdoQKBgHw8\n3wVV6S9LtXaoWzygZlcF2bBrzDifTV0zhqxwmYkFHwDb8Jh7TUGpjT6kDyvDTwvs\nrz6TqR1ebDvNqvWD83Lskh58NtFNMPQeTQ9D2SZlvAoKFy25WDhJWRchYHHngafM\nysJFry0sGxgKFgrLVoeSAHgEZRoPOwMgO2B2Kr3JAoGANTgNnjxuJ/mj9cvHs8m7\nKLiYlV2nX+hTuBedygNqjpjSnIDOcFHMPcqf/zjYkAYXVoCFjDDA5YFCxAyIZ8kU\nyqJRTByqI+wsoR6vJYjGUk41KobkRCWo5Cv++OLmNGQmdjCrc7Jq/baVmedRxV2P\nkAmtif0JTjbZkA6MrYyDmb4=\n-----END PRIVATE KEY-----\n",
                "client_email": "coachingolia@digital-health-302412.iam.gserviceaccount.com",
                "client_id": "103166560143621865735",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/coachingolia%40digital-health-302412.iam.gserviceaccount.com"
            },
            bucketName: "coachingolia",
            baseUrl: "https://storage.cloud.google.com/coachingolia",
            basePath: "/",
            publicFiles: true,
        },
    },
})