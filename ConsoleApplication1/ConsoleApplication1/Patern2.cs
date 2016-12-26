using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Patern2
    {
        static void Main()
        {

            for (int i = 6; i >=1; i--)
            {
                for (int j = i; j >= 1; j--)
                {
                    Console.Write(j);
                }
                Console.WriteLine();
            }
            Console.ReadLine();
            //output
            //    654321
            //    54321
            //    4321
            //    321
            //    21
            //    1
        }
    }
}
