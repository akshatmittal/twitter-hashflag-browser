import { Card, Description, Avatar, useModal, Modal } from "@geist-ui/react";
import makeStyles from "components/makeStyles";
import dayjs from "dayjs";

const useStyles = makeStyles((ui) => ({
  card: {
    padding: "0 !important",
    cursor: "pointer",
    ["& .content"]: {
      padding: "8pt",
    },
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    border: "none !important",
  },
  modalContents: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8pt",
    ["& dl"]: {
      width: "100%",
      textAlign: "center",
      ["& dt"]: {
        display: "unset",
      },
    },
  },
}));

const ProjectCard = ({ data }) => {
  const classes = useStyles();
  const { setVisible, bindings } = useModal();

  return (
    <Card shadow className={classes.card} onClick={(e) => setVisible(true)}>
      <div>
        <div className={classes.infoContainer}>
          <Avatar isSquare src={data?.assetUrl} size="medium" className={classes.avatar} />
        </div>
      </div>
      <Modal {...bindings}>
        <Modal.Title>{data?.campaignName}</Modal.Title>
        <Modal.Content>
          <div className={classes.modalContents}>
            <Avatar isSquare src={data?.assetUrl} size="large" className={classes.avatar} />
            <Description title="Starts" content={dayjs(data?.startingTimestampMs).format("MMM D, YYYY h:mm A")} />
            <Description title="Ends" content={dayjs(data?.endingTimestampMs).format("MMM D, YYYY h:mm A")} />
            <Description title="Hashtags" content={data?.hashtags.join(", ")} />
          </div>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Close
        </Modal.Action>
      </Modal>
    </Card>
  );
};

export default ProjectCard;
