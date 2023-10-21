import github from "../../assets/Skills/github.png";


const WorkItem = ({ item }) => {
  return (
    <div
      className="work__card"
      key={item.id}
    >
      <a href={item.url} rel="noreferrer" target="_blank">
        <img src={item.image} alt="" className="work__img" />
      </a>
      <h3 className="work__title">
        {item.title}{" "}
        {item.category !== "Illustration" ? (
          <span style={{ color: "#F7AB04" }}>Application</span>
        ) : (
          ""
        )}
      </h3>
      {item.category !== "Illustration" ? (
        <a
          href={item.url}
          rel="noreferrer"
          className="work__button"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#F7AB04" }}>Demo</span>{" "}
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </div>
          {item.category !== "Figma" ? (
              <a href={item.repo} rel="noreferrer" target="_blank">
              <img src={github} width={35} alt="" />
            </a>
          ) : (
            ""
          )}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default WorkItem;
