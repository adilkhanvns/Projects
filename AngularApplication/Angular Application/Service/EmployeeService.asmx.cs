using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Serialization;
using Angular_Application.Models;
namespace Angular_Application.Service
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public int  GetAllEmployees()
        {
            List<Employee> listEmployee = new List<Employee>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from Employee",con);
                con.Open();
                SqlDataReader da ;
                da = cmd.ExecuteReader();
                while (da.Read())
                {
                    Employee emp = new Employee();
                    emp.EmployeeID = Convert.ToInt32(da["EmployeeID"]);
                    emp.Name=da["Name"].ToString();
                    emp.Gender = da["Gender"].ToString();
                    emp.Salary = Convert.ToDecimal(da["Salary"]);
                    listEmployee.Add(emp);
                }
                //SqlDataAdapter da = new SqlDataAdapter("select * from Employee", con);
                //DataSet ds= new DataSet();
                //da.Fill(ds);
                //for (int i = 1; i <= ds.Tables[0].Rows.Count - 1; i++)
                //{
                //    Employee emp = new Employee();

                //    emp.EmployeeID =  Convert.ToInt32( ds.Tables[0].Rows[i][0]);
                //    emp.Name = ds.Tables[0].Rows[i][1].ToString();
                //    emp.Gender = ds.Tables[0].Rows[i][2].ToString();
                //    emp.Salary = Convert.ToDecimal (ds.Tables[0].Rows[i][3]);
                //    listEmployee.Add(emp);
                //}
                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(listEmployee));
                return 1;
            }
        }
    }
}
