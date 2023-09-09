import { Table } from "antd";
import { Container } from "../components/Container";

const SponsorAuction = () => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Server",
      dataIndex: "server",
      key: "server",
    },
    {
      title: "BID (USD)",
      dataIndex: "bid",
      key: "bid",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
  ];

  const data = [
    {
      key: "1",
      rank: 1,
      server: (
        <div>
          <span className="text-white bg-green-400 py-1 px-4 rounded">
            Paid
          </span>{" "}
          <a href="/">Lorem ipsum dolor sit amet.</a>
        </div>
      ),
      bid: "$1234",
      date: "2015-08-20",
    },
    {
      key: "2",
      rank: 2,
      server: (
        <div>
          <span className="text-white bg-green-400 py-1 px-4 rounded">
            Paid
          </span>{" "}
          <a href="/">Lorem ipsum dolor sit amet.</a>
        </div>
      ),
      bid: "$123",
      date: "2015-08-20",
    },
    {
      key: "3",
      rank: 3,
      server: "Lorem ipsum dolor sit.",
      bid: "$432",
      date: "2015-08-20",
    },
  ];

  return (
    <div className="p-5">
      <Container>
        <h3 className="text-3xl">Sponsored Server Auction History</h3>
        <hr className="border my-5" />
        <p className="my-5">
          THis pserver contains the last year of auctions with their top 10
          bids. For archived purposes, server titles represent the titille of
          the server at the time it was added to the auction.
        </p>

        <h4 className="text-2xl">Sepetember 2023</h4>
        <p>
          <b>Auction Start</b>: Auhusr 24, 2023 2:00 PM EDT /{" "}
          <b>Auction End: August 29, 2023 2:00 PM EDT</b>
        </p>

        <div className="my-10">
          <Table columns={columns} dataSource={data} />
        </div>
      </Container>
    </div>
  );
};

export default SponsorAuction;
