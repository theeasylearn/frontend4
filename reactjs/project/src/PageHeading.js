function PageHeading(props)
{
    return(
        <section className="bg-pentagon py-4">
        <div className="container py-3">
          <div className="row d-flex align-items-center gy-4">
            <div className="col-12">
              <h1 className="h2 mb-0 text-uppercase">{ props.title }</h1>
            </div>
           
          </div>
        </div>
      </section>
    )
}
export default PageHeading;