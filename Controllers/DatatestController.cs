using System;
using Microsoft.AspNetCore.Mvc;

namespace ReactPr.Controllers;
[ApiController]
[Route("[controller]")]

public class DatatestController: ControllerBase
{
    List<string> Datatest=new List<string>(){
        "ddd",
        "dddf"
    };

    [HttpGet]
    public IEnumerable<string> Get(){
        return Datatest;
    }
}
