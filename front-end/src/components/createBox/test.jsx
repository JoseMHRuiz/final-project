<div className="BoxDetails">
  <div className="card card-nav-tabs">
    <div className="card-header card-header-primary">
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <ul className="nav nav-tabs" data-tabs="tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#profile" data-toggle="tab">
                <i className="material-icons">house</i> Box
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#coaches" data-toggle="tab">
                <i className="material-icons">face</i> Coaches
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#material" data-toggle="tab">
                <i className="material-icons">fitness_center</i> Material
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">{boxDetails.boxName}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-body ">
      <div className="tab-content text-center">
        <div className="tab-pane active" id="profile">
          <div className="row">
            <Card className="col data">
              <div className="map">Map</div>
              <h4>Schedule</h4>
              <div className="schedule">
                <div>
                  <div>
                    <h5>Monday-Friday</h5>

                    {"-"}
                  </div>
                </div>
                <div>
                  <div>
                    <h5>Saturday</h5>

                    {"-"}
                  </div>
                  <div>
                    <h5>Sunday</h5>

                    {"-"}
                  </div>
                </div>
              </div>
            </Card>
            <Card className="col data">
              <div className="mini-data">
                {" "}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    as={<Input />}
                    type="text"
                    placeholder="boxName"
                    name="boxName"
                    control={control}
                    ref={register({ required: true })}
                  />
                  <Controller
                    as={<Checkbox />}
                    control={control}
                    type="checkbox"
                    placeholder="affiliate"
                    name="affiliate"
                    ref={register}
                  />
                  <Controller
                    as={<Input />}
                    control={control}
                    type="number"
                    placeholder="area"
                    name="area"
                    ref={register({ required: true })}
                  />
                  <Controller
                    as={<Input />}
                    control={control}
                    type="text"
                    placeholder="city"
                    name="city"
                    ref={register({ required: true })}
                  />
                  <Controller
                    as={<Checkbox />}
                    control={control}
                    type="checkbox"
                    placeholder="openBox"
                    name="openBox"
                    ref={register}
                  />
                  <Controller
                    as={<Checkbox />}
                    control={control}
                    type="checkbox"
                    placeholder="dropBar"
                    name="dropBar"
                    ref={register}
                  />
                  <Controller
                    as={<Checkbox />}
                    control={control}
                    type="checkbox"
                    placeholder="juniorClass"
                    name="juniorClass"
                    ref={register}
                  />
                  <Controller
                    as={<Checkbox />}
                    control={control}
                    type="checkbox"
                    placeholder="kidsClass"
                    name="kidsClass"
                    ref={register}
                  />

                  <input type="submit" />
                </form>
              </div>
              <div className="mini-data">test3</div>
            </Card>
          </div>
        </div>
        <div className="tab-pane" id="coaches">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            itaque blanditiis ipsum! Minima totam vero voluptatibus in. Iusto
            consectetur, tempore molestiae suscipit, minus vel quaerat excepturi
            delectus quae reprehenderit quia!
          </p>
        </div>
        <div className="tab-pane" id="material">
          <div className="mini-data row">
            <div className="col">
              <h3>Machines</h3>
            </div>
            <div className="col">
              <h3>Material</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
