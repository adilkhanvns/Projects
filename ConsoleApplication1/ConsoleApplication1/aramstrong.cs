using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class aramstrong
    {
        static void Main()
        {
           int j,k, i = 157;
           int sum = 0;
           for (int temp = i; temp != 0; )
           {
               k = temp % 10;
               sum = sum + (k * k * k);
               temp = temp / 10;
           }
           if (sum == i && i > 1)
               Console.WriteLine("arstrong number");
           else
               Console.WriteLine("not aramstrong");
           Console.ReadLine();
        }
    }
}
