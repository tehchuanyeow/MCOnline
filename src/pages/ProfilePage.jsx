import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';

const items = [
  {
    id: 1,
    title: 'Video Title 1',
    views: '100',
    thumbnail: 'https://example.com/thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Video Title 2',
    views: '200',
    thumbnail: 'https://example.com/thumbnail2.jpg',
  },
  // Add more items as needed
];

const ProfilePage = () => {
  return (
    <div>
      <Container>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          className="h-60 w-full object-cover object-top"
          alt="banner"
        />
        <div className="p-3 bg-dark1/10">
          <div className="md:flex gap-5 items-center">
            <div className="md:flex gap-2 items-center">
              <div className="flex gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg"
                  alt="profile_pic"
                />
                <div>
                  <h6>New Smosh Every Friday</h6>
                  <h6 className="text-xs">Smosh Channel</h6>
                </div>
              </div>
              <h6 className="bg-yellow-300 p-2 rounded my-2 md:my-0">
                Subscribe
              </h6>
            </div>
            <h6 className="bg-cyan-100 rounded p-1">Upload Video</h6>
          </div>
        </div>

        <div className="md:flex py-5 gap-5">
          <div className="lg:w-2/3 md:w-1/2 w-full">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/AjWfY7SnMBI"
              title="24 hours + of pure black screen in HD!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-dark1/5 p-5 flex-1">
            <div>
              <input type="text" className="bg-white" />
              <button>Search</button>
            </div>
            <div className="flex gap-5 text-xs my-2">
              <h6>Watched videos</h6>
              <h6>Top Rated Videos</h6>
            </div>
            <hr className="my-2 border border-green-500" />
            <div className="flex flex-col gap-3">
              {items.map((content) => (
                <Card key={content.id}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={content.thumbnail}
                  />
                  <CardContent>
                    <Typography variant="h6">{content.title}</Typography>
                    <div className="flex gap-2">
                      <Typography variant="body2" color="textSecondary">
                        {content.views}k views
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        7 months ago
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
